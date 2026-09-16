"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { business } from "@/content";

/**
 * Ubicación con mapa que se carga solo si el visitante lo pide.
 *
 * Un iframe de Google Maps incrustado de entrada trae scripts de
 * terceros y cookies antes de que nadie haya aceptado nada, y pesa en la
 * primera carga de una página que la mayoría abre con datos móviles.
 *
 * Aquí el mapa real entra al pulsar. Hasta entonces se ve la dirección,
 * que es la información que el visitante venía buscando de todas formas.
 */
export default function Location() {
  const [loaded, setLoaded] = useState(false);

  const query = encodeURIComponent(
    `${business.address.street}, ${business.address.city}, ${business.address.country}`,
  );

  return (
    <section id="ubicacion" className="border-t border-edge px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <SectionHeading eyebrow="Dónde estamos" title="Ubicación y horario" />

      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div className="grid content-start gap-10">
          <address className="not-italic">
            <p className="text-[1.0625rem] text-ink">{business.address.street}</p>
            <p className="text-ink-soft">{business.address.detail}</p>
            <p className="text-ink-soft">
              {business.address.city}, {business.address.region}
            </p>
          </address>

          <dl className="grid gap-px bg-edge">
            {business.hours.map((h) => (
              <div
                key={h.days}
                className="grid grid-cols-[1fr_auto] items-baseline gap-4 bg-ground py-3"
              >
                <dt className="text-sm text-ink-soft">{h.days}</dt>
                {/* "Cerrado" en ink-soft (7.2:1), no en bronze-deep (2.74:1):
                    el bronce profundo es para filetes, y esto es información
                    que la gente necesita leer. Si hay que distinguirlo, se
                    distingue con la palabra, no bajando el contraste. */}
                <dd className={`tnum text-sm ${h.open ? "text-ink" : "text-ink-soft"}`}>
                  {h.open ? `${h.open} – ${h.close}` : "Cerrado"}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${query}`}
            target="_blank"
            rel="noopener noreferrer"
            className="-my-2 justify-self-start border-b border-bronze-deep py-2 text-sm text-bronze-light transition-colors hover:border-bronze-light hover:text-ink"
          >
            Cómo llegar
          </a>
        </div>

        <div className="relative min-h-[18rem] bg-surface lg:min-h-[24rem]">
          {loaded ? (
            <iframe
              title={`Mapa de ${business.fullName}`}
              src={`https://maps.google.com/maps?q=${query}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale-[0.9] contrast-125"
            />
          ) : (
            <button
              type="button"
              onClick={() => setLoaded(true)}
              className="group absolute inset-0 grid place-content-center gap-3 text-center"
            >
              <span className="mx-auto block h-px w-16 bg-bronze-deep transition-colors group-hover:bg-bronze-light" />
              <span className="text-[0.75rem] uppercase tracking-[0.14em] text-bronze-light">
                Ver el mapa
              </span>
              <span className="mx-auto max-w-[32ch] text-[0.8125rem] text-ink-soft">
                Se carga solo al pulsar, para no ralentizar la página ni activar cookies de
                terceros sin tu permiso.
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
