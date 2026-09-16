/**
 * TODO EL CONTENIDO EDITABLE DE LA PÁGINA VIVE AQUÍ.
 *
 * Es el único archivo que hay que tocar para cambiar textos, precios,
 * barberos o datos de contacto. Nada de esto está escrito dentro de los
 * componentes a propósito: así el cliente (o su futuro CMS) cambia el
 * contenido sin tocar una línea de maquetación.
 *
 * ⚠️  Lo que siga marcado como PENDIENTE es provisional.
 */

export const business = {
  name: "Ares",
  fullName: "Ares Barbería",
  legalName: "Ares Barbería, C.A.",
  taxId: "J-40987654-3",
  city: "Caracas",
  country: "Venezuela",

  /**
   * Número de ejemplo, deliberadamente inexistente.
   *
   * Este es un proyecto conceptual y la página es pública: un número real
   * en una web de negocio local lo recogen los rastreadores de spam en
   * cuestión de días, y queda además en los datos estructurados y en la
   * caché de los buscadores, de donde ya no se puede retirar.
   *
   * El botón sigue siendo funcional y demuestra el flujo completo; solo
   * el destino es de mentira.
   */
  whatsapp: "584120000000",
  whatsappMessage: "Hola, quisiera reservar una cita en Ares Barbería.",

  address: {
    street: "C.C. Concresa, Nivel C2, Local 14",
    detail: "Urb. Prados del Este",
    city: "Caracas 1080",
    region: "Distrito Capital",
    country: "VE",
    /**
     * Coordenadas fuera a propósito, de momento.
     *
     * La dirección escrita ya es correcta y Google la geocodifica solo,
     * así que el mapa y la ficha funcionan. Fijar aquí un punto aproximado
     * sería peor que no poner ninguno: Google prioriza las coordenadas
     * sobre el texto, y un punto a dos calles manda al cliente a la puerta
     * equivocada.
     *
     * Para rellenarlas: abrir Google Maps, clic derecho justo sobre la
     * entrada del local, copiar las coordenadas que salen.
     */
    lat: null as number | null,
    lng: null as number | null,
  },

  hours: [
    { days: "Lunes a sábado", open: "09:00", close: "19:00" },
    { days: "Domingo", open: null, close: null },
  ],

  instagramHandle: "@aresbarberiacaracas",
  instagram: "https://instagram.com/aresbarberiacaracas",

  // PENDIENTE — correo para el canal de reclamos (requisito legal).
  contactEmail: null as string | null,
} as const;

export const hero = {
  claimQuiet: "No es un corte.",
  claimLoud: "Es tu cara.",
  cta: "Reservar por WhatsApp",
} as const;

export const manifesto = {
  eyebrow: "El oficio",
  text: "Una barbería no se mide por la silla ni por el espejo. Se mide por el pulso de quien sostiene la navaja y por el tiempo que decide dedicarte. Aquí nadie tiene prisa. El corte termina cuando está bien, no cuando suena la hora.",
} as const;

export const services = [
  {
    group: "Corte",
    items: [
      { name: "Corte clásico", detail: "Tijera y máquina, lavado incluido", price: 8 },
      { name: "Fade / degradado", detail: "Degradado a piel, perfilado de contornos", price: 10 },
      { name: "Corte y barba", detail: "El servicio completo", price: 13 },
      { name: "Corte niño", detail: "Hasta 12 años, sin prisa y con paciencia", price: 6 },
    ],
  },
  {
    group: "Barba",
    items: [
      { name: "Arreglo de barba", detail: "Perfilado, tijera y aceite", price: 6 },
      { name: "Afeitado con navaja", detail: "Toalla caliente, navaja y bálsamo frío", price: 9 },
    ],
  },
] as const;

export const barbers = [
  { name: "Carlos Medina", specialty: "Fades y diseños", years: 8, photo: null },
  { name: "Andrés Ruiz", specialty: "Barba y afeitado clásico", years: 12, photo: null },
  { name: "Miguel Torres", specialty: "Cortes clásicos y niños", years: 5, photo: null },
] as const;

/**
 * Galería antes/después.
 *
 * ⚠️ PROVISIONALES — NO PUBLICAR ASÍ. Dos motivos, los dos serios:
 *
 * 1. RESOLUCIÓN. Vienen comprimidas por WhatsApp. El par 3 mide 119px de
 *    ancho y el comparador las muestra a ~400px: se verá como un mosaico.
 *    Para que se vean nítidas en un móvil moderno (densidad 2x-3x) hacen
 *    falta unos 1200px de ancho reales. Hay que pedirlas por AirDrop,
 *    Drive o correo — nunca por WhatsApp, que recomprime siempre.
 *
 * 2. PROCEDENCIA. En el par 1 se ve el cartel de otra barbería al fondo,
 *    y el par 3 es otro local distinto. No son trabajos de Ares. Publicar
 *    trabajo ajeno como propio es engañoso con el cliente final y además
 *    es material de otro. Se sustituyen por fotos de la sesión real.
 *
 * Sirven para dejar el comparador montado y probado. Nada más.
 *
 * El tratamiento (blanco y negro con tinte bronce) se aplica por CSS, no
 * está quemado en los archivos: unifica fotos de procedencia y calidad
 * distintas, y de paso disimula el ruido de compresión.
 */
export const gallery = [
  {
    before: "/trabajos/corte-1-antes.jpg",
    after: "/trabajos/corte-1-despues.jpg",
    service: "Fade con tupé y perfilado de barba",
  },
  {
    before: "/trabajos/corte-2-antes.jpg",
    after: "/trabajos/corte-2-despues.jpg",
    service: "Corte clásico con flequillo",
  },
  {
    before: "/trabajos/corte-3-antes.jpg",
    after: "/trabajos/corte-3-despues.jpg",
    service: "Corte corto en cabello rizado",
  },
] as const;

/**
 * Testimonios reales, con permiso por escrito del cliente que los dio.
 *
 * ⚠️  Vacío a propósito. La sección no se muestra mientras no haya
 *     testimonios de verdad: publicar reseñas inventadas como si fueran
 *     reales es publicidad engañosa, y el riesgo lo asume el negocio.
 *     Mejor lanzar sin la sección y añadirla cuando haya tres auténticos.
 */
export const testimonials: { quote: string; author: string; context: string }[] = [];

export const closing = {
  line: "Forjado en Caracas.",
} as const;

export const seo = {
  title: "Ares Barbería · Barbería premium en Caracas",
  description:
    "Corte clásico, fade, arreglo de barba y afeitado con navaja en Caracas. Desde $6. Reserva por WhatsApp.",
  url: "https://aresbarberia.com", // PENDIENTE — dominio real
} as const;

/** Enlace de WhatsApp ya montado, para no repetir la lógica en cada botón. */
export const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
  business.whatsappMessage,
)}`;
