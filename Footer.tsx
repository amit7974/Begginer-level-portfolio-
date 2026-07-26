import { Github, Mail } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { personalInfo } from '../constants/data'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10 container-px">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display font-bold gradient-text text-lg">{personalInfo.name}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 italic">
            &ldquo;Code is a craft — build it like it matters.&rdquo;
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-secondary hover:scale-110 transition-transform">
            <Github size={18} />
          </a>
          <a href={`https://wa.me/${personalInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-secondary hover:scale-110 transition-transform">
            <FaWhatsapp size={18} />
          </a>
          <a href={`mailto:${personalInfo.email}`} aria-label="Email" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-secondary hover:scale-110 transition-transform">
            <Mail size={18} />
          </a>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </p>
    </footer>
  )
}
