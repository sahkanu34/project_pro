import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../theme'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="flex h-8 w-8 items-center justify-center border border-line text-ink-dim transition-colors hover:border-signal hover:text-signal"
    >
      {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
    </button>
  )
}
