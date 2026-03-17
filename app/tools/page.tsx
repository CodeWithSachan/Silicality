import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tools — Silicality",
  description: "AI tools built for founders and product teams. From architecture to MVP estimation.",
};

// ── TOOL DATA ─────────────────────────────────────────────────────
const tools = [
  {
    icon:        "◈",
    name:        "AI Product Architect",
    desc:        "Turn your startup idea into a complete product architecture including tech stack, roadmap, and monetization model.",
    status:      "live" as const,
    href:        "/tools/product-architect",
    btnLabel:    "Launch Tool →",
  },
  {
    icon:        "▣",
    name:        "Startup Idea Validator",
    desc:        "Analyze your startup idea with AI and evaluate market potential against real-world data points.",
    status:      "soon" as const,
    href:        "#",
    btnLabel:    "Notify Me",
  },
  {
    icon:        "◉",
    name:        "MVP Cost Estimator",
    desc:        "Get precise development timeline and cost estimates for your MVP based on feature complexity.",
    status:      "soon" as const,
    href:        "#",
    btnLabel:    "Notify Me",
  },
  {
    icon:        "✦",
    name:        "Landing Page Generator",
    desc:        "Generate high-converting landing page copy and wireframe layouts for your startup in seconds.",
    status:      "soon" as const,
    href:        "#",
    btnLabel:    "Notify Me",
  },
  {
    icon:        "⟨⟩",
    name:        "Schema Architect",
    desc:        "Instant database schema generation for PostgreSQL and MongoDB based on your business logic.",
    status:      "soon" as const,
    href:        "#",
    btnLabel:    "Notify Me",
  },
  {
    icon:        "◎",
    name:        "Competitor Analyst",
    desc:        "Automated teardowns of your competitors' features, pricing, and market positioning.",
    status:      "soon" as const,
    href:        "#",
    btnLabel:    "Notify Me",
  },
];

