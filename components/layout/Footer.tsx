import Link from "next/link";

const EXPLORE_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "AI Tools", href: "/tools"    },
  { label: "Platform", href: "/platform" },
  { label: "Contact",  href: "/contact"  },
];

const COMPANY_LINKS = [
  { label: "About",            href: "/about"          },
  { label: "Privacy Policy",   href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms"          },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "0.5px solid #1e1e26", background: "#09090b" }}>
      <style>{`
        .ft-link {
          font-size: 13px;
          color: #7a7a88;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          transition: color 0.2s;
        }
        .ft-link:hover { color: #f0ece6; }

        .footer-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 3.5rem 3rem 2rem;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 2rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .footer-cols {
          display: flex;
          gap: 4rem;
        }

        .footer-bottom {
          border-top: 0.5px solid #1e1e26;
          padding-top: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-col-title {
          font-size: 10px;
          color: #3a3a46;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 1rem;
          font-family: 'DM Sans', sans-serif;
        }

        .footer-link-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-copy {
          font-size: 12px;
          color: #3a3a46;
          margin: 0;
          font-family: 'DM Sans', sans-serif;
        }

        @media (max-width: 640px) {
          .footer-top  { flex-direction: column; }
          .footer-cols { gap: 2.5rem; }
          .footer-inner { padding: 2.5rem 1.5rem 1.5rem; }
        }
      `}</style>

      <div className="footer-inner">

        {/* ── TOP ROW ── */}
        <div className="footer-top">

          {/* Brand */}
          <div style={{ maxWidth: "280px", flexShrink: 0 }}>
            <div style={{
              fontFamily:    "'Syne', sans-serif",
              fontSize:      "18px",
              fontWeight:    800,
              letterSpacing: "-0.3px",
              color:         "#f0ece6",
              marginBottom:  "0.75rem",
            }}>
              Silicality<span style={{ color: "#e8793a" }}>.</span>
            </div>
            <p style={{
              fontSize:   "13px",
              color:      "#7a7a88",
              lineHeight: 1.75,
              fontWeight: 300,
              margin:     0,
              fontFamily: "'DM Sans', sans-serif",
            }}>
              AI-driven products, programs, and platforms —
              built openly and responsibly.
            </p>
          </div>

          {/* Link columns */}
          <div className="footer-cols">

            {/* Explore */}
            <div>
              <div className="footer-col-title">Explore</div>
              <ul className="footer-link-list">
                {EXPLORE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="ft-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <div className="footer-col-title">Company</div>
              <ul className="footer-link-list">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="ft-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="footer-bottom">
          <p className="footer-copy">© 2026 Silicality. All rights reserved.</p>
          <p className="footer-copy">Scaling The Future · Feedback welcome</p>
        </div>
      </div>
    </footer>
  );
}