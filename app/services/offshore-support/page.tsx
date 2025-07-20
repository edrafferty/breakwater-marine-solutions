'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { defaultMetadata } from '@/lib/metadata'
import offshoreImg from '@/public/services/offshore2.jpg'

export const metadata = {
  ...defaultMetadata,
  title: 'Offshore Support | Breakwater Marine Solutions',
  description:
    'Providing comprehensive support for the onshore and offshore wind energy sectors across North America.',
}

export default function OffshoreSupportPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Parallax */}
      <section className="relative h-[75vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: `url(${offshoreImg.src})`,
          }}
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center px-4"
          >
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Offshore & Onshore Wind Support
            </h1>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
              Strategic marine agency services for wind power operations across North America.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold mb-6"
        >
          Enabling Wind Energy Projects from Port to Platform
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg max-w-3xl mx-auto text-muted-foreground"
        >
          Breakwater Marine Solutions supports offshore and onshore wind energy projects with
          reliable logistics coordination, crew handling, port services, and regulatory navigation.
          We partner with developers, contractors, and vessel operators to ensure safe, timely
          project execution — from staging and construction to long-term maintenance.
        </motion.p>
      </section>

      {/* Service Highlights */}
      <section className="bg-muted py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-10">Our Wind Industry Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              'Port logistics and vessel coordination',
              'Crew change and accommodation',
              'Customs and regulatory support',
              'Launch boat and helicopter services',
              'Staging and laydown area coordination',
              'Emergency logistics and 24/7 response',
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow p-6"
              >
                <h4 className="text-lg font-medium">{item}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Ready to Support Your Wind Project
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our maritime experts are standing by to help with your next wind energy deployment —
            offshore or onshore.
          </p>
          <Button asChild>
            <a href="/contact">Contact Us</a>
          </Button>
        </motion.div>
      </section>
    </div>
  )
}
