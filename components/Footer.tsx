import { business, whatsappUrl } from "@/content";

/**
 * Pie.
 *
 * Las páginas legales son obligatorias en una web de cliente aunque no
 * venda online: recoge datos (la visita, el clic a WhatsApp) y eso basta
 * para necesitar política de privacidad y aviso de cookies.
 *
 * ⚠️ Los enlaces apuntan a páginas que todavía hay que redactar antes de
 *    publicar. No se entrega el sitio con estos enlaces rotos.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-edge px-5 pb-16 pt-16 sm:px-8 lg:px-12">
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-display text-[2rem] leading-none tracking-[0.06em]">
            {business.name}
          </p>
          <p className="mt-3 max-w-[30ch] text-sm text-ink-soft">
            Barbería en {business.city}. Corte, barba y afeitado con navaja.
          </p>
        </div>

        <nav aria-label="Secciones">
          <h2 className="mb-4 font-body text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-bronze">
            Secciones
          </h2>
          <ul className="grid gap-2.5 text-sm">
            <li>
              <a href="#servicios" className="text-ink-soft transition-colors hover:text-ink">
                Servicios
              </a>
            </li>
            <li>
              <a href="#barberos" className="text-ink-soft transition-colors hover:text-ink">
                Barberos
              </a>
            </li>
            <li>
              <a href="#trabajos" className="text-ink-soft transition-colors hover:text-ink">
                Trabajos
              </a>
            </li>
            <li>
              <a href="#ubicacion" className="text-ink-soft transition-colors hover:text-ink">
                Ubicación
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 font-body text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-bronze">
            Contacto
          </h2>
          <ul className="grid gap-2.5 text-sm">
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-soft transition-colors hover:text-ink"
              >
                Reservar por WhatsApp
              </a>
            </li>
            <li>
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-soft transition-colors hover:text-ink"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-edge pt-8 text-xs text-ink-soft">
        <p>
          © {year} {business.fullName}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <a href="/privacidad" className="transition-colors hover:text-ink">
              Privacidad
            </a>
          </li>
          <li>
            <a href="/cookies" className="transition-colors hover:text-ink">
              Cookies
            </a>
          </li>
          <li>
            <a href="/terminos" className="transition-colors hover:text-ink">
              Términos
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
