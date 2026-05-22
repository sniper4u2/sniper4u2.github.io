'use strict';

/* ========= TRANSLATIONS ========= */
const T = {
  en:{
    nav_projects:'Projects', nav_certificates:'Certificates', nav_skills:'Skills', nav_experience:'Experience',
    nav_arsenal:'Arsenal', nav_contact:'Contact', nav_cv:'↓ CV', nav_online:'ONLINE',
    hero_tag:'// MULTIDISCIPLINARY SYSTEMS ARCHITECT & SECURITY LEADER',
    hero_desc:'20+ years bridging cybersecurity, telecom protocol defense (SS7/GTP/Diameter), backend and full-stack engineering, systems architecture, infrastructure automation, cryptography, and operational consulting. Proven across Adarma, IronNet, Rubica, and global enterprise clients — from red team operations to production-grade platform engineering.',
    stat_years:'Years Active', stat_repos:'GitHub Repos', stat_missions:'Major Missions',
    stat_tools:'Security Tools', stat_c2:'C2 Frameworks',
    btn_projects:'View Projects', btn_cv:'Download CV',
    tag_redteam:'Red Team Ops', tag_c2:'C2 Frameworks', tag_ios:'iOS Security',
    tag_malware:'Malware Dev', tag_ai:'AI/LLM Security', tag_cve:'CVE Research',
    sec_projects:'Featured Projects', sec_certificates:'Certifications & Achievements', sec_skills:'Capabilities',
    sec_exp:'Experience', sec_arsenal:'Tool Arsenal',
    sec_arsenal_sub:'@sniper4u2 · 131 repos | @spaypeur · 16 repos',
    sec_contact:'Get In Touch',
    f_all:'All', f_redteam:'Red Team', f_crypto:'Crypto', f_hw:'Hardware',
    sk_tech:'Tech Stack', sk_tools:'Security Tools', sk_langs:'Languages',
    contact_desc:'Open for consulting, red team engagements, security architecture, backend engineering, telecom security, and infrastructure projects. Upwork Top Rated Plus — 100% mission success rate.',
    cc_name:'name', cc_phone:'phone', cc_loc:'location', cc_loc_val:'"Tunisia · Remote"',
    cc_status:'status', cc_available:'AVAILABLE',
    footer_built:'Built with terminal aesthetics · 2025', footer_enc:'Encrypted',
    view_details:'View Details ▸', open_repo:'View Repository / Live Demo →',
    feat_hdr:'// KEY FEATURES', tech_hdr:'// TECH STACK',
    links_hdr:'// LINKS', term_hdr:'// TERMINAL OUTPUT', overview_hdr:'// OVERVIEW',
    typed:['Multidisciplinary Systems Architect · 20+ Years','Telecom Security & Protocol Defense (SS7/GTP)','C2 Framework Developer & Red Team Operator','Backend / Full-Stack Engineer','Infrastructure & Cloud Automation','Cryptography · ZKP · Blockchain Security','Operational Consulting & Field Specialist','Multilingual: AR · FR · EN · RU · DE'],
  },
  fr:{
    nav_projects:'Projets', nav_certificates:'Certificats', nav_skills:'Compétences', nav_experience:'Expérience',
    nav_arsenal:'Arsenal', nav_contact:'Contact', nav_cv:'↓ CV', nav_online:'EN LIGNE',
    hero_tag:'// ARCHITECTE SYSTÈMES MULTIDISCIPLINAIRE & LEADER SÉCURITÉ',
    hero_desc:'Plus de 20 ans en cybersécurité, défense des protocoles télécoms (SS7/GTP/Diameter), ingénierie backend et full-stack, architecture systèmes, automatisation d\'infrastructure, cryptographie et consulting opérationnel. Prouvé chez Adarma, IronNet, Rubica et clients internationaux.',
    stat_years:'Ans d\'Activité', stat_repos:'Dépôts GitHub', stat_missions:'Missions Majeures',
    stat_tools:'Outils Sécurité', stat_c2:'Frameworks C2',
    btn_projects:'Voir les Projets', btn_cv:'Télécharger CV',
    tag_redteam:'Red Team', tag_c2:'Frameworks C2', tag_ios:'Sécurité iOS',
    tag_malware:'Dév. Malware', tag_ai:'Sécurité IA/LLM', tag_cve:'Recherche CVE',
    sec_projects:'Projets Vedettes', sec_certificates:'Certifications & Réalisations', sec_skills:'Compétences',
    sec_exp:'Expérience', sec_arsenal:'Arsenal d\'Outils',
    sec_arsenal_sub:'@sniper4u2 · 131 dépôts | @spaypeur · 16 dépôts',
    sec_contact:'Me Contacter',
    f_all:'Tout', f_redteam:'Red Team', f_crypto:'Crypto', f_hw:'Matériel',
    sk_tech:'Stack Technique', sk_tools:'Outils Sécurité', sk_langs:'Langues',
    contact_desc:'Disponible pour consulting, missions red team, architecture sécurité, ingénierie backend, sécurité télécom et projets d\'infrastructure. Top Rated Plus sur Upwork — 100% de succès.',
    cc_name:'nom', cc_phone:'téléphone', cc_loc:'localisation', cc_loc_val:'"Tunisie · À distance"',
    cc_status:'statut', cc_available:'DISPONIBLE',
    footer_built:'Conçu avec une esthétique terminal · 2025', footer_enc:'Chiffré',
    view_details:'Voir Détails ▸', open_repo:'Voir Dépôt / Démo →',
    feat_hdr:'// FONCTIONNALITÉS CLÉS', tech_hdr:'// STACK TECHNIQUE',
    links_hdr:'// LIENS', term_hdr:'// SORTIE TERMINAL', overview_hdr:'// APERÇU',
    typed:['Architecte Systèmes Multidisciplinaire · 20+ Ans','Sécurité Télécom & Défense Protocolaire (SS7/GTP)','Développeur C2 & Opérateur Red Team','Ingénieur Backend / Full-Stack','Automatisation Infrastructure & Cloud','Cryptographie · ZKP · Sécurité Blockchain','Consulting Opérationnel & Spécialiste Terrain','Multilingue: AR · FR · EN · RU · DE'],
  },
  ar:{
    nav_projects:'المشاريع', nav_certificates:'الشهادات', nav_skills:'المهارات', nav_experience:'الخبرة',
    nav_arsenal:'الترسانة', nav_contact:'التواصل', nav_cv:'↓ السيرة', nav_online:'متصل',
    hero_tag:'// مهندس أنظمة متعدد التخصصات وقائد أمني',
    hero_desc:'أكثر من 20 عامًا في الأمن السيبراني، دفاع بروتوكولات الاتصالات (SS7/GTP/Diameter)، هندسة Backend وFull-Stack، هندسة الأنظمة، أتمتة البنية التحتية، التشفير، والاستشارات التشغيلية. مُثبت في Adarma وIronNet وRubica وعملاء دوليين.',
    stat_years:'سنوات خبرة', stat_repos:'مستودعات GitHub', stat_missions:'مهمات كبرى',
    stat_tools:'أدوات أمنية', stat_c2:'أطر C2',
    btn_projects:'عرض المشاريع', btn_cv:'تحميل السيرة الذاتية',
    tag_redteam:'عمليات Red Team', tag_c2:'أطر C2', tag_ios:'أمن iOS',
    tag_malware:'تطوير البرمجيات الخبيثة', tag_ai:'أمن الذكاء الاصطناعي', tag_cve:'أبحاث CVE',
    sec_projects:'المشاريع المميزة', sec_certificates:'الشهادات والإنجازات', sec_skills:'القدرات',
    sec_exp:'الخبرة المهنية', sec_arsenal:'ترسانة الأدوات',
    sec_arsenal_sub:'@sniper4u2 · 131 مستودع | @spaypeur · 16 مستودع',
    sec_contact:'تواصل معي',
    f_all:'الكل', f_redteam:'Red Team', f_crypto:'كريبتو', f_hw:'أجهزة',
    sk_tech:'التقنيات', sk_tools:'أدوات الأمن', sk_langs:'اللغات',
    contact_desc:'متاح للاستشارات، عمليات Red Team، هندسة الأمن، هندسة Backend، أمن الاتصالات، ومشاريع البنية التحتية. مرتبة Top Rated Plus على Upwork — نسبة نجاح 100%.',
    cc_name:'الاسم', cc_phone:'الهاتف', cc_loc:'الموقع', cc_loc_val:'"تونس · عن بُعد"',
    cc_status:'الحالة', cc_available:'متاح',
    footer_built:'مصمم بأسلوب الطرفية · 2025', footer_enc:'مشفّر',
    view_details:'عرض التفاصيل ▸', open_repo:'عرض المستودع / العرض التجريبي →',
    feat_hdr:'// الميزات الرئيسية', tech_hdr:'// التقنيات المستخدمة',
    links_hdr:'// الروابط', term_hdr:'// مخرجات الطرفية', overview_hdr:'// نظرة عامة',
    typed:['مهندس أنظمة متعدد التخصصات · 20+ عام','أمن الاتصالات ودفاع البروتوكولات (SS7/GTP)','مطوّر أطر C2 ومشغّل Red Team','مهندس Backend / Full-Stack','أتمتة البنية التحتية والسحاب','التشفير · ZKP · أمن البلوكشين','استشارات تشغيلية وخبرة ميدانية','متعدد اللغات: عربي · فرنسي · إنجليزي · روسي · ألماني'],
  }
};

