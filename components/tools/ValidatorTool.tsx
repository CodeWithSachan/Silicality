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
