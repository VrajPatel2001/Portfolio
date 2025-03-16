"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { ArrowUp, Mail, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"
import { cn } from "../lib/utils"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const aboutRef = useRef<HTMLElement>(null)
  const experienceRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }

      // Determine active section
      const scrollPosition = window.scrollY + 100

      const sections = [
        { id: "about", ref: aboutRef },
        { id: "experience", ref: experienceRef },
        { id: "skills", ref: skillsRef },
        { id: "projects", ref: projectsRef },
      ]

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.ref.current && section.ref.current.offsetTop <= scrollPosition) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleMenuToggle = () => {
    setMobileMenuOpen(prev => !prev)
  }

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    if (sectionRef.current) {
      const offset = 100 // Account for fixed header
      window.scrollTo({
        top: sectionRef.current.offsetTop - offset,
        behavior: "smooth",
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-terracotta/20">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center relative">
            <div className="text-2xl font-bold text-terracotta">
              <span className="font-serif">VP</span>
            </div>
            
            {/* Mobile Menu */}
            <div 
              ref={menuRef}
              className={cn(
                "fixed left-0 right-0 top-[72px] bg-white z-40 md:relative md:top-auto md:bg-transparent",
                "transition-all duration-200 ease-in-out transform",
                mobileMenuOpen 
                  ? "opacity-100 translate-y-0 pointer-events-auto" 
                  : "opacity-0 -translate-y-4 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto"
              )}
            >
              <div className="container mx-auto px-4 md:p-0">
                <ul className="flex flex-col space-y-1 py-4 md:flex-row md:space-y-0 md:space-x-8 md:py-0">
                  {[
                    { id: "about", label: "About Me", ref: aboutRef },
                    { id: "experience", label: "Experience", ref: experienceRef },
                    { id: "skills", label: "Skills", ref: skillsRef },
                    { id: "projects", label: "Projects", ref: projectsRef },
                  ].map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          scrollToSection(item.ref)
                          setMobileMenuOpen(false)
                        }}
                        className={cn(
                          "w-full text-left px-4 py-3 rounded-md transition-colors md:px-0 md:py-0",
                          "font-medium text-gray-700 hover:text-terracotta hover:bg-terracotta/5 md:hover:bg-transparent",
                          activeSection === item.id && "text-terracotta bg-terracotta/10 md:bg-transparent"
                        )}
                      >
                        {item.label}
                        {activeSection === item.id && (
                          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-terracotta hidden md:block" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Menu Toggle Button */}
            <button
              ref={menuButtonRef}
              onClick={handleMenuToggle}
              className={cn(
                "inline-flex items-center justify-center md:hidden z-50",
                "px-4 py-2 rounded-md bg-terracotta text-white",
                "hover:bg-terracotta/90 transition-colors",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
              )}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              Menu
            </button>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        {/* About Section */}
        <section
          ref={aboutRef}
          id="about"
          className="min-h-screen relative flex items-center justify-center"
        >
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8 relative inline-block">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-saffron mx-auto shadow-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Vraj Patel"
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-indigo rounded-full flex items-center justify-center text-white">
                  <span className="text-xl font-bold">VP</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 font-serif">
                Vraj Patel
              </h1>
              <h2 className="text-2xl md:text-3xl text-terracotta mb-8">
                Senior Software Developer
              </h2>

              <div className="prose prose-lg max-w-3xl mx-auto mb-12 text-gray-700">
                <p>
                  I am a Senior Software Developer with over six years of experience specializing in Java, Spring
                  Framework, and React, delivering secure, scalable solutions like pharmacy software systems and
                  e-commerce platforms. I excel in building robust microservices, optimizing performance—such as
                  reducing API response times by 35%—and leading cross-functional teams to success.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:vrajpatel.java@gmail.com"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                >
                  <Mail className="w-5 h-5 text-terracotta" />
                  <span>vrajpatel.java@gmail.com</span>
                </a>
                <a
                  href="https://x.com/vnpatel99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                >
                  <Twitter className="w-5 h-5 text-indigo" />
                  <span>@vnpatel99</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/vraj-patel-5877442a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                >
                  <Linkedin className="w-5 h-5 text-indigo" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section ref={experienceRef} id="experience" className="py-20 bg-gradient-to-b from-white to-terracotta/5">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 font-serif text-gray-900 relative">
              Work Experience
              <span className="block w-24 h-1 bg-saffron mx-auto mt-4"></span>
            </h2>

            <div className="max-w-4xl mx-auto relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-terracotta to-indigo"></div>

              {/* Experience Items */}
              <div className="space-y-24">
                {/* Experience 1 */}
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full border-4 border-white bg-terracotta z-10"></div>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:text-right">
                      <h3 className="text-2xl font-bold text-gray-900">Software Developer</h3>
                      <p className="text-lg font-medium text-terracotta">Vebcommerce</p>
                      <p className="text-gray-600">Edmonton, Canada · On-Site</p>
                      <p className="text-gray-500">March 2024 – Present</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-terracotta">
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>
                          Spearheaded the development of an e-commerce management platform using SOLID principles.
                        </li>
                        <li>
                          Employed Java reactive programming for asynchronous operations, boosting system
                          responsiveness.
                        </li>
                        <li>Reduced API response times by 35% by integrating Elasticsearch.</li>
                        <li>Secured RESTful APIs with Spring Security, OAuth 2.0, and JWT.</li>
                        <li>Automated CI/CD pipelines using Jenkins, Docker, and Kubernetes.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Experience 2 */}
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full border-4 border-white bg-saffron z-10"></div>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:order-2 md:text-left">
                      <h3 className="text-2xl font-bold text-gray-900">Software Developer</h3>
                      <p className="text-lg font-medium text-saffron">Loblaw Companies Limited</p>
                      <p className="text-gray-600">Canada · Remote</p>
                      <p className="text-gray-500">October 2020 – February 2024</p>
                    </div>
                    <div className="md:order-1 bg-white p-6 rounded-lg shadow-md border-r-4 border-saffron">
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Built and maintained pharmacy software systems using Java, Spring Boot, and React.js.</li>
                        <li>Strengthened application security with OAuth 2.0, JWT, and Spring Security.</li>
                        <li>Optimized microservices architecture with Spring Cloud and Kubernetes.</li>
                        <li>Developed reusable React.js components, increasing development efficiency by 25%.</li>
                        <li>Led troubleshooting efforts that reduced app crashes by 95%.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Experience 3 */}
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full border-4 border-white bg-emerald-600 z-10"></div>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:text-right">
                      <h3 className="text-2xl font-bold text-gray-900">Java Developer</h3>
                      <p className="text-lg font-medium text-emerald-600">Otsuka Pharmaceutical India Pvt. Ltd.</p>
                      <p className="text-gray-600">India · On-Site</p>
                      <p className="text-gray-500">July 2018 – September 2020</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-emerald-600">
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>
                          Enhanced application performance using Spring Boot, resulting in a 25% increase in user
                          satisfaction.
                        </li>
                        <li>
                          Designed JPA entities and optimized data access with Hibernate, doubling database performance.
                        </li>
                        <li>Wrote SQL procedures and complex queries, improving database efficiency by 30%.</li>
                        <li>Automated build processes with Maven and Jenkins, cutting manual effort by 15%.</li>
                        <li>Conducted code reviews, reducing bugs by 20% and accelerating release cycles.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section 
          ref={skillsRef}
          id="skills" 
          className="py-16 bg-gray-50"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Technical Skills
              <div className="w-24 h-1 bg-indigo-900 mx-auto mt-4"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Programming Languages */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-[#1e1b4b] mb-4">
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-[#1e1b4b] px-4 py-1 text-sm font-medium text-white hover:bg-[#2d2a5d] transition-colors">Java</span>
                  <span className="inline-flex items-center rounded-full bg-[#1e1b4b] px-4 py-1 text-sm font-medium text-white hover:bg-[#2d2a5d] transition-colors">JavaScript</span>
                  <span className="inline-flex items-center rounded-full bg-[#1e1b4b] px-4 py-1 text-sm font-medium text-white hover:bg-[#2d2a5d] transition-colors">SQL</span>
                </div>
              </div>

              {/* Frameworks & Tools */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-[#991b1b] mb-4">
                  Frameworks & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-[#991b1b] px-4 py-1 text-sm font-medium text-white hover:bg-[#b91c1c] transition-colors">Spring Boot</span>
                  <span className="inline-flex items-center rounded-full bg-[#991b1b] px-4 py-1 text-sm font-medium text-white hover:bg-[#b91c1c] transition-colors">Spring Framework</span>
                  <span className="inline-flex items-center rounded-full bg-[#991b1b] px-4 py-1 text-sm font-medium text-white hover:bg-[#b91c1c] transition-colors">React.js</span>
                  <span className="inline-flex items-center rounded-full bg-[#991b1b] px-4 py-1 text-sm font-medium text-white hover:bg-[#b91c1c] transition-colors">Hibernate</span>
                  <span className="inline-flex items-center rounded-full bg-[#991b1b] px-4 py-1 text-sm font-medium text-white hover:bg-[#b91c1c] transition-colors">JPA</span>
                  <span className="inline-flex items-center rounded-full bg-[#991b1b] px-4 py-1 text-sm font-medium text-white hover:bg-[#b91c1c] transition-colors">Maven</span>
                  <span className="inline-flex items-center rounded-full bg-[#991b1b] px-4 py-1 text-sm font-medium text-white hover:bg-[#b91c1c] transition-colors">Jenkins</span>
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-[#ea580c] mb-4">
                  Cloud & DevOps
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-[#ea580c] px-4 py-1 text-sm font-medium text-white hover:bg-[#ff8c00] transition-colors">Kubernetes</span>
                  <span className="inline-flex items-center rounded-full bg-[#ea580c] px-4 py-1 text-sm font-medium text-white hover:bg-[#ff8c00] transition-colors">Docker</span>
                  <span className="inline-flex items-center rounded-full bg-[#ea580c] px-4 py-1 text-sm font-medium text-white hover:bg-[#ff8c00] transition-colors">Google Cloud Platform (GCP)</span>
                  <span className="inline-flex items-center rounded-full bg-[#ea580c] px-4 py-1 text-sm font-medium text-white hover:bg-[#ff8c00] transition-colors">Jenkins</span>
                  <span className="inline-flex items-center rounded-full bg-[#ea580c] px-4 py-1 text-sm font-medium text-white hover:bg-[#ff8c00] transition-colors">AWS</span>
                </div>
              </div>

              {/* Database Management */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-[#047857] mb-4">
                  Database Management
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-[#047857] px-4 py-1 text-sm font-medium text-white hover:bg-[#04c18f] transition-colors">SQL Server</span>
                  <span className="inline-flex items-center rounded-full bg-[#047857] px-4 py-1 text-sm font-medium text-white hover:bg-[#04c18f] transition-colors">MySQL</span>
                  <span className="inline-flex items-center rounded-full bg-[#047857] px-4 py-1 text-sm font-medium text-white hover:bg-[#04c18f] transition-colors">PostgreSQL</span>
                  <span className="inline-flex items-center rounded-full bg-[#047857] px-4 py-1 text-sm font-medium text-white hover:bg-[#04c18f] transition-colors">Oracle</span>
                  <span className="inline-flex items-center rounded-full bg-[#047857] px-4 py-1 text-sm font-medium text-white hover:bg-[#04c18f] transition-colors">MongoDB</span>
                </div>
              </div>

              {/* Software Development */}
              <div className="bg-white p-6 rounded-lg shadow col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold text-[#1e1b4b] mb-4">
                  Software Development
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-[#1e1b4b] px-4 py-1 text-sm font-medium text-white hover:bg-[#2d2a5d] transition-colors">Microservices Architecture</span>
                  <span className="inline-flex items-center rounded-full bg-[#1e1b4b] px-4 py-1 text-sm font-medium text-white hover:bg-[#2d2a5d] transition-colors">RESTful APIs</span>
                  <span className="inline-flex items-center rounded-full bg-[#1e1b4b] px-4 py-1 text-sm font-medium text-white hover:bg-[#2d2a5d] transition-colors">Agile Methodologies</span>
                  <span className="inline-flex items-center rounded-full bg-[#1e1b4b] px-4 py-1 text-sm font-medium text-white hover:bg-[#2d2a5d] transition-colors">CI/CD</span>
                  <span className="inline-flex items-center rounded-full bg-[#1e1b4b] px-4 py-1 text-sm font-medium text-white hover:bg-[#2d2a5d] transition-colors">Object-Oriented Programming</span>
                  <span className="inline-flex items-center rounded-full bg-[#1e1b4b] px-4 py-1 text-sm font-medium text-white hover:bg-[#2d2a5d] transition-colors">Design Patterns</span>
                  <span className="inline-flex items-center rounded-full bg-[#1e1b4b] px-4 py-1 text-sm font-medium text-white hover:bg-[#2d2a5d] transition-colors">Optimization</span>
                  <span className="inline-flex items-center rounded-full bg-[#1e1b4b] px-4 py-1 text-sm font-medium text-white hover:bg-[#2d2a5d] transition-colors">API Integration</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} id="projects" className="py-20 bg-gradient-to-b from-indigo/5 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 font-serif text-gray-900 relative">
              Projects
              <span className="block w-24 h-1 bg-emerald-600 mx-auto mt-4"></span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl">E-Commerce Management Platform</CardTitle>
                  <CardDescription>
                    A comprehensive platform for managing cross-platform orders, inventory, shipping, and products.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-600">Java</span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-600">Spring Boot</span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-600">React.js</span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-600">Elasticsearch</span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-600">Docker</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Reduced API response times by 35% and improved deployment frequency by 40%.
                  </p>
                </CardContent>
              </Card>

              {/* Project 2 */}
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl">Pharmacy Software System</CardTitle>
                  <CardDescription>
                    A secure, efficient system for pharmacy operations and data management.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-600">Java</span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-600">Spring Boot</span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-600">React.js</span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-600">OAuth 2.0</span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-600">Kubernetes</span>
                  </div>
                  <p className="text-sm text-gray-600">Cut vulnerabilities by 40% and reduced app crashes by 95%.</p>
                </CardContent>
              </Card>

              {/* Project 3 */}
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl">Database Optimization Initiative</CardTitle>
                  <CardDescription>
                    A project to enhance database performance through entity design and query optimization.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-600">JPA</span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-600">Hibernate</span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-600">SQL</span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-600">Maven</span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-600">Jenkins</span>
                  </div>
                  <p className="text-sm text-gray-600">Doubled database performance and boosted efficiency by 30%.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 bg-gradient-to-b from-white to-terracotta/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 font-serif text-gray-900 relative">
              Education
              <span className="block w-24 h-1 bg-terracotta mx-auto mt-4"></span>
            </h2>

            <div className="max-w-2xl mx-auto">
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-terracotta/20 to-saffron/20">
                  <CardTitle className="text-xl text-gray-900">
                    Computer Programming in Information Technology
                  </CardTitle>
                  <CardDescription className="text-gray-700 font-medium">
                    Seneca College | Toronto, Canada
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-gray-600">May 2020 – April 2022</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 font-serif">Get In Touch</h2>
            <p className="mb-8">
              I'm currently looking for new opportunities. If you have a project that needs my expertise, please feel
              free to reach out.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="mailto:vrajpatel.java@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-terracotta/90"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
              <a
                href="https://x.com/vnpatel99"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo/90"
              >
                <Twitter className="w-5 h-5" />
                <span>Twitter</span>
              </a>
              <a
                href="https://www.linkedin.com/in/vraj-patel-5877442a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-saffron/90"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400"> 2024 Vraj Patel. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 w-12 h-12 rounded-full bg-terracotta text-white flex items-center justify-center shadow-lg transition-all duration-300 z-40",
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none",
        )}
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  )
}