/* ========= DATA ========= */
const PROJECTS=[
  {id:'c2server',name:'C2 Server',icon:'⚔',status:'active',cat:'redteam',
   desc:{en:'Advanced Command & Control server with FastAPI, WebSocket, real-world SS7/GSM exploitation, OSINT services, CVE exploit database (2,847 entries), satellite communications simulation, and a complete web dashboard.',
         fr:'Serveur de Commande et Contrôle avancé avec FastAPI, WebSocket, exploitation SS7/GSM réelle, services OSINT, base de données CVE (2 847 entrées), simulation satellite et tableau de bord web complet.',
         ar:'خادم قيادة وتحكم متقدم مع FastAPI وWebSocket واستغلال SS7/GSM الحقيقي وخدمات OSINT وقاعدة بيانات CVE (2847 إدخال) ومحاكاة الاتصالات الفضائية ولوحة تحكم ويب كاملة.'},
   features:['SS7/GSM signaling exploitation modules','CVE exploit database — 2,847 entries','WebSocket real-time C2 sessions','OSINT & device fingerprinting service','Satellite comms simulation','JWT auth + RBAC','Redis/PostgreSQL persistence','Docker Compose deployment'],
   tech:['Python','FastAPI','WebSocket','Redis','Docker','PostgreSQL'],url:'https://github.com/spaypeur',lang:'Python'},

  {id:'vaultguard',name:'VaultGuard',icon:'🔐',status:'live',cat:'crypto',
   desc:{en:'Production-deployed institutional crypto security & P2P OTC platform. 137 API endpoints on Cloudflare edge (300+ cities, sub-450ms latency). Multi-sig custody, ZKP identity, AES-256-GCM, WebAuthn/FIDO2, compliance engine — 5 integrated defense layers. Seed round Q2 2026.',
         fr:'Plateforme institutionnelle de sécurité crypto et OTC P2P déployée sur Cloudflare Edge (300+ villes). 137 endpoints API, garde multi-sig, ZKP, AES-256-GCM, conformité — 5 couches de défense intégrées. Seed Q2 2026.',
         ar:'منصة أمن مؤسسي للعملات الرقمية وتداول OTC على Cloudflare Edge. 137 نقطة API، حضانة متعددة التوقيع، ZKP، AES-256-GCM، محرك الامتثال — 5 طبقات دفاع متكاملة. جولة بذرية Q2 2026.'},
   features:['137 API endpoints — 95% backend complete','Institutional P2P OTC desk with progressive identity disclosure','Zero-Knowledge Proof + AES-256-GCM identity vault','Real-time threat intel from 8+ OSINT feeds (Shodan, VirusTotal…)','WebAuthn/FIDO2 biometric auth + JWT + CSRF','Stripe + BTCPay payment rails live','KYC/AML compliance engine','Deployed on Cloudflare Workers — sub-450ms globally'],
   tech:['React','TypeScript','Cloudflare Workers','Supabase','ZKP','AES-256','WebAuthn','BTCPay'],url:'https://vaultguard.eu.org',lang:'TypeScript'},

  {id:'ios-bypass',name:'iOS Activation Bypass',icon:'🍎',status:'classified',cat:'ios',
   desc:{en:'Complete iOS jailbreak + iCloud activation lock bypass toolkit supporting checkra1n, SSH ramdisk injection, patched mobileactivationd binary deployment, and full cross-platform automation for iPhone 6s → iPhone X.',
         fr:'Boîte à outils complète pour le jailbreak iOS et le contournement du verrouillage d\'activation iCloud via checkra1n, injection en ramdisk SSH et déploiement de mobileactivationd patchée.',
         ar:'مجموعة أدوات كاملة لكسر حماية iOS وتجاوز قفل تفعيل iCloud عبر checkra1n وحقن SSH ramdisk ونشر mobileactivationd مُعدَّل.'},
   features:['checkra1n jailbreak integration','SSH ramdisk mode bypass','mobileactivationd binary patching','libimobiledevice full support','WebDriverAgent iOS automation','Supports iPhone 6s → X (iOS 12–16)'],
   tech:['Bash','Python','libimobiledevice','Objective-C','SSH'],url:'https://github.com/spaypeur',lang:'Bash / Python'},

  {id:'phalanx',name:'Phalanx X',icon:'🤖',status:'beta',cat:'ai',
   desc:{en:'Local LLM API server providing full OpenAI-compatible endpoints. Runs any GGUF model locally with GPU acceleration, supports MoE architectures, and exposes /v1/chat/completions for agent integration.',
         fr:'Serveur API LLM local offrant des endpoints compatibles OpenAI. Exécute n\'importe quel modèle GGUF localement avec accélération GPU et expose /v1/chat/completions pour l\'intégration d\'agents.',
         ar:'خادم API للنماذج اللغوية الكبيرة محليًا مع نقاط نهاية متوافقة مع OpenAI. يدعم أي نموذج GGUF مع تسريع GPU ومعمارية MoE.'},
   features:['Full OpenAI-compatible REST API','GGUF model loading (any size)','MoE architecture support','GPU layer offloading (CUDA/Metal)','/v1/chat/completions + /v1/responses','Context window 1K–128K tokens'],
   tech:['Python','aiohttp','llama.cpp','GGUF','CUDA','REST API'],url:'https://github.com/spaypeur',lang:'Python'},

  {id:'uk-insolvency',name:'UK Insolvency Monitor',icon:'📊',status:'active',cat:'web',
   desc:{en:'Enterprise risk monitoring platform tracking 1,000+ UK companies for insolvency events, credit score drops ≥5%, and director changes. Sends automated daily/weekly/monthly Excel reports with configurable thresholds.',
         fr:'Plateforme de surveillance des risques d\'entreprise suivant 1 000+ sociétés britanniques pour les insolvabilités, baisses de notation de crédit et changements de directeurs avec rapports Excel automatisés.',
         ar:'منصة مراقبة مخاطر المؤسسات تتتبع 1000+ شركة بريطانية للإفلاس وانخفاضات التقييم الائتماني وتغييرات المديرين مع تقارير Excel تلقائية.'},
   features:['Real-time insolvency event tracking','Credit score drop alerts (≥5%, ≥10%, ≥20%)','Director change monitoring','Daily/weekly/monthly Excel reports','5-sheet Excel export','Docker + PostgreSQL + Redis + Celery'],
   tech:['Python','FastAPI','React','Celery','PostgreSQL','Redis'],url:'https://github.com/spaypeur',lang:'Python'},

  {id:'cloudflare-disc',name:'Cloudflare Discovery',icon:'🌐',status:'active',cat:'web',
   desc:{en:'Cloudflare CDN real-IP discovery tool using StealthyFetcher and async subdomain enumeration. Scans 40+ subdomains against all Cloudflare CIDR ranges to identify unprotected origin servers.',
         fr:'Outil de découverte d\'IP réelles derrière Cloudflare CDN via StealthyFetcher et l\'énumération asynchrone de sous-domaines sur les plages CIDR Cloudflare.',
         ar:'أداة اكتشاف IP الحقيقية خلف Cloudflare CDN باستخدام StealthyFetcher وتعداد النطاقات الفرعية غير المتزامن عبر نطاقات CIDR.'},
   features:['40+ subdomain enumeration','Full Cloudflare CIDR detection','StealthyFetcher bypass engine','Async parallel scanning','Origin IP validation'],
   tech:['Python','asyncio','Scrapling','DNS','socket','ipaddress'],url:'https://github.com/spaypeur',lang:'Python'},
];

