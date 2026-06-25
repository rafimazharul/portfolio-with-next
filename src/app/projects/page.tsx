import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/ui/icons";
import { PROJECTS } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore the projects built by Nurulla Hasan — modern web applications using React, Next.js, TypeScript, Node.js and more.",
  openGraph: {
    title: "Projects | Nurulla Hasan",
    description:
      "A curated collection of web development projects by Nurulla Hasan.",
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-[50%] h-[50%] bg-primary/15 dark:bg-primary/35 rounded-full blur-[120px] pointer-events-none z-0" />
      
      <div className="container mx-auto px-6 lg:px-10 max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-20 relative">
          <div className="flex flex-col gap-6">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 group text-xs font-bold uppercase tracking-widest"
            >
              <div className="w-8 h-px bg-muted-foreground/30 group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
              Back to Home
            </Link>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <h1 className="text-5xl md:text-7xl font-bold uppercase text-foreground">
                    Works
                  </h1>
                  <div className="absolute -bottom-2 left-0 h-1 w-16 bg-primary" />
                </div>
                <div className="h-px flex-1 bg-linear-to-r from-border to-transparent hidden md:block" />
                <span className="text-sm text-muted-foreground border px-4 py-1.5 rounded-md uppercase tracking-widest font-bold bg-muted/10">
                  {PROJECTS.length}&nbsp; Showcases
                </span>
              </div>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed font-medium pt-4">
                A selection of digital experiences and technical engineering 
                focused on <span className="text-foreground font-semibold">scalability</span> and <span className="text-foreground font-semibold">performance</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className="group flex flex-col border bg-muted/20 rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 premium-hover"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-muted/30">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold tracking-widest uppercase text-primary/80 bg-primary/5 px-2.5 py-1 rounded-md border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex items-center gap-3 mt-auto pt-5 border-t">
                  <Link href={project.liveUrl} target="_blank" className="flex-1">
                    <Button variant="hero" size="sm" className="w-full h-9 text-xs">
                      Live Preview <ExternalLink className="w-3 h-3 ml-1.5" />
                    </Button>
                  </Link>
                  <Link href={project.githubUrl} target="_blank">
                    <Button variant="nav" size="sm" className="h-9 w-9 flex items-center justify-center p-0">
                      <GithubIcon className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
