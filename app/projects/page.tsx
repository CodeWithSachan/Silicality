"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// ── PROJECTS DATA ─────────────────────────────────────────────────
const projects = [
  {
    id:      1,
    type:    "AI Systems · Automation",
    name:    "AI Customer Support Assistant",
    desc:    "An AI-powered assistant that automates customer queries and dramatically improves response time for support teams.",
    tags:    ["OpenAI API", "Automation", "Next.js"],
    emoji:   "🤖",
    thumbBg: "#0d1c10",
    thumbCard: "#142819",
    thumbBorder: "#1e3c22",
    status:  "live",
  },
  {
    id:      2,
    type:    "Dashboard · Analytics",
    name:    "Creator Analytics Dashboard",
    desc:    "Helps creators track engagement, growth, and revenue insights across multiple platforms in real time.",
    tags:    ["Dashboard", "Next.js", "Supabase"],
    emoji:   "📊",
    thumbBg: "#0d1220",
    thumbCard: "#142040",
    thumbBorder: "#1e3060",
    status:  "live",
  },
  {
    id:      3,
    type:    "Product Design · Branding",
    name:    "Startup Product Landing",
    desc:    "Product-focused website and interface design built to help an early-stage startup launch faster.",
    tags:    ["Product Design", "Branding", "Web Dev"],
    emoji:   "🚀",
    thumbBg: "#1c100d",
    thumbCard: "#2e1a0e",
    thumbBorder: "#3e2a14",
    status:  "live",
  },
  {
    id:      4,
    type:    "AI Platform · SaaS",
    name:    "AI Cold Outreach Platform",
    desc:    "SaaS platform that automates B2B email outreach using AI-generated personalization and campaign analytics.",
    tags:    ["OpenAI", "LangChain", "Supabase"],
    emoji:   "✉️",
    thumbBg: "#141020",
    thumbCard: "#1e1430",
    thumbBorder: "#2a1a42",
    status:  "coming",
  },
  {
    id:      5,
    type:    "Fintech · Web App",
    name:    "Fintech Ledger API",
    desc:    "A robust financial ledger API with real-time transaction processing, reconciliation, and reporting.",
    tags:    ["Node.js", "PostgreSQL", "Stripe"],
    emoji:   "💳",
    thumbBg: "#0a1a12",
    thumbCard: "#112418",
    thumbBorder: "#1a3224",
    status:  "coming",
  },
  {
    id:      6,
    type:    "AI Tools · Developer",
    name:    "Schema Architect AI",
    desc:    "Instant database schema generation for PostgreSQL and MongoDB based on natural language business logic.",
    tags:    ["Gemini", "PostgreSQL", "Next.js"],
    emoji:   "🗄️",
    thumbBg: "#1a140a",
    thumbCard: "#2a1e0e",
    thumbBorder: "#3a2a14",
    status:  "coming",
  },
];

const stats = [
  { num: "6+",  label: "Products shipped"       },
  { num: "3",   label: "Industries covered"      },
  { num: "4",   label: "AI integrations built"   },
  { num: "24h", label: "Average response time"   },
];

