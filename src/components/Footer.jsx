export default function Footer() {
  return (
    <footer className="bg-black text-white/80 border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-orange-400 to-orange-600 mb-4"></div>
          <p className="text-sm">Modern windows and doors solutions crafted for performance and elegance.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-white" href="/about">About Us</a></li>
            <li><a className="hover:text-white" href="/services">Services</a></li>
            <li><a className="hover:text-white" href="/products">Products</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-white" href="/contact">Contact</a></li>
            <li><a className="hover:text-white" href="/gallery">Gallery</a></li>
            <li><a className="hover:text-white" href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Get in touch</h4>
          <p className="text-sm">Email: hello@windowworld.com</p>
          <p className="text-sm">Phone: +1 (555) 123-4567</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">© {new Date().getFullYear()} WindowWorld. All rights reserved.</div>
    </footer>
  )
}
