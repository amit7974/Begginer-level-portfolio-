import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects, personalInfo } from '../constants/data'

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-50, 50], [8, -8]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-50, 50], [-8, 8]), { stiffness: 200, damping: 20 })

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-3xl overflow-hidden flex flex-col"
    >
      <div className="h-44 bg-grad-primary bg-[length:200%_200%] animate-gradient-x flex items-center justify-center text-white font-display font-bold text-lg px-6 text-center">
        {project.title}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tech.map((t) => (
            <span key={t} className="text-[11px] font-mono px-2 py-1 rounded-full bg-secondary/10 text-secondary">
              {t}
            </span>
          ))}
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
        <ul className="text-sm space-y-1 mb-5 text-slate-500 dark:text-slate-400">
          {project.features.map((f) => (
            <li key={f} className="flex gap-2">
              <span className="text-secondary">▹</span>
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex gap-3 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-glow inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-slate-300 dark:border-white/20 text-sm font-medium"
          >
            <Github size={16} /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-glow inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-grad-primary text-white text-sm font-medium"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 container-px">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="font-mono text-secondary text-sm mb-2">// selected work</p>
        <h2 className="section-heading">
          Featured <span className="gradient-text">Projects</span>
        </h2>
      </motion.div>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-10 text-center"
      >
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-xl glass font-semibold"
        >
          <Github size={18} /> View more on GitHub
        </a>
      </motion.div>
    </section>
  )
}
