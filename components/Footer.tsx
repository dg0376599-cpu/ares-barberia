import { business, whatsappUrl } from "@/content";

/**
 * Pie.
 *
 * Las páginas legales son obligatorias en una web de cliente aunque no
 * venda online: recoge datos (la visita, el clic a WhatsApp) y eso basta
 * para necesitar política de privacidad e identificación del responsable.
 *
 * Los enlaces llevan `py` propio: sin él quedan en ~17px de alto, muy por
 * debajo del mínimo táctil de 44px, en una página que se consume sobre
 * todo con el pulgar.
 */

const secciones = [
  { href: "#servicios", label: "Servicios" },
  { href: "#barberos", label: "Barberos" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#ubicacion", label: "Ubicación" },
];

const legales = [
  { href: "/privacidad", label: "Privacidad" },
  { href: "/cookies", label: "Cookies" },
  { href: "/terminos", label: "Términos" },
  { href: "/aviso-legal", label: "Aviso legal" },
];

const enlace =
  "-my-1 block py-2 text-ink-soft transition-colors hover:text-ink focus-visible:text-ink";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    // pb generoso: el botón flotante de reserva vive a 20px del borde
    // inferior y con menos espacio aterrizaba encima de los enlaces legales.
    <footer className="border-t border-edge px-5 pb-32 pt-16 sm:px-8 lg:px-12">
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-display text-[2rem] uppercase leading-none tracking-[0.06em]">
            {business.name}
          </p>
          <p className="mt-3 max-w-[30ch] text-sm text-ink-soft">
            Barbería en {business.city}. Corte, barba y afeitado con navaja.
          </p>
        </div>

        <nav aria-labelledby="footer-secciones">
          <h2
            id="footer-secciones"
            className="mb-3 font-body text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-bronze"
          >
            Secciones
          </h2>
          <ul className="grid gap-1 text-sm">
            {secciones.map((s) => (
              <li key={s.href}>
                <a href={s.href} className={enlace}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-3 font-body text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-bronze">
            Contacto
          </h2>
          <ul className="grid gap-1 text-sm">
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={enlace}
              >
                Reservar por WhatsApp
              </a>
            </li>
            <li>
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={enlace}
              >
                {business.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Identificación del responsable. Es requisito legal y además es lo
          que distingue un negocio real de una página improvisada. */}
      <p className="mt-16 max-w-[60ch] border-t border-edge pt-8 text-xs leading-relaxed text-ink-soft">
        {business.legalName} · RIF {business.taxId} · {business.address.street},{" "}
        {business.address.detail}, {business.address.city}, {business.address.region}.
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-xs text-ink-soft">
        <p>
          © {year} {business.fullName}
        </p>
        <ul className="flex flex-wrap gap-x-6">
          {legales.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={enlace}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
