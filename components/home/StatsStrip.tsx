"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "5",   suffix: "+", label: "AI products shipped"    },
  { number: "3",   suffix: "",  label: "Industries served"       },
  { number: "24",  suffix: "h", label: "Response time"          },
  { number: "100", suffix: "%", label: "Client code ownership"  },
];

export default function StatsStrip() {
  return (
    <div className="stats-strip">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="stat-item"
          style={{
            borderRight: i < stats.length - 1 ? "0.5px solid #1e1e26" : "none",
          }}
        >
          <div className="stat-number">
            {stat.number}
            <span style={{ color: "#e8793a" }}>{stat.suffix}</span>
          </div>
          <div className="stat-label">{stat.label}</div>
        </motion.div>
      ))}

      <style>{`
        .stats-strip {
          display: flex;
          border-top: 0.5px solid #1e1e26;
          border-bottom: 0.5px solid #1e1e26;
          background: #09090b;
          flex-wrap: wrap;
        }
        .stat-item {
          flex: 1;
          min-width: 140px;
          padding: 1.75rem 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 4px;
          box-sizing: border-box;
        }
        .stat-number {
          font-family: 'Syne', sans-serif;
          font-size: 30px;
          font-weight: 800;
          color: #f0ece6;
          letter-spacing: -1px;
          line-height: 1;
        }
        .stat-label {
          font-size: 13px;
          color: #7a7a88;
          margin-top: 4px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
        }

        /* ── TABLET ── */
        @media (max-width: 1024px) {
          .stat-item { padding: 1.5rem 2rem; }
          .stat-number { font-size: 26px; }
        }

        /* ── MOBILE: 2×2 grid ── */
        @media (max-width: 640px) {
          .stats-strip { flex-wrap: wrap; }
          .stat-item {
            flex: 0 0 50%;
            width: 50%;
            padding: 1.25rem 1.5rem;
            /* reset right borders — use border-bottom for rows */
            border-right: none !important;
            border-bottom: 0.5px solid #1e1e26;
          }
          /* right border on odd items (left column) */
          .stat-item:nth-child(odd) {
            border-right: 0.5px solid #1e1e26 !important;
          }
          /* remove bottom border on last row */
          .stat-item:nth-last-child(-n+2) {
            border-bottom: none;
          }
          .stat-number { font-size: 24px; }
          .stat-label  { font-size: 12px; }
        }

        /* ── SMALL MOBILE ── */
        @media (max-width: 360px) {
          .stat-item   { padding: 1rem 1.25rem; }
          .stat-number { font-size: 22px; }
        }
      `}</style>
    </div>
  );
}