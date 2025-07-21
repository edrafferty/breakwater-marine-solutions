import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white text-sm mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">Breakwater Marine Solutions</h3>
          <p>Calming the water for your port calls.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p>536 Lockview Road<br />Fall River, NS, B2T 1J1</p>
          <p className="mt-2">📞 +1-902-579-9140</p>
          <p>✉️ <a href="mailto:ops@breakwatermarine.ca" className="underline">ops@breakwatermarine.ca</a></p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <ul className="space-y-1">
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                X (Twitter)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center py-4 border-t border-blue-800 text-xs">
        <p>
          &copy; {new Date().getFullYear()} Breakwater Marine Solutions. All rights reserved.
        </p>
        <div className="mt-2 space-x-4">
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="/terms" className="hover:underline">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  )
}
