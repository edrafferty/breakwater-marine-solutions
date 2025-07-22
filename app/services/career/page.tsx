import Image from 'next/image'
import { Metadata } from 'next'
import { defaultMetadata } from '@/lib/metadata'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Careers | Breakwater Marine Solutions',
  description: 'Explore exciting career opportunities at Breakwater Marine Solutions. Join a team built on trust, excellence, and commitment to maritime service.',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Careers | Breakwater Marine Solutions',
    description: 'Explore exciting career opportunities at Breakwater Marine Solutions.',
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: 'Careers | Breakwater Marine Solutions',
    description: 'Explore exciting career opportunities at Breakwater Marine Solutions.',
  },
}

export default function CareersPage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[65vh] w-full">
        <Image
          src="/images/careers.hero.jpg"
          alt="Careers at Breakwater Marine Solutions"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
            Join Our Crew at Breakwater Marine Solutions
          </h1>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
          A Workplace Where You Can Thrive
        </h2>
        <p className="text-lg text-muted-foreground mb-6 text-center">
          At Breakwater Marine Solutions, we believe that success at sea starts with trust and teamwork on land. We’re proud to foster a work environment where every voice is valued, every role matters, and growth is encouraged at every stage.
        </p>
        <p className="text-lg text-muted-foreground mb-10 text-center">
          Whether you’re a seasoned marine professional or just starting out, we invite you to explore opportunities to join our crew. Together, we make waves.
        </p>

        <div className="text-center">
          <p className="text-base text-muted-foreground mb-2">
            Interested in joining? Send your resume to:
          </p>
          <a
            href="mailto:careers@breakwatermarine.ca"
            className="text-blue-600 hover:underline font-medium"
          >
            careers@breakwatermarine.ca
          </a>
        </div>
      </section>

      {/* Job Postings Placeholder */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Current Openings</h3>
          <p className="text-muted-foreground mb-8">
            We're preparing new roles. Please check back soon.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            {/* Placeholder for future job cards */}
            <div className="bg-white p-6 rounded-2xl shadow-md w-full md:w-1/2">
              <h4 className="text-xl font-semibold mb-2">Marine Operations Coordinator</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Coordinate vessel arrivals, support operations, and ensure documentation compliance.
              </p>
              <Link href="/services/career/marine-operations-coordinator">
                <Button>View Details</Button>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md w-full md:w-1/2">
              <h4 className="text-xl font-semibold mb-2">Logistics & Crew Support Agent</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Manage crew changes, arrange port-side logistics, and ensure smooth operations.
              </p>
              <Link href="/services/career/logistics-crew-support-agent">
                <Button>View Details</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
