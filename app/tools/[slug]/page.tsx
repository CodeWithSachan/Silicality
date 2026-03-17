export default function ToolPage({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h1>Tool: {params.slug}</h1>
      {/* TODO: ToolInput + ToolResult */}
    </main>
  )
}
