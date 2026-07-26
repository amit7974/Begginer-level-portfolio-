import { motion } from 'framer-motion'
import { Download, Mail, MessageCircle, Github } from 'lucide-react'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { personalInfo } from '../constants/data'
import ParticlesBackground from './ParticlesBackground'
import AvailabilityBadge from './AvailabilityBadge'

const snippets = [
  '@RestController',
  'public class UserService {',
  '@Autowired',
  'return ResponseEntity.ok(data);',
  '@SpringBootApplication',
]

export default function Hero() {
  const typed = useTypingEffect(personalInfo.titles)
  const message = encodeURIComponent('Hi Amit,\nI saw your portfolio and would like to discuss a job opportunity.')

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <ParticlesBackground />

      {/* Floating code snippets */}
      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
        {snippets.map((s, i) => (
          <span
            key={s}
            className="absolute font-mono text-xs text-secondary/30 animate-float-slow"
            style={{
              left: `${10 + i * 18}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 1.2}s`,
            }}
          >
            {s}
          </span>
        ))}
      </div>

      <div className="container-px relative z-10 w-full">
        <AvailabilityBadge className="mb-4" />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-secondary text-sm sm:text-base mb-3"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl leading-tight gradient-text max-w-4xl"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 h-10 sm:h-12"
        >
          <span className="text-xl sm:text-3xl font-display font-semibold text-slate-700 dark:text-slate-200">
            {typed}
            <span className="inline-block w-[2px] h-6 sm:h-8 bg-secondary ml-1 align-middle animate-pulse" />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-xl text-slate-600 dark:text-slate-300 text-base sm:text-lg"
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href={personalInfo.resumeUrl} download className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-grad-primary bg-[length:200%_200%] animate-gradient-x text-white font-semibold">
            <Download size={18} /> Download Resume
          </a>
          <a href="#contact" className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-xl glass font-semibold">
            Hire Me
          </a>
          <a href={`https://wa.me/${personalInfo.whatsapp}?text=${message}`} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-xl glass font-semibold">
            <MessageCircle size={18} /> Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex items-center gap-4"
        >
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-11 h-11 rounded-full glass flex items-center justify-center hover:scale-110 hover:text-secondary transition-transform">
            <Github size={20} />
          </a>
          <a href={`mailto:${personalInfo.email}?subject=Job Opportunity`} aria-label="Email" className="w-11 h-11 rounded-full glass flex items-center justify-center hover:scale-110 hover:text-secondary transition-transform">
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 rounded-full border-2 border-slate-400/50 flex justify-center p-1"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-hidden="true"
      >
        <motion.span
          className="w-1.5 h-1.5 rounded-full bg-secondary"
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}
