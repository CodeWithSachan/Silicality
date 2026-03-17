// "use client";

// import React from "react";
// import Link from "next/link";
// import { motion, cubicBezier } from "framer-motion";
// import ParticleCanvas from "@/components/ui/ParticleCanvas";

// const cards = [
//   {
//     label: "AI Products",
//     title: "Custom AI systems built for production.",
//     desc:  "Intelligent tools, copilots, and automation — designed for real workflows.",
//     tags:  ["OpenAI", "Gemini", "LangChain"],
//   },
//   {
//     label: "Applications",
//     title: "Cross-platform apps for real-world growth.",
//     desc:  "",
//     tags:  [],
//   },
//   {
//     label: "Websites",
//     title: "High-performance platforms built to scale.",
//     desc:  "",
//     tags:  [],
//   },
// ];

// const ease = cubicBezier(0.22, 1, 0.36, 1);
// const fadeUp = {
//   hidden:  { opacity: 0, y: 24 },
//   visible: (d = 0) => ({ opacity:1, y:0, transition:{ duration:0.6, ease, delay:d } }),
// };
// const cardV = {
//   hidden:  { opacity: 0, y: 20 },
//   visible: (d = 0) => ({ opacity:1, y:0, transition:{ duration:0.55, ease, delay:d } }),
// };

// function HeroCard({ label, title, desc, tags, delay }: {
//   label:string; title:string; desc:string; tags:string[]; delay:number;
// }) {
//   return (
//     <motion.div
//       variants={cardV} initial="hidden" animate="visible" custom={delay}
//       whileHover={{ y:-4, borderColor:"rgba(232,121,58,0.6)" }}
//       transition={{ type:"spring", stiffness:300, damping:24 }}
//       style={{
//         background:"rgba(17,17,20,0.88)", border:"0.5px solid #2c2c36",
//         borderRadius:"16px", padding:"1.25rem", backdropFilter:"blur(10px)",
//       }}
//     >
//       <div style={{ fontSize:"10px", color:"#e8793a", letterSpacing:"0.12em", textTransform:"uppercase", fontWeight:600, marginBottom:"8px" }}>
//         {label}
//       </div>
//       <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"14px", fontWeight:700, color:"#f0ece6", lineHeight:1.35, marginBottom:desc?"6px":0 }}>
//         {title}
//       </div>
//       {desc && <p style={{ fontSize:"13px", color:"#7a7a88", lineHeight:1.65, margin:0 }}>{desc}</p>}
//       {tags.length > 0 && (
//         <div style={{ display:"flex", gap:"6px", marginTop:"12px", flexWrap:"wrap" }}>
//           {tags.map(t => (
//             <span key={t} style={{ fontSize:"11px", background:"#16161a", border:"0.5px solid #1e1e26", color:"#3a3a46", padding:"3px 9px", borderRadius:"100px" }}>
//               {t}
//             </span>
//           ))}
//         </div>
//       )}
//     </motion.div>
//   );
// }

// export default function Hero() {
//   return (
//     <section style={{ position:"relative", overflow:"hidden", background:"#09090b" }}>
//       <ParticleCanvas />

//       <div style={{
//         position:"absolute", right:"8%", top:"10%",
//         width:"500px", height:"500px",
//         background:"radial-gradient(circle, rgba(232,121,58,0.055) 0%, transparent 70%)",
//         borderRadius:"50%", pointerEvents:"none",
//       }} />

//       <div className="hero-grid">
//         {/* LEFT */}
//         <div>
//           <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} className="hero-tag">
//             <span className="hero-tag-dot" />
//             Silicality Labs
//           </motion.div>

//           <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={0.1} className="hero-h1">
//             We build<br />
//             intelligent digital<br />
//             products <span style={{ color:"#e8793a" }}>powered<br className="br-mobile" />by AI.</span>
//           </motion.h1>

//           <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0.2} className="hero-sub">
//             Silicality partners with founders and teams to design, build, and
//             scale high-impact digital platforms — fast and precisely.
//           </motion.p>

