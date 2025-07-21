'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold text-blue-900">
          Breakwater Marine Solutions
        </Link>

        {/* Desktop Nav & Phone */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700 ml-auto">
          <nav className="flex space-x-6">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <a href="tel:+19025799140" className="text-blue-900 hover:underline">
            +1 (902) 579-9140
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 text-white px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-3 text-sm font-medium">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">Home</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">Services</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">About</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">Contact</Link>
          </nav>

          {/* CTA Phone Button */}
          <a
            href="tel:+19025799140"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-md font-semibold transition duration-200"
          >
            Call +1 (902) 579-9140
          </a>
        </div>
      )}
    </header>
  )
}
