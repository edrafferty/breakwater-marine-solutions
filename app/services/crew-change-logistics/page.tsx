// app/services/crew-change-logistics/page.tsx
import { defaultMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'
import CrewChangeClientPage from './ClientPage'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Crew Change & Logistics | Breakwater Marine Solutions',
  description:
    'Breakwater Marine Solutions provides coordinated, compliant crew change and logistics support across Eastern Canada’s ports.',
}

export default function CrewChangePage() {
  return <CrewChangeClientPage />
}
