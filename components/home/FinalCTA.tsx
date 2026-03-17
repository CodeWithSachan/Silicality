"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="cta-section">
      {/* Orange ambient glow */}
      <div aria-hidden style={{
        position:"absolute", inset:0,
        background:"radial-gradient(ellipse 60% 50% at 50% 50%, rgba(232,121,58,0.06), transparent)",
        pointerEvents:"none",
      }} />

      <div style={{ position:"relative", zIndex:2, maxWidth:"760px", margin:"0 auto" }}>

        {/* Headline */}
        <motion.h2
          initial={{ opacity:0, y:28 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.7, ease:[0.22,1,0.36,1] }}
          className="cta-h2"
        >
          Let's build something
          <br />
          <span style={{ color:"#3a3a46" }}>meaningful together.</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ delay:0.15, duration:0.65, ease:[0.22,1,0.36,1] }}
          className="cta-sub"
        >
          Building a product, exploring collaboration, or looking for
          a technical partner — we're always open to thoughtful conversations.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ delay:0.25, duration:0.65, ease:[0.22,1,0.36,1] }}
          className="cta-btns"
        >
          <motion.div
            whileHover={{ y:-2, opacity:0.9 }}
            whileTap={{ scale:0.97 }}
            className="cta-btn-wrap"
          >
            <Link href="/contact" className="cta-btn-main">
              Start a Project →
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ y:-2 }}
            whileTap={{ scale:0.97 }}
            className="cta-btn-ghost-wrap"
          >
            <Link href="/projects" className="cta-btn-ghost">
              View Our Work
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .cta-section {
          position: relative;
          overflow: hidden;
          padding: 7rem 3rem;
          text-align: center;
          box-sizing: border-box;
        }
        .cta-h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.2rem, 4.5vw, 4rem);
          font-weight: 800;
          letter-spacing: -2px;
          line-height: 1.05;
          color: #f0ece6;
          margin: 0 0 1rem;
        }
        .cta-sub {
          font-size: 15px;
          color: #7a7a88;
          max-width: 500px;
          margin: 0 auto 3rem;
          line-height: 1.8;
          font-weight: 300;
        }
        .cta-btns {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
          align-items: center;
        }
        .cta-btn-wrap { display: inline-block; }
        .cta-btn-main {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #f0ece6;
          color: #09090b;
          padding: 15px 34px;
          border-radius: 10px;
          font-size: 15px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          text-decoration: none;
          white-space: nowrap;
        }
        .cta-btn-ghost-wrap {
          display: inline-block;
          border-radius: 10px;
          border: 0.5px solid #2c2c36;
          transition: border-color 0.2s;
        }
        .cta-btn-ghost-wrap:hover { border-color: #e8793a; }
        .cta-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #f0ece6;
          padding: 15px 34px;
          font-size: 15px;
          font-family: 'DM Sans', sans-serif;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.2s;
        }
        .cta-btn-ghost-wrap:hover .cta-btn-ghost { color: #e8793a; }

        /* ── TABLET ── */
        @media (max-width: 1024px) {
          .cta-section { padding: 5.5rem 2rem; }
          .cta-h2 { font-size: clamp(2rem, 5vw, 3rem); letter-spacing: -1.5px; }
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .cta-section { padding: 4.5rem 1.25rem; }
          .cta-h2 {
            font-size: clamp(1.9rem, 8vw, 2.6rem);
            letter-spacing: -1px;
          }
          .cta-sub {
            font-size: 14px;
            margin-bottom: 2.5rem;
            max-width: 100%;
          }
          .cta-btns {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
          }
          .cta-btn-wrap,
          .cta-btn-ghost-wrap { width: 100%; }
          .cta-btn-main,
          .cta-btn-ghost {
            width: 100%;
            justify-content: center;
            padding: 15px 24px;
            box-sizing: border-box;
          }
        }

        /* ── SMALL MOBILE ── */
        @media (max-width: 480px) {
          .cta-section { padding: 4rem 1rem; }
          .cta-h2 { font-size: 1.85rem; letter-spacing: -0.5px; }
          .cta-sub { font-size: 13px; }
          .cta-btn-main,
          .cta-btn-ghost { font-size: 14px; padding: 14px 20px; }
        }
      `}</style>
    </section>
  );
}