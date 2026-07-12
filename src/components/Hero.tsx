import { motion } from 'framer-motion'
import { ArrowRight, Link2 } from 'lucide-react'
import { profile, focusAreas } from '../data'
import RotatingWord from './RotatingWord'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      {/* ruled margin, like a lab notebook page */}
      <div className="pointer-events-none absolute left-[64px] top-0 hidden h-full w-px bg-line md:block" />

      <div className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:pl-24 md:pt-24">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 font-mono text-[12px] uppercase tracking-[0.18em] text-signal"
        >
          {/* Portfolio — Rev. 2026 */}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-3xl font-display text-[13vw] font-medium leading-[0.98] tracking-tight text-ink sm:text-[64px] md:text-[72px]"
        >
          Systems that <RotatingWord />,
          <br /> built for production.
          </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-7 max-w-xl text-[15.5px] leading-relaxed text-ink-dim"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[12.5px] text-ink-faint"
        >
          {focusAreas.map((f, i) => (
            <span key={f}>
              {String(i + 1).padStart(2, '0')} — {f}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-ink px-6 py-3 font-mono text-[13px] text-paper transition-colors hover:bg-signal"
          >
            Explore systems
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-ink px-6 py-3 font-mono text-[13px] text-ink transition-colors hover:border-signal hover:text-signal"
          >
            <Link2 size={15} />
            View GitHub
          </a>
          {/* <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 font-mono text-[13px] text-ink-dim underline decoration-line underline-offset-4 transition-colors hover:text-signal hover:decoration-signal"
          >
            Download résumé
          </a> */}
        </motion.div>
      </div>
    </section>
  )
}
