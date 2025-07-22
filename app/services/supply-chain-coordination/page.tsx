"use client"

import { motion } from 'framer-motion'

export default function SupplyChainPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero */}
      <div className="relative h-[75vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/services/supply_chain.png')" }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex items-center justify-center h-full px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold">Supply Chain Coordination</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              Delivering integrated logistics and vessel turnaround solutions across Eastern Canada.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 px-4 max-w-5xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4">Connecting Ships to Shore</h2>
          <p className="text-lg">
            From pre-arrival cargo documentation to last-mile delivery of spare parts, Breakwater Marine Solutions offers
            full-spectrum support for vessel logistics and supply chain operations.
          </p>
          <p className="text-lg mt-4">
            We coordinate with suppliers, trucking companies, port operators, and agents to keep cargo and timelines moving—
            reducing turnaround delays and optimizing operational costs.
          </p>
        </motion.div>
      </section>
    </div>
  )
}
