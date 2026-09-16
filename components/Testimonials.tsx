import SectionHeading from "./SectionHeading";
import { testimonials } from "@/content";

/**
 * Testimonios como citas tipográficas, sin tarjetas.
 *
 * Una cita entre comillas grandes en la serif de display se lee como una
 * persona hablando. La misma frase dentro de una tarjeta con avatar
 * redondo y cinco estrellitas se lee como un widget, y el visitante ya
 * aprendió a ignorar los widgets.
 */
export default function Testimonials() {
  return (
    <section className="border-t border-edge px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <SectionHeading eyebrow="Clientes" title="Lo que dicen" />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {testimonials.map((t, i) => (
          <blockquote key={i} className="grid gap-5">
            <p className="font-display text-[clamp(1.375rem,3.5vw,1.875rem)] leading-[1.25] text-ink">
              <span aria-hidden="true" className="text-bronze-deep">
                «
              </span>
              {t.quote}
              <span aria-hidden="true" className="text-bronze-deep">
                »
              </span>
            </p>
            <footer className="text-sm text-ink-soft">
              <cite className="not-italic text-bronze-light">{t.author}</cite>
              {t.context ? <span> · {t.context}</span> : null}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
