
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.5, // Standard sensitivity
      touchMultiplier: 1.5,
      infinite: false,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Expose lenis to window for global access (like from Navbar)
    (window as unknown as LenisWindow).lenis = lenis;

    // Initial scroll sync
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          lenis.scrollTo(window.location.hash, { offset: -80, duration: 1.2 });
        }
      }, 200);
    } else {
      lenis.scrollTo(0, { immediate: true });
    }

    const handleHashChange = () => {
      if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
          lenis.scrollTo(window.location.hash, { offset: -80, duration: 1.2 });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      lenis.destroy();
      window.removeEventListener("hashchange", handleHashChange);
      (window as unknown as LenisWindow).lenis = undefined;
    };
  }, []);

  useEffect(() => {
    const lenisInstance = (window as unknown as LenisWindow).lenis;
    if (!lenisInstance || !window.location.hash) return;

    const element = document.querySelector(window.location.hash);
    if (element) {
      lenisInstance.scrollTo(window.location.hash, { offset: -80, duration: 1.2 });
    }
  }, [pathname]);

  return <>{children}</>;
}
