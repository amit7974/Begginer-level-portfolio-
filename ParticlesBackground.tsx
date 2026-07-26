import { useMemo } from 'react'

/** Lightweight CSS/SVG particle + blob background — no heavy particle library needed. */
export default function ParticlesBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }).map((_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 10 + 8,
        delay: Math.random() * 6,
      })),
    []
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-blob [animation-delay:4s]" />
      <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-blob [animation-delay:8s]" />
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-secondary/60"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
