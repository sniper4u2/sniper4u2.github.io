/* ==========================================================================
   GARGANTUA ENGINE — RELATIVISTIC RAY-MARCHED BLACK HOLE BACKGROUND
   sniper4u2.github.io · B13 · Clearance 55 · 2026

   Physics implemented (not faked with geometry):
     * Null-geodesic integration in the Schwarzschild metric via a leapfrog
       scheme with conserved angular momentum h^2 = |r x v|^2
       (accel = -1.5 * h^2 * r / |r|^5)  -> real gravitational lensing,
       photon ring + higher-order disk images (Einstein rings).
     * Shakura-Sunyaev thin disk temperature profile   T(r) ∝ r^(-3/4)
     * Planckian-locus (Tanner Helland) blackbody -> colour conversion
     * Special-relativistic Doppler shift + beaming  I_obs = I_em / (γ(1-β·n))³
     * Keplerian disk velocity  v = sqrt( M / (r - r_s) )
     * Procedural blackbody starfield (uniform-area sphere parameterisation,
       seam-free) + fbm interstellar dust lanes. Zero external textures.

   Post pipeline: ACES filmic tonemap (OutputPass) + UnrealBloom + custom
   anamorphic horizontal streak pass (Arri Ultra-Prime look).
   ========================================================================== */

import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

/* --------------------------------------------------------------------------
   1. QUALITY TIERS — integrator steps dominate cost. The governor starts at
   TIER_START and adapts from measured frame time (raise if idle headroom).
   -------------------------------------------------------------------------- */
const TIERS = [
  { steps: 170, step: 0.150, scale: 0.50, bloom: true, streak: false },
  { steps: 260, step: 0.105, scale: 0.65, bloom: true, streak: false },
  { steps: 380, step: 0.078, scale: 0.82, bloom: true, streak: true },
  { steps: 520, step: 0.058, scale: 1.00, bloom: true, streak: true }
];
const TIER_START = 2;
const TIER_MAX = TIERS.length - 1;

/* Verdict floor. The tier ladder ends at TIER 0, so hardware that cannot clear
   this frame rate even there is hardware for which this engine is the wrong
   answer - software rasterisation (SwiftShader / llvmpipe), a virtualised or
   blacklisted driver, a remote desktop. The governor hands off instead. */
const UNFIT_FPS = 10;

const VERTEX_SHADER = 'void main() { gl_Position = vec4(position, 1.0); }';


/* --------------------------------------------------------------------------
   2. FRAGMENT SHADER — tier-independent prelude (noise, blackbody, sky)
   -------------------------------------------------------------------------- */
const FRAG_COMMON = `
precision highp float;

#define PI         3.14159265358979323846
#define TAU        6.28318530717958647692
#define DEG_TO_RAD (PI / 180.0)

uniform float uTime;
uniform vec2  uResolution;
uniform vec3  uCamPos;
uniform vec3  uCamDir;
uniform vec3  uCamUp;
uniform float uFov;
uniform vec2  uOffset;      // NDC composition offset (rule-of-thirds framing)
uniform float uDiskIn;
uniform float uDiskOut;
uniform float uDiskGain;
uniform float uDiskSpin;
uniform float uStarGain;
uniform float uNebulaGain;
uniform float uExposure;
uniform float uSeed;

/* ---------------- hashing ---------------- */
float hash13(vec3 p3) {
  p3 = fract(p3 * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

vec3 hash33(vec3 p3) {
  p3 = fract(p3 * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yxz + 33.33);
  return fract((p3.xxy + p3.yxx) * p3.zyx);
}

/* ---------------- value noise / fbm ---------------- */
float vnoise(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);

  float n000 = hash13(i);
  float n100 = hash13(i + vec3(1.0, 0.0, 0.0));
  float n010 = hash13(i + vec3(0.0, 1.0, 0.0));
  float n110 = hash13(i + vec3(1.0, 1.0, 0.0));
  float n001 = hash13(i + vec3(0.0, 0.0, 1.0));
  float n101 = hash13(i + vec3(1.0, 0.0, 1.0));
  float n011 = hash13(i + vec3(0.0, 1.0, 1.0));
  float n111 = hash13(i + vec3(1.0, 1.0, 1.0));

  return mix(
    mix(mix(n000, n100, f.x), mix(n010, n110, f.x), f.y),
    mix(mix(n001, n101, f.x), mix(n011, n111, f.x), f.y),
    f.z
  );
}

float fbm3(vec3 p) {
  float a = 0.5;
  float s = 0.0;
  for (int i = 0; i < 4; i++) {
    s += a * vnoise(p);
    p = p * 2.03 + vec3(17.1, 9.7, 23.3);
    a *= 0.5;
  }
  return s;
}

/* ---------------- Planckian locus -> linear RGB ----------------
   Tanner Helland's fit of the Planckian locus; output linearised with a 2.2
   gamma so the HDR composer + ACES tonemap stay physically sane. */
vec3 blackbody(float kelvin) {
  float t = clamp(kelvin, 1000.0, 40000.0) / 100.0;
  vec3 c;

  if (t <= 66.0) {
    c.r = 255.0;
    c.g = 99.4708025861 * log(max(t, 1.0)) - 161.1195681661;
  } else {
    c.r = 329.698727446 * pow(max(t - 60.0, 1e-3), -0.1332047592);
    c.g = 288.1221695283 * pow(max(t - 60.0, 1e-3), -0.0755148492);
  }

  if (t >= 66.0) {
    c.b = 255.0;
  } else if (t <= 19.0) {
    c.b = 0.0;
  } else {
    c.b = 138.5177312231 * log(max(t - 10.0, 1e-3)) - 305.0447927307;
  }

  return pow(clamp(c, 0.0, 255.0) / 255.0, vec3(2.2));
}
`;

