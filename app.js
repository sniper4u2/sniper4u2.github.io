'use strict';

/* ========= DATA DEFINITIONS ========= */

const ROLES = [
  "Senior AI/LLM Engineer",
  "Systems Architect",
  "RAG & Agent Developer",
  "Full-Stack Platform Engineer"
];

const PROJECTS = [
  {
    id: 'c2server',
    name: 'AI-Integrated C2 Server',
    icon: '⚙️',
    status: 'active',
    cat: 'ai',
    desc: 'Advanced command & control framework with FastAPI, WebSockets, and autonomous AI pentesting agent orchestration. Combines legacy exploit modules with dynamic LLM planning.',
    features: [
      'Multi-agent C2 session orchestration',
      'FastAPI + WebSockets real-time messaging',
      'Mythos Learner autonomous scanning & enhancement loop',
      'Integration with Ollama/LMStudio local APIs',
      'Dynamic CVE threat intelligence mapping',
      'Redis & PostgreSQL telemetry persistence'
    ],
    tech: ['Python', 'FastAPI', 'WebSockets', 'Ollama', 'Redis', 'Docker'],
    url: 'https://github.com/spaypeur/c2server',
    lang: 'Python'
  },
  {
    id: 'phalanx',
    name: 'Phalanx X Local API',
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
    url: 'https://github.com/spaypeur',
    lang: 'Python'
  },
  {
    id: 'vaultguard',
    name: 'VaultGuard institutional P2P',
    icon: '🔐',
    status: 'live',
    cat: 'crypto',
    desc: 'Institutional P2P crypto security & OTC settlement engine. Deployed on Cloudflare Workers edge across 300+ cities. Implements ZKP identity vaults and WebAuthn/FIDO2 biometrics.',
    features: [
      '137 API endpoints running on Cloudflare Edge',
      'Zero-Knowledge Proof progressive identity disclosure',
      'Multi-sig institution custody protocol',
      'Real-time threat monitoring from Shodan/VirusTotal',
      'Stripe & BTCPay payment integration',
      'FIDO2/WebAuthn passwordless biometric logic'
    ],
    tech: ['TypeScript', 'Cloudflare Workers', 'ZKP', 'React', 'Supabase'],
    url: 'https://github.com/spaypeur',
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
      'Identifies credit score adjustments ≥5%',
      'Celery & Redis async scheduling pipeline',
      'Automated daily/weekly multi-sheet Excel dispatch',
      'Multi-tenant dashboard with client filters',
      'PostgreSQL data persistence layer'
    ],
    tech: ['Python', 'FastAPI', 'Celery', 'Redis', 'React', 'PostgreSQL'],
    url: 'https://github.com/spaypeur',
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
    url: 'https://github.com/spaypeur',
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
    url: 'https://github.com/spaypeur',
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
  { name: 'CMFC — Personnel Navigant Commercial (Civil Aviation)', path: 'CERTS/personnel navigation commercial.png', cat: 'education' },
  { name: 'Vocational Training — Heavy Vehicle C+E License', path: 'CERTS/driving vehicules with trailers C+E diplome.jpg', cat: 'education' },
  { name: 'Vocational Training — Driving Vehicles with Trailers', path: 'CERTS/driving vihecules with trailers diplome.jpg', cat: 'education' },
  { name: 'Baccalaureate Diploma — Arts (Tunisia)', path: 'CERTS/high school gradutation diplome.jpg', cat: 'education' }
];

