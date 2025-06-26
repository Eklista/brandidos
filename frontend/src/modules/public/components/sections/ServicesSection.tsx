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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 md:mb-20">
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
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-zinc-900 font-[var(--font-poppins)] leading-[0.9] mb-6"
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
              className="text-lg text-zinc-600 font-[var(--font-sora)] leading-relaxed"
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
              className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>

        <div className="space-y-8 md:space-y-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: service.delay }}
              className="group relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                
                <div className="lg:col-span-1 flex justify-center lg:justify-start">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center justify-center"
                  >
                    <span className="text-4xl md:text-5xl font-black text-zinc-200 group-hover:text-lime-200 transition-colors duration-300 font-[var(--font-poppins)]">
                      {service.number}
                    </span>
                  </motion.div>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  <motion.h3
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="text-2xl md:text-3xl font-black text-zinc-900 leading-tight font-[var(--font-poppins)] whitespace-pre-line group-hover:text-zinc-700 transition-colors duration-300"
                  >
                    {service.title}
                  </motion.h3>
                  
                  <p className="text-base text-zinc-600 leading-relaxed font-[var(--font-sora)]">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: service.delay + (featureIndex * 0.1) }}
                        className="flex items-center text-sm text-zinc-500 font-medium"
                      >
                        <div className="w-1.5 h-1.5 bg-lime-400 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-3 flex justify-center lg:justify-end">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.2 }}
                    className="w-16 h-16 md:w-18 md:h-18 border-2 border-zinc-200 group-hover:border-lime-300 rounded-xl flex items-center justify-center transition-all duration-300 bg-white shadow-md group-hover:shadow-lg"
                  >
                    <service.icon 
                      className="w-8 h-8 md:w-9 md:h-9 text-zinc-400 group-hover:text-lime-400 transition-colors duration-300" 
                      strokeWidth={1.2}
                    />
                  </motion.div>
                </div>
              </div>

              {index < services.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: service.delay + 0.3 }}
                  className="w-full h-px bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200 mt-8 md:mt-10 origin-center"
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
          className="text-center mt-16 md:mt-20"
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