import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `relative block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-white' : 'text-white/80 hover:text-white'
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`backdrop-blur-md border-b ${
          scrolled ? 'bg-black/60 border-white/10' : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-orange-400 to-orange-600" />
              <span className="text-white font-semibold tracking-wide">WindowWorld</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className={linkClass} onClick={() => setOpen(false)}>
                  {({ isActive }) => (
                    <span className="relative">
                      {item.label}
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 mx-auto h-0.5 w-0 bg-orange-500"
                        animate={{ width: isActive ? '100%' : 0 }}
                        transition={{ duration: 0.25 }}
                      />
                    </span>
                  )}
                </NavLink>
              ))}
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10"
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 bg-black/80">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className={linkClass} onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </header>
  )
}
