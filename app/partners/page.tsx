import { defaultMetadata } from "@/lib/metadata"
import PartnersClient from "./PartnersClient"

export const metadata = {
  ...defaultMetadata,
  title: "Industry Partners | Breakwater Marine Solutions",
  description:
    "Recognizing the valued industry partners we collaborate with to deliver trusted marine solutions across Atlantic Canada.",
}

export default function PartnersPage() {
  return <PartnersClient />
}