const SKILLS={
  en:[
    {n:'Offensive Security / Red Teaming',p:97},{n:'Penetration Testing (Web/Network/Mobile)',p:96},
    {n:'C2 Framework Development',p:95},{n:'Backend Engineering (Python/FastAPI/Node.js)',p:95},
    {n:'Telecom Security (SS7/GSM/GTP/Diameter)',p:93},{n:'OSINT & Digital Intelligence',p:93},
    {n:'Systems Architecture & Infrastructure',p:92},{n:'Network Architecture & Threat Detection',p:92},
    {n:'Full-Stack Development (React/TypeScript)',p:90},{n:'Cloud Security & Automation (AWS/GCP)',p:88},
    {n:'Cryptography & Blockchain Security (ZKP)',p:85},{n:'AI/LLM Integration & Security',p:85},
    {n:'Malware Analysis & Reverse Engineering',p:84},{n:'DevOps / CI-CD / Containerization',p:82},
  ],
  fr:[
    {n:'Sécurité Offensive / Red Team',p:97},{n:'Tests d\'Intrusion (Web/Réseau/Mobile)',p:96},
    {n:'Développement de Frameworks C2',p:95},{n:'Ingénierie Backend (Python/FastAPI/Node.js)',p:95},
    {n:'Sécurité Télécom (SS7/GSM/GTP/Diameter)',p:93},{n:'OSINT & Intelligence Numérique',p:93},
    {n:'Architecture Systèmes & Infrastructure',p:92},{n:'Architecture Réseau & Détection',p:92},
    {n:'Développement Full-Stack (React/TypeScript)',p:90},{n:'Sécurité Cloud & Automatisation (AWS/GCP)',p:88},
    {n:'Cryptographie & Sécurité Blockchain (ZKP)',p:85},{n:'Sécurité IA/LLM',p:85},
    {n:'Analyse Malware & Rétro-ingénierie',p:84},{n:'DevOps / CI-CD / Conteneurisation',p:82},
  ],
  ar:[
    {n:'الأمن الهجومي / Red Team',p:97},{n:'اختبار الاختراق (ويب/شبكات/موبايل)',p:96},
    {n:'تطوير أطر C2',p:95},{n:'هندسة Backend (Python/FastAPI/Node.js)',p:95},
    {n:'أمن الاتصالات (SS7/GSM/GTP/Diameter)',p:93},{n:'OSINT والاستخبارات الرقمية',p:93},
    {n:'هندسة الأنظمة والبنية التحتية',p:92},{n:'هندسة الشبكات واكتشاف التهديدات',p:92},
    {n:'تطوير Full-Stack (React/TypeScript)',p:90},{n:'أمن السحاب والأتمتة (AWS/GCP)',p:88},
    {n:'التشفير وأمن البلوكشين (ZKP)',p:85},{n:'أمن الذكاء الاصطناعي / LLM',p:85},
    {n:'تحليل البرمجيات الخبيثة والهندسة العكسية',p:84},{n:'DevOps / CI-CD / الحاويات',p:82},
  ]
};

const TECH=['Python','FastAPI','Node.js','TypeScript','React','Go','Bash','C/C#','Docker','Kubernetes','Redis','PostgreSQL','WebSocket','JWT','AES-256','ZKP','PGP','ELK Stack','Prometheus','Grafana','Supabase','Cloudflare Workers','Celery','Terraform','Ansible'];
const TOOLS=['Metasploit','Burp Suite','Wireshark','Nmap','Nessus','SQLmap','Hydra','Maltego','Amass','John the Ripper','Shodan','Frida','Ghidra','CyberChef','Volatility','mimikatz','Suricata','OWASP ZAP'];
const LANGS=['🇹🇳 Arabic (Native)','🇬🇧 English (Fluent · IELTS B2)','🇫🇷 French (Fluent)','🇷🇺 Russian (Good · Studied in Russia)','🇩🇪 German (Good)'];

