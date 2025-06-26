import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Cuánto tiempo toma un proyecto?",
      answer: "Depende del alcance, pero normalmente entre 2-6 semanas. No hacemos milagros de la noche a la mañana, pero tampoco te vamos a tener esperando meses."
    },
    {
      question: "¿Trabajan con startups o solo empresas grandes?",
      answer: "Trabajamos con cualquiera que tenga una idea sólida y ganas de hacer algo diferente. Desde startups que arrancan hasta empresas que quieren renovar su imagen."
    },
    {
      question: "¿Qué incluye el servicio de branding?",
      answer: "Logo, paleta de colores, tipografías, guidelines de marca y todo lo que necesitas para que tu identidad sea consistente en cualquier lado."
    },
    {
      question: "¿Hacen revisiones ilimitadas?",
      answer: "Incluimos 3 rondas de revisiones por proyecto. Después de eso, cobramos las adicionales. Así mantenemos el proyecto enfocado y no nos perdemos en el camino."
    },
    {
      question: "¿Manejan proyectos internacionales?",
      answer: "Claro que sí. Hemos trabajado con clientes de toda Centroamérica, México y Estados Unidos. El diseño no tiene fronteras."
    },
    {
      question: "¿Qué pasa si no me gusta el resultado?",
      answer: "Trabajamos con un proceso colaborativo desde el inicio. Es muy raro que llegues al final sin estar convencido, pero si pasa, lo hablamos y encontramos la solución."
    }
  ];

  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-20 h-20 border border-lime-200/40 rounded-lg opacity-30"
          style={{ transform: 'rotate(15deg)' }}
        />
        <motion.div
          animate={{ 
            y: [0, -12, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 left-20 w-2 h-2 bg-lime-400 rounded-sm transform rotate-45"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-zinc-900 font-[var(--font-poppins)] leading-tight mb-6"
          >
            PREGUNTAS QUE<br />
            <span className="text-lime-400">TODOS HACEN</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-zinc-600 max-w-2xl mx-auto font-[var(--font-sora)] leading-relaxed"
          >
            Respuestas directas, sin rodeos ni términos complicados.
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4 md:space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-white border-2 border-zinc-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-lime-300 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 md:px-8 py-6 md:py-8 text-left flex items-center justify-between focus:outline-none group"
                >
                  <h3 className="text-lg md:text-xl font-bold text-zinc-900 font-[var(--font-poppins)] group-hover:text-zinc-700 transition-colors pr-4">
                    {faq.question}
                  </h3>
                  
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-8 h-8 bg-zinc-100 group-hover:bg-lime-100 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    {openFAQ === index ? (
                      <Minus className="w-4 h-4 text-zinc-600 group-hover:text-lime-600" />
                    ) : (
                      <Plus className="w-4 h-4 text-zinc-600 group-hover:text-lime-600" />
                    )}
                  </motion.div>
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: openFAQ === index ? 'auto' : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <motion.p
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ 
                        y: openFAQ === index ? 0 : -10,
                        opacity: openFAQ === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3, delay: openFAQ === index ? 0.1 : 0 }}
                      className="text-zinc-600 font-[var(--font-sora)] leading-relaxed text-base md:text-lg"
                    >
                      {faq.answer}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-16 md:mt-20 p-8 md:p-12 bg-zinc-50 rounded-3xl border border-zinc-200"
        >
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-2xl md:text-3xl font-black text-zinc-900 font-[var(--font-poppins)] mb-4"
          >
            ¿Tu pregunta no está aquí?
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-zinc-600 font-[var(--font-sora)] mb-8 text-lg"
          >
            Escribenos y te respondemos directo, sin vueltas.
          </motion.p>
          
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 10px 40px rgba(163, 230, 53, 0.3)",
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-zinc-900 hover:bg-lime-400 hover:text-zinc-900 text-white font-bold text-lg rounded-2xl transition-all duration-300 border-2 border-transparent hover:border-zinc-900 shadow-lg font-[var(--font-poppins)]"
          >
            Hablemos directo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;