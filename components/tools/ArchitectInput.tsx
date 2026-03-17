"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GenerationStep } from "@/types/architect";

const EXAMPLE_PROMPTS = [
  "Build an AI SaaS for marketing agencies to automate reporting",
  "Create a freelance developer marketplace with escrow payments",
  "Design a creator analytics platform for multi-channel tracking",
];

const GENERATION_STEPS: GenerationStep[] = [
  { id:"1", label:"Analyzing product idea",     subtext:"Identifying target market and core value prop",  status:"pending" },
  { id:"2", label:"Understanding business model",subtext:"Mapping revenue streams and growth loops",       status:"pending" },
  { id:"3", label:"Designing core features",     subtext:"Defining user flows and functional modules",    status:"pending" },
  { id:"4", label:"Generating tech architecture",subtext:"Selecting optimal stack and infrastructure",    status:"pending" },
  { id:"5", label:"Planning MVP roadmap",         subtext:"Breaking down phases and milestones",          status:"pending" },
];

interface ArchitectInputProps {
  onGenerate: (idea: string) => Promise<void>;
  isLoading:  boolean;
  error?:     string | null;
  hasResult:  boolean;
  idea:       string;
  onIdeaChange: (v: string) => void;
  steps:      GenerationStep[];
}

export default function ArchitectInput({
  onGenerate,
  isLoading,
  error,
  hasResult,
  idea,
  onIdeaChange,
  steps,
}: ArchitectInputProps) {

  function handlePromptClick(prompt: string) {
    onIdeaChange(prompt);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onGenerate(idea);
  }

  return (
    <div className="ai-input-wrap">

      <AnimatePresence mode="wait">
        {isLoading ? (
          /* ── THINKING STATE ── */
          <motion.div
            key="thinking"
            initial={{ opacity:0, y:16 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-16 }}
            className="thinking-wrap"
          >
            <div className="thinking-icon">
              <span className="thinking-sparkle">✦</span>
            </div>
            <h2 className="thinking-title">Architecting your vision</h2>
            <p className="thinking-sub">
              Our AI is processing your product requirements and generating a comprehensive technical roadmap.
            </p>

            <div className="thinking-steps">
              {steps.map((step) => (
                <div key={step.id} className="thinking-step">
                  <div className="thinking-step-icon">
                    {step.status === "done"    && <span className="step-done">✓</span>}
                    {step.status === "loading" && <span className="step-spin">◌</span>}
                    {step.status === "pending" && <span className="step-pending">◌</span>}
                  </div>
                  <div className="thinking-step-text">
                    <div className={`step-label ${step.status === "pending" ? "step-label-dim" : ""}`}>
                      {step.label}
                    </div>
                    {step.status !== "pending" && (
                      <div className="step-subtext">{step.subtext}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        ) : hasResult ? (
          /* ── RESULT STATE — show input recap ── */
          <motion.div
            key="result"
            initial={{ opacity:0, y:16 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0 }}
            className="result-input-recap"
          >
            <div className="recap-idea-wrap">
              <div className="recap-idea-label">PROJECT ARCHITECTURE</div>
              <div className="recap-idea-text">{idea}</div>
              <div className="recap-tags">
                <span className="recap-tag">GPT-4o</span>
                <span className="recap-tag">Creative Mode</span>
                <button
                  className="recap-regenerate"
                  onClick={() => onGenerate(idea)}
                  type="button"
                >
                  Regenerate
                </button>
              </div>
            </div>

            <div className="recap-analysis">
              <div className="recap-analysis-header">
                <span className="recap-analysis-title">Generation Analysis</span>
                <span className="recap-analysis-pct" style={{ color:"#5ec97e" }}>100%</span>
              </div>
              <div className="recap-progress-bar">
                <div className="recap-progress-fill" />
              </div>
              <div className="recap-checks">
                <span className="recap-check">✓ Tech Stack</span>
                <span className="recap-check">✓ Roadmap</span>
                <span className="recap-check">✓ Monetization</span>
              </div>
            </div>
          </motion.div>

        ) : (
          /* ── EMPTY STATE — main input ── */
          <motion.div
            key="input"
            initial={{ opacity:0, y:16 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-16 }}
            className="ai-empty-wrap"
          >
            <h1 className="ai-main-title">What do you want to build?</h1>
            <p className="ai-main-sub">
              Describe your vision and our AI will architect the entire technical and business foundation.
            </p>

            {/* Input box */}
            <form onSubmit={handleSubmit} className="ai-input-form">
              <div className="ai-textarea-wrap">
                <textarea
                  value={idea}
                  onChange={(e) => onIdeaChange(e.target.value)}
                  placeholder="Describe your product idea..."
                  rows={4}
                  className="ai-textarea"
                  disabled={isLoading}
                />
                <div className="ai-input-bar">
                  <div className="ai-quick-tags">
                    <button type="button" className="ai-quick-tag" onClick={() => onIdeaChange(idea + " B2B SaaS")}>B2B SaaS</button>
                    <button type="button" className="ai-quick-tag" onClick={() => onIdeaChange(idea + " Mobile App")}>Mobile App</button>
                  </div>
                  <button
                    type="submit"
                    className="ai-generate-btn"
                    disabled={isLoading || !idea.trim()}
                  >
                    ✦ Generate Architecture
                  </button>
                </div>
              </div>
            </form>

            {error && (
              <div className="ai-error">{error}</div>
            )}

            {/* Example prompts */}
            <div className="ai-examples">
              <div className="ai-examples-label">EXAMPLE PROMPTS</div>
              <div className="ai-example-list">
                {EXAMPLE_PROMPTS.map((p) => (
                  <button
                    key={p}
                    type="button"
                    className="ai-example-item"
                    onClick={() => handlePromptClick(p)}
                  >
                    <span className="ai-example-icon">✦</span>
                    <span className="ai-example-text">{p}</span>
                    <span className="ai-example-arrow">↗</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .ai-input-wrap {
          flex: 1;
          padding: 3rem 3rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        /* EMPTY STATE */
        .ai-empty-wrap { max-width: 600px; width: 100%; }
        .ai-main-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          font-weight: 800;
          color: #f0ece6;
          margin: 0 0 0.75rem;
          letter-spacing: -1px;
        }
        .ai-main-sub {
          font-size: 14px;
          color: #7a7a88;
          line-height: 1.7;
          margin: 0 0 2rem;
          font-weight: 300;
        }
        .ai-input-form { margin-bottom: 2rem; }
        .ai-textarea-wrap {
          background: #111114;
          border: 0.5px solid #2c2c36;
          border-radius: 14px;
          overflow: hidden;
          transition: border-color 0.2s;
        }
        .ai-textarea-wrap:focus-within { border-color: rgba(232,121,58,0.4); }
        .ai-textarea {
          width: 100%;
          background: transparent;
          border: none;
          padding: 1.25rem 1.25rem 0.75rem;
          color: #f0ece6;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          resize: none;
          outline: none;
          line-height: 1.65;
          box-sizing: border-box;
          min-height: 110px;
        }
        .ai-textarea::placeholder { color: #3a3a46; }
        .ai-input-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1.25rem;
          border-top: 0.5px solid #1e1e26;
          gap: 8px;
          flex-wrap: wrap;
        }
        .ai-quick-tags { display: flex; gap: 6px; }
        .ai-quick-tag {
          background: #1a1a1e;
          border: 0.5px solid #2c2c36;
          color: #7a7a88;
          padding: 5px 12px;
          border-radius: 100px;
          font-size: 12px;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: all 0.2s;
        }
        .ai-quick-tag:hover { border-color: #e8793a; color: #e8793a; }
        .ai-generate-btn {
          background: #e8793a;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 9px;
          font-size: 13px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: opacity 0.2s;
        }
        .ai-generate-btn:hover:not(:disabled) { opacity: 0.88; }
        .ai-generate-btn:disabled { opacity: 0.45; cursor: not-allowed; }
        .ai-error {
          background: rgba(232,50,50,0.08);
          border: 0.5px solid rgba(232,50,50,0.25);
          border-radius: 8px;
          padding: 12px 16px;
          font-size: 13px;
          color: #e87a7a;
          margin-bottom: 1rem;
        }

        /* EXAMPLES */
        .ai-examples { margin-top: 0; }
        .ai-examples-label {
          font-size: 10px;
          color: #3a3a46;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
          font-family: 'DM Sans', sans-serif;
        }
        .ai-example-list { display: flex; flex-direction: column; gap: 8px; }
        .ai-example-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: #111114;
          border: 0.5px solid #1e1e26;
          border-radius: 10px;
          cursor: pointer;
          text-align: left;
          transition: border-color 0.2s, background 0.15s;
          width: 100%;
        }
        .ai-example-item:hover { border-color: #2c2c36; background: #16161a; }
        .ai-example-icon { color: #e8793a; font-size: 12px; flex-shrink: 0; }
        .ai-example-text { flex: 1; font-size: 13px; color: #7a7a88; font-family: 'DM Sans', sans-serif; line-height: 1.5; }
        .ai-example-item:hover .ai-example-text { color: #f0ece6; }
        .ai-example-arrow { font-size: 12px; color: #3a3a46; flex-shrink: 0; }

        /* THINKING STATE */
        .thinking-wrap {
          max-width: 560px;
          width: 100%;
          text-align: center;
        }
        .thinking-icon {
          width: 64px; height: 64px;
          border-radius: 50%;
          background: rgba(232,121,58,0.12);
          border: 1px solid rgba(232,121,58,0.25);
          display: flex; align-items: center; justify-content: center;
          font-size: 24px; color: #e8793a;
          margin: 0 auto 1.5rem;
          animation: thinkPulse 2s infinite;
        }
        @keyframes thinkPulse { 0%,100%{opacity:1} 50%{opacity:0.6} }
        .thinking-sparkle { animation: spin 3s linear infinite; display: inline-block; }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        .thinking-title {
          font-family: 'Syne', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #f0ece6;
          margin: 0 0 0.5rem;
        }
        .thinking-sub {
          font-size: 13px;
          color: #7a7a88;
          line-height: 1.7;
          margin: 0 0 2rem;
        }
        .thinking-steps {
          background: #111114;
          border: 0.5px solid #1e1e26;
          border-radius: 14px;
          padding: 1.5rem;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .thinking-step {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .thinking-step-icon { width: 24px; flex-shrink: 0; padding-top: 1px; }
        .step-done { font-size: 16px; color: #5ec97e; }
        .step-spin { font-size: 16px; color: #e8793a; display: inline-block; animation: stepSpin 1s linear infinite; }
        @keyframes stepSpin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        .step-pending { font-size: 16px; color: #2c2c36; }
        .step-label {
          font-size: 14px; font-weight: 500;
          color: #f0ece6; font-family: 'DM Sans', sans-serif;
        }
        .step-label-dim { color: #3a3a46; }
        .step-subtext {
          font-size: 12px; color: #7a7a88;
          font-family: monospace; margin-top: 2px;
        }

        /* RESULT RECAP */
        .result-input-recap { max-width: 600px; width: 100%; }
        .recap-idea-wrap {
          background: #111114;
          border: 0.5px solid rgba(232,121,58,0.3);
          border-radius: 14px;
          padding: 1.5rem;
          margin-bottom: 1rem;
        }
        .recap-idea-label {
          font-size: 10px;
          color: #e8793a;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
          font-family: 'DM Sans', sans-serif;
        }
        .recap-idea-text {
          font-size: 14px;
          color: #f0ece6;
          line-height: 1.65;
          margin-bottom: 1rem;
          font-family: 'DM Sans', sans-serif;
        }
        .recap-tags { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .recap-tag {
          background: #1a1a1e;
          border: 0.5px solid #2c2c36;
          color: #7a7a88;
          font-size: 12px;
          padding: 4px 10px;
          border-radius: 6px;
          font-family: 'DM Sans', sans-serif;
        }
        .recap-regenerate {
          margin-left: auto;
          background: transparent;
          border: none;
          color: #e8793a;
          font-size: 13px;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          padding: 0;
        }
        .recap-regenerate:hover { opacity: 0.8; }
        .recap-analysis {
          background: #111114;
          border: 0.5px solid #1e1e26;
          border-radius: 14px;
          padding: 1.25rem 1.5rem;
        }
        .recap-analysis-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }
        .recap-analysis-title {
          font-size: 14px;
          font-weight: 500;
          color: #f0ece6;
          font-family: 'DM Sans', sans-serif;
        }
        .recap-analysis-pct {
          font-size: 14px;
          font-weight: 600;
          font-family: 'DM Sans', sans-serif;
        }
        .recap-progress-bar {
          height: 4px;
          background: #1e1e26;
          border-radius: 2px;
          margin-bottom: 1rem;
          overflow: hidden;
        }
        .recap-progress-fill {
          height: 100%;
          width: 100%;
          background: #5ec97e;
          border-radius: 2px;
        }
        .recap-checks { display: flex; gap: 1rem; flex-wrap: wrap; }
        .recap-check {
          font-size: 12px;
          color: #5ec97e;
          font-family: 'DM Sans', sans-serif;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .ai-input-wrap { padding: 2rem 1.25rem; }
          .ai-input-bar { flex-direction: column; align-items: flex-end; }
          .ai-generate-btn { width: 100%; text-align: center; }
        }
      `}</style>
    </div>
  );
}