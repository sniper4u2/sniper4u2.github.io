'use strict';

/* ==========================================================================
   SOFIENE.AI — GARGANTUA BLACK HOLE BACKGROUND + REACTIVE TELEMETRY
   Clearance 55 Systems Architecture & Frontier AI Portfolio
   ========================================================================== */

/* ========= DATA DEFINITIONS ========= */

const ROLES = [
  "Frontier AI & LLM Systems Architect",
  "Neuro-Symbolic ARC-AGI Researcher",
  "LLM Fine-Tuning & SFT Dataset Engineer",
  "Senior Systems Architect & Forensics Investigator",
  "Elite Red-Teamer & Systems Engineer (Clearance 55)"
];

const PROJECTS = [
  {
    id: 'hspn-mai-arc',
    name: 'HSPN-MAI: ARC-AGI Neuro-Symbolic Synthesis',
    icon: '🧩',
    status: 'active',
    cat: 'ai',
    desc: 'Hybrid Symbiotic Program-Neural Synthesis with Metacognitive Active Inference. Frontier theoretical framework and competitive solver for Kaggle ARC Prize 2026 (ARC-AGI-2 & ARC-AGI-3) unifying System 1 neural priors with System 2 verified DSL search.',
    features: [
      'Authored 10-page formal research treatise: "HSPN-MAI Architecture for Out-of-Distribution Generalization"',
      'Dual-system design: Neural topological priors constrain and guide deterministic DSL program synthesizer',
      'Active object-centric decomposition & multi-scale geometric symmetry verification',
      'Metacognitive confidence gating preventing combinatorial exponential search space explosions',
      'Production Kaggle submission pipeline emitting verified submission.parquet'
    ],
    tech: ['Python', 'Neuro-Symbolic', 'DSL Synthesis', 'PyTorch', 'Kaggle API'],
    url: 'https://github.com/sniper4u2/prizes',
    liveUrl: 'https://github.com/sniper4u2',
    lang: 'Python'
  },
  {
    id: 'b13-sft-dataset',
    name: 'B13 Cybersecurity SFT Dataset Collection',
    icon: '🤗',
    status: 'live',
    cat: 'ai',
    desc: 'Master ChatML cybersecurity dataset containing 16,874 SFT samples, 10,000 technical CVE records with Chain-of-Thought reasoning, 5,591 static code analysis samples with CWE mapping, and 130,173 evaluation records published on Hugging Face.',
    features: [
      '16,874 unified ChatML SFT training samples across 3 core tracks',
      '10,000 technical CVEs with Chain-of-Thought (CoT) reasoning & 15 schema features',
      '5,591 static code analysis samples with CWE mapping and patch synthesis',
      '1,003 multi-turn red-team pentesting workflows and execution logs',
      '130,173 security evaluation records benchmarked across agent skills and MCP tools'
    ],
    tech: ['HuggingFace', 'Python', 'Parquet', 'ChatML', 'SFT', 'Datasets'],
    url: 'https://huggingface.co/datasets/sofienehmz/b13-cybersecurity-sft-datasets',
    liveUrl: 'https://huggingface.co/datasets/sofienehmz/b13-cybersecurity-sft-datasets',
    lang: 'Python / JSON'
  },
  {
    id: 'barbados-ocr',
    name: 'Barbados Transductive Ensemble HTR & OCR',
    icon: '📜',
    status: 'active',
    cat: 'ai',
    desc: 'Deep multi-architecture handwritten text recognition (HTR) and historical document transcription system. Multi-stage PyTorch & Kraken training with Sauvola adaptive binarization and 6-model edit-distance consensus fusion.',
    features: [
      'Full 50-epoch GPU training pipeline leveraging Kraken & PyTorch Lightning',
      'Sauvola adaptive local binarization & contrast normalization for historical manuscripts',
      '6-model transductive consensus engine with RapidFuzz token-set edit distance',
      'Automated suspicion gating and confidence thresholding targeting CER/WER minimization',
      'Strict zero-leakage cross-validation producing top-ranked competition submission'
    ],
    tech: ['PyTorch', 'Kraken HTR', 'OpenCV', 'RapidFuzz', 'PyTorch Lightning'],
    url: 'https://github.com/sniper4u2',
    liveUrl: 'https://github.com/sniper4u2',
    lang: 'Python'
  },
  {
    id: 'bias-bounty',
    name: 'Bias Bounty Equity Feature Engine',
    icon: '⚖️',
    status: 'active',
    cat: 'ai',
    desc: 'Algorithmic fairness and socio-spatial vulnerability pipeline. Integrates Overture Maps vector features, Census TIGER road networks, and CDC Social Vulnerability Indices to detect and quantify geographic disparities.',
    features: [
      'Automated geospatial feature pipeline (GeoPandas, Shapely, PyProj)',
      'High-throughput vector parquet processing via DuckDB HTTPFS',
      'Fixed-seed deterministic validation framework (SEED=4217)',
      'Non-parametric calibration ensuring fair predictive boundaries across demographics',
      'Designed for Zindi algorithmic equity benchmark evaluation'
    ],
    tech: ['Python', 'DuckDB', 'GeoPandas', 'LightGBM', 'Scikit-Learn'],
    url: 'https://github.com/sniper4u2',
    liveUrl: 'https://github.com/sniper4u2',
    lang: 'Python'
  },
  {
    id: 'gaia-agent',
    name: 'GAIA Agent Unit 5',
    icon: '🤖',
    status: 'live',
    cat: 'ai',
    desc: 'Autonomous AI agent console deployed on Hugging Face Spaces using smolagents/CodeAgent with web search, webpage visitation, and dynamic tool execution.',
    features: [
      'Powered by smolagents & CodeAgent framework',
      'Qwen2.5-Coder-32B backend via HF InferenceClient',
      'Integrated DuckDuckGo and webpage visitation tools',
      'Gradio interactive agent console UI'
    ],
    tech: ['Python', 'smolagents', 'CodeAgent', 'Gradio', 'HuggingFace Spaces'],
    url: 'https://huggingface.co/spaces/sofienehmz/gaia-agent-unit5',
    liveUrl: 'https://huggingface.co/spaces/sofienehmz/gaia-agent-unit5',
    lang: 'Python'
  },
  {
    id: 'phalanx',
    name: 'Phalanx X Local API Server',
    icon: '⚡',
    status: 'beta',
    cat: 'ai',
    desc: 'High-performance local LLM API server providing full OpenAI-compatible endpoints. Loads GGUF models, handles GPU offloading (CUDA), and supports MoE architectures.',
    features: [
      'Full OpenAI-compatible /v1/chat/completions',
      'GPU layer offloading automation (CUDA/Metal)',
      'Quantized format support: Q4_K_M, IQ4_XS, Q8_K_P',
      'Context windows up to 128k tokens',
      'Stream and batch mode execution',
      'Zero external dependencies wrapper'
    ],
    tech: ['Python', 'llama.cpp', 'CUDA', 'GGUF', 'REST API'],
    url: 'https://github.com/sniper4u2',
    lang: 'Python'
  },
  {
    id: 'c2server',
    name: 'AI-Integrated C2 Server Framework',
    icon: '⚙️',
    status: 'active',
    cat: 'ai',
    desc: 'Command & control framework with FastAPI, WebSockets, and autonomous AI pentesting agent orchestration. Combines security modules with dynamic LLM planning.',
    features: [
      'Multi-agent C2 session orchestration',
      'FastAPI + WebSockets real-time messaging',
      'Mythos Learner autonomous scanning & enhancement loop',
      'Integration with Ollama/LMStudio local APIs',
      'Dynamic CVE threat intelligence mapping',
      'Redis & PostgreSQL telemetry persistence'
    ],
    tech: ['Python', 'FastAPI', 'WebSockets', 'Ollama', 'Redis', 'Docker'],
    url: 'https://github.com/sniper4u2/c2server',
    lang: 'Python'
  },
  {
    id: 'vaultguard',
    name: 'VaultGuard Institutional P2P',
    icon: '🔐',
    status: 'live',
    cat: 'crypto',
    desc: 'Institutional P2P crypto security & OTC settlement engine. Deployed on Cloudflare Workers edge. Implements ZKP identity vaults and WebAuthn/FIDO2 biometrics.',
    features: [
      '137 API endpoints running on Cloudflare Edge',
      'Zero-Knowledge Proof progressive identity disclosure',
      'Multi-sig institution custody protocol',
      'Real-time threat monitoring integrations',
      'Stripe & BTCPay payment integration',
      'FIDO2/WebAuthn passwordless biometric logic'
    ],
    tech: ['TypeScript', 'Cloudflare Workers', 'ZKP', 'React', 'Supabase'],
    url: 'https://github.com/sniper4u2',
    liveUrl: 'https://vaultguard.eu.org',
    lang: 'TypeScript'
  },
  {
    id: 'insolvency',
    name: 'UK Insolvency Monitor',
    icon: '📊',
    status: 'active',
    cat: 'backend',
    desc: 'Enterprise risk tracking application monitoring credit drops and structural company events. Aggregates data pipelines and generates multi-sheet Excel reports with automated scheduling.',
    features: [
      'Ingests daily UK public filings',
      'Identifies credit score adjustments >=5%',
      'Celery & Redis async scheduling pipeline',
      'Automated daily/weekly multi-sheet Excel dispatch',
      'Multi-tenant dashboard with client filters',
      'PostgreSQL data persistence layer'
    ],
    tech: ['Python', 'FastAPI', 'Celery', 'Redis', 'React', 'PostgreSQL'],
    url: 'https://github.com/sniper4u2',
    lang: 'Python'
  },
  {
    id: 'mythos-learner',
    name: 'Mythos Learner Agent',
    icon: '🧠',
    status: 'active',
    cat: 'ai',
    desc: 'Autonomous knowledge acquisition agent scanning project directories and generating semantic indices. Self-enhances by learning from repository specifications and configs.',
    features: [
      'Scans files and builds unified semantic index',
      'Interfaces with local Llama 3.1 8B & Qwen models',
      'Dynamic multi-step capability learning',
      'Audit logging and operator status dashboards',
      'Sudo-ops sandbox controller setup',
      'Context windows optimized for large codebases'
    ],
    tech: ['Python', 'Ollama', 'ChromaDB', 'Sentence-Transformers'],
    url: 'https://github.com/sniper4u2',
    lang: 'Python'
  },
  {
    id: 'ai-discovery',
    name: 'ai_llm_discovery.py',
    icon: '🔍',
    status: 'live',
    cat: 'platform',
    desc: 'Custom Python systems auditing tool designed to scan filesystems, locate AI models, index configuration schemas, and build unified machine profiles.',
    features: [
      'Scans disk for GGUF, GGML, ONNX, and Pt weights',
      'Detects environment variables and key configurations',
      'Analyzes LLM software runtimes (Ollama, LMStudio, Continue)',
      'Outputs structured JSON & markdown telemetry report',
      'Parallel file-walking optimizing disk read overhead',
      'Pattern matching on 50+ deep learning keywords'
    ],
    tech: ['Python', 'JSON', 'Systems API'],
    url: 'https://github.com/sniper4u2',
    lang: 'Python'
  }
];

