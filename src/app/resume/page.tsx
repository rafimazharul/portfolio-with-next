"use client";

import { Button } from "@/components/ui/button";
import { 
  GithubIcon, 
  LinkedinIcon, 
} from "@/components/ui/icons";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Wrench,
  User,
  Zap,
  Globe
} from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-[50%] h-[50%] bg-primary/15 dark:bg-primary/35 rounded-full blur-[120px] pointer-events-none z-0" />
      
      <div className="container mx-auto px-6 lg:px-10 max-w-5xl relative z-10">
        {/* Navigation / Actions */}
        <div className="mb-12 flex items-center justify-between">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 group text-xs font-bold uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>
          
          <Link 
            href="/assets/RESUME.pdf" 
            target="_blank"
            download="Nurulla_Hasan_Resume.pdf"
          >
            <Button 
              variant="hero" 
              size="sm" 
              className="rounded-xl h-10 px-6"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </Link>
        </div>

        {/* Resume Paper Container */}
        <div className="bg-muted/10 border border-border rounded-3xl overflow-hidden shadow-2xl shadow-primary/5">
          {/* Header Section */}
          <div className="p-6 md:p-8 border-b border-border bg-muted/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -mr-32 -mt-32" />
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-1">
                  Nurulla <span className="text-primary">Hasan</span>
                </h1>
                <p className="text-sm md:text-base font-bold text-muted-foreground uppercase tracking-widest">
                  Frontend-Focused MERN Stack Developer
                </p>
              </div>
              <div className="flex flex-col gap-1.5 text-left md:text-right md:items-end text-xs md:text-sm">
                <div className="flex items-center gap-2 text-muted-foreground font-medium">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  Dhaka, Bangladesh
                </div>
                <div className="flex items-center gap-2 text-muted-foreground font-medium">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  +8801750974716
                </div>
                <div className="flex items-center gap-2 text-muted-foreground font-medium underline decoration-primary/30">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  nurullahasan.dev@gmail.com
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border/50 flex flex-wrap gap-5">
              <Link href="https://www.linkedin.com/in/nurulla-hasan/" target="_blank" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">
                <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
              </Link>
              <Link href="https://github.com/nurulla-hasan" target="_blank" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">
                <GithubIcon className="w-3.5 h-3.5" /> GitHub
              </Link>
              <Link href="https://nurulla-hasan-portfolio-pink.vercel.app/" target="_blank" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">
                <Globe className="w-3.5 h-3.5" /> Portfolio
              </Link>
            </div>
          </div>

          <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Summary */}
              <section>
                <h2 className="text-xl font-black uppercase tracking-widest mb-6 flex items-center gap-3">
                  <User className="w-5 h-5 text-primary" />
                  Professional Summary
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                  Frontend-focused MERN Stack Developer with 1+ year of experience building API-driven SaaS platforms and high-performance corporate websites. Expert in React, Next.js (App Router), TypeScript, and Tailwind CSS. Proven ability to engineer scalable UI architectures, optimize URL-driven states, and deliver SEO-friendly, production-ready web applications.
                </p>
              </section>

              {/* Experience */}
              <section>
                <h2 className="text-xl font-black uppercase tracking-widest mb-6 flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Professional Experience
                </h2>
                <div className="space-y-8">
                  <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-primary/30">
                    <div className="absolute -left-1 top-2 w-2 h-2 rounded-full bg-primary" />
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">Frontend Developer</h3>
                        <p className="text-primary font-bold">Betopia Group</p>
                      </div>
                      <div className="text-right md:text-right">
                        <p className="font-bold text-sm uppercase tracking-widest">March 2025 – Present</p>
                        <p className="text-xs text-muted-foreground">Dhaka, Bangladesh (On-site)</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-muted-foreground list-disc list-outside ml-4">
                      <li>Engineered an optimized URL-state filtering hook (<Link href="https://github.com/nurulla-hasan/my_project_tools/blob/main/src/hooks/nextjs/useSmartFilter.ts" target="_blank" className="text-primary hover:underline font-bold"><code>useSmartFilter</code></Link>) for Next.js App Router with debounced navigation, cutting redundant API calls by 40%.</li>
                      <li>Developed a centralized server-side <Link href="https://github.com/nurulla-hasan/my_project_tools/blob/main/src/lib/fetcher.ts" target="_blank" className="text-primary hover:underline font-bold">fetcher</Link> handling automated JWT validation and Next.js caching (<code>revalidateTag</code>), reducing API integration boilerplate by 30%.</li>
                      <li>Built highly reusable frontend systems, including dynamic data tables with server-side pagination, protected routing, and API-integrated CRUD workflows.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Projects */}
              <section>
                <h2 className="text-xl font-black uppercase tracking-widest mb-6 flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  Selected Projects
                </h2>
                <div className="space-y-8">
                  <div className="group">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold">Mess Management System</h3>
                      <div className="flex gap-4">
                        <Link href="https://mess-os-client.vercel.app" target="_blank" className="text-xs font-bold text-primary hover:underline">Live Demo</Link>
                        <Link href="https://github.com/nurulla-hasan/mess_os_client" target="_blank" className="text-xs font-bold text-primary hover:underline">Client GitHub</Link>
                        <Link href="https://github.com/nurulla-hasan/mess_os_server" target="_blank" className="text-xs font-bold text-primary hover:underline">Server GitHub</Link>
                      </div>
                    </div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Next.js, TypeScript, Tailwind CSS, shadcn/ui, Express.js, MongoDB</p>
                    <ul className="space-y-2 text-muted-foreground text-sm list-disc list-outside ml-4">
                      <li>Architected a multi-tenant SaaS platform featuring a complex financial engine for automated monthly billing, dynamic meal rates, and equal-share overhead division.</li>
                      <li>Integrated an AI-powered menu planner and market scheduler that automates daily grocery lists based on budget limits and dietary preferences.</li>
                    </ul>
                  </div>

                  <div className="group">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold">MentorIP Law Firm</h3>
                      <div className="flex gap-4">
                        <Link href="https://mentorip.com" target="_blank" className="text-xs font-bold text-primary hover:underline">Live Demo</Link>
                        <Link href="https://github.com/nurulla-hasan/mentorip_website" target="_blank" className="text-xs font-bold text-primary hover:underline">GitHub</Link>
                      </div>
                    </div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Next.js, TypeScript, Tailwind CSS, shadcn/ui</p>
                    <ul className="space-y-2 text-muted-foreground text-sm list-disc list-outside ml-4">
                      <li>Developed a high-performance corporate website featuring advanced JSON-LD SEO schema, dynamic HTML Table of Contents parsing, and a ⌘K global command palette.</li>
                      <li>Enhanced user navigation and UX by integrating a session-aware AI chatbot and implementing On-Demand ISR (<code>revalidateTag</code>) for optimal content caching.</li>
                    </ul>
                  </div>

                  <div className="group">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold">Mouza Map & Land Area Calculator</h3>
                      <div className="flex gap-4">
                        <Link href="https://mouza-map-calculation.vercel.app/" target="_blank" className="text-xs font-bold text-primary hover:underline">Live Demo</Link>
                        <Link href="https://github.com/nurulla-hasan/mouza-map-calculation" target="_blank" className="text-xs font-bold text-primary hover:underline">GitHub</Link>
                      </div>
                    </div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">React, Konva.js, Zustand, jsPDF</p>
                    <ul className="space-y-2 text-muted-foreground text-sm list-disc list-outside ml-4">
                      <li>Engineered a high-performance 2D geospatial plotting tool using Konva.js, executing complex Shoelace algorithms to convert raw pixel distances into exact physical land areas (SqFt, Shotok).</li>
                      <li>Implemented a custom physics-based repulsion algorithm to prevent label overlapping and integrated client-side PDF processing (pdfjs), delivering instant, scale-accurate A4 reports without server overhead.</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-4 space-y-12">
              {/* Skills */}
              <section>
                <h2 className="text-base font-black uppercase tracking-widest mb-5 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-primary" />
                  Technical Skills
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {["React.js", "Next.js App Router", "TypeScript", "JavaScript ES6+", "Tailwind CSS", "shadcn/ui", "Konva.js", "Framer Motion"].map(s => (
                        <span key={s} className="px-3 py-1 bg-muted/20 border border-border rounded-md text-[10px] font-bold uppercase tracking-widest">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "JWT"].map(s => (
                        <span key={s} className="px-3 py-1 bg-muted/20 border border-border rounded-md text-[10px] font-bold uppercase tracking-widest">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3">State & Data</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Zustand", "Redux Toolkit", "TanStack Query", "TanStack Table", "React Hook Form", "Zod"].map(s => (
                        <span key={s} className="px-3 py-1 bg-muted/20 border border-border rounded-md text-[10px] font-bold uppercase tracking-widest">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3">Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Git", "GitHub", "Vercel", "jsPDF", "pnpm", "npm"].map(s => (
                        <span key={s} className="px-3 py-1 bg-muted/20 border border-border rounded-md text-[10px] font-bold uppercase tracking-widest">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section>
                <h2 className="text-base font-black uppercase tracking-widest mb-5 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  Education
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Diploma in Engineering</h3>
                    <p className="text-xs text-muted-foreground font-bold">Hajigonj Polytechnic Institute</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary mt-1">2018-2022</p>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section>
                <h2 className="text-base font-black uppercase tracking-widest mb-5 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  Education
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-foreground">BSc in Engineering</h3>
                    <p className="text-xs text-muted-foreground font-bold">World University of Bangladesh</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary mt-1">2024-present</p>
                  </div>
                </div>
              </section>

              {/* Training */}
              <section>
                <h2 className="text-base font-black uppercase tracking-widest mb-5 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  Additional Training
                </h2>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground font-medium">
                    Programming Hero — Level 1 completed, currently continuing Phitron.io
                  </p>
                </div>
              </section>

              {/* Languages */}
              <section>
                <h2 className="text-base font-black uppercase tracking-widest mb-5 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-primary" />
                  Languages
                </h2>
                <div className="space-y-2 text-sm font-bold">
                  <div className="flex justify-between">
                    <span className="uppercase tracking-widest text-muted-foreground">English</span>
                    <span className="text-primary">Comfortable</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="uppercase tracking-widest text-muted-foreground">Bangla</span>
                    <span className="text-primary">Native</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
