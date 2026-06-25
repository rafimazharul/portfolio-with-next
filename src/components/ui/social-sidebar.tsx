"use client";

import * as React from "react";
import { GithubIcon, LinkedinIcon, XIcon, InstagramIcon } from "@/components/ui/icons";

const SOCIALS = [
  { 
    label: "GitHub", 
    href: "https://github.com/nurulla-hasan",
    icon: GithubIcon
  },
  { 
    label: "LinkedIn", 
    href: "https://linkedin.com/in/nurulla-hasan",
    icon: LinkedinIcon
  },
  { 
    label: "Twitter", 
    href: "https://x.com",
    icon: XIcon
  },
  { 
    label: "Instagram", 
    href: "https://instagram.com",
    icon: InstagramIcon
  },
];

export function SocialSidebar() {
  return (
    <div className="fixed right-6 md:right-10 bottom-0 z-50 hidden md:flex flex-col items-center gap-6">
      {/* Social Links */}
      <div className="flex flex-col gap-6">
        {SOCIALS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center p-2 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Glow Background */}
            <div className="absolute inset-0 bg-primary/0 rounded-full blur-md group-hover:bg-primary/20 transition-all duration-500" />
            
            <social.icon 
              className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 relative z-10" 
              strokeWidth={1.5}
            />

            {/* Tooltip */}
            <span className="absolute right-12 px-3 py-1.5 rounded-md bg-background border border-border/40 text-[0.6rem] font-bold tracking-widest uppercase text-foreground opacity-0 pointer-events-none group-hover:opacity-100 group-hover:right-14 transition-all duration-300 whitespace-nowrap">
              {social.label}
            </span>
          </a>
        ))}
      </div>

      {/* Vertical architectural line matching the site's grid style */}
      <div className="w-px h-32 bg-linear-to-b from-primary/60 via-primary/20 to-transparent" />
    </div>
  );
}