const CERTS = [
  { name: 'HuggingFace — AI Agents Course', path: 'CERTS/HuggingFace AGENT COURSE CERT.png', cat: 'ai' },
  { name: 'HuggingFace / DeepLearning.AI — Fundamentals of LLMs', path: 'CERTS/Fundumentals Of LLM\'s.png', cat: 'ai' },
  { name: 'IBM — Incident Response & Systems Forensics', path: 'CERTS/Incedent response and sys forensics.png', cat: 'security' },
  { name: 'IBM — Security Operations & Management', path: 'CERTS/Cybersecurity operation and manager.png', cat: 'security' },
  { name: 'IBM — Vulnerability Management', path: 'CERTS/vuln management.png', cat: 'security' },
  { name: 'IBM — System & Network Security', path: 'CERTS/system and network security.png', cat: 'security' },
  { name: 'IBM — Cloud Security', path: 'CERTS/Cloud security.png', cat: 'security' },
  { name: 'IBM — GRC & Data Privacy', path: 'CERTS/governance, risk, compliance, and data privacy.png', cat: 'security' },
  { name: 'IBM — Cybersecurity Fluency Pathway', path: 'CERTS/Completion Certificate _ SkillsBuild-1.png', cat: 'security' },
  { name: 'IBM — Getting Started with Cybersecurity', path: 'CERTS/Getting started with cybersec.png', cat: 'security' },
  { name: 'Microsoft / freeCodeCamp — Foundational C#', path: 'CERTS/Foundational_C_Sharp_with_MICROSOFT_CERT.png', cat: 'engineering' },
  { name: 'freeCodeCamp — Scientific Computing with Python', path: 'CERTS/ScientificComputingWith PYTHON CERT.png', cat: 'engineering' },
  { name: 'freeCodeCamp — Frontend Dev Libraries V8', path: 'CERTS/FrontendDevLibrary V8 CERT.png', cat: 'engineering' },
  { name: 'freeCodeCamp — Web Design Certification V8', path: 'CERTS/WebDesign V8 CERT.png', cat: 'engineering' },
  { name: 'freeCodeCamp — Legacy Frontend Development', path: 'CERTS/Legacy Frontend dev CERT.png', cat: 'engineering' },
  { name: 'IELTS General Training — Band 5.5 / B2 (British Council)', path: 'CERTS/IELTS B2.jpg', cat: 'education' },
  { name: 'Civil Aviation — Flight Dispatcher Diploma N°228/2008', path: 'CERTS/civil aviation agent.jpg', cat: 'education' },
  { name: 'CMFC — Personnel Navigant Commercial (Civil Aviation Cabin Crew)', path: 'CERTS/personnel navigation commercial.png', cat: 'education' },
  { name: 'Perm State Pharmacy Academy (Russia) — 3rd Year Certificate', path: 'CERTS/1656392289426.png', cat: 'education' },
  { name: 'Ryazan State Medical University (Russia) — 2nd Year Pharmacy Certificate', path: 'CERTS/1st year pharmacology.png', cat: 'education' },
  { name: 'Vocational Training — Heavy Vehicle C+E License', path: 'CERTS/driving vehicules with trailers C+E diplome.jpg', cat: 'education' },
  { name: 'Vocational Training — Driving Vehicles with Trailers', path: 'CERTS/driving vihecules with trailers diplome.jpg', cat: 'education' },
  { name: 'Baccalaureate Diploma — Arts (Tunisia)', path: 'CERTS/high school gradutation diplome.jpg', cat: 'education' }
];

