import { hero, business, whatsappUrl } from "@/content";
import AresEmblem3D from "./AresEmblem3D";

/**
 * El hero. La primera pantalla decide casi todo el juicio del visitante,
 * y no puede estar quieta.
 *
 * El movimiento significa algo: una línea de bronce cruza la pantalla y
 * va revelando el nombre a su paso — el filo de la navaja convertido en
 * transición. No es un efecto de catálogo.
 *
 * Por qué CSS y no Framer Motion: son transform y opacity, que el
 * navegador resuelve en el compositor. Es imposible que bajen de 60fps,
 * y ahorramos ~50KB en la primera carga. Una librería de animación se
 * justifica cuando hace falta orquestación o gestos, no aquí.
 *
 * Sobre el emblema y el wordmark diciendo los dos "ARES": no compiten
 * porque trabajan a escalas distintas. El sello es el detalle que da
 * autoridad —como el escudo de una marca centenaria— y el wordmark es la
 * voz. Truefitt & Hill, que lleva en esto desde 1805, hace exactamente
 * eso: escudo arriba, nombre en grande. Lo que no se puede es ponerlos
 * del mismo tamaño; ahí sí se estorbarían.
 */
export default function Hero() {
  const letters = business.name.split("");

  return (
    <section
      // La clase va en el HTML servido, no añadida por JS al hidratar.
      // Si se añadía después, en una conexión lenta el visitante veía el
      // hero completo, desaparecer y volver a entrar cuando llegaba el
      // bundle. Los @keyframes no necesitan JavaScript para correr.
      className="hero-lista relative flex min-h-[88svh] flex-col justify-center px-5 pb-16 pt-20 sm:px-8 sm:pt-24 lg:px-12"
    >
      <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
        {/* Columna de la voz */}
        <div className="order-2 lg:order-1">
          <h1
            aria-label={business.fullName}
            className="font-display text-[clamp(3.75rem,18vw,10rem)] uppercase leading-[0.85] tracking-[0.08em] [text-indent:0.08em]"
          >
            {letters.map((letter, i) => (
              <span key={i} className="mask" aria-hidden="true">
                <span
                  className="glyph inline-block"
                  style={{ animationDelay: `${0.4 + i * 0.06}s` }}
                >
                  {letter}
                </span>
              </span>
            ))}
          </h1>

          {/* La navaja */}
          <div
            aria-hidden="true"
            className="blade my-7 h-px origin-left bg-linear-to-r from-bronze-deep via-bronze-light to-bronze-deep sm:my-9"
          />

          {/* El remate en dos tiempos. La pausa entre ambas líneas es lo
              que hace que funcione: sin ella son dos frases que entran,
              con ella hay un golpe. */}
          <p className="claim-quiet font-display text-[clamp(1.125rem,4vw,1.75rem)] leading-tight text-ink-soft">
            {hero.claimQuiet}
          </p>
          <p className="font-display text-[clamp(2.5rem,10vw,4.5rem)] leading-none tracking-[-0.015em] text-bronze-light">
            <span className="mask">
              <span className="claim-loud inline-block">{hero.claimLoud}</span>
            </span>
          </p>

          <div className="hero-actions mt-10 sm:mt-12">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-bronze px-7 py-4 text-[0.8125rem] font-medium uppercase tracking-[0.1em] text-ground transition-colors duration-200 hover:bg-bronze-light focus-visible:bg-bronze-light"
            >
              {hero.cta}
            </a>
          </div>
        </div>

        {/* El sello. Deliberadamente más pequeño que el wordmark: es el
            detalle que acredita, no el titular. */}
        <AresEmblem3D className="order-1 w-[7.5rem] justify-self-start sm:w-[9rem] lg:order-2 lg:w-[17rem] lg:justify-self-end" />
      </div>
    </section>
  );
}
