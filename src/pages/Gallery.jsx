import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'

export default function Gallery() {
  return (
    <PageTransition className="bg-black text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="text-3xl font-bold">Gallery</h1>
          <p className="mt-2 text-white/70">A look at recent installations and custom fabrications.</p>
        </Reveal>
        <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <Reveal key={i} delay={i * 0.03}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br from-zinc-700 to-zinc-900">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
                <div className="absolute bottom-2 left-2 text-xs px-2 py-1 rounded bg-black/50 backdrop-blur text-white/80 opacity-0 group-hover:opacity-100 transition">Project #{i + 1}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
