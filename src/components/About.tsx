import { motion } from 'framer-motion'
import { profile } from '../data'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading index="00" label="About" title="A little context" />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_260px]"
        >
          <div className="space-y-5 text-[15px] leading-relaxed text-ink-dim">
            <p>
              I'm {profile.name}, a Machine Learning Engineer and AI Researcher based in {profile.location}.
              I spend most of my time in the space between research and production: building
              retrieval-augmented generation pipelines, multi-agent systems, and fine-tuning
              workflows that need to hold up outside a notebook.
            </p>
            <p>
              My research background is in medical image analysis at NAAMII's MAPMED Lab, working
              with 3D volumetric CT/MRI data and deep learning models for automated grading tasks.
              Outside research, I build backend-heavy AI systems, RAG APIs, agent orchestration,
              document intelligence with FastAPI, Docker, and vector databases, aiming for things
              that are reproducible and easy to hand off.
            </p>
          </div>

          <div className="space-y-4 border-l border-line pl-6 font-mono text-[12.5px] text-ink-faint">
            <div>
              <p className="text-ink-faint">Based in</p>
              <p className="mt-1 text-ink">{profile.location}</p>
            </div>
            <div>
              <p className="text-ink-faint">Focus</p>
              <p className="mt-1 text-ink">RAG · Agents · Fine-Tuning · MLOps</p>
            </div>
            <div>
              <p className="text-ink-faint">Reach</p>
              <p className="mt-1 text-ink">{profile.email}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