const CONTACTS = [
  { icon: '🤗', label: 'Hugging Face', val: 'huggingface.co/sofienehmz', href: 'https://huggingface.co/sofienehmz', highlight: true },
  { icon: '💻', label: 'GitHub', val: 'github.com/sniper4u2', href: 'https://github.com/sniper4u2', highlight: true },
  { icon: '🛡️', label: 'VaultGuard Org', val: 'vaultguard.eu.org', href: 'https://vaultguard.eu.org', highlight: true },
  { icon: '🛠️', label: 'Tools Case', val: 'hamzaoui-sofiene-tools-case', href: 'https://start.me/p/KMJvbw/hamzaoui-sofiene-tools-case' },
  { icon: '📧', label: 'Email', val: 'admin@vaultguard.eu.org', href: 'mailto:admin@vaultguard.eu.org' },
  { icon: '📄', label: 'CV / Resume', val: 'CV (Complete PDF)', href: 'CERTS/Hamzaoui_Sofiene_CV_Complete.pdf' }
];

/* ==========================================================================
   BACKGROUND ENGINE COUPLING — ONE DIRECTOR, TWO TIERS
   --------------------------------------------------------------------------
   Tier 1 (blackhole.js + vendored three.js): a real-time null-geodesic
   ray-marcher. It ships raw uniforms and owns its own camera choreography, so
   this controller supplies only the per-section GRADE.
   Tier 2 (cinematic.js): NASA SVS footage — shot-based, easing internal.

   The tier is resolved per call from Cinematic.getTier(), never from the mere
   presence of window.Gargantua, so a context loss mid-session re-routes grading
   to the footage on the very next section change instead of writing uniforms to
   a dead renderer.
   ========================================================================== */

