"use client"

import { useInView } from "@/hooks/use-in-view"
import { Github } from "lucide-react"

export default function Projects() {
  const { ref, isInView } = useInView()

  const projects = [
    {
      title: "Music Player UI",
      description:
        "A responsive Spotify-like frontend design showcasing modern UI/UX principles with smooth interactions and responsive layouts.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/adarshvij/Music-player",
      type: "Frontend",
    },
    {
      title: "Track Management System",
      description:
        "Backend logic for a hackathon prototype with complete CRUD operations and database integration for track management.",
      tech: ["Node.js", "Express.js", "MongoDB"],
      link: "#",
      type: "Backend",
    },
  ]

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-20 px-6 bg-card transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-8 border border-border hover:border-accent transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium">
                  {project.type}
                </span>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:gap-3 font-medium transition-all"
              >
                View on GitHub <Github size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
