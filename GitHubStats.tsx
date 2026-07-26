import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { personalInfo } from '../constants/data'

/** Uses GitHub's public stats image services — no API key required. */
function StatsImage({ src, alt }: { src: string; alt: string }) {
  const [broken, setBroken] = useState(false)

  if (broken) {
    return (
      <div className="w-full min-h-[180px] flex flex-col items-center justify-center gap-3 text-center text-sm text-slate-400">
        <Github size={28} />
        <p>
          Stats aren&apos;t available yet — make sure{' '}
          <span className="font-mono text-secondary">{personalInfo.github.split('/').pop()}</span> is a public
          GitHub username, or update it in <span className="font-mono">constants/data.ts</span>.
        </p>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setBroken(true)}
      className="w-full h-auto"
    />
  )
}

export default function GitHubStats() {
  const username = personalInfo.github.split('/').pop()

  return (
    <section id="github-stats" className="relative py-16 container-px">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="grid md:grid-cols-2 gap-6"
      >
        <div className="glass rounded-2xl p-4 overflow-hidden flex items-center justify-center">
          <StatsImage
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=8B5CF6&icon_color=06B6D4&text_color=64748b`}
            alt={`${personalInfo.name}'s GitHub stats`}
          />
        </div>
        <div className="glass rounded-2xl p-4 overflow-hidden flex items-center justify-center">
          <StatsImage
            src={`https://streak-stats.demolab.com/?user=${username}&theme=transparent&hide_border=true&ring=8B5CF6&fire=06B6D4&currStreakLabel=2563EB`}
            alt={`${personalInfo.name}'s GitHub streak`}
          />
        </div>
      </motion.div>

      <p className="mt-4 text-center">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-secondary hover:underline"
        >
          <Github size={16} /> View full GitHub profile
        </a>
      </p>
    </section>
  )
}
