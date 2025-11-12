export default function About() {
  return (
    <div className="bg-black text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">About Us</h1>
        <div className="mt-6 grid gap-10 md:grid-cols-2 items-start">
          <div>
            <p className="text-white/80">We are a specialist team delivering premium windows and doors with uncompromising craftsmanship. From residential upgrades to commercial façades, we combine engineering-grade materials with design-forward thinking.</p>
            <p className="mt-4 text-white/70">Our mission is to enhance comfort, security, and style—while ensuring every installation performs for decades.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Fast Facts</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>10+ years in fabrication & installation</li>
              <li>Energy Star compliant systems</li>
              <li>Certified installers and QA checks</li>
              <li>Custom colors, finishes, hardware</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
