"use client";

import { useEffect, useRef } from "react";
import { closing } from "@/content";

/**
 * "Forjado en Caracas" con un barrido de luz cruzando el metal,
 * atado a la posición del scroll.
 *
 * Esta técnica aparece UNA sola vez en toda la página, a propósito. El
 * hero ya tiene su propio gesto (la navaja); repetir el truco aquí lo
 * gastaría y le quitaría el golpe a los dos.
 *
 * El texto es legible sin JS y sin soporte de `background-clip: text`:
 * el color sólido es el estado base y el gradiente solo se aplica dentro
 * de @supports. Sin esa precaución, un navegador que no lo soporte
 * pintaría el texto transparente, es decir, invisible.
 */
export default function Closing() {
  const ref = useRef<HTMLHeadingElement>(null);

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
          el,
          { backgroundPositionX: "100%" },
          {
            backgroundPositionX: "0%",
            ease: "none",
            scrollTrigger: { trigger: el, start: "top 90%", end: "bottom 30%", scrub: true },
          },
        );
      }, el);
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="border-t border-edge px-5 py-28 sm:px-8 sm:py-36 lg:px-12">
      {/* h2 y no p: es la frase de marca más grande de la página y le
          corresponde peso semántico, también de cara a Google. */}
      <h2
        ref={ref}
        className="metal-sweep mx-auto max-w-[14ch] text-center text-[clamp(2.75rem,11vw,7rem)] leading-[0.95] tracking-[-0.03em]"
      >
        {closing.line}
      </h2>
    </section>
  );
}
