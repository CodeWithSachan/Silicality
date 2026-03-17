"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import WorkspaceSidebar  from "@/components/tools/WorkspaceSidebar";
import ArchitectInput    from "@/components/tools/ArchitectInput";
import ArchitectResults  from "@/components/tools/ArchitectResults";
import {
  Architecture, Project, GenerationStep, GenerateResponse,
} from "@/types/architect";

// ── SAMPLE PROJECTS (shown until DB is wired up) ──────────────────
const SAMPLE_PROJECTS: Project[] = [
  { id:"1", title:"AI CRM Platform",      idea:"", slug:"ai-crm-platform",      created_at:"" },
  { id:"2", title:"Creator Analytics",    idea:"", slug:"creator-analytics",    created_at:"" },
  { id:"3", title:"Email Automation",     idea:"", slug:"email-automation",     created_at:"" },
  { id:"4", title:"Fintech Ledger API",   idea:"", slug:"fintech-ledger-api",   created_at:"" },
];

const INITIAL_STEPS: GenerationStep[] = [
  { id:"1", label:"Analyzing product idea",      subtext:"Identifying target market and core value prop",   status:"pending" },
  { id:"2", label:"Understanding business model", subtext:"Mapping revenue streams and growth loops",        status:"pending" },
  { id:"3", label:"Designing core features",      subtext:"Defining user flows and functional modules",     status:"pending" },
  { id:"4", label:"Generating tech architecture", subtext:"Selecting optimal stack and infrastructure",     status:"pending" },
  { id:"5", label:"Planning MVP roadmap",          subtext:"Breaking down phases and milestones",           status:"pending" },
];

// ── STEP SIMULATION ───────────────────────────────────────────────
async function simulateSteps(
  setSteps: React.Dispatch<React.SetStateAction<GenerationStep[]>>
): Promise<void> {
  const delays = [600, 900, 700, 800, 600];
  for (let i = 0; i < INITIAL_STEPS.length; i++) {
    // Set current to loading
    setSteps(prev => prev.map((s, idx) =>
      idx === i ? { ...s, status: "loading" } : s
    ));
    await new Promise(r => setTimeout(r, delays[i]));
    // Set current to done
    setSteps(prev => prev.map((s, idx) =>
      idx === i ? { ...s, status: "done" } : s
    ));
  }
}

