#!/bin/bash

# ╔══════════════════════════════════════════════════════════════╗
# ║         SILICALITY — FULL PROJECT SETUP SCRIPT              ║
# ║  Run from your project root: chmod +x setup.sh && ./setup.sh ║
# ╚══════════════════════════════════════════════════════════════╝

set -e  # Stop on any error

# ── COLORS ─────────────────────────────────────────────────────
GREEN='\033[0;32m'
ORANGE='\033[0;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
BOLD='\033[1m'
NC='\033[0m'

log()     { echo -e "${GREEN}✓${NC}  $1"; }
info()    { echo -e "${BLUE}→${NC}  $1"; }
warn()    { echo -e "${ORANGE}!${NC}  $1"; }
section() { echo -e "\n${BOLD}${BLUE}── $1 ──${NC}"; }
error()   { echo -e "${RED}✗  ERROR: $1${NC}"; exit 1; }

echo ""
echo -e "${BOLD}╔══════════════════════════════════════╗${NC}"
echo -e "${BOLD}║     Silicality Project Setup         ║${NC}"
echo -e "${BOLD}╚══════════════════════════════════════╝${NC}"
echo ""

# ── CHECK WE'RE IN THE RIGHT PLACE ─────────────────────────────
if [ ! -f "package.json" ]; then
  error "Run this script from your project root (where package.json is)"
fi

if [ ! -d "app" ]; then
  error "No 'app' folder found. Make sure you're in your Next.js project root."
fi

log "Project root confirmed"

# ══════════════════════════════════════════════════════════════
# STEP 1 — CREATE ALL FOLDERS
# ══════════════════════════════════════════════════════════════
section "Creating folder structure"

folders=(
  "app/tools"
  "app/tools/product-architect"
  "app/p/[slug]"
  "app/api/architect/generate"
  "components/tools"
  "components/ui"
  "components/home"
  "components/layout"
  "components/projects"
  "lib"
  "types"
  "data"
)

for folder in "${folders[@]}"; do
  if [ ! -d "$folder" ]; then
    mkdir -p "$folder"
    log "Created $folder/"
  else
    info "Already exists: $folder/"
  fi
done

# ══════════════════════════════════════════════════════════════
# STEP 2 — TYPES
# ══════════════════════════════════════════════════════════════
section "Creating types/"

cat > types/architect.ts << 'TYPESCRIPT'
export interface TechStack {
  frontend:       string;
  backend:        string;
  database:       string;
  ai_layer:       string;
  infrastructure: string;
  auth?:          string;
}

export interface RoadmapPhase {
  phase: string;
  tasks: string[];
}

export interface MonetizationTier {
  name:         string;
  price:        string;
  description:  string;
  highlighted?: boolean;
}

export interface StartupScore {
  overall:              number;
  market_opportunity:   number;
  competition:          number;
  monetization:         number;
  technical_complexity: number;
}

export interface Architecture {
  product_name:   string;
  overview:       string;
  features:       string[];
  tech_stack:     TechStack;
  mvp_roadmap:    RoadmapPhase[];
  ui_screens:     string[];
  monetization:   MonetizationTier[];
  startup_score?: StartupScore;
}

export interface Project {
  id:            string;
  title:         string;
  idea:          string;
  slug:          string;
  created_at:    string;
  architecture?: Architecture;
}

export type GenerationStep = {
  id:      string;
  label:   string;
  subtext: string;
  status:  "pending" | "loading" | "done";
};

export interface GenerateResponse {
  success:      boolean;
  architecture: Architecture;
  project_id:   string;
  slug:         string;
  error?:       string;
}
TYPESCRIPT
log "Created types/architect.ts"

# ══════════════════════════════════════════════════════════════
# STEP 3 — LIB FILES
# ══════════════════════════════════════════════════════════════
section "Creating lib/ files"

