"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// ── DATA ──────────────────────────────────────────────────────────
const projects = [
  {
    title:       "AI Customer Support Assistant",
    type:        "AI · Automation",
    desc:        "An AI-powered assistant that automates customer queries and dramatically improves response time for support teams.",
    tags:        ["OpenAI API", "Automation", "Next.js"],
    emoji:       "🤖",
    thumbBg:     "#0d1c10",
    thumbCard:   "#142819",
    thumbBorder: "#1e3c22",
    badge:       "AI Systems",
  },
  {
    title:       "Creator Analytics Dashboard",
    type:        "Dashboard · Analytics",
    desc:        "A modern analytics dashboard helping creators track engagement, growth, and revenue insights all in one place.",
    tags:        ["Dashboard", "Next.js", "Supabase"],
    emoji:       "📊",
    thumbBg:     "#0d1220",
    thumbCard:   "#142040",
    thumbBorder: "#1e3060",
    badge:       "Web Platform",
  },
  {
    title:       "Startup Product Landing",
    type:        "Design · Branding",
    desc:        "Product-focused website and interface design built to help an early-stage startup launch faster.",
    tags:        ["Product Design", "Branding", "Web Dev"],
    emoji:       "🚀",
    thumbBg:     "#1c100d",
    thumbCard:   "#2e1a0e",
    thumbBorder: "#3e2a14",
    badge:       "Product Design",
  },
];

// ── PROJECT CARD ──────────────────────────────────────────────────
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      whileHover={{ y: -5, borderColor: "#2c2c36" }}
      style={{
        background:   "#111114",
        border:       "0.5px solid #1e1e26",
        borderRadius: "16px",
        overflow:     "hidden",
        cursor:       "pointer",
        transition:   "border-color 0.2s, transform 0.2s",
      }}
    >
      {/* Thumbnail */}
      <div style={{
        height:         "150px",
        background:     project.thumbBg,
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        position:       "relative",
        flexShrink:     0,
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

        {/* Badge */}
        <div style={{
          position:       "absolute",
          top:            "10px",
          right:          "10px",
          background:     "rgba(9,9,11,0.75)",
          border:         "0.5px solid #2c2c36",
          borderRadius:   "100px",
          padding:        "3px 9px",
          fontSize:       "10px",
          color:          "#7a7a88",
          letterSpacing:  "0.05em",
          backdropFilter: "blur(6px)",
        }}>
          {project.badge}
        </div>
      </div>

      {/* Body */}
      <div className="proj-card-body">
        <div style={{
          fontSize:      "10px",
          color:         "#e8793a",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          fontWeight:    600,
          marginBottom:  "7px",
        }}>
          {project.type}
        </div>

        <h3 style={{
          fontFamily:    "'Syne', sans-serif",
          fontSize:      "15px",
          fontWeight:    700,
          color:         "#f0ece6",
          marginBottom:  "7px",
          letterSpacing: "-0.2px",
          lineHeight:    1.35,
        }}>
          {project.title}
        </h3>

        <p style={{
          fontSize:     "13px",
          color:        "#7a7a88",
          lineHeight:   1.65,
          marginBottom: "12px",
        }}>
          {project.desc}
        </p>

        <div style={{ display:"flex", flexWrap:"wrap", gap:"6px" }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              fontSize:     "11px",
              background:   "#16161a",
              border:       "0.5px solid #1e1e26",
              color:        "#3a3a46",
              padding:      "3px 9px",
              borderRadius: "100px",
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ── WORK SECTION ──────────────────────────────────────────────────
export default function Work() {
  return (
    <section className="work-section">

      {/* Header */}
      <motion.div
        initial={{ opacity:0, y:24 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        transition={{ duration:0.65, ease:[0.22,1,0.36,1] }}
      >
        <div className="work-tag-pill">Selected Work</div>

        <h2 className="work-h2">
          Products we've helped
          <br />
          <span style={{ color:"#3a3a46" }}>design and build</span>
        </h2>

        <p className="work-sub">
          A selection of digital products and platforms we've crafted
          for startups and modern teams.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="work-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity:0, y:16 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        transition={{ duration:0.6, delay:0.35 }}
        style={{ marginTop:"2.5rem" }}
      >
        <motion.div
          whileHover={{ y:-2 }}
          whileTap={{ scale:0.97 }}
          className="work-cta-wrap"
        >
          <Link href="/projects" className="work-cta-btn">
            View All Projects →
          </Link>
        </motion.div>
      </motion.div>

      <style>{`
        .work-section {
          padding: 5.5rem 3rem;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          box-sizing: border-box;
        }
        .work-tag-pill {
          display: inline-block;
          background: #111114;
          border: 0.5px solid #2c2c36;
          border-radius: 100px;
          padding: 5px 16px;
          font-size: 11px;
          color: #7a7a88;
          letter-spacing: 0.06em;
          margin-bottom: 1.25rem;
        }
        .work-h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 3vw, 2.8rem);
          font-weight: 800;
          letter-spacing: -1px;
          line-height: 1.1;
          color: #f0ece6;
          margin: 0 0 0.75rem;
        }
        .work-sub {
          font-size: 15px;
          color: #7a7a88;
          max-width: 520px;
          line-height: 1.8;
          margin: 0 0 3.5rem;
          font-weight: 300;
        }

        /* Grid */
        .work-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        /* Card body */
        .proj-card-body { padding: 1.5rem; }

        /* CTA */
        .work-cta-wrap { display: inline-block; }
        .work-cta-btn {
          display: inline-block;
          background: transparent;
          color: #f0ece6;
          border: 0.5px solid #2c2c36;
          padding: 12px 26px;
          border-radius: 9px;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          text-decoration: none;
          white-space: nowrap;
          transition: border-color 0.2s, color 0.2s;
        }
        .work-cta-btn:hover { border-color: #e8793a; color: #e8793a; }

        /* ── TABLET (768–1024px): 2 cols ── */
        @media (max-width: 1024px) {
          .work-section  { padding: 4.5rem 2rem; }
          .work-grid     { grid-template-columns: repeat(2, 1fr); gap: 14px; }
          .work-sub      { margin-bottom: 2.5rem; }
        }

        /* ── MOBILE (<768px): 1 col ── */
        @media (max-width: 768px) {
          .work-section  { padding: 3.5rem 1.25rem; }
          .work-h2       { font-size: clamp(1.8rem, 7vw, 2.4rem); }
          .work-sub      { font-size: 14px; max-width: 100%; margin-bottom: 2rem; }
          .work-grid     { grid-template-columns: 1fr; gap: 12px; }
          .work-cta-wrap { width: 100%; }
          .work-cta-btn  {
            display: block;
            text-align: center;
            padding: 14px 26px;
            box-sizing: border-box;
          }
        }

        /* ── SMALL MOBILE (<480px) ── */
        @media (max-width: 480px) {
          .work-section    { padding: 3rem 1rem; }
          .work-h2         { font-size: 1.75rem; letter-spacing: -0.5px; }
          .proj-card-body  { padding: 1.25rem; }
        }
      `}</style>
    </section>
  );
}