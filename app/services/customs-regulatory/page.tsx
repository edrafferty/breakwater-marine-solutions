'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CustomsPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero */}
      <div className="relative h-[75vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/services/cbsa-boat.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <div className="relative z-10 flex items-center justify-center h-full px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold">Customs & Regulatory</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              Ensuring vessels meet Canadian regulatory requirements swiftly and without delays.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 px-4 max-w-6xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4">Navigating Border Controls</h2>
          <p className="text-lg">
            We work directly with CBSA, Transport Canada, and other federal agencies to make port arrivals seamless. Whether
            it's pre-arrival documentation or vessel inspections, our experienced team ensures compliance every step of the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Image
            src="/services/cbsa-boat.jpg"
            alt="CBSA Patrol"
            width={400}
            height={300}
            className="rounded-lg shadow"
          />
          <Image
            src="/services/declaration.jpg"
            alt="Declaration Forms"
            width={400}
            height={300}
            className="rounded-lg shadow"
          />
          <Image
            src="/services/regulations-compliance.jpg"
            alt="Compliance Meeting"
            width={400}
            height={300}
            className="rounded-lg shadow"
          />
        </div>
      </section>
    </div>
  )
}
