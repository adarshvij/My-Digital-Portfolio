"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/cover.png" alt="Background" fill priority className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Profile Image Placeholder */}
        <div
          className={`mb-8 transition-all duration-1000 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-lg border-4 border-accent/20">
            <Image
              src="/profile.png"
              alt="Adarsh Vij - Professional Headshot"
              width={160}
              height={160}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1
          className={`section-title mb-4 transition-all duration-1000 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Adarsh Vij
        </h1>

        <p
          className={`text-xl md:text-2xl text-accent font-medium mb-4 transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Aspiring Data Scientist | MCA Student
        </p>

        <p
          className={`text-lg text-muted-foreground mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          I build backend systems and data-driven prototypes, turning raw data into meaningful insights. Specializing in
          Data Science and Machine Learning.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent/10 transition-colors"
          >
            Get In Touch
          </a>
        </div>

        <div className="animate-bounce">
          <ChevronDown className="mx-auto text-accent" size={24} />
        </div>
      </div>
    </section>
  )
}