const EXPERIENCE={
  en:[
    {date:'Oct 2024\n– May 2025',title:'Cybersecurity Architect / Threat Detection Consultant',co:'Adarma (Remote) — Banking & Enterprise',items:['Designed Threat Intelligence solutions for global Tier-1 banks and enterprises','Built event correlation & behavioral analysis modules in Python/Go integrated with SIEM/SOC','Reduced false positives by 40% through advanced algorithmic filtering','Architected Zero-Trust network segmentation for regulated financial environments']},
    {date:'Dec 2020\n– Sep 2024',title:'Cybersecurity Architect / Network Security Consultant',co:'IronNet (Remote) — Network Architecture & Threat Detection',items:['Architected secure network infrastructures for Cybera, NetFortis, ShieldWave — 30–35% incident reduction','Secured multi-tenant cloud environments with AES-256, MFA, and automated incident response','Built real-time Prometheus/Grafana monitoring dashboards with automated SOC alerting','Led secure data migration during enterprise restructuring with zero data-loss']},
    {date:'Feb 2018\n– Dec 2020',title:'Cybersecurity Architect / Security Consultant',co:'Rubica — SMB & Enterprise Security',items:['Deployed network segmentation, endpoint protection, and AWS/GCP cloud hardening for 20+ clients','Built custom IDS using Python, ELK Stack, and Suricata — reduced MTTD by 60%','Secured REST APIs with AES-256, JWT, MFA, and Zero-Trust policies','Implemented Prometheus/Grafana monitoring — 40% incident reduction across managed portfolio']},
    {date:'Apr 2017\n– Present',title:'Freelance Cybersecurity & Full-Stack Consultant',co:'Upwork — Top Rated Plus ⭐ | Global Clients',items:['100% mission success rate across security audits, penetration tests, and backend engineering','Built production security tools, hardened API backends, and internal dashboards','Clients in banking, fintech, healthcare, e-commerce across North America, Europe, and Middle East','Technologies: Python, FastAPI, Node.js, React, Docker, PostgreSQL, Redis']},
    {date:'Summers\n2008 – 2011',title:'Hotel Animator / Entertainment Coordinator',co:'International Hotels — Tunisia & Turkey',items:['Caribbean World Monastir, Thalasso Monastir, Ksar Kervansaray (Tunisia) + 5-star hotel in Bodrum, Turkey','~3 years seasonal work: event coordination, guest relations, entertainment programming','Multilingual daily operations in Arabic, French, English, Russian, and German','Strengthened public interaction, teamwork, adaptability, and cross-cultural communication skills']},
    {date:'2005 – 2010',title:'Professional Heavy Vehicle Operator (Category C+E)',co:'Commercial Transport — Tunisia',items:['5 years operating heavy commercial vehicles with trailers (Cat. C+E license)','Developed discipline, logistics awareness, and operational resilience under pressure','Valid Class C+E heavy vehicle driving license — Vocational Training Diploma (2010)']},
    {date:'Ongoing',title:'Independent Archaeological Field Practitioner',co:'Historical Sites — Tunisia & Mediterranean',items:['Independent field exploration of archaeological sites across Tunisia and North Africa','Hands-on engagement with cultural heritage, historical analysis, and site documentation','Developed systematic observation, analytical thinking, and field research methodology','Focus areas: Roman, Punic, and Islamic-era archaeological landscapes']},
  ],
  fr:[
    {date:'Oct 2024\n– Mai 2025',title:'Architecte Cybersécurité / Consultant Détection des Menaces',co:'Adarma (Remote) — Banques & Entreprises',items:['Conception de solutions d\'intelligence des menaces pour banques mondiales Tier-1','Modules de corrélation d\'événements et d\'analyse comportementale Python/Go intégrés SIEM/SOC','Réduction des faux positifs de 40% via filtrage algorithmique avancé','Architecture Zero-Trust pour environnements financiers réglementés']},
    {date:'Déc 2020\n– Sep 2024',title:'Architecte Cybersécurité / Consultant Réseau',co:'IronNet (Remote) — Architecture Réseau',items:['Infrastructures réseau sécurisées pour Cybera, NetFortis, ShieldWave — réduction de 30–35% des incidents','Sécurisation des environnements cloud multi-tenant avec AES-256 et MFA','Tableaux de bord Prometheus/Grafana avec alertes SOC automatisées','Migration sécurisée des données avec zéro perte lors de restructurations']},
    {date:'Fév 2018\n– Déc 2020',title:'Architecte Cybersécurité / Consultant Sécurité',co:'Rubica — PME & Grandes Entreprises',items:['Déploiement de segmentation réseau et sécurité cloud pour 20+ clients','IDS personnalisé avec Python, ELK, Suricata — réduction MTTD de 60%','Sécurisation APIs avec AES-256, JWT, MFA et politiques Zero-Trust','Monitoring Prometheus/Grafana — réduction de 40% des incidents']},
    {date:'Avr 2017\n– Présent',title:'Consultant Freelance Cybersécurité & Full-Stack',co:'Upwork — Top Rated Plus ⭐ | Clients Internationaux',items:['100% de taux de succès sur audits de sécurité, tests d\'intrusion et ingénierie backend','Outils de sécurité en production, APIs renforcées et tableaux de bord internes','Clients dans la banque, fintech, santé, e-commerce en Amérique du Nord, Europe et Moyen-Orient','Technologies: Python, FastAPI, Node.js, React, Docker, PostgreSQL, Redis']},
    {date:'Étés\n2008 – 2011',title:'Animateur Hôtelier / Coordinateur de Divertissement',co:'Hôtels Internationaux — Tunisie & Turquie',items:['Caribbean World Monastir, Thalasso Monastir, Ksar Kervansaray (Tunisie) + hôtel 5 étoiles à Bodrum, Turquie','~3 ans de travail saisonnier: coordination d\'événements, relations clients, programmation','Opérations quotidiennes multilingues en arabe, français, anglais, russe et allemand','Compétences renforcées: interaction publique, travail d\'équipe, adaptabilité interculturelle']},
    {date:'2005 – 2010',title:'Conducteur Professionnel Poids Lourds (Catégorie C+E)',co:'Transport Commercial — Tunisie',items:['5 ans de conduite de véhicules lourds avec remorques (permis Cat. C+E)','Discipline, logistique et résilience opérationnelle sous pression','Permis C+E valide — Diplôme de Formation Professionnelle (2010)']},
    {date:'En cours',title:'Praticien Indépendant en Archéologie de Terrain',co:'Sites Historiques — Tunisie & Méditerranée',items:['Exploration indépendante de sites archéologiques en Tunisie et Afrique du Nord','Engagement pratique avec le patrimoine culturel, l\'analyse historique et la documentation','Développement de méthodes d\'observation systématique et de recherche de terrain','Domaines: paysages archéologiques romains, puniques et de l\'ère islamique']},
  ],
  ar:[
    {date:'أكت 2024\n– مايو 2025',title:'مهندس أمن سيبراني / مستشار اكتشاف التهديدات',co:'Adarma (عن بُعد) — البنوك والمؤسسات',items:['تصميم حلول استخبارات التهديدات للبنوك العالمية من المستوى الأول','بناء وحدات تحليل سلوكي وربط الأحداث بلغة Python/Go مدمجة مع SIEM/SOC','تقليل الإيجابيات الكاذبة بنسبة 40% عبر تصفية خوارزمية متقدمة','هندسة تجزئة شبكات Zero-Trust للبيئات المالية المنظمة']},
    {date:'ديس 2020\n– سبت 2024',title:'مهندس أمن سيبراني / مستشار شبكات',co:'IronNet (عن بُعد) — هندسة الشبكات',items:['تصميم بنى تحتية شبكية آمنة لـ Cybera وNetFortis وShieldWave — تقليل الحوادث 30–35%','تأمين البيئات السحابية متعددة المستأجرين بـ AES-256 والمصادقة متعددة العوامل','لوحات مراقبة Prometheus/Grafana مع تنبيهات SOC تلقائية','ترحيل آمن للبيانات بدون خسارة خلال إعادة الهيكلة']},
    {date:'فبر 2018\n– ديس 2020',title:'مهندس أمن سيبراني / مستشار أمني',co:'Rubica — الشركات الصغيرة والكبيرة',items:['نشر تجزئة الشبكات وحماية النقاط الطرفية وتعزيز السحاب لأكثر من 20 عميل','بناء IDS مخصص بـ Python وELK وSuricata — تقليل MTTD بنسبة 60%','تأمين APIs بـ AES-256 وJWT وMFA وسياسات Zero-Trust','مراقبة Prometheus/Grafana — تقليل الحوادث بنسبة 40%']},
    {date:'أبر 2017\n– الحاضر',title:'مستشار مستقل في الأمن السيبراني وتطوير البرمجيات',co:'Upwork — Top Rated Plus ⭐ | عملاء دوليون',items:['نسبة نجاح 100% في تدقيقات أمنية واختبارات اختراق وهندسة backend','بناء أدوات أمنية إنتاجية وAPIs محصنة ولوحات تحكم داخلية','عملاء في البنوك والتكنولوجيا المالية والرعاية الصحية والتجارة الإلكترونية','التقنيات: Python, FastAPI, Node.js, React, Docker, PostgreSQL, Redis']},
    {date:'صيف\n2008 – 2011',title:'منشط فندقي / منسق ترفيه',co:'فنادق دولية — تونس وتركيا',items:['Caribbean World المنستير، Thalasso المنستير، قصر كارافانسراي (تونس) + فندق 5 نجوم في بودروم، تركيا','~3 سنوات عمل موسمي: تنسيق الفعاليات، علاقات الضيوف، البرمجة الترفيهية','عمليات يومية متعددة اللغات بالعربية والفرنسية والإنجليزية والروسية والألمانية','تعزيز مهارات التفاعل العام والعمل الجماعي والتكيف والتواصل بين الثقافات']},
    {date:'2005 – 2010',title:'سائق مركبات ثقيلة محترف (فئة C+E)',co:'النقل التجاري — تونس',items:['5 سنوات في تشغيل المركبات التجارية الثقيلة مع المقطورات (رخصة C+E)','تطوير الانضباط والوعي اللوجستي والمرونة التشغيلية تحت الضغط','رخصة C+E سارية — دبلوم تدريب مهني (2010)']},
    {date:'مستمر',title:'ممارس مستقل في الآثار الميدانية',co:'مواقع تاريخية — تونس والبحر المتوسط',items:['استكشاف ميداني مستقل للمواقع الأثرية في تونس وشمال أفريقيا','مشاركة عملية مع التراث الثقافي والتحليل التاريخي والتوثيق','تطوير منهجيات المراقبة المنهجية والتفكير التحليلي والبحث الميداني','مجالات التركيز: المناظر الأثرية الرومانية والبونيقية والإسلامية']},
  ]
};

