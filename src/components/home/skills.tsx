"use client";

import { PaintbrushVertical, Code2, ServerCog, Zap } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import {
  FrontendIcon,
  ArchitectureIcon,
  FocusIcon,
  ReactIcon,
  NextjsIcon,
  JSIcon,
  TailwindIcon,
  CodeIcon,
} from "@/components/ui/icons";

const SERVICE_CARDS = [
  {
    title: "UI/UX Design",
    description:
      "Crafting visually engaging interfaces that feel intuitive and easy to navigate, with a focus on clean structure and a strong first impression.",
    icon: <PaintbrushVertical className="w-8 h-8 text-primary" />,
    skills: [
      { name: "Visual Design", icon: <FrontendIcon className="w-8 h-8" /> },
      { name: "User Flow", icon: <ArchitectureIcon className="w-8 h-8" /> },
      { name: "Responsive Layouts", icon: <TailwindIcon className="w-8 h-8" /> },
    ],
  },
  {
    title: "Frontend Development",
    description:
      "Building polished frontend experiences with HTML, CSS, JavaScript, and React so each project feels fast, responsive, and modern.",
    icon: <Code2 className="w-8 h-8 text-primary" />,
    skills: [
      { name: "React.js", icon: <ReactIcon className="w-8 h-8" /> },
      { name: "Next.js", icon: <NextjsIcon className="w-8 h-8" /> },
      { name: "JavaScript", icon: <JSIcon className="w-8 h-8" /> },
    ],
  },
  {
    title: "Backend Development",
    description:
      "Supporting modern web projects with dependable server-side logic, database handling, and secure API integration.",
    icon: <ServerCog className="w-8 h-8 text-primary" />,
    skills: [
      { name: "Node.js", icon: <CodeIcon className="w-8 h-8" /> },
      { name: "Express.js", icon: <FocusIcon className="w-8 h-8" /> },
      { name: "MongoDB", icon: <ArchitectureIcon className="w-8 h-8" /> },
    ],
  },
];

export function Skills() {
  return (
    <section id="services" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/15 dark:bg-primary/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 px-6 lg:px-10">
        <SectionHeader
          badge="What I Offer"
          title="Our"
          titleAccent="Services"
          description="I build polished interfaces, interactive websites, and dependable web applications that feel smooth from the first click to launch."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICE_CARDS.map((service) => (
            <div
              key={service.title}
              className="premium-hover group relative p-8 border border-border bg-muted/20 rounded-xl transition-all hover:border-primary/30 hover:bg-muted/30"
            >
              <div className="absolute inset-0 bg-primary/0 rounded-xl transition-colors group-hover:bg-primary/2" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3">
                  {service.icon}
                </div>

                <h4 className="text-2xl font-bold text-foreground mb-3">{service.title}</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill) => (
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
