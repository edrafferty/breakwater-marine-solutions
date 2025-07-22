import { defaultMetadata } from '@/lib/metadata'
import CustomsPageClient from './CustomsPageClient'

export const metadata = {
  ...defaultMetadata,
  title: 'Customs & Regulatory | Breakwater Marine Solutions',
  description:
    'Ensuring vessels meet Canadian regulatory requirements swiftly and without delays.',
}

export default function Page() {
  return <CustomsPageClient />
}
