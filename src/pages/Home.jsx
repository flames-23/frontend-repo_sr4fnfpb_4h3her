import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'

export default function Home() {
  return (
    <div className="bg-black text-white">
      <section className="relative min-h-[92vh] flex items-center">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-widest text-orange-400/80">Premium Windows & Doors</p>
            <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold tracking-tight">
              Elevate Your Space with Precision Craftsmanship
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Energy-efficient builds, tailored fabrication, and flawless installs for homes and businesses.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/services" className="px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition-colors">Explore Services</Link>
              <Link to="/products" className="px-5 py-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium hover:from-orange-400 hover:to-orange-600 transition-colors">View Products</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Reveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold">Why Choose Us</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Energy Efficient',
                desc: 'Reduce bills with advanced insulation and double glazing options.',
              },
              {
                title: 'Custom Fabrication',
                desc: 'Tailored designs to match your style and architectural needs.',
              },
              {
                title: 'Professional Installation',
                desc: 'Certified experts ensure perfect fit and finish every time.',
              },
            ].map((f, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition group overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-orange-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-white/80">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </Reveal>

      <section className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <Reveal>
              <div>
                <h3 className="text-2xl font-bold">From Consultation to Installation</h3>
                <p className="mt-4 text-black/70">
                  We handle everything—site measurement, design recommendations, fabrication, and installation—so you get a beautiful result with zero hassle.
                </p>
                <div className="mt-6 flex gap-3">
                  <Link to="/about" className="px-5 py-3 rounded-md bg-black text-white font-medium hover:bg-black/80 transition-colors">About Us</Link>
                  <Link to="/contact" className="px-5 py-3 rounded-md border border-black/20 font-medium hover:bg-black/5 transition-colors">Get a Quote</Link>
                </div>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-zinc-100 to-zinc-200 shadow-sm" />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
