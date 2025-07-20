import { Metadata } from "next"
import { defaultMetadata } from "@/lib/metadata"

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Services | Breakwater Marine Solutions",
  description:
    "Explore the full range of maritime services offered by Breakwater Marine Solutions—port agency, husbandry, ice-navigation, wind logistics, and more.",
  openGraph: {
    title: "Services | Breakwater Marine Solutions",
    description:
      "Explore the full range of maritime services offered by Breakwater Marine Solutions—port agency, husbandry, ice-navigation, wind logistics, and more.",
    url: "https://breakwatermarine.ca/services",
    siteName: "Breakwater Marine Solutions",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Breakwater Marine Solutions",
      },
    ],
    type: "website",
    locale: "en_CA",
  },
}

const services = [
  {
    title: "Port Agency",
    description:
      "Full-service port agency representation across Eastern Canada. From pre-arrival to final departure, our team ensures smooth operations every step of the way.",
    image: "/services/port_agency_services.jpg",
  },
  {
    title: "Vessel Husbandry",
    description:
      "Support for all vessel types including tankers, bulkers, offshore vessels, and ice-class ships. We handle crew changes, bunkering, and provisions.",
    image: "/services/husbandry.jpg",
  },
  {
    title: "Ice-Navigation Support",
    description:
      "Operational coordination and logistics support for vessels navigating Canadian ice waters, including liaison with ice services and regulatory authorities.",
    image: "/services/ice-navigation.jpg",
  },
  {
    title: "Wind Logistics",
    description:
      "Marine coordination and logistical support for offshore and near-shore wind projects— including personnel transfers, cargo handling, and compliance.",
    image: "/services/wind-logistics.jpg",
  },
  {
    title: "Heavy Lift & Project Cargo",
    description:
      "Expertise in managing oversized and heavy cargo through Canadian ports, with a focus on safety, permitting, and port coordination.",
    image: "/services/heavy_lift.jpg",
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-white text-gray-800">
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Our Services</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Breakwater Marine Solutions delivers dependable and professional maritime services across Eastern Canada.
          From port agency to project logistics, we ensure seamless support for every port call.
        </p>

        {/* ✅ Background image wrapper */}
        <div className="relative">
          <div className="absolute inset-0">
            <img
              src="/services/over_bow.jpg"
              alt="Background"
              className="w-full h-full object-cover opacity-10"
            />
          </div>

          {/* ✅ Foreground services grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ title, description, image }) => (
              <div
                key={title}
                className="relative group overflow-hidden rounded-xl shadow-lg bg-white"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold drop-shadow">
                    {title}
                  </h3>
                </div>
                <div className="p-4 text-left">
                  <p className="text-sm text-gray-700">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
