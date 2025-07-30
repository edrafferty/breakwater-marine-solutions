'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  const services = [
    {
      title: 'Ship Agency',
      slug: 'ship-agency',
      description:
        'Comprehensive agency representation for all vessel types—ensuring timely clearances, efficient coordination, and regulatory compliance.',
      image: '/services/port_agency_services.jpg',
    },
    {
      title: 'Crew Change & Logistics',
      slug: 'crew-change-logistics',
      description:
        'From immigration to accommodations, we manage every detail of crew travel, transfers, and logistics in Eastern Canada.',
      image: '/services/husbandry.jpg',
    },
    {
      title: 'Offshore Support',
      slug: 'offshore-support',
      description:
        'We support offshore projects including wind, subsea, cable, and heavy lift vessels with tailored port logistics.',
      image: '/services/heavy_lift.jpg',
    },
    {
      title: 'Customs & Regulatory',
      slug: 'customs-regulatory',
      description:
        'Expert navigation of CBSA, Transport Canada, and port authority requirements for smooth vessel and cargo movements.',
      image: '/services/cbsa-badge.jpg',
    },
    {
      title: 'Supply Chain Coordination',
      slug: 'supply-chain-coordination',
      description:
        'Integrated logistics support including warehousing, spares delivery, and vendor coordination.',
      image: '/services/supply_chain.jpg',
    },
    {
      title: 'Emergency Response',
      slug: 'emergency-response',
      description:
        '24/7 support for unscheduled port calls, crew emergencies, and contingency planning.',
      image: '/services/emergency.jpg',
    },
  ]

  return (
    <main className="bg-white text-gray-800 scroll-smooth">
      {/* ✅ Hero Section */}
      <section className="relative h-screen w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/35 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Breakwater Marine Solutions
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl drop-shadow">
            Supporting vessel operations across Eastern Canada with expert
            husbandry, logistics, and compliance services.
          </p>
          <a
            href="#services"
            className="mt-8 inline-block bg-blue-800 hover:bg-blue-900 text-white text-lg font-medium py-3 px-6 rounded-lg transition"
          >
            Our Services
          </a>
        </div>

        {/* ✅ Overlapping Get in Touch Box */}
        <div className="absolute bottom-[-10rem] md:bottom-[-7rem] right-4 md:right-12 z-10">
          <div className="bg-blue-900 text-white p-6 rounded-lg shadow-2xl w-full max-w-xs md:w-[495px] md:h-[220px]">
            <div className="mb-2">
              <h3 className="text-xl font-bold">Ready for Smooth Sailing?</h3>
              <div
                className="h-0.5 bg-red-600 mt-1"
                style={{ width: 'calc(100% - 8rem)' }}
              />
            </div>
            <p className="text-sm mb-4 mt-2">
              With decades of hands-on experience, we ensure your port calls are
              efficient, compliant, and stress-free — so you can focus on what
              matters most.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-900 font-semibold py-2 px-4 rounded hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Spacer */}
      <div className="h-10 md:h-10" />

            {/* ✅ Custom Port Coverage Section */}
      <section
        id="stats-section"
        className="relative py-20 bg-black text-white"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/dark_water.jpg"
            alt="Maritime port background"
            fill
            className="object-cover opacity-30"
            style={{ color: 'transparent' }}
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Eastern Canadian Port Coverage</h2>
              <p className="text-gray-300 mb-6">
                We proudly serve all major ports across Atlantic Canada, providing full vessel agency support in:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Halifax, NS', 'Sydney, NS', 'Point Tupper, NS', 'Mulgrave, NS',
                  'Sheet Harbour, NS', 'Aulds Cove, NS', 'Little Narrows, NS',
                  'Summerside, PE', 'Charlottetown, PE', 'Belledune, NB',
                  'Saint John, NB', 'Bayside, NB', 'St. Johns, NL',
                ].map((port) => (
                  <div key={port} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <p>{port}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-gray-300">
                Whether your call is at a major terminal or a smaller harbor, Breakwater Marine ensures local knowledge, trusted contacts, and immediate response capability.
              </p>
              <p className="mt-4 text-gray-300 italic">
                Looking for support at a different location? Let&apos;s talk — we are growing our reach continuously.
              </p>
            </div>
            <div>
              <p className="text-blue-500 font-medium mb-2">Service Excellence and Industry Expertise</p>
              <h2 className="text-4xl font-bold mb-6">Your Vessel, Our Priority.</h2>
              <p className="text-gray-300 mb-6">
                Our team comprises knowledgeable professionals with decades of experience in the maritime industry. We take pride in fostering long-term relationships with our clients, some of whom have trusted us with their vessel agency needs for over 20 years.
              </p>
              <p className="text-gray-300 mb-8">
                 Our reputation is built on a foundation of trust, reliability, and unmatched industry expertise. We are committed to being a stabilizing presence &mdash;{" "}
                 <span className="italic">&quot;calming the water&quot;</span>{" "}
                 &mdash; for shipowners, operators, and captains navigating complex port requirements.
                Our reputation is built on a foundation of trust, reliability, and unmatched industry expertise. We are committed to being a stabilizing presence &mdash; &quot;calming the water&quot; &mdash; for shipowners, operators, and captains navigating complex port requirements.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded font-medium hover:bg-blue-700 transition-colors">
                DISCOVER MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Spacer */}
      <div className="h-10 md:h-10" />

      {/* ✅ Services Section */}
      <section
        id="services"
        className="relative py-24 px-4"
        style={{ backgroundAttachment: 'fixed' }}
      >
        <div className="absolute inset-0 opacity-20 z-0">
          <Image
            src="/services/over_bow.jpg"
            alt="Background"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        <div className="relative max-w-7xl mx-auto z-10">
          <h2 className="text-4xl font-bold text-blue-900 text-center lg:text-left mb-12">
            Our Services
          </h2>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative w-full h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-block mt-2 bg-blue-800 hover:bg-blue-900 text-white text-sm font-medium py-2 px-4 rounded transition"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ✅ Spacer */}
      <div className="h-10 md:h-10" />
      
      <section
        id="benefits-section"
        alpha-section-id="benefits-section"
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" style={{ opacity: 1, transform: 'none' }}>
            <p className="text-blue-600 font-medium mb-2">Vision for the Future</p>
            <h2 className="text-4xl font-bold text-gray-900">
              Navigating Excellence in Maritime Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Card 1 */}
            <div className="flex items-start space-x-4" style={{ opacity: 1, transform: 'none' }}>
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 text-2xl">🚢</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Diversification and Innovation
                </h3>
                <p className="text-gray-600">
                  Recognizing the changing landscape of the maritime industry, we are
                  committed to diversifying our services. Breakwater Marine Solutions
                  envisions extending its reach within the logistics supply chain,
                  exploring new opportunities that go beyond traditional vessel agency work.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start space-x-4" style={{ opacity: 1, transform: 'none' }}>
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 text-2xl">🤝</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Commitment to Integrity and Compliance
                </h3>
                <p className="text-gray-600">
                  At Breakwater Marine Solutions, integrity is a non-negotiable value.
                  We are dedicated to maintaining a fair and competitive environment
                  in all our endeavors and strictly adhering to all applicable laws
                  and regulations governing our employees' activities in Canada.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Paragraph */}
          <div className="mt-12 text-center" style={{ opacity: 1, transform: 'none' }}>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Breakwater Marine Solutions is not just a marine vessel agency; it is a
              beacon of excellence in the maritime services industry. We look forward
              to navigating new horizons, serving our clients, and contributing to the
              continued growth of the maritime sector in Nova Scotia and beyond.
            </p>
          </div>
        </div>
      </section>
           {/* ✅ Spacer */}
      <div className="h-10 md:h-10" />  

    </main>
  )
}