const ARSENAL=[
  {cat:{en:'C2 FRAMEWORKS & POST-EXPLOITATION',fr:'FRAMEWORKS C2 & POST-EXPLOITATION',ar:'أطر C2 والاستغلال اللاحق'},icon:'⚔',tools:[
    {n:'AdaptixC2',d:'Modular advanced red team toolkit with Extension Kit API'},{n:'Havoc Framework',d:'Full-featured C2 with multi-platform agents'},{n:'shad0w',d:'Post-exploitation for monitored environments'},{n:'Supershell',d:'C2 via reverse SSH tunnels — full interactive shell'},{n:'venom',d:'Python3 Command & Control persistence framework'},{n:'AsyncRAT',d:'Open-source Remote Administration Tool (C#)'},{n:'DeathStar',d:'Empire-based Active Directory auto-exploitation'},
  ]},
  {cat:{en:'OSINT & INTELLIGENCE',fr:'OSINT & RENSEIGNEMENT',ar:'OSINT والاستخبارات'},icon:'🕵',tools:[
    {n:'Forensight',d:'Facial recognition, EXIF, OCR, footprinting framework'},{n:'GHunt',d:'Offensive Google OSINT framework'},{n:'Osintgram',d:'Instagram interactive OSINT shell'},{n:'nexfil',d:'OSINT username finder across 350+ platforms'},{n:'deepdarkCTI',d:'Dark/deep web threat intelligence sources'},{n:'seeker',d:'Accurate smartphone geo-location via social engineering'},{n:'pagodo',d:'Passive Google Dork automation (GHDB)'},{n:'onionscan',d:'Dark Web .onion investigation tool'},
  ]},
  {cat:{en:'iOS / APPLE SECURITY',fr:'SÉCURITÉ iOS / APPLE',ar:'أمن iOS / Apple'},icon:'🍎',tools:[
    {n:'iOS Activation Bypass',d:'iCloud lock bypass toolkit — iPhone 6s to X'},{n:'WebDriverAgent',d:'iOS XCTest-based automation agent'},{n:'libimobiledevice',d:'Cross-platform iOS device protocol library'},{n:'MDMPatcher-Universal',d:'MDM bypass — iOS 15+'},{n:'Lockra1n v2.1',d:'iOS activation bypass GUI — normal & ramdisk modes'},{n:'ipwndfu',d:'Open-source jailbreaking for iOS devices'},{n:'IOS.JAILBREAK (Fugu14)',d:'Untethered iOS 14.3–14.5.1 jailbreak'},
  ]},
  {cat:{en:'CVE EXPLOITS & VULNERABILITY RESEARCH',fr:'EXPLOITS CVE & RECHERCHE DE VULNÉRABILITÉS',ar:'استغلال CVE وأبحاث الثغرات'},icon:'💥',tools:[
    {n:'CVE-2024-38063',d:'Windows tcpip.sys RCE — CVSS 9.8 PoC'},{n:'CVE-2024-4577',d:'PHP CGI Argument Injection RCE PoC'},{n:'CVE-2023-2982',d:'WordPress OAuth Plugin Auth Bypass'},{n:'Proxylogon (CVE-2021-26857)',d:'Exchange Server RCE exploit'},{n:'Nucleimonst3r',d:'Low-hanging CVE scanner with tech detection'},{n:'PayloadsAllTheThings',d:'Comprehensive web security payload library'},
  ]},
  {cat:{en:'NETWORK & TELECOM SECURITY',fr:'SÉCURITÉ RÉSEAU & TÉLÉCOM',ar:'أمن الشبكات والاتصالات'},icon:'📡',tools:[
    {n:'C2 SS7/GSM Module',d:'SS7 signaling protocol exploitation framework'},{n:'Cloudflare Discovery',d:'Real-IP discovery behind Cloudflare CDN'},{n:'FruityWiFi',d:'Wireless network auditing — Kali, RPi'},{n:'RoguePortal',d:'Phishing WiFi rogue captive portal'},{n:'fluxion',d:'Advanced WPA/WPA2 handshake attack'},{n:'lynis',d:'HIPAA/PCI/ISO27001 security compliance auditing'},
  ]},
  {cat:{en:'AI / LLM SECURITY',fr:'SÉCURITÉ IA / LLM',ar:'أمن الذكاء الاصطناعي / LLM'},icon:'🤖',tools:[
    {n:'Phalanx X',d:'Local LLM OpenAI-compatible API server (GGUF + GPU)'},{n:'MCP-Hydra',d:'AI-assisted security via Model Context Protocol'},{n:'MetasploitMCP',d:'MCP server connecting AI to Metasploit'},{n:'PentestGPT',d:'AI-powered automated pentesting agent'},{n:'Agent Zero (Hacker mode)',d:'AI autonomous agent with offensive security persona'},
  ]},
  {cat:{en:'MALWARE & OFFENSIVE TOOLS',fr:'MALWARE & OUTILS OFFENSIFS',ar:'البرمجيات الخبيثة والأدوات الهجومية'},icon:'☣',tools:[
    {n:'RANSOMWARE-WANNACRY-2.0',d:'WannaCry 2.0 research implementation'},{n:'Keylogger (Blackcat)',d:'Kernel-level keylogger with FTP exfiltration'},{n:'Powershell-RAT',d:'Gmail-exfiltration Python backdoor'},{n:'EDRaser',d:'Remote access log & Windows Event Log deletion'},{n:'mimikatz',d:'Windows credential extraction'},{n:'CyberChef',d:'Cyber Swiss Army Knife'},
  ]},
  {cat:{en:'CRYPTO & FINTECH',fr:'CRYPTO & FINTECH',ar:'الكريبتو والتكنولوجيا المالية'},icon:'₿',tools:[
    {n:'VaultGuard',d:'Institutional crypto security & P2P OTC desk (LIVE)'},{n:'Futures Trading Bot',d:'Multi-indicator crypto/forex algo with risk management'},{n:'gophercoin',d:'Blockchain node + REST API + Block Explorer'},
  ]},
];

const CONTACTS=[
  {icon:'⬡',label:'GitHub (Primary)',val:'github.com/spaypeur',href:'https://github.com/spaypeur'},
  {icon:'⬡',label:'GitHub (Red Team)',val:'github.com/sniper4u2',href:'https://github.com/sniper4u2'},
  {icon:'🌐',label:'VaultGuard',val:'vaultguard.eu.org',href:'https://vaultguard.eu.org'},
  {icon:'📧',label:'Email',val:'admin@vaultguard.eu.org',href:'mailto:admin@vaultguard.eu.org'},
  {icon:'📄',label:'CV / Resume',val:'spaypeur.github.io/cv.html',href:'cv.html'},
];

