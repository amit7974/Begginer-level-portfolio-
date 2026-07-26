import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Download } from 'lucide-react'
import { personalInfo } from '../constants/data'
import AvailabilityBadge from './AvailabilityBadge'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ isDark, toggleDark }: { isDark: boolean; toggleDark: () => void }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-2' : 'py-4 bg-transparent'
      }`}
    >
      <nav className="container-px flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="#home" className="font-display font-extrabold text-xl gradient-text">
            {personalInfo.name.split(' ').map((n) => n[0]).join('')}<span className="sr-only">{personalInfo.name}</span>
          </a>
          <AvailabilityBadge className="hidden md:inline-flex !py-1" />
        </div>

        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-secondary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="w-9 h-9 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href={personalInfo.resumeUrl}
            download
            className="btn-glow inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-grad-primary text-white text-sm font-semibold"
          >
            <Download size={14} /> Resume
          </a>
        </div>

        <button
          className="lg:hidden w-9 h-9 flex items-center justify-center"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden glass mx-4 mt-2 rounded-2xl overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-3 text-sm font-medium">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block py-1">
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3 pt-2">
                <button onClick={toggleDark} className="w-9 h-9 rounded-full glass flex items-center justify-center">
                  {isDark ? <Sun size={16} /> : <Moon size={16} />}
                </button>
                <a href={personalInfo.resumeUrl} download className="flex-1 text-center btn-glow px-4 py-2 rounded-lg bg-grad-primary text-white font-semibold">
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
