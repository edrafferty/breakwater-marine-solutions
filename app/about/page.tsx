// app/about/page.tsx

import { Metadata } from 'next'
import Image from 'next/image'
import MotionFadeIn from '@/components/MotionFadeIn'
import ClientMapWrapper from '@/components/ClientMapWrapper'

export const metadata: Metadata = {
  title: 'About | Breakwater Marine Solutions',
  description:
    'Learn about Breakwater Marine Solutions – your Eastern Canada vessel support experts, rooted in local knowledge and 24/7 commitment.',
}

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section
        className="parallax text-white py-32 px-4 text-center"
        style={{ backgroundImage: "url('/images/Cargo-Docks.jpg')" }}
      >
        <h1 className="max-w-3xl mx-auto text-3xl md:text-5xl font-bold drop-shadow">
          Breakwater Marine Solutions: Calming the waters for your port calls
        </h1>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/breakwater_sea.jpg"
              alt="Breakwater at sea"
              width={600}
              height={400}
              className="rounded-lg shadow"
            />
          </div>
          <MotionFadeIn>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Story</h2>
            <p className="text-lg leading-relaxed mb-4">
              Breakwater Marine Solutions was founded to bring reliable, transparent and high-quality
              maritime support across Eastern Canada.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our team brings decades of maritime and logistics expertise to every port call. We are comprised of
              seasoned mariners, logistics specialists, and compliance experts—understanding the challenges of
              cold-water operations, tight schedules, and high regulatory standards.
            </p>
            <p className="text-lg leading-relaxed text-blue-900 font-semibold">
              We are there to calm the waters for your port calls.
            </p>
          </MotionFadeIn>
        </div>
      </section>

      {/* Experience + Mission Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Experience You Can Trust</h2>
          <p className="text-lg leading-relaxed mb-8">
            With deep knowledge of Canadian port operations, regulatory compliance, and commercial logistics,
            our team ensures vessels are supported from arrival through departure. Whether it’s crew movements,
            customs clearance, or critical spares, we manage each detail with care and precision.
          </p>

          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            To provide unmatched marine services that keep port calls efficient, compliant, and stress-free.
            We prioritize responsiveness, local knowledge, and clear communication at every stage.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white px-4 md:px-8 lg:px-16">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
          Proudly Serving Eastern Canada
        </h2>
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p className="text-lg mb-8">
            Our port operations span the Atlantic coast with strategic touchpoints for cargo, offshore support,
            and crew logistics. Explore the interactive map below to learn more.
          </p>
          <div className="h-[500px] w-full rounded-lg overflow-hidden">
            <ClientMapWrapper />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white text-center px-4 md:px-8 lg:px-16">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          Want to learn more or schedule service?
        </h3>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-900 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Talk to Our Team
        </a>
      </section>
    </main>
  )
}
