"use client";

import Image from "next/image";
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
 * Tratamiento de imagen: blanco y negro con un velado de bronce por
 * encima (`mix-blend-color` sobre la foto desaturada). Unifica fotos
 * tomadas en sitios y con cámaras distintas —que es justo el caso aquí— y
 * de paso el ruido de compresión canta mucho menos sin color.
 */
function Comparator({
  service,
  before,
  after,
  priority,
}: {
  service: string;
  before: string;
  after: string;
  priority: boolean;
}) {
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

  // object-position alto: en una foto de corte lo que importa es la
  // cabeza, y estas vienen muy verticales. Centrarlas cortaría el pelo.
  const imgClass = "object-cover object-[center_22%] grayscale contrast-[1.15]";
  const sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

  return (
    <figure className="grid gap-3">
      <div
        ref={frameRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        className="relative aspect-3/4 cursor-ew-resize touch-pan-y select-none overflow-hidden bg-surface outline-offset-2 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-bronze-light"
      >
        {/* Después — capa de fondo */}
        <div className="absolute inset-0">
          <Image src={after} alt="" fill sizes={sizes} className={imgClass} priority={priority} />
          <div aria-hidden="true" className="absolute inset-0 bg-bronze mix-blend-color opacity-55" />
          <span className="absolute bottom-4 right-4 text-[0.6875rem] uppercase tracking-[0.14em] text-ink drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
            Después
          </span>
        </div>

        {/* Antes — recortada por la posición de la manija */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={before}
            alt={`Antes: ${service}`}
            fill
            sizes={sizes}
            className={imgClass}
            priority={priority}
          />
          <div aria-hidden="true" className="absolute inset-0 bg-bronze-deep mix-blend-color opacity-55" />
          <span className="absolute bottom-4 left-4 text-[0.6875rem] uppercase tracking-[0.14em] text-ink drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
            Antes
          </span>
        </div>

        {/* La manija */}
        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-bronze-light"
          style={{ left: `${position}%` }}
        >
          <span className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-bronze-light bg-ground/80" />
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
        title="Antes y después"
        lead="Arrastra para ver el cambio. Sin filtros ni retoque."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {gallery.map((item, i) => (
          <Comparator
            key={item.service}
            service={item.service}
            before={item.before}
            after={item.after}
            // Solo la primera se carga con prioridad: las otras dos
            // entran al hacer scroll y no deben competir por el ancho
            // de banda de la primera pantalla.
            priority={i === 0}
          />
        ))}
      </div>
    </section>
  );
}