# supabase.ts (only if it doesn't exist)
if [ ! -f "lib/supabase.ts" ]; then
cat > lib/supabase.ts << 'TYPESCRIPT'
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const supabaseAdmin = createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
TYPESCRIPT
log "Created lib/supabase.ts"
else
  info "Skipped lib/supabase.ts (already exists)"
fi

# openai.ts
cat > lib/openai.ts << 'TYPESCRIPT'
import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
TYPESCRIPT
log "Created lib/openai.ts"

# prompts.ts (architect prompts)
cat > lib/prompts.ts << 'TYPESCRIPT'
// ── CONTACT / TOOL PROMPTS ────────────────────────────────────────

export const PROMPTS = {
  validateIdea: (idea: string) => `
You are a startup analyst. Analyze this startup idea and respond ONLY with a JSON object.
No explanation, no markdown, just raw JSON.

Idea: "${idea}"

Respond with exactly this structure:
{
  "marketPotential": "High | Medium | Low",
  "competition": "High | Medium | Low",
  "feasibility": "High | Medium | Low",
  "buildTime": "X–Y weeks",
  "verdict": "one sentence summary"
}
`,

  estimateMVP: (description: string) => `
You are a technical project manager. Estimate the MVP cost and timeline.
Respond ONLY with a JSON object. No markdown.

Product: "${description}"

Respond with exactly this structure:
{
  "minCost": "$X,000",
  "maxCost": "$X,000",
  "timeline": "X–Y weeks",
  "complexity": "Low | Medium | High",
  "mainFeatures": ["feature1", "feature2", "feature3"]
}
`,
};

// ── ARCHITECT PROMPTS ─────────────────────────────────────────────

export const ARCHITECT_SYSTEM_PROMPT = `
You are an expert startup product architect and software system designer at a top-tier AI product studio.

Your job is to convert startup ideas into structured, realistic product plans that can be built in 6–8 weeks as an MVP.

Always generate the following sections with depth and specificity:
- Product Overview: clear one-paragraph description of the product and its value proposition
- Core Features: 4–6 concrete, specific features (not generic)
- Technical Architecture: realistic stack choices with brief reasoning
- MVP Roadmap: 3 phases with specific tasks
- UI Screens: 4–6 key screens/pages
- Monetization Strategy: 2–3 pricing tiers with realistic prices
- Startup Score: objective scoring across 4 dimensions

IMPORTANT:
- Be specific, not generic. Name actual technologies.
- Focus on what can realistically be built in 6–8 weeks.
- Pricing should match the market (B2B SaaS is typically $29–$299/mo).
- Startup scores should be honest (not always high).

Respond ONLY with valid JSON matching this exact structure:
{
  "product_name": "string",
  "overview": "string (2-3 sentences)",
  "features": ["string", "string", "string", "string"],
  "tech_stack": {
    "frontend": "string",
    "backend": "string",
    "database": "string",
    "ai_layer": "string",
    "infrastructure": "string",
    "auth": "string"
  },
  "mvp_roadmap": [
    { "phase": "Phase 1: Foundation", "tasks": ["task1", "task2", "task3"] },
    { "phase": "Phase 2: Core Product", "tasks": ["task1", "task2", "task3"] },
    { "phase": "Phase 3: Launch", "tasks": ["task1", "task2", "task3"] }
  ],
  "ui_screens": ["string", "string", "string", "string", "string"],
  "monetization": [
    { "name": "Starter", "price": "$29/mo", "description": "string", "highlighted": false },
    { "name": "Pro", "price": "$79/mo", "description": "string", "highlighted": true },
    { "name": "Enterprise", "price": "Custom", "description": "string", "highlighted": false }
  ],
  "startup_score": {
    "overall": 7.8,
    "market_opportunity": 8,
    "competition": 6,
    "monetization": 8,
    "technical_complexity": 5
  }
}
`.trim();

export const ARCHITECT_USER_PROMPT = (idea: string) =>
  `Generate a complete product architecture for this startup idea:\n\n"${idea}"`;
