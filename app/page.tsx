import Opening from "@/components/Opening";
import Services from "@/components/Services";
import Barbers from "@/components/Barbers";
import Gallery from "@/components/Gallery";
import Closing from "@/components/Closing";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

/**
 * Landing de una sola vista.
 *
 * El orden no es casual: hero (quiénes somos y por qué importa) →
 * manifiesto (el tono) → servicios y precios (la pregunta que trae al
 * visitante) → equipo y trabajos (la prueba) → cierre de marca →
 * testimonios (prueba social) → ubicación (el último dato antes de ir).
 *
 * Los precios van pronto a propósito: es lo primero que busca alguien que
 * entra a la web de una barbería, y esconderlos abajo del todo lo obliga
 * a un scroll que muchos no hacen.
 */
export default function Home() {
  return (
    <>
      <main>
        {/* Hero y manifiesto van juntos: comparten el emblema que los
            acompaña en escritorio. Ver Opening. */}
        <Opening />
        <Services />
        <Barbers />
        <Gallery />
        <Closing />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
