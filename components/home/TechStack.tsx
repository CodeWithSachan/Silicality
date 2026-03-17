"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  SiNextdotjs, SiReact, SiTypescript,
  SiNodedotjs, SiTailwindcss, SiSupabase, SiPostgresql,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { IconType } from "react-icons";

// ── TYPES ─────────────────────────────────────────────────────────
interface Technology { name: string; Icon: IconType; color: string; }
interface OrbitItemProps { item: Technology; index: number; total: number; radius: number; duration: number; nodeSize: number; }

// ── DATA ──────────────────────────────────────────────────────────
const TECH_STACK: Technology[] = [
  { name: "Next.js",    Icon: SiNextdotjs,   color: "#f0ece6" },
  { name: "React",      Icon: SiReact,       color: "#61dafb" },
  { name: "TypeScript", Icon: SiTypescript,  color: "#3178c6" },
  { name: "Node.js",    Icon: SiNodedotjs,   color: "#8cc84b" },
  { name: "Tailwind",   Icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Supabase",   Icon: SiSupabase,    color: "#3ecf8e" },
  { name: "PostgreSQL", Icon: SiPostgresql,  color: "#336791" },
  { name: "AWS",        Icon: FaAws,         color: "#ff9900" },
];

// ── RESPONSIVE ORBIT SIZES ────────────────────────────────────────
function getOrbitConfig(width: number) {
  if (width < 480) return { containerSize: 260, radius: 105, centerSize: 70,  nodeSize: 58,  iconSize: 16, fontSize: "8px",  duration: 42 };
  if (width < 640) return { containerSize: 300, radius: 120, centerSize: 76,  nodeSize: 62,  iconSize: 17, fontSize: "9px",  duration: 42 };
  if (width < 768) return { containerSize: 340, radius: 135, centerSize: 82,  nodeSize: 66,  iconSize: 18, fontSize: "9px",  duration: 42 };
  if (width < 1024)return { containerSize: 380, radius: 155, centerSize: 86,  nodeSize: 68,  iconSize: 20, fontSize: "10px", duration: 42 };
  return               { containerSize: 430, radius: 175, centerSize: 92,  nodeSize: 72,  iconSize: 22, fontSize: "10px", duration: 42 };
}

// ── ORBIT ITEM ────────────────────────────────────────────────────
function OrbitItem({ item, index, total, radius, duration, nodeSize }: OrbitItemProps) {
  const angle  = (index / total) * 360;
  const radian = (angle * Math.PI) / 180;
  const x      = Math.cos(radian) * radius;
  const y      = Math.sin(radian) * radius;
  const Icon   = item.Icon;

  return (
    <motion.div
      style={{ x, y }}
      animate={{ rotate: -360 }}
      transition={{ repeat: Infinity, duration, ease: "linear" }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      suppressHydrationWarning
    >
      <div
        style={{
          position:       "absolute",
          transform:      "translate(-50%, -50%)",
          display:        "flex",
          flexDirection:  "column",
          alignItems:     "center",
          gap:            "4px",
          padding:        "10px 12px",
          borderRadius:   "12px",
          background:     "#111114",
          border:         "0.5px solid #1e1e26",
          cursor:         "pointer",
          whiteSpace:     "nowrap",
          transition:     "border-color 0.2s, background 0.2s",
          width:          `${nodeSize}px`,
          boxSizing:      "border-box",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "#e8793a";
          (e.currentTarget as HTMLElement).style.background  = "#16161a";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "#1e1e26";
          (e.currentTarget as HTMLElement).style.background  = "#111114";
        }}
      >
        <Icon style={{ width:"100%", height:"auto", maxWidth:"20px", color: item.color, opacity:0.85 }} />
        <span style={{
          fontSize:     "9px",
          color:        "#7a7a88",
          fontFamily:   "'DM Sans', sans-serif",
          letterSpacing:"0.02em",
          overflow:     "hidden",
          textOverflow: "ellipsis",
          maxWidth:     "100%",
          textAlign:    "center",
        }}>
          {item.name}
        </span>
      </div>
    </motion.div>
  );
}

// ── CENTER NODE ───────────────────────────────────────────────────
function CenterNode({ size }: { size: number }) {
  return (
    <div style={{
      position:       "absolute",
      zIndex:         10,
      width:          `${size}px`,
      height:         `${size}px`,
      borderRadius:   "50%",
      background:     "#111114",
      border:         "0.5px solid #2c2c36",
      display:        "flex",
      alignItems:     "center",
      justifyContent: "center",
      fontFamily:     "'Syne', sans-serif",
      fontSize:       "11px",
      fontWeight:     700,
      color:          "#f0ece6",
      letterSpacing:  "-0.2px",
    }}>
      Silicality
    </div>
  );
}

// ── ORBIT SYSTEM ──────────────────────────────────────────────────
function OrbitSystem({ config }: { config: ReturnType<typeof getOrbitConfig> }) {
  const { containerSize, radius, centerSize, nodeSize, duration } = config;

  return (
    <div style={{
      position:       "relative",
      marginTop:      "2.5rem",
      display:        "flex",
      justifyContent: "center",
      alignItems:     "center",
      height:         `${containerSize + 80}px`,
    }}>
      {/* Orange center glow */}
      <div style={{
        position:     "absolute",
        width:        "100px",
        height:       "100px",
        borderRadius: "50%",
        background:   "rgba(232,121,58,0.08)",
        filter:       "blur(30px)",
        pointerEvents:"none",
      }} />

      {/* Outer dashed ring */}
      <div style={{
        position:     "absolute",
        width:        `${containerSize}px`,
        height:       `${containerSize}px`,
        borderRadius: "50%",
        border:       "0.5px dashed #2c2c36",
        pointerEvents:"none",
      }} />

      {/* Inner dashed ring */}
      <div style={{
        position:     "absolute",
        width:        `${containerSize * 0.48}px`,
        height:       `${containerSize * 0.48}px`,
        borderRadius: "50%",
        border:       "0.5px dashed #1e1e26",
        pointerEvents:"none",
      }} />

      {/* Rotating container */}
      <motion.div
        style={{
          position:       "relative",
          width:          `${containerSize}px`,
          height:         `${containerSize}px`,
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration, ease: "linear" }}
        suppressHydrationWarning
      >
        {TECH_STACK.map((item, index) => (
          <OrbitItem
            key={item.name}
            item={item}
            index={index}
            total={TECH_STACK.length}
            radius={radius}
            duration={duration}
            nodeSize={nodeSize}
          />
        ))}
      </motion.div>

      <CenterNode size={centerSize} />
    </div>
  );
}

// ── PLACEHOLDER ───────────────────────────────────────────────────
function OrbitPlaceholder({ centerSize }: { centerSize: number }) {
  return (
    <div style={{ height:"400px", display:"flex", alignItems:"center", justifyContent:"center" }}>
      <CenterNode size={centerSize} />
    </div>
  );
}

// ── GRID FALLBACK for very small screens ──────────────────────────
function TechGrid() {
  return (
    <div style={{
      display:             "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap:                 "10px",
      marginTop:           "2.5rem",
      padding:             "0 0.5rem",
    }}
    className="tech-grid-fallback"
    >
      {TECH_STACK.map((item) => {
        const Icon = item.Icon;
        return (
          <div key={item.name} style={{
            display:        "flex",
            flexDirection:  "column",
            alignItems:     "center",
            gap:            "6px",
            padding:        "14px 8px",
            background:     "#111114",
            border:         "0.5px solid #1e1e26",
            borderRadius:   "12px",
          }}>
            <Icon style={{ width:"22px", height:"22px", color: item.color, opacity:0.85 }} />
            <span style={{
              fontSize:   "10px",
              color:      "#7a7a88",
              fontFamily: "'DM Sans', sans-serif",
              textAlign:  "center",
            }}>
              {item.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// ── MAIN ──────────────────────────────────────────────────────────
export default function TechStack() {
  const [mounted,    setMounted]    = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const config      = getOrbitConfig(windowWidth);
  const showAsGrid  = windowWidth < 400; // tiny phones get grid instead

  return (
    <section className="tech-section">
      {/* Header */}
      <motion.div
        initial={{ opacity:0, y:24 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        transition={{ duration:0.65, ease:[0.22,1,0.36,1] }}
        suppressHydrationWarning
      >
        <div className="tech-tag-pill">Technology</div>

        <h2 className="tech-h2">
          Technologies we
          <br />
          <span style={{ color:"#3a3a46" }}>build with</span>
        </h2>

        <p className="tech-sub">
          Modern frameworks and infrastructure used to build scalable,
          high-performance digital products.
        </p>
      </motion.div>

      {/* Orbital or grid */}
      {!mounted ? (
        <OrbitPlaceholder centerSize={config.centerSize} />
      ) : showAsGrid ? (
        <TechGrid />
      ) : (
        <OrbitSystem config={config} />
      )}

      <style>{`
        .tech-section {
          padding: 5.5rem 3rem;
          max-width: 1400px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          box-sizing: border-box;
          overflow: hidden;
        }
        .tech-tag-pill {
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
        .tech-h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 3vw, 2.8rem);
          font-weight: 800;
          letter-spacing: -1px;
          line-height: 1.1;
          color: #f0ece6;
          margin: 0 0 0.75rem;
        }
        .tech-sub {
          font-size: 15px;
          color: #7a7a88;
          max-width: 440px;
          line-height: 1.8;
          margin: 0 auto;
          font-weight: 300;
        }

        /* TABLET */
        @media (max-width: 1024px) {
          .tech-section { padding: 4.5rem 2rem; }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .tech-section { padding: 3.5rem 1.25rem; }
          .tech-h2 { font-size: clamp(1.8rem, 7vw, 2.4rem); }
          .tech-sub { font-size: 14px; }
        }

        /* SMALL MOBILE */
        @media (max-width: 480px) {
          .tech-section { padding: 3rem 1rem; }
          .tech-h2 { font-size: 1.75rem; letter-spacing: -0.5px; }
          .tech-grid-fallback {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}