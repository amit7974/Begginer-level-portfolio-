import { motion } from 'framer-motion'
import { skills, skillLevels } from '../constants/data'

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 container-px">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="font-mono text-secondary text-sm mb-2">// tech stack</p>
        <h2 className="section-heading">
          Skills &amp; <span className="gradient-text">Technologies</span>
        </h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: (i % 10) * 0.04, duration: 0.4 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="glass rounded-2xl p-4 flex flex-col items-center gap-2 text-center"
          >
            <s.icon size={28} className="text-secondary" />
            <span className="text-xs sm:text-sm font-medium">{s.name}</span>
            <span className="text-[10px] uppercase tracking-wide text-slate-400">{s.category}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-8">
        {skillLevels.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="flex justify-between text-sm font-medium mb-2">
              <span>{s.name}</span>
              <span className="text-secondary">{s.level}%</span>
            </div>
            <div className="skill-bar-track">
              <motion.div
                className="skill-bar-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
