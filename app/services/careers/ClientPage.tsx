'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import boardingImg from '@/public/images/boarding_agent.jpg'

export default function ClientPage() {
  return (
    <section className="relative w-full min-h-screen bg-white">
      <motion.div
        className="w-full h-[70vh] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: `url(${boardingImg.src})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="bg-black/60 p-6 rounded-xl max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Now Hiring: Boarding Agent</h1>
          <p className="text-lg md:text-xl">
            Be the face of Breakwater Marine Solutions at the port. Join our ship agency team.
          </p>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">Position Summary</h2>
        <p className="mb-4">
          Breakwater Marine Solutions is seeking a reliable and professional **Boarding Agent** to join our
          Ship Agency division. The successful candidate will be responsible for coordinating vessel
          arrivals/departures, liaising with port authorities, and ensuring smooth turnaround of
          commercial vessels.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2">Key Responsibilities</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Attend vessels upon arrival and departure</li>
          <li>Communicate with ship captains, port authorities, and terminal personnel</li>
          <li>Handle documentation, customs formalities, and crew arrangements</li>
          <li>Coordinate logistics including provisions, repairs, and inspections</li>
          <li>Ensure compliance with maritime regulations</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Qualifications</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Experience in marine logistics or port operations preferred</li>
          <li>Valid driver’s license and ability to attend vessels on-call</li>
          <li>Strong communication and organizational skills</li>
          <li>Familiarity with CBSA, Transport Canada, and port protocols a plus</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">What We Offer</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Competitive compensation package</li>
          <li>On-the-job training and career development</li>
          <li>Opportunity to work in a fast-paced and essential marine sector</li>
        </ul>

        <Button className="mt-6">Apply Now</Button>
      </div>
    </section>
  )
}