const EXPERIENCE = [
  {
    date: 'Oct 2024\n– Present',
    title: 'Senior AI Systems Architect & Platform Consultant',
    co: 'Adarma & Global Clients (Remote)',
    items: [
      'Architected local LLM execution sandbox using llama.cpp and CUDA offloading strategies.',
      'Designed self-hosted RAG pipeline integrating ChromaDB vector storage and sentence-transformer embeddings.',
      'Configured secure model pipelines using AWS Bedrock with strict IAM and fallback policies.',
      'Built multi-agent planning agents mapping file environments, executing automated checks, and compiling metadata.',
      'Supervised secure deployment of local REST interfaces compatible with OpenAI protocol standards.'
    ]
  },
  {
    date: 'Dec 2020\n– Sep 2024',
    title: 'Senior Systems Engineer / Backend Developer',
    co: 'IronNet & Global Enterprises (Remote)',
    items: [
      'Designed high-throughput data processing workflows using FastAPI, Redis, and Celery worker rings.',
      'Optimized backend telemetry ingestion routes decreasing overhead latency by 35%.',
      'Configured multi-tenant dashboard architectures using React and TypeScript on Cloudflare Workers CDN.',
      'Supervised migrations and database replication tasks with zero service outages.',
      'Engineered real-time server alerting and monitoring utilizing Prometheus & Grafana dashboard structures.'
    ]
  },
  {
    date: 'Feb 2018\n– Dec 2020',
    title: 'Full Stack & Infrastructure Engineer',
    co: 'Rubica & SMB Portfolios',
    items: [
      'Developed microservice backends utilizing Python and Node.js with secure token authorization protocols.',
      'Containerized development stacks using Docker Compose and Kubernetes configurations.',
      'Implemented automated continuous integration/deployment pipeline patterns reducing iteration timelines.',
      'Engineered structured document ingestion tools parsing files and populating transactional databases.'
    ]
  },
  {
    date: 'Apr 2017\n– Present',
    title: 'Freelance Software & AI Solutions Consultant',
    co: 'Upwork (Top Rated Plus ⭐)',
    items: [
      'Successfully completed over 50 projects for clients in North America, Europe, and Middle East.',
      'Delivered customized APIs, complex database schemas, real-time WebSockets solutions, and vector search integrations.',
      'Maintained 100% Client Satisfaction Score with continuous repeat business engagement.'
    ]
  }
];

const CONTACTS = [
  { icon: '💻', label: 'GitHub', val: 'github.com/spaypeur', href: 'https://github.com/spaypeur' },
  { icon: '🛡️', label: 'VaultGuard', val: 'vaultguard.eu.org', href: 'https://vaultguard.eu.org', highlight: true },
  { icon: '🛠️', label: 'Tools Case', val: 'hamzaoui-sofiene-tools-case', href: 'https://start.me/p/KMJvbw/hamzaoui-sofiene-tools-case', highlight: true },
  { icon: '📧', label: 'Email', val: 'admin@vaultguard.eu.org', href: 'mailto:admin@vaultguard.eu.org' },
  { icon: '📄', label: 'CV / Resume', val: 'CV (Complete PDF)', href: 'CERTS/Hamzaoui_Sofiene_CV_Complete.pdf' }
];


/* ========= 3D UNIVERSE SCENE (THREE.JS) ========= */

let scene, camera, renderer;
let stars, starGeometry, starMaterial;
let planets = [];
const sectionOrder = ['hero', 'about', 'ai-expertise', 'projects', 'certificates', 'experience', 'contact'];
let activeSectionIdx = 0;
let currentLookAt = new THREE.Vector3(0, 0, 0);

// Distribute planets across a wider 3D constellation
const PLANET_POSITIONS = {
  hero: new THREE.Vector3(30, 0, 0),
  about: new THREE.Vector3(90, 40, -40),
  'ai-expertise': new THREE.Vector3(-10, -50, -90),
  projects: new THREE.Vector3(-80, 20, 20),
  certificates: new THREE.Vector3(100, -10, 80),
  experience: new THREE.Vector3(30, 70, -30),
  contact: new THREE.Vector3(-40, -80, 40)
};

function getCameraTargets(section) {
  const planetPos = PLANET_POSITIONS[section];
  
  if (window.innerWidth > 968) {
    // Desktop: Camera positioned to look slightly left, placing planet on the right
    return {
      pos: new THREE.Vector3(planetPos.x - 18, planetPos.y + 4, planetPos.z + 55),
      look: new THREE.Vector3(planetPos.x - 18, planetPos.y + 2, planetPos.z)
    };
  } else {
    // Mobile: Camera centered, planet placed below or deep behind
    return {
      pos: new THREE.Vector3(planetPos.x, planetPos.y - 12, planetPos.z + 65),
      look: new THREE.Vector3(planetPos.x, planetPos.y, planetPos.z)
    };
  }
}