const TERM_HISTORY=[];let histIdx=-1;
let currentLang='en';

/* ========= BOOT ========= */
document.addEventListener('DOMContentLoaded',()=>{
  applyLang('en');
  bindLang();
  renderHeroTerminal();
  startTyping();
  renderProjects();
  renderCertificates();
  renderSkills();
  renderExperience();
  renderArsenal();
  renderContact();
  bindFilters();
  bindTerminal();
  scrollReveal();
  skillsIO();
  document.getElementById('modal-close').onclick=closeModal;
  document.getElementById('modal-bg').onclick=e=>{if(e.target.id==='modal-bg')closeModal();};
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
});

/* ========= LANGUAGE ========= */
function applyLang(lang){
  currentLang=lang;
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k=el.dataset.i18n;
    if(T[lang][k]!==undefined) el.textContent=T[lang][k];
  });
  document.querySelectorAll('.lg').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  // Re-render dynamic sections in new language
  renderProjects(document.querySelector('.pf.active')?.dataset.f||'all');
  renderSkills();
  renderExperience();
  renderArsenal();
  scrollReveal();
  skillsIO();
}
function bindLang(){
  document.querySelectorAll('.lg').forEach(b=>b.onclick=()=>applyLang(b.dataset.lang));
}

/* ========= HERO TERMINAL ========= */
const HT=[
  {t:'prompt',tx:'whoami'},{t:'ok',tx:'Sofiene Hamzaoui · Systems Architect & Security Leader · 20+ Years'},
  {t:'prompt',tx:'cat domains.txt'},{t:'out',tx:'Cybersecurity · Telecom · Backend · Infrastructure · Cryptography'},
  {t:'prompt',tx:'cat missions.txt'},{t:'out',tx:'Adarma · IronNet · Rubica · Upwork Top Rated+'},
  {t:'prompt',tx:'ls projects/'},{t:'ok',tx:'c2server/ vaultguard/ ios-bypass/ phalanx-x/'},
  {t:'ok',tx:'uk-insolvency/ cloudflare-disc/ [6 projects]'},
  {t:'prompt',tx:'./status --check'},{t:'ok',tx:'[ONLINE] All systems operational — stealth mode active'},
];
function renderHeroTerminal(){
  const el=document.getElementById('ht-body');let i=0;
  function next(){
    if(i>=HT.length)return;const l=HT[i];
    const d=document.createElement('div');d.className='ht-line';
    if(l.t==='prompt') d.innerHTML=`<span class="ht-prompt">$&nbsp;</span><span class="ht-cmd">${l.tx}</span>`;
    else if(l.t==='ok') d.innerHTML=`<span class="ht-ok">${l.tx}</span>`;
    else d.innerHTML=`<span class="ht-out">${l.tx}</span>`;
    el.appendChild(d);el.scrollTop=9999;i++;
    setTimeout(next,l.t==='prompt'?550:130);
  }
  setTimeout(next,900);
}

/* ========= TYPING ========= */
let rIdx=0,cIdx=0,isDeleting=false;
function startTyping(){
  const el=document.getElementById('typed');
  function tick(){
    const roles=T[currentLang].typed;const r=roles[rIdx%roles.length];
    if(!isDeleting){el.textContent=r.slice(0,++cIdx);if(cIdx===r.length){isDeleting=true;setTimeout(tick,2200);return;}}
    else{el.textContent=r.slice(0,--cIdx);if(cIdx===0){isDeleting=false;rIdx++;}}
    setTimeout(tick,isDeleting?32:75);
  }
  tick();
}

/* ========= PROJECTS ========= */
function renderProjects(filter='all'){
  const grid=document.getElementById('proj-grid');
  grid.innerHTML='';
  const list=filter==='all'?PROJECTS:PROJECTS.filter(p=>p.cat===filter);
  const t=T[currentLang];
  list.forEach(p=>{
    const desc=p.desc[currentLang]||p.desc.en;
    const c=document.createElement('div');c.className='pcard reveal';
    c.innerHTML=`<div class="pc-top"><span class="pc-icon">${p.icon}</span><span class="pstatus ${p.status}">${p.status.toUpperCase()}</span></div>
      <div class="pc-name">${p.name}</div>
      <div class="pc-desc">${desc}</div>
      <ul class="pc-feats">${p.features.slice(0,4).map(f=>`<li>${f}</li>`).join('')}</ul>
      <div class="pc-tags">${p.tech.slice(0,5).map(x=>`<span class="ptag">${x}</span>`).join('')}</div>
      <div class="pc-foot"><span class="pc-lang">${p.lang}</span><span class="pc-link">${t.view_details}</span></div>`;
    c.onclick=()=>openModal(p.id);
    grid.appendChild(c);
  });
  scrollReveal();
}
function bindFilters(){
  document.querySelectorAll('.pf').forEach(el=>{
    el.onclick=()=>{
      document.querySelectorAll('.pf').forEach(f=>f.classList.remove('active'));
      el.classList.add('active');renderProjects(el.dataset.f);
    };
  });
}

/* ========= SKILLS ========= */
function renderSkills(){
  const el=document.getElementById('skills-bars');el.innerHTML='';
  const s=SKILLS[currentLang]||SKILLS.en;
  s.forEach(sk=>{
    const d=document.createElement('div');d.className='skill-item reveal';d.dataset.pct=sk.p;
    d.innerHTML=`<div class="skill-top"><span class="skill-name">${sk.n}</span><span class="skill-pct">${sk.p}%</span></div><div class="skill-bar"><div class="skill-fill"></div></div>`;
    el.appendChild(d);
  });
  const tEl=document.getElementById('tech-tags');tEl.innerHTML='';
  TECH.forEach(t=>tEl.innerHTML+=`<span class="tech-t">${t}</span>`);
  const toolEl=document.getElementById('tools-tags');toolEl.innerHTML='';
  TOOLS.forEach(t=>toolEl.innerHTML+=`<span class="tool-t">${t}</span>`);
  const lEl=document.getElementById('lang-tags');lEl.innerHTML='';
  LANGS.forEach(l=>lEl.innerHTML+=`<span class="lang-t">${l}</span>`);
}

/* ========= EXPERIENCE ========= */
function renderExperience(){
  const el=document.getElementById('timeline');el.innerHTML='';
  const exp=EXPERIENCE[currentLang]||EXPERIENCE.en;
  exp.forEach(j=>{
    const d=document.createElement('div');d.className='tl reveal';
    d.innerHTML=`<div class="tl-date"><span class="tl-yr">${j.date}</span></div>
      <div class="tl-dot"></div>
      <div class="tl-box">
        <div class="tl-title">${j.title}</div>
        <div class="tl-co">${j.co}</div>
        <ul class="tl-list">${j.items.map(i=>`<li>${i}</li>`).join('')}</ul>
      </div>`;
    el.appendChild(d);
  });
}

/* ========= ARSENAL ========= */
function renderArsenal(){
  const el=document.getElementById('arsenal-list');el.innerHTML='';
  ARSENAL.forEach((cat,idx)=>{
    const title=cat.cat[currentLang]||cat.cat.en;
    const d=document.createElement('div');d.className='ar-cat reveal';
    d.innerHTML=`<div class="ar-hdr"><span class="ar-hdr-title">${cat.icon} ${title}</span><span class="ar-hdr-count">${cat.tools.length} tools ▸</span></div>
      <div class="ar-grid ${idx===0?'open':''}">${cat.tools.map(t=>`<div class="ar-tool"><div class="ar-tool-name">${t.n}</div><div class="ar-tool-desc">${t.d}</div></div>`).join('')}</div>`;
    d.querySelector('.ar-hdr').onclick=()=>d.querySelector('.ar-grid').classList.toggle('open');
    el.appendChild(d);
  });
}

