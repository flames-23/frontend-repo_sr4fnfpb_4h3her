import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // For now, just simulate success. Hook to backend later if needed.
    setTimeout(() => setStatus('Thanks! We will get back to you shortly.'), 800)
  }

  return (
    <div className="bg-black text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-2 text-white/70">Share your requirements. Our team will respond with a tailored quote.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 max-w-2xl">
          <input className="bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500" placeholder="Full name" required />
          <input type="email" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500" placeholder="Email" required />
          <input className="bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500" placeholder="Phone" />
          <textarea rows="5" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500" placeholder="Tell us about your project" required />
          <button className="px-5 py-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium hover:from-orange-400 hover:to-orange-600">Send</button>
          {status && <p className="text-sm text-white/80">{status}</p>}
        </form>
      </div>
    </div>
  )
}