//           <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.3} className="hero-btns">
//             <motion.div whileHover={{ y:-2, opacity:0.9 }} whileTap={{ scale:0.97 }}>
//               <Link href="/contact" className="btn-hero-main">Start a Project</Link>
//             </motion.div>
//             <motion.div whileHover={{ y:-2 }} whileTap={{ scale:0.97 }} className="btn-hero-ghost-wrap">
//               <Link href="/services" className="btn-hero-ghost">Explore Services</Link>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* RIGHT */}
//         <div className="hero-cards">
//           <HeroCard {...cards[0]} delay={0.35} />
//           <div className="hero-cards-row">
//             <HeroCard {...cards[1]} delay={0.45} />
//             <HeroCard {...cards[2]} delay={0.55} />
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes heroPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

//         .hero-grid {
//           position: relative;
//           z-index: 2;
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           align-items: center;
//           gap: 4rem;
//           padding: 5rem 3rem;
//           min-height: 94vh;
//           max-width: 1400px;
//           margin: 0 auto;
//           box-sizing: border-box;
//         }
//         .hero-tag {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           background: #111114;
//           border: 0.5px solid #2c2c36;
//           border-radius: 100px;
//           padding: 6px 16px;
//           font-size: 11px;
//           color: #e8793a;
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//           margin-bottom: 1.75rem;
//         }
//         .hero-tag-dot {
//           width: 5px; height: 5px; border-radius: 50%;
//           background: #e8793a; animation: heroPulse 2s infinite;
//           flex-shrink: 0;
//         }
//         .hero-h1 {
//           font-family: 'Syne', sans-serif;
//           font-size: clamp(2.4rem, 4vw, 3.8rem);
//           font-weight: 800;
//           line-height: 1.08;
//           letter-spacing: -2px;
//           color: #f0ece6;
//           margin: 0 0 1.5rem;
//         }
//         .hero-sub {
//           font-size: 15px;
//           color: #7a7a88;
//           line-height: 1.8;
//           max-width: 420px;
//           margin: 0 0 2.5rem;
//           font-weight: 300;
//         }
//         .hero-btns {
//           display: flex;
//           gap: 12px;
//           flex-wrap: wrap;
//           align-items: center;
//         }
//         .btn-hero-main {
//           display: inline-block;
//           background: #e8793a;
//           color: #fff;
//           padding: 13px 28px;
//           border-radius: 9px;
//           font-size: 14px;
//           font-weight: 500;
//           text-decoration: none;
//           font-family: 'DM Sans', sans-serif;
//           white-space: nowrap;
//         }
//         .btn-hero-ghost-wrap {
//           display: inline-block;
//           border: 0.5px solid #2c2c36;
//           border-radius: 9px;
//         }
//         .btn-hero-ghost {
//           display: inline-block;
//           color: #f0ece6;
//           padding: 13px 28px;
//           font-size: 14px;
//           text-decoration: none;
//           font-family: 'DM Sans', sans-serif;
//           white-space: nowrap;
//         }
//         .hero-cards {
//           display: flex;
//           flex-direction: column;
//           gap: 14px;
//         }
//         .hero-cards-row {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 14px;
//         }
//         .br-mobile { display: none; }

//         /* TABLET */
//         @media (max-width: 1024px) {
//           .hero-grid { gap: 2.5rem; padding: 4rem 2rem; min-height: 88vh; }
//           .hero-h1 { font-size: clamp(2rem, 4.5vw, 2.8rem); letter-spacing: -1.5px; }
//         }

//         /* MOBILE */
//         @media (max-width: 768px) {
//           .hero-grid {
//             grid-template-columns: 1fr;
//             padding: 3.5rem 1.25rem 3rem;
//             min-height: auto;
//             gap: 3rem;
//           }
//           .hero-h1 {
//             font-size: clamp(2rem, 8vw, 2.6rem);
//             letter-spacing: -1px;
//             margin-bottom: 1.25rem;
//           }
//           .hero-sub { font-size: 14px; margin-bottom: 2rem; max-width: 100%; }
//           .hero-btns { flex-direction: column; gap: 10px; }
//           .btn-hero-main { width: 100%; text-align: center; padding: 14px 28px; }
//           .btn-hero-ghost-wrap { width: 100%; }
//           .btn-hero-ghost { display: block; text-align: center; padding: 14px 28px; }
//           .br-mobile { display: inline; }
//         }

//         /* SMALL MOBILE */
//         @media (max-width: 480px) {
//           .hero-grid { padding: 3rem 1rem 2.5rem; }
//           .hero-h1 { font-size: 1.9rem; }
//           .hero-cards-row { grid-template-columns: 1fr; }
//         }
//       `}</style>
//     </section>
//   );
// }
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  motion,
  cubicBezier,
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from "framer-motion";
import ParticleCanvas from "@/components/ui/ParticleCanvas";

