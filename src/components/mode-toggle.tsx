"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

type Size = "icon" | "default" | "xs" | "sm" | "lg" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined;
type Variant = "default" | "outline" | "secondary" | "ghost" | "link" | "hero" | "nav";

export function ModeToggle({ 
  size = "icon", 
  variant = "outline", 
  className 
}: { 
  size?: Size, 
  variant?: Variant, 
  className?: string 
}) {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant={variant}
      size={size}
      className={className || ""}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