/* --------------------------------------------------------------------------
   3. FRAGMENT SHADER — sky (starfield + dust) and the geodesic integrator
   -------------------------------------------------------------------------- */
const FRAG_SKY = `
/* Uniform-area sphere parameterisation (u = lon/PI, v = sin(lat)) removes the
   pole clumping and the cube-face seams of naive cube-grid starfields. */
vec3 starLayer(vec3 dir, float scale, float threshold, float seed, float size) {
  vec2 p = vec2(atan(dir.z, dir.x) / PI, clamp(dir.y, -1.0, 1.0));
  float sf = max(sqrt(max(1.0 - p.y * p.y, 1e-4)), 0.34);  // keep discs round
  p *= scale;

  vec2 ip = floor(p);
  vec3 acc = vec3(0.0);

  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 id = ip + vec2(float(i), float(j));
      vec3 rnd = hash33(vec3(id, seed));

      if (rnd.x > threshold) {
        vec2 jit = (hash33(vec3(id * 1.37 + 7.13, seed)).xy - 0.5) * 0.74;
        vec2 d = p - (id + 0.5 + jit);
        d.x *= sf;

        float dist = length(d);
        float core = clamp(1.0 - dist / size, 0.0, 1.0);

        // tight core + faint halo: bloom turns the halo into a lens glint
        float amp = pow(core, 7.0) * 2.4 + pow(core, 1.7) * 0.16;

        // magnitude distribution: many faint, few dominant
        float mag = pow(hash13(vec3(id * 3.77, seed + 2.5)), 3.0);
        amp *= 0.05 + mag * 3.6;

        // spectral class: weighted to cool dwarfs, rare hot blue giants
        float temp = mix(2700.0, 16000.0, pow(rnd.y, 2.6));
        acc += blackbody(temp) * amp;
      }
    }
  }
  return acc;
}

vec3 skyRadiance(vec3 dir) {
  vec3 col = vec3(0.0);

  // galactic band, defined by a tilted plane normal
  vec3 n = normalize(vec3(0.36, 0.58, -0.73));
  float band = pow(clamp(1.0 - abs(dot(dir, n)), 0.0, 1.0), 3.2);

  vec3 q = dir * 2.7 + uSeed;
  float f1 = fbm3(q);
  float f2 = fbm3(q * 2.23 + 11.7);

  float glow = smoothstep(0.28, 0.95, f1);
  float dust = smoothstep(0.30, 0.86, f1 * 0.72 + f2 * 0.42);

  vec3 deep = vec3(0.012, 0.030, 0.055);
  vec3 warm = vec3(0.085, 0.040, 0.014);
  vec3 cool = vec3(0.010, 0.055, 0.075);

  col += mix(deep, warm, f2) * glow;
  col += cool * dust * 0.85;
  col += vec3(0.35, 0.30, 0.22) * pow(band, 5.0) * 0.18;   // bulge haze
  col *= band * uNebulaGain;

  // three star layers at different scales => depth parallax-free richness
  col += starLayer(dir, 26.0, 0.62, uSeed + 0.0, 0.42) * uStarGain;
  col += starLayer(dir, 61.0, 0.74, uSeed + 13.0, 0.40) * uStarGain * 0.62;
  col += starLayer(dir, 133.0, 0.86, uSeed + 29.0, 0.38) * uStarGain * 0.34;

  return col;
}
`;


