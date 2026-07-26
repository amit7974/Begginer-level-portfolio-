import { CalendarClock } from 'lucide-react'
import { personalInfo } from '../constants/data'

export default function ScheduleInterviewCTA({ className = '' }: { className?: string }) {
  return (
    <a
      href={personalInfo.calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-secondary/50 text-secondary dark:text-secondary font-semibold hover:bg-secondary/10 transition-colors ${className}`}
    >
      <CalendarClock size={18} />
      Schedule an Interview
    </a>
  )
}
