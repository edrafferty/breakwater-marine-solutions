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

        {/* Desktop Phone Number */}
        <div className="hidden md:block">
          <a
            href="tel:+19025799140"
            className="bg-blue-800 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-900 transition"
          >
            +1 (902) 579-9140
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
          <nav className="flex flex-col space-y-4 text-sm font-medium text-gray-700">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

            {/* Mobile Phone Button */}
            <a
              href="tel:+19025799140"
              className="inline-block bg-blue-800 text-white text-center py-2 px-4 rounded-md font-semibold hover:bg-blue-900 transition"
            >
              +1 (902) 579-9140
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
