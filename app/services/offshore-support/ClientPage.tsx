'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'Breakwater&apos;s support during our offshore wind project was outstanding. Every vessel movement was executed flawlessly.',
    author: 'Laura Chen, WindWave Energy',
  },
  {
    quote:
      'Their logistics team ensured seamless crew changes in challenging sea states. A reliable partner for offshore operations.',
    author: 'Mike D., OceanGrid Operations Manager',
  },
  {
    quote:
      'We trusted Breakwater to coordinate our staging operations for an onshore turbine installation. They exceeded expectations.',
    author: 'Sofia Reyes, NorthWind Projects',
  },
]

export default function OffshoreSupportClientPage() {
  return (
    <div className="relative bg-white text-gray-900">
      {/* Hero with parallax effect */}
      <div className="relative h-[75vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/services/offshore2.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              Offshore Wind Support
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Supporting North America%apos;s wind energy transition with marine
              logistics, vessel coordination, and agency services.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Service Description */}
      <section className="py-16 px-4 max-w-5xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4">
            Full-Service Wind Logistics
          </h2>
          <p className="text-lg">
            Breakwater Marine Solutions specializes in logistics and port
            agency services for onshore and offshore wind energy projects across
            North America. From crew transfers and vessel clearances to staging
            operations and cargo coordination, we ensure your renewable energy
            projects proceed smoothly.
          </p>
          <p className="text-lg mt-4">
            Our team works closely with developers, OEMs, and contractors to
            support every phase of a wind project—whether you&apos;re laying cable
            offshore, transporting turbine components, or managing crew logistics
            at remote ports.
          </p>
        </motion.div>
      </section>

      {/* Testimonial Carousel */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-2xl font-semibold mb-6">What Our Clients Say</h3>
          <div className="space-y-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white shadow-md p-6 rounded-lg"
              >
                <p className="text-lg italic text-gray-700">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-2 text-sm font-medium text-gray-900">
                  — {t.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