// ── MAIN PAGE ─────────────────────────────────────────────────────
export default function ProductArchitectPage() {
  const router = useRouter();

  const [idea,         setIdea]         = useState("");
  const [isLoading,    setIsLoading]    = useState(false);
  const [architecture, setArchitecture] = useState<Architecture | null>(null);
  const [error,        setError]        = useState<string | null>(null);
  const [projects,     setProjects]     = useState<Project[]>(SAMPLE_PROJECTS);
  const [activeId,     setActiveId]     = useState<string | undefined>();
  const [steps,        setSteps]        = useState<GenerationStep[]>(INITIAL_STEPS);
  const [slug,         setSlug]         = useState<string | null>(null);

  const handleGenerate = useCallback(async (inputIdea: string) => {
    if (!inputIdea.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setArchitecture(null);
    setSteps(INITIAL_STEPS);

    try {
      // Run step simulation in parallel with API call
      const [, response] = await Promise.all([
        simulateSteps(setSteps),
        fetch("/api/architect/generate", {
          method:  "POST",
          headers: { "Content-Type": "application/json" },
          body:    JSON.stringify({ idea: inputIdea }),
        }),
      ]);

      const data: GenerateResponse = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error ?? "Generation failed. Please try again.");
      }

      setArchitecture(data.architecture);
      setSlug(data.slug);

      // Add to recent projects
      const newProject: Project = {
        id:         data.project_id,
        title:      data.architecture.product_name,
        idea:       inputIdea,
        slug:       data.slug,
        created_at: new Date().toISOString(),
        architecture: data.architecture,
      };
      setProjects(prev => [newProject, ...prev.slice(0, 4)]);
      setActiveId(data.project_id);

    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  function handleNewProject() {
    setIdea("");
    setArchitecture(null);
    setError(null);
    setActiveId(undefined);
    setSlug(null);
    setSteps(INITIAL_STEPS);
  }

  function handleExport() {
    if (!architecture) return;
    const content = JSON.stringify(architecture, null, 2);
    const blob = new Blob([content], { type: "application/json" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href     = url;
    a.download = `${architecture.product_name.toLowerCase().replace(/\s+/g, "-")}-architecture.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleHire() {
    router.push("/contact");
  }

  return (
    <div className="workspace-root">

      {/* ── TOP NAVBAR ── */}
      <header className="workspace-nav">
        <div className="workspace-nav-left">
          <Link href="/" className="workspace-nav-logo">
            <span className="workspace-logo-icon">◈</span>
            <div>
              <div className="workspace-logo-title">Silicality Labs</div>
              <div className="workspace-logo-subtitle">AI Product Architect</div>
            </div>
          </Link>

          {/* Breadcrumb */}
          <div className="workspace-breadcrumb">
            <Link href="/tools" className="bc-link">Tools</Link>
            <span className="bc-sep">›</span>
            <span className="bc-current">AI Product Architect</span>
          </div>
        </div>

        <div className="workspace-nav-right">
          {slug && (
            <Link
              href={`/p/${slug}`}
              className="workspace-share-btn"
              target="_blank"
            >
              Share
            </Link>
          )}
          <button
            className="workspace-new-btn"
            onClick={handleNewProject}
            type="button"
          >
            + New Project
          </button>
          <div className="workspace-avatar">JD</div>
        </div>
      </header>

      {/* ── MAIN BODY ── */}
      <div className="workspace-body">

        {/* Sidebar */}
        <WorkspaceSidebar
          projects={projects}
          activeProjectId={activeId}
          onNewProject={handleNewProject}
        />

        {/* Main input area */}
        <ArchitectInput
          onGenerate={handleGenerate}
          isLoading={isLoading}
          error={error}
          hasResult={!!architecture}
          idea={idea}
          onIdeaChange={setIdea}
          steps={steps}
        />

        {/* Results panel */}
        <ArchitectResults
          architecture={architecture}
          isLoading={isLoading}
          onExport={handleExport}
          onHire={handleHire}
          productName={architecture?.product_name}
        />
      </div>

      <style>{`
        /* Reset for workspace */
        .workspace-root {
          display: flex;
          flex-direction: column;
          height: 100vh;
          background: #09090b;
          color: #f0ece6;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        /* NAV */
        .workspace-nav {
          height: 52px;
          min-height: 52px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1.5rem;
          border-bottom: 0.5px solid #1e1e26;
          background: #0d0d0f;
          flex-shrink: 0;
          gap: 1rem;
        }
        .workspace-nav-left  { display: flex; align-items: center; gap: 1.5rem; }
        .workspace-nav-right { display: flex; align-items: center; gap: 10px; }
        .workspace-nav-logo  {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .workspace-logo-icon {
          width: 32px; height: 32px;
          background: #e8793a;
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px; color: #fff;
          flex-shrink: 0;
        }
        .workspace-logo-title {
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #f0ece6;
          line-height: 1.2;
        }
        .workspace-logo-subtitle {
          font-size: 11px;
          color: #e8793a;
          line-height: 1.2;
        }
        .workspace-breadcrumb {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #7a7a88;
        }
        .bc-link { color: #7a7a88; text-decoration: none; }
        .bc-link:hover { color: #f0ece6; }
        .bc-sep   { color: #3a3a46; }
        .bc-current { color: #f0ece6; }
        .workspace-share-btn {
          background: transparent;
          border: 0.5px solid #2c2c36;
          color: #f0ece6;
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 12px;
          font-family: 'DM Sans', sans-serif;
          text-decoration: none;
          cursor: pointer;
          transition: border-color 0.2s;
        }
        .workspace-share-btn:hover { border-color: #e8793a; }
        .workspace-new-btn {
          background: transparent;
          border: 0.5px solid #2c2c36;
          color: #f0ece6;
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 12px;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .workspace-new-btn:hover { border-color: #e8793a; color: #e8793a; }
        .workspace-avatar {
          width: 32px; height: 32px;
          border-radius: 50%;
          background: #e8793a;
          color: #fff;
          font-size: 11px;
          font-weight: 600;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        /* BODY */
        .workspace-body {
          display: flex;
          flex: 1;
          overflow: hidden;
          min-height: 0;
        }

        /* RESPONSIVE */
        @media (max-width: 1100px) {
          .results-panel { width: 300px !important; min-width: 280px !important; }
        }
        @media (max-width: 900px) {
          .ws-sidebar { display: none; }
          .workspace-breadcrumb { display: none; }
        }
        @media (max-width: 700px) {
          .results-panel { display: none; }
          .workspace-root { height: auto; overflow: auto; }
          .workspace-body { flex-direction: column; height: auto; overflow: visible; }
          .workspace-nav { height: auto; padding: 0.75rem 1rem; }
          .workspace-logo-subtitle { display: none; }
        }
      `}</style>
    </div>
  );
}