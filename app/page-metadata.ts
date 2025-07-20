// app/page-metadata.ts
import { Metadata } from 'next'
import { defaultMetadata } from '@/lib/metadata'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Home | Breakwater Marine Solutions',
  description:
    'Supporting vessel operations across Eastern Canada with expert husbandry, logistics, and compliance services. We calm the water for your port calls.',
}
