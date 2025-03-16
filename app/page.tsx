"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { ArrowUp, Mail, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"
import { cn } from "../lib/utils"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { CodeIcon, LibraryIcon, ToolIcon } from "../components/ui/icon"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const aboutRef = useRef<HTMLElement>(null)
  const experienceRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)

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
    const handleParallax = () => {
      const parallaxBg = document.getElementById('parallax-bg')
      if (parallaxBg) {
        parallaxBg.style.transform = `translateY(${window.scrollY * 0.2}px)`
      }
    }

    window.addEventListener('scroll', handleParallax)
    handleParallax() // Initial position
    return () => window.removeEventListener('scroll', handleParallax)
  }, [])

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    if (sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop - 80,
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

  const skills = {
    languages: [
      { name: "Java", logo: "/tech-logos/java.svg" },
      { name: "TypeScript", logo: "/tech-logos/typescript.svg" },
      { name: "Python", logo: "/tech-logos/python.svg" },
    ],
    frameworks: [
      { name: "Spring Framework", logo: "/tech-logos/spring.svg" },
      { name: "React", logo: "/tech-logos/react.svg" },
      { name: "Next.js", logo: "/tech-logos/nextjs.svg" },
    ],
    tools: [
      { name: "Docker", logo: "/tech-logos/docker.svg" },
      { name: "Kubernetes", logo: "/tech-logos/kubernetes.svg" },
      { name: "AWS", logo: "/tech-logos/aws.svg" },
    ],
  };

  return (
    <div className="relative">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-terracotta/20">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold text-terracotta">
              <span className="font-serif">VP</span>
            </div>
            <ul className="hidden md:flex space-x-8">
              {[
                { id: "about", label: "About Me", ref: aboutRef },
                { id: "experience", label: "Experience", ref: experienceRef },
                { id: "skills", label: "Skills", ref: skillsRef },
                { id: "projects", label: "Projects", ref: projectsRef },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.ref)}
                    className={cn(
                      "relative font-medium text-gray-700 hover:text-terracotta transition-colors",
                      activeSection === item.id && "text-terracotta",
                    )}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-terracotta" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
            <Button className="md:hidden bg-terracotta hover:bg-terracotta/90">Menu</Button>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        {/* About Section */}
        <section
          ref={aboutRef}
          id="about"
          className="min-h-screen relative flex items-center justify-center overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 scale-105"
            style={{
              backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            }}
            id="parallax-bg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />

          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8 relative inline-block animate-fade-in">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-saffron mx-auto shadow-lg transform transition-transform hover:scale-105">
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

              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 font-serif animate-slide-up">
                Vraj Patel
              </h1>
              <h2 className="text-2xl md:text-3xl text-terracotta mb-8 animate-slide-up animation-delay-200">
                Senior Software Developer
              </h2>

              <div className="prose prose-lg max-w-3xl mx-auto mb-12 text-gray-700 animate-fade-in animation-delay-400">
                <p>
                  I am a Senior Software Developer with over six years of experience specializing in Java, Spring
                  Framework, and React, delivering secure, scalable solutions like pharmacy software systems and
                  e-commerce platforms. I excel in building robust microservices, optimizing performance—such as
                  reducing API response times by 35%—and leading cross-functional teams to success.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 animate-fade-in animation-delay-600">
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
              <div
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-contain bg-no-repeat opacity-30"
                style={{ backgroundImage: "url('/placeholder.svg?height=50&width=100')" }}
              ></div>
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
                    <div className="md:text-right animate-slide-right">
                      <h3 className="text-2xl font-bold text-gray-900">Software Developer</h3>
                      <p className="text-lg font-medium text-terracotta">Vebcommerce</p>
                      <p className="text-gray-600">Edmonton, Canada · On-Site</p>
                      <p className="text-gray-500">March 2024 – Present</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-terracotta animate-slide-left">
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
                    <div className="md:order-2 md:text-left animate-slide-left">
                      <h3 className="text-2xl font-bold text-gray-900">Software Developer</h3>
                      <p className="text-lg font-medium text-saffron">Loblaw Companies Limited</p>
                      <p className="text-gray-600">Canada · Remote</p>
                      <p className="text-gray-500">October 2020 – February 2024</p>
                    </div>
                    <div className="md:order-1 bg-white p-6 rounded-lg shadow-md border-r-4 border-saffron animate-slide-right">
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
                    <div className="md:text-right animate-slide-right">
                      <h3 className="text-2xl font-bold text-gray-900">Java Developer</h3>
                      <p className="text-lg font-medium text-emerald-600">Otsuka Pharmaceutical India Pvt. Ltd.</p>
                      <p className="text-gray-600">India · On-Site</p>
                      <p className="text-gray-500">July 2018 – September 2020</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-emerald-600 animate-slide-left">
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
        <section ref={skillsRef} id="skills" className="py-20 bg-gradient-to-b from-white to-terracotta/5">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 font-serif text-gray-900 relative">
              Technical Skills
              <span className="block w-24 h-1 bg-indigo mx-auto mt-4" />
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Programming Languages */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <h3 className="text-xl font-bold mb-6 text-indigo flex items-center gap-2">
                    <CodeIcon className="w-6 h-6" />
                    Programming Languages
                  </h3>
                  <div className="space-y-4">
                    {skills.languages.map((language) => (
                      <div key={language.name} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <Image src={language.logo} alt={language.name} width={40} height={40} className="rounded" />
                        <div>
                          <h4 className="font-semibold">{language.name}</h4>
                          <p className="text-sm text-gray-600">Enterprise & Backend Development</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Frameworks & Libraries */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <h3 className="text-xl font-bold mb-6 text-terracotta flex items-center gap-2">
                    <LibraryIcon className="w-6 h-6" />
                    Frameworks & Libraries
                  </h3>
                  <div className="space-y-4">
                    {skills.frameworks.map((framework) => (
                      <div key={framework.name} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <Image src={framework.logo} alt={framework.name} width={40} height={40} className="rounded" />
                        <div>
                          <h4 className="font-semibold">{framework.name}</h4>
                          <p className="text-sm text-gray-600">Enterprise Java Development</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools & Technologies */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <h3 className="text-xl font-bold mb-6 text-saffron flex items-center gap-2">
                    <ToolIcon className="w-6 h-6" />
                    Tools & Technologies
                  </h3>
                  <div className="space-y-4">
                    {skills.tools.map((tool) => (
                      <div key={tool.name} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <Image src={tool.logo} alt={tool.name} width={40} height={40} className="rounded" />
                        <div>
                          <h4 className="font-semibold">{tool.name}</h4>
                          <p className="text-sm text-gray-600">Containerization</p>
                        </div>
                      </div>
                    ))}
                  </div>
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
              <div
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-contain bg-no-repeat opacity-30"
                style={{ backgroundImage: "url('/placeholder.svg?height=50&width=100')" }}
              ></div>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <Card className="overflow-hidden group animate-fade-in hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-r from-terracotta to-saffron relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-20 text-7xl font-bold">
                    E-COM
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="outline" className="text-white border-white hover:bg-white/20 hover:text-white">
                      View Details
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-terracotta transition-colors">
                    E-Commerce Management Platform
                  </CardTitle>
                  <CardDescription>
                    A comprehensive platform for managing cross-platform orders, inventory, shipping, and products.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-gray-100">
                      Java
                    </Badge>
                    <Badge variant="outline" className="bg-gray-100">
                      Spring Boot
                    </Badge>
                    <Badge variant="outline" className="bg-gray-100">
                      React.js
                    </Badge>
                    <Badge variant="outline" className="bg-gray-100">
                      Elasticsearch
                    </Badge>
                    <Badge variant="outline" className="bg-gray-100">
                      Docker
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    Reduced API response times by 35% and improved deployment frequency by 40%.
                  </p>
                </CardContent>
              </Card>

              {/* Project 2 */}
              <Card className="overflow-hidden group animate-fade-in animation-delay-200 hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-r from-indigo to-emerald-600 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-20 text-7xl font-bold">
                    PHARM
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="outline" className="text-white border-white hover:bg-white/20 hover:text-white">
                      View Details
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-indigo transition-colors">
                    Pharmacy Software System
                  </CardTitle>
                  <CardDescription>
                    A secure, efficient system for pharmacy operations and data management.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-gray-100">
                      Java
                    </Badge>
                    <Badge variant="outline" className="bg-gray-100">
                      Spring Boot
                    </Badge>
                    <Badge variant="outline" className="bg-gray-100">
                      React.js
                    </Badge>
                    <Badge variant="outline" className="bg-gray-100">
                      OAuth 2.0
                    </Badge>
                    <Badge variant="outline" className="bg-gray-100">
                      Kubernetes
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">Cut vulnerabilities by 40% and reduced app crashes by 95%.</p>
                </CardContent>
              </Card>

              {/* Project 3 */}
              <Card className="overflow-hidden group animate-fade-in animation-delay-400 hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-r from-saffron to-emerald-600 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-20 text-7xl font-bold">
                    DB
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="outline" className="text-white border-white hover:bg-white/20 hover:text-white">
                      View Details
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-emerald-600 transition-colors">
                    Database Optimization Initiative
                  </CardTitle>
                  <CardDescription>
                    A project to enhance database performance through entity design and query optimization.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-gray-100">
                      JPA
                    </Badge>
                    <Badge variant="outline" className="bg-gray-100">
                      Hibernate
                    </Badge>
                    <Badge variant="outline" className="bg-gray-100">
                      SQL
                    </Badge>
                    <Badge variant="outline" className="bg-gray-100">
                      Maven
                    </Badge>
                    <Badge variant="outline" className="bg-gray-100">
                      Jenkins
                    </Badge>
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
              <div
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-contain bg-no-repeat opacity-30"
                style={{ backgroundImage: "url('/placeholder.svg?height=50&width=100')" }}
              ></div>
            </h2>

            <div className="max-w-2xl mx-auto">
              <Card className="overflow-hidden animate-fade-in hover:shadow-lg transition-shadow">
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
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-terracotta/90 hover:bg-terracotta transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
              <a
                href="https://x.com/vnpatel99"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo/90 hover:bg-indigo transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span>Twitter</span>
              </a>
              <a
                href="https://www.linkedin.com/in/vraj-patel-5877442a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-saffron/90 hover:bg-saffron transition-colors"
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