function init3D() {
  const container = document.getElementById('universe');
  if (!container) return;

  // Scene
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x040814, 0.004);

  // Camera
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  const startTargets = getCameraTargets('hero');
  camera.position.copy(startTargets.pos);
  currentLookAt.copy(startTargets.look);

  // Renderer
  renderer = new THREE.WebGLRenderer({ canvas: container, antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Lights (Teal & Amber palette matching visual guidelines)
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.15);
  scene.add(ambientLight);

  const tealLight = new THREE.DirectionalLight(0x06b6d4, 1.8);
  tealLight.position.set(50, 50, 50);
  scene.add(tealLight);

  const amberLight = new THREE.DirectionalLight(0xf97316, 1.5);
  amberLight.position.set(-50, -50, 50);
  scene.add(amberLight);

  // Dynamic particle stars
  const starCount = 2000;
  starGeometry = new THREE.BufferGeometry();
  const starPositions = new Float32Array(starCount * 3);
  const starColors = new Float32Array(starCount * 3);

  const colors = [
    new THREE.Color(0x06b6d4), // Cyan
    new THREE.Color(0xf97316), // Amber
    new THREE.Color(0xfbbf24), // Gold
    new THREE.Color(0xffffff)  // White
  ];

  for (let i = 0; i < starCount; i++) {
    starPositions[i * 3] = (Math.random() - 0.5) * 800;
    starPositions[i * 3 + 1] = (Math.random() - 0.5) * 800;
    starPositions[i * 3 + 2] = (Math.random() - 0.5) * 800;

    const chosenColor = colors[Math.floor(Math.random() * colors.length)];
    starColors[i * 3] = chosenColor.r;
    starColors[i * 3 + 1] = chosenColor.g;
    starColors[i * 3 + 2] = chosenColor.b;
  }

  starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

  starMaterial = new THREE.PointsMaterial({
    size: 1.2,
    vertexColors: true,
    transparent: true,
    opacity: 0.6,
    sizeAttenuation: true
  });

  stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);

  // Generate glowing celestial nodes / planets
  sectionOrder.forEach((section, idx) => {
    const planetPos = PLANET_POSITIONS[section];

    const group = new THREE.Group();
    group.position.copy(planetPos);

    // Inner wireframe sphere
    const sphereGeom = new THREE.SphereGeometry(5, 16, 16);
    const color = idx % 2 === 0 ? 0x06b6d4 : 0xf97316;
    const emissive = idx % 2 === 0 ? 0x012c3a : 0x3d1702;

    const sphereMat = new THREE.MeshPhongMaterial({
      color: color,
      emissive: emissive,
      shininess: 30,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    const core = new THREE.Mesh(sphereGeom, sphereMat);
    group.add(core);

    // Outer orbital ring
    const ringGeom = new THREE.RingGeometry(7, 7.5, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: idx % 2 === 0 ? 0xf97316 : 0x06b6d4,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5
    });
    const ring = new THREE.Mesh(ringGeom, ringMat);
    ring.rotation.x = Math.PI / 2.5;
    group.add(ring);

    // Add tiny orbiting moon/node
    const moonGeom = new THREE.SphereGeometry(0.8, 8, 8);
    const moonMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const moon = new THREE.Mesh(moonGeom, moonMat);
    moon.position.set(7.2, 0, 0);
    group.add(moon);

    scene.add(group);
    planets.push({ group, core, ring, moon, section, basePos: planetPos.clone() });

    // Overlay 2D labels in HTML
    createPlanetLabel(planetPos, section);
  });

  window.addEventListener('resize', onWindowResize);
  document.addEventListener('mousemove', onMouseMove);

  simulateLoading();
  animate();
}

function createPlanetLabel(pos, text) {
  const container = document.getElementById('planet-labels');
  if (!container) return;
  const label = document.createElement('div');
  label.className = 'planet-lbl';
  label.id = `lbl-${text}`;
  label.innerText = text.replace('-', ' ');
  container.appendChild(label);
}