const sectionOrder = ['hero', 'ai-expertise', 'huggingface', 'projects', 'about', 'certificates', 'contact'];
let activeSectionIdx = 0;

/* Per-section cinematography — both tiers in one table:
     disk / exposure -> tier 1 (uDiskGain, uExposure). Framing is deliberately
                        NOT set here: the engine's own resize() owns the
                        responsive composition offset, and two writers for one
                        uniform is how you get a fight on a phone viewport.
     shot / grade    -> tier 2 (which clip is on screen, how it is re-framed).
   Both columns encode one intent: the disk dims as the copy gets longer, so
   long-form text stays legible over the brightest part of the frame. */
const SECTION_GRADE = {
  hero:           { shot: 'orbit',   brightness: 0.74, saturate: 1.07, contrast: 1.08, x:   6, y: 0, zoom: 1.00, disk: 1.00, exposure: 0.72 },
  'ai-expertise': { shot: 'orbit',   brightness: 0.66, saturate: 1.05, contrast: 1.08, x:  -8, y: -4, zoom: 1.02, disk: 0.92, exposure: 0.66 },
  huggingface:    { shot: 'closeup', brightness: 0.60, saturate: 1.04, contrast: 1.07, x:  10, y:  4, zoom: 1.04, disk: 0.80, exposure: 0.60 },
  projects:       { shot: 'closeup', brightness: 0.55, saturate: 1.03, contrast: 1.07, x: -10, y:  6, zoom: 1.05, disk: 0.72, exposure: 0.55 },
  about:          { shot: 'closeup', brightness: 0.51, saturate: 1.02, contrast: 1.06, x:   8, y:  8, zoom: 1.06, disk: 0.64, exposure: 0.51 },
  certificates:   { shot: 'orbit',   brightness: 0.55, saturate: 1.04, contrast: 1.06, x:  -6, y:  6, zoom: 1.04, disk: 0.72, exposure: 0.55 },
  contact:        { shot: 'orbit',   brightness: 0.50, saturate: 1.05, contrast: 1.06, x:   4, y:  2, zoom: 1.02, disk: 0.66, exposure: 0.50 }
};

