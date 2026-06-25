import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import Link from "next/link";

const EXPERIENCES = [
  {
    company: "Betopia Group",
    role: "Frontend Developer",
    location: "Dhaka, Bangladesh (On-site)",
    duration: "March 2025 – Present",
    description: "Building API-driven SaaS platforms and internal dashboards, focusing on scalable UI architecture, optimized data flows, and production-ready frontend systems.",
    achievements: [
      <span key="useSmartFilter">Engineered an optimized URL-state filtering hook (<Link href="https://github.com/nurulla-hasan/my_project_tools/blob/main/src/hooks/nextjs/useSmartFilter.ts" target="_blank" className="text-primary hover:underline font-bold"><code>useSmartFilter</code></Link>) for Next.js App Router with debounced navigation, cutting redundant API calls by 40%.</span>,
      <span key="fetcher">Developed a centralized server-side <Link href="https://github.com/nurulla-hasan/my_project_tools/blob/main/src/lib/fetcher.ts" target="_blank" className="text-primary hover:underline font-bold">fetcher</Link> handling automated JWT validation and Next.js caching (<code>revalidateTag</code>), reducing API integration boilerplate by 30%.</span>,
      "Built highly reusable frontend systems, including dynamic data tables with server-side pagination, protected routing, and API-integrated CRUD workflows."
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "TanStack Query", "TanStack Table", "React Hook Form", "Zod"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="relative py-20 bg-background overflow-hidden">
      {/* Background Decorative Glow - Positioned to follow the timeline flow */}
      <div className="absolute top-[20%] left-[10%] w-120 h-120 bg-primary/15 dark:bg-primary/30 rounded-full blur-[130px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionHeader 
          badge="Career Path"
          title="Professional"
          titleAccent="Experience"
          description="My journey through the tech industry, focused on delivering high-impact frontend solutions and architecting scalable dashboard systems for enterprise-level applications."
        />

        <div className="max-w-4xl">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.company}
              className="relative pl-8 md:pl-12 border-l border-border pb-8 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-2.25 top-0 w-4.5 h-4.5 bg-background border-4 border-primary shadow-[0_0_10px_rgba(var(--color-primary),0.5)]" />
              
              <div className="group relative p-8 border border-border bg-muted/20 rounded-xl transition-all hover:border-primary/30 hover:bg-muted/30">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-3">
                      <Briefcase className="w-6 h-6 text-primary" />
                      {exp.role}
                    </h4>
                    <p className="text-lg font-semibold text-foreground/80 mt-1">{exp.company}</p>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground font-medium">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-foreground/80 text-sm leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                <div className="mt-6 pt-6 border-t border-border/50">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/5 border border-primary/15 rounded-md text-xs font-bold text-primary/80 uppercase tracking-widest">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
