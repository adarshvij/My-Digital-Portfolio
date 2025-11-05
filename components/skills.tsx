"use client"

import { useInView } from "@/hooks/use-in-view"

export default function Skills() {
  const { ref, isInView } = useInView()

  const technicalSkills = [
    "Python",
    "SQL",
    "C++",
    "C",
    "HTML",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "React",
  ]

  const softSkills = ["Problem Solving", "Analytical Thinking", "Team Collaboration", "Communication", "Data Analysis"]

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-20 px-6 bg-background transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-12">Skills</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-accent/20 text-accent rounded-full font-medium text-sm hover:bg-accent/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-accent/20 text-accent rounded-full font-medium text-sm hover:bg-accent/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
