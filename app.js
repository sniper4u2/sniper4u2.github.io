'use strict';

/* ========= DATA DEFINITIONS ========= */

const ROLES = [
  "AI & LLM Research Engineer",
  "LLM Fine-Tuning & SFT Specialist",
  "Neuro-Symbolic & Generalization Researcher",
  "Cybersecurity Engineer & Systems Architect",
  "Technical Forensics Investigator"
];

const PROJECTS = [
  {
    id: 'b13-sft-dataset',
    name: 'B13 Cybersecurity SFT Dataset Collection',
    icon: '🤗',
    status: 'live',
    cat: 'ai',
    desc: 'Master ChatML cybersecurity dataset containing 16,874 SFT samples, 10,000 technical CVE records with Chain-of-Thought reasoning, 5,591 code security samples, and 130,173 evaluation records published on Hugging Face.',
    features: [
      '16,874 unified ChatML SFT training samples across 3 core tracks',
      '10,000 technical CVEs with Chain-of-Thought reasoning & 15 schema features',
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
    id: 'hspn-mai-arc',
    name: 'HSPN-MAI: ARC-AGI Neuro-Symbolic Synthesis',
    icon: '🧩',
    status: 'active',
    cat: 'ai',
    desc: 'Hybrid Symbiotic Program-Neural Synthesis with Metacognitive Active Inference. Research framework and competitive solver for Kaggle ARC Prize 2026 (ARC-AGI-2 & ARC-AGI-3) combining System 1 neural priors with System 2 verified DSL search.',
    features: [
      'Authored 10-page formal research treatise (HSPN-MAI Architecture)',
      'Dual-system design: Neural intuition (System 1) + Program execution & proof (System 2)',
      'Object-centric grid decomposition & active topological symmetry reasoning',
      'Metacognitive confidence gating preventing exponential combinatorial DSL explosions',
      'Production Kaggle submission pipeline emitting verified submission.parquet'
    ],
    tech: ['Python', 'Neuro-Symbolic', 'DSL Synthesis', 'PyTorch', 'Kaggle API'],
    url: 'https://github.com/sniper4u2/prizes',
    liveUrl: 'https://github.com/sniper4u2',
    lang: 'Python'
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

/* ========= 3D CINEMATIC AI NEURAL UNIVERSE (THREE.JS) ========= */

let scene, camera, renderer;
let neuralPoints, neuralLines;
let dataPackets = [];
let aiCores = [];
const sectionOrder = ['hero', 'about', 'ai-expertise', 'huggingface', 'projects', 'experience', 'certificates', 'contact'];
let activeSectionIdx = 0;
let currentLookAt = new THREE.Vector3(0, 0, 0);

// Cinematic AI Cluster Anchor Positions across 3D space
const CLUSTER_POSITIONS = {
  hero: new THREE.Vector3(0, 0, 0),
  about: new THREE.Vector3(35, 15, -40),
  'ai-expertise': new THREE.Vector3(-40, -20, -70),
  huggingface: new THREE.Vector3(30, -25, -60),
  projects: new THREE.Vector3(-35, 20, -30),
  experience: new THREE.Vector3(25, 35, -20),
  certificates: new THREE.Vector3(40, -10, -50),
  contact: new THREE.Vector3(-20, -35, -10)
};

function getCameraTargets(section) {
  const targetPos = CLUSTER_POSITIONS[section] || CLUSTER_POSITIONS.hero;
  return {
    pos: new THREE.Vector3(targetPos.x * 0.35, targetPos.y * 0.35 + 2, 68),
    look: new THREE.Vector3(targetPos.x * 0.15, targetPos.y * 0.15, 0)
  };
}

function init3D() {
  const container = document.getElementById('universe');
  if (!container) return;

  // Scene
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x030712, 0.0035);

  // Camera
  camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
  const startTargets = getCameraTargets('hero');
  camera.position.copy(startTargets.pos);
  currentLookAt.copy(startTargets.look);

  // Renderer with smooth filmic tone mapping
  renderer = new THREE.WebGLRenderer({ canvas: container, antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Lighting - Key cyan light + Amber accent + Subtle purple backfill
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.25);
  scene.add(ambientLight);

  const cyanLight = new THREE.DirectionalLight(0x06b6d4, 2.4);
  cyanLight.position.set(60, 50, 60);
  scene.add(cyanLight);

  const amberLight = new THREE.DirectionalLight(0xf97316, 1.8);
  amberLight.position.set(-60, -40, 50);
  scene.add(amberLight);

  const purpleLight = new THREE.PointLight(0xa855f7, 2.0, 150);
  purpleLight.position.set(0, 40, -30);
  scene.add(purpleLight);

  // 1. NEURAL NETWORK TOPOLOGY (Points + Synaptic Connections)
  const nodeCount = 140;
  const nodeCoords = [];
  const pGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(nodeCount * 3);
  const colors = new Float32Array(nodeCount * 3);

  const cyanCol = new THREE.Color(0x06b6d4);
  const amberCol = new THREE.Color(0xf97316);
  const purpleCol = new THREE.Color(0xa855f7);
  const palette = [cyanCol, cyanCol, amberCol, purpleCol];

  for (let i = 0; i < nodeCount; i++) {
    const x = (Math.random() - 0.5) * 180;
    const y = (Math.random() - 0.5) * 140;
    const z = (Math.random() - 0.5) * 120 - 20;

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
    nodeCoords.push(new THREE.Vector3(x, y, z));

    const c = palette[i % palette.length];
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }

  pGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  pGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const pMaterial = new THREE.PointsMaterial({
    size: 2.2,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    sizeAttenuation: true
  });
  neuralPoints = new THREE.Points(pGeometry, pMaterial);
  scene.add(neuralPoints);

  // Synaptic Network Lines between near neighbors
  const linePositions = [];
  const maxConnDist = 36;
  const edgePairs = [];

  for (let i = 0; i < nodeCount; i++) {
    for (let j = i + 1; j < nodeCount; j++) {
      const dist = nodeCoords[i].distanceTo(nodeCoords[j]);
      if (dist < maxConnDist) {
        linePositions.push(nodeCoords[i].x, nodeCoords[i].y, nodeCoords[i].z);
        linePositions.push(nodeCoords[j].x, nodeCoords[j].y, nodeCoords[j].z);
        edgePairs.push({ p1: nodeCoords[i], p2: nodeCoords[j] });
      }
    }
  }

  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
  const lineMat = new THREE.LineBasicMaterial({
    color: 0x06b6d4,
    transparent: true,
    opacity: 0.16,
    blending: THREE.AdditiveBlending
  });
  neuralLines = new THREE.LineSegments(lineGeo, lineMat);
  scene.add(neuralLines);

  // 2. ACTIVE TOKEN FLOW / DATA PACKETS traveling through the neural mesh
  const packetCount = 28;
  const packetGeo = new THREE.SphereGeometry(0.5, 6, 6);
  for (let k = 0; k < packetCount; k++) {
    const pair = edgePairs[Math.floor(Math.random() * edgePairs.length)];
    if (!pair) continue;
    const col = (k % 2 === 0) ? 0x06b6d4 : 0xf97316;
    const packetMat = new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.9 });
    const packetMesh = new THREE.Mesh(packetGeo, packetMat);
    scene.add(packetMesh);
    dataPackets.push({
      mesh: packetMesh,
      pair: pair,
      progress: Math.random(),
      speed: 0.006 + Math.random() * 0.012
    });
  }

  // 3. CINEMATIC TRANSFORMER ATTENTION CORES (Rotating Torus Knots + Energy Cages)
  const coreConfigs = [
    { pos: new THREE.Vector3(-45, 12, -35), col: 0x06b6d4, scale: 4.5, speed: 0.008 },
    { pos: new THREE.Vector3(50, -18, -45), col: 0xf97316, scale: 5.0, speed: -0.006 },
    { pos: new THREE.Vector3(-25, -35, -55), col: 0xa855f7, scale: 4.0, speed: 0.010 },
    { pos: new THREE.Vector3(40, 32, -30), col: 0x06b6d4, scale: 3.8, speed: -0.007 }
  ];

  coreConfigs.forEach(cfg => {
    const group = new THREE.Group();
    group.position.copy(cfg.pos);

    // Inner Torus Knot representing attention tensor manifolds
    const tkGeom = new THREE.TorusKnotGeometry(cfg.scale, cfg.scale * 0.28, 48, 8);
    const tkMat = new THREE.MeshStandardMaterial({
      color: cfg.col,
      emissive: cfg.col,
      emissiveIntensity: 0.35,
      wireframe: true,
      transparent: true,
      opacity: 0.28
    });
    const knot = new THREE.Mesh(tkGeom, tkMat);
    group.add(knot);

    // Outer spherical pulse shell
    const shellGeom = new THREE.IcosahedronGeometry(cfg.scale * 1.5, 1);
    const shellMat = new THREE.MeshBasicMaterial({
      color: cfg.col,
      wireframe: true,
      transparent: true,
      opacity: 0.12
    });
    const shell = new THREE.Mesh(shellGeom, shellMat);
    group.add(shell);

    scene.add(group);
    aiCores.push({ group, knot, shell, speed: cfg.speed });
  });

  // Background deep ambient stars
  const bgStarCount = 800;
  const bgStarGeo = new THREE.BufferGeometry();
  const bgStarPos = new Float32Array(bgStarCount * 3);
  for (let s = 0; s < bgStarCount; s++) {
    bgStarPos[s * 3] = (Math.random() - 0.5) * 500;
    bgStarPos[s * 3 + 1] = (Math.random() - 0.5) * 500;
    bgStarPos[s * 3 + 2] = (Math.random() - 0.5) * 400 - 100;
  }
  bgStarGeo.setAttribute('position', new THREE.BufferAttribute(bgStarPos, 3));
  const bgStarMat = new THREE.PointsMaterial({ size: 1.0, color: 0x94a3b8, transparent: true, opacity: 0.4 });
  const bgStars = new THREE.Points(bgStarGeo, bgStarMat);
  scene.add(bgStars);

  window.addEventListener('resize', onWindowResize);
  document.addEventListener('mousemove', onMouseMove);

  simulateLoading();
  animate();
}

function simulateLoading() {
  const fill = document.getElementById('loader-fill');
  const pct = document.getElementById('loader-pct');
  const loader = document.getElementById('loader');
  let progress = 0;

  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 8;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => {
        if (loader) {
          loader.style.opacity = '0';
          setTimeout(() => loader.style.display = 'none', 800);
        }
      }, 250);
    }
    if (fill) fill.style.width = `${progress}%`;
    if (pct) pct.innerText = `${progress}%`;
  }, 35);
}

