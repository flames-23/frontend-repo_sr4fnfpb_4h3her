export default function Section({ title, eyebrow, children, id = '', className = '' }) {
  return (
    <section id={id} className={`relative py-16 sm:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {eyebrow && <p className="text-xs uppercase tracking-wider text-orange-400/80">{eyebrow}</p>}
        {title && <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">{title}</h2>}
        <div className="mt-8">
          {children}
        </div>
      </div>
    </section>
  )
}