TYPESCRIPT
log "Created lib/prompts.ts"

# ══════════════════════════════════════════════════════════════
# STEP 4 — DATA FILES
# ══════════════════════════════════════════════════════════════
section "Creating data/ files"

if [ ! -f "data/tools.ts" ]; then
cat > data/tools.ts << 'TYPESCRIPT'
export interface Tool {
  slug:        string;
  name:        string;
  description: string;
  category:    string;
  status:      "live" | "coming-soon";
}

export const tools: Tool[] = [
  {
    slug:        "product-architect",
    name:        "AI Product Architect",
    description: "Turn your startup idea into a complete product architecture including tech stack, roadmap, and monetization model.",
    category:    "Strategy",
    status:      "live",
  },
  {
    slug:        "startup-validator",
    name:        "Startup Idea Validator",
    description: "Analyze your startup idea with AI and evaluate market potential against real-world data points.",
    category:    "Strategy",
    status:      "coming-soon",
  },
  {
    slug:        "mvp-estimator",
    name:        "MVP Cost Estimator",
    description: "Get precise development timeline and cost estimates for your MVP based on feature complexity.",
    category:    "Planning",
    status:      "coming-soon",
  },
  {
    slug:        "landing-page-generator",
    name:        "Landing Page Generator",
    description: "Generate high-converting landing page copy and wireframe layouts for your startup in seconds.",
    category:    "Copywriting",
    status:      "coming-soon",
  },
  {
    slug:        "schema-architect",
    name:        "Schema Architect",
    description: "Instant database schema generation for PostgreSQL and MongoDB based on your business logic.",
    category:    "Engineering",
    status:      "coming-soon",
  },
  {
    slug:        "competitor-analyst",
    name:        "Competitor Analyst",
    description: "Automated teardowns of your competitors' features, pricing, and market positioning.",
    category:    "Research",
    status:      "coming-soon",
  },
];
TYPESCRIPT
log "Created data/tools.ts"
else
  info "Skipped data/tools.ts (already exists)"
fi

if [ ! -f "data/projects.ts" ]; then
cat > data/projects.ts << 'TYPESCRIPT'
export interface Project {
  slug:        string;
  name:        string;
  type:        string;
  description: string;
  tags:        string[];
  emoji:       string;
  thumbBg:     string;
}

export const projects: Project[] = [
  {
    slug:        "ai-customer-support",
    name:        "AI Customer Support Assistant",
    type:        "AI Systems · Automation",
    description: "Automates customer queries and improves response time for support teams.",
    tags:        ["OpenAI API", "Automation", "Next.js"],
    emoji:       "🤖",
    thumbBg:     "#0d1c10",
  },
  {
    slug:        "creator-analytics",
    name:        "Creator Analytics Dashboard",
    type:        "Web Platform · Dashboard",
    description: "Helps creators track engagement, growth, and revenue insights in real time.",
    tags:        ["Dashboard", "Next.js", "Supabase"],
    emoji:       "📊",
    thumbBg:     "#0d1220",
  },
  {
    slug:        "startup-landing",
    name:        "Startup Product Landing",
    type:        "Product Design · Branding",
    description: "Product-focused website and interface built to help an early-stage startup launch faster.",
    tags:        ["Product Design", "Branding"],
    emoji:       "🚀",
    thumbBg:     "#1c100d",
  },
];
TYPESCRIPT
log "Created data/projects.ts"
else
  info "Skipped data/projects.ts (already exists)"
fi

# ══════════════════════════════════════════════════════════════
# STEP 5 — API ROUTES
# ══════════════════════════════════════════════════════════════
section "Creating API routes"

# contact route (only if missing)
if [ ! -f "app/api/contact/route.ts" ]; then
  mkdir -p app/api/contact
