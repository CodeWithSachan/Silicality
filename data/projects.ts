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
