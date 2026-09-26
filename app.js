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
   SOFIENE.AI — UI CONTROLLER  (app.js v7.0)
   --------------------------------------------------------------------------
   Split of responsibilities with scene.js:

     scene.js  owns the frame: capability probe, adaptive governor, motion
               driver, and the telemetry source. It knows nothing about the DOM
               beyond #scene.
     app.js    owns the interface: navigation, the telemetry console, the boot
               console, modals and the per-section cinematography. It writes only
               Scenic.setGrade() / Scenic.setShot() and reads only
               Scenic.telemetry() / Scenic.gates.

   There is no fake progress anywhere in this file: the boot console advances on
   four real signals, and every number on the HUD is a measurement.
   ========================================================================== */

/* ========= SECTION TABLE — ONE SOURCE OF TRUTH =========
   Nav label, shot and grade live together, so the command bar, the rail, the
   observer and the cinematography cannot disagree about what a section is. The
   grade values preserve the original director's intent: sections with long copy
   dim the frame so the text keeps its contrast. */
const SECTIONS = [
  { id: 'hero',         nav: 'CORE',                   label: 'CORE',        shot: 'orbit',   brightness: 0.74, saturate: 1.07, contrast: 1.08, x:   6, y:  0, zoom: 1.00, disk: 1.00 },
  { id: 'ai-expertise', nav: 'NEURAL STACK',           label: 'NEURAL STACK', shot: 'orbit',   brightness: 0.66, saturate: 1.05, contrast: 1.08, x:  -8, y: -4, zoom: 1.02, disk: 0.92 },
  { id: 'huggingface',  nav: 'HUGGING FACE',           label: 'HUGGING FACE', shot: 'closeup', brightness: 0.60, saturate: 1.04, contrast: 1.07, x:  10, y:  4, zoom: 1.04, disk: 0.80 },
  { id: 'projects',     nav: 'AI RESEARCH & PROJECTS', label: 'RESEARCH',     shot: 'closeup', brightness: 0.55, saturate: 1.03, contrast: 1.07, x: -10, y:  6, zoom: 1.05, disk: 0.72 },
  { id: 'about',        nav: 'ARCHITECT PROFILE',      label: 'PROFILE',      shot: 'closeup', brightness: 0.51, saturate: 1.02, contrast: 1.06, x:   8, y:  8, zoom: 1.06, disk: 0.64 },
  { id: 'certificates', nav: 'CREDENTIALS',            label: 'CREDENTIALS',  shot: 'orbit',   brightness: 0.55, saturate: 1.04, contrast: 1.06, x:  -6, y:  6, zoom: 1.04, disk: 0.72 },
  { id: 'contact',      nav: 'SECURE COMMS',           label: 'COMMS',        shot: 'orbit',   brightness: 0.50, saturate: 1.05, contrast: 1.06, x:   4, y:  2, zoom: 1.02, disk: 0.66 }
];

const sectionOrder = SECTIONS.map(s => s.id);
const SECTION_GRADE = SECTIONS.reduce((acc, s) => { acc[s.id] = s; return acc; }, {});
let activeSectionIdx = 0;

/* The director: one write per section change; CSS tweens the grade. */
function applySectionGrade(sectionId) {
  const next = SECTION_GRADE[sectionId] || SECTION_GRADE.hero;
  if (window.Scenic) {
    window.Scenic.setShot(next.shot);
    window.Scenic.setGrade(next);
  }
}

function setActiveSection(sectionId) {
  const idx = sectionOrder.indexOf(sectionId);
  if (idx === -1) { return; }
  activeSectionIdx = idx;
  applySectionGrade(sectionId);
  document.querySelectorAll('.hud-btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.section === sectionId);
  });
  document.querySelectorAll('.rail__item').forEach(item => {
    item.classList.toggle('is-active', item.dataset.section === sectionId);
  });
}

function goSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (!el) { return; }
  setActiveSection(sectionId);
  const still = window.Scenic && window.Scenic.tier === 'still';
  el.scrollIntoView({ behavior: still ? 'auto' : 'smooth' });
  const nav = document.getElementById('gbar-nav');
  if (nav) { nav.classList.remove('is-open'); }
  const menu = document.getElementById('gbar-menu');
  if (menu) { menu.setAttribute('aria-expanded', 'false'); }
}
window.goSection = goSection;

/* ========= TELEMETRY CONSOLE =========
   Rows are declared once with a formatter each. The DOM nodes are created once
   and afterwards only their text changes, so a once-a-second refresh is free. */
function tNum(v, unit, digits) {
  if (v === null || v === undefined) { return 'n/a'; }
  const d = typeof digits === 'number' ? digits : 0;
  return (d ? Number(v).toFixed(d) : String(Math.round(v))) + (unit || '');
}