/* ========= CONTACT ========= */
function renderContact(){
  const el=document.getElementById('contact-links');el.innerHTML='';
  CONTACTS.forEach(c=>{
    el.innerHTML+=`<a class="clink" href="${c.href}" target="_blank">
      <span class="clink-icon">${c.icon}</span>
      <span class="clink-label">${c.label}</span>
      <span class="clink-val">${c.val}</span></a>`;
  });
}

/* ========= MODAL ========= */
const PREVIEWS={
  c2server:'$ ./c2server --start\n[*] C2 Server v2.0 online\n[+] SS7 module: 23 exploits ready\n[+] Active agents: 3 connected\n[+] CVE DB: 2,847 entries loaded\n[*] OSINT scan: 847 nodes mapped',
  vaultguard:'$ vault status\n[+] VaultGuard v2.1 — LIVE\n[+] P2P OTC Desk: ONLINE\n[+] Multi-sig custody: 3-of-5\n[+] ZKP verification: PASSED',
  forensight:'$ forensight --scan target.jpg\n[+] Facial recognition: 94.7% match\n[+] EXIF: 47 metadata fields extracted\n[+] Footprint: 23 social profiles found',
  'ios-bypass':'$ ./bypass_normalmode.sh\n[*] libimobiledevice: connected\n[+] iPhone 8 (A11) iOS 15.3\n[*] checkra1n: SUCCESSFUL\n[+] mobileactivationd: patched',
  phalanx:'$ python phalanx.py --model mistral.gguf\n[*] Loading model: 7B params\n[+] GPU layers: 35 (11.2GB VRAM)\n[*] /v1/chat/completions: READY',
  'uk-insolvency':'$ monitor --status\n[+] Tracking: 1,247 UK companies\n[+] Alerts: 3 critical events today\n[*] Report: scheduled 07:00 UTC',
  adaptixc2:'$ adaptix --operator-mode\n[+] HTTPS/443 listener: ACTIVE\n[+] 2 agents connected\n[+] Domain admin: obtained',
  'mcp-hydra':'$ python mcp_hydra.py\n[+] Claude 3 connected via MCP\n[+] nmap scan completed: 12.3s\n[*] 3 HIGH, 7 MED vulnerabilities',
  'cloudflare-disc':'$ python cf_discover.py --domain target.com\n[-] www → Cloudflare MASKED\n[+] origin.target.com → REAL IP FOUND\n[+] Discovered in 2.3 seconds',
  megascan:'$ megascan --connect\n[+] MEGA 2560 PRO: connected\n[+] 5V Rail: 5.02V NOMINAL\n[+] I2C bus: 3 devices found'
};
function openModal(id){
  const p=PROJECTS.find(x=>x.id===id);if(!p)return;
  const t=T[currentLang];const desc=p.desc[currentLang]||p.desc.en;
  document.getElementById('modal-title').textContent=p.icon+' '+p.name;
  document.getElementById('modal-body').innerHTML=`
    <div class="mb-col">
      <div class="mb-hdr">${t.overview_hdr}</div>
      <div class="mb-desc">${desc}</div>
      <div class="mb-status-row"><span class="pstatus ${p.status}">${p.status.toUpperCase()}</span><span style="color:var(--dim);font-family:var(--font-mono);font-size:.82rem">${p.lang}</span></div>
      <div class="mb-hdr">${t.tech_hdr}</div>
      <div class="mb-tags">${p.tech.map(x=>`<span class="mb-tag">${x}</span>`).join('')}</div>
      <div class="mb-hdr">${t.links_hdr}</div>
      <a class="mb-link-btn" href="${p.url}" target="_blank">${t.open_repo}</a>
    </div>
    <div class="mb-col">
      <div class="mb-hdr">${t.feat_hdr}</div>
      <ul class="mb-feat-list">${p.features.map(f=>`<li>${f}</li>`).join('')}</ul>
      <div class="mb-hdr">${t.term_hdr}</div>
      <div class="mb-preview-hdr">sofiene@darknet:~/${p.id}$</div>
      <div class="mb-preview">${PREVIEWS[id]||'[*] loading output...'}</div>
    </div>`;
  document.getElementById('modal-bg').classList.remove('hidden');
}
function closeModal(){document.getElementById('modal-bg').classList.add('hidden');}

/* ========= FLOATING TERMINAL ========= */
function ftPrint(msg,cls='out'){
  const el=document.getElementById('ft-out');
  const d=document.createElement('div');d.className='ft-line '+cls;d.innerHTML=msg;
  el.appendChild(d);el.scrollTop=9999;
}
function bindTerminal(){
  const inp=document.getElementById('ft-in');
  const body=document.getElementById('ft-body');
  const chev=document.getElementById('ft-chev');
  document.getElementById('ft-toggle').onclick=()=>{
    body.classList.toggle('open');chev.textContent=body.classList.contains('open')?'▼':'▲';
    if(body.classList.contains('open'))inp.focus();
  };
  ftPrint('Welcome, Sofiene. Type <span style="color:var(--green)">help</span> for commands.','info');
  inp.addEventListener('keydown',e=>{
    if(e.key==='Enter'){
      const cmd=inp.value.trim();if(!cmd)return;
      TERM_HISTORY.unshift(cmd);histIdx=-1;
      ftPrint('$ '+cmd,'cmd');runCmd(cmd.toLowerCase());inp.value='';
    }else if(e.key==='ArrowUp'){histIdx=Math.min(histIdx+1,TERM_HISTORY.length-1);inp.value=TERM_HISTORY[histIdx]||'';}
    else if(e.key==='ArrowDown'){histIdx=Math.max(histIdx-1,-1);inp.value=histIdx<0?'':TERM_HISTORY[histIdx];}
  });
}
function runCmd(c){
  if(c==='help'||c==='?') ftPrint('whoami · ls · skills · projects · cv · github · vaultguard · contact · neofetch · clear','out');
  else if(c==='whoami') ftPrint('Sofiene Hamzaoui — Systems Architect & Security Leader · 20+ Years','ok');
  else if(c==='ls'||c==='ls -la') PROJECTS.forEach(p=>ftPrint(`-rwxr-xr-x  ${p.id}/  [${p.status.toUpperCase()}]`,'out'));
  else if(c==='skills'){document.getElementById('skills').scrollIntoView({behavior:'smooth'});ftPrint('→ Navigating to Skills...','ok');}
  else if(c==='projects'){document.getElementById('projects').scrollIntoView({behavior:'smooth'});ftPrint('→ Navigating to Projects...','ok');}
  else if(c==='cv'){window.open('cv.html','_blank');ftPrint('Opening CV of Sofiene Hamzaoui...','ok');}
  else if(c==='contact'){document.getElementById('contact').scrollIntoView({behavior:'smooth'});ftPrint('→ Navigating to Contact...','ok');}
  else if(c==='github'){window.open('https://github.com/spaypeur','_blank');ftPrint('Opening github.com/spaypeur','ok');}
  else if(c==='vaultguard'){window.open('https://vaultguard.pages.dev','_blank');ftPrint('Opening vaultguard.pages.dev','ok');}
  else if(c==='clear'||c==='cls') document.getElementById('ft-out').innerHTML='';
  else if(c==='neofetch') ftPrint(`<span style="color:var(--green)">sofiene@darknet</span><br>OS: Kali Linux 2024.4 · Shell: zsh 5.9<br>Node: SPAYPEUR · Mode: OFFENSIVE · Repos: 147+<br>Experience: 20+ years · Tools: 50+ · C2: 5 frameworks<br>Clearance: <span style="color:var(--red)">ROOT</span>`,'out');
  else if(c==='sudo su') ftPrint('You are already root, Sofiene.','ok');
  else if(c==='exit') ftPrint('Nice try. You cannot leave the matrix.','err');
  else ftPrint(`Command not found: ${c} — type <span style="color:var(--green)">help</span>`,'err');
}

