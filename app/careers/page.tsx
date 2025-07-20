import Image from "next/image"
import { FaEnvelope } from "react-icons/fa"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers | Breakwater Marine Solutions",
  description: "Explore career opportunities at Breakwater Marine Solutions. Join a maritime team dedicated to operational excellence across Eastern Canada.",
  openGraph: {
    title: "Careers | Breakwater Marine Solutions",
    description: "Explore career opportunities at Breakwater Marine Solutions. Join a maritime team dedicated to operational excellence across Eastern Canada.",
    url: "https://breakwatermarine.ca/careers",
    siteName: "Breakwater Marine Solutions",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Breakwater Marine Solutions",
      },
    ],
    type: "website",
  },
}

export default function CareersPage() {
  return (
    <main className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <h1 className="text-4xl font-bold text-blue-900">Join Our Team</h1>

        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          At Breakwater Marine Solutions, we’re building a team that brings clarity, reliability, and confidence to every port call.
          Founded in Eastern Canada and grounded in local knowledge, we are proud to support shipowners, operators, and crews with professional, responsive service.
        </p>

        <Image
          src="/images/careers-placeholder.jpg"
          alt="Breakwater Marine team at work"
          width={800}
          height={400}
          className="mx-auto rounded-lg shadow-md"
        />

        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Whether you’re just starting your maritime career or bringing decades of experience, Breakwater offers a collaborative
          environment where contributions are valued and growth is encouraged.
        </p>

        {/* ✅ Mailto Button */}
        <div className="text-center">
          <a
            href="mailto:careers@breakwatermarine.ca"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 text-white bg-blue-800 hover:bg-blue-900 rounded-md text-lg font-semibold transition-colors duration-200"
          >
            <FaEnvelope className="text-white text-xl" />
            Apply Now
          </a>
        </div>
      </div>
    </main>
  )
}
