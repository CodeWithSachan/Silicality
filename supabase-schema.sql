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
