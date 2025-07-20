import { Metadata } from "next"
import { defaultMetadata } from "@/lib/metadata"

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Terms of Use | Breakwater Marine Solutions",
  description:
    "Review the Terms of Use for Breakwater Marine Solutions, outlining your rights, responsibilities, and our website policies.",
  openGraph: {
    title: "Terms of Use | Breakwater Marine Solutions",
    description:
      "Review the Terms of Use for Breakwater Marine Solutions, outlining your rights, responsibilities, and our website policies.",
    url: "https://breakwatermarine.ca/terms",
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

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Terms of Use</h1>

      <p className="text-gray-700 mb-4">
        By accessing and using this website, you agree to be bound by the following terms and
        conditions. If you do not agree with any part of these terms, please do not use our website.
      </p>

      <h2 className="text-xl font-semibold text-blue-800 mt-8 mb-2">1. Use of the Website</h2>
      <p className="text-gray-700 mb-4">
        This website is provided for informational purposes only. You may not use it for any
        unlawful or prohibited activity. You agree not to use this site in a way that could impair
        its functionality or interfere with other users’ access.
      </p>

      <h2 className="text-xl font-semibold text-blue-800 mt-8 mb-2">2. Intellectual Property</h2>
      <p className="text-gray-700 mb-4">
        All content on this site, including text, graphics, logos, and images, is the property of
        Breakwater Marine Solutions or its content suppliers, and is protected by applicable
        intellectual property laws.
      </p>

      <h2 className="text-xl font-semibold text-blue-800 mt-8 mb-2">3. Disclaimer</h2>
      <p className="text-gray-700 mb-4">
        We strive to ensure that the information on this website is accurate and up to date.
        However, we make no warranties or representations as to its accuracy, and we assume no
        liability for any errors or omissions.
      </p>

      <h2 className="text-xl font-semibold text-blue-800 mt-8 mb-2">4. External Links</h2>
      <p className="text-gray-700 mb-4">
        Our website may contain links to third-party websites. Breakwater Marine Solutions is not
        responsible for the content or accuracy of those sites and does not endorse any external
        content.
      </p>

      <h2 className="text-xl font-semibold text-blue-800 mt-8 mb-2">5. Changes to Terms</h2>
      <p className="text-gray-700 mb-4">
        We may update these Terms of Use at any time. Your continued use of the website after
        changes are posted constitutes your acceptance of those changes.
      </p>

      <h2 className="text-xl font-semibold text-blue-800 mt-8 mb-2">6. Contact Information</h2>
      <p className="text-gray-700">
        If you have any questions about these Terms of Use, please contact us at{" "}
        <a href="mailto:ops@breakwatermarine.ca" className="text-blue-700 underline">
          ops@breakwatermarine.ca
        </a>.
      </p>
    </main>
  )
}
