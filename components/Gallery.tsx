"use client";

import { useCallback, useRef, useState } from "react";
import SectionHeading from "./SectionHeading";
import { gallery } from "@/content";

/**
 * Comparador antes/después.
 *
 * El visitante arrastra la manija y descubre el resultado. Es la única
 * animación de la página que controla él directamente, y por eso es la
 * más convincente: no le están enseñando el trabajo, lo está revelando.
 *
 * Accesible con teclado: la manija es un slider real, así que las flechas
 * funcionan y un lector de pantalla lo anuncia como lo que es.
 *
 * Mientras no haya fotos reales, se muestran dos superficies distintas
 * con su etiqueta. La mecánica ya queda probada; al llegar las fotos solo
 * cambia `content.ts`.
 */
function Comparator({ service, index }: { service: string; index: number }) {
  const [position, setPosition] = useState(50);
  const frameRef = useRef<HTMLDivElement>(null);

  const moveTo = useCallback((clientX: number) => {
    const frame = frameRef.current;
    if (!frame) return;
    const rect = frame.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as Element).setPointerCapture?.(e.pointerId);
    moveTo(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (e.buttons !== 1) return;
    moveTo(e.clientX);
  };

  return (
    <figure className="grid gap-3">
      <div
        ref={frameRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        className="relative aspect-4/5 cursor-ew-resize touch-pan-y select-none overflow-hidden bg-surface"
      >
        {/* Después (capa de fondo) */}
        <div className="absolute inset-0 grid place-items-center bg-surface">
          <span className="font-display text-[clamp(2rem,6vw,3rem)] text-bronze-deep">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="absolute bottom-4 right-4 text-[0.625rem] uppercase tracking-[0.14em] text-ink-soft">
            Después
          </span>
        </div>

        {/* Antes (capa recortada por la posición de la manija) */}
        <div
          className="absolute inset-0 grid place-items-center bg-ground"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <span className="font-display text-[clamp(2rem,6vw,3rem)] text-edge">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="absolute bottom-4 left-4 text-[0.625rem] uppercase tracking-[0.14em] text-ink-soft">
            Antes
          </span>
        </div>

        {/* La manija */}
        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-bronze-light"
          style={{ left: `${position}%` }}
        >
          <span className="absolute top-1/2 left-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-bronze-light bg-ground" />
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(position)}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label={`Comparar antes y después: ${service}`}
          className="absolute inset-x-0 bottom-0 h-11 w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="text-sm text-ink-soft">{service}</figcaption>
    </figure>
  );
}

export default function Gallery() {
  return (
    <section id="trabajos" className="border-t border-edge px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <SectionHeading
        eyebrow="Trabajos"
        title="Antes y después"
        lead="Arrastra para ver el cambio. Sin filtros ni retoque: la misma luz y el mismo ángulo en las dos fotos."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {gallery.map((item, i) => (
          <Comparator key={i} service={item.service} index={i} />
        ))}
      </div>
    </section>
  );
}
