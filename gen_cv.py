from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm, mm
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable,
    Table, TableStyle, KeepTogether
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT
import os

OUTPUT = "CERTS/Hamzaoui_Sofiene_CV_Complete.pdf"

# ── Colour palette ──────────────────────────────────────────────────────────
DARK      = colors.HexColor("#0f172a")
MID       = colors.HexColor("#1e293b")
ACCENT    = colors.HexColor("#0891b2")   # cyan
ACCENT2   = colors.HexColor("#f97316")   # amber
LIGHT     = colors.HexColor("#f1f5f9")
DIM       = colors.HexColor("#64748b")
WHITE     = colors.white

# ── Styles ───────────────────────────────────────────────────────────────────
def make_styles():
    s = {}
    base = ParagraphStyle

    s["name"] = base("name",
        fontSize=22, leading=26, textColor=DARK,
        fontName="Helvetica-Bold", spaceAfter=2)

    s["title"] = base("title",
        fontSize=11, leading=14, textColor=ACCENT,
        fontName="Helvetica-Bold", spaceAfter=4)

    s["contact_line"] = base("contact_line",
        fontSize=8.5, leading=12, textColor=DIM,
        fontName="Helvetica", spaceAfter=0)

    s["section_head"] = base("section_head",
        fontSize=9, leading=12, textColor=WHITE,
        fontName="Helvetica-Bold", spaceBefore=10, spaceAfter=4,
        leftIndent=0, borderPad=0)

    s["job_title"] = base("job_title",
        fontSize=9.5, leading=12, textColor=DARK,
        fontName="Helvetica-Bold", spaceBefore=6, spaceAfter=1)

    s["job_company"] = base("job_company",
        fontSize=8.5, leading=11, textColor=ACCENT,
        fontName="Helvetica-Bold", spaceAfter=1)

    s["job_date"] = base("job_date",
        fontSize=8, leading=10, textColor=DIM,
        fontName="Helvetica-Oblique", spaceAfter=3)

    s["bullet"] = base("bullet",
        fontSize=8.5, leading=12, textColor=DARK,
        fontName="Helvetica", leftIndent=12, spaceAfter=2)

    s["skill_cat"] = base("skill_cat",
        fontSize=8.5, leading=11, textColor=DARK,
        fontName="Helvetica-Bold", spaceBefore=4, spaceAfter=1)

    s["skill_val"] = base("skill_val",
        fontSize=8, leading=11, textColor=DIM,
        fontName="Helvetica", spaceAfter=2)

    s["cert_item"] = base("cert_item",
        fontSize=8.5, leading=12, textColor=DARK,
        fontName="Helvetica", spaceAfter=2, leftIndent=8)

    s["lang"] = base("lang",
        fontSize=8.5, leading=11, textColor=DARK,
        fontName="Helvetica", spaceAfter=2)

    s["footer"] = base("footer",
        fontSize=7.5, leading=10, textColor=DIM,
        fontName="Helvetica-Oblique", alignment=TA_CENTER)

    return s


def section_bar(label):
    """Returns a dark banner row for section headers."""
    data = [[Paragraph(f"&nbsp;&nbsp;{label}", ParagraphStyle(
        "sb", fontSize=9, leading=12, textColor=WHITE,
        fontName="Helvetica-Bold"))]]
    t = Table(data, colWidths=[17*cm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), ACCENT),
        ("ROWPADDING", (0, 0), (-1, -1), 4),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    return t


def bullet(text, s):
    return Paragraph(f"• {text}", s["bullet"])


