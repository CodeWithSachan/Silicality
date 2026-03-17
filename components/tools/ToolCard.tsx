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
