import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Briefcase, Sparkles } from 'lucide-react'
import { personalInfo, experience } from '../constants/data'

const timeline = [
  { year: '2019', label: 'Graduated B.Tech / Computer Science', icon: GraduationCap },
  { year: '2025', label: 'Began building full-stack Java projects', icon: Sparkles },
  { year: '2026', label: `${experience[0].role} · ${experience[0].company}`, icon: Briefcase },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 container-px">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-secondary text-sm mb-2">// about me</p>
        <h2 className="section-heading">
          Building things that <span className="gradient-text">actually work</span>
        </h2>
      </motion.div>

      <div className="mt-12 grid lg:grid-cols-5 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 flex flex-col items-center lg:items-start"
        >
          <div className="relative w-56 h-56 sm:w-64 sm:h-64">
            <div className="absolute inset-0 rounded-3xl bg-grad-primary bg-[length:200%_200%] animate-gradient-x rotate-6" />
            <div className="absolute inset-0 rounded-3xl glass flex items-center justify-center text-6xl font-display font-extrabold gradient-text -rotate-3">
              AK
            </div>
          </div>
          <div className="mt-6 flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <MapPin size={16} className="text-secondary" />
            {personalInfo.location}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3"
        >
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{personalInfo.objective}</p>

          <div className="mt-8 space-y-6">
            {timeline.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 shrink-0 rounded-full bg-grad-primary flex items-center justify-center text-white">
                  <t.icon size={16} />
                </div>
                <div>
                  <p className="font-mono text-xs text-secondary">{t.year}</p>
                  <p className="font-medium">{t.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
