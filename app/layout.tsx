// app/layout.tsx

import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Nav from '@/components/Nav'
import { Footer } from '@/components/footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Breakwater Marine Solutions',
    template: '%s | Breakwater Marine Solutions',
  },
  description:
    'Supporting vessel operations across Eastern Canada with expert husbandry, logistics, and compliance services.',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        {/* Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="Z1aJkW-sHh_En-TTfaALqBJCjEDIfEeLjFWB--zWwq4"
        />
      </Head>
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
