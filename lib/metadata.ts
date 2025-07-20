// app/lib/metadata.ts
import type { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  title: 'Breakwater Marine Solutions',
  description: 'Breakwater Marine Solutions delivers expert marine agency services across Eastern Canada.',
  keywords: [
    'marine agency',
    'port agency',
    'shipping services',
    'Eastern Canada marine logistics',
    'Breakwater Marine',
    'crew change',
    'cargo coordination',
    'offshore wind support',
    'ice navigation services',
  ],
  authors: [{ name: 'Breakwater Marine Solutions', url: 'https://www.breakwatermarine.ca' }],
  creator: 'Breakwater Marine Solutions',
  metadataBase: new URL('https://www.breakwatermarine.ca'),
  openGraph: {
    title: 'Breakwater Marine Solutions',
    description: 'Delivering expert marine logistics and agency support in Eastern Canada.',
    url: 'https://www.breakwatermarine.ca',
    siteName: 'Breakwater Marine Solutions',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Breakwater Marine Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Breakwater Marine Solutions',
    description: 'Expert port agency and marine support services across Eastern Canada.',
    images: ['/opengraph-image.png'],
    creator: '@breakwatermarine', // optional: update to your real handle
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}
