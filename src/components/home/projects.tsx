import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { SectionHeader } from "@/components/ui/section-header";

import { PROJECTS } from "@/lib/data";
import Link from "next/link";
import { Button } from "../ui/button";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 bg-background overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/15 dark:bg-primary/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionHeader 
          badge="Selected Work"
          title="Featured"
          titleAccent="Projects"
          description="Explore a collection of my recent work, focusing on large-scale dashboard systems, reusable component libraries, and full-stack applications built with modern tools."
          link={{ href: "/projects", label: "View All Projects" }}
        />

        <div className="flex flex-col gap-0">
          {PROJECTS.slice(0, 3).map((project, index) => (
            <div
              key={project.title}
              className={`group relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12 ${
                index !== 0 ? "border-t" : ""
              } ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Project Image Container */}
              <div
                className={`relative aspect-video overflow-hidden rounded-xl premium-hover ${
                  index % 2 !== 0 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Project Info */}
              <div
                className={`flex flex-col justify-center ${
                  index % 2 !== 0 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="premium-hover text-xs font-bold tracking-widest uppercase text-primary/80 bg-primary/5 px-3 py-1 rounded-md border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>

                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex items-center gap-4">
                  <Link href={project.liveUrl} target="_blank">
                    <Button variant="hero" size="sm" className="">
                      Live Demo <ExternalLink />
                    </Button>
                  </Link>
                  <Link href={project.githubUrl} target="_blank">
                    <Button variant="nav" size="sm" className="">
                      Source Code <GithubIcon />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
