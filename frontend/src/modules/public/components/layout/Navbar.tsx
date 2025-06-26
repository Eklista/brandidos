import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', href: '#' },
    { name: 'Servicios', href: '#' },
    { name: 'Banda', href: '#' },
    { name: 'FAQ', href: '#' }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-8"
    >
      <div className="flex items-center justify-between w-full">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="font-black text-2xl cursor-pointer font-[var(--font-poppins)] flex-shrink-0"
        >
          <span className="text-white tracking-tight">BRANDIDOS</span>
        </motion.div>

        <div className="hidden lg:flex items-center bg-black/80 backdrop-blur-xl rounded-full border border-white/10 px-2 py-2">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 font-[var(--font-sora)] whitespace-nowrap ${
                index === 0 
                  ? 'bg-white text-black' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden lg:block bg-lime-400 hover:bg-lime-500 text-black px-8 py-3 rounded-full font-semibold font-[var(--font-sora)] transition-all duration-300 text-sm flex-shrink-0"
        >
          Comenzar
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-3 text-white hover:bg-white/10 rounded-full transition-colors duration-200 bg-black/50 backdrop-blur-xl border border-white/10"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-white block transition-all duration-300 origin-center rounded-full"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-0.5 bg-white block mt-1.5 transition-all duration-300 rounded-full"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-white block mt-1.5 transition-all duration-300 origin-center rounded-full"
            />
          </div>
        </motion.button>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="lg:hidden overflow-hidden mt-4"
      >
        <div className="bg-black/90 backdrop-blur-xl rounded-3xl border border-white/10 p-6">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ x: -30, opacity: 0 }}
              animate={isMenuOpen ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`block py-4 px-4 font-medium transition-all duration-200 font-[var(--font-sora)] rounded-2xl mb-2 last:mb-0 ${
                index === 0 
                  ? 'bg-white text-black' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </motion.a>
          ))}
          <motion.button
            initial={{ x: -30, opacity: 0 }}
            animate={isMenuOpen ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.25 }}
            className="w-full mt-4 bg-lime-400 hover:bg-lime-500 text-black px-6 py-4 rounded-2xl font-semibold transition-all duration-200 font-[var(--font-sora)]"
            onClick={() => setIsMenuOpen(false)}
          >
            Comenzar
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;