"use client";

import { useEffect, useRef } from "react";
import Hero from "./Hero";
import Manifesto from "./Manifesto";
import AresEmblem3D from "./AresEmblem3D";

/**
 * La apertura: hero y manifiesto como una sola unidad de marca, con el
 * emblema acompañando a ambas.
 *
 * Por qué acompaña solo hasta aquí y no toda la página: un sello que
 * persigue al visitante hasta los precios deja de ser un sello y pasa a
 * estorbar. Estas dos pantallas son las que presentan la marca; a partir
 * de "Servicios" el protagonismo es del contenido, y el emblema se va.
 *
 * El balanceo está atado a la posición del scroll, no a un temporizador:
 * la moneda se mece mientras el visitante baja, al ritmo que él marque.
 * Va en un envoltorio propio para no pelearse con la inclinación de
 * puntero, que escribe su transform en el elemento de dentro.
 *
 * Solo existe en escritorio. En móvil no hay columna lateral libre y el
 * emblema se queda dentro del hero.
 */
export default function Opening() {
  const zonaRef = useRef<HTMLDivElement>(null);
  const giroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(min-width: 1024px)").matches) return;

    const zona = zonaRef.current;
    const giro = giroRef.current;
    if (!zona || !giro) return;

    let ctx: { revert: () => void } | null = null;
    let cancelado = false;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelado) return;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          giro,
          { rotate: -7 },
          {
            rotate: 7,
            ease: "none",
            scrollTrigger: { trigger: zona, start: "top top", end: "bottom bottom", scrub: 1 },
          },
        );

        // Se desvanece en el último tramo, para no cortarse de golpe
        // contra el filete de la sección siguiente.
        gsap.to(giro, {
          opacity: 0,
          ease: "none",
          scrollTrigger: { trigger: zona, start: "bottom 90%", end: "bottom 45%", scrub: true },
        });
      }, zona);
    })();

    return () => {
      cancelado = true;
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={zonaRef} className="relative">
      <Hero />
      <Manifesto />

      {/* inset-y-0 le da altura al contenedor, que es lo que permite que
          el hijo sticky tenga recorrido. pointer-events-none para que no
          intercepte nada de la columna de texto. */}
      <div className="pointer-events-none absolute inset-y-0 right-12 hidden w-[17rem] lg:block">
        <div ref={giroRef} className="sticky top-[28vh]">
          <AresEmblem3D className="w-full" />
        </div>
      </div>
    </div>
  );
}
