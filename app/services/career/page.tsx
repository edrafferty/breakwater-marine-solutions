import Image from 'next/image'
import { defaultMetadata } from '@/lib/metadata'
import { Button } from '@/components/ui/button'
import heroImg from '@/public/images/careers_hero.jpg'
import Link from 'next/link'

export const metadata = {
  ...defaultMetadata,
  title: 'Careers | Breakwater Marine Solutions',
  description:
    'Explore exciting career opportunities at Breakwater Marine Solutions. Join our supportive and professional maritime team.',
}

export default function CareersPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[75vh] w-full overflow-hidden">
        <Image
          src={heroImg}
          alt="Careers at Breakwater Marine Solutions"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
            Careers at Breakwater Marine Solutions
          </h1>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Join Our Crew</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          {"At Breakwater Marine Solutions, we foster a supportive, inclusive, and encouraging work environment where each team member plays a vital role. Whether you're an experienced mariner or looking to break into the maritime industry, we're always looking for passionate individuals to join us."}
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          {"Discover a rewarding career path with us — because we want you to thrive in an environment where you're valued, supported, and empowered to do your best work."}
        </p>
      </section>

      {/* Job Postings Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-center mb-8">Current Openings</h3>
          <div className="grid gap-6">
            {/* Accountant Posting */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="text-xl font-medium mb-2">Accountant</h4>
              <p className="text-gray-600 mb-4">
                {"We're looking for an organized and detail-oriented Accountant to join our shore-based operations team. Bring your financial expertise to a growing marine company."}
              </p>
              <Link href="/services/careers/accountant">
                <Button>View Job Details</Button>
              </Link>
            </div>

            {/* Boarding Agent Posting */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="text-xl font-medium mb-2">Boarding Agent</h4>
              <p className="text-gray-600 mb-4">
                {"Breakwater is seeking a reliable, fast-paced Boarding Agent to assist vessel operations at port. Be the key liaison between ship and shore."}
              </p>
              <Link href="/services/careers/boarding-agent">
                <Button>View Job Details</Button>
              </Link>
            </div>
          </div>

          <p className="text-center text-gray-700 mt-12">
            To apply, please send your resume and cover letter to{' '}
            <a href="mailto:careers@breakwatermarine.ca" className="text-blue-600 underline">
              careers@breakwatermarine.ca
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  )
}
