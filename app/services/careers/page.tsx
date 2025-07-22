

import Image from 'next/image'
import { Metadata } from 'next'
import Link from 'next/link'
import boardingImg from '@/public/images/boarding_agent.jpg'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'Boarding Agent - Careers | Breakwater Marine Solutions',
  description: 'Join our team as a Boarding Agent and help deliver professional ship agency services in Eastern Canada.',
}

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Animated Hero */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src={boardingImg}
          alt="Boarding Agent at Work"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl text-white font-bold text-center px-4"
          >
            Join Our Crew — Now Hiring a Boarding Agent
          </motion.h1>
        </div>
      </div>

      {/* Job Description */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6">Boarding Agent / Ship Agency Representative</h2>
        <p className="mb-4">
          Breakwater Marine Solutions is seeking a proactive and professional Boarding Agent to join our growing team. This role is key to the delivery of superior port agency services to vessels calling Eastern Canadian ports.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Attend vessels during port calls and liaise with ship crews, terminal staff, and authorities</li>
          <li>Ensure smooth coordination of port formalities, supplies, and crew logistics</li>
          <li>Represent Breakwater with professionalism and commitment to client service</li>
        </ul>

        <h3 className="text-2xl font-medium mb-4">Requirements:</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Valid driver’s license and ability to travel locally</li>
          <li>Strong communication and problem-solving skills</li>
          <li>Availability to work flexible hours (vessels arrive 24/7)</li>
          <li>Marine, logistics, or operations background preferred</li>
        </ul>

        <p className="mb-6">
          If you’re passionate about the maritime industry and want to be part of a fast-growing, client-focused agency, we want to hear from you.
        </p>

        <Link href="mailto:careers@breakwatermarinesolutions.com?subject=Boarding%20Agent%20Application">
          <Button>Apply Now</Button>
        </Link>
      </section>
    </div>
  )
}
