import { useState } from 'react'
import { Menu, X, FileText } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#stack', label: 'Stack' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-mono text-[13px] tracking-tight text-ink">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal" />
          AI Systems
        </a>

        <nav className="hidden gap-8 font-mono text-[12.5px] text-ink-dim md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-signal">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 font-mono text-[12.5px] text-ink-dim transition-colors hover:text-signal md:inline-flex"
          >
            {/* <FileText size={14} /> Resume */}
          </a>
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-none border border-ink px-4 py-2 font-mono text-[12px] text-ink transition-colors hover:border-signal hover:bg-signal hover:text-paper md:inline-block"
          >
            Get in touch
          </a>

          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-6 py-4 font-mono text-sm md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="py-2 text-ink-dim" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 py-2 text-ink-dim"
            onClick={() => setOpen(false)}
          >
            <FileText size={14} /> Resume
          </a>
        </nav>
      )}
    </header>
  )
}
