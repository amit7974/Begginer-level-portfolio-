import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { personalInfo } from '../constants/data'

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    `Hi Amit,\nI saw your portfolio and would like to discuss a job opportunity.`
  )
  const href = `https://wa.me/${personalInfo.whatsapp}?text=${message}`

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl animate-glow"
    >
      <FaWhatsapp size={28} />
      <span className="sr-only">Message Amit on WhatsApp</span>
    </motion.a>
  )
}
