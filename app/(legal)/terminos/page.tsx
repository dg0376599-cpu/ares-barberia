import type { Metadata } from "next";
import { business, whatsappUrl } from "@/content";
import { LAST_UPDATED } from "../updated";

export const metadata: Metadata = {
  title: `Términos y condiciones · ${business.fullName}`,
  description: "Condiciones de uso del sitio y de las citas.",
  robots: { index: false, follow: true },
};

export default function Terminos() {
  return (
    <>
      <h1>Términos y condiciones</h1>
      <p>Última actualización: {LAST_UPDATED}</p>

      <h2>Quiénes somos</h2>
      <p>
        Este sitio pertenece a <strong>{business.legalName}</strong>, RIF {business.taxId}, con
        local en {business.address.street}, {business.address.detail}, {business.address.city}.
      </p>

      <h2>Uso del sitio</h2>
      <p>
        Esta página es informativa: muestra los servicios, los precios orientativos, el equipo y
        la ubicación de la barbería. <strong>No se venden productos ni se cobran servicios en
        línea.</strong> El pago se realiza siempre en el local, al terminar el servicio.
      </p>

      <h2>Citas</h2>
      <ul>
        <li>
          Las citas se solicitan por WhatsApp. Una solicitud{" "}
          <strong>no queda confirmada hasta que respondemos</strong> indicando día y hora.
        </li>
        <li>
          Le pedimos avisar con al menos <strong>dos horas de antelación</strong> si no va a poder
          venir, para poder ofrecer ese hueco a otra persona.
        </li>
        <li>
          Si llega con más de quince minutos de retraso, es posible que tengamos que reprogramar
          la cita: el tiempo reservado es el que necesita el servicio y no podemos recortarlo sin
          que se note en el resultado.
        </li>
      </ul>

      <h2>Precios</h2>
      <p>
        Los precios publicados están en dólares estadounidenses y son{" "}
        <strong>orientativos</strong>. El precio final se confirma en el local antes de empezar, y
        puede variar según el largo del cabello, el estado de la barba o servicios adicionales que
        usted solicite. Nunca se cobra nada que no se haya acordado antes.
      </p>

      <h2>Si algo no le gusta</h2>
      <p>
        Díganoslo en el momento, antes de irse del local. Si el resultado no corresponde a lo que
        acordamos, lo corregimos sin costo. Un corte no se puede deshacer, pero casi todo se puede
        ajustar si nos enteramos a tiempo.
      </p>

      <h2>Atención y reclamos</h2>
      <p>
        Para cualquier consulta, queja o reclamo, escríbanos por{" "}
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>{" "}
        o acérquese al local en horario de atención. Nos comprometemos a responder en un plazo
        máximo de <strong>quince días hábiles</strong> desde que recibimos el reclamo.
      </p>

      <h2>Privacidad</h2>
      <p>
        El tratamiento de sus datos se describe en nuestra{" "}
        <a href="/privacidad">política de privacidad</a>.
      </p>

      <h2>Cambios</h2>
      <p>
        Podemos actualizar estos términos. La versión vigente es siempre la publicada en esta
        página, con la fecha que aparece al principio.
      </p>
    </>
  );
}
