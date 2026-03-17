#!/bin/bash
# ============================================
# SILICALITY — New Folder Structure Setup
# Run from your project root in VS Code terminal
# ============================================

echo "🚀 Setting up Silicality folder structure..."

# ── APP PAGES ──────────────────────────────
mkdir -p app/tools
mkdir -p "app/tools/[slug]"
mkdir -p app/projects
mkdir -p "app/projects/[slug]"

# ── API ROUTES ─────────────────────────────
mkdir -p app/api/tools/validate
mkdir -p app/api/tools/estimate

# ── COMPONENTS ─────────────────────────────
mkdir -p components/ui
mkdir -p components/tools
mkdir -p components/projects

# ── LIB / DATA / TYPES ─────────────────────
mkdir -p lib
mkdir -p data
mkdir -p types

# ============================================
# CREATE PAGE FILES
# ============================================

# Tools directory page
cat > app/tools/page.tsx << 'EOF'
export default function ToolsPage() {
  return (
    <main>
      <h1>AI Tools</h1>
      {/* TODO: ToolCard grid */}
    </main>
  )
}
EOF

# Tools dynamic route
cat > "app/tools/[slug]/page.tsx" << 'EOF'
export default function ToolPage({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h1>Tool: {params.slug}</h1>
      {/* TODO: ToolInput + ToolResult */}
    </main>
  )
}
EOF

# Projects directory page
cat > app/projects/page.tsx << 'EOF'
export default function ProjectsPage() {
  return (
    <main>
      <h1>Projects</h1>
      {/* TODO: ProjectGrid */}
    </main>
  )
}
EOF

# Projects dynamic route
cat > "app/projects/[slug]/page.tsx" << 'EOF'
export default function ProjectPage({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h1>Project: {params.slug}</h1>
      {/* TODO: Case study layout */}
    </main>
  )
}
EOF

# ============================================
# CREATE API ROUTE FILES
# ============================================

cat > app/api/tools/validate/route.ts << 'EOF'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { idea } = await req.json()

  if (!idea) {
    return NextResponse.json({ error: 'No idea provided' }, { status: 400 })
  }

  // TODO: call OpenAI here using lib/openai.ts
  return NextResponse.json({
    marketPotential: 'High',
    competition: 'Medium',
    feasibility: 'High',
    buildTime: '6–8 weeks',
    verdict: 'Worth pursuing'
  })
}
EOF

cat > app/api/tools/estimate/route.ts << 'EOF'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { description } = await req.json()

  if (!description) {
    return NextResponse.json({ error: 'No description provided' }, { status: 400 })
  }

  // TODO: MVP cost estimator logic
  return NextResponse.json({ message: 'Coming soon' })
}
EOF

# ============================================
# CREATE UI COMPONENTS
# ============================================

cat > components/ui/Button.tsx << 'EOF'
import React from 'react'

type ButtonVariant = 'main' | 'outline' | 'ghost'

