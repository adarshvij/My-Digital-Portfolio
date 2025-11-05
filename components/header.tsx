"use client"

import type React from "react"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  isScrolled: boolean
}

const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault()
  window.open("/api/resume-pdf", "_blank")
}

export default function Header({ isScrolled }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-foreground hover:text-accent transition-colors">
          Adarsh Vij
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={(e) => scrollToSection(e, item.href)} className="nav-link">
              {item.label}
            </a>
          ))}
          <a
            href="#"
            onClick={handleResumeClick}
            className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="nav-link py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#"
              onClick={handleResumeClick}
              className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-medium text-center hover:opacity-90 transition-opacity"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
