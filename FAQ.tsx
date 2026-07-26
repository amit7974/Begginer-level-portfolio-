import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../constants/data'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24 container-px">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="font-mono text-secondary text-sm mb-2">// faq</p>
        <h2 className="section-heading">Frequently Asked Questions</h2>
      </motion.div>

      <div className="mt-10 max-w-3xl space-y-3">
        {faqs.map((f, i) => (
          <div key={f.q} className="glass rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left font-medium"
              aria-expanded={openIndex === i}
            >
              {f.q}
              <ChevronDown
                size={18}
                className={`shrink-0 transition-transform ${openIndex === i ? 'rotate-180 text-secondary' : ''}`}
              />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 overflow-hidden"
                >
                  <p className="pb-4 text-sm text-slate-500 dark:text-slate-400">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}