let mouseX = 0, mouseY = 0;
function onMouseMove(event) {
  mouseX = (event.clientX - window.innerWidth / 2) * 0.02;
  mouseY = (event.clientY - window.innerHeight / 2) * 0.02;
}

function onWindowResize() {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  const time = Date.now() * 0.001;

  // Slowly drift and rotate neural constellation
  if (neuralPoints) {
    neuralPoints.rotation.y = time * 0.02;
    neuralPoints.rotation.x = Math.sin(time * 0.015) * 0.04;
  }
  if (neuralLines) {
    neuralLines.rotation.y = time * 0.02;
    neuralLines.rotation.x = Math.sin(time * 0.015) * 0.04;
  }

  // Animate Attention Cores
  aiCores.forEach((core, idx) => {
    core.knot.rotation.x += core.speed;
    core.knot.rotation.y += core.speed * 1.5;
    core.shell.rotation.z -= core.speed * 0.8;
    core.group.position.y += Math.sin(time * 1.5 + idx) * 0.03;
  });

  // Animate synaptic data packets / token streaming
  dataPackets.forEach(dp => {
    dp.progress += dp.speed;
    if (dp.progress >= 1.0) {
      dp.progress = 0.0;
    }
    dp.mesh.position.lerpVectors(dp.pair.p1, dp.pair.p2, dp.progress);
  });

  // Smooth camera flight interpolation across cinematic targets
  const targetView = getCameraTargets(sectionOrder[activeSectionIdx]);
  if (camera && currentLookAt) {
    camera.position.lerp(targetView.pos, 0.035);
    currentLookAt.lerp(targetView.look, 0.035);

    // Parallax subtle camera tilt
    camera.position.x += (mouseX - camera.position.x) * 0.015;
    camera.position.y += (-mouseY - camera.position.y) * 0.015;

    camera.lookAt(currentLookAt);
  }

  if (renderer && scene && camera) {
    renderer.render(scene, camera);
  }
}

