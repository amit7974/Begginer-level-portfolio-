import { motion } from 'framer-motion'
import { personalInfo } from '../constants/data'

/**
 * Pulsing "open for work" style status badge.
 * Text/visibility driven by personalInfo.openForFreelance in constants/data.ts.
 */
export default function AvailabilityBadge({ className = '' }: { className?: string }) {
  const label = personalInfo.openForFreelance ? 'Open for Freelancing' : 'Open to Full-time Roles'

  return (
    <motion.span
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs sm:text-sm font-medium ${className}`}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
      </span>
      {label}
    </motion.span>
  )
}
