import SectionHeading from "./SectionHeading";
import { barbers } from "@/content";

/**
 * Los barberos.
 *
 * Todavía no hay retratos profesionales, así que en lugar de meter fotos
 * de stock —gente sonriendo que no trabaja aquí, que es peor que no tener
 * foto— el hueco se resuelve con tipografía: la inicial compuesta en la
 * serif de display sobre la superficie oscura.
 *
 * Es honesto y se sostiene solo. Cuando lleguen los retratos de la
 * sesión, entran en `content.ts` y esta rejilla no cambia.
 *
 * Sobre el ritmo: tres cajas idénticas en fila es el patrón que delata
 * una plantilla, pero estirar una para romperlo deja un hueco muerto en
 * la rejilla. La solución es desplazar la del medio en vertical: rompe la
 * simetría y todas las celdas siguen llenas.
 */
export default function Barbers() {
  return (
    <section id="barberos" className="border-t border-edge px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <SectionHeading
        eyebrow="El equipo"
        title="Quién sostiene la navaja"
        lead="Cada uno tiene lo suyo. Si vienes por algo concreto, pídelo por nombre al reservar."
      />

      {/* pb en lg: compensa el desplazamiento de la tarjeta del medio,
          si no desborda sobre la sección siguiente. */}
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:pb-14">
        {barbers.map((barber, i) => (
          <li
            key={i}
            className={`group flex flex-col justify-between border border-edge bg-surface p-7 transition-colors duration-300 hover:border-bronze-deep sm:p-8 ${
              // El del medio baja: rompe la fila sin dejar celdas vacías.
              i === 1 ? "lg:translate-y-14" : ""
            }`}
          >
            <span
              aria-hidden="true"
              className="font-display text-[5.5rem] leading-[0.8] text-bronze-deep transition-colors duration-300 group-hover:text-bronze"
            >
              {barber.name.charAt(0)}
            </span>

            <div className="mt-12">
              <h3 className="text-[1.375rem] text-ink">{barber.name}</h3>
              <p className="mt-1.5 text-sm text-bronze-light">{barber.specialty}</p>
              <p className="mt-3 text-sm text-ink-soft">
                <span className="tnum">{barber.years}</span> años en el oficio
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
