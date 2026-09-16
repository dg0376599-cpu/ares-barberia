import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import { business, seo } from "@/content";
import SmoothScroll from "@/components/SmoothScroll";

/* Instrument Serif solo tiene un peso. Es display: va en el nombre y
   los titulares, nunca en texto corrido. */
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.url),
  title: seo.title,
  description: seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: seo.url,
    siteName: business.fullName,
    title: seo.title,
    description: seo.description,
    // La imagen que se ve al compartir el enlace por WhatsApp o Instagram.
    // Sin esto sale un cuadro en blanco, que es la diferencia entre que
    // alguien abra el enlace o lo ignore.
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: business.fullName }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

/* Datos estructurados: es lo que le dice a Google que esto es una
   barbería física en Caracas, con su dirección y su horario. Es lo que
   alimenta la ficha del mapa cuando alguien busca "barbería cerca de mí". */
function structuredData() {
  const openDays = business.hours.filter((h) => h.open !== null);
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: business.fullName,
    description: seo.description,
    url: seo.url,
    image: `${seo.url}/og.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${business.address.street}, ${business.address.detail}`,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.address.lat,
      longitude: business.address.lng,
    },
    openingHoursSpecification: openDays.map((h) => ({
      "@type": "OpeningHoursSpecification",
      description: h.days,
      opens: h.open,
      closes: h.close,
    })),
    sameAs: [business.instagram],
  };
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${instrumentSerif.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData()) }}
        />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