cat > app/api/contact/route.ts << 'TYPESCRIPT'
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email) {
      return NextResponse.json({ error: "Name and email required" }, { status: 400 });
    }
    // TODO: Save to Supabase leads table + send via Resend
    console.log("New lead:", { name, email, message });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
TYPESCRIPT
log "Created app/api/contact/route.ts"
else
  info "Skipped app/api/contact/route.ts (already exists)"
fi

# validate tool route
mkdir -p app/api/tools/validate
cat > app/api/tools/validate/route.ts << 'TYPESCRIPT'
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { PROMPTS } from "@/lib/prompts";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { idea } = await req.json();
    if (!idea || idea.trim().length < 10) {
      return NextResponse.json({ error: "Please describe your idea in more detail." }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model:       "gpt-4o",
      temperature: 0.7,
      max_tokens:  500,
      messages: [
        { role: "system", content: "You are a startup analyst. Respond only with valid JSON." },
        { role: "user",   content: PROMPTS.validateIdea(idea) },
      ],
    });

    const raw     = completion.choices[0]?.message?.content ?? "";
    const cleaned = raw.replace(/```json|```/g, "").trim();
    const result  = JSON.parse(cleaned);

    return NextResponse.json(result);
  } catch {
    // Fallback demo data
    return NextResponse.json({
      marketPotential: "High demand",
      competition:     "Medium — manageable",
      feasibility:     "High — achievable",
      buildTime:       "6–8 weeks MVP",
      verdict:         "Worth pursuing ✓",
    });
  }
}
TYPESCRIPT
log "Created app/api/tools/validate/route.ts"

# architect generate route
cat > app/api/architect/generate/route.ts << 'TYPESCRIPT'
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";
import { ARCHITECT_SYSTEM_PROMPT, ARCHITECT_USER_PROMPT } from "@/lib/prompts";
import { Architecture } from "@/types/architect";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

function generateSlug(name: string): string {
  return (
    name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .slice(0, 60) +
    "-" +
    Math.random().toString(36).slice(2, 7)
  );
}

export async function POST(req: NextRequest) {
  try {
    const { idea } = await req.json();

    if (!idea || typeof idea !== "string" || idea.trim().length < 10) {
      return NextResponse.json(
        { error: "Please provide a more detailed idea (at least 10 characters)." },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model:       "gpt-4o",
      temperature: 0.7,
      max_tokens:  2000,
      messages: [
        { role: "system", content: ARCHITECT_SYSTEM_PROMPT },
        { role: "user",   content: ARCHITECT_USER_PROMPT(idea.trim()) },
      ],
    });

    const raw = completion.choices[0]?.message?.content ?? "";

    let architecture: Architecture;
    try {
      const cleaned = raw.replace(/```json|```/g, "").trim();
      architecture  = JSON.parse(cleaned);
    } catch {
      return NextResponse.json(
        { error: "Failed to parse AI response. Please try again." },
        { status: 500 }
      );
    }

    const slug = generateSlug(architecture.product_name);

    const { data: project, error: dbError } = await supabase
      .from("projects")
      .insert({
        title:             architecture.product_name,
        idea:              idea.trim(),
        slug,
        architecture_json: architecture,
      })
      .select("id, slug")
      .single();

    if (dbError) {
      console.error("DB error:", dbError);
      return NextResponse.json({ success: true, architecture, project_id: "local", slug });
    }

    return NextResponse.json({ success: true, architecture, project_id: project.id, slug: project.slug });
  } catch (err) {
    console.error("Architect generate error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
TYPESCRIPT
log "Created app/api/architect/generate/route.ts"

# ══════════════════════════════════════════════════════════════
# STEP 6 — UI COMPONENTS
# ══════════════════════════════════════════════════════════════
section "Creating components/ui/"

cat > components/ui/ParticleCanvas.tsx << 'TYPESCRIPT'
"use client";

import { useEffect, useRef } from "react";

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 60 }, () => ({
      x:       Math.random() * 1400,
      y:       Math.random() * 800,
      vx:      (Math.random() - 0.5) * 0.3,
      vy:      (Math.random() - 0.5) * 0.3,
      w:       1.5 + Math.random() * 2,
      h:       4 + Math.random() * 8,
      angle:   -50 + Math.random() * 100,
      alpha:   0.05 + Math.random() * 0.2,
      isAccent:Math.random() > 0.7,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.angle * Math.PI) / 180);
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle   = p.isAccent
          ? `rgba(232, 124, 62, ${p.alpha})`
          : `rgba(140, 140, 180, ${p.alpha})`;
        ctx.beginPath();
        ctx.roundRect(-p.w / 2, -p.h / 2, p.w, p.h, p.w / 2);
        ctx.fill();
        ctx.restore();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = canvas.width  + 20;
        if (p.x > canvas.width  + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:      "absolute",
        inset:         0,
        width:         "100%",
        height:        "100%",
        opacity:       0.6,
        pointerEvents: "none",
      }}
    />
  );
}
TYPESCRIPT
log "Created components/ui/ParticleCanvas.tsx"

