'use strict';

/* ==========================================================================
   SOFIENE.AI — SCENIC ENGINE  (scene.js v1.0)
   --------------------------------------------------------------------------
   A cinematic frame that cannot fail, and telemetry that is not theatre.

   RENDER MODEL — why this is not a shader:
     Every layer is a vector/declarative surface (CSS gradients, SVG tiles,
     masked rings, 3D transforms) composited by the browser's own rasterizer at
     whatever the device pixel ratio is. There is no custom GPU program, no
     required render loop and no drawing buffer, so:
       - resolution is native everywhere: 1080p, 4K, 8K, DPR 1/2/3 stay crisp,
         because nothing is ever rendered into a fixed-size bitmap;
       - it cannot die on a software rasterizer (SwiftShader / llvmpipe / RDP),
         because the work is plane compositing, not fragment shading;
       - the JS driver sleeps once motion converges, and a hidden document is
         suspended outright (samplers cancelled, no telemetry emitted), so a
         backgrounded tab costs nothing; while the tab is VISIBLE the browser
         compositor does keep painting the drifting plane layers - that is the
         scene, and the governor steps the cost down if frames drop.

   TELEMETRY — every number on the HUD is measured at runtime:
     GPU identity comes from a throwaway WebGL context that is released
     immediately; frame rate is counted from real animation frames (including
     the worst frame in the window); LCP / CLS / long-task blocking come from
     PerformanceObserver; navigation and font timings come from the browser.
     Nothing is hard-coded, and anything unmeasurable reports "n/a".

   GOVERNOR — adaptive appearance, never a broken page:
     cinema -> balanced -> still, driven by a real capability probe
     (reduced-motion, save-data, software GL, CPU class) and by measured frame
     rate. The ladder only ever removes cost. One promotion back to cinema is
     allowed after a long hysteresis window so the tier cannot oscillate.
   ========================================================================== */