/* --------------------------------------------------------------------------
   4. FRAGMENT SHADER — main(): ray generation + null-geodesic integration
   -------------------------------------------------------------------------- */
const FRAG_MAIN = `
void main() {
  /* ---- pinhole ray generation --------------------------------------- */
  vec2 uv = (gl_FragCoord.xy / uResolution.xy) * 2.0 - 1.0;
  uv.x *= uResolution.x / uResolution.y;
  uv -= uOffset;

  float tanHalf = tan(uFov * 0.5 * DEG_TO_RAD);
  vec3 forward = normalize(uCamDir);
  vec3 up = normalize(uCamUp);
  vec3 right = normalize(cross(forward, up));
  up = cross(right, forward);

  vec3 rayDir = normalize(forward + right * uv.x * tanHalf + up * uv.y * tanHalf);

  /* ---- conserved quantities (Schwarzschild, geometric units r_s = 1) -- */
  vec3 point = uCamPos;
  vec3 velocity = rayDir;
  vec3 Lvec = cross(point, velocity);
  float h2 = dot(Lvec, Lvec);

  vec3 color = vec3(0.0);
  float covered = 0.0;          // front-to-back opacity accumulation
  bool captured = false;

  vec3 prevPoint = point;
  vec3 finalDir = rayDir;
  float r = length(point);
  float rPrev = r;

  for (int i = 0; i < NSTEPS; i++) {
    rPrev = r;

    // far-field exit: deflection beyond ~60 r_s is not resolvable on screen
    if (rPrev > 60.0) break;
    // receding and clear of all lensing mass + disk -> nothing left to hit
    if (rPrev > 11.0 && dot(point, velocity) > 0.0) break;

    prevPoint = point;

    // adaptive step: fine near the horizon/photon sphere, coarse in the field
    float ds = STEP * (0.30 + 0.70 * clamp((rPrev - 1.0) * 0.14, 0.0, 1.0));

    point += velocity * ds;
    vec3 accel = -1.5 * h2 * point / pow(dot(point, point), 2.5);
    velocity += accel * ds;

    r = length(point);
    if (r > 1e-4) finalDir = normalize(point - prevPoint);

    // ---- (a) crossed the event horizon -> absorbed ------------------
    if (r < 1.0 && rPrev > 1.0) { captured = true; break; }
    // ---- (b) inside the photon sphere and falling in -> doomed ------
    if (r < 1.35 && dot(point, velocity) < 0.0) { captured = true; break; }

    // ---- (c) equatorial plane crossing -> accretion disk sample -----
    if (prevPoint.y * point.y < 0.0) {
      float lambda = -prevPoint.y / (point.y - prevPoint.y);
      vec3 hit = mix(prevPoint, point, lambda);
      float rr = length(hit);

      if (rr >= uDiskIn && rr <= uDiskOut) {
        float phi = atan(hit.z, hit.x);

        // Shakura-Sunyaev thin disk: T(r) ~ r^(-3/4).
        // 6600 K is the Planckian white point of the curve used below, so the
        // ISCO renders pure white -> cream -> deep amber outward (Gargantua).
        float temp = 6600.0 * pow(uDiskIn / rr, 0.80);

        // Keplerian orbital motion in the disk plane, v = sqrt(M/(r-r_s))
        vec3 posDir = normalize(hit);
        vec3 orbitDir = normalize(cross(vec3(0.0, 1.0, 0.0), posDir));
        float vMag = min(sqrt(1.0 / max(rr - 1.0, 0.30)), 0.68);
        vec3 diskVel = orbitDir * vMag;

        // special-relativistic Doppler factor of the emitter seen by the ray
        float gamma = 1.0 / sqrt(max(1.0 - dot(diskVel, diskVel), 1e-4));
        float doppler = 1.0 / (gamma * (1.0 + dot(diskVel, normalize(velocity))));
        temp *= doppler;                              // blue/red shift of T
        float beaming = pow(clamp(doppler, 0.35, 2.6), 3.0);   // I ~ delta^3

        // differentially sheared turbulence (inner rings orbit faster)
        float shear = uTime * uDiskSpin * pow(uDiskIn / rr, 1.5);
        vec2 hp = vec2(cos(phi + shear), sin(phi + shear)) * (rr * 0.34);
        float turb = fbm3(vec3(hp, rr * 0.55));
        turb = 0.42 + 0.95 * turb;

        // radial edge softness + optical thickness
        float edge = smoothstep(uDiskIn, uDiskIn + 0.28, rr) *
                     (1.0 - smoothstep(uDiskOut - 1.7, uDiskOut, rr));
        float alpha = clamp(edge * turb, 0.0, 1.0) * 0.82;

        // emissivity ~ T^4 -> steep radial falloff toward the ISCO
        float emiss = pow(uDiskIn / rr, 2.6) * 3.6 * beaming;

        vec3 emit = blackbody(temp) * emiss * uDiskGain;
        color += emit * alpha * (1.0 - covered);
        covered += alpha * (1.0 - covered);

        if (covered > 0.985) break;
      }
    }
  }

  // photon-sphere stragglers: inside the shadow and falling inward => black
  if (!captured && r < 2.6 && dot(point, velocity) < 0.0) captured = true;

  /* ---- background, gravitationally lensed ----------------------------- */
  if (!captured) {
    color += skyRadiance(finalDir) * (1.0 - covered);
  }

  gl_FragColor = vec4(max(color * uExposure, vec3(0.0)), 1.0);
}
`;

