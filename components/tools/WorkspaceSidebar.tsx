"use client";

import Link from "next/link";
import { Project } from "@/types/architect";

interface WorkspaceSidebarProps {
  projects:         Project[];
  activeProjectId?: string;
  onNewProject:     () => void;
}

export default function WorkspaceSidebar({
  projects,
  activeProjectId,
  onNewProject,
}: WorkspaceSidebarProps) {
  return (
    <aside className="ws-sidebar">
      {/* New project button */}
      <button className="ws-new-btn" onClick={onNewProject} type="button">
        <span>+</span> Create New Architecture
      </button>

      {/* Recent projects */}
      {projects.length > 0 && (
        <div className="ws-recent">
          <div className="ws-recent-label">RECENT PROJECTS</div>
          <div className="ws-project-list">
            {projects.map((p) => (
              <button
                key={p.id}
                className={`ws-project-item ${activeProjectId === p.id ? "ws-project-active" : ""}`}
                type="button"
              >
                <span className="ws-project-icon">
                  {activeProjectId === p.id ? "✦" : "□"}
                </span>
                <span className="ws-project-name">{p.title}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Bottom links */}
      <div className="ws-sidebar-bottom">
        <Link href="/tools" className="ws-bottom-link">
          <span className="ws-bottom-icon">⚙</span> Settings
        </Link>
        <Link href="#" className="ws-bottom-link">
          <span className="ws-bottom-icon">?</span> Documentation
        </Link>
      </div>

      <style>{`
        .ws-sidebar {
          width: 240px;
          min-width: 240px;
          height: 100%;
          background: #0d0d0f;
          border-right: 0.5px solid #1e1e26;
          display: flex;
          flex-direction: column;
          padding: 1.25rem 1rem;
          gap: 0;
          overflow-y: auto;
          box-sizing: border-box;
        }
        .ws-new-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          background: #e8793a;
          color: #fff;
          border: none;
          border-radius: 9px;
          padding: 11px 16px;
          font-size: 13px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          cursor: pointer;
          margin-bottom: 1.5rem;
          transition: opacity 0.2s;
        }
        .ws-new-btn:hover { opacity: 0.88; }
        .ws-recent { flex: 1; min-height: 0; }
        .ws-recent-label {
          font-size: 10px;
          color: #3a3a46;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-family: 'DM Sans', sans-serif;
          margin-bottom: 0.75rem;
          padding: 0 4px;
        }
        .ws-project-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .ws-project-item {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 9px 10px;
          background: transparent;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          text-align: left;
          transition: background 0.15s;
          color: #7a7a88;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
        }
        .ws-project-item:hover { background: #17171a; color: #f0ece6; }
        .ws-project-active { background: #17171a; color: #f0ece6 !important; }
        .ws-project-icon {
          font-size: 12px;
          color: #e8793a;
          flex-shrink: 0;
          width: 14px;
        }
        .ws-project-name {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 13px;
        }
        .ws-sidebar-bottom {
          border-top: 0.5px solid #1e1e26;
          padding-top: 1rem;
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .ws-bottom-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 10px;
          border-radius: 8px;
          font-size: 13px;
          color: #7a7a88;
          text-decoration: none;
          transition: color 0.2s, background 0.15s;
          font-family: 'DM Sans', sans-serif;
        }
        .ws-bottom-link:hover { color: #f0ece6; background: #17171a; }
        .ws-bottom-icon { font-size: 14px; }
      `}</style>
    </aside>
  );
}