interface ButtonProps {
  variant?: ButtonVariant
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export default function Button({
  variant = 'main',
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const base = 'px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer'

  const variants = {
    main:    'bg-accent text-white border-none hover:opacity-90',
    outline: 'bg-transparent text-primary border border-border2 hover:border-accent',
    ghost:   'bg-transparent text-primary border border-border2 hover:bg-surface',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
EOF

cat > components/ui/SectionTag.tsx << 'EOF'
interface SectionTagProps {
  label: string
}

export default function SectionTag({ label }: SectionTagProps) {
  return (
    <span className="inline-block bg-surface border border-border2 rounded-full px-4 py-1 text-xs text-muted tracking-wider mb-5">
      {label}
    </span>
  )
}
EOF

cat > components/ui/SectionHeader.tsx << 'EOF'
interface SectionHeaderProps {
  tag?: string
  title: string
  dimTitle?: string
  subtitle?: string
}

export default function SectionHeader({
  tag,
  title,
  dimTitle,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mb-12">
      {tag && (
        <span className="inline-block bg-surface border border-border2 rounded-full px-4 py-1 text-xs text-muted tracking-wider mb-5">
          {tag}
        </span>
      )}
      <h2 className="font-syne text-4xl font-extrabold tracking-tight text-primary leading-tight mb-3">
        {title}
        {dimTitle && (
          <>
            <br />
            <span className="text-dim">{dimTitle}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p className="text-muted text-base font-light leading-relaxed max-w-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}
EOF

cat > components/ui/ParticleCanvas.tsx << 'EOF'
'use client'

import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      w: 1.5 + Math.random() * 2,
      h: 4 + Math.random() * 8,
      angle: -50 + Math.random() * 100,
      alpha: 0.05 + Math.random() * 0.2,
      isAccent: Math.random() > 0.7,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate((p.angle * Math.PI) / 180)
        ctx.globalAlpha = p.alpha
        ctx.fillStyle = p.isAccent
          ? `rgba(232, 124, 62, ${p.alpha})`
          : `rgba(140, 140, 180, ${p.alpha})`
        ctx.beginPath()
        ctx.roundRect(-p.w / 2, -p.h / 2, p.w, p.h, p.w / 2)
        ctx.fill()
        ctx.restore()

        p.x += p.vx
        p.y += p.vy
        if (p.x < -20) p.x = canvas.width + 20
        if (p.x > canvas.width + 20) p.x = -20
        if (p.y < -20) p.y = canvas.height + 20
        if (p.y > canvas.height + 20) p.y = -20
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
    />
  )
}
EOF

# ============================================
# CREATE TOOL COMPONENTS (stubs)
# ============================================

cat > components/tools/ToolCard.tsx << 'EOF'
import { Tool } from '@/types'

interface ToolCardProps {
  tool: Tool
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="bg-surface border border-border rounded-xl p-5 hover:border-accent transition-colors">
      <div className="text-xs text-accent uppercase tracking-widest mb-2">{tool.category}</div>
      <h3 className="font-syne font-bold text-primary text-base mb-2">{tool.name}</h3>
      <p className="text-muted text-sm leading-relaxed mb-4">{tool.description}</p>
      <a href={`/tools/${tool.slug}`} className="text-sm text-accent hover:underline">
        Try free →
      </a>
    </div>
  )
}
EOF

cat > components/tools/ValidatorTool.tsx << 'EOF'
'use client'

import { useState } from 'react'

export default function ValidatorTool() {
  const [idea, setIdea]       = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult]   = useState<null | Record<string, string>>(null)

  const run = async () => {
    if (!idea.trim()) return
    setLoading(true)
    setResult(null)
    try {
      const res  = await fetch('/api/tools/validate', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ idea }),
      })
      const data = await res.json()
      setResult(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-bg border border-border2 rounded-2xl p-8">
      {/* Live tag */}
      <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/25 rounded-full px-3 py-1 text-xs text-accent mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        Live Demo
      </div>

      <h3 className="font-syne font-bold text-primary text-lg mb-5">
        Startup Idea Validator
      </h3>

      <label className="text-xs text-muted mb-2 block tracking-wide">
        Describe your idea
      </label>
      <textarea
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        rows={3}
        placeholder="e.g. An AI tool that automates cold email outreach for B2B sales teams..."
        className="w-full bg-surface border border-border2 rounded-xl px-4 py-3 text-primary text-sm resize-none outline-none focus:border-accent/40 leading-relaxed"
      />

      <button
        onClick={run}
        disabled={loading}
        className="w-full mt-3 bg-accent text-white py-3 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {loading ? 'Analyzing...' : 'Validate Idea →'}
      </button>

      {result && (
        <div className="mt-4 border-t border-border pt-4 space-y-3">
          {Object.entries(result).map(([key, val]) => (
            <div key={key} className="flex justify-between items-center text-sm">
              <span className="text-muted capitalize">
                {key.replace(/([A-Z])/g, ' $1')}
              </span>
              <span className="text-primary font-medium">{val}</span>
            </div>
          ))}
          <div className="mt-4 p-3 bg-accent/5 border border-accent/20 rounded-lg text-sm text-muted">
            Want us to build this?{' '}
            <a href="/contact" className="text-accent hover:underline">
              Start a project →
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
EOF

# ============================================
# CREATE PROJECT COMPONENTS (stubs)
# ============================================

cat > components/projects/ProjectCard.tsx << 'EOF'
import { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={`/projects/${project.slug}`}
      className="block bg-surface border border-border rounded-2xl overflow-hidden hover:border-border2 hover:-translate-y-1 transition-all duration-200"
    >
      <div
        className="h-40 flex items-center justify-center text-4xl"
        style={{ background: project.thumbBg }}
      >
        {project.emoji}
      </div>
      <div className="p-5">
        <div className="text-xs text-accent uppercase tracking-widest mb-2">
          {project.type}
        </div>
        <h3 className="font-syne font-bold text-primary text-base mb-2">
          {project.name}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-surface2 border border-border text-dim px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}
EOF

cat > components/projects/ProjectGrid.tsx << 'EOF'
import ProjectCard from './ProjectCard'
import { projects } from '@/data/projects'

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}
EOF

# ============================================
# CREATE LIB FILES
# ============================================

cat > lib/supabase.ts << 'EOF'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl  = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey  = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

// Server-side client (for API routes)
export const supabaseAdmin = createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)
EOF

cat > lib/openai.ts << 'EOF'
import OpenAI from 'openai'

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})
EOF

cat > lib/prompts.ts << 'EOF'
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
You are a technical project manager. Estimate the MVP cost and timeline for this product.
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
}
EOF

# ============================================
# CREATE DATA FILES
# ============================================

cat > data/tools.ts << 'EOF'
import { Tool } from '@/types'

export const tools: Tool[] = [
  {
    slug:        'startup-validator',
    name:        'Startup Idea Validator',
    description: 'Enter your startup idea and get an instant AI analysis — market potential, competition level, MVP feasibility, and build time.',
    category:    'Strategy',
    status:      'live',
  },
  {
    slug:        'landing-copy',
    name:        'Landing Page Copy',
    description: 'Generate high-converting landing page headlines, subheadings, and CTAs for your product.',
    category:    'Copywriting',
    status:      'coming-soon',
  },
  {
    slug:        'mvp-estimator',
    name:        'MVP Cost Estimator',
    description: 'Describe your product and get a realistic cost and timeline estimate for building an MVP.',
    category:    'Planning',
    status:      'coming-soon',
  },
  {
    slug:        'business-name',
    name:        'Business Name Generator',
    description: 'Generate unique, memorable business names based on your industry and values.',
    category:    'Branding',
    status:      'coming-soon',
  },
]
EOF

cat > data/projects.ts << 'EOF'
import { Project } from '@/types'

export const projects: Project[] = [
  {
    slug:        'ai-customer-support',
    name:        'AI Customer Support Assistant',
    type:        'AI Systems · Automation',
    description: 'Automates customer queries and improves response time for support teams.',
    tags:        ['OpenAI API', 'Automation', 'Next.js'],
    emoji:       '🤖',
    thumbBg:     '#0f1a12',
  },
  {
    slug:        'creator-analytics',
    name:        'Creator Analytics Dashboard',
    type:        'Web Platform · Dashboard',
    description: 'Helps creators track engagement, growth, and revenue insights in real time.',
    tags:        ['Dashboard', 'Next.js', 'Supabase'],
    emoji:       '📊',
    thumbBg:     '#0f1420',
  },
  {
    slug:        'startup-landing',
    name:        'Startup Product Landing',
    type:        'Product Design · Branding',
    description: 'Product-focused website and interface built to help an early-stage startup launch faster.',
    tags:        ['Product Design', 'Branding'],
    emoji:       '🚀',
    thumbBg:     '#1a100a',
  },
]
EOF

# ============================================
# CREATE TYPES
# ============================================

cat > types/index.ts << 'EOF'
export interface Tool {
  slug:        string
  name:        string
  description: string
  category:    string
  status:      'live' | 'coming-soon'
}

export interface Project {
  slug:        string
  name:        string
  type:        string
  description: string
  tags:        string[]
  emoji:       string
  thumbBg:     string
}

export interface Lead {
  name:    string
  email:   string
  message: string
}

export interface ToolUsage {
  toolSlug:  string
  inputText: string
  ipHash?:   string
}
EOF

# ============================================
# INSTALL NEW PACKAGES
# ============================================

echo ""
echo "📦 Installing new packages..."
npm install openai @supabase/supabase-js resend

# ============================================
# DONE
# ============================================

echo ""
echo "✅ Done! New structure created."
echo ""
echo "Next steps:"
echo "  1. Add your keys to .env.local"
echo "  2. Run: npm run dev"
echo "  3. Start building components"
echo ""
echo "Files created:"
echo "  app/tools/page.tsx"
echo "  app/tools/[slug]/page.tsx"
echo "  app/projects/page.tsx"
echo "  app/projects/[slug]/page.tsx"
echo "  app/api/tools/validate/route.ts"
echo "  app/api/tools/estimate/route.ts"
echo "  components/ui/Button.tsx"
echo "  components/ui/SectionTag.tsx"
echo "  components/ui/SectionHeader.tsx"
echo "  components/ui/ParticleCanvas.tsx"
echo "  components/tools/ToolCard.tsx"
echo "  components/tools/ValidatorTool.tsx"
echo "  components/projects/ProjectCard.tsx"
echo "  components/projects/ProjectGrid.tsx"
echo "  lib/supabase.ts"
echo "  lib/openai.ts"
echo "  lib/prompts.ts"
echo "  data/tools.ts"
echo "  data/projects.ts"
echo "  types/index.ts"
