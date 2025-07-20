import { Metadata } from "next"
import Image from "next/image"
import { team } from "@/data/team"
import { FaLinkedin } from "react-icons/fa"

export const metadata: Metadata = {
  title: "Our Team | Breakwater Marine Solutions",
  description:
    "Meet the experienced Breakwater Marine Solutions team—specialists in Canadian port logistics, vessel operations, and maritime compliance.",
  openGraph: {
    title: "Our Team | Breakwater Marine Solutions",
    description:
      "Meet the experienced Breakwater Marine Solutions team—specialists in Canadian port logistics, vessel operations, and maritime compliance.",
    url: "https://breakwatermarine.ca/team",
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

export default function TeamPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16 space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Meet Our Team</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Our team brings decades of experience in Canadian port logistics, vessel operations, and maritime compliance.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {team.map((member, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fadeIn"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={160}
              height={160}
              className="rounded-full mx-auto mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold text-blue-800">{member.name}</h2>
            <p className="text-gray-600">{member.role}</p>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center mt-3 text-blue-700 hover:text-blue-900 transition-colors"
              >
                <FaLinkedin className="mr-1" />
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        ))}
      </section>
            <section className="text-center border-t border-gray-200 pt-12 mt-12">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Join Our Team</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          Passionate about maritime logistics? We&apos;re always on the lookout for talented individuals to join our growing team.
        </p>
        <a
          href="mailto:careers@breakwatermarine.ca"
          className="inline-block bg-blue-800 text-white px-6 py-3 rounded-full hover:bg-blue-900 transition"
        >
          Get in Touch
        </a>
      </section>
    </main>
  )
}
