import { defaultMetadata } from "@/lib/metadata"
import Image from "next/image"
import PartnersClient from "./PartnersClient"


export const metadata = {
  ...defaultMetadata,
  title: "Industry Partners | Breakwater Marine Solutions",
  description:
    "Recognizing the valued industry partners we collaborate with to deliver trusted marine solutions across Atlantic Canada.",
}

export default function PartnersPage() {
  return (
<>
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
        <Image
          src="/images/partners-hero.png" // 👈 put your hero image in /public/images/
          alt="Partners Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Our Partners
          </h1>
        </div>
      </div>

      {/* Partners Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <PartnersClient />
      </div>
    </>
  );
}
