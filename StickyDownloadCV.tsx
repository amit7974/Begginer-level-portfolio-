import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download } from 'lucide-react'
import { personalInfo } from '../constants/data'

/** Sticky "Download CV" pill that appears once the hero has scrolled past. */
export default function StickyDownloadCV() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={personalInfo.resumeUrl}
          download
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 60 }}
          className="btn-glow fixed left-6 bottom-6 z-50 hidden sm:flex items-center gap-2 px-4 py-3 rounded-full bg-grad-primary bg-[length:200%_200%] animate-gradient-x text-white text-sm font-semibold shadow-2xl"
        >
          <Download size={16} />
          Download CV
        </motion.a>
      )}
    </AnimatePresence>
  )
}
