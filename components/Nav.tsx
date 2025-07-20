// components/Nav.tsx

'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Nav() {
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-900">
          Breakwater Marine
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-blue-800">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-800">
            About
          </Link>

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
              <Link
                href="/services/ship-agency"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Ship Agency
              </Link>
              <Link
                href="/services/crew-change-logistics"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Crew Change & Logistics
              </Link>
              <Link
                href="/services/offshore-support"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Offshore Support
              </Link>
              <Link
                href="/services/customs-regulatory"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Customs & Regulatory
              </Link>
              <Link
                href="/services/supply-chain-coordination"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Supply Chain Coordination
              </Link>
              <Link
                href="/services/emergency-response"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Emergency Response
              </Link>
            </div>
          </div>

          <Link href="/team" className="hover:text-blue-800">
            Team
          </Link>
          <Link href="/contact" className="hover:text-blue-800">
            Contact
          </Link>
        </div>

        {/* Mobile hamburger - can be built later */}
        <div className="md:hidden">☰</div>
      </nav>
    </header>
  )
}
