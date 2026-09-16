/**
 * Encabezado de sección. Existe para que las ocho secciones compartan
 * exactamente el mismo ritmo: mismo tamaño de antetítulo, misma distancia
 * al título, mismo ancho de párrafo. Cuando cada sección se maqueta a
 * mano, esas medidas se desalinean y la página se siente descuidada sin
 * que uno sepa señalar por qué.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="mb-12 grid gap-3 sm:mb-16">
      <span className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-bronze">
        {eyebrow}
      </span>
      <h2 className="text-[clamp(1.75rem,5vw,2.75rem)]">{title}</h2>
      {lead ? <p className="max-w-[62ch] text-ink-soft">{lead}</p> : null}
    </div>
  );
}
