import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'

export default function Products() {
  const products = [
    { name: 'Casement Window', price: '$199+', features: ['Double glazing', 'Multi-lock system'] },
    { name: 'Sliding Window', price: '$179+', features: ['Smooth rollers', 'Mosquito mesh option'] },
    { name: 'French Door', price: '$499+', features: ['Thermal break', 'Toughened glass'] },
    { name: 'Sliding Door', price: '$449+', features: ['Soft-close', 'Panoramic view'] },
  ]
  return (
    <PageTransition className="bg-black text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="mt-2 text-white/70">Popular picks. Ask for custom sizes, colors, and hardware.</p>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
                <div className="aspect-[4/3] rounded-md bg-gradient-to-br from-zinc-700 to-zinc-900" />
                <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
                <p className="text-sm text-white/70">Starting {p.price}</p>
                <ul className="mt-3 text-sm text-white/80 list-disc pl-5 space-y-1">
                  {p.features.map((f, idx) => <li key={idx}>{f}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
