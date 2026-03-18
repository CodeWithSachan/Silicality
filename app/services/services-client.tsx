"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const services = [
  {
    label:  "AI",
    accent: "#6fa3ef",
    title:  "AI Systems & Automation",
    desc:   "Custom AI systems designed to automate workflows, enhance products, and deliver measurable operational impact.",
    items:  ["AI assistants & copilots", "Workflow automation", "AI integrations & APIs"],
  },
  {
    label:  "BUILD",
    accent: "#e8793a",
    title:  "Web Platforms",
    desc:   "Scalable web platforms and applications built for performance, reliability, and long-term growth.",
    items:  ["Custom web applications", "Dashboards & SaaS platforms", "Startup MVP development"],
    featured: true,
  },
  {
    label:  "DESIGN",
    accent: "#b78bfa",
    title:  "Product Design & Branding",
    desc:   "Clear product design and brand systems that create consistency, trust, and strong user experiences.",
    items:  ["UI/UX design systems", "Brand identity & visuals", "Product & pitch deck design"],
  },
  {
    label:  "CONTENT",
    accent: "#5ec97e",
    title:  "Content & Social Strategy",
    desc:   "Strategic content and social media systems that help brands communicate clearly and grow their audience.",
    items:  ["Content strategy & planning", "Social media management", "Analytics & growth insights"],
  },
  {
    label:  "CREATIVE",
    accent: "#e8793a",
    title:  "Creative Production",
    desc:   "High-quality visual and video content crafted for product launches, marketing, and brand storytelling.",
    items:  ["Product & promotional videos", "Short-form & reels editing", "Brand visual content"],
  },
];

