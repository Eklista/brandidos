import { motion } from 'framer-motion';
import { ArrowUpRight, Eye } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "Fintech Centroamericana",
      category: "UX/UI Design",
      description: "Dashboard de inversiones que convirtió números aburridos en algo que hasta tu tía entiende.",
      image: "/project-fintech.jpg",
      tags: ["Dashboard", "Mobile App", "Web Platform"],
      color: "from-blue-500 to-cyan-500",
      delay: 0.1
    },
    {
      id: 2,
      title: "E-commerce de Moda",
      category: "Branding & Web",
      description: "De tienda de barrio a imperio digital. Rebrand que triplicó ventas sin perder la esencia.",
      image: "/project-ecommerce.jpg",
      tags: ["Rebranding", "E-commerce", "Mobile"],
      color: "from-purple-500 to-pink-500",
      delay: 0.2
    },
    {
      id: 3,
      title: "Plataforma Educativa",
      category: "UX/UI Design",
      description: "App que hace que estudiar no sea un castigo. Interface que habla el idioma de los chavos.",
      image: "/project-education.jpg",
      tags: ["Mobile App", "User Research", "Prototyping"],
      color: "from-green-500 to-emerald-500",
      delay: 0.3
    },
    {
      id: 4,
      title: "Startup de Logística",
      category: "Brand Identity",
      description: "Identidad visual que comunica eficiencia sin ser aburrida. Logo que se ve brutal en camiones y pantallas.",
      image: "/project-logistics.jpg",
      tags: ["Logo Design", "Brand Guidelines", "Vehicle Graphics"],
      color: "from-orange-500 to-red-500",
      delay: 0.4
    },
    {
      id: 5,
      title: "Restaurant Chain",
      category: "Digital Experience",
      description: "Sistema de pedidos que eliminó las colas y la desesperación. De menú de papel a experiencia digital sin drama.",
      image: "/project-restaurant.jpg",
      tags: ["Ordering System", "Kiosk Design", "Mobile"],
      color: "from-yellow-500 to-orange-500",
      delay: 0.5
    },
    {
      id: 6,
      title: "SaaS Healthcare",
      category: "Dashboard Design",
      description: "Interface médica que salva tiempo y vidas. Complejidad de hospital convertida en simplicidad callejera.",
      image: "/project-healthcare.jpg",
      tags: ["Complex Data", "Medical UI", "Accessibility"],
      color: "from-teal-500 to-blue-500",
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
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-32 h-32 border border-lime-200 rounded-lg opacity-20"
          style={{ transform: 'rotate(12deg)' }}
        />
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-2 h-2 bg-lime-400 rounded-sm"
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
            Mantenemos la discreción, pero los resultados gritan solos en la calle.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: project.delay }}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -8, rotate: -0.5 }}
                transition={{ duration: 0.3, type: "spring" }}
                className="bg-white rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-zinc-200 group-hover:border-lime-300"
              >
                <div className="relative overflow-hidden h-64">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`} />
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center backdrop-blur-sm"
                  >
                    <div className="text-center text-white p-6">
                      <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/30">
                        <Eye className="w-8 h-8" />
                      </div>
                      <h4 className="text-lg font-bold mb-2 uppercase tracking-wide">{project.category}</h4>
                      <p className="text-sm opacity-90 font-medium">Ver proyecto</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1, rotate: 5 }}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/30"
                  >
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-black text-zinc-900 font-[var(--font-poppins)] group-hover:text-zinc-700 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-zinc-600 text-sm leading-relaxed mb-4 font-[var(--font-sora)]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-medium rounded-full border border-zinc-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
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
            className="inline-flex items-center px-12 py-5 bg-zinc-900 hover:bg-lime-400 hover:text-zinc-900 text-white font-bold text-lg rounded-xl transition-all duration-300 border-2 border-transparent hover:border-zinc-900 shadow-lg"
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
            ¿Tu proyecto va a ser el próximo en romperla?
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;