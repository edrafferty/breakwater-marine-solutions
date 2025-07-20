"use client"

import Head from "next/head"

export default function SeoSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Breakwater Marine Solutions",
    url: "https://breakwatermarine.ca",
    logo: "https://breakwatermarine.ca/favicon.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-902-579-9140",
      contactType: "Customer Service",
      areaServed: "CA",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "563 Lockview Road",
      addressLocality: "Fall River",
      addressRegion: "NS",
      postalCode: "B2T 1J1",
      addressCountry: "CA",
    },
    sameAs: [
      "https://www.linkedin.com/company/breakwater-marine",
      "https://twitter.com/breakwaterops"
    ]
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  )
}