const TELE_ROWS = [
  { key: 'path',   label: 'RENDER PATH', fmt: t => 'compositor · vector' + (t.software ? ' · software raster' : '') },
  { key: 'gpu',    label: 'ACCELERATOR', fmt: t => (t.gpu && t.gpu !== 'unknown' && t.gpu !== 'blocked') ? t.gpu : 'n/a (masked)' },
  { key: 'tier',   label: 'QUALITY TIER', fmt: t => t.tier.toUpperCase() + (t.tier === 'still' ? ' · stationary' : t.tier === 'balanced' ? ' · reduced cost' : ' · full') },
  { key: 'fps',    label: 'FRAME RATE',  fmt: t => t.fps === null ? 'n/a (first window)' : t.fps.toFixed(1) + ' fps  min ' + tNum(t.fpsMin, '', 1) + '  worst ' + tNum(t.worstFrame, ' ms', 1) },
  { key: 'res',    label: 'VIEWPORT',    fmt: t => t.css + ' CSS  DPR ' + t.dpr + '  →  ' + t.px + ' device' },
  { key: 'host',   label: 'HOST',        fmt: t => tNum(t.cores, ' cores') + ' · ' + (t.mem ? t.mem + ' GB RAM' : 'RAM n/a') + ' · net ' + t.net },
  { key: 'vitals', label: 'VITALS',      fmt: t => 'LCP ' + tNum(t.lcp, ' ms') + ' · CLS ' + t.cls + ' · blocked ' + tNum(t.blocked, ' ms') + ' · ' + t.longTasks + ' long tasks' },
  { key: 'times',  label: 'TIMELINE',    fmt: t => 'TTFB ' + tNum(t.ttfb, ' ms') + ' · DCL ' + tNum(t.dcl, ' ms') + ' · load ' + tNum(t.load, ' ms') + ' · type ' + tNum(t.fonts, ' ms') },
  { key: 'scene',  label: 'SCENE',       fmt: t => t.layers + ' layers · ' + t.domNodes + ' DOM nodes · driver ' + (t.idle ? 'idle' : 'live') + ' · up ' + (t.uptime / 1000).toFixed(0) + ' s' }
];

let teleNodes = null;

function buildTelemetry() {
  const host = document.getElementById('tele-rows');
  if (!host || teleNodes) { return; }
  teleNodes = {};
  TELE_ROWS.forEach(row => {
    const line = document.createElement('div');
    line.className = 'tele__row';
    const k = document.createElement('span');
    k.className = 'tele__k';
    k.textContent = row.label;
    const v = document.createElement('span');
    v.className = 'tele__v';
    v.id = 'tele-' + row.key;
    line.appendChild(k);
    line.appendChild(v);
    host.appendChild(line);
    teleNodes[row.key] = v;
    if (row.key === 'fps') {
      const meter = document.createElement('div');
      meter.className = 'tele__meter';
      meter.id = 'tele-meter';
      meter.appendChild(document.createElement('i'));
      host.appendChild(meter);
    }
  });
}

/* Every branch below describes something the engine actually did. */
function humanReason(t) {
  const r = String(t.reason || '');
  if (r.indexOf('measured-fps:') === 0) {
    return 'measured frame rate fell below 42 fps (' + r.split(':')[1] + ' fps) — visual cost removed, content untouched';
  }
  if (r.indexOf('promoted:') === 0) {
    return 'frame rate recovered (' + r.split(':')[1] + ' fps) — full tier restored';
  }
  if (r.indexOf('cpu-class:') === 0) {
    return 'CPU reported ' + r.split(':')[1] + ' logical cores — animation budget reduced';
  }
  if (r === 'nominal') { return 'no constraint detected — full tier active'; }
  if (r === 'software-raster') { return 'software rasterizer detected (no GPU acceleration) — blur and extra planes dropped'; }
  if (r === 'prefers-reduced-motion') { return 'the operating system requested reduced motion — frame held still'; }
  if (r === 'save-data') { return 'the browser requested data saving — frame held still'; }
  if (r.indexOf('network:') === 0) { return 'connection reported ' + r.split(':')[1] + ' — frame held still'; }
  return r || 'measuring';
}

function renderTelemetry(t) {
  if (!t) { return; }
  buildTelemetry();
  if (teleNodes) {
    TELE_ROWS.forEach(row => {
      const el = teleNodes[row.key];
      if (!el) { return; }
      el.textContent = row.fmt(t);
      el.classList.toggle('is-warn', row.key === 'tier' && t.tier !== 'cinema');
      el.classList.toggle('is-soft', row.key === 'gpu');
    });
    const meter = document.getElementById('tele-meter');
    if (meter && meter.firstChild) {
      const pct = t.fps === null ? 2 : Math.max(2, Math.min(100, (t.fps / 60) * 100));
      meter.firstChild.style.width = pct.toFixed(0) + '%';
      meter.setAttribute('data-state', (t.fps !== null && t.fps < 45) ? 'warn' : 'ok');
    }
  }
  const badge = document.getElementById('tele-tier');
  if (badge) { badge.textContent = t.tier.toUpperCase(); badge.setAttribute('data-tier', t.tier); }
  const note = document.getElementById('tele-note');
  if (note) { note.textContent = humanReason(t); }
  updateSession(t);
}