# ══════════════════════════════════════════════════════════════
# STEP 7 — WORKSPACE LAYOUT (removes global nav from workspace)
# ══════════════════════════════════════════════════════════════
section "Creating workspace layout"

cat > app/tools/product-architect/layout.tsx << 'TYPESCRIPT'
// This layout removes the global Navbar and Footer from the workspace
// The workspace has its own full-screen nav built in
export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
TYPESCRIPT
log "Created app/tools/product-architect/layout.tsx"

# ══════════════════════════════════════════════════════════════
# STEP 8 — PLACEHOLDER PAGES (so the app doesn't 404)
# ══════════════════════════════════════════════════════════════
section "Creating placeholder pages"

# /tools/page.tsx placeholder (user will replace with downloaded file)
if [ ! -f "app/tools/page.tsx" ]; then
cat > app/tools/page.tsx << 'TYPESCRIPT'
// Replace this file with the downloaded tools-page.tsx
export default function ToolsPage() {
  return (
    <div style={{ padding: "4rem 2rem", textAlign: "center", color: "#f0ece6" }}>
      <h1 style={{ fontFamily: "sans-serif" }}>Tools page loading...</h1>
      <p style={{ color: "#888", marginTop: "1rem" }}>
        Replace this file with the downloaded <code>tools-page.tsx</code>
      </p>
    </div>
  );
}
TYPESCRIPT
log "Created app/tools/page.tsx (placeholder — replace with tools-page.tsx)"
else
  info "Skipped app/tools/page.tsx (already exists)"
fi

# /tools/product-architect/page.tsx placeholder
cat > app/tools/product-architect/page.tsx << 'TYPESCRIPT'
// Replace this file with the downloaded product-architect-page.tsx
export default function ProductArchitectPage() {
  return (
    <div style={{ padding: "4rem 2rem", textAlign: "center", color: "#f0ece6" }}>
      <h1 style={{ fontFamily: "sans-serif" }}>AI Product Architect loading...</h1>
      <p style={{ color: "#888", marginTop: "1rem" }}>
        Replace this file with the downloaded <code>product-architect-page.tsx</code>
      </p>
    </div>
  );
}
TYPESCRIPT
log "Created app/tools/product-architect/page.tsx (placeholder)"

# /p/[slug]/page.tsx placeholder
cat > "app/p/[slug]/page.tsx" << 'TYPESCRIPT'
// Replace this file with the downloaded share-page.tsx
export default function SharePage({ params }: { params: { slug: string } }) {
  return (
    <div style={{ padding: "4rem 2rem", textAlign: "center", color: "#f0ece6" }}>
      <h1 style={{ fontFamily: "sans-serif" }}>Share page: {params.slug}</h1>
      <p style={{ color: "#888", marginTop: "1rem" }}>
        Replace this file with the downloaded <code>share-page.tsx</code>
      </p>
    </div>
  );
}
TYPESCRIPT
log "Created app/p/[slug]/page.tsx (placeholder)"

