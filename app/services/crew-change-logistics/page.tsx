'use client'// app/services/crew-change-logistics/page.tsx

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { defaultMetadata } from '@/lib/metadata'
import crewChangeImg from '@/public/services/crew_change.jpg'

export const metadata = {
  ...defaultMetadata,
  title: 'Crew Change & Logistics | Breakwater Marine Solutions',
  description:
    'Breakwater Marine Solutions provides coordinated, compliant crew change and logistics support across Eastern Canada’s ports.',
}

const services = [
  {
    title: 'Crew Transportation',
    description: 'Ground transport from vessel to airport or accommodation.',
  },
  {
    title: 'Visa & Immigration Handling',
    description: 'Support with documentation, transit visas, and clearances.',
  },
  {
    title: 'Accommodation Booking',
    description: 'Trusted hotels near port and airport hubs.',
  },
  {
    title: 'Flight & Transit Coordination',
    description: 'Timely bookings and full crew itinerary management.',
  },
  {
    title: 'Offshore Transfers',
    description: 'Launch boat or helicopter transfers to offshore assets.',
  },
  {
    title: '24/7 Crew Support',
    description: 'We’re on call to assist with urgent crew change needs.',
  },
]

const testimonials = [
  {
    quote:
      'Breakwater handled our entire crew change seamlessly. Immigration, transit, and accommodation were all spot on.',
    name: 'Operations Manager, Offshore Wind Project',
  },
  {
    quote:
      'Incredible responsiveness. We had last-minute changes and the Breakwater team had solutions ready instantly.',
    name: 'Logistics Lead, Deepwater Drilling Co.',
  },
  {
    quote:
      'Our crew was impressed with how smooth everything went. Zero stress and total professionalism.',
    name: 'Captain, Bulk Carrier Vessel',
  },
]

export default function CrewChangeLogisticsPage() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src={crewChangeImg}
          alt="Crew change operations"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center px-4"
          >
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Seamless Crew Change & Logistics
            </h1>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
              Ensuring timely, safe, and compliant crew movements across Eastern Canada’s ports.
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
          Reliable Crew Logistics — On Land and At Sea
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg max-w-3xl mx-auto text-muted-foreground"
        >
          Breakwater Marine Solutions provides tailored crew change and logistics coordination services.
          Whether offshore or dockside, we ensure your personnel transitions are smooth, timely,
          and fully compliant with regional immigration and port authority regulations.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="bg-muted py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-10">Our Core Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow p-6 h-full"
              >
                <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="bg-white py-20 px-4 md:px-8 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-8">What Our Clients Say</h3>
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="px-6"
            >
              <blockquote className="text-xl italic mb-4">
                “{testimonials[index].quote}”
              </blockquote>
              <p className="text-muted-foreground font-medium">
                — {testimonials[index].name}
              </p>
            </motion.div>
          </AnimatePresence>
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
            Let Us Coordinate Your Next Crew Change
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our dedicated operations team is available 24/7 to handle even the most time-sensitive
            logistics.
          </p>
          <Button>
            <a href="/contact" className="w-full h-full inline-block">
              Contact Us
            </a>
          </Button>
        </motion.div>
      </section>
    </div>
  )
}
