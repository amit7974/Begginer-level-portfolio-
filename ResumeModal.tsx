import { AnimatePresence, motion } from 'framer-motion'
import { X, Download } from 'lucide-react'
import { personalInfo } from '../constants/data'

export default function ResumeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Resume preview"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="glass w-full max-w-3xl h-[85vh] rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h3 className="font-display font-semibold">Resume Preview</h3>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="btn-glow inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-grad-primary text-white text-sm font-medium"
                >
                  <Download size={14} /> Download
                </a>
                <button onClick={onClose} aria-label="Close preview" className="w-8 h-8 rounded-full glass flex items-center justify-center">
                  <X size={16} />
                </button>
              </div>
            </div>
            <iframe
              src={`${personalInfo.resumeUrl}#toolbar=0`}
              title="Resume PDF preview"
              className="flex-1 w-full bg-white"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
