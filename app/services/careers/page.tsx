'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Metadata } from 'next'
import boardingImg from '@/public/images/boarding_agent.jpg'

export const metadata: Metadata = {
  title: 'Boarding Agent - Careers | Breakwater Marine Solutions',
  description: 'Join our team as a Boarding Agent and help deliver professional ship agency services in Eastern Canada.',
}

export default function BoardingAgent() {
  return (
    <div className="min-h-screen bg-white text-blue-900">
      {/* Animated Hero Section */}
      <motion.div
        className="relative h-[60vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={boardingImg}
          alt="Boarding Agent at dock"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            We're Hiring: Boarding Agent
          </h1>
        </div>
      </motion.div>

      {/* Job Details Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-6">Position: Ship Agency Representative (Boarding Agent)</h2>

          <p className="mb-4">
            Breakwater Marine Solutions is seeking a proactive and professional Boarding Agent to join our growing team. This is a vital
            frontline position involving ship boarding, crew coordination, and 24/7 communication with vessel masters, port officials,
            and clients. 
          </p>

          <h3 className="text-xl font-medium mt-6 mb-2">Responsibilities:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Attend vessels upon arrival and departure to handle all operational requirements.</li>
            <li>Ensure timely and accurate communications between ship and shore stakeholders.</li>
            <li>Submit documentation to port authorities and ensure regulatory compliance.</li>
            <li>Support crew change logistics, customs clearance, and provisioning requests.</li>
            <li>Be available for ship calls, including evenings, weekends, and holidays.</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-2">Qualifications:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Previous experience in ship agency or maritime operations preferred.</li>
            <li>Strong communication and organizational skills.</li>
            <li>Valid driver’s license and access to a vehicle.</li>
            <li>Comfortable working in a fast-paced and unpredictable environment.</li>
            <li>Familiarity with Canadian port regulations an asset.</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-2">Location & Availability:</h3>
          <p className="mb-4">Eastern Canada (flexible). This position requires availability for on-call duty and irregular hours.</p>

          <h3 className="text-xl font-medium mt-6 mb-2">How to Apply:</h3>
          <p className="mb-6">Send your resume and cover letter to <a className="text-blue-700 underline" href="mailto:careers@breakwatermarine.ca">careers@breakwatermarine.ca</a>. We thank all applicants for their interest, however only those selected for an interview will be contacted.</p>

          <Button className="mt-4">Apply Now</Button>
        </motion.div>
      </section>
    </div>
  )
}
