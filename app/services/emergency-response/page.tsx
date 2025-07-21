'use client'

import { motion } from 'framer-motion'

export default function EmergencyResponsePage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero with Local Video */}
      <div className="relative h-[75vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/emerg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black" />
        <div className="relative z-20 flex items-center justify-center h-full px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold">Emergency Response</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              Supporting Canada’s marine emergency response system through strategic coordination and logistics.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4">Collaboration with ECRC</h2>
          <p className="text-lg">
            Breakwater Marine Solutions is proud to support Canada’s federally regulated spill response framework via the
            <strong> Eastern Canada Response Corporation (ECRC)</strong>. We help facilitate fast access to cleanup resources and ensure vessels are compliant with their emergency preparedness obligations.
          </p>
          <p className="text-lg mt-4">
            Our team coordinates with port authorities, response contractors, and vessel operators to streamline emergency action
            plans in Eastern Canada’s busy maritime corridors.
          </p>
        </motion.div>
      </section>

      {/* Embedded YouTube Video */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="aspect-video w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/HPJ8CXBwUrg"
                title="Canada’s oil spill response system"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
