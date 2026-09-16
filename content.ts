/**
 * TODO EL CONTENIDO EDITABLE DE LA PÁGINA VIVE AQUÍ.
 *
 * Es el único archivo que hay que tocar para cambiar textos, precios,
 * barberos o datos de contacto. Nada de esto está escrito dentro de los
 * componentes a propósito: así el cliente (o su futuro CMS) cambia el
 * contenido sin tocar una línea de maquetación.
 *
 * ⚠️  Los valores marcados con PENDIENTE son provisionales, a la espera
 *     de los datos reales del cliente.
 */

export const business = {
  name: "Ares",
  fullName: "Ares Barbería",
  city: "Caracas",
  country: "Venezuela",

  // PENDIENTE — número real del cliente. Formato internacional, sin + ni espacios.
  whatsapp: "584120000000",
  whatsappMessage: "Hola, quisiera reservar una cita en Ares Barbería.",

  // PENDIENTE — dirección exacta del local.
  address: {
    street: "Av. Principal de Las Mercedes",
    detail: "Nivel calle, local 3",
    city: "Caracas",
    region: "Distrito Capital",
    country: "VE",
    // Coordenadas aproximadas de Las Mercedes. PENDIENTE: las del local real.
    lat: 10.4806,
    lng: -66.8564,
  },

  hours: [
    { days: "Lunes a viernes", open: "10:00", close: "20:00" },
    { days: "Sábado", open: "09:00", close: "18:00" },
    { days: "Domingo", open: null, close: null },
  ],

  instagram: "https://instagram.com/aresbarberia", // PENDIENTE
} as const;

export const hero = {
  claimQuiet: "No es un corte.",
  claimLoud: "Es tu cara.",
  cta: "Reservar por WhatsApp",
} as const;

export const manifesto = {
  eyebrow: "El oficio",
  // Se pinta palabra por palabra al bajar. Conviene que no pase de ~45 palabras.
  text: "Una barbería no se mide por la silla ni por el espejo. Se mide por el pulso de quien sostiene la navaja y por el tiempo que decide dedicarte. Aquí nadie tiene prisa. El corte termina cuando está bien, no cuando suena la hora.",
} as const;

/** PENDIENTE — precios reales del cliente. En dólares, que es como se cotiza en Caracas. */
export const services = [
  {
    group: "Corte",
    items: [
      { name: "Corte clásico", detail: "Tijera y máquina, lavado incluido", price: 15 },
      { name: "Fade", detail: "Degradado a piel, perfilado de contornos", price: 18 },
      { name: "Corte y barba", detail: "El servicio completo", price: 28 },
    ],
  },
  {
    group: "Barba",
    items: [
      { name: "Arreglo de barba", detail: "Perfilado, tijera y aceite", price: 12 },
      { name: "Afeitado con navaja", detail: "Toalla caliente, navaja y bálsamo frío", price: 20 },
    ],
  },
] as const;

/** PENDIENTE — nombres, especialidades y retratos reales. */
export const barbers = [
  { name: "Nombre del barbero", specialty: "Fades y degradados", years: 8, photo: null },
  { name: "Nombre del barbero", specialty: "Navaja y afeitado clásico", years: 12, photo: null },
  { name: "Nombre del barbero", specialty: "Barba y diseño", years: 5, photo: null },
] as const;

/** PENDIENTE — fotos reales antes/después de la sesión. */
export const gallery = [
  { before: null, after: null, service: "Fade con perfilado" },
  { before: null, after: null, service: "Corte y barba" },
  { before: null, after: null, service: "Afeitado con navaja" },
] as const;

/**
 * PENDIENTE — testimonios reales con permiso del cliente.
 * ⚠️  No publicar reseñas inventadas presentándolas como reales:
 *     además de deshonesto, en varios países es publicidad engañosa.
 */
export const testimonials = [
  { quote: "Pendiente de recibir del cliente.", author: "Cliente", context: "" },
  { quote: "Pendiente de recibir del cliente.", author: "Cliente", context: "" },
] as const;

export const closing = {
  line: "Forjado en Caracas.",
} as const;

export const seo = {
  title: "Ares Barbería · Barbería premium en Caracas",
  description:
    "Corte clásico, fade, arreglo de barba y afeitado con navaja en Caracas. Reserva por WhatsApp.",
  url: "https://aresbarberia.com", // PENDIENTE — dominio real
} as const;

/** Enlace de WhatsApp ya montado, para no repetir la lógica en cada botón. */
export const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
  business.whatsappMessage,
)}`;
