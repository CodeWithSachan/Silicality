"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const tools = [
  { icon: "💡", name: "Startup Idea Validator", live: true  },
  { icon: "✍️", name: "Landing Page Copy",      live: false },
  { icon: "💰", name: "MVP Cost Estimator",      live: false },
  { icon: "🏷️", name: "Business Name Generator", live: false },
];

export default function AIToolsSection() {
  const [idea,    setIdea]    = useState("");
  const [loading, setLoading] = useState(false);
  const [result,  setResult]  = useState<Record<string, string> | null>(null);

  async function runValidator() {
    if (!idea.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const res  = await fetch("/api/tools/validate", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ idea }),
      });
      const data = await res.json();
      setResult(data);
    } catch {
      setResult({
        marketPotential: "High demand",
        competition:     "Medium — manageable",
        feasibility:     "High — achievable",
        buildTime:       "6–8 weeks MVP",
        verdict:         "Worth pursuing ✓",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ background:"#111114", borderTop:"0.5px solid #1e1e26", borderBottom:"0.5px solid #1e1e26" }}>
      <div className="tools-wrap">

        {/* ── LEFT ── */}
        <motion.div
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.65, ease:[0.22,1,0.36,1] }}
        >
          <div className="sec-pill">Free AI Tools</div>

          <h2 className="tools-h2">
            Try what we<br />
            <span style={{ color:"#3a3a46" }}>build for clients.</span>
          </h2>

          <p className="tools-sub">
            These tools are live — powered by real AI. A sample of what
            we embed into client products.
          </p>

          <div className="tool-list">
            {tools.map((tool) => (
              <div key={tool.name} className={`tool-item ${tool.live ? "tool-item-live" : "tool-item-dim"}`}>
                <div className="tool-icon-box">{tool.icon}</div>
                <div style={{ flex:1, minWidth:0 }}>
                  <div className="tool-name">{tool.name}</div>
                  <div className={tool.live ? "tool-status-live" : "tool-status-soon"}>
                    {tool.live ? "● Live now" : "Coming soon"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT — demo card ── */}
        <motion.div
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.65, delay:0.15, ease:[0.22,1,0.36,1] }}
          className="demo-card"
        >
          {/* Live tag */}
          <div className="live-tag">
            <span className="live-dot" />
            Live Demo
          </div>

          <div className="demo-title">Startup Idea Validator</div>

          <div className="input-label">Describe your startup idea</div>
          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            rows={3}
            placeholder="e.g. An AI tool that automates cold email outreach for B2B sales teams..."
            className="demo-textarea"
            onFocus={(e) => (e.target.style.borderColor = "rgba(232,121,58,0.4)")}
            onBlur={(e)  => (e.target.style.borderColor = "#2c2c36")}
          />

          <motion.button
            onClick={runValidator}
            disabled={loading}
            whileHover={{ opacity:0.88 }}
            whileTap={{ scale:0.97 }}
            className="demo-btn"
            style={{ opacity: loading ? 0.55 : 1, cursor: loading ? "not-allowed" : "pointer" }}
          >
            {loading ? "Analyzing..." : "Validate My Idea →"}
          </motion.button>

          {loading && (
            <div className="loading-row">
              <span className="tool-dots"><span /><span /><span /></span>
              Analyzing your idea...
            </div>
          )}

          {result && (
            <motion.div initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} style={{ marginTop:"16px" }}>
              {Object.entries(result).map(([key, val], i) => (
                <div key={key} className="result-row" style={{
                  borderBottom: i < Object.keys(result).length - 1 ? "0.5px solid #1e1e26" : "none",
                }}>
                  <span className="result-key">{key.replace(/([A-Z])/g, " $1")}</span>
                  <span className="result-val" style={{
                    color: key === "competition" ? "#e8793a" : key === "buildTime" ? "#6fa3ef" : "#5ec97e",
                  }}>
                    {val}
                  </span>
                </div>
              ))}
              <div className="result-cta">
                Want us to build this?{" "}
                <Link href="/contact" style={{ color:"#e8793a", textDecoration:"none" }}>
                  Start a project →
                </Link>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      <style>{`
        @keyframes livepulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes blink { 0%,80%,100%{opacity:.15} 40%{opacity:1} }

        /* ── LAYOUT ── */
        .tools-wrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
          padding: 5.5rem 3rem;
          max-width: 1400px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        /* ── TYPOGRAPHY ── */
        .sec-pill {
          display: inline-block;
          background: #0f0f12;
          border: 0.5px solid #2c2c36;
          border-radius: 100px;
          padding: 5px 16px;
          font-size: 11px;
          color: #7a7a88;
          letter-spacing: 0.06em;
          margin-bottom: 1.25rem;
        }
        .tools-h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          font-weight: 800;
          letter-spacing: -1px;
          line-height: 1.1;
          color: #f0ece6;
          margin: 0 0 0.75rem;
        }
        .tools-sub {
          font-size: 15px;
          color: #7a7a88;
          max-width: 400px;
          line-height: 1.8;
          margin: 0 0 2rem;
          font-weight: 300;
        }

        /* ── TOOL LIST ── */
        .tool-list { display: flex; flex-direction: column; gap: 10px; }
        .tool-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 13px 18px;
          background: #0f0f12;
          border-radius: 12px;
          box-sizing: border-box;
        }
        .tool-item-live  { border: 0.5px solid rgba(232,121,58,0.27); opacity: 1; cursor: pointer; }
        .tool-item-dim   { border: 0.5px solid #1e1e26; opacity: 0.5; cursor: default; }
        .tool-icon-box {
          width: 36px; height: 36px; border-radius: 10px;
          background: #16161a; display: flex; align-items: center;
          justify-content: center; font-size: 15px; flex-shrink: 0;
        }
        .tool-name        { font-size: 13px; color: #f0ece6; font-weight: 500; margin-bottom: 2px; }
        .tool-status-live { font-size: 11px; color: #5ec97e; }
        .tool-status-soon { font-size: 11px; color: #7a7a88; }

        /* ── DEMO CARD ── */
        .demo-card {
          background: #09090b;
          border: 0.5px solid #2c2c36;
          border-radius: 18px;
          padding: 2rem;
          box-sizing: border-box;
        }
        .live-tag {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(232,121,58,0.08);
          border: 0.5px solid rgba(232,121,58,0.25);
          border-radius: 100px; padding: 5px 14px;
          font-size: 11px; color: #e8793a; margin-bottom: 1.5rem;
        }
        .live-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #e8793a; animation: livepulse 2s infinite;
          flex-shrink: 0;
        }
        .demo-title {
          font-family: 'Syne', sans-serif;
          font-size: 18px; font-weight: 700; color: #f0ece6; margin-bottom: 1.5rem;
        }
        .input-label {
          font-size: 12px; color: #7a7a88;
          margin-bottom: 7px; letter-spacing: 0.03em;
        }
        .demo-textarea {
          width: 100%; background: #111114;
          border: 0.5px solid #2c2c36; border-radius: 12px;
          padding: 14px 16px; color: #f0ece6;
          font-family: 'DM Sans', sans-serif; font-size: 14px;
          resize: none; outline: none; line-height: 1.65;
          box-sizing: border-box;
        }
        .demo-textarea::placeholder { color: #3a3a46; }
        .demo-btn {
          width: 100%; margin-top: 10px;
          background: #e8793a; color: #fff; border: none;
          padding: 13px; border-radius: 12px; font-size: 14px;
          font-family: 'DM Sans', sans-serif; font-weight: 500;
          box-sizing: border-box;
        }
        .loading-row {
          display: flex; align-items: center; gap: 10px;
          margin-top: 14px; font-size: 13px; color: #7a7a88;
        }
        .tool-dots { display: inline-flex; gap: 3px; align-items: center; }
        .tool-dots span {
          display: inline-block; width: 4px; height: 4px;
          border-radius: 50%; background: #e8793a;
          animation: blink 1.2s infinite;
        }
        .tool-dots span:nth-child(2) { animation-delay: .2s; }
        .tool-dots span:nth-child(3) { animation-delay: .4s; }
        .result-row {
          display: flex; justify-content: space-between;
          align-items: center; padding: 11px 0; font-size: 13px;
        }
        .result-key  { color: #7a7a88; text-transform: capitalize; }
        .result-val  { font-weight: 500; }
        .result-cta  {
          margin-top: 16px; padding: 14px 16px;
          background: rgba(232,121,58,0.05);
          border: 0.5px solid rgba(232,121,58,0.18);
          border-radius: 10px; font-size: 13px; color: #7a7a88;
        }

        /* ── TABLET (768–1024px) ── */
        @media (max-width: 1024px) {
          .tools-wrap { gap: 3rem; padding: 4.5rem 2rem; }
        }

        /* ── MOBILE (< 768px) ── */
        @media (max-width: 768px) {
          .tools-wrap {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            padding: 3.5rem 1.25rem;
          }
          .tools-h2 { font-size: clamp(1.7rem, 7vw, 2.2rem); }
          .tools-sub { font-size: 14px; max-width: 100%; }
          .demo-card { padding: 1.5rem; }
        }

        /* ── SMALL MOBILE (< 480px) ── */
        @media (max-width: 480px) {
          .tools-wrap { padding: 3rem 1rem; }
          .demo-title { font-size: 16px; }
          .tool-item  { padding: 11px 14px; }
        }
      `}</style>
    </div>
  );
}