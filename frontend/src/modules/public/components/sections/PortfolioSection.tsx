import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "Fintech Centroamericana",
      category: "UX/UI Design",
      description: "Dashboard que convierte data compleja en decisiones claras",
      image: "/project-fintech.jpg",
      tags: ["Dashboard", "Mobile App"],
      delay: 0.1
    },
    {
      id: 2,
      title: "E-commerce de Moda",
      category: "Branding & Web",
      description: "Rebrand que triplicó ventas sin perder la esencia",
      image: "/project-ecommerce.jpg",
      tags: ["Rebranding", "E-commerce"],
      delay: 0.2
    },
    {
      id: 3,
      title: "Plataforma Educativa",
      category: "UX/UI Design",
      description: "App que hace el aprendizaje más directo",
      image: "/project-education.jpg",
      tags: ["Mobile App", "Research"],
      delay: 0.3
    },
    {
      id: 4,
      title: "Startup de Logística",
      category: "Brand Identity",
      description: "Identidad que funciona en pantalla y en la calle",
      image: "/project-logistics.jpg",
      tags: ["Logo Design", "Branding"],
      delay: 0.4
    },
    {
      id: 5,
      title: "Restaurant Chain",
      category: "Digital Experience",
      description: "Sistema que eliminó colas y simplificó pedidos",
      image: "/project-restaurant.jpg",
      tags: ["Ordering System", "Kiosks"],
      delay: 0.5
    },
    {
      id: 6,
      title: "SaaS Healthcare",
      category: "Dashboard Design",
      description: "Interface médica convertida en flujo simple",
      image: "/project-healthcare.jpg",
      tags: ["Complex Data", "Medical UI"],
      delay: 0.6
    }
  ];

  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
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
          className="absolute top-16 right-16 w-24 h-24 border border-lime-200/30 rounded-lg opacity-40"
          style={{ transform: 'rotate(12deg)' }}
        />
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 left-16 w-2 h-2 bg-lime-400 rounded-sm"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            TRABAJOS QUE<br />
            <span className="text-lime-400">ROMPEN TODO</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-zinc-600 max-w-2xl mx-auto font-[var(--font-sora)] leading-relaxed"
          >
            Proyectos que hablan por sí solos. Resultados que se notan desde el primer día.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: project.delay }}
              className="group cursor-pointer"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.1 }}
                className="relative h-96 rounded-2xl overflow-hidden bg-zinc-900 shadow-lg hover:shadow-2xl transition-shadow duration-500"
              >
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-900"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-lime-400/10"
                />

                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <motion.div
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1, scale: 1.05 }}
                      className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30"
                    >
                      <span className="text-white text-xs font-medium uppercase tracking-wide">
                        {project.category}
                      </span>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                      className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-lime-400/80 group-hover:border-lime-400 transition-all duration-300"
                    >
                      <ArrowUpRight className="w-5 h-5 text-white group-hover:text-zinc-900 transition-colors duration-300" />
                    </motion.div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-white/10 backdrop-blur-sm text-white/80 text-xs font-medium rounded-lg border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <motion.h3
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                        className="text-xl md:text-2xl font-black text-white font-[var(--font-poppins)] leading-tight"
                      >
                        {project.title}
                      </motion.h3>
                      
                      <motion.p
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                        className="text-white/90 text-sm font-[var(--font-sora)] leading-relaxed"
                      >
                        {project.description}
                      </motion.p>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ scale: 1, opacity: 0 }}
                  whileHover={{ scale: 1.02, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 rounded-2xl border-2 border-lime-400/30 pointer-events-none"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-16 md:mt-20"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 60px rgba(163, 230, 53, 0.3)",
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-12 py-5 bg-zinc-900 hover:bg-lime-400 hover:text-zinc-900 text-white font-bold text-lg rounded-2xl transition-all duration-300 border-2 border-transparent hover:border-zinc-900 shadow-lg font-[var(--font-poppins)]"
          >
            <span>Ver más proyectos</span>
            <ArrowUpRight className="w-5 h-5 ml-2" />
          </motion.button>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-zinc-500 mt-6 text-base font-[var(--font-sora)]"
          >
            ¿Listo para que tu proyecto sea el próximo?
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;