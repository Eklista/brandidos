import { motion } from 'framer-motion';
import { Palette, Monitor, Layers } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "BRANDING &\nDISEÑO",
      description: "Creamos marcas que no se olvidan. Tu identidad visual va a hablar más fuerte que la competencia.",
      features: ["Identidad Visual", "Logo Design", "Brand Guidelines"],
      delay: 0.1,
      number: "01."
    },
    {
      icon: Layers,
      title: "UX/UI\nDESIGN",
      description: "Interfaces que la gente entiende sin manual. Diseño que funciona en la calle y en la oficina.",
      features: ["User Research", "Wireframing", "UI Design"],
      delay: 0.2,
      number: "02."
    },
    {
      icon: Monitor,
      title: "DISEÑO\nWEB",
      description: "Sitios que cargan rápido y se ven brutales en cualquier pantalla. Sin trucos, puro resultado.",
      features: ["Diseño Responsive", "Landing Pages", "E-commerce"],
      delay: 0.3,
      number: "03."
    }
  ];

  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            y: [0, -8, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-1 h-1 bg-lime-400 rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-zinc-900 font-[var(--font-poppins)] leading-[0.9] mb-8"
            >
              LO QUE<br />
              HACEMOS<br />
              <span className="text-lime-400">ESTÁ BRUTAL</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-zinc-600 font-[var(--font-sora)] leading-relaxed"
            >
              Combinamos creatividad de barrio con estrategia que funciona en la calle y en la oficina.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6, type: "spring", bounce: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <img 
              src="/brandido.png" 
              alt="Brandido" 
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>

        <div className="space-y-20 md:space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: service.delay }}
              className="group relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Número grande */}
                <div className="lg:col-span-2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center lg:justify-start"
                  >
                    <span className="text-7xl md:text-8xl lg:text-9xl font-black text-zinc-100 group-hover:text-lime-100 transition-colors duration-500 font-[var(--font-poppins)]">
                      {service.number}
                    </span>
                  </motion.div>
                </div>

                {/* Contenido principal */}
                <div className="lg:col-span-7 space-y-6">
                  <motion.h3
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-black text-zinc-900 leading-tight font-[var(--font-poppins)] whitespace-pre-line group-hover:text-zinc-700 transition-colors duration-300"
                  >
                    {service.title}
                  </motion.h3>
                  
                  <p className="text-lg md:text-xl text-zinc-600 leading-relaxed font-[var(--font-sora)]">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: service.delay + (featureIndex * 0.1) }}
                        className="flex items-center text-sm text-zinc-500 font-medium bg-zinc-50 px-4 py-3 rounded-lg border border-zinc-100 group-hover:bg-lime-50 group-hover:border-lime-200 transition-all duration-300"
                      >
                        <div className="w-2 h-2 bg-lime-400 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Icono */}
                <div className="lg:col-span-3 flex justify-center lg:justify-end">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3, type: "spring", bounce: 0.4 }}
                    className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 border-3 border-zinc-200 group-hover:border-lime-300 rounded-2xl flex items-center justify-center transition-all duration-300 bg-white shadow-lg group-hover:shadow-xl"
                  >
                    <service.icon 
                      className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-zinc-400 group-hover:text-lime-400 transition-colors duration-300" 
                      strokeWidth={1}
                    />
                  </motion.div>
                </div>
              </div>

              {index < services.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: service.delay + 0.4 }}
                  className="w-full h-px bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200 mt-20 md:mt-24 origin-center"
                />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-24 md:mt-32"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 60px rgba(163, 230, 53, 0.3)",
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-12 py-5 bg-zinc-900 hover:bg-lime-400 hover:text-zinc-900 text-white font-bold text-lg rounded-2xl transition-all duration-300 border-3 border-transparent hover:border-zinc-900 shadow-lg"
          >
            Dale, trabajemos juntos
          </motion.button>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-zinc-500 mt-6 text-base font-[var(--font-sora)]"
          >
            Sin vuelta, hablemos claro
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;