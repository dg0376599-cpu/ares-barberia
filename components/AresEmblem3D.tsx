"use client";

import { useEffect, useRef } from "react";
import AresEmblem from "./AresEmblem";

/**
 * El emblema con profundidad real.
 *
 * Es una moneda, así que el 3D no es un adorno: gira sobre su eje al
 * entrar, como si alguien la volteara hacia el espectador, y después se
 * inclina siguiendo el puntero. El brillo se desplaza con la inclinación,
 * que es lo que convence al ojo de que hay metal y no un dibujo plano.
 *
 * Nada de rotación infinita: el cliente pidió expresamente que no hubiera
 * animaciones exageradas, y una moneda dando vueltas sola sería ruido en
 * la primera pantalla.
 *
 * Coste: solo `transform` en un elemento, calculado en rAF. Sin librería
 * 3D — meter WebGL para inclinar un SVG sería absurdo y bloquearía la
 * primera pantalla en un móvil con datos.
 */
export default function AresEmblem3D({ className = "" }: { className?: string }) {
  const escenaRef = useRef<HTMLDivElement>(null);
  const monedaRef = useRef<HTMLDivElement>(null);
  const brilloRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const escena = escenaRef.current;
    const moneda = monedaRef.current;
    const brillo = brilloRef.current;
    if (!escena || !moneda || !brillo) return;

    // Sin puntero fino (móvil y tablet) no hay nada que seguir, y quien
    // pidió menos movimiento no debería recibir parallax.
    const finoYConMovimiento = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    if (!finoYConMovimiento.matches) return;

    let frame = 0;
    let objetivoX = 0;
    let objetivoY = 0;
    let actualX = 0;
    let actualY = 0;

    const onMove = (e: PointerEvent) => {
      const r = escena.getBoundingClientRect();
      // −1..1 respecto al centro del emblema, con tope para que una
      // esquina lejana de la pantalla no lo tumbe del todo.
      objetivoY = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / 420));
      objetivoX = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / 420));
    };

    const bucle = () => {
      // Interpolación: el emblema persigue al puntero con retraso, que es
      // lo que separa "pesado y caro" de "pegado al ratón".
      actualX += (objetivoX - actualX) * 0.08;
      actualY += (objetivoY - actualY) * 0.08;

      const rotX = (-actualX * 11).toFixed(2);
      const rotY = (actualY * 14).toFixed(2);
      moneda.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;

      // El reflejo se mueve al contrario que la inclinación: así parece
      // una luz fija en la sala y no una mancha pegada al objeto.
      brillo.style.transform = `translate3d(${(-actualY * 16).toFixed(1)}%, ${(-actualX * 16).toFixed(1)}%, 0)`;

      frame = requestAnimationFrame(bucle);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(bucle);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    // aria-hidden: el h1 del hero ya anuncia "Ares Barbería". Sin esto, un
    // lector de pantalla leería la marca dos veces seguidas.
    <div ref={escenaRef} aria-hidden="true" className={`emblema-escena ${className}`}>
      <div ref={monedaRef} className="emblema-moneda">
        <AresEmblem className="block h-full w-full" />
        {/* Reflejo especular. pointer-events-none para no robarle el
            clic a nada que quede debajo. */}
        <div ref={brilloRef} aria-hidden="true" className="emblema-brillo" />
      </div>
    </div>
  );
}
