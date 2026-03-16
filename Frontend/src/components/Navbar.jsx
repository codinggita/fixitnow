import { useState, useEffect } from 'react'
import { Menu, X, Wrench } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'How It Works', href: '#' },
    { name: 'Technicians', href: '#' },
    { name: 'Contact', href: '#' },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-primary-500 text-white p-1.5 rounded-lg">
              <Wrench size={24} />
            </div>
            <span className="font-bold text-2xl tracking-tight text-slate-900">
              FixIt<span className="text-primary-500">Now</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-primary-500 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-slate-600 hover:text-primary-500 font-medium transition-colors px-4 py-2">
              Login
            </button>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2.5 rounded-lg font-medium transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0">
              Book Repair
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary-500 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white border-b border-slate-100 shadow-lg animate-fade-in-up">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary-500 hover:bg-primary-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3 px-3">
              <button className="w-full border border-slate-200 text-slate-700 hover:bg-slate-50 px-4 py-2.5 rounded-lg font-medium transition-colors">
                Login
              </button>
              <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-4 py-2.5 rounded-lg font-medium transition-colors shadow-sm">
                Book Repair
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