/* ========= SCROLL & NAVIGATION MANAGEMENT ========= */

function goSection(sectionId) {
  const newIdx = sectionOrder.indexOf(sectionId);
  if (newIdx === -1) return;

  activeSectionIdx = newIdx;

  document.querySelectorAll('.hud-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.section === sectionId);
  });

  if (sectionId === 'ai-expertise') {
    animateSkillBadges();
  }
}

function animateSkillBadges() {
  document.querySelectorAll('.adc-list li').forEach((li, idx) => {
    li.style.opacity = 0;
    li.style.transform = 'translateX(-10px)';
    setTimeout(() => {
      li.style.transition = 'all 0.4s ease';
      li.style.opacity = 1;
      li.style.transform = 'translateX(0)';
    }, idx * 40);
  });
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
      setTimeout(typeEffect, 2200);
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
  setTimeout(typeEffect, isDeleting ? 25 : 75);
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
          <div class="pc-features-title">// Key Capabilities & Research Findings:</div>
          <ul class="pc-features">
            ${p.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
      </div>
      <div class="pc-foot">
        <span class="pc-lang">LANG: ${p.lang}</span>
        <div class="pc-actions">
          <a href="${p.url}" target="_blank" class="pc-action-btn github-btn" onclick="event.stopPropagation();">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub Repo
          </a>
          ${hasLiveUrl ? `
          <a href="${p.liveUrl}" target="_blank" class="pc-action-btn live-btn" onclick="event.stopPropagation();">
            <span class="btn-live-dot"></span>
            Live Deployment
          </a>` : ''}
          <button class="pc-action-btn console-btn">
            Telemetry Console ->
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
  'b13-sft-dataset': '$ huggingface-cli dataset info sofienehmz/b13-cybersecurity-sft-datasets\n[*] Dataset: sofienehmz/b13-cybersecurity-sft-datasets\n[+] Config master_unified: 16,874 ChatML samples\n[+] Config vulnerabilities_v3: 10,000 CVE samples with CoT reasoning\n[+] Config code_security: 5,591 SAST samples with CWE mapping\n[+] Config redteam_pentest: 1,003 multi-turn conversations\n[+] Evals: 130,173 security records across agent tools & skills',
  'hspn-mai-arc': '$ python evaluate_arc_submission.py --framework hspn-mai\n[*] Initializing HSPN-MAI Neuro-Symbolic generalizer...\n[+] Author: Vaultguard / sniper4u2\n[+] System 1: Neural topological prior search & grid objectness active\n[+] System 2: Metacognitive DSL verification & program execution engine\n[*] Emitting verified submission.parquet to Kaggle evaluation gateway\n[+] Target benchmark: ARC-AGI-2 & ARC-AGI-3 (Prize 2026)',
  'barbados-ocr': '$ python barbados_train_v17.py --epochs 50 --gpu 0\n[*] Initializing Kraken HTR + PyTorch Lightning engine...\n[+] Sauvola adaptive binarization applied to historical transcripts\n[+] Model architecture: CNN + LiGRU + CTC loss\n[*] Resuming epoch checkpoint 17/50 (Warmup lr: 1e-4)\n[+] Transductive consensus fusion: RapidFuzz token edit-distance (6 models)\n[+] Validated CER/WER threshold: OPTIMAL',
  'bias-bounty': '$ python src/baseline.py --dataset overture-maps-2026\n[*] Ingesting Census TIGER/Line & Overture building footprints via DuckDB...\n[+] Enforcing deterministic seed contract: SEED=4217\n[+] Joining CDC Social Vulnerability Indices (SVI)\n[*] Non-parametric probability calibration active\n[+] Evaluated algorithmic equity metric on Zindi benchmark',
  'gaia-agent': '$ python gaia_agent.py\n[*] Initializing smolagents CodeAgent engine...\n[+] Backend model: Qwen2.5-Coder-32B-Instruct (HF Inference)\n[+] Registered tools: DuckDuckGoSearch, VisitWebpage, PythonREPL\n[+] Gradio interactive console active on Hugging Face Space',
  c2server: '$ ./c2server --start\n[*] Loading configurations...\n[+] SS7 exploitation module: initialized\n[+] Auto-agent scanning active\n[*] C2 daemon listening on websocket :8000\n[+] Mythos Learner status: CONNECTED\n[+] Active sessions: 3 remote agents configured',
  phalanx: '$ python phalanx.py --model qwen3.6-35b-moe.gguf\n[*] Initializing model loader...\n[+] Loaded Qwen3.6-35B-A3B (MoE 256 experts)\n[*] System VRAM: 80.00 GB (NVIDIA A100)\n[*] Offloaded 80 layers to GPU (CUDA)\n[+] REST Endpoint active at http://localhost:8080/v1',
  vaultguard: '$ vaultguard status\n[+] Protocol status: ACTIVE\n[+] 137 Edge functions running on Cloudflare Workers\n[*] Biometric WebAuthn check: PASSED\n[+] Cold wallet multi-sig nodes: 3/5 verified\n[+] ZKP Identity check: VALIDATED',
  insolvency: '$ monitor run\n[*] Scraping UK public insolvency directories...\n[+] Indexed 1,247 firms\n[-] Detected credit drops on 4 firms\n[*] Formatted Celery dispatch pipeline\n[+] Daily Excel report sent to admins',
  'mythos-learner': '$ mythos-learner scan --dir /home/b13/\n[*] Scanning codebase directories...\n[+] Indexed 102 operational skills\n[+] Saved local state to learner_state.json\n[*] Local Ollama check: qwen2.5-coder active\n[+] Agent planning sequence complete',
  'ai-discovery': '$ python ai_llm_discovery.py\n[*] Deep AI Asset Inventory Scanning...\n[+] Found 8 quantized local models (.gguf)\n[+] Found sentence-transformers (all-MiniLM-L6-v2)\n[+] Found active Continue & LMStudio config files\n[*] Report outputted to ~/ai_llm_deep_analysis.txt'
};\n\nfunction openModal(id) {
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
          <div class="modal-sec-title">Overview</div>
          <p class="modal-desc">${p.desc}</p>
        </div>
        <div>
          <div class="modal-sec-title">Deployment Status</div>
          <span class="pstatus ${p.status}">${p.status.toUpperCase()}</span>
        </div>
        <div>
          <div class="modal-sec-title">Tech Stack</div>
          <div class="modal-tags">${p.tech.map(t => `<span class="modal-tag">${t}</span>`).join('')}</div>
        </div>
        <a href="${p.url}" target="_blank" class="modal-btn">GitHub Repository -></a>
      </div>
      <div class="modal-col">
        <div>
          <div class="modal-sec-title">Key Features & Invariants</div>
          <ul class="modal-feats">${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
        </div>
        <div>
          <div class="modal-sec-title">Terminal Telemetry</div>
          <div class="modal-terminal-hdr">b13@darkspace:~/${p.id}$</div>
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
      <img src="${c.path}" alt="${c.name}" style="max-width:100%; max-height: 60vh; border-radius:4px; border: 1px solid var(--border)">
      <div style="font-family:var(--font-mono); font-size: 0.8rem; color:var(--text-dim)">
        Credential Verification Category: <span style="color:var(--cyan)">${c.cat.toUpperCase()}</span>
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
  init3D();

  // Navigation: click scrolls smoothly to the section
  document.querySelectorAll('.hud-btn').forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      const sectionId = btn.dataset.section;
      const targetEl = document.getElementById(sectionId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    };
  });

  // IntersectionObserver: detect which section is in viewport, update 3D camera target
  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -30% 0px',
    threshold: 0
  };
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        goSection(entry.target.id);
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

  // Modal close
  document.getElementById('modal-close').onclick = closeModal;
  document.getElementById('modal-bg').onclick = (e) => {
    if (e.target.id === 'modal-bg') closeModal();
  };
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Render data
  renderProjects();
  renderCertificates();
  renderContact();

  typeEffect();
  animateHeroStats();
});

/* ========= HERO STAT COUNTER ANIMATION ========= */

function animateHeroStats() {
  const stats = [
    { el: null, selector: '.hstat:nth-child(1) .hstat-n', end: 22, suffix: 'M+', duration: 1200 },
    { el: null, selector: '.hstat:nth-child(3) .hstat-n', end: 7,  suffix: '',   duration: 800  },
    { el: null, selector: '.hstat:nth-child(5) .hstat-n', end: 35, suffix: 'B+', duration: 1000 },
    { el: null, selector: '.hstat:nth-child(7) .hstat-n', end: 102,suffix: '',   duration: 1400 }
  ];

  stats.forEach(({ selector, end, suffix, duration }) => {
    const el = document.querySelector(selector);
    if (!el) return;

    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * end);
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }

    setTimeout(() => requestAnimationFrame(tick), 500);
  });
}
