"use client"

import { useInView } from "@/hooks/use-in-view"

export default function About() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="about"
      ref={ref}
      className={`py-20 px-6 bg-card transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              I'm <span className="font-semibold">Adarsh Vij</span>, an MCA student at Lovely Professional University
              (Class of 2027). I build backend systems and data-driven prototypes, and I love turning raw data into
              meaningful insights.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Education</h3>
                <p className="text-muted-foreground">Master of Computer Applications (MCA) @ LPU (2025–2027)</p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Specialization</h3>
                <p className="text-muted-foreground">Data Science (Final Year)</p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Interests</h3>
                <p className="text-muted-foreground">
                  Data Science, Machine Learning, Backend Development, Data Analytics
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden min-h-96">
            <img
              src="/profile.png"
              alt="Adarsh Vij - Professional Photo"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
