"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { partners } from "@/data/partners"

export default function PartnersClient() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Industry Partners</h1>
        <p className="text-lg text-gray-600">
          Building strong relationships with trusted organizations in the marine industry.
        </p>
      </div>

      {/* Partner Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            className="rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition bg-white p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div whileHover={{ scale: 1.1 }}>
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={120}
                className="mb-4 object-contain"
              />
            </motion.div>
            <h2 className="text-xl font-semibold mb-2">{partner.name}</h2>
            <p className="text-gray-600 mb-4">{partner.description}</p>
            <Link
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              Visit Website
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
