"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Send, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  InstagramIcon,
  NHLogo,
} from "@/components/ui/icons";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
];

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/nurulla-hasan" },
  { icon: LinkedinIcon, href: "https://linkedin.com/in/nurulla-hasan" },
  { icon: XIcon, href: "#" },
  { icon: InstagramIcon, href: "#" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const hashIndex = href.indexOf("#");
    if (hashIndex !== -1) {
      const hash = href.substring(hashIndex);
      const targetPath = href.substring(0, hashIndex) || "/";

      if (pathname === targetPath || (pathname === "/" && targetPath === "")) {
        e.preventDefault();
        const element = document.querySelector(hash);
        if (element) {
          const lenisInstance = (window as unknown as LenisWindow).lenis;
          if (lenisInstance) {
            lenisInstance.scrollTo(hash, {
              offset: -80,
              duration: 1.2,
            });
          } else {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    } else if (href === "/" || href === "") {
      if (pathname === "/") {
        e.preventDefault();
        const lenisInstance = (window as unknown as LenisWindow).lenis;
        if (lenisInstance) {
          lenisInstance.scrollTo(0, {
            duration: 1.2,
          });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-0 md:px-6 transition-all duration-500">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-5 py-2 md:px-10 md:py-3 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl border-x border-b md:border border-border/50 shadow-2xl shadow-primary/5 md:rounded-b-2xl lg:rounded-b-3xl"
            : "bg-transparent border border-transparent shadow-none"
        }`}
      >
        {/* Logo */}
        <Link 
          href="/" 
          onClick={(e) => handleNavLinkClick(e, "/")}
          className="group transition-all duration-300 shrink-0"
        >
          <NHLogo className="text-foreground h-8 md:h-12 w-auto transition-all group-hover:scale-110" />
        </Link>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" &&
                pathname.startsWith(link.href.split("#")[0] + "/"));

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-primary relative group/link ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover/link:w-full"}`}
                />
              </Link>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 md:gap-5">
          <div className="hidden lg:block">
            <ModeToggle variant="nav" />
          </div>
          <Link href="/resume">
            <Button variant="hero" className="hidden md:flex transition-all">
              <Send className="w-4 h-4 mr-2 fill-current" />
              Resume
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="nav" size="icon-sm" className="lg:hidden">
                <Menu className="w-6 h-6 text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              showCloseButton={false}
              className="bg-background/95 backdrop-blur-2xl border-l border-border/50 w-72 sm:w-80 p-0 overflow-hidden flex flex-col"
            >
              {/* Background architectural detail */}
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-2xl" />

              <SheetHeader className="p-6 pb-4 text-left border-b border-border/50 relative z-10 flex flex-row items-center justify-between">
                <SheetTitle className="text-lg font-bold uppercase tracking-widest flex items-center gap-2">
                  <NHLogo className="w-7 h-7" />
                </SheetTitle>
                <ModeToggle variant="nav" size="icon-sm" />
                <SheetDescription className="sr-only">
                  Navigation Menu
                </SheetDescription>
              </SheetHeader>

              <div className="flex-1 overflow-y-auto p-6 relative z-10">
                <div className="space-y-1">
                  {navLinks.map((link, idx) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={(e) => {
                          setIsOpen(false);
                          handleNavLinkClick(e, link.href);
                        }}
                        className="group relative flex items-center py-4 transition-all"
                      >
                        <div className="flex items-baseline gap-4 w-full">
                          <span
                            className={`text-xs transition-colors duration-300 ${
                              isActive
                                ? "text-primary"
                                : "text-muted-foreground/30 group-hover:text-primary/50"
                            }`}
                          >
                            /{idx + 1}
                          </span>
                          <div className="relative flex-1">
                            <span
                              className={`text-lg font-bold uppercase tracking-widest transition-all duration-500 block ${
                                isActive
                                  ? "text-primary translate-x-2"
                                  : "text-foreground group-hover:text-primary group-hover:translate-x-2"
                              }`}
                            >
                              {link.name}
                            </span>
                            {/* Simple accent bar */}
                            <span
                              className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-500 ${
                                isActive ? "w-8" : "w-0 group-hover:w-4"
                              }`}
                            />
                          </div>
                        </div>

                        {/* Right side indicator */}
                        {isActive && (
                          <div className="w-1 h-1 bg-primary shadow-[0_0_8px_var(--color-primary)]" />
                        )}
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-8 pt-6 border-t border-border/50">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                    Connect
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, idx) => (
                      <Link
                        key={idx}
                        href={social.href}
                        target="_blank"
                        className="w-10 h-10 rounded-lg border border-border bg-primary/5 flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-all cursor-pointer"
                      >
                        <social.icon className="w-5 h-5 stroke-[1.5px]" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-border/50 bg-muted/10 relative z-10">
                <Link href="/resume" onClick={() => setIsOpen(false)}>
                  <Button variant="hero" className="w-full">
                    <Send className="w-4 h-4 mr-2 fill-current" />
                    Resume
                  </Button>
                </Link>
                <p className="text-center text-[9px] font-medium text-muted-foreground mt-3 uppercase tracking-widest opacity-60">
                  Dhaka, Bangladesh
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
