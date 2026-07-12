import { motion } from 'framer-motion'
import { stack } from '../data'
import SectionHeading from './SectionHeading'

export default function TechStack() {
  return (
    <section id="stack" className="border-b border-line">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading index="03" label="Toolchain" title="Tech stack" />

        <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="bg-paper p-6"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-signal">{group.category}</p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                {group.items.map((item) => (
                  <span key={item} className="font-mono text-[13px] text-ink-dim">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
