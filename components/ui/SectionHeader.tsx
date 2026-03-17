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
