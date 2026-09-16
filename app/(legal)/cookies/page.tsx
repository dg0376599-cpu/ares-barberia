import type { Metadata } from "next";
import { business } from "@/content";
import { LAST_UPDATED } from "../updated";

export const metadata: Metadata = {
  title: `Política de cookies · ${business.fullName}`,
  description: "Qué cookies usa este sitio.",
  robots: { index: false, follow: true },
};

export default function Cookies() {
  return (
    <>
      <h1>Política de cookies</h1>
      <p>Última actualización: {LAST_UPDATED}</p>

      <h2>Este sitio no usa cookies de seguimiento</h2>
      <p>
        No instalamos cookies publicitarias, ni de análisis de comportamiento, ni de redes
        sociales. <strong>Por eso no verá un banner pidiéndole permiso</strong>: no hay nada que
        autorizar.
      </p>
      <p>
        Es una decisión deliberada. Un banner de cookies molesta en cada visita, y para una página
        informativa como esta no aporta nada que justifique esa molestia.
      </p>

      <h2>La única excepción: el mapa</h2>
      <p>
        La sección de ubicación muestra un mapa de Google.{" "}
        <strong>Ese mapa no se carga automáticamente</strong>: aparece un recuadro con la
        dirección y un botón. Solo si usted pulsa <em>Ver el mapa</em> se carga el servicio de
        Google, y es en ese momento cuando Google puede instalar sus propias cookies en su
        navegador.
      </p>
      <p>
        Dicho de otro modo: <strong>usted decide</strong>. Si no pulsa, Google no recibe nada
        sobre su visita.
      </p>

      <h2>Cómo borrar o bloquear cookies</h2>
      <p>
        Si en algún momento cargó el mapa y quiere eliminar las cookies que Google haya podido
        guardar, puede hacerlo desde la configuración de su navegador. Todos los navegadores
        permiten ver, borrar y bloquear cookies por sitio, normalmente en el apartado de
        privacidad o de datos de navegación.
      </p>

      <h2>Si esto cambia</h2>
      <p>
        Si en el futuro incorporamos herramientas de medición, actualizaremos esta página y, si
        esas herramientas usaran cookies,{" "}
        <strong>no se activarán hasta que usted lo autorice expresamente</strong>.
      </p>
    </>
  );
}
