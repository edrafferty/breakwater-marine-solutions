// data/partners.ts

export interface Partner {
  name: string
  description: string
  logo: string // local image path in /public/partners
  website: string
}

export const partners: Partner[] = [
  {
    name: "Atlantic Pilotage Authority",
    description: "The APA works with ports, the shipping industry, and other stakeholders to provide the safest and most efficient marine pilotage service possible to Atlantic Canada.",
    logo: "/partners/apa-logo.png",
    website: "https://atlanticpilotage.com",
  },
  {
    name: "Atlantic Towing Limited",
    description: "A world class marine service provider, Atlantic Towing Limited specializes in port and terminal tug services, coastal towing, emergency towing and offshore oil and gas exploration and production support.",
    logo: "/partners/atl.png",
    website: "https://www.atlantictowing.com",
  },
  {
    name: "Svitzer",
    description: "A global provider of towage and marine services, specializing in assisting large vessels with maneuvering in and out of ports and terminals",
    logo: "/partners/svitzer-logo.png",
    website: "https://www.svitzer.com",
  },
  {
    name: "Atlantic Canada Bulk Terminal",
    description: "Atlantic Canada Bulk Terminal expertly handles international cargo requirements at a competitive price. Committed to client satisfaction, our team provides efficient and timely stevedoring, terminal, and warehouse services.",
    logo: "/partners/acbt.png",
    website: "https://acbt.ca",
  },
   {
    name: "Halifax Port Authority",
    description: "A strategic port manager, with a mission to connect with global markets to create value for our customers, partners, visitors, and community.",
    logo: "/partners/hpa-logo.png",
    website: "https://porthalifax.ca",
  },
  // Add more as needed
]
