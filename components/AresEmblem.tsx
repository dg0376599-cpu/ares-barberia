/**
 * Emblema de Ares — sello tipo moneda.
 *
 * Adaptado del SVG original del cliente. Tres cambios deliberados:
 *
 * 1. COLORES A LA PALETA. El original usaba un cobre `#b87333` con 46% de
 *    saturación. Nuestra regla de metálicos (diseno.md §7) fija el techo
 *    en ~35%: por encima, el metal empieza a leerse barato. Todo pasa a
 *    los tres bronces de la página, que son el mismo H30/S33 a distinta
 *    luminosidad. Se toman de las variables CSS, así que el emblema
 *    cambia solo si algún día cambia la paleta.
 *
 * 2. TIPOGRAFÍA. El original pedía 'Big Shoulders Display', que no está
 *    cargada: habría caído a Arial Narrow en casi cualquier navegador.
 *    Cargarla sería una tercera familia, y el proyecto tiene tope de dos.
 *    El "ARES" del sello usa la serif de display de la página, así que el
 *    emblema y el wordmark hablan el mismo idioma.
 *
 * 3. EL BORDE DENTADO SE GENERA. El original traía 60 líneas escritas a
 *    mano. Aquí salen de un bucle: menos código, y el número de marcas se
 *    cambia con una constante.
 *
 * También se eliminó el bloque de metadatos incrustado del archivo
 * original: pesaba más que el dibujo entero y no pinta nada.
 */

const MARCAS = 60;
const CENTRO = 160;
const R_EXTERIOR = 140;
const R_INTERIOR = 134;

/**
 * Las coordenadas se redondean a dos decimales, y no es cosmética: sin
 * redondear, React serializa el mismo float con distinta precisión en el
 * servidor y en el cliente (259.5814066139708 frente a 259.58140661397084)
 * y la hidratación avisa de que el árbol no coincide. Dos decimales sobran
 * para un dibujo de 320 unidades, y de paso el HTML pesa menos.
 */
const r2 = (n: number) => Math.round(n * 100) / 100;

function bordeDentado() {
  return Array.from({ length: MARCAS }, (_, i) => {
    const angulo = (i / MARCAS) * Math.PI * 2;
    const cos = Math.cos(angulo);
    const sin = Math.sin(angulo);
    return (
      <line
        key={i}
        x1={r2(CENTRO + cos * R_EXTERIOR)}
        y1={r2(CENTRO + sin * R_EXTERIOR)}
        x2={r2(CENTRO + cos * R_INTERIOR)}
        y2={r2(CENTRO + sin * R_INTERIOR)}
      />
    );
  });
}

export default function AresEmblem({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 320"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ares Barbería, Caracas"
      className={className}
    >
      <defs>
        <radialGradient id="ares-fondo" cx="50%" cy="40%" r="80%">
          <stop offset="0%" stopColor="var(--color-surface)" />
          <stop offset="100%" stopColor="var(--color-ground)" />
        </radialGradient>

        {/* Relieve: una sombra abajo y una luz bronce arriba. Es lo que
            hace que el texto parezca acuñado y no impreso. */}
        <filter id="ares-relieve" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1.2" stdDeviation="0" floodColor="#000000" floodOpacity="0.55" />
          <feDropShadow
            dx="0"
            dy="-0.6"
            stdDeviation="0"
            floodColor="var(--color-bronze-light)"
            floodOpacity="0.4"
          />
        </filter>

        <path id="ares-arco" d="M 66,198 A 96,96 0 0 0 254,198" />
      </defs>

      <circle cx="160" cy="160" r="150" fill="url(#ares-fondo)" />

      <g stroke="var(--color-bronze-deep)" strokeWidth="1">
        {bordeDentado()}
      </g>

      <circle cx="160" cy="160" r="132" fill="none" stroke="var(--color-bronze)" strokeWidth="1.5" />
      <circle
        cx="160"
        cy="160"
        r="120"
        fill="none"
        stroke="var(--color-bronze-deep)"
        strokeWidth="0.6"
      />

      {/* Marcas cardinales */}
      <g fill="var(--color-bronze)">
        <rect x="157" y="30" width="6" height="6" transform="rotate(45 160 33)" />
        <rect x="287" y="157" width="6" height="6" transform="rotate(45 290 160)" />
        <rect x="27" y="157" width="6" height="6" transform="rotate(45 30 160)" />
      </g>

      {/* La navaja: único elemento figurativo del sello */}
      <g transform="translate(160,86)">
        <path
          d="M -34,0 L 20,0 L 30,-6 L 34,0 L 30,6 L 20,0"
          fill="none"
          stroke="var(--color-bronze)"
          strokeWidth="1.6"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <line
          x1="-34"
          y1="0"
          x2="-42"
          y2="0"
          stroke="var(--color-bronze)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </g>

      <text
        x="160"
        y="176"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="58"
        fill="var(--color-ink)"
        letterSpacing="4"
        filter="url(#ares-relieve)"
      >
        ARES
      </text>

      <line x1="112" y1="192" x2="208" y2="192" stroke="var(--color-bronze)" strokeWidth="1" />
      <line
        x1="130"
        y1="196"
        x2="190"
        y2="196"
        stroke="var(--color-bronze-deep)"
        strokeWidth="0.6"
      />

      <text
        fontFamily="var(--font-body)"
        fontSize="12"
        fill="var(--color-ink-soft)"
        letterSpacing="3.2"
      >
        <textPath href="#ares-arco" startOffset="50%" textAnchor="middle">
          BARBERÍA · CARACAS
        </textPath>
      </text>

      <circle cx="66" cy="198" r="1.8" fill="var(--color-bronze-deep)" />
      <circle cx="254" cy="198" r="1.8" fill="var(--color-bronze-deep)" />
    </svg>
  );
}
