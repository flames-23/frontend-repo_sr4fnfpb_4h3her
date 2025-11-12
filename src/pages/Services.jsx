export default function Services() {
  const items = [
    { title: 'uPVC Windows', desc: 'Durable, low-maintenance, and energy-efficient window systems.' },
    { title: 'Aluminum Windows', desc: 'Slim profiles with modern aesthetics and strong performance.' },
    { title: 'Sliding Doors', desc: 'Smooth operation and space-saving designs for patios and balconies.' },
    { title: 'Glass Facades', desc: 'Architectural glazing for commercial and residential properties.' },
    { title: 'Repair & Maintenance', desc: 'Seal replacement, alignment, and hardware fixes.' },
  ]
  return (
    <div className="bg-black text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Services</h1>
        <p className="mt-2 text-white/70">End-to-end solutions from consultation to installation and ongoing support.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
