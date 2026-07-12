import { competencies } from '../data'

export default function CompetencyStrip() {
  const loop = [...competencies, ...competencies]
  return (
    <div className="overflow-hidden border-b border-line bg-paper-2 py-3">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {loop.map((c, i) => (
          <span key={i} className="font-mono text-[11.5px] text-ink-faint">
            {c} <span className="text-line">/</span>
          </span>
        ))}
      </div>
    </div>
  )
}
