
"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
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

    return () => {
      lenis.destroy();
      (window as unknown as LenisWindow).lenis = undefined;
    };
  }, []);

  return <>{children}</>;
}
