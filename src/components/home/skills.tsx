"use client";

import { Cpu, Layout, Zap, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { 
  FrontendIcon, StateIcon, ArchitectureIcon, FocusIcon,
  ReactIcon, NextjsIcon, TSIcon, JSIcon, TailwindIcon, CodeIcon 
} from "@/components/ui/icons";

const SKILL_CATEGORIES = [
  {
    title: "Frontend Mastery",
    description: "Expertise in building high-performance, accessible, and scalable user interfaces.",
    icon: <FrontendIcon className="w-8 h-8 text-primary" />,
    skills: [
      { name: "React.js", icon: <ReactIcon className="w-8 h-8" /> },
      { name: "Next.js (App Router)", icon: <NextjsIcon className="w-8 h-8" /> },
      { name: "TypeScript", icon: <TSIcon className="w-8 h-8" /> },
      { name: "JavaScript (ES6+)", icon: <JSIcon className="w-8 h-8" /> },
      { name: "Tailwind CSS", icon: <TailwindIcon className="w-8 h-8" /> },
      { name: "Shadcn UI", icon: <CodeIcon className="w-8 h-8" /> }
    ]
  },
  {
    title: "State & Data Management",
    description: "Robust data-fetching patterns and complex state synchronization.",
    icon: <StateIcon className="w-8 h-8 text-primary" />,
    skills: [
      { name: "Redux Toolkit", icon: <StateIcon className="w-8 h-8" /> },
      { name: "RTK Query", icon: <Zap className="w-8 h-8" /> },
      { name: "TanStack Query", icon: <Cpu className="w-8 h-8" /> },
      { name: "React Hook Form", icon: <Layout className="w-8 h-8" /> },
      { name: "Zod", icon: <CheckCircle2 className="w-8 h-8" /> }
    ]
  },
  {
    title: "Modern Tools & Architecture",
    description: "Delivering high-quality code through reusable patterns and modern deployment.",
    icon: <ArchitectureIcon className="w-8 h-8 text-primary" />,
    skills: [
      { name: "Git & GitHub", icon: <CodeIcon className="w-8 h-8" /> },
      { name: "Vercel", icon: <NextjsIcon className="w-8 h-8" /> },
      { name: "Custom Hooks", icon: <ReactIcon className="w-8 h-8" /> },
      { name: "Component Architecture", icon: <ArchitectureIcon className="w-8 h-8" /> },
      { name: "API Integration", icon: <Cpu className="w-8 h-8" /> },
      { name: "Rapid Prototyping", icon: <Zap className="w-8 h-8" /> }
    ]
  },
  {
    title: "Backend & Database",
    description: "Server-side development with Node.js and database management for full-stack applications.",
    icon: <FocusIcon className="w-8 h-8 text-primary" />,
    skills: [
      { name: "Node.js", icon: <CodeIcon className="w-8 h-8" /> },
      { name: "Express.js", icon: <Zap className="w-8 h-8" /> },
      { name: "MongoDB", icon: <Cpu className="w-8 h-8" /> },
      { name: "REST APIs", icon: <Layout className="w-8 h-8" /> },
      { name: "JWT Auth", icon: <CheckCircle2 className="w-8 h-8" /> },
      { name: "Mongoose", icon: <ArchitectureIcon className="w-8 h-8" /> }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-background overflow-hidden">
      {/* Background Decorative Elements - Centered behind the grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/15 dark:bg-primary/30 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 px-6 lg:px-10">
        <SectionHeader 
          badge="Technical Prowess"
          title="My Expert"
          titleAccent="Skillset"
          description="I specialize in the MERN stack and modern frontend technologies, focusing on creating seamless digital products that solve real-world problems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="premium-hover group relative p-8 border border-border bg-muted/20 rounded-xl transition-all hover:border-primary/30 hover:bg-muted/30"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-primary/0 rounded-xl transition-colors group-hover:bg-primary/2" />
               
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3">
                  {category.icon}
                </div>
                
                <h4 className="text-2xl font-bold text-foreground mb-3">{category.title}</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="premium-hover px-3 py-1 bg-primary/5 border border-primary/10 rounded-md text-muted-foreground text-sm transition-colors hover:border-primary/30 hover:text-primary flex items-center gap-1.5"
                    >
                      {skill.icon}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <Zap className="w-5 h-5 text-primary animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