function updatePlanetLabels() {
  planets.forEach(p => {
    const label = document.getElementById(`lbl-${p.section}`);
    if (!label) return;

    const tempV = p.group.position.clone();
    tempV.project(camera);

    const x = (tempV.x * 0.5 + 0.5) * window.innerWidth;
    const y = (tempV.y * -0.5 + 0.5) * window.innerHeight;

    label.style.left = `${x}px`;
    label.style.top = `${y}px`;

    // Only show label if it's within range and camera is facing it
    const dist = camera.position.distanceTo(p.group.position);
    if (tempV.z < 1 && dist < 220) {
      label.style.opacity = (1 - (dist / 220)).toFixed(2);
    } else {
      label.style.opacity = 0;
    }
  });
}

function simulateLoading() {
  const fill = document.getElementById('loader-fill');
  const pct = document.getElementById('loader-pct');
  const loader = document.getElementById('loader');
  let progress = 0;

  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 5;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => {
        loader.style.opacity = 0;
        setTimeout(() => loader.style.display = 'none', 800);
      }, 300);
    }
    if (fill) fill.style.width = `${progress}%`;
    if (pct) pct.innerText = `${progress}%`;
  }, 40);
}

let mouseX = 0, mouseY = 0;
function onMouseMove(event) {
  mouseX = (event.clientX - window.innerWidth / 2) * 0.03;
  mouseY = (event.clientY - window.innerHeight / 2) * 0.03;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  const time = Date.now() * 0.001;

  if (stars) {
    stars.rotation.y += 0.00015;
    stars.rotation.x += 0.00005;
  }

  // Rotate planets, rings, animate moons, and fade non-active planets
  planets.forEach((p, idx) => {
    p.core.rotation.y += 0.006;
    p.ring.rotation.z -= 0.004;

    // Orbiter moon trajectory
    if (p.moon) {
      const angle = time * 1.5 + idx;
      p.moon.position.x = Math.cos(angle) * 7.2;
      p.moon.position.z = Math.sin(angle) * 7.2;
    }

    // Slow floating behavior
    if (p.basePos) {
      p.group.position.y = p.basePos.y + Math.sin(time + idx * 1.5) * 1.0;
    }

    // Fade non-active planets to prevent overlap with content panels
    const isActive = (sectionOrder[activeSectionIdx] === p.section);
    const targetCoreOpacity = isActive ? 0.8 : 0.04;
    const targetRingOpacity = isActive ? 0.5 : 0.02;
    const targetMoonOpacity = isActive ? 1.0 : 0.0;
    p.core.material.opacity  = THREE.MathUtils.lerp(p.core.material.opacity,  targetCoreOpacity, 0.06);
    p.ring.material.opacity  = THREE.MathUtils.lerp(p.ring.material.opacity,  targetRingOpacity, 0.06);
    if (p.moon) {
      p.moon.material.transparent = true;
      p.moon.material.opacity = THREE.MathUtils.lerp(p.moon.material.opacity, targetMoonOpacity, 0.06);
    }
  });

  // Camera flight interpolation
  const targetView = getCameraTargets(sectionOrder[activeSectionIdx]);
  camera.position.lerp(targetView.pos, 0.035);
  currentLookAt.lerp(targetView.look, 0.035);

  // Parallax offset
  camera.position.x += (mouseX - camera.position.x) * 0.015;
  camera.position.y += (-mouseY - camera.position.y) * 0.015;

  camera.lookAt(currentLookAt);

  updatePlanetLabels();

  renderer.render(scene, camera);
}

/* ========= SCROLL & NAVIGATION MANAGEMENT ========= */

let lastScrollTime = 0;
const scrollCooldown = 800; // ms

