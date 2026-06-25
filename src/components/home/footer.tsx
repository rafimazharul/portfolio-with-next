import React from "react";

export function Footer() {
  return (
    <footer className="bg-primary/5 py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-muted-foreground font-medium text-sm">
          © {new Date().getFullYear()} Rafi. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
