import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';

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
      <Hero />
      <ServicesSection />
    </div>
  );
};

export default Homepage;