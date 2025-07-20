import React from "react"

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          Calming the water for your port calls
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl drop-shadow">
          Supporting vessel operations across Eastern Canada with expert husbandry, logistics, and compliance.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  )
}