function handleScroll(e) {
  const now = Date.now();
  if (now - lastScrollTime < scrollCooldown) return;

  // Respect panel-inner scroll boundaries — don't hijack scroll while user reads content
  const inner = document.querySelector('section.panel.active .panel-inner');
  if (inner && inner.scrollHeight > inner.clientHeight) {
    const atBottom = inner.scrollTop + inner.clientHeight >= inner.scrollHeight - 4;
    const atTop    = inner.scrollTop <= 4;
    if (e.deltaY > 0 && !atBottom) return;   // still content below — let it scroll
    if (e.deltaY < 0 && !atTop)    return;   // still content above — let it scroll
  }

  if (e.deltaY > 0) {
    navigateSection(1);
  } else {
    navigateSection(-1);
  }
  lastScrollTime = now;
}

function navigateSection(direction) {
  let newIdx = activeSectionIdx + direction;
  if (newIdx >= 0 && newIdx < sectionOrder.length) {
    goSection(sectionOrder[newIdx]);
  }
}

function goSection(sectionId) {
  const newIdx = sectionOrder.indexOf(sectionId);
  if (newIdx === -1) return;

  activeSectionIdx = newIdx;

  // Toggle active DOM panel
  document.querySelectorAll('section.panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === sectionId);
  });

  // Toggle active Nav state
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
    }, idx * 60);
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
      setTimeout(typeEffect, 2000);
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
  setTimeout(typeEffect, isDeleting ? 30 : 80);
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
          <div class="pc-features-title">// Key Capabilities:</div>
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
            Launch App
          </a>` : ''}
          <button class="pc-action-btn console-btn">
            Telemetry Console →
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

/* ========= TIMELINE RENDERING ========= */

function renderTimeline() {
  const tl = document.getElementById('timeline');
  if (!tl) return;
  tl.innerHTML = '';

  EXPERIENCE.forEach(e => {
    const item = document.createElement('div');
    item.className = 'tl-item';
    item.innerHTML = `
      <div class="tl-node"></div>
      <div class="tl-content">
        <div class="tl-head">
          <div>
            <div class="tl-title">${e.title}</div>
            <div class="tl-company">${e.co}</div>
          </div>
          <div class="tl-date">${e.date.replace('\n', ' ')}</div>
        </div>
        <ul class="tl-list">${e.items.map(item => `<li>${item}</li>`).join('')}</ul>
      </div>
    `;
    tl.appendChild(item);
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
        <a href="${p.url}" target="_blank" class="modal-btn">GitHub Repository →</a>
      </div>
      <div class="modal-col">
        <div>
          <div class="modal-sec-title">Key Features</div>
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

  // Navigation Links click bindings
  document.querySelectorAll('.hud-btn').forEach(btn => {
    btn.onclick = () => goSection(btn.dataset.section);
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

  // Modal close binding
  document.getElementById('modal-close').onclick = closeModal;
  document.getElementById('modal-bg').onclick = (e) => {
    if (e.target.id === 'modal-bg') closeModal();
  };
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Mouse wheel scroll hijack
  window.addEventListener('wheel', handleScroll, { passive: true });

  // Key navigation
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      navigateSection(1);
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      navigateSection(-1);
    }
  });

  // Render static data structures
  renderProjects();
  renderCertificates();
  renderTimeline();
  renderContact();

  typeEffect();

  // Animate hero stat counters on load
  animateHeroStats();
});

/* ========= HERO STAT COUNTER ANIMATION ========= */

function animateHeroStats() {
  const stats = [
    { el: null, selector: '.hstat:nth-child(1) .hstat-n', end: 20, suffix: '+', duration: 1200 },
    { el: null, selector: '.hstat:nth-child(3) .hstat-n', end: 8,  suffix: '',  duration: 800  },
    { el: null, selector: '.hstat:nth-child(5) .hstat-n', end: 35, suffix: 'B+',duration: 1000 },
    { el: null, selector: '.hstat:nth-child(7) .hstat-n', end: 102,suffix: '',  duration: 1400 }
  ];

  stats.forEach(({ selector, end, suffix, duration }) => {
    const el = document.querySelector(selector);
    if (!el) return;

    const startTime = performance.now();
    const startVal = 0;

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * end);
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }

    // Small delay to let the loader finish
    setTimeout(() => requestAnimationFrame(tick), 600);
  });
}
