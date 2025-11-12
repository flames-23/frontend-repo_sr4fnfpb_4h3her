export default function Gallery() {
  return (
    <div className="bg-black text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Gallery</h1>
        <p className="mt-2 text-white/70">A look at recent installations and custom fabrications.</p>
        <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="aspect-[4/3] rounded-lg bg-gradient-to-br from-zinc-700 to-zinc-900" />
          ))}
        </div>
      </div>
    </div>
  )
}