/* ---- tier 1 grade easing -------------------------------------------------
   The renderer deliberately ships no easing of its own — it is a renderer, not
   a director. Damping the grade here means a fast scroll glides between
   sections instead of stepping, and the rAF chain self-terminates the moment
   the value converges, so an idle page costs nothing. */
const GRADE_3D = { disk: 1.00, exposure: 0.72 };
const GRADE_3D_TARGET = { disk: 1.00, exposure: 0.72 };
let grade3DRaf = 0;

function step3D() {
  const engine = window.Gargantua;
  const u = engine && engine.uniforms;
  if (!u) { grade3DRaf = 0; return; }

  let moving = false;
  const keys = ['disk', 'exposure'];
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    const delta = GRADE_3D_TARGET[k] - GRADE_3D[k];
    if (Math.abs(delta) > 0.0005) { GRADE_3D[k] += delta * 0.055; moving = true; }
    else { GRADE_3D[k] = GRADE_3D_TARGET[k]; }
  }

  u.uDiskGain.value = GRADE_3D.disk;
  u.uExposure.value = GRADE_3D.exposure;

  grade3DRaf = moving ? requestAnimationFrame(step3D) : 0;
}

/* Which engine owns the frame right now. 'pending' means arbitration has not
   resolved; the raymarcher wins by contract and announces itself next frame. */
function ownsFrame() {
  const cine = window.Cinematic;
  const tier = cine && typeof cine.getTier === 'function' ? cine.getTier() : 'pending';
  if (tier === '3d') return '3d';
  if (tier === 'photo' || tier === 'still') return 'photo';
  return window.Gargantua ? '3d' : 'photo';
}

function applySectionGrade(sectionId) {
  const next = SECTION_GRADE[sectionId] || SECTION_GRADE.hero;

  if (ownsFrame() === '3d' && window.Gargantua) {
    GRADE_3D_TARGET.disk = next.disk;
    GRADE_3D_TARGET.exposure = next.exposure;
    if (!grade3DRaf) grade3DRaf = requestAnimationFrame(step3D);
    return;
  }

  const cine = window.Cinematic;
  if (!cine) return;                 /* engine not up yet — replayed on ready */
  cine.setShot(next.shot);
  cine.setGrade(next);
}

/* Replay on whichever engine claims the frame, and re-resolve after a handoff so
   the footage inherits the grade of the section the reader is actually on. */
function regradeActive() { applySectionGrade(sectionOrder[activeSectionIdx]); }
document.addEventListener('gargantua:ready', regradeActive);
document.addEventListener('cinematic:ready', regradeActive);
document.addEventListener('gargantua:dead', regradeActive);

/* Loader handshake: hold the shutter until the first cinematic frame has been
   painted, with a hard fail-safe so nothing can ever trap the reader. */
function simulateLoading() {
  const fill = document.getElementById('loader-fill');
  const pct = document.getElementById('loader-pct');
  const loader = document.getElementById('loader');
  if (!loader) return;

  let progress = 0;
  let dismissed = false;

  function paint() {
    if (fill) fill.style.width = progress + '%';
    if (pct) pct.innerText = Math.round(progress) + '%';
  }

  function dismiss() {
    if (dismissed) return;
    dismissed = true;
    progress = 100;
    paint();
    loader.style.opacity = '0';
    setTimeout(() => { loader.style.display = 'none'; }, 700);
  }

  function ready() {
    progress = Math.max(progress, 96);
    paint();
    setTimeout(dismiss, 170);
  }

  /* Whichever engine claims the frame releases the shutter: tier 1 fires
     gargantua:ready on its first painted frame, tier 2 fires cinematic:ready
     once a poster or decoded frame is up. First one wins — and the fail-safes
     below still guarantee the loader cannot trap the reader. */
  if (window.__GARGANTUA_READY__ || window.__CINEMATIC_READY__) {
    ready();
  } else {
    document.addEventListener('gargantua:ready', ready, { once: true });
    document.addEventListener('cinematic:ready', ready, { once: true });
  }

  // climbs asymptotically toward 92% and holds until the frame lands
  const interval = setInterval(() => {
    if (dismissed) { clearInterval(interval); return; }
    if (progress < 92) {
      progress += (92 - progress) * 0.08 + 0.32;
      paint();
    }
  }, 40);

  setTimeout(dismiss, 4500);
}

