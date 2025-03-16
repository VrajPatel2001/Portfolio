"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { cn } from "../lib/utils"
import ParticlesBackground from "../components/ParticlesBackground"
import Image from "next/image"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { ArrowUp, Mail, Twitter, Linkedin } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Management Platform",
    description: "A comprehensive platform for managing cross-platform orders, inventory, shipping, and products.",
    technologies: ["Java", "Spring Boot", "React.js", "Elasticsearch", "Docker"],
    github: "https://github.com/vnpatel99/e-commerce-platform",
    demo: "https://e-commerce-platform-demo.herokuapp.com"
  },
  {
    title: "Pharmacy Software System",
    description: "A secure, efficient system for pharmacy operations and data management.",
    technologies: ["Java", "Spring Boot", "React.js", "OAuth 2.0", "Kubernetes"],
    github: "https://github.com/vnpatel99/pharmacy-software-system",
    demo: "https://pharmacy-software-system-demo.herokuapp.com"
  },
  {
    title: "Database Optimization Initiative",
    description: "A project to enhance database performance through entity design and query optimization.",
    technologies: ["JPA", "Hibernate", "SQL", "Maven", "Jenkins"],
    github: "https://github.com/vnpatel99/database-optimization-initiative",
    demo: ""
  }
]

const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "SQL", level: 85 }
    ]
  },
  {
    name: "Frameworks & Tools",
    skills: [
      { name: "Spring Boot", level: 95 },
      { name: "Spring Framework", level: 90 },
      { name: "React.js", level: 85 },
      { name: "Hibernate", level: 80 },
      { name: "JPA", level: 85 },
      { name: "Maven", level: 80 },
      { name: "Jenkins", level: 75 }
    ]
  },
  {
    name: "Cloud & DevOps",
    skills: [
      { name: "Kubernetes", level: 80 },
      { name: "Docker", level: 85 },
      { name: "Google Cloud Platform", level: 75 },
      { name: "AWS", level: 70 }
    ]
  },
  {
    name: "Software Development",
    skills: [
      { name: "Microservices", level: 90 },
      { name: "RESTful APIs", level: 95 },
      { name: "Agile", level: 85 },
      { name: "CI/CD", level: 80 },
      { name: "OOP", level: 90 },
      { name: "Design Patterns", level: 85 }
    ]
  }
]

const experiences = [
  {
    role: "Software Developer",
    company: "Vebcommerce",
    period: "March 2024 – Present",
    achievements: [
      "Spearheaded the development of an e-commerce management platform using SOLID principles.",
      "Employed Java reactive programming for asynchronous operations, boosting system responsiveness.",
      "Reduced API response times by 35% by integrating Elasticsearch.",
      "Secured RESTful APIs with Spring Security, OAuth 2.0, and JWT.",
      "Automated CI/CD pipelines using Jenkins, Docker, and Kubernetes."
    ]
  },
  {
    role: "Software Developer",
    company: "Loblaw Companies Limited",
    period: "October 2020 – February 2024",
    achievements: [
      "Built and maintained pharmacy software systems using Java, Spring Boot, and React.js.",
      "Strengthened application security with OAuth 2.0, JWT, and Spring Security.",
      "Optimized microservices architecture with Spring Cloud and Kubernetes.",
      "Developed reusable React.js components, increasing development efficiency by 25%.",
      "Led troubleshooting efforts that reduced app crashes by 95%."
    ]
  },
  {
    role: "Java Developer",
    company: "Otsuka Pharmaceutical India Pvt. Ltd.",
    period: "July 2018 – September 2020",
    achievements: [
      "Enhanced application performance using Spring Boot, resulting in a 25% increase in user satisfaction.",
      "Designed JPA entities and optimized data access with Hibernate, doubling database performance.",
      "Wrote SQL procedures and complex queries, improving database efficiency by 30%.",
      "Automated build processes with Maven and Jenkins, cutting manual effort by 15%.",
      "Conducted code reviews, reducing bugs by 20% and accelerating release cycles."
    ]
  }
]

