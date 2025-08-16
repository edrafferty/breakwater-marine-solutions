import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ship Agency | Breakwater Marine Solutions',
  description:
    'Expert ship agency services across Eastern Canada — from customs clearance to 24/7 vessel support, backed by deep local knowledge.',
}

export default function ShipAgencyPage() {
  return (
    <main className="text-gray-900 font-sans">
      {/* Hero Section with Parallax Background */}
      <section
        className="parallax text-white py-48 px-4 text-center"
        style={{ backgroundImage: "url('/services/port_agency_services.jpg')" }}
      >
        {/* Black overlay with 30% opacity */}
        <div className="absolute inset-0 bg-black opacity-10" />

        {/* Content */}
        <div className="max-w-4xl mx-auto drop-shadow">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Reliable Ship Agency Services
          </h1>
          <p className="text-lg md:text-xl">
            Calming the waters for your port calls—any time, any port, any vessel.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Your Trusted Ship Agent in Eastern Canada
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            At Breakwater Marine Solutions, we serve as the vital link between ship and shore—navigating regulations,
            coordinating services, and advocating on your behalf with local port authorities. Our experienced team
            ensures that every call—be it commercial, cruise, government, or offshore—is handled with precision, discretion, and 24/7 availability.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            With operations covering ports across Nova Scotia, New Brunswick, Newfoundland and PEI, we ensure
            seamless port entry and departure, full compliance with Canadian maritime law, and fast turnaround for your crew and cargo.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-gray-50 py-20 px-4 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-8 text-center">
            Core Ship Agency Services
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 text-lg">
            <li>✔ Customs and immigration clearance</li>
            <li>✔ Pilotage, towage, and berth coordination</li>
            <li>✔ Fresh water, provisions, and fuel bunkering</li>
            <li>✔ Crew changes and ground transport</li>
            <li>✔ Emergency assistance and drydock planning</li>
            <li>✔ Waste removal and regulatory compliance</li>
            <li>✔ CTNS (Canada Transportation Number Service) processing</li>
            <li>✔ Daily reporting and ETA/ETD monitoring</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-16 text-center px-4 md:px-16">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Need a reliable ship agent?</h3>
        <p className="text-lg mb-6">We’re on call 24/7 to coordinate your next Eastern Canadian port call.</p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-900 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  )
}