const cards = [
  {
    title: "AI Products",
    desc: "Custom AI systems built for production.",
    icon: "🤖",
  },
  {
    title: "Applications",
    desc: "Cross-platform apps for real-world growth.",
    icon: "📱",
  },
  {
    title: "Websites",
    desc: "High-performance platforms built to scale.",
    icon: "🌐",
  },
];

const ease = cubicBezier(0.22, 1, 0.36, 1);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease, delay: d },
  }),
};

type OrbitMetrics = {
  containerSize: number;
  radius: number;
  cardWidth: number;
  cardPadding: number;
  particleOffset: number;
  coreSize: number;
  coreInnerSize: number;
  corePulseInset: number;
};

function getOrbitMetrics(viewportWidth: number): OrbitMetrics {
  if (viewportWidth <= 380) {
    return {
      containerSize: 160,
      radius: 66,
      cardWidth: 90,
      cardPadding: 8,
      particleOffset: 16,
      coreSize: 52,
      coreInnerSize: 14,
      corePulseInset: 16,
    };
  }
  if (viewportWidth <= 480) {
    return {
      containerSize: 200,
      radius: 82,
      cardWidth: 100,
      cardPadding: 10,
      particleOffset: 18,
      coreSize: 60,
      coreInnerSize: 16,
      corePulseInset: 18,
    };
  }
  if (viewportWidth <= 640) {
    return {
      containerSize: 240,
      radius: 98,
      cardWidth: 120,
      cardPadding: 12,
      particleOffset: 22,
      coreSize: 70,
      coreInnerSize: 20,
      corePulseInset: 20,
    };
  }
  if (viewportWidth <= 768) {
    return {
      containerSize: 280,
      radius: 116,
      cardWidth: 140,
      cardPadding: 14,
      particleOffset: 24,
      coreSize: 78,
      coreInnerSize: 22,
      corePulseInset: 20,
    };
  }
  if (viewportWidth <= 900) {
    return {
      containerSize: 320,
      radius: 134,
      cardWidth: 150,
      cardPadding: 16,
      particleOffset: 28,
      coreSize: 82,
      coreInnerSize: 24,
      corePulseInset: 20,
    };
  }
  if (viewportWidth <= 1024) {
    return {
      containerSize: 360,
      radius: 152,
      cardWidth: 160,
      cardPadding: 18,
      particleOffset: 32,
      coreSize: 86,
      coreInnerSize: 26,
      corePulseInset: 20,
    };
  }
  return {
    containerSize: 440,
    radius: 190,
    cardWidth: 170,
    cardPadding: 20,
    particleOffset: 40,
    coreSize: 90,
    coreInnerSize: 28,
    corePulseInset: 20,
  };
}

// Particle dot component to handle hooks properly
function OrbitParticle({ index, orbit, radius, particleOffset }: { index: number; orbit: any; radius: number; particleOffset: number }) {
  const angle = (index * 360) / 24;
  const dotX = useTransform(orbit, (o: number) => {
    const a = ((o + angle) * Math.PI) / 180;
    return Math.cos(a) * (radius + particleOffset);
  });
  const dotY = useTransform(orbit, (o: number) => {
    const a = ((o + angle) * Math.PI) / 180;
    return Math.sin(a) * (radius + particleOffset);
  });
  return (
    <motion.div
      className="orbit-particle"
      style={{ x: dotX, y: dotY }}
    />
  );
}

