import { education, certifications, positions } from '../data'
import SectionHeading from './SectionHeading'

export default function Credentials() {
  return (
    <section id="credentials" className="border-b border-line">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading index="04" label="Credentials" title="Education & recognition" />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">Education</p>
            <div className="space-y-5">
              {education.map((e) => (
                <div key={e.title} className="border-l-2 border-line pl-4">
                  <p className="text-[14px] font-medium text-ink">{e.title}</p>
                  <p className="mt-1 font-mono text-[12px] text-ink-faint">{e.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">Certifications</p>
            <div className="space-y-5">
              {certifications.map((c) => (
                <div key={c.title} className="border-l-2 border-signal-dim pl-4">
                  <p className="text-[14px] font-medium text-ink">{c.title}</p>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-ink-dim">{c.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">Positions</p>
            <div className="space-y-5">
              {positions.map((p) => (
                <div key={p.role} className="border-l-2 border-line pl-4">
                  <p className="text-[14px] font-medium text-ink">{p.role}</p>
                  <p className="mt-1 font-mono text-[12px] text-ink-faint">{p.org} · {p.year}</p>
                  <ul className="mt-2 space-y-1.5">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="text-[12.5px] leading-relaxed text-ink-dim">{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
