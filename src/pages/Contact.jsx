import { useState } from 'react'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    setTimeout(() => setStatus('Thanks! We will get back to you shortly.'), 800)
  }

  return (
    <PageTransition className="bg-black text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-2 text-white/70">Share your requirements. Our team will respond with a tailored quote.</p>
        </Reveal>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 max-w-2xl">
          <Reveal>
            <input className="bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500" placeholder="Full name" required />
          </Reveal>
          <Reveal delay={0.05}>
            <input type="email" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500" placeholder="Email" required />
          </Reveal>
          <Reveal delay={0.1}>
            <input className="bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500" placeholder="Phone" />
          </Reveal>
          <Reveal delay={0.15}>
            <textarea rows="5" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500" placeholder="Tell us about your project" required />
          </Reveal>
          <Reveal delay={0.2}>
            <button className="px-5 py-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium hover:from-orange-400 hover:to-orange-600 transition-colors">Send</button>
          </Reveal>
          {status && <p className="text-sm text-white/80">{status}</p>}
        </form>
      </div>
    </PageTransition>
  )
}
