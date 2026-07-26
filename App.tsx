import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import GitHubStats from './components/GitHubStats'
import ResumeSection from './components/ResumeSection'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import StickyDownloadCV from './components/StickyDownloadCV'
import BackToTop from './components/BackToTop'
import ScrollProgressBar from './components/ScrollProgressBar'
import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'
import { useDarkMode } from './hooks/useDarkMode'

export default function App() {
  const { isDark, toggle } = useDarkMode()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <LoadingScreen show={loading} />
      <CustomCursor />
      <ScrollProgressBar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.6 }}
      >
        <Navbar isDark={isDark} toggleDark={toggle} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Achievements />
          <GitHubStats />
          <ResumeSection />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </motion.div>

      <WhatsAppButton />
      <StickyDownloadCV />
      <BackToTop />
    </>
  )
}
