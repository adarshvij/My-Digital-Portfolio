"use client"

import { useInView } from "@/hooks/use-in-view"
import { Award, ExternalLink } from "lucide-react"

export default function Certifications() {
  const { ref, isInView } = useInView()

  const coursera = [
    {
      title: "What is Data Science",
      link: "https://coursera.org/share/5b584626b53460f14e537cb0ca5f01b2",
    },
    {
      title: "Tools For Data Science",
      link: "https://coursera.org/share/0eb72a32f4e6bfb216d1a13283f3ebaf",
    },
    {
      title: "Data Science Methodology",
      link: "https://coursera.org/share/f23bd6f441577644078444fab4c86ff4",
    },
    {
      title: "Python for Data Science, AI & Development",
      link: "https://coursera.org/share/a23c7a4692f23a5ae1b6683cd351e18f",
    },
    {
      title: "Python Project for Data Science",
      link: "https://coursera.org/share/c274d1d7446085a3792aacc0711dca97",
    },
    {
      title: "Databases and SQL for Data Science with Python",
      link: "https://coursera.org/share/dec2455ead16937d9f8ae085d10ec134",
    },
  ]

  const other = [
    {
      title: "Hackathon Recognition: Build Storm 2025",
      description: "AI Hackathon Recognition",
    },
    {
      title: "Web Development Workshop 2025",
      description: "Professional Development",
    },
  ]

  return (
    <section
      id="certifications"
      ref={ref}
      className={`py-20 px-6 bg-background transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-12">Certifications & Achievements</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Award size={24} className="text-accent" />
              Coursera Certifications
            </h3>

            <div className="space-y-4">
              {coursera.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between p-4 bg-card border border-border rounded-lg hover:border-accent hover:bg-card/50 transition-all group"
                >
                  <span className="text-foreground group-hover:text-accent transition-colors font-medium">
                    {cert.title}
                  </span>
                  <ExternalLink
                    size={16}
                    className="text-muted-foreground group-hover:text-accent flex-shrink-0 mt-1"
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Award size={24} className="text-accent" />
              Recognitions
            </h3>

            <div className="space-y-4">
              {other.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-card border border-border rounded-lg hover:border-accent transition-all"
                >
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
