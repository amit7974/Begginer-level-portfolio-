import { motion } from 'framer-motion'
import { achievements } from '../constants/data'
import { useCountUp } from '../hooks/useCountUp'

function Counter({ value, label }: { value: number; label: string }) {
  const { value: count, ref } = useCountUp(value)
  return (
    <div ref={ref} className="glass rounded-3xl p-8 text-center">
      <p className="font-display font-extrabold text-4xl sm:text-5xl gradient-text">{count}+</p>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{label}</p>
    </div>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 container-px">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="font-mono text-secondary text-sm mb-2">// by the numbers</p>
        <h2 className="section-heading">
          Achievements
        </h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((a) => (
          <Counter key={a.label} value={a.value} label={a.label} />
        ))}
      </div>
    </section>
  )
}
