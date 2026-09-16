import type { Metadata } from "next";
import { business, whatsappUrl } from "@/content";
import { LAST_UPDATED } from "../updated";

export const metadata: Metadata = {
  title: `Política de privacidad · ${business.fullName}`,
  description: "Qué datos recogemos y qué hacemos con ellos.",
  robots: { index: false, follow: true },
};

export default function Privacidad() {
  return (
    <>
      <h1>Política de privacidad</h1>
      <p>Última actualización: {LAST_UPDATED}</p>

      <h2>Quién trata sus datos</h2>
      <p>
        <strong>{business.legalName}</strong>, RIF {business.taxId}, con domicilio en{" "}
        {business.address.street}, {business.address.detail}, {business.address.city}.
      </p>

      <h2>Qué datos recogemos</h2>
      <p>
        Este sitio <strong>no tiene formularios</strong> y no le pide ningún dato para navegarlo.
        No hay registro, no hay cuentas de usuario y no se procesan pagos aquí.
      </p>
      <p>Los únicos datos que pueden llegar a nosotros son:</p>
      <ul>
        <li>
          <strong>Los que usted nos escriba por WhatsApp</strong> al pulsar el botón de reserva:
          su número de teléfono, su nombre de perfil y el contenido de su mensaje. Esa
          conversación ocurre dentro de WhatsApp y se rige también por las condiciones de ese
          servicio.
        </li>
        <li>
          <strong>Datos técnicos de la visita</strong> que registra automáticamente el servidor
          donde está alojada la página (dirección IP, tipo de navegador, hora de acceso). Se usan
          para mantener el servicio en funcionamiento y detectar fallos.
        </li>
      </ul>

      <h2>Para qué los usamos</h2>
      <ul>
        <li>Atender su solicitud de cita y coordinar el día y la hora.</li>
        <li>Responder a sus consultas o reclamos.</li>
        <li>Mantener el sitio en funcionamiento y seguro.</li>
      </ul>
      <p>
        <strong>No vendemos ni cedemos sus datos a terceros</strong> y no los usamos para
        publicidad de otras empresas.
      </p>

      <h2>Cuánto tiempo los conservamos</h2>
      <p>
        Las conversaciones de WhatsApp se conservan mientras sean necesarias para atenderle y para
        dejar constancia del servicio prestado. Puede pedirnos en cualquier momento que borremos
        la conversación.
      </p>

      <h2>Servicios de terceros</h2>
      <p>
        El mapa de la sección de ubicación es un servicio de Google.{" "}
        <strong>No se carga hasta que usted pulsa sobre él</strong>: hasta ese momento, Google no
        recibe ninguna información sobre su visita. Al cargarlo, se aplica la política de
        privacidad de Google.
      </p>
      <p>
        Los enlaces a WhatsApp e Instagram le llevan fuera de este sitio y se rigen por las
        políticas de esas plataformas.
      </p>

      <h2>Sus derechos</h2>
      <p>
        Puede pedirnos acceder a los datos que tengamos sobre usted, corregirlos o eliminarlos.
        Para hacerlo, escríbanos por{" "}
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        . Le responderemos en un plazo máximo de <strong>quince días hábiles</strong>.
      </p>

      <h2>Menores de edad</h2>
      <p>
        El servicio de corte infantil se concierta siempre a través de un adulto responsable. No
        recogemos datos de menores de forma directa.
      </p>

      <h2>Cambios en esta política</h2>
      <p>
        Si modificamos esta política, actualizaremos la fecha que aparece al principio de esta
        página.
      </p>
    </>
  );
}