// Card transforms component to handle hooks properly
function CardOrbit({
  card,
  index,
  orbit,
  radius,
  cardWidth,
  cardPadding,
}: {
  card: { title: string; desc: string; icon: string };
  index: number;
  orbit: any;
  radius: number;
  cardWidth: number;
  cardPadding: number;
}) {
  const baseAngle = index * (360 / 3);

  const x = useTransform(orbit, (o: number) => {
    const angle = ((o + baseAngle) * Math.PI) / 180;
    return Math.cos(angle) * radius;
  });

  const y = useTransform(orbit, (o: number) => {
    const angle = ((o + baseAngle) * Math.PI) / 180;
    return Math.sin(angle) * radius;
  });

  return (
    <div className="orbit-card-anchor">
      <motion.div className="orbit-card-wrap" style={{ x, y }}>
        <motion.div
          style={{ width: cardWidth, padding: cardPadding }}
          whileHover={{ scale: 1.05, y: -4, boxShadow: "0 20px 42px rgba(0,0,0,0.45), 0 0 0 1px rgba(232,121,58,0.35)" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="orbit-card"
        >
          <div className="orbit-card-gloss" />
          <div className="orbit-card-icon-wrap">
            <div className="orbit-card-icon">{card.icon}</div>
          </div>
          <h4 className="orbit-card-title">{card.title}</h4>
          <p className="orbit-card-desc">{card.desc}</p>
          <div className="orbit-card-accent" />
        </motion.div>
      </motion.div>
    </div>
  );
}

// Orbital section component
function OrbitalSection({ orbit, rotateX, rotateY, setIsHovering }: any) {
  const [metrics, setMetrics] = useState<OrbitMetrics>(() =>
    getOrbitMetrics(typeof window === "undefined" ? 1280 : window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => setMetrics(getOrbitMetrics(window.innerWidth));
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { containerSize, radius, cardWidth, cardPadding, particleOffset } = metrics;

  return (
    <div className="hero-orbit">
      <motion.div
        className="orbit-container"
        style={{
          width: containerSize,
          height: containerSize,
          rotateX,
          rotateY,
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Outer atmosphere glow */}
        <div className="orbit-atmosphere" />

        {/* Orbit Rings - Multiple layers for depth */}
        <div className="orbit-ring orbit-ring-1" />
        <div className="orbit-ring orbit-ring-2" />
        <div className="orbit-ring orbit-ring-3" />

        {/* Center Core */}
        <div className="orbit-core" style={{ width: metrics.coreSize, height: metrics.coreSize }}>
          <div className="orbit-core-glow" />
          <div className="orbit-core-inner" style={{ width: metrics.coreInnerSize, height: metrics.coreInnerSize }} />
          <div className="orbit-core-pulse" style={{ inset: metrics.corePulseInset }} />
        </div>

        {/* Orbiting Cards */}
        {cards.map((card, i) => (
          <CardOrbit
            key={`card-${i}`}
            card={card}
            index={i}
            orbit={orbit}
            radius={radius}
            cardWidth={cardWidth}
            cardPadding={cardPadding}
          />
        ))}

        {/* Particle dots along orbit */}
        {[...Array(24)].map((_, i) => (
          <OrbitParticle
            key={`dot-${i}`}
            index={i}
            orbit={orbit}
            radius={radius}
            particleOffset={particleOffset}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false);
  const orbit = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  useAnimationFrame((t) => {
    const baseSpeed = isHovering ? 0.008 : 0.02;
    orbit.set((t * baseSpeed) % 360);
    
    // Subtle 3D tilt
    rotateX.set(Math.sin(t * 0.0003) * 8);
    rotateY.set(Math.cos(t * 0.0003) * 8);
  });

  return (
    <section style={{ position: "relative", overflow: "hidden", background: "#09090b", perspective: "1000px" }}>
      <ParticleCanvas />

      {/* Multi-layer gradient background */}
      <div className="hero-gradient-bg" />
      
      {/* Main glow sphere */}
      <div
        style={{
          position: "absolute",
          right: "5%",
          top: "5%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(232,121,58,0.08) 0%, rgba(232,121,58,0.02) 40%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* Accent glow */}
      <div
        style={{
          position: "absolute",
          left: "-10%",
          bottom: "10%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(88,139,255,0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div className="hero-grid">
        {/* LEFT */}
        <div className="hero-left">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="hero-tag"
          >
            <span className="hero-tag-dot" />
            Silicality Labs
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="hero-h1"
          >
            We build
            <br />
            intelligent digital
            <br />
            products{" "}
            <span style={{ color: "#e8793a" }}>
              powered
              <br className="br-mobile" />
              by AI.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="hero-sub"
          >
            Silicality partners with founders and teams to design, build,
            and scale high-impact digital platforms — fast and precisely.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="hero-btns"
          >
            <motion.div whileHover={{ y: -2, boxShadow: "0 8px 32px rgba(232,121,58,0.3)" }}>
              <Link href="/contact" className="btn-hero-main">
                Start a Project
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2, borderColor: "#e8793a" }} className="btn-hero-ghost-wrap">
              <Link href="/services" className="btn-hero-ghost">
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT ORBITAL SECTION */}
        <OrbitalSection
          orbit={orbit}
          rotateX={rotateX}
          rotateY={rotateY}
          setIsHovering={setIsHovering}
        />
      </div>

      <style>{`
        @keyframes heroPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes glow { 0%, 100%{ box-shadow: 0 0 30px rgba(232,121,58,.7), 0 0 60px rgba(232,121,58,.3); } 50%{ box-shadow: 0 0 40px rgba(232,121,58,1), 0 0 80px rgba(232,121,58,.5); } }
        @keyframes orbit-glow { 0%, 100%{ opacity: 0.3; } 50%{ opacity: 0.6; } }
        @keyframes pulse-ring { 0%{ transform: scale(1); opacity: 1; } 100%{ transform: scale(1.3); opacity: 0; } }
        @keyframes float-particle { 0%, 100%{ opacity: 0.3; transform: scale(1); } 50%{ opacity: 1; transform: scale(1.2); } }

        .hero-gradient-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(232, 121, 58, 0.03) 0%,
            transparent 50%,
            rgba(88, 139, 255, 0.02) 100%
          );
          pointer-events: none;
        }

        .hero-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 4rem;
          padding: 5rem 3rem;
          min-height: 94vh;
          max-width: 1400px;
          margin: 0 auto;
          box-sizing: border-box;
          width: 100%;
        }

        .hero-left {
          display: flex;
          flex-direction: column;
          min-width: 0;
          padding-top: 0.25rem;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #111114;
          border: 0.5px solid #2c2c36;
          border-radius: 100px;
          padding: 6px 16px;
          font-size: 11px;
          color: #e8793a;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1.75rem;
          transition: all 0.3s ease;
        }

        .hero-tag:hover {
          border-color: #e8793a;
          background: rgba(232, 121, 58, 0.05);
        }

        .hero-tag-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #e8793a;
          animation: heroPulse 2s infinite;
          flex-shrink: 0;
        }

        .hero-h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.4rem, 4vw, 3.8rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -2px;
          color: #f0ece6;
          margin: 0 0 1.5rem;
        }

        .hero-sub {
          font-size: 15px;
          color: #7a7a88;
          line-height: 1.8;
          max-width: 420px;
          margin: 0 0 2.5rem;
          font-weight: 300;
          transition: color 0.3s ease;
          min-width: 0;
        }

        .hero-btns {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
        }

        .btn-hero-main {
          display: inline-block;
          background: linear-gradient(135deg, #e8793a 0%, #d65a1a 100%);
          color: #fff;
          padding: 13px 28px;
          border-radius: 9px;
          font-size: 14px;
          text-decoration: none;
          font-weight: 600;
          border: 1px solid rgba(232, 121, 58, 0.5);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-hero-main::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          transition: left 0.3s ease;
        }

        .btn-hero-main:hover::before {
          left: 100%;
        }

        .btn-hero-ghost-wrap {
          border: 0.5px solid #2c2c36;
          border-radius: 9px;
          transition: all 0.3s ease;
        }

        .btn-hero-ghost-wrap:hover {
          background: rgba(232, 121, 58, 0.05);
        }

        .btn-hero-ghost {
          display: inline-block;
          color: #f0ece6;
          padding: 13px 28px;
          font-size: 14px;
          text-decoration: none;
          font-weight: 600;
        }

        /* ORBIT SECTION */

        .hero-orbit {
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1200px;
          width: 100%;
          min-height: 360px;
        }

        .orbit-container {
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.05s linear;
        }

        .orbit-atmosphere {
          position: absolute;
          inset: -30px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(232, 121, 58, 0.08) 0%,
            rgba(232, 121, 58, 0.02) 50%,
            transparent 100%
          );
          animation: orbit-glow 4s ease-in-out infinite;
        }

        .orbit-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1.5px solid #1f1f28;
          opacity: 0.6;
          transition: all 0.3s ease;
        }

        .orbit-ring-1 {
          transform: scale(1);
        }

        .orbit-ring-2 {
          transform: scale(0.7);
          border-color: #2c2c36;
          opacity: 0.4;
        }

        .orbit-ring-3 {
          transform: scale(0.4);
          border-color: #e8793a;
          opacity: 0.2;
          box-shadow: inset 0 0 20px rgba(232, 121, 58, 0.2);
        }

        .orbit-container:hover .orbit-ring {
          opacity: 1;
          border-color: rgba(232, 121, 58, 0.8);
        }

        .orbit-core {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90px;
          height: 90px;
          border-radius: 50%;
          border: 1px solid #2c2c36;
          background: radial-gradient(circle at 35% 35%, rgba(232, 121, 58, 0.1), #0f0f12);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 40px rgba(232, 121, 58, 0.15);
          overflow: hidden;
        }

        .orbit-core-glow {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(232, 121, 58, 0.3), transparent);
          animation: orbit-glow 3s ease-in-out infinite;
        }

        .orbit-core-inner {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #e8793a;
          animation: glow 3s ease-in-out infinite;
          position: relative;
          z-index: 2;
        }

        .orbit-core-pulse {
          position: absolute;
          inset: 20px;
          border-radius: 50%;
          border: 2px solid #e8793a;
          animation: pulse-ring 2s ease-out infinite;
        }

        .orbit-card-anchor {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .orbit-card-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .orbit-card {
          width: 170px;
          padding: 20px;
          background:
            linear-gradient(165deg, rgba(20, 22, 30, 0.86) 0%, rgba(14, 15, 22, 0.82) 100%);
          border: 1px solid rgba(73, 78, 105, 0.42);
          border-radius: 16px;
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          box-shadow:
            0 18px 34px rgba(0, 0, 0, 0.36),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
          transform-style: preserve-3d;
        }

        .orbit-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          border: 1px solid rgba(255, 255, 255, 0.06);
          pointer-events: none;
        }

        .orbit-card-gloss {
          position: absolute;
          top: -50%;
          right: -40%;
          width: 150px;
          height: 110px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          transform: rotate(-14deg);
          pointer-events: none;
          opacity: 0.7;
        }

        .orbit-card-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
          background: linear-gradient(145deg, rgba(30, 35, 52, 0.95), rgba(17, 20, 33, 0.9));
          border: 1px solid rgba(116, 128, 174, 0.35);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.07);
          position: relative;
          z-index: 1;
        }

        .orbit-card-icon {
          font-size: 20px;
          display: block;
          line-height: 1;
        }

        .orbit-card-title {
          margin: 0 0 6px;
          font-size: 17px;
          color: #f5f6fc;
          letter-spacing: -0.02em;
          font-weight: 700;
          position: relative;
          z-index: 1;
        }

        .orbit-card-desc {
          margin: 0;
          font-size: 13px;
          color: #9ea5ba;
          line-height: 1.55;
          position: relative;
          z-index: 1;
        }

        .orbit-card-accent {
          position: absolute;
          bottom: 0;
          left: 10px;
          width: calc(100% - 20px);
          height: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, rgba(232, 121, 58, 0.85), rgba(241, 172, 120, 0.35), transparent);
          opacity: 0.18;
          transition: opacity 0.35s ease;
        }

        .orbit-card:hover .orbit-card-accent {
          opacity: 0.9;
        }

        .orbit-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #e8793a;
          box-shadow: 0 0 8px rgba(232, 121, 58, 0.6);
          animation: float-particle 3s ease-in-out infinite;
          top: 50%;
          left: 50%;
        }

        /* RESPONSIVE DESIGN */

        @media (max-width: 1024px) {
          .hero-grid {
            gap: 3rem;
            padding: 4rem 2rem;
            min-height: 88vh;
          }

          .hero-h1 {
            font-size: clamp(2rem, 4.5vw, 2.8rem);
            letter-spacing: -1.5px;
          }
        }

        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            padding: 3.5rem 1.5rem;
            min-height: auto;
          }

          .hero-left {
            width: 100%;
            padding-top: 0.35rem;
          }

          .hero-orbit {
            width: 100%;
            justify-content: center;
            min-height: 320px;
          }
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            padding: 3.5rem 1.25rem 2.5rem;
            gap: 2.4rem;
            min-height: auto;
            max-width: 100%;
          }

          .hero-tag {
            margin-bottom: 1.5rem;
          }

          .hero-h1 {
            font-size: clamp(1.8rem, 7vw, 2.4rem);
            letter-spacing: -1px;
            line-height: 1.14;
            margin-bottom: 1.25rem;
          }

          .hero-sub {
            font-size: 14px;
            line-height: 1.72;
            margin-bottom: 1.75rem;
          }

          .hero-btns {
            gap: 10px;
            flex-direction: column;
            width: 100%;
          }

          .btn-hero-main,
          .btn-hero-ghost-wrap,
          .btn-hero-ghost {
            width: 100%;
            padding: 12px 24px;
            font-size: 13px;
            text-align: center;
          }

          .orbit-ring {
            border-width: 1px;
          }

          .orbit-card h4 {
            font-size: 13px;
            margin-bottom: 4px;
          }

          .orbit-card-desc {
            font-size: 11px;
          }

          .orbit-card-title {
            font-size: 14px;
          }

          .orbit-card-icon-wrap {
            width: 34px;
            height: 34px;
            margin-bottom: 8px;
          }

          .orbit-card-icon {
            font-size: 17px;
          }

          .br-mobile {
            display: inline;
          }
        }

        @media (max-width: 640px) {
          .hero-grid {
            padding: 3rem 1rem 2.25rem;
            gap: 1.9rem;
          }

          .hero-left {
            padding-top: 0.4rem;
          }

          .hero-tag {
            font-size: 10px;
            padding: 5px 12px;
            margin-bottom: 1.35rem;
          }

          .hero-h1 {
            font-size: clamp(1.6rem, 6vw, 2.2rem);
            line-height: 1.14;
            margin-bottom: 1.1rem;
          }

          .hero-sub {
            font-size: 13px;
            line-height: 1.68;
            margin-bottom: 1.5rem;
            max-width: 100%;
          }

          .hero-btns {
            gap: 8px;
            flex-direction: column;
          }

          .hero-orbit {
            min-height: 280px;
          }

          .btn-hero-main,
          .btn-hero-ghost-wrap,
          .btn-hero-ghost {
            width: 100%;
            padding: 12px 20px;
            text-align: center;
            font-size: 13px;
          }

          .orbit-core {
            width: 70px;
            height: 70px;
          }

          .orbit-core-inner {
            width: 20px;
            height: 20px;
          }

          .orbit-card-title {
            font-size: 12px;
          }

          .orbit-card-desc {
            font-size: 10px;
            line-height: 1.5;
          }

          .orbit-card-icon-wrap {
            width: 30px;
            height: 30px;
            margin-bottom: 7px;
          }

          .orbit-card-icon {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .hero-grid {
            padding: 2.75rem 0.875rem 2rem;
            gap: 1.5rem;
            min-height: auto;
          }

          .hero-left {
            padding-top: 0.35rem;
          }

          .hero-tag {
            margin-bottom: 1.2rem;
          }

          .hero-h1 {
            font-size: clamp(1.4rem, 5.5vw, 1.95rem);
            line-height: 1.15;
            margin-bottom: 1rem;
          }

          .hero-sub {
            font-size: 12px;
            line-height: 1.65;
            margin-bottom: 1.35rem;
          }

          .hero-btns {
            gap: 6px;
            width: 100%;
          }

          .hero-orbit {
            min-height: 240px;
          }

          .btn-hero-main,
          .btn-hero-ghost-wrap,
          .btn-hero-ghost {
            padding: 11px 18px;
            font-size: 12px;
            width: 100%;
          }

          .orbit-core {
            width: 60px;
            height: 60px;
            border-width: 0.5px;
          }

          .orbit-core-inner {
            width: 16px;
            height: 16px;
          }

          .orbit-card-title {
            font-size: 11px;
            margin-bottom: 3px;
          }

          .orbit-card-desc {
            font-size: 9px;
          }

          .orbit-card-icon-wrap {
            width: 28px;
            height: 28px;
            margin-bottom: 6px;
          }

          .orbit-card-icon {
            font-size: 14px;
          }
        }

        @media (max-width: 380px) {
          .hero-grid {
            padding: 2.4rem 0.75rem 1.75rem;
          }

          .hero-h1 {
            font-size: clamp(1.3rem, 5vw, 1.8rem);
            margin-bottom: 0.6rem;
          }

          .hero-tag {
            font-size: 9px;
            padding: 4px 10px;
            margin-bottom: 1rem;
          }

          .hero-orbit {
            min-height: 210px;
          }
        }
      `}</style>
    </section>
  );
}