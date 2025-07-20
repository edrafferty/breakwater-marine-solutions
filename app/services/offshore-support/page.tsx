import { Metadata } from 'next'
import OffshoreSupportClientPage from '../crew-change-logistics/ClientPage'

export const metadata: Metadata = {
  title: 'Offshore Support | Breakwater Marine Solutions',
  description:
    'Providing comprehensive support for the onshore and offshore wind energy sectors across North America.',
  keywords: [
    'offshore support',
    'wind energy logistics',
    'marine agency wind projects',
    'onshore wind logistics',
    'offshore wind support',
    'North America wind services',
    'renewable energy maritime services',
    'crew change wind farms',
    'offshore staging services',
  ],
  openGraph: {
    title: 'Offshore Wind Support | Breakwater Marine Solutions',
    description:
      'Marine agency solutions for onshore and offshore wind energy logistics in North America.',
    url: 'https://www.breakwatermarine.ca/offshore-support',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Offshore Wind Support by Breakwater Marine Solutions',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Offshore Support | Breakwater Marine Solutions',
    description:
      'Providing comprehensive marine support for the wind industry across North America.',
    images: ['/opengraph-image.png'],
  },
}

export default function OffshoreSupportPage() {
  return <OffshoreSupportClientPage />
}