/* ========= SCROLL REVEAL ========= */
const revealObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObs.unobserve(e.target);}});
},{threshold:.1,rootMargin:'0px 0px -40px 0px'});
function scrollReveal(){
  document.querySelectorAll('.reveal:not(.visible)').forEach(el=>revealObs.observe(el));
}

/* ========= SKILL BARS ========= */
function skillsIO(){
  let triggered=false;
  const obs=new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting&&!triggered){
      triggered=true;
      document.querySelectorAll('.skill-item').forEach((el,i)=>{
        setTimeout(()=>{const f=el.querySelector('.skill-fill');if(f)f.style.width=el.dataset.pct+'%';},i*70);
      });
    }
  },{threshold:.15});
  const sec=document.getElementById('skills');if(sec)obs.observe(sec);
}

/* ========= CERTIFICATES ========= */
const CERTS=[
  // === CYBERSECURITY & IBM SKILLSBUILD ===
  {name:'IBM — Incident Response & Systems Forensics',path:'CERTS/Incedent response and sys forensics.png',cat:'security'},
  {name:'IBM — Security Operations & Management',path:'CERTS/Cybersecurity operation and manager.png',cat:'security'},
  {name:'IBM — Vulnerability Management',path:'CERTS/vuln management.png',cat:'security'},
  {name:'IBM — System & Network Security',path:'CERTS/system and network security.png',cat:'security'},
  {name:'IBM — Cloud Security',path:'CERTS/Cloud security.png',cat:'security'},
  {name:'IBM — GRC & Data Privacy',path:'CERTS/governance, risk, compliance, and data privacy.png',cat:'security'},
  {name:'IBM — Cybersecurity Fluency Pathway (6 Microcredentials)',path:'CERTS/Completion Certificate _ SkillsBuild-1.png',cat:'security'},
  {name:'IBM — Getting Started with Cybersecurity',path:'CERTS/Getting started with cybersec.png',cat:'security'},
  // === AI & MACHINE LEARNING ===
  {name:'HuggingFace — AI Agents Course',path:'CERTS/HuggingFace AGENT COURSE CERT.png',cat:'ai'},
  {name:'HuggingFace / DeepLearning.AI — Fundamentals of LLMs',path:'CERTS/Fundumentals Of LLM\'s.png',cat:'ai'},
  // === SOFTWARE ENGINEERING ===
  {name:'Microsoft / freeCodeCamp — Foundational C#',path:'CERTS/Foundational C# with MICROSOFT CERT.png',cat:'engineering'},
  {name:'freeCodeCamp — Scientific Computing with Python',path:'CERTS/ScientificComputingWith PYTHON CERT.png',cat:'engineering'},
  {name:'freeCodeCamp — Frontend Dev Libraries V8',path:'CERTS/FrontendDevLibrary V8 CERT.png',cat:'engineering'},
  {name:'freeCodeCamp — Web Design Certification V8',path:'CERTS/WebDesign V8 CERT.png',cat:'engineering'},
  {name:'freeCodeCamp — Legacy Frontend Development',path:'CERTS/Legacy Frontend dev CERT.png',cat:'engineering'},
  // === LANGUAGE & PROFESSIONAL ===
  {name:'IELTS General Training — Band 5.5 / CEFR B2 (British Council)',path:'CERTS/IELTS B2.jpg',cat:'language'},
  // === AVIATION & TRANSPORT ===
  {name:'CMFC — Personnel Navigant Commercial (Civil Aviation)',path:'CERTS/personnel navigation commercial.png',cat:'aviation'},
  {name:'CMFC — Civil Aviation Agent Diploma',path:'CERTS/civil aviation agent.jpg',cat:'aviation'},
  {name:'Vocational Training — Heavy Vehicle C+E License',path:'CERTS/driving vehicules with trailers C+E diplome.jpg',cat:'transport'},
  {name:'Vocational Training — Driving Vehicles with Trailers',path:'CERTS/driving vihecules with trailers diplome.jpg',cat:'transport'},
  // === EDUCATION ===
  {name:'Baccalaureate Diploma — Arts (Tunisia)',path:'CERTS/high school gradutation diplome.jpg',cat:'education'},
  {name:'University of Ryazan — Pharmaceutical Studies (Russia)',path:'CERTS/1st year pharmacology.png',cat:'education'},
  {name:'Academy of Pharmacy Perm — 3rd Year Studies (Russia)',path:'CERTS/1656392289426.png',cat:'education'},
];

function renderCertificates(){
  const gallery=document.getElementById('cert-gallery');
  if(!gallery) return;
  const catIcons={security:'🔐',ai:'🤖',engineering:'💻',language:'🌍',aviation:'✈️',transport:'🚛',education:'🎓'};
  const catColors={security:'var(--green)',ai:'var(--purple)',engineering:'var(--blue)',language:'var(--amber)',aviation:'var(--blue)',transport:'var(--amber)',education:'var(--dim)'};
  gallery.innerHTML=CERTS.map(cert=>{
    const isPdf=cert.path.endsWith('.pdf');
    const icon=catIcons[cert.cat]||'📜';
    const color=catColors[cert.cat]||'var(--green)';
    const imgHtml=isPdf
      ?`<div class="cert-pdf-placeholder" style="display:flex;align-items:center;justify-content:center;min-height:200px;background:var(--bg3);font-size:4rem;">${icon}</div>`
      :`<img src="${cert.path}" alt="${cert.name}" class="cert-img" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'cert-pdf-placeholder\\' style=\\'display:flex;align-items:center;justify-content:center;min-height:200px;background:var(--bg3);font-size:4rem;\\'>${icon}</div>'">`;
    return `
    <div class="cert-card reveal" data-cert="${cert.name}" data-cert-name="${cert.name.replace(/"/g, '&quot;')}" data-cert-path="${cert.path.replace(/"/g, '&quot;')}" style="cursor:pointer;">
      <div class="cert-img-wrap">${imgHtml}</div>
      <div class="cert-label">
        <span class="cert-name">${cert.name}</span>
        <span class="cert-icon" style="color:${color}">${icon}</span>
      </div>
    </div>`;
  }).join('');
  document.querySelectorAll('.cert-card').forEach(card=>{
    card.addEventListener('click',()=>{
      const name=card.dataset.certName;
      const path=card.dataset.certPath;
      viewCertificate(name,path);
    });
  });
  scrollReveal();
}

function viewCertificate(name,path){
  const modal=document.getElementById('modal-bg');
  const title=document.getElementById('modal-title');
  const body=document.getElementById('modal-body');
  
  title.textContent=name;
  body.innerHTML=`
    <div style="grid-column:1/-1;">
      <div class="cert-modal-viewer">
        <img src="${path}" alt="${name}" class="cert-modal-img" style="max-height:70vh;">
        <div class="cert-modal-info">
          <div class="cert-modal-col">
            <h3>Certificate</h3>
            <p>${name}</p>
          </div>
          <div class="cert-modal-col">
            <h3>Type</h3>
            <p>Professional Credential</p>
          </div>
        </div>
      </div>
    </div>
  `;
  modal.classList.remove('hidden');
  modal.scrollTop=0;
}