/* Defensive no-op shims: the cinematic engine owns the viewport (its own
   pointer parallax + scroll drift), so any legacy listener bound to window
   resolves harmlessly instead of throwing. */
function onWindowResize() {}
function onMouseMove() {}

/* ========= NAVIGATION MANAGEMENT ========= */

function goSection(sectionId) {
  const newIdx = sectionOrder.indexOf(sectionId);
  if (newIdx !== -1) {
    activeSectionIdx = newIdx;
  }
  applySectionGrade(sectionId);

  document.querySelectorAll('.hud-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.section === sectionId);
  });

  const targetEl = document.getElementById(sectionId);
  if (targetEl) {
    targetEl.scrollIntoView({ behavior: 'smooth' });
  }
}

/* ========= TYPING EFFECT IN HERO ========= */

let wordIdx = 0;
let charIdx = 0;
let isDeleting = false;
function typeEffect() {
  const el = document.getElementById('typed-role');
  if (!el) return;

  const currentRole = ROLES[wordIdx % ROLES.length];

  if (!isDeleting) {
    el.innerText = currentRole.substring(0, charIdx + 1);
    charIdx++;
    if (charIdx === currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 2400);
      return;
    }
  } else {
    el.innerText = currentRole.substring(0, charIdx - 1);
    charIdx--;
    if (charIdx === 0) {
      isDeleting = false;
      wordIdx++;
    }
  }
  setTimeout(typeEffect, isDeleting ? 25 : 70);
}

/* ========= PROJECTS RENDERING ========= */

function renderProjects(filter = 'all') {
  const grid = document.getElementById('proj-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === filter);

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'pcard';

    const hasLiveUrl = !!(p.liveUrl);

    card.innerHTML = `
      <div class="pc-top">
        <div class="pc-title-group">
          <span class="pc-icon">${p.icon}</span>
          <span class="pc-name">${p.name}</span>
        </div>
        <span class="pstatus ${p.status}">${p.status.toUpperCase()}</span>
      </div>
      <div class="pc-body">
        <div class="pc-body-left">
          <div class="pc-desc">${p.desc}</div>
          <div class="pc-tags">
            ${p.tech.map(t => `<span class="ptag">${t}</span>`).join('')}
          </div>
        </div>
        <div class="pc-body-right">
          <div class="pc-features-title">// Architectural Findings & Invariants:</div>
          <ul class="pc-features">
            ${p.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
      </div>
      <div class="pc-foot">
        <span class="pc-lang">PRIMARY ARCHITECTURE: ${p.lang}</span>
        <div class="pc-actions">
          <a href="${p.url}" target="_blank" class="pc-action-btn github-btn" onclick="event.stopPropagation();">
            <svg style="width:12px;height:12px;" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub Repo
          </a>
          ${hasLiveUrl ? `
          <a href="${p.liveUrl}" target="_blank" class="pc-action-btn live-btn" onclick="event.stopPropagation();">
            <span class="btn-live-dot"></span>
            Launch System
          </a>` : ''}
          <button class="pc-action-btn console-btn">
            Telemetry Trace ➔
          </button>
        </div>
      </div>
    `;
    card.onclick = () => openModal(p.id);
    grid.appendChild(card);
  });
}

/* ========= CERTIFICATES RENDERING ========= */

function renderCertificates(filter = 'all') {
  const grid = document.getElementById('cert-gallery');
  if (!grid) return;
  grid.innerHTML = '';

  const filtered = filter === 'all' ? CERTS : CERTS.filter(c => c.cat === filter);

  filtered.forEach(c => {
    const card = document.createElement('div');
    card.className = 'cert-card';
    card.innerHTML = `
      <span class="cert-name">${c.name}</span>
      <span class="cert-icon">📜</span>
    `;
    card.onclick = () => openCertModal(c);
    grid.appendChild(card);
  });
}

/* ========= CONTACT DETAILS RENDERING ========= */

