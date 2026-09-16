import Link from "next/link";
import { business } from "@/content";

/**
 * Contenedor común de las páginas legales.
 *
 * Comparten maquetación para que se lean como un cuerpo de documentos y
 * no como cuatro páginas sueltas, y para que el ancho de lectura sea
 * cómodo: un texto legal a todo el ancho de la pantalla no lo lee nadie.
 */
export default function LegalLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24">
      <Link
        href="/"
        className="font-body text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-bronze transition-colors hover:text-bronze-light"
      >
        ← {business.fullName}
      </Link>

      <article
        className="
          mt-10
          [&_h1]:text-[clamp(2rem,6vw,3rem)]
          [&_h2]:mt-14 [&_h2]:mb-4 [&_h2]:text-[1.5rem]
          [&_p]:mt-4 [&_p]:text-ink-soft
          [&_li]:mt-2 [&_li]:text-ink-soft
          [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5
          [&_strong]:font-medium [&_strong]:text-ink
          [&_a]:text-bronze-light [&_a]:underline [&_a]:underline-offset-4
        "
      >
        {children}
      </article>
    </div>
  );
}
