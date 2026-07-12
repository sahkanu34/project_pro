import { motion } from 'framer-motion'
import { experience } from '../data'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading index="01" label="Research Experience" title="Where I've worked" />

        <div className="space-y-10">
          {experience.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-[200px_1fr]"
            >
              <div>
                <p className="font-mono text-[12px] text-ink-faint">{e.start} — {e.end}</p>
                <p className="mt-1 font-mono text-[12.5px] text-signal">{e.location}</p>
              </div>
              <div>
                <h3 className="font-display text-[19px] font-medium text-ink">{e.role}</h3>
                <p className="mt-1 font-mono text-[13px] text-ink-dim">{e.org}</p>
                <ul className="mt-5 space-y-3">
                  {e.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-3 text-[14.5px] leading-relaxed text-ink-dim">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
