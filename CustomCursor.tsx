import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches
    setEnabled(isFine)
    if (!isFine) return

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    const overCheck = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setHovering(!!target.closest('a, button, [role="button"], input, textarea'))
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', overCheck)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', overCheck)
    }
  }, [])

  if (!enabled) return null

  return (
    <motion.div
      className="pointer-events-none fixed z-[90] rounded-full border-2 border-secondary mix-blend-difference hidden md:block"
      animate={{
        x: pos.x - (hovering ? 20 : 8),
        y: pos.y - (hovering ? 20 : 8),
        width: hovering ? 40 : 16,
        height: hovering ? 40 : 16,
        opacity: 1,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 40, mass: 0.3 }}
    />
  )
}
