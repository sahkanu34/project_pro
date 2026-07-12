export default function SectionHeading({
  index,
  label,
  title,
}: {
  index: string
  label: string
  title: string
}) {
  return (
    <div className="mb-10 flex items-baseline gap-4 border-b border-line pb-4">
      <span className="font-mono text-[12px] text-signal">{index}</span>
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">{label}</p>
        <h2 className="mt-1 font-display text-[28px] font-medium tracking-tight text-ink md:text-[32px]">
          {title}
        </h2>
      </div>
    </div>
  )
}