function buildFragment(tier) {
  const defs = '#define NSTEPS ' + tier.steps + '\n#define STEP ' + tier.step.toFixed(4) + '\n';
  return FRAG_COMMON + defs + FRAG_SKY + FRAG_MAIN;
}


/* --------------------------------------------------------------------------
   5. ANAMORPHIC STREAK PASS — horizontal blue lens streaks over the HDR
   buffer (classic anamorphic blockbuster lens signature).
   -------------------------------------------------------------------------- */
const ANAMORPHIC_SHADER = {
  uniforms: {
    tDiffuse: { value: null },
    uResolution: { value: new THREE.Vector2(1, 1) },
    uIntensity: { value: 0.42 },
    uThreshold: { value: 0.62 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2  uResolution;
    uniform float uIntensity;
    uniform float uThreshold;
    varying vec2 vUv;

    void main() {
      vec3 base = texture2D(tDiffuse, vUv).rgb;

      vec3 streak = vec3(0.0);
      float wsum = 0.0;
      for (int i = -10; i <= 10; i++) {
        float fi = float(i);
        float w = exp(-fi * fi * 0.045);
        vec2 off = vec2(fi * 3.1 / uResolution.x, 0.0);
        vec3 s = texture2D(tDiffuse, vUv + off).rgb;
        float lum = max(dot(s, vec3(0.2126, 0.7152, 0.0722)) - uThreshold, 0.0);
        streak += s * w * lum;
        wsum += w;
      }
      streak /= max(wsum, 1e-4);

      // anamorphic coatings flare cool and cyan-biased
      vec3 flare = streak * vec3(0.62, 0.90, 1.35);
      gl_FragColor = vec4(base + flare * uIntensity, 1.0);
    }
  `
};

/* --------------------------------------------------------------------------
   6. SCENE ASSEMBLY
   -------------------------------------------------------------------------- */
function createRenderer(canvas) {
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: false,
    alpha: false,
    powerPreference: 'high-performance',
    preserveDrawingBuffer: false,
    stencil: false
  });
  renderer.setClearColor(0x000000, 1);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.autoClear = true;
  return renderer;
}

function buildUniforms() {
  return {
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(1, 1) },
    uCamPos: { value: new THREE.Vector3(0, 2.2, 15.4) },
    uCamDir: { value: new THREE.Vector3(0, 0, -1) },
    uCamUp: { value: new THREE.Vector3(0, 1, 0) },
    uFov: { value: 44 },
    uOffset: { value: new THREE.Vector2(0.26, 0.04) },
    uDiskIn: { value: 2.6 },
    uDiskOut: { value: 7.2 },
    uDiskGain: { value: 1.0 },
    uDiskSpin: { value: 0.085 },
    uStarGain: { value: 1.0 },
    uNebulaGain: { value: 1.0 },
    uExposure: { value: 0.72 },
    uSeed: { value: 3.17 }
  };
}


/* --------------------------------------------------------------------------
   7. CAMERA CHOREOGRAPHY
   Locked-off cinematographic move: slow azimuth orbit + elevation breathing,
   gradual dolly-out on scroll, sub-degree dutch roll, pointer parallax.
   -------------------------------------------------------------------------- */
const DEG = Math.PI / 180;

function choreographCamera(state, out) {
  const s = state.scroll;                      // 0..1 document progress
  const t = state.clock;

  const azimuth = t * 0.0155
    + Math.sin(t * 0.043) * 0.055
    + state.pointer.x * 0.15;

  const elevation = (8.4
    + Math.sin(t * 0.052) * 1.5
    + Math.sin(t * 0.017) * 0.9
    + s * 7.5
    - state.pointer.y * 0.10) * DEG;

  const distance = 15.4 + s * 7.2;

  const cx = Math.cos(elevation);
  out.pos.set(
    distance * cx * Math.cos(azimuth),
    distance * Math.sin(elevation),
    distance * cx * Math.sin(azimuth)
  );

  // aim at the singularity; framing on screen is driven by uOffset
  out.dir.copy(out.pos).negate().normalize();

  // sub-degree dutch roll -> "handheld-on-a-crane" cinematic bias
  out.up.set(0, 1, 0).applyAxisAngle(out.dir, -1.6 * DEG + Math.sin(t * 0.021) * 0.5 * DEG);
  out.up.normalize();
}

/* --------------------------------------------------------------------------
   8. BOOTSTRAP
   -------------------------------------------------------------------------- */
export function initGargantua(options = {}) {
  /* One-way latch, declared before any call site: once the engine has failed it
     never revives, so a late "recovery" can never yank the frame back from live
     footage. Declared first to keep it out of the temporal dead zone. */
  let dead = false;

  const canvas = document.getElementById('universe');
  if (!canvas) return fail('no-canvas');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const opts = Object.assign({
    diskGain: 1.0,
    starGain: 1.0,
    nebulaGain: 1.0,
    exposure: 0.72,
    offset: null,
    onReady: null
  }, options);

  /* ---- failure contract ---------------------------------------------------
     Silence is not a state. Every path that cannot paint a raymarched frame
     announces itself with `gargantua:dead` + a machine-readable reason, so the
     photographic tier downstream can arm itself instead of leaving the reader
     on a gradient. The inverse signal is `gargantua:ready` on first frame. */
  function fail(reason) {
    dead = true;
    window.__GARGANTUA_DEAD__ = reason;
    document.body.classList.add('no-3d');
    if (reason === 'no-webgl' || reason === 'render-error' || reason === 'context-lost') {
      document.body.classList.add('no-webgl');
    }
    /* Stop advertising an API for an engine that cannot draw. app.js resolves
       the tier from this global on every grade change, so removing it is what
       makes the handoff take effect on the very next section rather than after
       a reload. (Ordinary property assignment, so it is deletable.) */
    if (window.Gargantua) {
      try { delete window.Gargantua; } catch (e) { window.Gargantua = null; }
    }
    console.warn('[gargantua] engine down (' + reason + ') - handing off to the photographic tier');
    document.dispatchEvent(new CustomEvent('gargantua:dead', { detail: { reason: reason } }));
    return null;
  }

  /* Reduced motion: a full-screen animated shader is exactly what the setting
     exists to suppress. Do not "solve" it by slowing the clock down by 88% and
     calling it accessible - hand the frame to the static poster tier, where
     nothing moves at all. */
  if (reduceMotion) return fail('reduced-motion');

  let renderer, composer, bloomPass, streakPass, scene, camera, material, mesh;
  const uniforms = buildUniforms();
  uniforms.uDiskGain.value = opts.diskGain;
  uniforms.uStarGain.value = opts.starGain;
  uniforms.uNebulaGain.value = opts.nebulaGain;
  uniforms.uExposure.value = opts.exposure;

  let tierIdx = TIER_START;
  const state = {
    clock: 0,
    scroll: 0,
    scrollTarget: 0,
    pointer: new THREE.Vector2(0, 0),
    pointerTarget: new THREE.Vector2(0, 0),
    paused: false
  };
  const rig = {
    pos: new THREE.Vector3(),
    dir: new THREE.Vector3(0, 0, -1),
    up: new THREE.Vector3(0, 1, 0)
  };

  try {
    renderer = createRenderer(canvas);
  } catch (err) {
    console.warn('[gargantua] WebGLRenderer construction failed:', err);
    return fail('no-webgl');
  }

  /* GL contexts are reclaimed under memory pressure - common on laptops with
     many tabs open, and silent by default. This is the exact class of failure
     the photographic fallback exists for, so announce it and hand off. */
  canvas.addEventListener('webglcontextlost', function (event) {
    event.preventDefault();
    cancelAnimationFrame(rafId);
    fail('context-lost');
  }, false);

  /* ---- scene: one full-screen quad, everything happens in the shader --- */
  camera = new THREE.Camera();
  camera.position.z = 1;
  scene = new THREE.Scene();

  const vs = VERTEX_SHADER;
  const fs = buildFragment(TIERS[tierIdx]);

  material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vs,
    fragmentShader: fs,
    depthTest: false,
    depthWrite: false
  });

  mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
  mesh.frustumCulled = false;
  scene.add(mesh);

  /* ---- HDR post chain: bloom -> anamorphic streak -> ACES out --------- */
  composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));

  bloomPass = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.92, 0.72, 0.55);
  composer.addPass(bloomPass);

  streakPass = new ShaderPass(ANAMORPHIC_SHADER);
  composer.addPass(streakPass);

  composer.addPass(new OutputPass());

  /* ======================================================================
     RUNTIME WIRING - viewport, tier swap, render loop, events, public API.
     All of it shares this closure, so no extra indirection is needed.
     ====================================================================== */

  /* ---- viewport / tier plumbing --------------------------------------- */
  function resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const ratio = dpr * TIERS[tierIdx].scale;

    renderer.setPixelRatio(ratio);
    renderer.setSize(w, h, false);          // CSS size stays 100vw/100vh
    composer.setPixelRatio(ratio);
    composer.setSize(w, h);

    const buf = renderer.getDrawingBufferSize(new THREE.Vector2());
    uniforms.uResolution.value.set(buf.x, buf.y);
    streakPass.uniforms.uResolution.value.set(buf.x, buf.y);

    // responsive composition: rule-of-thirds on desktop, above the fold on mobile
    const wide = w >= 1000;
    uniforms.uOffset.value.set(wide ? 0.26 : 0.0, wide ? 0.05 : 0.24);
    if (opts.offset) uniforms.uOffset.value.set(opts.offset[0], opts.offset[1]);
  }

  function applyTier(next) {
    if (next === tierIdx || next < 0 || next > TIER_MAX) return;
    tierIdx = next;
    const tier = TIERS[tierIdx];

    material.fragmentShader = buildFragment(tier);
    material.needsUpdate = true;

    bloomPass.enabled = tier.bloom;
    streakPass.enabled = tier.streak;
    resize();
  }

  function frame(now) {
    /* Latched failure: stop scheduling work entirely. The photographic tier
       owns the frame from here on; two engines must never both be compositing. */
    if (dead) return;

    rafId = requestAnimationFrame(frame);

    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;

    if (!state.paused) {
      const k = Math.min(1, dt * 1.8);
      state.clock += dt * (reduceMotion ? 0.12 : 1.0);
      state.scroll += (state.scrollTarget - state.scroll) * Math.min(1, dt * 2.4);
      state.pointer.x += (state.pointerTarget.x - state.pointer.x) * k;
      state.pointer.y += (state.pointerTarget.y - state.pointer.y) * k;

      uniforms.uTime.value = state.clock;

      choreographCamera(state, rig);
      uniforms.uCamPos.value.copy(rig.pos);
      uniforms.uCamDir.value.copy(rig.dir);
      uniforms.uCamUp.value.copy(rig.up);
      uniforms.uFov.value = 44 + state.scroll * 4;

      /* A shader that fails to compile or link only surfaces here, on the first
         draw - three.js throws instead of painting. Catch it on the draw path,
         not at construction time, and hand off. */
      try {
        composer.render(dt);
      } catch (err) {
        console.warn('[gargantua] draw failed:', err);
        fail('render-error');
        return;
      }
    }

    if (firstFrame) {
      firstFrame = false;
      window.__GARGANTUA_READY__ = true;
      canvas.classList.add('bh-live');
      document.body.classList.remove('no-webgl');
      document.dispatchEvent(new CustomEvent('gargantua:ready'));
      if (typeof opts.onReady === 'function') opts.onReady();
    }

    /* ---- adaptive quality governor: measured frame time, not guesswork -- */
    frames++;
    const elapsed = now - fpsWindowStart;
    if (elapsed > 1400) {
      const fps = (frames * 1000) / elapsed;
      frames = 0;
      fpsWindowStart = now;

      if (cooldown > 0) {
        cooldown--;
      } else if (fps < 32 && tierIdx > 0) {
        applyTier(tierIdx - 1);
        cooldown = 4;
      } else if (fps > 58 && tierIdx < TIER_MAX) {
        applyTier(tierIdx + 1);
        cooldown = 8;
      }

      /* ---- verdict floor ------------------------------------------------
         Three consecutive windows is ~4 s of evidence, not one stutter. At the
         bottom tier with no headroom left, the honest answer is that this GPU
         cannot run the engine - and the footage tier decodes through the video
         pipeline, which is hardware-accelerated on almost exactly the machines
         where WebGL is not. A one-time handoff, never a downgrade loop. */
      if (tierIdx === 0 && fps < UNFIT_FPS) {
        slowStrikes++;
        if (slowStrikes >= 3) {
          cancelAnimationFrame(rafId);
          console.warn('[gargantua] unfit for this GPU: ' + fps.toFixed(1) + ' fps at the minimum tier');
          fail('too-slow');
          return;                        /* dead latch stops the next frame  */
        }
      } else {
        slowStrikes = 0;
      }
    }
  }


  /* ---- loop bookkeeping ------------------------------------------------ */
  let last = performance.now();
  let rafId = 0;
  let frames = 0;
  let fpsWindowStart = last;
  let cooldown = 0;
  let slowStrikes = 0;
  let firstFrame = true;
  let resizeTimer = 0;

  /* ---- events ---------------------------------------------------------- */
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  }

  function onScroll() {
    const max = Math.max(
      (document.documentElement.scrollHeight || 0) - window.innerHeight, 1
    );
    state.scrollTarget = Math.min(Math.max((window.scrollY || 0) / max, 0), 1);
  }

  function onPointerMove(e) {
    state.pointerTarget.set(
      (e.clientX / window.innerWidth) * 2 - 1,
      (e.clientY / window.innerHeight) * 2 - 1
    );
  }

  function onVisibility() {
    state.paused = document.hidden;
    last = performance.now();
  }

  window.addEventListener('resize', onResize, { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('mousemove', onPointerMove, { passive: true });
  document.addEventListener('visibilitychange', onVisibility);

  /* ---- boot ------------------------------------------------------------ */
  resize();
  onScroll();
  state.scroll = state.scrollTarget;
  choreographCamera(state, rig);
  uniforms.uCamPos.value.copy(rig.pos);
  uniforms.uCamDir.value.copy(rig.dir);
  uniforms.uCamUp.value.copy(rig.up);

  rafId = requestAnimationFrame(frame);

  const api = {
    uniforms: uniforms,
    get tier() { return tierIdx; },
    setTier(i) { applyTier(i); },
    setScroll(p) { state.scrollTarget = Math.min(Math.max(p, 0), 1); },
    setPointer(nx, ny) { state.pointerTarget.set(nx, ny); },
    setPaused(v) { state.paused = !!v; },
    dispose() {
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onPointerMove);
      document.removeEventListener('visibilitychange', onVisibility);
      mesh.geometry.dispose();
      material.dispose();
      composer.dispose();
      renderer.dispose();
      if (window.Gargantua === api) delete window.Gargantua;
    }
  };

  window.Gargantua = api;
  return api;
}

/* --------------------------------------------------------------------------
   9. SELF-BOOT — module is loaded as `<script type="module">` from index.html
   -------------------------------------------------------------------------- */
function boot() {
  initGargantua({
    diskGain: 1.0,
    starGain: 1.0,
    nebulaGain: 1.0,
    exposure: 0.72
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
