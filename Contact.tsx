import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Mail, MapPin, Send, CheckCircle2, MessageCircle } from 'lucide-react'
import { personalInfo } from '../constants/data'
import AvailabilityBadge from './AvailabilityBadge'

type Status = 'idle' | 'sending' | 'success' | 'error' | 'fallback'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  const sendViaMailto = () => {
    if (!formRef.current) return
    const data = new FormData(formRef.current)
    const name = data.get('name')?.toString() ?? ''
    const email = data.get('email')?.toString() ?? ''
    const subject = data.get('subject')?.toString() || 'Job Opportunity'
    const message = data.get('message')?.toString() ?? ''

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
    const href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = href
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    // If EmailJS hasn't been configured with real keys yet, skip straight to the
    // reliable mailto fallback instead of showing a broken "sending" state.
    if (!serviceId || !templateId || !publicKey) {
      sendViaMailto()
      setStatus('fallback')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 5000)
      return
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey })
      setStatus('success')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      // EmailJS failed (bad keys, network, quota, etc.) — fall back to mailto
      // so the message is never lost, rather than just showing an error.
      console.error(err)
      sendViaMailto()
      setStatus('fallback')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const message = encodeURIComponent('Hi Amit,\nI saw your portfolio and would like to discuss a job opportunity.')

  return (
    <section id="contact" className="relative py-24 container-px">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="font-mono text-secondary text-sm mb-2">// get in touch</p>
        <h2 className="section-heading">
          Let&apos;s work <span className="gradient-text">together</span>
        </h2>
        <AvailabilityBadge className="mt-2" />
      </motion.div>

      <div className="mt-12 grid lg:grid-cols-5 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-4"
        >
          <a href={`mailto:${personalInfo.email}?subject=Job Opportunity`} className="glass rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-1 transition-transform">
            <Mail className="text-secondary" />
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
              <p className="font-medium">{personalInfo.email}</p>
            </div>
          </a>
          <a
            href={`https://wa.me/${personalInfo.whatsapp}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-1 transition-transform"
          >
            <MessageCircle className="text-secondary" />
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">WhatsApp</p>
              <p className="font-medium">Chat instantly</p>
            </div>
          </a>
          <div className="glass rounded-2xl p-5 flex items-center gap-4">
            <MapPin className="text-secondary" />
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
              <p className="font-medium">{personalInfo.location}</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 glass rounded-2xl p-6 sm:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none" />
            <input type="email" name="email" required placeholder="Your Email" className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none" />
          </div>
          <input name="subject" required placeholder="Subject" className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none" />
          <textarea name="message" required rows={5} placeholder="Your Message" className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none resize-none" />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-glow w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-grad-primary bg-[length:200%_200%] animate-gradient-x text-white font-semibold disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : <><Send size={18} /> Send Message</>}
          </button>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-green-500 text-sm"
            >
              <CheckCircle2 size={16} /> Message sent — I&apos;ll get back to you soon!
            </motion.p>
          )}
          {status === 'fallback' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-green-500 text-sm"
            >
              <CheckCircle2 size={16} /> Opening your email app to send this message to {personalInfo.email} — just hit send there!
            </motion.p>
          )}
          {status === 'error' && (
            <p className="text-red-500 text-sm">
              Something went wrong. Please email me directly at{' '}
              <a href={`mailto:${personalInfo.email}`} className="underline">{personalInfo.email}</a>.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
