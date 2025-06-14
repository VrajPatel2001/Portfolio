import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  name: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    name: "Portfolio Website",
    description: "My personal portfolio website built with Next.js, Tailwind CSS, and TypeScript",
    liveUrl: "https://vraj-patel-portfolio-bz0l40crk-vrajpatel2001s-projects.vercel.app",
    githubUrl: "https://github.com/VrajPatel2001/Portfolio",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  },
  // Add more projects here
];

export function LiveProjects() {
  return (
    <section id="live-projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Live Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative w-full h-[400px] rounded-lg overflow-hidden border">
                  <iframe
                    src={project.liveUrl}
                    className="absolute top-0 left-0 w-full h-full"
                    title={project.name}
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button asChild variant="outline" className="flex-1">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 