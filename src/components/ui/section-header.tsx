import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge: string;
  title: string;
  titleAccent?: string;
  description?: string;
  link?: {
    href: string;
    label: string;
  };
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  titleAccent,
  description,
  link,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8", className)}>
      <div className="max-w-2xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-primary" />
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            {badge}
          </h2>
        </div>
        <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground mb-4">
          {title} {titleAccent && <span className="text-primary italic">{titleAccent}</span>}
        </h3>
        {description && (
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
            {description}
          </p>
        )}
      </div>
      
      {link && (
        <Link href={link.href}>
          <Button variant="nav" className="group">
            {link.label}
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      )}
    </div>
  );
}
