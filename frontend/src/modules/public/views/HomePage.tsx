import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import StreetDivider from '../components/ui/StreetDivider';
import FAQSection from '../components/sections/FAQSection';
import FooterWithCTA from '../components/sections/FooterSection';
import FloatingButtons from '../components/ui/FloatingButtons';

const Homepage = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Inicializar Lenis con configuración básica
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    // Función de animación
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="inicio" className="relative">
      <Hero />
      </div>
      <div id="servicios" className="relative">
      <ServicesSection />
      </div>
      <StreetDivider />
      <div id="proyectos" className="relative">
      <PortfolioSection />
      </div>
      <StreetDivider />
      <div id="faq" className="relative">
      <FAQSection />
      </div>
      <FooterWithCTA />

      <FloatingButtons />
    </div>
  );
};

export default Homepage;