export default function Portfolio() {
  const aboutRef = useRef<HTMLElement>(null)
  const experienceRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const educationRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const [activeSection, setActiveSection] = useState('about')
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToSection = (section: string) => {
    const refs = {
      about: aboutRef,
      experience: experienceRef,
      skills: skillsRef,
      projects: projectsRef,
      education: educationRef,
      contact: contactRef
    }
    
    const ref = refs[section as keyof typeof refs]
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    const sections = [
      aboutRef.current,
      experienceRef.current,
      skillsRef.current,
      projectsRef.current,
      educationRef.current,
      contactRef.current
    ]

    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => sections.forEach((section) => {
      if (section) observer.unobserve(section)
    })
  }, [])

  const sections = ['about', 'experience', 'skills', 'projects', 'education', 'contact']

  const menuRef = useRef<HTMLDivElement | null>(null)
  const menuButtonRef = useRef<HTMLButtonElement | null>(null)

  return (
    <div className="min-h-screen bg-gray-900/90 text-gray-100">
      <ParticlesBackground />
      
      <main className="relative z-10">
        {/* Navigation */}
        <header className="sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <nav suppressHydrationWarning className="flex justify-end items-center relative">
              <button
                ref={menuButtonRef}
                onClick={toggleMenu}
                className="md:hidden text-gray-300 hover:text-white transition-transform duration-200"
                aria-label="Toggle menu"
              >
                <svg
                  className={cn(
                    "w-6 h-6 transition-transform duration-200",
                    isOpen ? "rotate-90" : ""
                  )}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>

              <div
                ref={menuRef}
                className={cn(
                  'absolute right-0 top-full mt-2 py-2 bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-800',
                  'md:relative md:top-0 md:mt-0 md:py-0 md:bg-transparent md:backdrop-blur-none md:border-0 md:shadow-none md:flex',
                  'transform transition-all duration-200 ease-in-out origin-top',
                  isOpen 
                    ? 'opacity-100 scale-y-100 translate-y-0'
                    : 'opacity-0 scale-y-95 -translate-y-2 md:opacity-100 md:scale-y-100 md:translate-y-0'
                )}
              >
                <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
                  {sections.map((section) => (
                    <li key={section}>
                      <button
                        onClick={() => scrollToSection(section)}
                        className={cn(
                          'w-full text-left px-4 py-2 text-sm font-medium',
                          'transition-all duration-200 ease-in-out',
                          'hover:bg-gray-800/50 md:hover:bg-transparent',
                          'relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-400',
                          'after:transition-all after:duration-200 after:ease-in-out',
                          activeSection === section
                            ? 'text-blue-400 after:w-full'
                            : 'text-gray-300 hover:text-white after:w-0 hover:after:w-full'
                        )}
                      >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </header>

        {/* About Section */}
        <section
          ref={aboutRef}
          id="about"
          className="min-h-screen flex items-center justify-center pt-16 bg-transparent"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8 relative inline-block">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 mx-auto shadow-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Vraj Patel"
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  <span className="text-xl font-bold">VP</span>
                </div>
              </div>

              <h1 className="text-5xl font-bold mb-6 text-white">
                Hi, I'm <span className="text-blue-400">Vraj Patel</span>
              </h1>
              <p className="text-2xl font-semibold mb-8 text-blue-400">Senior Software Developer</p>
              <p className="text-lg text-gray-300 leading-relaxed mb-12">
                Passionate about creating elegant solutions to complex problems. 
                I specialize in full-stack development with expertise in Java, Spring Framework, and React.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('contact')
                  }}
                  className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('projects')
                  }}
                  className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          ref={experienceRef}
          id="experience"
          className="py-8 pt-16 bg-transparent"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
              Work Experience
              <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {experiences.map((experience, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg shadow-xl hover:bg-gray-900/60 transition-colors">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                    <p className="text-blue-400">{experience.period}</p>
                  </div>
                  <h4 className="text-lg text-gray-300 mb-2">{experience.company}</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section 
          ref={skillsRef}
          id="skills" 
          className="py-8 pt-16 bg-transparent"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
              Technical Skills
              <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Programming Languages */}
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg shadow-xl">
                <h3 className="text-xl font-bold text-blue-400 mb-4">
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-blue-500/20 px-4 py-1 text-sm font-medium text-blue-300 hover:bg-blue-500/30 transition-colors">Java</span>
                  <span className="inline-flex items-center rounded-full bg-blue-500/20 px-4 py-1 text-sm font-medium text-blue-300 hover:bg-blue-500/30 transition-colors">JavaScript</span>
                  <span className="inline-flex items-center rounded-full bg-blue-500/20 px-4 py-1 text-sm font-medium text-blue-300 hover:bg-blue-500/30 transition-colors">SQL</span>
                </div>
              </div>

              {/* Frameworks & Tools */}
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg shadow-xl">
                <h3 className="text-xl font-bold text-emerald-400 mb-4">
                  Frameworks & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-4 py-1 text-sm font-medium text-emerald-300 hover:bg-emerald-500/30 transition-colors">Spring Boot</span>
                  <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-4 py-1 text-sm font-medium text-emerald-300 hover:bg-emerald-500/30 transition-colors">Spring Framework</span>
                  <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-4 py-1 text-sm font-medium text-emerald-300 hover:bg-emerald-500/30 transition-colors">React.js</span>
                  <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-4 py-1 text-sm font-medium text-emerald-300 hover:bg-emerald-500/30 transition-colors">Hibernate</span>
                  <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-4 py-1 text-sm font-medium text-emerald-300 hover:bg-emerald-500/30 transition-colors">JPA</span>
                  <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-4 py-1 text-sm font-medium text-emerald-300 hover:bg-emerald-500/30 transition-colors">Maven</span>
                  <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-4 py-1 text-sm font-medium text-emerald-300 hover:bg-emerald-500/30 transition-colors">Jenkins</span>
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg shadow-xl">
                <h3 className="text-xl font-bold text-purple-400 mb-4">
                  Cloud & DevOps
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-purple-500/20 px-4 py-1 text-sm font-medium text-purple-300 hover:bg-purple-500/30 transition-colors">Kubernetes</span>
                  <span className="inline-flex items-center rounded-full bg-purple-500/20 px-4 py-1 text-sm font-medium text-purple-300 hover:bg-purple-500/30 transition-colors">Docker</span>
                  <span className="inline-flex items-center rounded-full bg-purple-500/20 px-4 py-1 text-sm font-medium text-purple-300 hover:bg-purple-500/30 transition-colors">Google Cloud Platform</span>
                  <span className="inline-flex items-center rounded-full bg-purple-500/20 px-4 py-1 text-sm font-medium text-purple-300 hover:bg-purple-500/30 transition-colors">AWS</span>
                </div>
              </div>

              {/* Software Development */}
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg shadow-xl">
                <h3 className="text-xl font-bold text-blue-400 mb-4">
                  Software Development
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-blue-500/20 px-4 py-1 text-sm font-medium text-blue-300 hover:bg-blue-500/30 transition-colors">Microservices</span>
                  <span className="inline-flex items-center rounded-full bg-blue-500/20 px-4 py-1 text-sm font-medium text-blue-300 hover:bg-blue-500/30 transition-colors">RESTful APIs</span>
                  <span className="inline-flex items-center rounded-full bg-blue-500/20 px-4 py-1 text-sm font-medium text-blue-300 hover:bg-blue-500/30 transition-colors">Agile</span>
                  <span className="inline-flex items-center rounded-full bg-blue-500/20 px-4 py-1 text-sm font-medium text-blue-300 hover:bg-blue-500/30 transition-colors">CI/CD</span>
                  <span className="inline-flex items-center rounded-full bg-blue-500/20 px-4 py-1 text-sm font-medium text-blue-300 hover:bg-blue-500/30 transition-colors">OOP</span>
                  <span className="inline-flex items-center rounded-full bg-blue-500/20 px-4 py-1 text-sm font-medium text-blue-300 hover:bg-blue-500/30 transition-colors">Design Patterns</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          ref={projectsRef}
          id="projects"
          className="py-8 pt-16 bg-transparent"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
              Featured Projects
              <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg shadow-xl hover:bg-gray-900/60 transition-colors">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section ref={educationRef} id="education" className="py-8 pt-16 bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
              Education
              <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-xl hover:bg-gray-900/60 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Computer Programming</h3>
                <p className="text-gray-400 mb-4">Seneca College</p>
                <p className="text-gray-400">2020 - 2022</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} id="contact" className="py-8 pt-16 bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
              Get In Touch
              <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
            </h2>

            <div className="max-w-2xl mx-auto bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <a href="mailto:vrajpatel.java@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">vrajpatel.java@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">X (Twitter)</h3>
                    <a href="https://x.com/vnpatel99" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">@vnpatel99</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/vraj-patel-5877442a3/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">Vraj Patel</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Vraj Patel. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Scroll to top button */}
        <button
          onClick={() => {
            aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg transition-all duration-300 z-40 hover:bg-blue-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </main>
    </div>
  );
}
