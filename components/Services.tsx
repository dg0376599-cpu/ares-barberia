import SectionHeading from "./SectionHeading";
import { services } from "@/content";

/**
 * Precios como lista tipográfica, nunca como tabla ni como tarjetas con
 * icono, borde redondeado y sombra.
 *
 * Ninguna de las barberías premium que investigamos usa tarjetas: todas
 * resuelven los precios como el menú de un restaurante — categoría
 * arriba, servicio a la izquierda, precio a la derecha, y aire entre
 * medias. La tarjeta con icono es la firma visual de una plantilla.
 */
export default function Services() {
  return (
    <section id="servicios" className="border-t border-edge px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <SectionHeading
        eyebrow="Servicios"
        title="Lo que hacemos y lo que cuesta"
        lead="Sin paquetes inventados ni letra pequeña. El precio que ves es el que pagas."
      />

      <div className="grid gap-14 sm:gap-16 lg:grid-cols-2 lg:gap-x-20">
        {services.map((group) => (
          <div key={group.group}>
            {/* font-body explícito: la regla global manda h1-h3 a la serif de
                display, y a 11px con tracking esa serif se vuelve ilegible.
                Un rótulo pequeño es trabajo de la sans. */}
            <h3 className="mb-6 font-body text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-bronze-light">
              {group.group}
            </h3>

            <dl className="grid">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 border-b border-edge py-5 last:border-b-0"
                >
                  <dt>
                    <span className="block text-[1.0625rem] text-ink">{item.name}</span>
                    <span className="mt-1 block text-sm text-ink-soft">{item.detail}</span>
                  </dt>
                  <dd className="tnum font-display text-[1.375rem] text-bronze-light">
                    ${item.price}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
}
