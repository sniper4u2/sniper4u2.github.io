'use strict';

/* ========= TRANSLATIONS ========= */
const T = {
  en:{
    nav_projects:'Projects', nav_certificates:'Certificates', nav_skills:'Skills', nav_experience:'Experience',
    nav_arsenal:'Arsenal', nav_contact:'Contact', nav_cv:'↓ CV', nav_online:'ONLINE',
    hero_tag:'// CYBERSECURITY ARCHITECT',
    hero_desc:'20+ years building offensive security tools, C2 frameworks, and mission-critical infrastructure. Trusted by governments and enterprises across Adarma, IronNet, and Rubica.',
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
    contact_desc:'Open for consulting, red team engagements, security architecture, and freelance work. Upwork Top Rated Plus — 100% mission success rate.',
    cc_name:'name', cc_phone:'phone', cc_loc:'location', cc_loc_val:'"Tunisia · Remote"',
    cc_status:'status', cc_available:'AVAILABLE',
    footer_built:'Built with terminal aesthetics · 2025', footer_enc:'Encrypted',
    view_details:'View Details ▸', open_repo:'View Repository / Live Demo →',
    feat_hdr:'// KEY FEATURES', tech_hdr:'// TECH STACK',
    links_hdr:'// LINKS', term_hdr:'// TERMINAL OUTPUT', overview_hdr:'// OVERVIEW',
    typed:['Cybersecurity Architect · 20+ Years','C2 Framework Developer',
           'SS7/GTP Telecom Security Specialist','OSINT & Intelligence Analyst',
           'Red Team Operator','Full-Stack Security Engineer'],
  },
  fr:{
    nav_projects:'Projets', nav_certificates:'Certificats', nav_skills:'Compétences', nav_experience:'Expérience',
    nav_arsenal:'Arsenal', nav_contact:'Contact', nav_cv:'↓ CV', nav_online:'EN LIGNE',
    hero_tag:'// ARCHITECTE CYBERSÉCURITÉ',
    hero_desc:'Plus de 20 ans à concevoir des outils de sécurité offensive, des frameworks C2 et des infrastructures critiques. Approuvé par des gouvernements et entreprises chez Adarma, IronNet et Rubica.',
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
    contact_desc:'Disponible pour du consulting, des missions red team, de l\'architecture sécurité et du freelance. Top Rated Plus sur Upwork — 100% de succès.',
    cc_name:'nom', cc_phone:'téléphone', cc_loc:'localisation', cc_loc_val:'"Tunisie · À distance"',
    cc_status:'statut', cc_available:'DISPONIBLE',
    footer_built:'Conçu avec une esthétique terminal · 2025', footer_enc:'Chiffré',
    view_details:'Voir Détails ▸', open_repo:'Voir Dépôt / Démo →',
    feat_hdr:'// FONCTIONNALITÉS CLÉS', tech_hdr:'// STACK TECHNIQUE',
    links_hdr:'// LIENS', term_hdr:'// SORTIE TERMINAL', overview_hdr:'// APERÇU',
    typed:['Architecte Cybersécurité · 20+ Ans','Développeur de Frameworks C2',
           'Spécialiste Télécom SS7/GTP','Analyste OSINT & Renseignement',
           'Opérateur Red Team','Ingénieur Full-Stack Sécurité'],
  },
  ar:{
    nav_projects:'المشاريع', nav_certificates:'الشهادات', nav_skills:'المهارات', nav_experience:'الخبرة',
    nav_arsenal:'الترسانة', nav_contact:'التواصل', nav_cv:'↓ السيرة', nav_online:'متصل',
    hero_tag:'// مهندس الأمن السيبراني',
    hero_desc:'أكثر من 20 عامًا في بناء أدوات الأمن الهجومي، أطر C2، والبنية التحتية الحيوية. موثوق به من قِبل الحكومات والشركات الكبرى في Adarma وIronNet وRubica.',
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
    contact_desc:'متاح للاستشارات، عمليات Red Team، هندسة الأمن والعمل الحر. مرتبة Top Rated Plus على Upwork — نسبة نجاح 100%.',
    cc_name:'الاسم', cc_phone:'الهاتف', cc_loc:'الموقع', cc_loc_val:'"تونس · عن بُعد"',
    cc_status:'الحالة', cc_available:'متاح',
    footer_built:'مصمم بأسلوب الطرفية · 2025', footer_enc:'مشفّر',
    view_details:'عرض التفاصيل ▸', open_repo:'عرض المستودع / العرض التجريبي →',
    feat_hdr:'// الميزات الرئيسية', tech_hdr:'// التقنيات المستخدمة',
    links_hdr:'// الروابط', term_hdr:'// مخرجات الطرفية', overview_hdr:'// نظرة عامة',
    typed:['مهندس أمن سيبراني · 20+ عام','مطوّر أطر C2',
           'متخصص اتصالات SS7/GTP','محلل OSINT واستخباراتي',
           'مشغّل Red Team','مهندس Full-Stack أمني'],
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
    {n:'C2 Framework Development',p:95},{n:'Python / FastAPI / Node.js',p:95},
    {n:'Network Architecture & Threat Detection',p:92},{n:'OSINT & Digital Intelligence',p:93},
    {n:'Telecom Security (SS7/GSM/GTP)',p:90},{n:'iOS / Apple Security Research',p:88},
    {n:'Cloud Security (AWS/GCP)',p:85},{n:'Malware Analysis & Development',p:85},
    {n:'AI/LLM Integration & Security',p:82},{n:'Blockchain / Crypto Security (ZKP)',p:80},
  ],
  fr:[
    {n:'Sécurité Offensive / Red Team',p:97},{n:'Tests d\'Intrusion (Web/Réseau/Mobile)',p:96},
    {n:'Développement de Frameworks C2',p:95},{n:'Python / FastAPI / Node.js',p:95},
    {n:'Architecture Réseau & Détection',p:92},{n:'OSINT & Intelligence Numérique',p:93},
    {n:'Sécurité Télécom (SS7/GSM/GTP)',p:90},{n:'Sécurité iOS / Recherche Apple',p:88},
    {n:'Sécurité Cloud (AWS/GCP)',p:85},{n:'Analyse & Dév. de Malware',p:85},
    {n:'Sécurité IA/LLM',p:82},{n:'Sécurité Blockchain/Crypto (ZKP)',p:80},
  ],
  ar:[
    {n:'الأمن الهجومي / Red Team',p:97},{n:'اختبار الاختراق (ويب/شبكات/موبايل)',p:96},
    {n:'تطوير أطر C2',p:95},{n:'Python / FastAPI / Node.js',p:95},
    {n:'هندسة الشبكات واكتشاف التهديدات',p:92},{n:'OSINT والاستخبارات الرقمية',p:93},
    {n:'أمن الاتصالات (SS7/GSM/GTP)',p:90},{n:'أبحاث أمن iOS / Apple',p:88},
    {n:'أمن السحاب (AWS/GCP)',p:85},{n:'تحليل وتطوير البرمجيات الخبيثة',p:85},
    {n:'أمن الذكاء الاصطناعي / LLM',p:82},{n:'أمن البلوكشين / الكريبتو (ZKP)',p:80},
  ]
};

