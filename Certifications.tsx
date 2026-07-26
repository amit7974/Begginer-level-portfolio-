import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '../constants/data'

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 container-px">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="font-mono text-secondary text-sm mb-2">// credentials</p>
        <h2 className="section-heading">
          Certifications
        </h2>
      </motion.div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass rounded-2xl p-6 flex items-start gap-4"
          >
            <div className="w-12 h-12 shrink-0 rounded-xl bg-grad-primary flex items-center justify-center text-white">
              <Award size={22} />
            </div>
            <div>
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{c.issuer}</p>
              <p className="text-xs font-mono text-secondary mt-1">{c.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
