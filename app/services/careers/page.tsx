import { Metadata } from 'next'
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
  title: 'Boarding Agent - Careers | Breakwater Marine Solutions',
  description: 'Join our team as a Boarding Agent and help deliver professional ship agency services in Eastern Canada.',
}

const ClientPage = dynamic(() => import('./ClientPage'), { ssr: false })

export default function CareersPage() {
  return <ClientPage />
}