def build_cv():
    doc = SimpleDocTemplate(
        OUTPUT,
        pagesize=A4,
        leftMargin=1.8*cm,
        rightMargin=1.8*cm,
        topMargin=1.4*cm,
        bottomMargin=1.6*cm,
    )

    s = make_styles()
    story = []

    # ── HEADER ─────────────────────────────────────────────────────────────
    story.append(Paragraph("Sofiene Hamzaoui", s["name"]))
    story.append(Paragraph("Senior AI Systems Architect &amp; Platform Engineer", s["title"]))

    contact_info = (
        "admin@vaultguard.eu.org &nbsp;|&nbsp; +216 22 090 800 &nbsp;|&nbsp; "
        "vaultguard.eu.org &nbsp;|&nbsp; github.com/spaypeur &nbsp;|&nbsp; Tunisia · Remote"
    )
    story.append(Paragraph(contact_info, s["contact_line"]))
    story.append(Spacer(1, 3*mm))
    story.append(HRFlowable(width="100%", thickness=1.5, color=ACCENT, spaceAfter=6))

    # ── PROFESSIONAL SUMMARY ───────────────────────────────────────────────
    story.append(section_bar("PROFESSIONAL SUMMARY"))
    story.append(Spacer(1, 3*mm))
    summary = (
        "Senior Systems Architect and Platform Engineer with <b>20+ years</b> of hands-on experience "
        "designing, deploying, and optimising enterprise-grade AI infrastructure, local LLM inference "
        "clusters, high-performance backend pipelines, and security-centric crypto platforms. "
        "Expert in quantised GGUF model deployment (llama.cpp, CUDA/ROCm layer offloading, "
        "128K context orchestration), custom Retrieval-Augmented Generation (RAG) vector engines, "
        "multi-agent autonomous systems, and high-throughput WebSocket architectures. "
        "Upwork <b>Top Rated Plus</b> — 100 % job-success rate across 50+ enterprise contracts."
    )
    story.append(Paragraph(summary, ParagraphStyle(
        "sum", fontSize=8.5, leading=13, textColor=DARK,
        fontName="Helvetica", spaceAfter=6)))

    # ── PROFESSIONAL EXPERIENCE ────────────────────────────────────────────
    story.append(section_bar("PROFESSIONAL EXPERIENCE"))
    story.append(Spacer(1, 3*mm))

    jobs = [
        {
            "title": "Senior AI Systems Architect & Platform Consultant",
            "company": "Adarma & Global Clients (Remote)",
            "dates": "Oct 2024 – Present",
            "bullets": [
                "Architected and deployed private local LLM inference engines using llama.cpp with custom CUDA/Vulkan offloading wrappers, handling context windows up to 128 K tokens.",
                "Designed self-hosted RAG architectures utilising ChromaDB 1.5 and sentence-transformer embeddings (all-MiniLM-L6-v2, nomic-embed) to securely index large-scale codebase semantics.",
                "Built multi-agent workflow runners mapping filesystems, auditing code schemas, and executing autonomous telemetry feedback loops via MCP protocol.",
                "Configured enterprise cloud inference using AWS Bedrock (us-east-1) with IAM-scoped policies, multi-provider fallback, and token-consumption auditing.",
                "Supervised secure deployment of OpenAI-compatible REST endpoints serving quantised GGUF models (Q4_K_M, IQ4_XS, Q8_K_P) to internal development teams.",
            ]
        },
        {
            "title": "Senior Systems Engineer & Backend Developer",
            "company": "IronNet & Global Enterprises (Remote)",
            "dates": "Dec 2020 – Sep 2024",
            "bullets": [
                "Engineered high-throughput async telemetry pipelines using FastAPI, Celery, and Redis, reducing mean processing latency by 35 %.",
                "Developed multi-tenant dashboards deployed on Cloudflare Workers CDN serving global regions with sub-450 ms data-sync SLAs.",
                "Supervised migration, replication, and indexing for high-volume PostgreSQL clusters with zero service interruption.",
                "Built real-time monitoring environments using Prometheus & Grafana with policy-triggered alerting on network anomalies.",
                "Containerised development stacks using Docker Compose and Kubernetes, achieving repeatable CI/CD pipelines.",
            ]
        },
        {
            "title": "Full Stack & Infrastructure Engineer",
            "company": "Rubica & SMB Portfolios (Remote)",
            "dates": "Feb 2018 – Dec 2020",
            "bullets": [
                "Designed and maintained scalable platforms for 20+ corporate and SMB clients, deploying secure backends and responsive UI portals.",
                "Hardened REST APIs with Zero-Trust access control, JWT authentication, and AES-256 state encryption.",
                "Automated infrastructure provisioning and containerisation using Docker, Docker Compose, and Bash workflows.",
                "Engineered document-ingestion tools parsing PDF, DOCX, and XLSX into structured database schemas.",
            ]
        },
        {
            "title": "Senior AI, Cybersecurity & Full-Stack Consultant",
            "company": "Upwork — Top Rated Plus (100 % Job Success Rate)",
            "dates": "Apr 2017 – Present",
            "bullets": [
                "Successfully delivered 50+ projects for enterprise clients across North America, Europe, and the Middle East.",
                "Delivered custom APIs, complex database schemas, real-time WebSocket integrations, and vector-search pipelines.",
                "Maintained 100 % Client Satisfaction with continuous repeat business and long-term retainers.",
            ]
        },
    ]

    for job in jobs:
        block = []
        # Title + date on same row
        row_data = [
            [Paragraph(job["title"], s["job_title"]),
             Paragraph(job["dates"], ParagraphStyle(
                 "jd2", fontSize=8, leading=10, textColor=DIM,
                 fontName="Helvetica-Oblique", alignment=TA_RIGHT))]
        ]
        rt = Table(row_data, colWidths=[12*cm, 5*cm])
        rt.setStyle(TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LEFTPADDING", (0, 0), (0, 0), 0),
            ("RIGHTPADDING", (-1, -1), (-1, -1), 0),
        ]))
        block.append(rt)
        block.append(Paragraph(job["company"], s["job_company"]))
        for b in job["bullets"]:
            block.append(bullet(b, s))
        block.append(Spacer(1, 3*mm))
        story.append(KeepTogether(block))

    # ── FLAGSHIP PROJECTS ──────────────────────────────────────────────────
    story.append(section_bar("FLAGSHIP PROJECTS"))
    story.append(Spacer(1, 3*mm))

    projects = [
        {
            "name": "VaultGuard — Institutional P2P Crypto Settlement Desk",
            "stack": "TypeScript · Cloudflare Workers · Supabase · React · WebAuthn · ZKP",
            "desc": (
                "Production-deployed institutional OTC settlement engine running across Cloudflare's 300+ city "
                "edge network. Implements Zero-Knowledge Proof progressive identity vaults, passwordless "
                "WebAuthn/FIDO2 biometrics, multi-sig custody, and threat-intelligence ingestion "
                "(VirusTotal, AbuseIPDB, Shodan). 137 edge API endpoints live at vaultguard.eu.org."
            ),
        },
        {
            "name": "Phalanx X — Local LLM OpenAI-Compatible API Server",
            "stack": "Python · llama.cpp · CUDA · GGUF · FastAPI",
            "desc": (
                "High-performance local inference server providing full OpenAI-compatible "
                "/v1/chat/completions endpoints. Automates CUDA/Vulkan GPU-layer offloading, "
                "supports MoE architectures (Qwen3.6 35B, 256 experts), 128 K context, and "
                "zero-latency streaming with no external dependencies."
            ),
        },
        {
            "name": "AI-Integrated C2 Server — Autonomous Agent Command Loop",
            "stack": "Python · FastAPI · WebSockets · Redis · Docker · Ollama",
            "desc": (
                "Next-generation command & control dashboard integrating local LLM orchestration "
                "to direct autonomous scanning, environment mapping, and CVE lookup operations. "
                "Redis + PostgreSQL telemetry persistence. Multi-agent session management via "
                "FastAPI WebSockets with real-time feedback loops."
            ),
        },
        {
            "name": "UK Insolvency Monitor — Enterprise Credit Risk Tracker",
            "stack": "Python · FastAPI · Celery · Redis · React · PostgreSQL",
            "desc": (
                "Real-time enterprise risk application ingesting UK public insolvency filings daily. "
                "Identifies credit-score adjustments ≥5 %, formats automated multi-sheet Excel reports "
                "via Celery async pipelines, and serves a multi-tenant dashboard with client-scoped filters."
            ),
        },
        {
            "name": "Mythos Learner — Autonomous Repository Indexing Agent",
            "stack": "Python · Ollama · ChromaDB · sentence-transformers",
            "desc": (
                "Self-enhancing AI agent that scans project directories, builds unified semantic indexes "
                "from SKILL.md files, and auto-learns from 102+ capability specifications. Interfaces "
                "with local Qwen and Llama models for dynamic multi-step planning."
            ),
        },
    ]

    for proj in projects:
        block = []
        block.append(Paragraph(f"◆ {proj['name']}", ParagraphStyle(
            "pn", fontSize=9, leading=12, textColor=DARK,
            fontName="Helvetica-Bold", spaceBefore=4, spaceAfter=1)))
        block.append(Paragraph(proj["stack"], ParagraphStyle(
            "ps", fontSize=8, leading=11, textColor=ACCENT2,
            fontName="Helvetica-Oblique", spaceAfter=2)))
        block.append(Paragraph(proj["desc"], ParagraphStyle(
            "pd", fontSize=8.5, leading=12, textColor=DARK,
            fontName="Helvetica", leftIndent=10, spaceAfter=4)))
        story.append(KeepTogether(block))

    # ── CORE COMPETENCIES ─────────────────────────────────────────────────
    story.append(section_bar("CORE COMPETENCIES"))
    story.append(Spacer(1, 3*mm))

    competencies = [
        ("AI & LLM Engineering",
         "Quantised Local Models (GGUF) · llama.cpp & CUDA Offloading · RAG & Vector Search · "
         "Multi-Agent Orchestration · Context Window Architecture · Fine-Tuning · MCP Protocol"),
        ("Systems & Platform",
         "FastAPI · Python · Node.js · WebSockets · Cloudflare Workers Edge API · "
         "PostgreSQL · Redis · Supabase · Celery · Docker · Kubernetes"),
        ("Security & Cryptography",
         "Zero-Knowledge Proofs (ZKP) · WebAuthn & FIDO2 · Zero-Trust API Hardening · "
         "Threat Intelligence & OSINT · BTCPay Server · AES-256 Encryption"),
        ("Frontend & Tooling",
         "React · TypeScript · Three.js · Tailwind CSS · Git · Linux · Bash · "
         "Aider · Continue IDE · Claude CLI · Open Interpreter"),
    ]

    for cat, vals in competencies:
        story.append(Paragraph(cat, s["skill_cat"]))
        story.append(Paragraph(vals, s["skill_val"]))

    # ── CERTIFICATIONS ─────────────────────────────────────────────────────
    story.append(Spacer(1, 2*mm))
    story.append(section_bar("CERTIFICATIONS"))
    story.append(Spacer(1, 3*mm))

    certs = [
        "HuggingFace — AI Agents Course",
        "HuggingFace / DeepLearning.AI — Fundamentals of LLMs",
        "Microsoft / freeCodeCamp — Foundational C# with Microsoft",
        "IBM — Incident Response & System Forensics",
        "IBM — Security Operations & Management",
        "IBM — Vulnerability Management",
        "IBM — System & Network Security",
        "IBM — Cloud Security Architecture",
        "IBM — GRC & Data Privacy",
        "freeCodeCamp — Scientific Computing with Python",
        "freeCodeCamp — Frontend Development Libraries V8",
        "IELTS General Training — Band 5.5 / B2 (British Council)",
    ]

    # Two-column layout
    left = certs[:6]
    right = certs[6:]
    max_rows = max(len(left), len(right))
    cert_data = []
    for i in range(max_rows):
        l = f"✦  {left[i]}" if i < len(left) else ""
        r = f"✦  {right[i]}" if i < len(right) else ""
        cert_data.append([
            Paragraph(l, s["cert_item"]),
            Paragraph(r, s["cert_item"]),
        ])
    ct = Table(cert_data, colWidths=[8.5*cm, 8.5*cm])
    ct.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
    ]))
    story.append(ct)

    # ── LANGUAGES ──────────────────────────────────────────────────────────
    story.append(Spacer(1, 3*mm))
    story.append(section_bar("LANGUAGES"))
    story.append(Spacer(1, 3*mm))

    lang_data = [[
        Paragraph(l, ParagraphStyle("lh", fontSize=8.5, leading=11,
                                    textColor=DARK, fontName="Helvetica-Bold"))
        for l in ["Arabic", "English", "French", "Russian", "German"]
    ], [
        Paragraph(l, s["lang"])
        for l in ["Native", "Fluent (IELTS B2)", "Fluent", "Good", "Basic"]
    ]]
    lt = Table(lang_data, colWidths=[3.4*cm]*5)
    lt.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 4),
    ]))
    story.append(lt)

    # ── FOOTER ─────────────────────────────────────────────────────────────
    story.append(Spacer(1, 6*mm))
    story.append(HRFlowable(width="100%", thickness=0.5, color=DIM, spaceAfter=4))
    story.append(Paragraph(
        "Sofiene Hamzaoui · admin@vaultguard.eu.org · +216 22 090 800 · "
        "github.com/spaypeur · vaultguard.eu.org · Tunisia · Remote",
        s["footer"]))

    doc.build(story)
    print(f"✅ CV generated: {OUTPUT}")


if __name__ == "__main__":
    build_cv()
