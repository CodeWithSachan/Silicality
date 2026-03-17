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
