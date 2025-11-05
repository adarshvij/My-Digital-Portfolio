"use client"

import { useInView } from "@/hooks/use-in-view"
import { Mail, Linkedin, Github } from "lucide-react"

export default function Contact() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-20 px-6 bg-card transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title mb-4">Let's Connect</h2>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm open to opportunities in Data Science and Machine Learning. Feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="mailto:adarshvij745@gmail.com"
            className="flex items-center gap-3 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <Mail size={20} />
            Send Email
          </a>

          <a
            href="https://www.linkedin.com/in/adarsh-vij-993313386/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-3 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent/10 transition-colors"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>

          <a
            href="https://github.com/adarshvij"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-3 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent/10 transition-colors"
          >
            <Github size={20} />
            GitHub
          </a>
        </div>

        <p className="text-muted-foreground">adarshvij745@gmail.com</p>
      </div>
    </section>
  )
}
