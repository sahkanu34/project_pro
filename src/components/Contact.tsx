import { Mail, Link2, FileText } from 'lucide-react'
import { profile } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="border-b border-line">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-signal">05 — Get in touch</p>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-[36px] font-medium leading-tight tracking-tight text-ink md:text-[46px]">
          Let's build something that works.
        </h2>
        <p className="mt-4 font-mono text-[13px] text-ink-faint">{profile.email} · {profile.phone}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 bg-ink px-6 py-3 font-mono text-[13px] text-paper transition-colors hover:bg-signal"
          >
            <Mail size={15} /> Email me
          </a>
          <a
            href="public\Suraj_Kanu_AIEng_ATS_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-ink px-6 py-3 font-mono text-[13px] text-ink transition-colors hover:border-signal hover:text-signal"
          >
            <FileText size={15} /> Resume
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-ink px-6 py-3 font-mono text-[13px] text-ink transition-colors hover:border-signal hover:text-signal"
          >
            <Link2 size={15} /> LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-ink px-6 py-3 font-mono text-[13px] text-ink transition-colors hover:border-signal hover:text-signal"
          >
            <Link2 size={15} /> GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