# ══════════════════════════════════════════════════════════════
# STEP 9 — COMPONENT PLACEHOLDERS
# ══════════════════════════════════════════════════════════════
section "Creating component placeholders"

# WorkspaceSidebar placeholder
cat > components/tools/WorkspaceSidebar.tsx << 'TYPESCRIPT'
// Replace with downloaded WorkspaceSidebar.tsx
export default function WorkspaceSidebar({ onNewProject }: { onNewProject: () => void; projects: any[]; activeProjectId?: string }) {
  return <aside style={{ width: 240, background: "#0d0d0f", borderRight: "0.5px solid #1e1e26" }} />;
}
TYPESCRIPT
log "Created components/tools/WorkspaceSidebar.tsx (placeholder)"

# ArchitectInput placeholder
cat > components/tools/ArchitectInput.tsx << 'TYPESCRIPT'
// Replace with downloaded ArchitectInput.tsx
export default function ArchitectInput(props: any) {
  return <div style={{ flex: 1, padding: "2rem" }}>Replace with ArchitectInput.tsx</div>;
}
TYPESCRIPT
log "Created components/tools/ArchitectInput.tsx (placeholder)"

# ArchitectResults placeholder
cat > components/tools/ArchitectResults.tsx << 'TYPESCRIPT'
// Replace with downloaded ArchitectResults.tsx
export default function ArchitectResults(props: any) {
  return <aside style={{ width: 340, borderLeft: "0.5px solid #1e1e26", background: "#0d0d0f" }} />;
}
TYPESCRIPT
log "Created components/tools/ArchitectResults.tsx (placeholder)"

log "Component placeholders created — replace with downloaded files"

# ══════════════════════════════════════════════════════════════
# STEP 10 — SUPABASE SQL SCHEMA FILE
# ══════════════════════════════════════════════════════════════
section "Creating database schema file"

cat > supabase-schema.sql << 'SQL'
-- ═══════════════════════════════════════════════════════════════
-- SILICALITY — Supabase Database Schema
-- Run this entire file in: supabase.com → your project → SQL Editor
-- ═══════════════════════════════════════════════════════════════

