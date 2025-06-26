import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Dribbble } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-0">
      <div
        style={{ backgroundImage: 'url(/hero-bg.webp)' }}
        className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/40 to-transparent"></div>
        
        {/* Floating Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute inset-0 z-10"
        >
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-lime-400 rounded-full blur-sm"
          />
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-1/3 right-1/3 w-1 h-1 bg-lime-300 rounded-full blur-sm"
          />
          <motion.div
            animate={{ 
              y: [0, -25, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-lime-500/20 rounded-full blur-md"
          />
        </motion.div>

        {/* Scan Lines Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
          }}
        />

        {/* Character */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 w-full flex justify-center"
        >
          <motion.img
            src="/brandido-hero.webp"
            alt="Brandidos Character"
            className="h-[35vh] sm:h-[40vh] md:h-[45vh] lg:h-[65vh] xl:h-[75vh] w-auto max-w-[90vw] sm:max-w-[80vw] md:max-w-none object-contain"
            style={{
              filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.8)) drop-shadow(0 0 30px rgba(132,204,22,0.15))'
            }}
          />
        </motion.div>

        {/* Main Text Mobile/Tablet */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="lg:hidden absolute top-[12vh] sm:top-[15vh] md:top-[18vh] left-1/2 transform -translate-x-1/2 z-30 text-center px-4 w-full"
        >
          <motion.h2
            className="text-lg sm:text-xl md:text-2xl font-bold text-white font-[var(--font-poppins)] leading-tight mb-1 sm:mb-2"
            style={{
              textShadow: '0 0 20px rgba(132,204,22,0.3), 0 4px 8px rgba(0,0,0,0.8)'
            }}
          >
            No somos una agencia
          </motion.h2>
         
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="text-sm sm:text-base md:text-lg text-white/90 font-[var(--font-sora)] font-medium"
            style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.8)'
            }}
          >
            somos una banda de creativos
          </motion.p>
        </motion.div>

        {/* Main Text Desktop */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="hidden lg:block absolute bottom-16 md:bottom-32 left-1/2 transform -translate-x-1/2 z-30 text-center px-4"
        >
          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white font-[var(--font-poppins)] leading-tight mb-1 md:mb-2"
            style={{
              textShadow: '0 0 20px rgba(132,204,22,0.3), 0 4px 8px rgba(0,0,0,0.8)'
            }}
          >
            No somos una agencia
          </motion.h2>
         
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="text-lg md:text-xl lg:text-2xl text-white/90 font-[var(--font-sora)] font-medium"
            style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.8)'
            }}
          >
            somos una banda de creativos
          </motion.p>
        </motion.div>

        {/* Corner Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 z-20"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 border-lime-400/30 border-dashed rounded-lg rotate-45" />
        </motion.div>

        {/* Bottom Accent Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, delay: 2 }}
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-lime-400/50 to-transparent z-10"
        />

        {/* Social Icons Desktop */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="hidden lg:flex fixed left-4 xl:left-6 top-1/2 transform -translate-y-1/2 z-40"
        >
          <div className="flex flex-col space-y-4">
            {[
              { Icon: Instagram, label: 'Instagram' },
              { Icon: Facebook, label: 'Facebook' },
              { Icon: Twitter, label: 'Twitter' },
              { Icon: Dribbble, label: 'Dribbble' }
            ].map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.2 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.2, 
                  x: 8,
                  boxShadow: '0 0 20px rgba(132,204,22,0.4)'
                }}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 cursor-pointer border border-white/20 hover:border-lime-400/30"
              >
                <social.Icon className="w-5 h-5 text-white" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Icons Mobile/Tablet */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="lg:hidden absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-40"
        >
          <div className="flex space-x-3 sm:space-x-4">
            {[
              { Icon: Instagram, label: 'Instagram' },
              { Icon: Facebook, label: 'Facebook' },
              { Icon: Twitter, label: 'Twitter' },
              { Icon: Dribbble, label: 'Dribbble' }
            ].map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 + index * 0.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 cursor-pointer border border-white/20"
              >
                <social.Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;