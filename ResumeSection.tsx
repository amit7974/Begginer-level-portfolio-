import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Download, Eye } from 'lucide-react'
import { personalInfo } from '../constants/data'
import ResumeModal from './ResumeModal'
import ScheduleInterviewCTA from './ScheduleInterviewCTA'

export default function ResumeSection() {
  const [open, setOpen] = useState(false)

  return (
    <section id="resume" className="relative py-24 container-px">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="glass rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto text-center"
      >
        <div className="w-16 h-16 mx-auto rounded-2xl bg-grad-primary flex items-center justify-center text-white mb-6">
          <FileText size={28} />
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl">
          Get my <span className="gradient-text">Resume</span>
        </h2>
        <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-md mx-auto">
          Preview it right here, or download the PDF in one click — no sign-up required.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={personalInfo.resumeUrl}
            download
            className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-grad-primary bg-[length:200%_200%] animate-gradient-x text-white font-semibold"
          >
            <Download size={18} /> Download Resume
          </a>
          <button
            onClick={() => setOpen(true)}
            className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-xl glass font-semibold"
          >
            <Eye size={18} /> Preview Resume
          </button>
          <ScheduleInterviewCTA />
        </div>
      </motion.div>

      <ResumeModal open={open} onClose={() => setOpen(false)} />
    </section>
  )
}
