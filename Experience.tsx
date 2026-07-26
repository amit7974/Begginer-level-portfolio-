import { motion } from 'framer-motion'
import { CheckCircle2, Building2, CalendarDays } from 'lucide-react'
import { experience } from '../constants/data'

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 container-px">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="font-mono text-secondary text-sm mb-2">// career</p>
        <h2 className="section-heading">
          Work <span className="gradient-text">Experience</span>
        </h2>
      </motion.div>

      <div className="mt-12 relative border-l-2 border-secondary/30 pl-8 space-y-12 max-w-3xl">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.role + i}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-grad-primary ring-4 ring-white dark:ring-darkbg" />
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-bold text-xl">{exp.role}</h3>
              <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1"><Building2 size={14} /> {exp.company}</span>
                <span className="flex items-center gap-1"><CalendarDays size={14} /> {exp.duration}</span>
              </div>
              <p className="mt-4 text-slate-600 dark:text-slate-300">{exp.summary}</p>
              <ul className="mt-4 space-y-2">
                {exp.achievements.map((a, idx) => (
                  <motion.li
                    key={a}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-2 text-sm"
                  >
                    <CheckCircle2 size={16} className="text-secondary mt-0.5 shrink-0" />
                    {a}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
