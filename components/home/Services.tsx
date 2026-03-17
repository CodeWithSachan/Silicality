"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title:       "AI Systems",
    label:       "AI",
    accentColor: "#6fa3ef",
    desc:        "Custom AI integrated into real products and workflows — designed for reliability, usability, and measurable impact.",
    points: [
      "AI assistants & copilots",
      "AI integrations & APIs",
      "Automation systems & internal tools",
    ],
  },
  {
    title:       "Web Platforms",
    label:       "BUILD",
    accentColor: "#e8793a",
    desc:        "Scalable web platforms engineered for performance, maintainability, and long-term growth.",
    points: [
      "Startup MVP platforms",
      "Dashboards & SaaS products",
      "High-performance web applications",
    ],
    featured: true,
  },
  {
    title:       "Product Design",
    label:       "DESIGN",
    accentColor: "#b78bfa",
    desc:        "Clear product interfaces and visual systems built to support usability, clarity, and strong product communication.",
    points: [
      "UI/UX design systems",
      "Brand identity & product visuals",
      "Pitch decks & launch assets",
      "Video editing & motion graphics",
    ],
  },
];

// ── SERVICE CARD ─────────────────────────────────────────────────
function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-40, 40], [4, -4]);
  const rotateY = useTransform(x, [-40, 40], [-4, 4]);

  function handleMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width  / 2);
    y.set(e.clientY - rect.top  - rect.height / 2);
  }
  function handleLeave() { x.set(0); y.set(0); }

  return (
    <motion.article
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      whileHover={{ borderColor: "rgba(232,121,58,0.35)", background: "#0f0f12" }}
      style={{
        rotateX,
        rotateY,
        transformStyle:  "preserve-3d",
        position:        "relative",
        background:      "#09090b",
        border:          "0.5px solid #1e1e26",
        borderRadius:    "18px",
        padding:         "2.25rem",
        overflow:        "hidden",
        transition:      "border-color 0.25s, background 0.25s",
        cursor:          "default",
        boxSizing:       "border-box",
      }}
      className={service.featured ? "svc-card svc-featured" : "svc-card"}
    >
      {/* Colored left spine */}
      <motion.div
        style={{
          position:     "absolute",
          top:          0,
          left:         0,
          width:        "3px",
          height:       "0%",
          background:   service.accentColor,
          borderRadius: "18px 0 0 18px",
        }}
        whileHover={{ height: "100%" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      {/* Ambient blob */}
      <div style={{
        position:     "absolute",
        top:          "-40px",
        right:        "-40px",
        width:        "120px",
        height:       "120px",
        borderRadius: "50%",
        background:   service.accentColor,
        opacity:      0.05,
        filter:       "blur(40px)",
        pointerEvents:"none",
      }} />

      {/* Label */}
      <div style={{
        fontSize:      "11px",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        fontWeight:    600,
        color:         service.accentColor,
        marginBottom:  "1rem",
      }}>
        {service.label}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily:   "'Syne', sans-serif",
        fontSize:     "22px",
        fontWeight:   700,
        color:        "#f0ece6",
        marginBottom: "0.75rem",
        letterSpacing:"-0.3px",
      }}>
        {service.title}
      </h3>

      {/* Desc */}
      <p style={{
        fontSize:     "14px",
        color:        "#7a7a88",
        lineHeight:   1.75,
        marginBottom: "1.75rem",
      }}>
        {service.desc}
      </p>

      {/* Divider */}
      <div style={{ borderTop:"0.5px solid #1e1e26", marginBottom:"1.25rem" }} />

      {/* Points */}
      <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:"9px", padding:0, margin:0 }}>
        {service.points.map((point) => (
          <li key={point} style={{
            fontSize:   "13px",
            color:      "#3a3a46",
            display:    "flex",
            alignItems: "center",
            gap:        "10px",
          }}>
            <span style={{ color:"#2c2c36", flexShrink:0 }}>—</span>
            {point}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

// ── SERVICES SECTION ─────────────────────────────────────────────
export default function Services() {
  return (
    <section className="services-section">

      {/* Header */}
      <motion.div
        initial={{ opacity:0, y:24 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        transition={{ duration:0.65, ease:[0.22,1,0.36,1] }}
      >
        <div className="sec-tag-pill">Services</div>

        <h2 className="services-h2">
          Services built for
          <br />
          <span style={{ color:"#3a3a46" }}>real-world products</span>
        </h2>

        <p className="services-sub">
          We help founders and teams turn ideas into production-ready digital
          products — combining AI systems, engineering, and product design.
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="services-grid">
        {services.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity:0, y:16 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        transition={{ duration:0.6, delay:0.3 }}
        style={{ marginTop:"2.5rem" }}
      >
        <motion.div
          whileHover={{ y:-2, opacity:0.9 }}
          whileTap={{ scale:0.97 }}
          style={{ display:"inline-block" }}
        >
          <Link href="/contact" className="services-cta-btn">
            Start a Project →
          </Link>
        </motion.div>
      </motion.div>

      <style>{`
        .services-section {
          padding: 5.5rem 3rem;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          box-sizing: border-box;
        }
        .sec-tag-pill {
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
        .services-h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 3vw, 2.8rem);
          font-weight: 800;
          letter-spacing: -1px;
          line-height: 1.1;
          color: #f0ece6;
          margin: 0 0 0.75rem;
        }
        .services-sub {
          font-size: 15px;
          color: #7a7a88;
          max-width: 520px;
          line-height: 1.8;
          margin: 0 0 4rem;
          font-weight: 300;
        }
        .services-cta-btn {
          display: inline-block;
          background: #f0ece6;
          color: #09090b;
          padding: 13px 28px;
          border-radius: 9px;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          white-space: nowrap;
        }

        /* ── DESKTOP: 3 col with featured offset ── */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          align-items: start;
        }
        .svc-featured { margin-top: -2.5rem; }

        /* ── TABLET (768–1024px): 2 col, no offset ── */
        @media (max-width: 1024px) {
          .services-section { padding: 4.5rem 2rem; }
          .services-sub { margin-bottom: 3rem; }
          .services-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
          .svc-featured { margin-top: 0; }
        }

        /* ── MOBILE (<768px): 1 col ── */
        @media (max-width: 768px) {
          .services-section { padding: 3.5rem 1.25rem; }
          .services-h2 { font-size: clamp(1.8rem, 7vw, 2.4rem); }
          .services-sub { font-size: 14px; max-width: 100%; margin-bottom: 2.5rem; }
          .services-grid { grid-template-columns: 1fr; gap: 12px; }
          .svc-featured { margin-top: 0; }
          .svc-card { padding: 1.75rem; }
          .services-cta-btn { width: 100%; text-align: center; display: block; padding: 14px 28px; box-sizing: border-box; }
        }

        /* ── SMALL MOBILE (<480px) ── */
        @media (max-width: 480px) {
          .services-section { padding: 3rem 1rem; }
          .services-h2 { font-size: 1.75rem; letter-spacing: -0.5px; }
          .svc-card { padding: 1.5rem; border-radius: 14px; }
        }
      `}</style>
    </section>
  );
}