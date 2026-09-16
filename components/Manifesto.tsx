"use client";

import { useEffect, useRef } from "react";
import { manifesto } from "@/content";

/**
 * El texto se va encendiendo palabra por palabra conforme el visitante
 * baja. No es un fade-in al entrar en pantalla: está *atado* a la
 * posición del scroll (`scrub`), así que el lector controla el ritmo.
 *
 * Esa diferencia es exactamente la que separa algo hecho a mano de un
 * `fade-in-on-scroll` de librería.
 *
 * Se anima `opacity` y no `color`: la opacidad la resuelve el compositor
 * sin repintar, así que aguanta 60fps con muchas palabras en pantalla.
 */
export default function Manifesto() {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    let ctx: { revert: () => void } | null = null;
    let cancelled = false;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          el.querySelectorAll<HTMLElement>("[data-word]"),
          { opacity: 0.18 },
          {
            opacity: 1,
            stagger: 0.5,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 78%",
              end: "bottom 55%",
              scrub: true,
            },
          },
        );
      }, el);
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  const words = manifesto.text.split(" ");

  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <span className="mb-8 block text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-bronze">
        {manifesto.eyebrow}
      </span>
      <p
        ref={ref}
        className="max-w-[20ch] font-display text-[clamp(1.75rem,5.5vw,3.25rem)] leading-[1.15] tracking-[-0.02em] sm:max-w-[24ch]"
      >
        {words.map((word, i) => (
          <span key={i} data-word className="inline-block">
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </p>
    </section>
  );
}