function renderContact() {
  const links = document.getElementById('contact-links');
  if (!links) return;
  links.innerHTML = '';

  CONTACTS.forEach(c => {
    const a = document.createElement('a');
    a.className = c.highlight ? 'clink highlight' : 'clink';
    a.href = c.href;
    if (c.href.startsWith('http')) a.target = '_blank';
    a.innerHTML = `
      <span class="clink-icon">${c.icon}</span>
      <span class="clink-label">${c.label}</span>
      <span class="clink-val">${c.val}</span>
    `;
    links.appendChild(a);
  });
}

/* ========= MODAL SYSTEM ========= */

const PREVIEWS = {
  'hspn-mai-arc': '$ python evaluate_arc_submission.py --framework hspn-mai\n[*] Initializing HSPN-MAI Neuro-Symbolic generalizer...\n[+] Author: Vaultguard / sniper4u2\n[+] System 1: Neural topological prior search & grid objectness active\n[+] System 2: Metacognitive DSL verification & program execution engine\n[*] Emitting verified submission.parquet to Kaggle evaluation gateway\n[+] Target benchmark: ARC-AGI-2 & ARC-AGI-3 (Prize 2026)',
  'b13-sft-dataset': '$ huggingface-cli dataset info sofienehmz/b13-cybersecurity-sft-datasets\n[*] Dataset: sofienehmz/b13-cybersecurity-sft-datasets\n[+] Config master_unified: 16,874 ChatML samples\n[+] Config vulnerabilities_v3: 10,000 CVE samples with CoT reasoning\n[+] Config code_security: 5,591 SAST samples with CWE mapping\n[+] Config redteam_pentest: 1,003 multi-turn conversations\n[+] Evals: 130,173 security records across agent tools & skills',
  'barbados-ocr': '$ python barbados_train_v17.py --epochs 50 --gpu 0\n[*] Initializing Kraken HTR + PyTorch Lightning engine...\n[+] Sauvola adaptive binarization applied to historical transcripts\n[+] Model architecture: CNN + LiGRU + CTC loss\n[*] Resuming epoch checkpoint 17/50 (Warmup lr: 1e-4)\n[+] Transductive consensus fusion: RapidFuzz token edit-distance (6 models)\n[+] Validated CER/WER threshold: OPTIMAL',
  'bias-bounty': '$ python src/baseline.py --dataset overture-maps-2026\n[*] Ingesting Census TIGER/Line & Overture building footprints via DuckDB...\n[+] Enforcing deterministic seed contract: SEED=4217\n[+] Joining CDC Social Vulnerability Indices (SVI)\n[*] Non-parametric probability calibration active\n[+] Evaluated algorithmic equity metric on Zindi benchmark',
  'gaia-agent': '$ python gaia_agent.py\n[*] Initializing smolagents CodeAgent engine...\n[+] Backend model: Qwen2.5-Coder-32B-Instruct (HF Inference)\n[+] Registered tools: DuckDuckGoSearch, VisitWebpage, PythonREPL\n[+] Gradio interactive console active on Hugging Face Space',
  c2server: '$ ./c2server --start\n[*] Loading configurations...\n[+] SS7 exploitation module: initialized\n[+] Auto-agent scanning active\n[*] C2 daemon listening on websocket :8000\n[+] Mythos Learner status: CONNECTED\n[+] Active sessions: 3 remote agents configured',
  phalanx: '$ python phalanx.py --model qwen3.6-35b-moe.gguf\n[*] Initializing model loader...\n[+] Loaded Qwen3.6-35B-A3B (MoE 256 experts)\n[*] System VRAM: 80.00 GB (NVIDIA A100)\n[*] Offloaded 80 layers to GPU (CUDA)\n[+] REST Endpoint active at http://localhost:8080/v1',
  vaultguard: '$ vaultguard status\n[+] Protocol status: ACTIVE\n[+] 137 Edge functions running on Cloudflare Workers\n[*] Biometric WebAuthn check: PASSED\n[+] Cold wallet multi-sig nodes: 3/5 verified\n[+] ZKP Identity check: VALIDATED',
  insolvency: '$ monitor run\n[*] Scraping UK public insolvency directories...\n[+] Indexed 1,247 firms\n[-] Detected credit drops on 4 firms\n[*] Formatted Celery dispatch pipeline\n[+] Daily Excel report sent to admins',
  'mythos-learner': '$ mythos-learner scan --dir /home/b13/\n[*] Scanning codebase directories...\n[+] Indexed 102 operational skills\n[+] Saved local state to learner_state.json\n[*] Local Ollama check: qwen2.5-coder active\n[+] Agent planning sequence complete',
  'ai-discovery': '$ python ai_llm_discovery.py\n[*] Deep AI Asset Inventory Scanning...\n[+] Found 8 quantized local models (.gguf)\n[+] Found sentence-transformers (all-MiniLM-L6-v2)\n[+] Found active Continue & LMStudio config files\n[*] Report outputted to ~/ai_llm_deep_analysis.txt'
};

function openModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;

  const head = document.getElementById('modal-head');
  const body = document.getElementById('modal-body');
  const modal = document.getElementById('modal-bg');

  head.innerHTML = `<div class="modal-head-title">${p.icon} ${p.name}</div>`;
  body.innerHTML = `
    <div class="modal-grid-2">
      <div class="modal-col">
        <div>
          <div class="modal-sec-title">Architectural Overview</div>
          <p class="modal-desc">${p.desc}</p>
        </div>
        <div>
          <div class="modal-sec-title">Deployment State</div>
          <span class="pstatus ${p.status}">${p.status.toUpperCase()}</span>
        </div>
        <div>
          <div class="modal-sec-title">Engineered Stack</div>
          <div class="modal-tags">${p.tech.map(t => `<span class="modal-tag">${t}</span>`).join('')}</div>
        </div>
        <a href="${p.url}" target="_blank" class="modal-btn">Inspect Repository ➔</a>
      </div>
      <div class="modal-col">
        <div>
          <div class="modal-sec-title">Core Invariants &amp; Capabilities</div>
          <ul class="modal-feats">${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
        </div>
        <div>
          <div class="modal-sec-title">Runtime Diagnostic Trace</div>
          <div class="modal-terminal-hdr">b13@quantum-rig:~/${p.id}$</div>
          <div class="modal-terminal-box">${PREVIEWS[p.id] || '[*] Initializing telemetry output...'}</div>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('modal-hidden');
}

function openCertModal(c) {
  const head = document.getElementById('modal-head');
  const body = document.getElementById('modal-body');
  const modal = document.getElementById('modal-bg');

  head.innerHTML = `<div class="modal-head-title">📜 ${c.name}</div>`;
  body.innerHTML = `
    <div style="display:flex; flex-direction:column; align-items:center; gap: 20px;">
      <img src="${c.path}" alt="${c.name}" style="max-width:100%; max-height: 60vh; border-radius:6px; border: 1px solid var(--border-subtle); box-shadow: 0 0 30px rgba(0,240,255,0.2);">
      <div style="font-family:var(--font-mono); font-size: 0.82rem; color:var(--text-muted)">
        Credential Verification Track: <span style="color:var(--cyan); font-weight:700;">${c.cat.toUpperCase()}</span>
      </div>
    </div>
  `;

  modal.classList.remove('modal-hidden');
}

function closeModal() {
  document.getElementById('modal-bg').classList.add('modal-hidden');
}

/* ========= INITIALIZATION ========= */

document.addEventListener('DOMContentLoaded', () => {
  simulateLoading();

  // Navigation button binding
  document.querySelectorAll('.hud-btn').forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      const sectionId = btn.dataset.section;
      goSection(sectionId);
    };
  });

  // Section Observer -> drives the cinematic grade of the background
  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -30% 0px',
    threshold: 0
  };
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const idx = sectionOrder.indexOf(id);
        if (idx !== -1) {
          activeSectionIdx = idx;
          applySectionGrade(id);
          document.querySelectorAll('.hud-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.section === id);
          });
        }
      }
    });
  }, observerOptions);

  document.querySelectorAll('section.panel').forEach(section => {
    sectionObserver.observe(section);
  });

  // Project filters
  document.querySelectorAll('.pf').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.pf').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.f);
    };
  });

  // Cert filters
  document.querySelectorAll('.cf').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.cf').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCertificates(btn.dataset.cf);
    };
  });

  // Modal interactions
  document.getElementById('modal-close').onclick = closeModal;
  document.getElementById('modal-bg').onclick = (e) => {
    if (e.target.id === 'modal-bg') closeModal();
  };
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Render initial datasets
  renderProjects();
  renderCertificates();
  renderContact();

  typeEffect();
  animateHeroCounters();
});

/* ========= LIVE TELEMETRY COUNTER ANIMATION ========= */

function animateHeroCounters() {
  const elements = document.querySelectorAll('.ht-stat-val');
  elements.forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    if (isNaN(target)) return;

    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    setTimeout(() => requestAnimationFrame(step), 400);
  });
}