function updateSession(t) {
  const set = (id, v) => { const el = document.getElementById(id); if (el) { el.textContent = v; } };
  set('sess-tier', t.tier.toUpperCase());
  set('sess-fps', t.fps === null ? 'n/a' : t.fps.toFixed(0) + ' fps');
  set('sess-gpu', (t.gpu && t.gpu.length > 26) ? t.gpu.slice(0, 24) + '…' : (t.gpu || 'n/a'));
  updateLivePill(t);
}

function updateLivePill(t) {
  const pill = document.getElementById('gbar-live');
  const txt = document.getElementById('gbar-live-txt');
  if (!pill || !txt) { return; }
  if (t.tier === 'still') {
    pill.setAttribute('data-state', 'idle');
    txt.textContent = 'stationary frame · ' + t.css;
    return;
  }
  if (t.fps === null) {
    pill.setAttribute('data-state', 'idle');
    txt.textContent = 'measuring this machine…';
    return;
  }
  pill.setAttribute('data-state', t.fps < 45 ? 'warn' : 'ok');
  txt.textContent = t.fps.toFixed(0) + ' fps' + (t.software ? ' · software raster' : '') + ' · ' + t.tier;
}

/* ========= RENDERING ========= */

function renderProjects(filter = 'all') {
  const grid = document.getElementById('proj-grid');
  if (!grid) { return; }
  grid.innerHTML = '';

  const list = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === filter);

  list.forEach(p => {
    const card = document.createElement('article');
    card.className = 'pcard rev';
    const hasLiveUrl = !!p.liveUrl;

    card.innerHTML = `
      <div class="pc-top">
        <div class="pc-title-group">
          <span class="pc-icon">${p.icon}</span>
          <h3 class="pc-name">${p.name}</h3>
        </div>
        <span class="pstatus ${p.status}">${p.status.toUpperCase()}</span>
      </div>
      <div class="pc-body">
        <div class="pc-body-left">
          <p class="pc-desc">${p.desc}</p>
          <div class="pc-tags">
            ${p.tech.map(t => `<span class="ptag">${t}</span>`).join('')}
          </div>
        </div>
        <div class="pc-body-right">
          <div class="pc-features-title">// ARCHITECTURAL INVARIANTS</div>
          <ul class="pc-features">
            ${p.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
      </div>
      <div class="pc-foot">
        <span class="pc-lang">PRIMARY STACK · ${p.lang}</span>
        <div class="pc-actions">
          <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="pc-action-btn github-btn" data-stop>
            <svg style="width:12px;height:12px;" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Repository
          </a>
          ${hasLiveUrl ? `
          <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="pc-action-btn live-btn" data-stop>
            <span class="btn-live-dot"></span>
            Live System
          </a>` : ''}
          <button class="pc-action-btn console-btn" type="button">
            Trace ➔
          </button>
        </div>
      </div>
    `;

    card.querySelectorAll('[data-stop]').forEach(a => {
      a.addEventListener('click', ev => ev.stopPropagation());
    });
    card.addEventListener('click', () => openModal(p.id));
    grid.appendChild(card);
  });

  observeReveals(grid);
}

function renderCertificates(filter = 'all') {
  const grid = document.getElementById('cert-gallery');
  if (!grid) { return; }
  grid.innerHTML = '';

  const list = filter === 'all' ? CERTS : CERTS.filter(c => c.cat === filter);
  const CAT_LABEL = {
    ai: 'AI / LLM ENGINEERING',
    security: 'CYBERSECURITY & FORENSICS',
    engineering: 'SOFTWARE & SYSTEMS',
    education: 'AVIATION · MEDICINE · DIPLOMAS'
  };

  list.forEach((c, i) => {
    const card = document.createElement('article');
    card.className = 'cert-card rev';
    card.innerHTML = `
      <span class="cert-card__idx">${String(i + 1).padStart(2, '0')}</span>
      <span class="cert-card__body">
        <span class="cert-name">${c.name}</span>
        <span class="cert-card__cat">${CAT_LABEL[c.cat] || c.cat.toUpperCase()}</span>
      </span>
      <span class="cert-icon" aria-hidden="true">📜</span>
    `;
    card.addEventListener('click', () => openCertModal(c));
    grid.appendChild(card);
  });

  observeReveals(grid);
}

function renderContact() {
  const links = document.getElementById('contact-links');
  if (!links) { return; }
  links.innerHTML = '';

  CONTACTS.forEach(c => {
    const a = document.createElement('a');
    a.className = c.highlight ? 'clink highlight rev' : 'clink rev';
    a.href = c.href;
    if (/^https?:/.test(c.href)) {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';   /* every external link, no exceptions */
    }
    a.innerHTML = `
      <span class="clink-icon" aria-hidden="true">${c.icon}</span>
      <span class="clink-label">${c.label}</span>
      <span class="clink-val">${c.val}</span>
    `;
    links.appendChild(a);
  });

  observeReveals(links);
}
//@APPEND@