// ── PROJECT CARD ──────────────────────────────────────────────────
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      whileHover={{ y: -5, borderColor: "#2c2c36" }}
      style={{
        background:   "#111114",
        border:       "0.5px solid #1e1e26",
        borderRadius: "16px",
        overflow:     "hidden",
        transition:   "border-color 0.2s, transform 0.2s",
        cursor:       project.status === "live" ? "pointer" : "default",
      }}
    >
      {/* Thumbnail */}
      <div style={{
        height:         "148px",
        background:     project.thumbBg,
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        position:       "relative",
      }}>
        <div style={{
          width:          "60px",
          height:         "60px",
          borderRadius:   "16px",
          background:     project.thumbCard,
          border:         `0.5px solid ${project.thumbBorder}`,
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          fontSize:       "26px",
        }}>
          {project.emoji}
        </div>

        {/* Status badge */}
        <div style={{
          position:       "absolute",
          top:            "12px",
          right:          "12px",
          background:     project.status === "live"
            ? "rgba(94,201,126,0.1)"
            : "rgba(9,9,11,0.7)",
          border:         project.status === "live"
            ? "0.5px solid rgba(94,201,126,0.3)"
            : "0.5px solid #2c2c36",
          borderRadius:   "100px",
          padding:        "3px 10px",
          fontSize:       "10px",
          color:          project.status === "live" ? "#5ec97e" : "#7a7a88",
          backdropFilter: "blur(6px)",
          fontFamily:     "'DM Sans', sans-serif",
        }}>
          {project.status === "live" ? "● Live" : "In Progress"}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "1.5rem" }}>
        <div style={{
          fontSize:      "10px",
          color:         "#e8793a",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          fontWeight:    600,
          marginBottom:  "8px",
          fontFamily:    "'DM Sans', sans-serif",
        }}>
          {project.type}
        </div>

        <h3 style={{
          fontFamily:   "'Syne', sans-serif",
          fontSize:     "15px",
          fontWeight:   700,
          color:        "#f0ece6",
          marginBottom: "8px",
          letterSpacing:"-0.2px",
          lineHeight:   1.35,
        }}>
          {project.name}
        </h3>

        <p style={{
          fontSize:     "13px",
          color:        "#7a7a88",
          lineHeight:   1.65,
          marginBottom: "14px",
        }}>
          {project.desc}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              fontSize:     "11px",
              background:   "#16161a",
              border:       "0.5px solid #1e1e26",
              color:        "#3a3a46",
              padding:      "3px 9px",
              borderRadius: "100px",
              fontFamily:   "'DM Sans', sans-serif",
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────
export default function ProjectsPage() {
  const [email,     setEmail]     = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  async function handleNotify(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
    setEmail("");
  }

  return (
    <div style={{ background: "#09090b", minHeight: "100vh", color: "#f0ece6" }}>

      {/* ── HERO ── */}
      <section className="projects-hero">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="proj-tag">Selected Work</div>

          <h1 className="proj-h1">
            Products we've helped
            <br />
            <span style={{ color: "#3a3a46" }}>design and build.</span>
          </h1>

          <p className="proj-sub">
            A growing portfolio of AI products, startup MVPs, and web platforms
            crafted for founders and modern teams.
          </p>

          <div className="proj-hero-btns">
            <Link href="/contact" className="btn-proj-main">
              Start a Project
            </Link>
            <Link href="/tools/product-architect" className="btn-proj-ghost">
              Try AI Architect →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── STATS STRIP ── */}
      <div className="proj-stats">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="proj-stat"
            style={{ borderRight: i < stats.length - 1 ? "0.5px solid #1e1e26" : "none" }}
          >
            <div className="proj-stat-num">
              {s.num.replace(/[^0-9]/g, "")}
              <span style={{ color: "#e8793a" }}>
                {s.num.replace(/[0-9]/g, "")}
              </span>
            </div>
            <div className="proj-stat-label">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* ── PROJECTS GRID ── */}
      <section className="proj-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3rem" }}
        >
          <div className="proj-section-tag">All Projects</div>
          <h2 className="proj-section-h2">
            6 products.
            <span style={{ color: "#3a3a46" }}> Built and shipped.</span>
          </h2>
        </motion.div>

        <div className="proj-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* ── PROCESS STRIP ── */}
      <div style={{ borderTop: "0.5px solid #1e1e26", borderBottom: "0.5px solid #1e1e26", background: "#111114" }}>
        <section className="proj-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="proj-process"
          >
            <div>
              <div className="proj-section-tag">How we work</div>
              <h2 className="proj-section-h2" style={{ marginBottom: "0.75rem" }}>
                From idea to
                <span style={{ color: "#3a3a46" }}> shipped product.</span>
              </h2>
              <p style={{ fontSize: "15px", color: "#7a7a88", lineHeight: 1.8, fontWeight: 300, maxWidth: "400px" }}>
                Every project follows the same tight process — no bloat, no delays.
              </p>
            </div>

            <div className="proj-steps">
              {[
                { n: "01", title: "Discovery call",      desc: "30 mins. We scope your idea, define the MVP, and agree on timeline." },
                { n: "02", title: "Design & architect",  desc: "We design the UI and plan the full technical architecture before writing a line of code." },
                { n: "03", title: "Build & ship",        desc: "2–8 week build depending on scope. Daily updates, no surprises." },
                { n: "04", title: "Hand off",            desc: "Full code ownership, deployment setup, and 30 days of post-launch support." },
              ].map((step) => (
                <div key={step.n} style={{
                  display:       "flex",
                  gap:           "16px",
                  alignItems:    "flex-start",
                  padding:       "1.25rem 0",
                  borderBottom:  "0.5px solid #1e1e26",
                }}>
                  <div style={{
                    fontFamily:   "'Syne', sans-serif",
                    fontSize:     "11px",
                    fontWeight:   700,
                    color:        "#e8793a",
                    width:        "28px",
                    flexShrink:   0,
                    paddingTop:   "2px",
                  }}>
                    {step.n}
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 500, color: "#f0ece6", marginBottom: "4px", fontFamily: "'DM Sans', sans-serif" }}>
                      {step.title}
                    </div>
                    <div style={{ fontSize: "13px", color: "#7a7a88", lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif" }}>
                      {step.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>

      {/* ── NOTIFY + CTA ── */}
      <section className="proj-section">
        <div className="proj-bottom-grid">

          {/* Notify card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background:   "#111114",
              border:       "0.5px solid #1e1e26",
              borderRadius: "16px",
              padding:      "2rem",
            }}
          >
            <div style={{
              display:      "inline-block",
              background:   "#0f0f12",
              border:       "0.5px solid #2c2c36",
              borderRadius: "100px",
              padding:      "5px 14px",
              fontSize:     "11px",
              color:        "#7a7a88",
              letterSpacing:"0.06em",
              marginBottom: "1.25rem",
              fontFamily:   "'DM Sans', sans-serif",
            }}>
              Stay Updated
            </div>

            <h3 style={{
              fontFamily:   "'Syne', sans-serif",
              fontSize:     "20px",
              fontWeight:   700,
              color:        "#f0ece6",
              marginBottom: "0.5rem",
              letterSpacing:"-0.3px",
            }}>
              More case studies coming.
            </h3>
            <p style={{ fontSize: "14px", color: "#7a7a88", lineHeight: 1.7, marginBottom: "1.5rem", fontWeight: 300 }}>
              Get notified when we publish new project breakdowns, behind-the-scenes builds, and client stories.
            </p>

            {submitted ? (
              <div style={{
                padding:      "12px 16px",
                background:   "rgba(94,201,126,0.08)",
                border:       "0.5px solid rgba(94,201,126,0.25)",
                borderRadius: "10px",
                fontSize:     "13px",
                color:        "#5ec97e",
                fontFamily:   "'DM Sans', sans-serif",
              }}>
                ✓ You're on the list. We'll reach out soon.
              </div>
            ) : (
              <form onSubmit={handleNotify} style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    flex:         "1",
                    minWidth:     "180px",
                    background:   "#0f0f12",
                    border:       "0.5px solid #2c2c36",
                    borderRadius: "9px",
                    padding:      "11px 14px",
                    color:        "#f0ece6",
                    fontFamily:   "'DM Sans', sans-serif",
                    fontSize:     "14px",
                    outline:      "none",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(232,121,58,0.4)")}
                  onBlur={(e)  => (e.target.style.borderColor = "#2c2c36")}
                />
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    background:   "#e8793a",
                    color:        "#fff",
                    border:       "none",
                    padding:      "11px 22px",
                    borderRadius: "9px",
                    fontSize:     "13px",
                    fontFamily:   "'DM Sans', sans-serif",
                    fontWeight:   500,
                    cursor:       loading ? "not-allowed" : "pointer",
                    opacity:      loading ? 0.6 : 1,
                    whiteSpace:   "nowrap",
                  }}
                >
                  {loading ? "..." : "Notify Me"}
                </button>
              </form>
            )}
          </motion.div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              background:   "#0f0f12",
              border:       "0.5px solid rgba(232,121,58,0.25)",
              borderRadius: "16px",
              padding:      "2rem",
              display:      "flex",
              flexDirection:"column",
              justifyContent:"space-between",
              gap:          "1.5rem",
            }}
          >
            <div>
              <div style={{
                display:      "inline-block",
                background:   "rgba(232,121,58,0.08)",
                border:       "0.5px solid rgba(232,121,58,0.2)",
                borderRadius: "100px",
                padding:      "5px 14px",
                fontSize:     "11px",
                color:        "#e8793a",
                letterSpacing:"0.06em",
                marginBottom: "1.25rem",
                fontFamily:   "'DM Sans', sans-serif",
              }}>
                Work With Us
              </div>

              <h3 style={{
                fontFamily:   "'Syne', sans-serif",
                fontSize:     "20px",
                fontWeight:   700,
                color:        "#f0ece6",
                marginBottom: "0.5rem",
                letterSpacing:"-0.3px",
              }}>
                Your product could be next.
              </h3>
              <p style={{ fontSize: "14px", color: "#7a7a88", lineHeight: 1.7, fontWeight: 300 }}>
                We take on a small number of projects each month to keep quality high. If you have an idea, let's talk.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Link href="/contact" style={{
                display:        "block",
                background:     "#e8793a",
                color:          "#fff",
                padding:        "13px",
                borderRadius:   "9px",
                fontSize:       "14px",
                fontFamily:     "'DM Sans', sans-serif",
                fontWeight:     500,
                textDecoration: "none",
                textAlign:      "center",
                transition:     "opacity 0.2s",
              }}>
                Start a Project →
              </Link>
              <Link href="/tools/product-architect" style={{
                display:        "block",
                background:     "transparent",
                color:          "#f0ece6",
                border:         "0.5px solid #2c2c36",
                padding:        "13px",
                borderRadius:   "9px",
                fontSize:       "14px",
                fontFamily:     "'DM Sans', sans-serif",
                textDecoration: "none",
                textAlign:      "center",
                transition:     "border-color 0.2s",
              }}>
                Try AI Product Architect
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        .projects-hero {
          padding: 5rem 3rem 4rem;
          max-width: 1400px;
          margin: 0 auto;
          box-sizing: border-box;
        }
        .proj-tag {
          display: inline-block;
          background: #111114;
          border: 0.5px solid #2c2c36;
          border-radius: 100px;
          padding: 5px 16px;
          font-size: 11px;
          color: #7a7a88;
          letter-spacing: 0.06em;
          margin-bottom: 1.5rem;
          font-family: 'DM Sans', sans-serif;
        }
        .proj-h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.2rem, 4vw, 3.4rem);
          font-weight: 800;
          letter-spacing: -1.5px;
          line-height: 1.08;
          color: #f0ece6;
          margin: 0 0 1.25rem;
        }
        .proj-sub {
          font-size: 15px;
          color: #7a7a88;
          line-height: 1.8;
          max-width: 500px;
          margin: 0 0 2.5rem;
          font-weight: 300;
        }
        .proj-hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }
        .btn-proj-main {
          display: inline-block;
          background: #e8793a;
          color: #fff;
          padding: 13px 28px;
          border-radius: 9px;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          text-decoration: none;
          transition: opacity 0.2s;
          white-space: nowrap;
        }
        .btn-proj-main:hover { opacity: 0.88; }
        .btn-proj-ghost {
          display: inline-block;
          background: transparent;
          color: #f0ece6;
          border: 0.5px solid #2c2c36;
          padding: 13px 28px;
          border-radius: 9px;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
          white-space: nowrap;
        }
        .btn-proj-ghost:hover { border-color: #e8793a; color: #e8793a; }

        /* STATS */
        .proj-stats {
          display: flex;
          border-top: 0.5px solid #1e1e26;
          border-bottom: 0.5px solid #1e1e26;
          flex-wrap: wrap;
        }
        .proj-stat {
          flex: 1;
          min-width: 130px;
          padding: 1.75rem 3rem;
          display: flex;
          flex-direction: column;
          gap: 4px;
          box-sizing: border-box;
        }
        .proj-stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: #f0ece6;
          letter-spacing: -1px;
          line-height: 1;
        }
        .proj-stat-label {
          font-size: 13px;
          color: #7a7a88;
          margin-top: 4px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
        }

        /* SECTIONS */
        .proj-section {
          padding: 5rem 3rem;
          max-width: 1400px;
          margin: 0 auto;
          box-sizing: border-box;
        }
        .proj-section-tag {
          display: inline-block;
          background: #111114;
          border: 0.5px solid #2c2c36;
          border-radius: 100px;
          padding: 5px 16px;
          font-size: 11px;
          color: #7a7a88;
          letter-spacing: 0.06em;
          margin-bottom: 1rem;
          font-family: 'DM Sans', sans-serif;
        }
        .proj-section-h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 800;
          letter-spacing: -1px;
          line-height: 1.1;
          color: #f0ece6;
          margin: 0;
        }

        /* GRID */
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        /* PROCESS */
        .proj-process {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
        }
        .proj-steps { display: flex; flex-direction: column; }

        /* BOTTOM GRID */
        .proj-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        /* TABLET */
        @media (max-width: 1024px) {
          .projects-hero { padding: 4rem 2rem 3rem; }
          .proj-section   { padding: 4rem 2rem; }
          .proj-grid      { grid-template-columns: repeat(2, 1fr); }
          .proj-process   { grid-template-columns: 1fr; gap: 2.5rem; }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .projects-hero  { padding: 3.5rem 1.25rem 2.5rem; }
          .proj-h1        { font-size: clamp(1.9rem, 7vw, 2.4rem); letter-spacing: -1px; }
          .proj-sub       { font-size: 14px; }
          .proj-hero-btns { flex-direction: column; }
          .btn-proj-main,
          .btn-proj-ghost { text-align: center; }
          .proj-section   { padding: 3.5rem 1.25rem; }
          .proj-grid      { grid-template-columns: 1fr; }
          .proj-stat      { padding: 1.25rem 1.5rem; }
          .proj-bottom-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 480px) {
          .projects-hero { padding: 3rem 1rem 2rem; }
          .proj-section  { padding: 3rem 1rem; }
          .proj-grid     { gap: 12px; }
        }
      `}</style>
    </div>
  );
}