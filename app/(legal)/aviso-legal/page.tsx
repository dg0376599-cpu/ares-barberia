import type { Metadata } from "next";
import { business, whatsappUrl } from "@/content";
import { LAST_UPDATED } from "../updated";

export const metadata: Metadata = {
  title: `Aviso legal · ${business.fullName}`,
  description: "Identificación del responsable del sitio web.",
  robots: { index: false, follow: true },
};

export default function AvisoLegal() {
  return (
    <>
      <h1>Aviso legal</h1>
      <p>Última actualización: {LAST_UPDATED}</p>

      <h2>Responsable del sitio</h2>
      <p>
        Este sitio web es titularidad de <strong>{business.legalName}</strong>, inscrita bajo el
        Registro de Información Fiscal <strong>{business.taxId}</strong>, con domicilio en{" "}
        {business.address.street}, {business.address.detail}, {business.address.city},{" "}
        {business.address.region}, Venezuela.
      </p>

      <h2>Contacto</h2>
      <p>
        Puede comunicarse con nosotros por{" "}
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>{" "}
        o en el local durante el horario de atención publicado en la página principal.
      </p>

      <h2>Objeto del sitio</h2>
      <p>
        Este sitio tiene finalidad informativa: presenta los servicios, el equipo y la ubicación
        de la barbería, y permite solicitar una cita a través de WhatsApp.{" "}
        <strong>No se realizan ventas ni cobros en línea</strong> y no se procesan pagos a través
        de esta página.
      </p>

      <h2>Propiedad intelectual</h2>
      <p>
        Los textos, fotografías, marcas y elementos gráficos de este sitio pertenecen a{" "}
        {business.legalName} o se utilizan con autorización. No está permitida su reproducción
        sin consentimiento previo por escrito.
      </p>

      <h2>Responsabilidad</h2>
      <p>
        Los precios y horarios publicados son orientativos y pueden variar. El precio final de un
        servicio se confirma en el local antes de realizarlo. Procuramos que la información esté
        actualizada, pero no podemos garantizar que esté libre de errores u omisiones.
      </p>
    </>
  );
}
