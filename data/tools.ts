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