export default function ToolsPage() {
  return (
    <div style={{ background:"#09090b", minHeight:"100vh", color:"#f0ece6" }}>

      {/* ── HERO ── */}
      <div className="tools-hero">
        <div className="tools-hero-tag">FOR FOUNDERS &amp; PRODUCT TEAMS</div>

        <h1 className="tools-hero-h1">
          AI tools built for founders<br className="hero-br" /> and product teams
        </h1>

        <p className="tools-hero-sub">
          Explore intelligent tools powered by the same AI systems we build for real products.
          From architecture to MVP estimation.
        </p>

        <div className="tools-hero-btns">
          <Link href="/tools/product-architect" className="btn-tools-primary">
            🚀 Try AI Product Architect
          </Link>
          <Link href="/contact" className="btn-tools-ghost">
            Start a Project
          </Link>
        </div>
      </div>

      {/* ── GRID ── */}
      <div className="tools-collection-wrap">
        <div className="tools-collection-header">
          <div>
            <h2 className="tools-collection-title">The Studio Collection</h2>
            <p className="tools-collection-sub">Proprietary tools to accelerate your startup journey.</p>
          </div>
          <Link href="#" className="tools-view-all">→ View All Tools</Link>
        </div>

        <div className="tools-grid">
          {tools.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>
      </div>

      {/* ── CTA STRIP ── */}
      <div className="tools-cta-strip">
        <div className="tools-cta-inner">
          <div className="tools-cta-left">
            <h2 className="tools-cta-title">Want us to build your product?</h2>
            <p className="tools-cta-desc">
              We partner with ambitious founders to build high-performance AI products
              from scratch. Our studio handles everything from design to deployment.
            </p>
            <div className="tools-cta-btns">
              <Link href="/contact" className="btn-tools-primary">Start a Project</Link>
              <Link href="/services" className="btn-tools-outline">Explore Services</Link>
            </div>
          </div>
          <div className="tools-cta-graphic" aria-hidden>
            <span className="sparkle-lg">✦</span>
            <span className="sparkle-sm">✦</span>
            <span className="sparkle-xs">✦</span>
          </div>
        </div>
      </div>

      {/* ── FOOTER NOTE ── */}
      <div className="tools-footer-note">
        <span>© 2024 Silicality AI Product Studio</span>
        <div className="tools-footer-links">
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="/privacy-policy">Privacy</a>
        </div>
      </div>

      <style>{`
        /* HERO */
        .tools-hero {
          text-align: center;
          padding: 5rem 2rem 4rem;
          max-width: 800px;
          margin: 0 auto;
        }
        .tools-hero-tag {
          display: inline-block;
          background: #111114;
          border: 0.5px solid #2c2c36;
          border-radius: 6px;
          padding: 5px 14px;
          font-size: 10px;
          color: #7a7a88;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 1.75rem;
          font-family: 'DM Sans', sans-serif;
        }
        .tools-hero-h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.9rem, 4vw, 3rem);
          font-weight: 800;
          letter-spacing: -1px;
          line-height: 1.1;
          color: #f0ece6;
          margin: 0 0 1.25rem;
        }
        .tools-hero-sub {
          font-size: 15px;
          color: #7a7a88;
          line-height: 1.75;
          max-width: 540px;
          margin: 0 auto 2.5rem;
          font-weight: 300;
        }
        .tools-hero-btns {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .hero-br { display: inline; }

        /* BUTTONS */
        .btn-tools-primary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #e8793a;
          color: #fff;
          padding: 12px 24px;
          border-radius: 9px;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          text-decoration: none;
          transition: opacity 0.2s;
          white-space: nowrap;
        }
        .btn-tools-primary:hover { opacity: 0.88; }
        .btn-tools-ghost {
          display: inline-flex;
          align-items: center;
          background: transparent;
          color: #f0ece6;
          border: 0.5px solid #2c2c36;
          padding: 12px 24px;
          border-radius: 9px;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          text-decoration: none;
          transition: border-color 0.2s;
          white-space: nowrap;
        }
        .btn-tools-ghost:hover { border-color: #e8793a; color: #e8793a; }
        .btn-tools-outline {
          display: inline-flex;
          align-items: center;
          background: transparent;
          color: #f0ece6;
          border: 0.5px solid #3a3a46;
          padding: 11px 22px;
          border-radius: 9px;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          text-decoration: none;
          transition: border-color 0.2s;
        }
        .btn-tools-outline:hover { border-color: #e8793a; }

        /* COLLECTION */
        .tools-collection-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2rem 4rem;
        }
        .tools-collection-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 1.75rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .tools-collection-title {
          font-family: 'Syne', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #f0ece6;
          margin: 0 0 4px;
        }
        .tools-collection-sub {
          font-size: 13px;
          color: #7a7a88;
          margin: 0;
        }
        .tools-view-all {
          font-size: 13px;
          color: #e8793a;
          text-decoration: none;
          white-space: nowrap;
        }

        /* GRID */
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        /* CTA STRIP */
        .tools-cta-strip {
          background: #111114;
          border-top: 0.5px solid #1e1e26;
          border-radius: 12px;
          margin: 0 2rem 2rem;
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
          overflow: hidden;
        }
        .tools-cta-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 3.5rem;
          gap: 2rem;
        }
        .tools-cta-left { max-width: 520px; }
        .tools-cta-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.4rem, 2.5vw, 1.8rem);
          font-weight: 700;
          color: #f0ece6;
          margin: 0 0 0.75rem;
          letter-spacing: -0.3px;
        }
        .tools-cta-desc {
          font-size: 14px;
          color: #7a7a88;
          line-height: 1.7;
          margin: 0 0 1.75rem;
        }
        .tools-cta-btns { display: flex; gap: 12px; flex-wrap: wrap; }
        .tools-cta-graphic {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          opacity: 0.15;
          flex-shrink: 0;
        }
        .sparkle-lg { font-size: 48px; color: #e8793a; }
        .sparkle-sm { font-size: 28px; color: #e8793a; }
        .sparkle-xs { font-size: 16px; color: #e8793a; }

        /* FOOTER NOTE */
        .tools-footer-note {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
          padding: 1.5rem 2rem;
          font-size: 12px;
          color: #3a3a46;
          flex-wrap: wrap;
          gap: 1rem;
          font-family: 'DM Sans', sans-serif;
        }
        .tools-footer-links { display: flex; gap: 1.5rem; }
        .tools-footer-links a { color: #3a3a46; text-decoration: none; }
        .tools-footer-links a:hover { color: #7a7a88; }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .tools-grid { grid-template-columns: repeat(2, 1fr); }
          .hero-br { display: none; }
        }
        @media (max-width: 640px) {
          .tools-grid { grid-template-columns: 1fr; }
          .tools-hero { padding: 3.5rem 1.25rem 3rem; }
          .tools-collection-wrap { padding: 0 1.25rem 3rem; }
          .tools-cta-inner { flex-direction: column; padding: 2rem 1.5rem; }
          .tools-cta-graphic { display: none; }
          .tools-footer-note { padding: 1.5rem 1.25rem; }
          .tools-cta-strip { margin: 0 1.25rem 2rem; }
        }
      `}</style>
    </div>
  );
}

// ── TOOL CARD COMPONENT ───────────────────────────────────────────
function ToolCard({ tool }: {
  tool: {
    icon: string; name: string; desc: string;
    status: "live" | "soon"; href: string; btnLabel: string;
  }
}) {
  return (
    <div className="tool-card">
      <div className="tool-card-top">
        <div className="tool-card-icon">{tool.icon}</div>
        {tool.status === "live" ? (
          <span className="badge-live">Live</span>
        ) : (
          <span className="badge-soon">Coming Soon</span>
        )}
      </div>

      <h3 className="tool-card-name">{tool.name}</h3>
      <p className="tool-card-desc">{tool.desc}</p>

      <div className="tool-card-footer">
        {tool.status === "live" ? (
          <Link href={tool.href} className="btn-launch">
            {tool.btnLabel}
          </Link>
        ) : (
          <button className="btn-notify" type="button">
            {tool.btnLabel}
          </button>
        )}
      </div>

      <style>{`
        .tool-card {
          background: #111114;
          border: 0.5px solid #1e1e26;
          border-radius: 14px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0;
          transition: border-color 0.2s;
          box-sizing: border-box;
        }
        .tool-card:hover { border-color: #2c2c36; }
        .tool-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }
        .tool-card-icon {
          width: 38px; height: 38px;
          background: #1a1a1e;
          border: 0.5px solid #2c2c36;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px; color: #e8793a;
          font-family: monospace;
        }
        .badge-live {
          background: rgba(94,201,126,0.12);
          color: #5ec97e;
          border: 0.5px solid rgba(94,201,126,0.3);
          font-size: 10px;
          padding: 3px 9px;
          border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
        }
        .badge-soon {
          background: #1a1a1e;
          color: #7a7a88;
          border: 0.5px solid #2c2c36;
          font-size: 10px;
          padding: 3px 9px;
          border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
        }
        .tool-card-name {
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #f0ece6;
          margin: 0 0 8px;
          letter-spacing: -0.2px;
        }
        .tool-card-desc {
          font-size: 13px;
          color: #7a7a88;
          line-height: 1.65;
          margin: 0 0 1.5rem;
          flex: 1;
        }
        .tool-card-footer { margin-top: auto; }
        .btn-launch {
          display: inline-block;
          background: #e8793a;
          color: #fff;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 13px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .btn-launch:hover { opacity: 0.88; }
        .btn-notify {
          display: inline-block;
          background: transparent;
          color: #f0ece6;
          border: 0.5px solid #2c2c36;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 13px;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: border-color 0.2s;
          width: 100%;
          text-align: center;
        }
        .btn-notify:hover { border-color: #e8793a; color: #e8793a; }
      `}</style>
    </div>
  );
}