(function () {
  var root = document.documentElement;
  var sceneEl = document.getElementById('scene');

  /* ====================== small utilities ====================== */
  function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }
  function now() { return (window.performance && performance.now) ? performance.now() : Date.now(); }
  function round(v, d) { var m = Math.pow(10, d || 0); return Math.round(v * m) / m; }
  function emit(name, detail) {
    try { document.dispatchEvent(new CustomEvent(name, { detail: detail })); } catch (e) {}
  }

  /* ====================== capability probe ====================== */
  var PROBE = {
    gl: 'none', gpu: 'unknown', software: false, maxTexture: 0,
    dpr: 1, vw: 0, vh: 0, pxW: 0, pxH: 0,
    cores: (navigator.hardwareConcurrency || 0), mem: (navigator.deviceMemory || 0),
    net: 'unknown', saveData: false, reducedMotion: false, touch: false
  };

  /* A 1x1 context, read, then explicitly released - no GL context is kept alive
     just to print a string on a card. */
  function probeGL() {
    var out = { gl: 'none', gpu: 'unknown', software: false, maxTexture: 0 };
    var c, gl, gl2;
    try {
      c = document.createElement('canvas');
      c.width = 1; c.height = 1;
      gl2 = c.getContext('webgl2');
      gl = gl2 || c.getContext('webgl') || c.getContext('experimental-webgl');
      if (!gl) { return out; }
      out.gl = gl2 ? 'webgl2' : 'webgl';
      var dbg = gl.getExtension('WEBGL_debug_renderer_info');
      var raw = null;
      try { raw = dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER); } catch (e) { raw = null; }
      out.gpu = raw ? String(raw) : 'masked';
      try { out.maxTexture = gl.getParameter(gl.MAX_TEXTURE_SIZE) || 0; } catch (e) {}
      /* A hardware-name allowlist wins over a virtualizer token: a machine that
         names a real GPU is real even if the string also says "virtual". */
      var hw = /apple|nvidia|geforce|quadro|radeon|amd|intel|iris|uhd|arc|adreno|mali|powervr|videocore|tensor/i.test(out.gpu);
      var sw = /swiftshader|llvmpipe|softpipe|software|basic render|mesa offscreen|virtualbox|vmware|parallels|qemu|virgl|warp/i.test(out.gpu);
      out.software = !hw && sw;
      var lose = gl.getExtension('WEBGL_lose_context');
      if (lose && lose.loseContext) { lose.loseContext(); }
    } catch (e) {
      out.gpu = 'blocked';
    }
    return out;
  }

  function probeDevice() {
    var mq = function (q) { try { return window.matchMedia(q).matches; } catch (e) { return false; } };
    PROBE.reducedMotion = mq('(prefers-reduced-motion: reduce)');
    PROBE.touch = mq('(hover: none) and (pointer: coarse)');
    var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (conn) {
      PROBE.net = conn.effectiveType || 'unknown';
      PROBE.saveData = !!conn.saveData;
    }
    PROBE.dpr = round(window.devicePixelRatio || 1, 2);
    PROBE.vw = window.innerWidth;
    PROBE.vh = window.innerHeight;
    PROBE.pxW = Math.round(PROBE.vw * PROBE.dpr);
    PROBE.pxH = Math.round(PROBE.vh * PROBE.dpr);
  }

  var GL = probeGL();
  probeDevice();
  /* ====================== tier arbitration ====================== */
  /* Ordered hard gates: first match wins and the reason is reported verbatim,
     so the HUD never claims "optimised" when what happened was a refusal. */
  function initialTier() {
    /* An explicit ?tier= override outranks the probe: whoever is demoing on a
       laptop that cooks itself should not have to argue with telemetry. */
    var forced = null;
    try { forced = new URLSearchParams(location.search).get('tier'); } catch (e) {}
    if (forced === 'cinema' || forced === 'balanced' || forced === 'still') {
      return { tier: forced, reason: 'url-override' };
    }
    if (PROBE.reducedMotion) return { tier: 'still', reason: 'prefers-reduced-motion' };
    if (PROBE.saveData) return { tier: 'still', reason: 'save-data' };
    if (/^(slow-2g|2g)$/.test(PROBE.net)) return { tier: 'still', reason: 'network:' + PROBE.net };
    if (GL.software) return { tier: 'balanced', reason: 'software-raster' };
    if (PROBE.cores && PROBE.cores <= 2) return { tier: 'balanced', reason: 'cpu-class:' + PROBE.cores };
    return { tier: 'cinema', reason: 'nominal' };
  }

  var STATE = { tier: 'cinema', reason: 'boot', promotionsLeft: 1, ready: false, destroyed: false };

  /* ====================== frame-rate sampler ====================== */
  var FRAME = { samples: [], frames: 0, fps: 0, fpsMin: 0, worst: 0, last: 0, winT0: 0, raf: 0 };

  function frameTick(t) {
    if (!FRAME.winT0) { FRAME.winT0 = t; FRAME.last = t; }
    var dt = t - FRAME.last;
    FRAME.last = t;
    if (dt > FRAME.worst) { FRAME.worst = dt; }
    FRAME.frames++;
    if (t - FRAME.winT0 >= 1000) {
      var fps = FRAME.frames * 1000 / (t - FRAME.winT0);
      FRAME.frames = 0;
      FRAME.winT0 = t;
      FRAME.samples.push(fps);
      if (FRAME.samples.length > 6) { FRAME.samples.shift(); }
      FRAME.fps = fps;
      if (!FRAME.fpsMin || fps < FRAME.fpsMin) { FRAME.fpsMin = fps; }
      governor(fps);
      emit('scenic:telemetry', telemetry());
    }
    if (!STATE.destroyed) { FRAME.raf = requestAnimationFrame(frameTick); }
  }

  function startFrameSampler() {
    if (STATE.tier === 'still') {
      /* One short burst is still measured in the still tier so the card can
         report a real number for the machine, then the loop stops for good. */
      var t0 = 0, frames = 0;
      var burst = function (t) {
        if (!t0) { t0 = t; }
        frames++;
        if (t - t0 < 400) { requestAnimationFrame(burst); return; }
        FRAME.fps = frames * 1000 / (t - t0);
        FRAME.fpsMin = FRAME.fps;
        FRAME.samples.push(FRAME.fps);
        emit('scenic:telemetry', telemetry());
      };
      requestAnimationFrame(burst);
      return;
    }
    FRAME.raf = requestAnimationFrame(frameTick);
  }

  /* ====================== governor ====================== */
  var GOV = { slow: 0, fast: 0, lastChange: 0 };

  function setTier(tier, reason) {
    if (STATE.tier === tier) { return; }
    STATE.tier = tier;
    STATE.reason = reason;
    root.setAttribute('data-tier', tier);
    root.setAttribute('data-tier-reason', reason);
    GOV.lastChange = now();
    GOV.slow = 0; GOV.fast = 0;
    emit('scenic:tier', { tier: tier, reason: reason });
  }

  function governor(fps) {
    if (now() - GOV.lastChange < 6000) { return; }              /* settle window */
    if (fps < 42) { GOV.slow++; GOV.fast = 0; }
    else if (fps > 56) { GOV.fast++; GOV.slow = 0; }
    else { GOV.slow = 0; GOV.fast = 0; }

    var stamp = 'measured-fps:' + round(fps, 1);

    if (GOV.slow >= 3) {
      GOV.slow = 0;
      if (STATE.tier === 'cinema') { setTier('balanced', stamp); }
      else if (STATE.tier === 'balanced') { setTier('still', stamp); }
      return;
    }
    if (GOV.fast >= 12 && STATE.tier === 'balanced' && STATE.promotionsLeft > 0) {
      var hardGate = PROBE.reducedMotion || PROBE.saveData || /^(slow-2g|2g)$/.test(PROBE.net);
      if (!hardGate) {
        STATE.promotionsLeft--;
        GOV.fast = 0;
        setTier('cinema', 'promoted:' + round(fps, 1));
      }
    }
  }

  /* ====================== paint / layout telemetry ====================== */
  var PAINT = { lcp: 0, cls: 0, blocked: 0, longTasks: 0, fonts: -1, dcl: -1, load: -1, ttfb: -1, domNodes: 0 };
  var NAV_T0 = now();

  function observePaint() {
    if (!('PerformanceObserver' in window)) { return; }
    try {
      new PerformanceObserver(function (list) {
        var es = list.getEntries();
        for (var i = 0; i < es.length; i++) { PAINT.lcp = es[i].startTime; }
      }).observe({ type: 'largest-contentful-paint', buffered: true });
    } catch (e) {}
    try {
      new PerformanceObserver(function (list) {
        var es = list.getEntries();
        for (var i = 0; i < es.length; i++) { if (!es[i].hadRecentInput) { PAINT.cls += es[i].value; } }
      }).observe({ type: 'layout-shift', buffered: true });
    } catch (e) {}
    try {
      new PerformanceObserver(function (list) {
        var es = list.getEntries();
        for (var i = 0; i < es.length; i++) {
          PAINT.longTasks++;
          PAINT.blocked += Math.max(0, es[i].duration - 50);
        }
      }).observe({ type: 'longtask', buffered: true });
    } catch (e) {}
  }

  function navigationTimings() {
    try {
      var nav = performance.getEntriesByType('navigation')[0];
      if (nav) {
        PAINT.ttfb = nav.responseStart;
        PAINT.dcl = nav.domContentLoadedEventEnd;
        PAINT.load = nav.loadEventEnd || nav.duration;
      }
    } catch (e) {}
    try { PAINT.domNodes = document.getElementsByTagName('*').length; } catch (e) {}
  }
  /* ====================== motion driver ====================== */
  /* Pointer and scroll feed eased CSS custom properties. The loop terminates
     itself the moment motion converges, so an idle page runs zero JS. */
  var MOTION = {
    mx: 0, my: 0, tmx: 0, tmy: 0,     /* pointer: current + target, -1..1 */
    sc: 0, tsc: 0,                    /* scroll progress 0..1 */
    vel: 0,                           /* scroll velocity, feeds streak opacity */
    raf: 0, live: false
  };

  function writeVars() {
    if (!sceneEl) { return; }
    var s = sceneEl.style;
    s.setProperty('--mx', String(round(MOTION.mx, 4)));
    s.setProperty('--my', String(round(MOTION.my, 4)));
    s.setProperty('--sc', String(round(MOTION.sc, 5)));
    s.setProperty('--vel', String(round(clamp(MOTION.vel, 0, 1), 3)));
  }

  function motionLoop() {
    var dx = MOTION.tmx - MOTION.mx;
    var dy = MOTION.tmy - MOTION.my;
    var ds = MOTION.tsc - MOTION.sc;

    MOTION.mx += dx * 0.045;
    MOTION.my += dy * 0.045;
    MOTION.sc += ds * 0.06;
    MOTION.vel += (0 - MOTION.vel) * 0.08;
    if (MOTION.vel < 0.004) { MOTION.vel = 0; }

    writeVars();

    var energy = Math.abs(dx) + Math.abs(dy) + Math.abs(ds) + MOTION.vel;
    if (energy > 0.0008) { MOTION.raf = requestAnimationFrame(motionLoop); }
    else { MOTION.raf = 0; MOTION.live = false; }
  }

  function kick() {
    if (STATE.tier === 'still' || STATE.destroyed) { return; }
    if (!MOTION.raf) { MOTION.raf = requestAnimationFrame(motionLoop); MOTION.live = true; }
  }

  function onPointer(e) {
    if (STATE.tier === 'still') { return; }
    if (!e || typeof e.clientX !== 'number') { return; }
    MOTION.tmx = clamp((e.clientX / window.innerWidth) * 2 - 1, -1, 1);
    MOTION.tmy = clamp((e.clientY / window.innerHeight) * 2 - 1, -1, 1);
    kick();
  }

  function onScroll() {
    if (STATE.tier === 'still') { return; }
    var doc = document.documentElement;
    var max = Math.max(1, (doc.scrollHeight || 1) - window.innerHeight);
    var next = clamp(((window.pageYOffset || doc.scrollTop || 0)) / max, 0, 1);
    MOTION.vel = clamp(MOTION.vel + Math.abs(next - MOTION.tsc) * 9, 0, 1);
    MOTION.tsc = next;
    kick();
  }

  function onResize() {
    probeDevice();
    root.style.setProperty('--vw', PROBE.vw + 'px');
    root.style.setProperty('--vh', PROBE.vh + 'px');
  }

  /* ====================== director interface ====================== */
  /* Key names are kept identical to the portfolio's original cinematography
     table (brightness / saturate / contrast / x / y / zoom / disk) so section
     intent survives the engine swap unchanged. CSS tweens these targets via
     @property, so JS writes once per section change and then stops. */
  function setGrade(g) {
    if (!sceneEl || !g) { return; }
    var s = sceneEl.style;
    var ink = typeof g.brightness === 'number' ? g.brightness : 0.72;
    var gain = typeof g.disk === 'number' ? g.disk : 1;
    var sat = typeof g.saturate === 'number' ? g.saturate : 1.05;
    var con = typeof g.contrast === 'number' ? g.contrast : 1.06;
    var x = typeof g.x === 'number' ? g.x : 0;
    var y = typeof g.y === 'number' ? g.y : 0;
    var zoom = typeof g.zoom === 'number' ? g.zoom : 1;

    s.setProperty('--ink', String(ink));
    s.setProperty('--gain', String(gain));
    s.setProperty('--sat', String(sat));
    s.setProperty('--con', String(con));
    s.setProperty('--zoom', String(zoom));
    s.setProperty('--pan', String(round(x * 0.42, 2)) + 'px');
    s.setProperty('--rise', String(round(y * 1.15, 2)) + 'px');
  }

  function setShot(name) {
    if (!sceneEl || !name) { return; }
    sceneEl.setAttribute('data-shot', name);
  }
  /* ====================== telemetry snapshot ====================== */
  function telemetry() {
    var measured = FRAME.samples.length > 1;
    return {
      engine: 'scenic/1.0',
      tier: STATE.tier,
      reason: STATE.reason,
      gpu: GL.gpu,
      gl: GL.gl,
      software: GL.software,
      maxTexture: GL.maxTexture,
      dpr: PROBE.dpr,
      css: PROBE.vw + '\u00d7' + PROBE.vh,
      px: PROBE.pxW + '\u00d7' + PROBE.pxH,
      pxW: PROBE.pxW, pxH: PROBE.pxH,
      fps: measured ? round(FRAME.fps, 1) : null,
      fpsMin: FRAME.fpsMin ? round(FRAME.fpsMin, 1) : null,
      worstFrame: FRAME.worst ? round(FRAME.worst, 1) : null,
      samples: FRAME.samples.length,
      cores: PROBE.cores || null,
      mem: PROBE.mem || null,
      net: PROBE.net,
      saveData: PROBE.saveData,
      reducedMotion: PROBE.reducedMotion,
      touch: PROBE.touch,
      lcp: PAINT.lcp ? round(PAINT.lcp) : null,
      cls: round(PAINT.cls, 4),
      blocked: round(PAINT.blocked, 1),
      longTasks: PAINT.longTasks,
      fonts: PAINT.fonts >= 0 ? round(PAINT.fonts) : null,
      dcl: PAINT.dcl >= 0 ? round(PAINT.dcl) : null,
      load: PAINT.load >= 0 ? round(PAINT.load) : null,
      ttfb: PAINT.ttfb >= 0 ? round(PAINT.ttfb) : null,
      domNodes: PAINT.domNodes,
      idle: !MOTION.live,
      layers: sceneEl ? sceneEl.getElementsByTagName('*').length : 0,
      uptime: round(now() - NAV_T0),
      /**/ version: '1.0'
    };
  }

  /* ====================== boot gates ====================== */
  /* Four gates, four real signals. The shutter never opens on a timer: it opens
     when the document is parsed, the scene has painted its first frame, the
     self-hosted faces are active, and the capability probe has returned. */
  var GATES = [
    { id: 'dom', label: 'document parsed', ok: false, ms: -1 },
    { id: 'scene', label: 'scene composed', ok: false, ms: -1 },
    { id: 'fonts', label: 'type faces active', ok: false, ms: -1 },
    { id: 'probe', label: 'capability probe', ok: false, ms: -1 }
  ];

  function passGate(id, extra) {
    var g = null;
    for (var i = 0; i < GATES.length; i++) { if (GATES[i].id === id) { g = GATES[i]; } }
    if (!g || g.ok) { return; }
    g.ok = true;
    g.ms = round(now() - NAV_T0);
    g.extra = extra || '';
    emit('scenic:gate', { gate: g, passed: GATES.filter(function (x) { return x.ok; }).length, total: GATES.length });
  }

  function boot() {
    var first = initialTier();
    STATE.tier = first.tier;
    STATE.reason = first.reason;
    /* A forced tier is a standing instruction: the governor may still step it
       down if frames collapse, but it never promotes back out of it. */
    if (STATE.reason === 'url-override') { STATE.promotionsLeft = 0; }
    root.setAttribute('data-tier', STATE.tier);
    root.setAttribute('data-tier-reason', STATE.reason);
    root.setAttribute('data-motion', STATE.tier === 'still' ? 'still' : 'live');
    onResize();
    writeVars();

    passGate('dom');
    passGate('probe', GL.software ? 'software raster detected' : (GL.gpu || '').slice(0, 40));

    /* first composited frame of the scene */
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        passGate('scene', telemetry().layers + ' layers');
        STATE.ready = true;
        emit('scenic:ready', telemetry());
        startFrameSampler();
      });
    });

    /* self-hosted faces */
    if (document.fonts && document.fonts.ready && document.fonts.ready.then) {
      document.fonts.ready.then(function () {
        PAINT.fonts = now() - NAV_T0;
        passGate('fonts', Math.round(PAINT.fonts) + ' ms');
        emit('scenic:telemetry', telemetry());
      })['catch'](function () { passGate('fonts', 'unavailable'); });
    } else {
      passGate('fonts', 'unsupported');
    }

    observePaint();
    navigationTimings();
    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pointermove', onPointer, { passive: true });
    window.addEventListener('pointerdown', onPointer, { passive: true });
    window.addEventListener('pagehide', function () { STATE.destroyed = true; });

    /* A hidden document does no work. Both samplers stop, and the resume path
       resets the measurement window so the hidden gap can never enter the
       frame statistics ("worst frame 600000 ms") or the governor's verdict. */
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        if (FRAME.raf) { cancelAnimationFrame(FRAME.raf); FRAME.raf = 0; }
        if (MOTION.raf) { cancelAnimationFrame(MOTION.raf); MOTION.raf = 0; MOTION.live = false; }
        return;
      }
      if (STATE.destroyed || STATE.tier === 'still') { return; }
      FRAME.winT0 = 0; FRAME.frames = 0; FRAME.last = 0; FRAME.worst = 0;
      GOV.slow = 0; GOV.fast = 0;
      startFrameSampler();
    }, { passive: true });

    /* Late navigation timing - loadEventEnd does not exist until load fires. */
    window.addEventListener('load', function () {
      /* Read it on the next task: during the load event itself loadEventEnd is
         still 0 in Chromium, so an immediate read would report "load 0 ms". */
      window.setTimeout(function () {
        navigationTimings();
        emit('scenic:telemetry', telemetry());
      }, 150);
    }, { once: true });

    /* A tier change re-arms the sampler (the still tier stops its loop). */
    document.addEventListener('scenic:tier', function () {
      if (FRAME.raf) { cancelAnimationFrame(FRAME.raf); FRAME.raf = 0; }
      startFrameSampler();
    });
  }

  /* ====================== public API ====================== */
  window.Scenic = {
    version: '1.0',
    get tier() { return STATE.tier; },
    get reason() { return STATE.reason; },
    get ready() { return STATE.ready; },
    probe: PROBE,
    gl: GL,
    gates: GATES,
    setGrade: setGrade,
    setShot: setShot,
    setTier: setTier,
    telemetry: telemetry,
    /**/ _internals: { MOTION: MOTION, FRAME: FRAME, PAINT: PAINT, GOV: GOV, STATE: STATE }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();