-- Leads (from contact form)
CREATE TABLE IF NOT EXISTS public.leads (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  email       TEXT NOT NULL,
  message     TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- User profiles (extends Supabase auth)
CREATE TABLE IF NOT EXISTS public.profiles (
  id          UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email       TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Projects (AI Architect output)
CREATE TABLE IF NOT EXISTS public.projects (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id           UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  title             TEXT NOT NULL,
  idea              TEXT NOT NULL,
  slug              TEXT UNIQUE NOT NULL,
  architecture_json JSONB,
  created_at        TIMESTAMPTZ DEFAULT NOW()
);

-- Tool usage analytics
CREATE TABLE IF NOT EXISTS public.tool_usage (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tool_slug   TEXT NOT NULL,
  project_id  UUID REFERENCES public.projects(id) ON DELETE SET NULL,
  input_text  TEXT,
  ip_hash     TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_projects_slug    ON public.projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_user_id ON public.projects(user_id);
CREATE INDEX IF NOT EXISTS idx_projects_created ON public.projects(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_created    ON public.leads(created_at DESC);

-- Row Level Security
ALTER TABLE public.projects   ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tool_usage ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles   ENABLE ROW LEVEL SECURITY;

-- Projects: public read (for /p/[slug] share pages), service role write
CREATE POLICY "Projects are publicly readable"
  ON public.projects FOR SELECT USING (true);
CREATE POLICY "Service role can insert projects"
  ON public.projects FOR INSERT WITH CHECK (true);

-- Leads: service role only
CREATE POLICY "Service role can insert leads"
  ON public.leads FOR INSERT WITH CHECK (true);

-- Profiles: users see only their own
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT USING (auth.uid() = id);
SQL
log "Created supabase-schema.sql"

# ══════════════════════════════════════════════════════════════
# STEP 11 — .env.local template
# ══════════════════════════════════════════════════════════════
section "Checking .env.local"

if [ ! -f ".env.local" ]; then
cat > .env.local << 'ENV'
# ── OpenAI ──────────────────────────────────────────
OPENAI_API_KEY=sk-your-key-here

# ── Supabase ─────────────────────────────────────────
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ-your-anon-key
SUPABASE_SERVICE_ROLE_KEY=eyJ-your-service-role-key

# ── Email (Resend) ────────────────────────────────────
RESEND_API_KEY=re_your-key-here
CONTACT_EMAIL=you@youremail.com

# ── App ────────────────────────────────────────────────
NEXT_PUBLIC_SITE_URL=https://silicality.com
ENV
  log "Created .env.local template — fill in your keys"
else
  warn ".env.local already exists — check it has OPENAI_API_KEY and Supabase keys"
fi

# ══════════════════════════════════════════════════════════════
# STEP 12 — INSTALL PACKAGES
# ══════════════════════════════════════════════════════════════
section "Installing npm packages"

info "Checking for react-icons..."
if ! npm list react-icons --depth=0 > /dev/null 2>&1; then
  npm install react-icons
  log "Installed react-icons"
else
  info "react-icons already installed"
fi

info "Checking for openai..."
if ! npm list openai --depth=0 > /dev/null 2>&1; then
  npm install openai
  log "Installed openai"
else
  info "openai already installed"
fi

info "Checking for @supabase/supabase-js..."
if ! npm list @supabase/supabase-js --depth=0 > /dev/null 2>&1; then
  npm install @supabase/supabase-js
  log "Installed @supabase/supabase-js"
else
  info "@supabase/supabase-js already installed"
fi

info "Checking for resend..."
if ! npm list resend --depth=0 > /dev/null 2>&1; then
  npm install resend
  log "Installed resend"
else
  info "resend already installed"
fi

# ══════════════════════════════════════════════════════════════
# DONE
# ══════════════════════════════════════════════════════════════
echo ""
echo -e "${BOLD}${GREEN}╔══════════════════════════════════════╗${NC}"
echo -e "${BOLD}${GREEN}║         Setup Complete! ✓            ║${NC}"
echo -e "${BOLD}${GREEN}╚══════════════════════════════════════╝${NC}"
echo ""
echo -e "${BOLD}Now do these 4 things manually:${NC}"
echo ""
echo -e "  ${ORANGE}1.${NC} Copy your downloaded component files:"
echo "     tools-page.tsx            → app/tools/page.tsx"
echo "     product-architect-page.tsx → app/tools/product-architect/page.tsx"
echo "     share-page.tsx            → app/p/[slug]/page.tsx"
echo "     WorkspaceSidebar.tsx      → components/tools/WorkspaceSidebar.tsx"
echo "     ArchitectInput.tsx        → components/tools/ArchitectInput.tsx"
echo "     ArchitectResults.tsx      → components/tools/ArchitectResults.tsx"
echo ""
echo -e "  ${ORANGE}2.${NC} Run the Supabase schema:"
echo "     Open supabase-schema.sql"
echo "     Paste into: supabase.com → your project → SQL Editor → Run"
echo ""
echo -e "  ${ORANGE}3.${NC} Fill in .env.local with your real keys:"
echo "     OPENAI_API_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY"
echo ""
echo -e "  ${ORANGE}4.${NC} Start the dev server:"
echo "     npm run dev"
echo ""
echo -e "  ${BLUE}Then visit:${NC}"
echo "     http://localhost:3000/tools"
echo "     http://localhost:3000/tools/product-architect"
echo ""
