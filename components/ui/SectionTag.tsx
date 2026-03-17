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