const steps = [
  { n:"01", title:"Understand goals & constraints", desc:"We start with a discovery call to understand your business, users, and what success looks like." },
  { n:"02", title:"Define scope & timeline",        desc:"We scope the project, agree on deliverables, and set a realistic timeline before writing a line of code." },
  { n:"03", title:"Build with continuous feedback", desc:"Daily updates, weekly demos. You're never out of the loop — the product evolves with your input." },
  { n:"04", title:"Deliver, iterate, and support",  desc:"Full handover with documentation, deployment setup, and 30 days of post-launch support." },
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4, borderColor: "rgba(232,121,58,0.3)" }}
      className="svc-card"
    >
      <motion.div
        className="svc-card-spine"
        style={{ background: service.accent }}
        whileHover={{ height: "100%" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />
      <div className="svc-card-blob" style={{ background: service.accent }} />

      <div className="svc-card-label" style={{ color: service.accent }}>
        {service.label}
      </div>
      <h3 className="svc-card-title">{service.title}</h3>
      <p className="svc-card-desc">{service.desc}</p>
      <div className="svc-card-divider" />
      <ul className="svc-card-list">
        {service.items.map((item) => (
          <li key={item} className="svc-card-item">
            <span className="svc-card-dash">—</span>{item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function ServicesClient() {
  return (
    <>
      <style>{`
        /* ── ROOT ── */
        .svc-root {
          position: relative;
          background: #09090b;
          color: #f0ece6;
          overflow-x: hidden;
          width: 100%;
          max-width: 100%;
        }

        /* ── WATERMARK ── */
        .svc-wm-outer {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 240px;
          overflow: hidden;
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }
        .svc-wm-inner {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          white-space: nowrap;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          color: rgba(255,255,255,0.03);
          letter-spacing: -3px;
          line-height: 1;
          font-size: 12rem;
        }

        /* ── INNER ── */
        .svc-inner { max-width: 1400px; margin: 0 auto; position: relative; z-index: 1; }

        /* ── HEADER ── */
        .svc-header { padding: 5.5rem 3rem 0; box-sizing: border-box; }
        .svc-pill {
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
        .svc-h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 5vw, 3.8rem);
          font-weight: 800;
          letter-spacing: -2px;
          line-height: 1.05;
          color: #f0ece6;
          margin: 0 0 1rem;
        }
        .svc-lead {
          font-size: 15px;
          color: #7a7a88;
          max-width: 520px;
          line-height: 1.8;
          font-weight: 300;
          margin: 0 0 3rem;
        }

        /* ── GRID ── */
        .svc-grid-wrap { padding: 3rem 3rem 0; box-sizing: border-box; }
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        /* ── SERVICE CARD ── */
        .svc-card {
          position: relative;
          background: #09090b;
          border: 0.5px solid #1e1e26;
          border-radius: 18px;
          padding: 2rem;
          overflow: hidden;
          transition: border-color 0.25s, transform 0.25s;
          box-sizing: border-box;
        }
        .svc-card-spine {
          position: absolute;
          top: 0; left: 0;
          width: 3px;
          height: 0%;
          border-radius: 18px 0 0 18px;
        }
        .svc-card-blob {
          position: absolute;
          top: -40px; right: -40px;
          width: 120px; height: 120px;
          border-radius: 50%;
          opacity: 0.05;
          filter: blur(40px);
          pointer-events: none;
        }
        .svc-card-label {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 600;
          margin-bottom: 0.875rem;
          font-family: 'DM Sans', sans-serif;
        }
        .svc-card-title {
          font-family: 'Syne', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #f0ece6;
          margin: 0 0 0.75rem;
          letter-spacing: -0.3px;
          line-height: 1.2;
        }
        .svc-card-desc {
          font-size: 13px;
          color: #7a7a88;
          line-height: 1.75;
          margin: 0 0 1.5rem;
        }
        .svc-card-divider {
          border-top: 0.5px solid #1e1e26;
          margin-bottom: 1.1rem;
        }
        .svc-card-list {
          list-style: none;
          padding: 0; margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .svc-card-item {
          font-size: 13px;
          color: #3a3a46;
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'DM Sans', sans-serif;
        }
        .svc-card-dash { color: #2c2c36; flex-shrink: 0; }

        /* ── HOW WE WORK ── */
        .svc-how-outer {
          border-top: 0.5px solid #1e1e26;
          border-bottom: 0.5px solid #1e1e26;
          background: #111114;
          margin-top: 5rem;
        }
        .svc-how {
          padding: 5rem 3rem;
          box-sizing: border-box;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
          max-width: 1400px;
          margin: 0 auto;
        }
        .svc-h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.6rem, 3vw, 2.6rem);
          font-weight: 800;
          letter-spacing: -1px;
          color: #f0ece6;
          margin: 0 0 0.75rem;
          line-height: 1.1;
        }

        /* ── CTA ── */
        .svc-cta-wrap { max-width: 1400px; margin: 0 auto; }
        .svc-cta {
          padding: 6rem 3rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }
        .svc-cta-h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.8rem, 4vw, 3.2rem);
          font-weight: 800;
          letter-spacing: -1.5px;
          color: #f0ece6;
          margin-bottom: 1rem;
          position: relative;
          line-height: 1.1;
        }
        .svc-cta-btns {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          position: relative;
        }
        .btn-svc-main {
          display: inline-block;
          background: #f0ece6;
          color: #09090b;
          padding: 14px 32px;
          border-radius: 10px;
          font-size: 15px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          text-decoration: none;
          white-space: nowrap;
          transition: opacity 0.2s;
          box-sizing: border-box;
        }
        .btn-svc-main:hover { opacity: 0.88; }
        .btn-svc-ghost {
          display: inline-block;
          background: transparent;
          color: #f0ece6;
          border: 0.5px solid #2c2c36;
          padding: 14px 32px;
          border-radius: 10px;
          font-size: 15px;
          font-family: 'DM Sans', sans-serif;
          text-decoration: none;
          white-space: nowrap;
          transition: border-color 0.2s, color 0.2s;
          box-sizing: border-box;
        }
        .btn-svc-ghost:hover { border-color: #e8793a; color: #e8793a; }

        /* ════════════════════════
           RESPONSIVE BREAKPOINTS
        ════════════════════════ */

        /* Large tablet */
        @media (max-width: 1024px) {
          .svc-header    { padding: 4.5rem 2rem 0; }
          .svc-grid-wrap { padding: 2.5rem 2rem 0; }
          .svc-grid      { grid-template-columns: repeat(2, 1fr); }
          .svc-how       { padding: 4rem 2rem; gap: 3rem; }
          .svc-cta       { padding: 5rem 2rem; }
          .svc-wm-inner  { font-size: 8rem; }
        }

        /* Tablet */
        @media (max-width: 900px) {
          .svc-wm-inner  { font-size: 6rem; letter-spacing: -2px; }
          .svc-how       { grid-template-columns: 1fr; gap: 2.5rem; }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .svc-wm-inner  { font-size: 4.5rem; letter-spacing: -1px; }
          .svc-header    { padding: 3.5rem 1.25rem 0; }
          .svc-grid-wrap { padding: 2rem 1.25rem 0; }
          .svc-grid      { grid-template-columns: 1fr; gap: 12px; }
          .svc-how       { padding: 3.5rem 1.25rem; gap: 2rem; }
          .svc-cta       { padding: 4rem 1.25rem; }
          .svc-cta-btns  { flex-direction: column; align-items: stretch; }
          .btn-svc-main,
          .btn-svc-ghost { text-align: center; width: 100%; padding: 14px 24px; }
          .svc-card      { padding: 1.5rem; }
          .svc-card-title { font-size: 16px; }
          .svc-how-outer  { margin-top: 3rem; }
        }

        /* Small mobile */
        @media (max-width: 540px) {
          .svc-wm-inner  { font-size: 3rem; letter-spacing: -0.5px; }
          .svc-h1        { letter-spacing: -1px; }
          .svc-lead      { font-size: 14px; max-width: 100%; }
        }

        /* Very small mobile */
        @media (max-width: 400px) {
          .svc-wm-inner  { font-size: 2.4rem; letter-spacing: 0; }
          .svc-header    { padding: 3rem 1rem 0; }
          .svc-grid-wrap { padding: 1.5rem 1rem 0; }
          .svc-how       { padding: 3rem 1rem; }
          .svc-cta       { padding: 3.5rem 1rem; }
          .svc-card      { padding: 1.25rem; border-radius: 14px; }
          .svc-card-title { font-size: 15px; }
          .svc-card-desc  { font-size: 12px; }
        }

        /* Tiny screens */
        @media (max-width: 320px) {
          .svc-wm-inner { font-size: 1.9rem; letter-spacing: 0; }
        }
      `}</style>

      <section className="svc-root">

        {/* WATERMARK */}
        <div className="svc-wm-outer">
          <span className="svc-wm-inner">SILICALITY</span>
        </div>

        <div className="svc-inner">

          {/* HEADER */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="svc-header"
          >
            <motion.div variants={fadeUp}>
              <div className="svc-pill">Services</div>
            </motion.div>
            <motion.h1 variants={fadeUp} className="svc-h1">
              Our Services
            </motion.h1>
            <motion.p variants={fadeUp} className="svc-lead">
              Practical AI, technology, and design solutions for startups,
              creators, and organisations — focused on real outcomes.
            </motion.p>
          </motion.div>

          {/* SERVICE CARDS GRID */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="svc-grid-wrap"
          >
            <div className="svc-grid">
              {services.map((s) => (
                <ServiceCard key={s.title} service={s} />
              ))}
            </div>
          </motion.div>

        </div>

        {/* HOW WE WORK */}
        <div className="svc-how-outer">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="svc-how"
          >
            <div>
              <motion.div variants={fadeUp}>
                <div className="svc-pill" style={{ marginBottom:"1.25rem" }}>Process</div>
              </motion.div>
              <motion.h2 variants={fadeUp} className="svc-h2">
                How We Work
              </motion.h2>
              <motion.p
                variants={fadeUp}
                style={{ fontSize:"15px", color:"#7a7a88", fontWeight:300, lineHeight:1.7, maxWidth:"360px" }}
              >
                Transparent. Structured. Collaborative.
              </motion.p>
            </div>

            <div>
              {steps.map((step, i) => (
                <motion.div
                  key={step.n}
                  variants={fadeUp}
                  style={{
                    display:      "flex",
                    gap:          "16px",
                    alignItems:   "flex-start",
                    padding:      "1.25rem 0",
                    borderBottom: i < steps.length - 1 ? "0.5px solid #1e1e26" : "none",
                  }}
                >
                  <div style={{
                    fontFamily:  "'Syne', sans-serif",
                    fontSize:    "11px",
                    fontWeight:  700,
                    color:       "#e8793a",
                    width:       "28px",
                    flexShrink:  0,
                    paddingTop:  "2px",
                  }}>
                    {step.n}
                  </div>
                  <div>
                    <div style={{ fontSize:"14px", fontWeight:500, color:"#f0ece6", marginBottom:"4px", fontFamily:"'DM Sans',sans-serif" }}>
                      {step.title}
                    </div>
                    <div style={{ fontSize:"13px", color:"#7a7a88", lineHeight:1.65, fontFamily:"'DM Sans',sans-serif" }}>
                      {step.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="svc-cta-wrap">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="svc-cta"
          >
            <div style={{
              position:     "absolute",
              inset:        0,
              background:   "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(232,121,58,0.06), transparent)",
              pointerEvents:"none",
            }} />
            <h2 className="svc-cta-h2">
              Let's build something
              <br />
              <span style={{ color:"#3a3a46" }}>together.</span>
            </h2>
            <p style={{
              fontSize:   "15px",
              color:      "#7a7a88",
              margin:     "0 auto 2.5rem",
              maxWidth:   "440px",
              lineHeight: 1.8,
              fontWeight: 300,
              position:   "relative",
            }}>
              Have an idea or project in mind? Tell us what you're building
              and we'll get back to you within 24 hours.
            </p>
            <div className="svc-cta-btns">
              <Link href="/contact" className="btn-svc-main">
                Start a Project →
              </Link>
              <Link href="/tools/product-architect" className="btn-svc-ghost">
                Try AI Architect
              </Link>
            </div>
          </motion.div>
        </div>

      </section>
    </>
  );
}