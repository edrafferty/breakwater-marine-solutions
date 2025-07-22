// components/Nav.tsx

'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Nav() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-900">
          Breakwater Marine
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-blue-800">Home</Link>
          <Link href="/about" className="hover:text-blue-800">About</Link>

          {/* Services Dropdown */}
          <div
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            className="relative"
          >
            <button className="flex items-center gap-1 hover:text-blue-800">
              Services <ChevronDown size={16} />
            </button>
            <div
              className={cn(
                'absolute top-full mt-2 w-64 bg-white shadow-lg rounded-md transition-all duration-200',
                servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              )}
            >
              {[
                ['ship-agency', 'Ship Agency'],
                ['crew-change-logistics', 'Crew Change & Logistics'],
                ['offshore-support', 'Offshore Support'],
                ['customs-regulatory', 'Customs & Regulatory'],
                ['supply-chain-coordination', 'Supply Chain Coordination'],
                ['emergency-response', 'Emergency Response'],
              ].map(([path, name]) => (
                <Link
                  key={path}
                  href={`/services/${path}`}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/team" className="hover:text-blue-800">Team</Link>
          <Link href="/services/careers" className="hover:text-blue-800">Careers</Link>
          <Link href="/contact" className="hover:text-blue-800">Contact</Link>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link href="/" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" className="block py-2" onClick={() => setMobileMenuOpen(false)}>About</Link>

          {/* Mobile Services Dropdown */}
          <div className="py-2">
            <button
              className="flex items-center gap-1 w-full text-left"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Services <ChevronDown size={16} className={cn('transform transition-transform', mobileServicesOpen && 'rotate-180')} />
            </button>
            {mobileServicesOpen && (
              <div className="mt-2 ml-2">
                {[
                  ['ship-agency', 'Ship Agency'],
                  ['crew-change-logistics', 'Crew Change & Logistics'],
                  ['offshore-support', 'Offshore Support'],
                  ['customs-regulatory', 'Customs & Regulatory'],
                  ['supply-chain-coordination', 'Supply Chain Coordination'],
                  ['emergency-response', 'Emergency Response'],
                ].map(([path, name]) => (
                  <Link
                    key={path}
                    href={`/services/${path}`}
                    className="block py-1 pl-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/team" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Team</Link>
          <Link href="/services/careers" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Careers</Link>
          <Link href="/contact" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  )
}
