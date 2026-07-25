// src/components/Testimonials.tsx
import { motion } from 'framer-motion'
import { Link2 } from 'lucide-react'
import SectionHeading from './SectionHeading'

interface Testimonial {
  quote: string
  name: string
  role: string
  linkedin?: string
}

const testimonials: Testimonial[] = [
  {
    quote: 'Working with Suraj was a rewarding experience. He approached every research challenge with enthusiasm, quickly adapted to new technologies, and consistently delivered thoughtful, high-quality work.',
    name: 'Dr. Taman Upadhaya, M.S. PhD ',
    role: 'Project & Research Scientist, Cedars-Sinai | Co-Founder & Adjunct Faculty, NAAMII MAP-MED Lab',
    linkedin: 'https://www.linkedin.com/in/tamanupadhaya/',
  },
//   {
//     quote: 'Replace this with an actual quote from someone you worked with.',
//     name: 'Full Name',
//     role: 'Their role / relationship to you',
//     linkedin: 'https://www.linkedin.com/in/their-linkedin-profile/',
//   },
]

export default function Testimonials() {
  if (testimonials.length === 0) {
    return null
  }

  return (
    <section id="testimonials" className="border-b border-line">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading index="05" label="Word of Mouth" title="What people say" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => {
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="border-l-2 border-signal-dim pl-6"
              >
                <p className="text-[15px] italic leading-relaxed text-ink-dim">
                  "{t.quote}"
                </p>

                <div className="mt-4 flex items-center gap-2">
                  {t.linkedin ? (
                    <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 font-mono text-[13px] font-semibold text-ink transition-colors hover:text-signal"
                    >
                    {t.name}
                    <Link2 size={13} />
                    </a>
                  ) : (
                    <p className="font-mono text-[13px] font-semibold text-ink">{t.name}</p>
                  )}
                </div>

                <p className="font-mono text-[11.5px] text-ink-faint">{t.role}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}