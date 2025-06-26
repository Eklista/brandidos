import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [isInHero, setIsInHero] = useState(true);

  const menuItems = [
    { name: 'Inicio', href: '#inicio', id: 'inicio' },
    { name: 'Servicios', href: '#servicios', id: 'servicios' },
    { name: 'Proyectos', href: '#proyectos', id: 'proyectos' },
    { name: 'FAQ', href: '#faq', id: 'faq' }
  ];

  // Scroll suave y tracking de sección activa
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  // Detectar sección activa y si estamos en hero
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.id);
      const scrollPosition = window.scrollY + 150;

      // Detectar si estamos en hero
      const heroElement = document.getElementById('inicio');
      if (heroElement) {
        const heroBottom = heroElement.offsetTop + heroElement.offsetHeight;
        setIsInHero(window.scrollY < heroBottom - 200);
      }

      // Detectar sección activa
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-8"
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="font-black text-2xl cursor-pointer font-[var(--font-poppins)] flex-shrink-0 transition-colors duration-300"
          onClick={() => scrollToSection('inicio')}
        >
          <span className={`tracking-tight transition-colors duration-300 ${
            isInHero ? 'text-white' : 'text-zinc-900'
          }`}>
            BRANDIDOS
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className={`hidden lg:flex items-center backdrop-blur-xl rounded-full border px-2 py-2 transition-all duration-300 ${
          isInHero 
            ? 'bg-black/80 border-white/10' 
            : 'bg-white/90 border-zinc-200 shadow-lg'
        }`}>
          {menuItems.map((item, index) => (
            <motion.button
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => scrollToSection(item.id)}
              className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 font-[var(--font-sora)] whitespace-nowrap ${
                activeSection === item.id
                  ? (isInHero ? 'bg-white text-black' : 'bg-zinc-900 text-white')
                  : (isInHero 
                      ? 'text-white/70 hover:text-white hover:bg-white/10' 
                      : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                    )
              }`}
            >
              {item.name}
            </motion.button>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-full transition-all duration-300 font-[var(--font-sora)] text-sm font-medium ${
              isInHero
                ? 'text-white/80 hover:text-white hover:bg-white/10'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Login</span>
          </motion.button>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('faq')}
            className="bg-lime-400 hover:bg-lime-500 text-black px-8 py-3 rounded-full font-semibold font-[var(--font-sora)] transition-all duration-300 text-sm flex-shrink-0"
          >
            Comenzar
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`lg:hidden p-3 rounded-full transition-colors duration-200 backdrop-blur-xl border ${
            isInHero
              ? 'text-white hover:bg-white/10 bg-black/50 border-white/10'
              : 'text-zinc-900 hover:bg-zinc-100 bg-white/50 border-zinc-200'
          }`}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className={`w-5 h-0.5 block transition-all duration-300 origin-center rounded-full ${
                isInHero ? 'bg-white' : 'bg-zinc-900'
              }`}
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`w-5 h-0.5 block mt-1.5 transition-all duration-300 rounded-full ${
                isInHero ? 'bg-white' : 'bg-zinc-900'
              }`}
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className={`w-5 h-0.5 block mt-1.5 transition-all duration-300 origin-center rounded-full ${
                isInHero ? 'bg-white' : 'bg-zinc-900'
              }`}
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="lg:hidden overflow-hidden mt-4"
      >
        <div className={`backdrop-blur-xl rounded-3xl border p-6 transition-all duration-300 ${
          isInHero
            ? 'bg-black/90 border-white/10'
            : 'bg-white/95 border-zinc-200 shadow-lg'
        }`}>
          {/* Mobile Menu Items */}
          {menuItems.map((item, index) => (
            <motion.button
              key={item.name}
              initial={{ x: -30, opacity: 0 }}
              animate={isMenuOpen ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left py-4 px-4 font-medium transition-all duration-200 font-[var(--font-sora)] rounded-2xl mb-2 last:mb-0 ${
                activeSection === item.id
                  ? (isInHero ? 'bg-white text-black' : 'bg-zinc-900 text-white')
                  : (isInHero 
                      ? 'text-white/80 hover:text-white hover:bg-white/10' 
                      : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                    )
              }`}
            >
              {item.name}
            </motion.button>
          ))}

          {/* Mobile Login */}
          <motion.button
            initial={{ x: -30, opacity: 0 }}
            animate={isMenuOpen ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className={`flex items-center space-x-2 w-full text-left py-4 px-4 font-medium transition-all duration-200 font-[var(--font-sora)] rounded-2xl mb-2 ${
              isInHero
                ? 'text-white/80 hover:text-white hover:bg-white/10'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Login</span>
          </motion.button>

          {/* Mobile CTA */}
          <motion.button
            initial={{ x: -30, opacity: 0 }}
            animate={isMenuOpen ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.25 }}
            onClick={() => scrollToSection('faq')}
            className="w-full mt-4 bg-lime-400 hover:bg-lime-500 text-black px-6 py-4 rounded-2xl font-semibold transition-all duration-200 font-[var(--font-sora)]"
          >
            Comenzar
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;