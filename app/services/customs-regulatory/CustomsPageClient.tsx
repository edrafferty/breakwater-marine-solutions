'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import cbsaBoat from '@/public/services/cbsa-boat.jpg'
import declaration from '@/public/services/declaration.jpg'
import compliance from '@/public/services/regulations-compliance.jpg'

export default function CustomsPageClient() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero */}
      <div className="relative h-[75vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${cbsaBoat.src})` }}
        />
        <div className="absolute inset-0 bg-black opacity-30" />
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

      {/* Intro */}
      <section className="py-16 px-4 max-w-6xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4">Navigating Border Controls</h2>
          <p className="text-lg">
            We work directly with CBSA, Transport Canada, and other federal agencies to make port arrivals seamless.
            Whether it&apos;s pre-arrival documentation or vessel inspections, our experienced team ensures compliance every step of the way.
          </p>
        </motion.div>
      </section>

      {/* Why Ship Agents Matter */}
      <section className="py-12 px-4 max-w-6xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src={declaration}
              alt="Declaration Forms"
              placeholder="blur"
              className="rounded-lg shadow"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Why Having a Ship Agent Matters</h3>
            <p className="text-lg mb-4">
              In today&apos;s highly regulated global shipping environment, the importance of working with a knowledgeable local ship agent cannot be overstated —
              especially when it comes to customs, documentation, and regulatory compliance.
            </p>
            <p className="text-lg">
              At Breakwater Marine Solutions, we act as a critical interface between your vessel and Canadian customs authorities.
              Whether you&apos;re clearing inbound cargo, managing crew declarations, or ensuring compliance with CBSA and Transport Canada regulations,
              we handle the complexities so your operations stay on course.
            </p>
          </motion.div>
        </div>

        {/* Section: Services Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">What You Get with a Trusted Ship Agent</h3>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
              <li><strong>Accurate, Timely Documentation:</strong> We ensure everything — from cargo manifests to export declarations — is submitted completely and on time.</li>
              <li><strong>Real-Time Regulatory Knowledge:</strong> We stay current with CBSA procedural updates, sanctions changes, and federal marine policies.</li>
              <li><strong>Risk Reduction & Penalty Avoidance:</strong> We proactively audit documentation and workflows to prevent issues before they arise.</li>
              <li><strong>Crew Clearance & Visa Handling:</strong> We manage immigration protocols, transit visas, and port health clearances — all under tight timelines.</li>
              <li><strong>Port Authority Liaison:</strong> We act on your behalf in all dealings with CBSA, quarantine, and local officials.</li>
              <li><strong>Terminal & Broker Coordination:</strong> We align with terminals and customs brokers for cargo inspections, holds, and releases with minimal disruption.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src={compliance}
              alt="Compliance Meeting"
              placeholder="blur"
              className="rounded-lg shadow"
            />
          </motion.div>
        </div>
      </section>

      {/* Final Statement */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            When compliance is critical and delays cost thousands...
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            You need a partner who knows the port and the paperwork. Breakwater Marine delivers peace of mind — so you can focus on the voyage ahead.
          </p>
        </motion.div>
      </section>
    </div>
  )
}