const TECH=['Python','FastAPI','Node.js','TypeScript','React','Go','Bash','C/C#','Docker','Kubernetes','Redis','PostgreSQL','WebSocket','JWT','AES-256','ZKP','PGP','ELK Stack','Prometheus','Grafana'];
const TOOLS=['Metasploit','Burp Suite','Wireshark','Nmap','Nessus','SQLmap','Hydra','Maltego','Amass','John the Ripper','Shodan','Frida','Ghidra','CyberChef','Volatility','mimikatz'];
const LANGS=['🇦🇪 Arabic (Native)','🇬🇧 English (Fluent)','🇫🇷 French (Fluent)','🇷🇺 Russian (Good)','🇩🇪 German (Good)'];

const EXPERIENCE={
  en:[
    {date:'Oct 2024\n– Dec 2025',title:'Cybersecurity Architect / Threat Detection Consultant',co:'Adarma (Remote) — Banking & Enterprise',items:['Designed Threat Intelligence solutions for global banks and tier-1 enterprises','Built event correlation & behavioral analysis modules in Python/Go integrated with SIEM/SOC','Reduced false positives by 40% through advanced algorithmic filtering','Executed penetration tests and resilience assessments for cloud and on-premise infrastructures']},
    {date:'Dec 2020\n– Sep 2024',title:'Cybersecurity Architect / Network Consultant',co:'IronNet (Remote) — Network Architecture',items:['Architected secure network infrastructures for Cybera, NetFortis, ShieldWave','Secured cloud environments with advanced encryption and MFA systems','Built monitoring dashboards reducing active security incidents by 30–35%','Managed secure data migration during organizational restructuring']},
    {date:'Feb 2018\n– Dec 2020',title:'Cybersecurity Architect / Security Consultant',co:'Rubica — SMB & Enterprise Security',items:['Deployed network segmentation, endpoint protection, and AWS/GCP cloud security','Built IDS with Python, ELK, Suricata and automated incident response','Secured APIs with AES-256, JWT, MFA and Zero-Trust policies','Implemented Prometheus/Grafana monitoring — 40% incident reduction']},
    {date:'Apr 2017\n– Present',title:'Freelance Cybersecurity & Full-Stack Consultant',co:'Upwork — Top Rated Plus ⭐',items:['Security audits, penetration tests, and hardened backend solutions for global clients','Built secure scalable dashboards and internal tools (Python, Node.js, React)','100% mission success rate across all engagements','Clients in banking, fintech, healthcare, and e-commerce sectors']},
  ],
  fr:[
    {date:'Oct 2024\n– Déc 2025',title:'Architecte Cybersécurité / Consultant Détection des Menaces',co:'Adarma (Remote) — Banques & Entreprises',items:['Conception de solutions d\'intelligence des menaces pour banques mondiales','Modules de corrélation d\'événements et d\'analyse comportementale Python/Go','Réduction des faux positifs de 40% via filtrage algorithmique avancé','Tests d\'intrusion et évaluations de résilience pour infrastructures cloud et on-premise']},
    {date:'Déc 2020\n– Sep 2024',title:'Architecte Cybersécurité / Consultant Réseau',co:'IronNet (Remote) — Architecture Réseau',items:['Infrastructures réseau sécurisées pour Cybera, NetFortis, ShieldWave','Sécurisation des environnements cloud avec chiffrement avancé et MFA','Tableaux de bord de surveillance réduisant les incidents de 30–35%','Migration sécurisée des données lors de restructurations organisationnelles']},
    {date:'Fév 2018\n– Déc 2020',title:'Architecte Cybersécurité / Consultant Sécurité',co:'Rubica — PME & Grandes Entreprises',items:['Déploiement de segmentation réseau, protection des terminaux et sécurité cloud','Outils IDS avec Python, ELK, Suricata et réponse automatisée aux incidents','Sécurisation APIs avec AES-256, JWT, MFA et politiques Zero-Trust','Monitoring Prometheus/Grafana — réduction de 40% des incidents']},
    {date:'Avr 2017\n– Présent',title:'Consultant Freelance Cybersécurité & Full-Stack',co:'Upwork — Top Rated Plus ⭐',items:['Audits de sécurité, tests d\'intrusion et solutions backend renforcées','Tableaux de bord sécurisés et outils internes (Python, Node.js, React)','100% de taux de succès sur toutes les missions','Clients dans la banque, fintech, santé et e-commerce']},
  ],
  ar:[
    {date:'أكت 2024\n– ديس 2025',title:'مهندس أمن سيبراني / مستشار اكتشاف التهديدات',co:'Adarma (عن بُعد) — البنوك والمؤسسات',items:['تصميم حلول استخبارات التهديدات للبنوك العالمية','بناء وحدات تحليل سلوكي وربط الأحداث بلغة Python/Go','تقليل الإيجابيات الكاذبة بنسبة 40% عبر تصفية خوارزمية متقدمة','اختبارات اختراق وتقييمات مرونة للبنية التحتية السحابية والمحلية']},
    {date:'ديس 2020\n– سبت 2024',title:'مهندس أمن سيبراني / مستشار شبكات',co:'IronNet (عن بُعد) — هندسة الشبكات',items:['تصميم بنى تحتية شبكية آمنة لـ Cybera وNetFortis وShieldWave','تأمين البيئات السحابية بالتشفير المتقدم والمصادقة متعددة العوامل','لوحات مراقبة أمنية قللت الحوادث بنسبة 30–35%','ترحيل آمن للبيانات خلال إعادة الهيكلة التنظيمية']},
    {date:'فبر 2018\n– ديس 2020',title:'مهندس أمن سيبراني / مستشار أمني',co:'Rubica — الشركات الصغيرة والكبيرة',items:['نشر تجزئة الشبكات وحماية النقاط الطرفية وأمن السحاب','بناء IDS بلغة Python وELK وSuricata مع استجابة تلقائية للحوادث','تأمين APIs بـ AES-256 وJWT وMFA وسياسات Zero-Trust','مراقبة Prometheus/Grafana — تقليل الحوادث بنسبة 40%']},
    {date:'أبر 2017\n– الحاضر',title:'مستشار مستقل في الأمن السيبراني وتطوير البرمجيات',co:'Upwork — Top Rated Plus ⭐',items:['تدقيقات أمنية واختبارات اختراق وحلول خادم محصّنة للعملاء العالميين','بناء لوحات تحكم آمنة وأدوات داخلية (Python وNode.js وReact)','نسبة نجاح 100% في جميع المهمات','عملاء في البنوك والتكنولوجيا المالية والرعاية الصحية والتجارة الإلكترونية']},
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
  {t:'prompt',tx:'whoami'},{t:'ok',tx:'Sofiane Hamzaoui · Cybersecurity Architect · 20+ Years'},
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
      <div class="mb-preview-hdr">sofiane@darknet:~/${p.id}$</div>
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
  ftPrint('Welcome, Sofiane. Type <span style="color:var(--green)">help</span> for commands.','info');
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
  else if(c==='whoami') ftPrint('Sofiane Hamzaoui — Cybersecurity Architect · 20+ Years','ok');
  else if(c==='ls'||c==='ls -la') PROJECTS.forEach(p=>ftPrint(`-rwxr-xr-x  ${p.id}/  [${p.status.toUpperCase()}]`,'out'));
  else if(c==='skills'){document.getElementById('skills').scrollIntoView({behavior:'smooth'});ftPrint('→ Navigating to Skills...','ok');}
  else if(c==='projects'){document.getElementById('projects').scrollIntoView({behavior:'smooth'});ftPrint('→ Navigating to Projects...','ok');}
  else if(c==='cv'){window.open('cv.html','_blank');ftPrint('Opening CV of Sofiane Hamzaoui...','ok');}
  else if(c==='contact'){document.getElementById('contact').scrollIntoView({behavior:'smooth'});ftPrint('→ Navigating to Contact...','ok');}
  else if(c==='github'){window.open('https://github.com/spaypeur','_blank');ftPrint('Opening github.com/spaypeur','ok');}
  else if(c==='vaultguard'){window.open('https://vaultguard.pages.dev','_blank');ftPrint('Opening vaultguard.pages.dev','ok');}
  else if(c==='clear'||c==='cls') document.getElementById('ft-out').innerHTML='';
  else if(c==='neofetch') ftPrint(`<span style="color:var(--green)">sofiane@darknet</span><br>OS: Kali Linux 2024.4 · Shell: zsh 5.9<br>Node: SPAYPEUR · Mode: OFFENSIVE · Repos: 147+<br>Experience: 20+ years · Tools: 50+ · C2: 5 frameworks<br>Clearance: <span style="color:var(--red)">ROOT</span>`,'out');
  else if(c==='sudo su') ftPrint('You are already root, Sofiane.','ok');
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
  {name:'Foundational C# with Microsoft',path:'CERTS/Foundational C# with MICROSOFT CERT.png'},
  {name:'Frontend Dev Library V8',path:'CERTS/FrontendDevLibrary V8 CERT.png'},
  {name:'Fundamentals Of LLMs',path:'CERTS/Fundumentals Of LLM\'s.png'},
  {name:'HuggingFace Agent Course',path:'CERTS/HuggingFace AGENT COURSE CERT.png'},
  {name:'Legacy Frontend Dev',path:'CERTS/Legacy Frontend dev CERT.png'},
  {name:'Scientific Computing with Python',path:'CERTS/ScientificComputingWith PYTHON CERT.png'},
  {name:'Web Design V8',path:'CERTS/WebDesign V8 CERT.png'},
  {name:'Fundamentals of LLM Courses',path:'CERTS/fundamental of the llm courses CERT.png'},
  {name:'Security Certification 2023',path:'CERTS/To Text 01-12-2023 04.51.jpg'},
  {name:'Achievement Badge 1',path:'CERTS/1656392131272.png'},
  {name:'Achievement Badge 2',path:'CERTS/1656392266799.png'},
  {name:'Achievement Badge 3',path:'CERTS/1656392289426.png'},
];

function renderCertificates(){
  const gallery=document.getElementById('cert-gallery');
  if(!gallery) return;
  gallery.innerHTML=CERTS.map(cert=>`
    <div class="cert-card reveal" data-cert="${cert.name}" style="cursor:pointer;" onclick="viewCertificate('${cert.name}','${cert.path}')">
      <div class="cert-img-wrap">
        <img src="${cert.path}" alt="${cert.name}" class="cert-img" loading="lazy" onerror="this.style.display='none'">
      </div>
      <div class="cert-label">
        <span class="cert-name">${cert.name}</span>
        <span class="cert-icon">📜</span>
      </div>
    </div>
  `).join('');
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
