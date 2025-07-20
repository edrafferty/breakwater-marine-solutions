import { Metadata } from "next"
import { defaultMetadata } from "@/lib/metadata"

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Privacy Policy | Breakwater Marine Solutions",
  description:
    "Learn how Breakwater Marine Solutions collects, uses, and protects your personal information in accordance with our privacy practices.",
  openGraph: {
    title: "Privacy Policy | Breakwater Marine Solutions",
    description:
      "Learn how Breakwater Marine Solutions collects, uses, and protects your personal information in accordance with our privacy practices.",
    url: "https://breakwatermarine.ca/privacy",
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

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Privacy Policy</h1>

      <p className="text-gray-700 mb-4">
        At Breakwater Marine Solutions, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect any information you provide through our website.
      </p>

      <h2 className="text-xl font-semibold text-blue-800 mt-6 mb-2">Information We Collect</h2>
      <p className="text-gray-700 mb-4">
        We may collect your name, email address, and message content when you submit a contact form. This information is used solely to respond to your inquiry and is not shared with third parties unless required by law.
      </p>

      <h2 className="text-xl font-semibold text-blue-800 mt-6 mb-2">How We Use Your Information</h2>
      <p className="text-gray-700 mb-4">
        Your personal information is used to provide customer service and respond to requests. We do not sell, lease, or distribute your personal data.
      </p>

      <h2 className="text-xl font-semibold text-blue-800 mt-6 mb-2">Data Security</h2>
      <p className="text-gray-700 mb-4">
        We take reasonable precautions to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2 className="text-xl font-semibold text-blue-800 mt-6 mb-2">Changes to This Policy</h2>
      <p className="text-gray-700 mb-4">
        We may update this Privacy Policy from time to time. All changes will be posted on this page.
      </p>

      <p className="text-gray-700">
        If you have any questions about our privacy practices, please contact us at{" "}
        <a href="mailto:ops@breakwatermarine.ca" className="text-blue-800 underline">
          ops@breakwatermarine.ca
        </a>.
      </p>
    </main>
  )
}
