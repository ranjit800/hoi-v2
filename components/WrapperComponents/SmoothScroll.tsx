"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // Add class to body to enable normal scrolling after Lenis is ready
    document.body.classList.add('lenis-ready');

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }


    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      document.body.classList.remove('lenis-ready');
    };
  }, [isMounted]);

  return <>{children}</>;
}
