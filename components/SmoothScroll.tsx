"use client";

import { useEffect } from "react";

/**
 * Scroll suave con Lenis.
 *
 * Es lo que hace que una web "se sienta cara": el scroll deja de ser
 * a saltos y pasa a tener inercia. Cuesta poco y se nota mucho.
 *
 * Dos cuidados importantes:
 *  1. Si el visitante pidió movimiento reducido, no se activa. Un scroll
 *     con inercia marea de verdad a quien tiene sensibilidad vestibular.
 *  2. Se sincroniza con GSAP ScrollTrigger; si no, las animaciones ligadas
 *     al scroll se desfasan del scroll real.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReduced.matches) return;

    let lenis: import("lenis").default | null = null;
    let frame = 0;
    let cancelled = false;

    (async () => {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      lenis = new Lenis({ duration: 1.1, smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);

      const raf = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
    })();

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, []);

  return null;
}
