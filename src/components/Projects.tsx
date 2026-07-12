import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, ExternalLink } from 'lucide-react'
import { projects } from '../data'
import SectionHeading from './SectionHeading'

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section id="projects" className="border-b border-line">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading index="02" label="Systems Shipped" title="Selected projects" />

        <div className="divide-y divide-line border-t border-line">
          {projects.map((p, i) => {
            const isOpen = openId === p.id
            return (
              <div key={p.id}>
                <button
                  onClick={() => setOpenId(isOpen ? null : p.id)}
                  className="group flex w-full items-start gap-6 py-7 text-left"
                >
                  <span className="font-mono text-[12px] text-ink-faint">{String(i + 1).padStart(2, '0')}</span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="font-display text-[18px] font-medium text-ink transition-colors group-hover:text-signal">
                        {p.title}
                      </h3>
                      <span className="text-signal">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </div>
                    <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-ink-dim">{p.summary}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10.5px] text-ink-faint"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-0 pb-8 pl-[38px] pr-4 md:pl-[38px]">
                        <ul className="space-y-2.5 border-l border-signal-dim pl-5">
                          {p.detail.map((d, di) => (
                            <li key={di} className="text-[13.5px] leading-relaxed text-ink-dim">
                              {d}
                            </li>
                          ))}
                        </ul>
                        {p.link.url && (
                          <a
                            href={p.link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-5 inline-flex items-center gap-1.5 pl-5 font-mono text-[12px] text-signal"
                          >
                            {p.link.label} <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
