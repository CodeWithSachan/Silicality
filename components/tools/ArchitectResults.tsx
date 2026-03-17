"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Architecture } from "@/types/architect";

interface ArchitectResultsProps {
  architecture: Architecture | null;
  isLoading:    boolean;
  onExport:     () => void;
  onHire:       () => void;
  productName?: string;
}

export default function ArchitectResults({
  architecture,
  isLoading,
  onExport,
  onHire,
  productName,
}: ArchitectResultsProps) {
  return (
    <aside className="results-panel">
      <div className="results-header">
        <span className="results-header-title">ARCHITECTURE</span>
        {architecture && (
          <button className="results-download-btn" onClick={onExport} title="Export">
            ⬇
          </button>
        )}
      </div>

      <div className="results-scroll">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="skeleton"
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              exit={{ opacity:0 }}
              className="results-skeleton"
            >
              <div className="results-arriving">
                <div className="arriving-text">Architecture arriving soon</div>
                <div className="arriving-bar">
                  <div className="arriving-bar-fill" />
                </div>
              </div>
              {[1,2,3].map(i => (
                <div key={i} className="skeleton-card">
                  <div className="skeleton-line w-40" />
                  <div className="skeleton-line w-full" />
                  <div className="skeleton-line w-3/4" />
                </div>
              ))}
            </motion.div>

          ) : architecture ? (
            <motion.div
              key="results"
              initial={{ opacity:0, y:12 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.4 }}
              className="results-content"
            >
              {/* Product Overview */}
              <ResultCard icon="🚀" title={architecture.product_name}>
                <p className="result-overview">{architecture.overview}</p>
              </ResultCard>

              {/* Startup Score */}
              {architecture.startup_score && (
                <ResultCard icon="📊" title="Startup Score">
                  <div className="score-main">
                    <span className="score-number">{architecture.startup_score.overall}</span>
                    <span className="score-denom">/ 10</span>
                  </div>
                  <div className="score-metrics">
                    {[
                      ["Market",      architecture.startup_score.market_opportunity],
                      ["Competition", architecture.startup_score.competition],
                      ["Monetization",architecture.startup_score.monetization],
                      ["Complexity",  architecture.startup_score.technical_complexity],
                    ].map(([label, val]) => (
                      <div key={String(label)} className="score-metric">
                        <div className="score-metric-label">{label}</div>
                        <div className="score-bar">
                          <div
                            className="score-bar-fill"
                            style={{ width: `${(Number(val) / 10) * 100}%` }}
                          />
                        </div>
                        <div className="score-metric-val">{val}</div>
                      </div>
                    ))}
                  </div>
                </ResultCard>
              )}

              {/* Core Features */}
              <ResultCard icon="≡" title="Core Features">
                <ul className="result-list">
                  {architecture.features.map((f, i) => (
                    <li key={i} className="result-list-item">
                      <span className="result-bullet">•</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </ResultCard>

              {/* Tech Stack */}
              <ResultCard icon="⚙" title="Tech Stack">
                <div className="tech-grid">
                  {Object.entries(architecture.tech_stack).map(([key, val]) => (
                    <div key={key} className="tech-chip-wrap">
                      <div className="tech-chip-label">{key.charAt(0).toUpperCase() + key.slice(1).replace("_"," ")}</div>
                      <div className="tech-chip-val">{val}</div>
                    </div>
                  ))}
                </div>
              </ResultCard>

              {/* MVP Roadmap */}
              <ResultCard icon="📋" title="MVP Roadmap">
                <div className="roadmap-list">
                  {architecture.mvp_roadmap.map((phase, i) => (
                    <div key={i} className="roadmap-phase">
                      <div className="roadmap-phase-num">{i + 1}</div>
                      <div className="roadmap-phase-body">
                        <div className="roadmap-phase-title">{phase.phase}</div>
                        <div className="roadmap-phase-desc">
                          {phase.tasks.join(", ")}.
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ResultCard>

              {/* Monetization */}
              <ResultCard icon="💳" title="Monetization Model">
                <div className="mono-list">
                  {architecture.monetization.map((tier, i) => (
                    <div
                      key={i}
                      className={`mono-tier ${tier.highlighted ? "mono-tier-featured" : ""}`}
                    >
                      <div className="mono-tier-left">
                        <div className="mono-tier-name">{tier.name}</div>
                        <div className="mono-tier-desc">{tier.description}</div>
                      </div>
                      <div className="mono-tier-price">{tier.price}</div>
                    </div>
                  ))}
                </div>
              </ResultCard>

              {/* UI Screens */}
              {architecture.ui_screens.length > 0 && (
                <ResultCard icon="□" title="UI Screens">
                  <div className="screens-grid">
                    {architecture.ui_screens.map((s, i) => (
                      <div key={i} className="screen-chip">{s}</div>
                    ))}
                  </div>
                </ResultCard>
              )}

            </motion.div>

          ) : (
            <motion.div
              key="empty"
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              className="results-empty"
            >
              <div className="results-empty-text">Architecture will appear here after generation.</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom action buttons */}
      {architecture && (
        <motion.div
          initial={{ opacity:0, y:8 }}
          animate={{ opacity:1, y:0 }}
          className="results-actions"
        >
          <button className="results-btn-export" onClick={onExport} type="button">
            ⬇ Export Project Plan
          </button>
          <button className="results-btn-hire" onClick={onHire} type="button">
            🚀 Start Building with Silicality
          </button>
        </motion.div>
      )}

      <style>{`
        .results-panel {
          width: 340px;
          min-width: 300px;
          height: 100%;
          border-left: 0.5px solid #1e1e26;
          background: #0d0d0f;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }
        .results-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.25rem;
          border-bottom: 0.5px solid #1e1e26;
          flex-shrink: 0;
        }
        .results-header-title {
          font-size: 10px;
          color: #7a7a88;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
        }
        .results-download-btn {
          background: transparent;
          border: 0.5px solid #2c2c36;
          color: #7a7a88;
          width: 28px; height: 28px;
          border-radius: 7px;
          cursor: pointer;
          font-size: 13px;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
        }
        .results-download-btn:hover { border-color: #e8793a; color: #e8793a; }
        .results-scroll {
          flex: 1;
          overflow-y: auto;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .results-scroll::-webkit-scrollbar { width: 3px; }
        .results-scroll::-webkit-scrollbar-thumb { background: #2c2c36; border-radius: 2px; }
        .results-actions {
          border-top: 0.5px solid #1e1e26;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex-shrink: 0;
        }
        .results-btn-export {
          width: 100%;
          background: transparent;
          border: 0.5px solid #2c2c36;
          color: #f0ece6;
          padding: 11px;
          border-radius: 9px;
          font-size: 13px;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: border-color 0.2s;
        }
        .results-btn-export:hover { border-color: #e8793a; }
        .results-btn-hire {
          width: 100%;
          background: #e8793a;
          border: none;
          color: #fff;
          padding: 11px;
          border-radius: 9px;
          font-size: 13px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .results-btn-hire:hover { opacity: 0.88; }

        /* SKELETON */
        .results-arriving {
          background: #111114;
          border: 0.5px solid #1e1e26;
          border-radius: 12px;
          padding: 1rem;
          margin-bottom: 4px;
          text-align: center;
        }
        .arriving-text { font-size: 13px; color: #f0ece6; font-family: 'DM Sans', sans-serif; margin-bottom: 10px; }
        .arriving-bar { height: 3px; background: #1e1e26; border-radius: 2px; overflow: hidden; }
        .arriving-bar-fill {
          height: 100%;
          width: 60%;
          background: #e8793a;
          border-radius: 2px;
          animation: shimmer 1.5s infinite;
        }
        @keyframes shimmer { 0%{transform:translateX(-100%)} 100%{transform:translateX(200%)} }
        .skeleton-card {
          background: #111114;
          border: 0.5px solid #1e1e26;
          border-radius: 12px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .skeleton-line {
          height: 10px;
          background: #1e1e26;
          border-radius: 4px;
          animation: skeletonPulse 1.5s ease-in-out infinite;
        }
        @keyframes skeletonPulse { 0%,100%{opacity:0.5} 50%{opacity:1} }
        .w-40 { width: 40%; }
        .w-full { width: 100%; }
        .w-3\/4 { width: 75%; }

        /* RESULT CARDS */
        .results-content { display: flex; flex-direction: column; gap: 10px; }
        .result-overview {
          font-size: 13px;
          color: #7a7a88;
          line-height: 1.65;
          margin: 0;
          font-family: 'DM Sans', sans-serif;
        }

        /* SCORE */
        .score-main { display: flex; align-items: baseline; gap: 4px; margin-bottom: 12px; }
        .score-number { font-family: 'Syne', sans-serif; font-size: 28px; font-weight: 800; color: #e8793a; }
        .score-denom  { font-size: 14px; color: #7a7a88; }
        .score-metrics { display: flex; flex-direction: column; gap: 8px; }
        .score-metric { display: flex; align-items: center; gap: 8px; }
        .score-metric-label { font-size: 11px; color: #7a7a88; width: 80px; flex-shrink: 0; font-family: 'DM Sans', sans-serif; }
        .score-bar { flex: 1; height: 3px; background: #1e1e26; border-radius: 2px; overflow: hidden; }
        .score-bar-fill { height: 100%; background: #e8793a; border-radius: 2px; transition: width 0.8s ease; }
        .score-metric-val { font-size: 11px; color: #f0ece6; font-weight: 500; width: 16px; text-align: right; font-family: 'DM Sans', sans-serif; }

        /* FEATURES */
        .result-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 7px; }
        .result-list-item { display: flex; gap: 8px; font-size: 13px; color: #7a7a88; line-height: 1.5; font-family: 'DM Sans', sans-serif; }
        .result-bullet { color: #e8793a; flex-shrink: 0; }

        /* TECH */
        .tech-grid { display: flex; flex-direction: column; gap: 8px; }
        .tech-chip-wrap { display: flex; flex-direction: column; gap: 2px; }
        .tech-chip-label { font-size: 10px; color: #3a3a46; text-transform: uppercase; letter-spacing: 0.08em; font-family: 'DM Sans', sans-serif; }
        .tech-chip-val {
          display: inline-block;
          background: #1a1a1e;
          border: 0.5px solid #2c2c36;
          color: #f0ece6;
          font-size: 12px;
          padding: 5px 10px;
          border-radius: 7px;
          font-family: 'DM Sans', sans-serif;
          width: fit-content;
        }

        /* ROADMAP */
        .roadmap-list { display: flex; flex-direction: column; gap: 12px; }
        .roadmap-phase { display: flex; gap: 12px; align-items: flex-start; }
        .roadmap-phase-num {
          width: 24px; height: 24px; border-radius: 50%;
          background: #e8793a;
          color: #fff;
          font-size: 11px; font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          font-family: 'DM Sans', sans-serif;
        }
        .roadmap-phase-title { font-size: 13px; font-weight: 500; color: #e8793a; margin-bottom: 3px; font-family: 'DM Sans', sans-serif; }
        .roadmap-phase-desc { font-size: 12px; color: #7a7a88; line-height: 1.55; font-family: monospace; }

        /* MONETIZATION */
        .mono-list { display: flex; flex-direction: column; gap: 8px; }
        .mono-tier {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 14px;
          background: #111114;
          border: 0.5px solid #1e1e26;
          border-radius: 10px;
          gap: 8px;
        }
        .mono-tier-featured { border-color: rgba(232,121,58,0.4); background: rgba(232,121,58,0.05); }
        .mono-tier-name { font-size: 13px; font-weight: 500; color: #f0ece6; font-family: 'DM Sans', sans-serif; }
        .mono-tier-desc { font-size: 11px; color: #7a7a88; margin-top: 2px; font-family: 'DM Sans', sans-serif; }
        .mono-tier-price { font-size: 14px; font-weight: 600; color: #e8793a; white-space: nowrap; font-family: 'DM Sans', sans-serif; }

        /* SCREENS */
        .screens-grid { display: flex; flex-wrap: wrap; gap: 6px; }
        .screen-chip {
          background: #1a1a1e;
          border: 0.5px solid #2c2c36;
          color: #7a7a88;
          font-size: 12px;
          padding: 5px 12px;
          border-radius: 8px;
          font-family: 'DM Sans', sans-serif;
        }

        /* EMPTY */
        .results-empty {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .results-empty-text {
          font-size: 13px;
          color: #3a3a46;
          text-align: center;
          line-height: 1.6;
          font-family: 'DM Sans', sans-serif;
        }
      `}</style>
    </aside>
  );
}

// ── RESULT CARD WRAPPER ───────────────────────────────────────────
function ResultCard({ icon, title, children }: {
  icon: string; title: string; children: React.ReactNode;
}) {
  return (
    <div className="result-card">
      <div className="result-card-header">
        <span className="result-card-icon">{icon}</span>
        <span className="result-card-title">{title}</span>
      </div>
      <div className="result-card-body">{children}</div>

      <style>{`
        .result-card {
          background: #111114;
          border: 0.5px solid #1e1e26;
          border-radius: 12px;
          overflow: hidden;
        }
        .result-card-header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 14px 10px;
          border-bottom: 0.5px solid #1e1e26;
        }
        .result-card-icon { font-size: 14px; color: #e8793a; }
        .result-card-title {
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #f0ece6;
          letter-spacing: -0.2px;
        }
        .result-card-body { padding: 12px 14px; }
      `}</style>
    </div>
  );
}