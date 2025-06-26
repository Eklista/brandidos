import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Twitter, Dribbble, Mail } from 'lucide-react';

const FooterWithCTA = () => {
  return (
    <footer className="bg-zinc-950 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-16 right-20 w-24 h-24 border border-lime-400/20 rounded-lg opacity-30"
        />
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 left-16 w-2 h-2 bg-lime-400/50 rounded-full"
        />
      </div>

      {/* Mini CTA Section */}
      <div className="relative z-10 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-[var(--font-poppins)] leading-tight mb-6"
            >
              ¿LISTO PARA QUE TU MARCA<br />
              <span className="text-lime-400">ROMPA TODO?</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80 max-w-2xl mx-auto font-[var(--font-sora)] leading-relaxed mb-10"
            >
              Dale, hablemos. Sin compromisos, sin presentaciones aburridas.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 60px rgba(163, 230, 53, 0.4)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-10 py-5 bg-lime-400 hover:bg-lime-500 text-zinc-900 font-bold text-lg rounded-2xl transition-all duration-300 shadow-lg font-[var(--font-poppins)]"
              >
                <span>Comenzar proyecto</span>
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-10 py-5 border-2 border-white/30 hover:border-white/60 text-white font-bold text-lg rounded-2xl transition-all duration-300 font-[var(--font-poppins)]"
              >
                <Mail className="w-5 h-5 mr-2" />
                <span>Solo platicar</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-black mb-4 font-[var(--font-poppins)]"
            >
              brandidos
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/70 text-base leading-relaxed font-[var(--font-sora)] mb-6"
            >
              Una banda de creativos que convierte ideas en experiencias digitales que conectan de verdad.
            </motion.p>
            
            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4"
            >
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Dribbble, label: 'Dribbble' },
                { Icon: Mail, label: 'Email' }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(163, 230, 53, 0.2)",
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 hover:bg-lime-400/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-lime-400/40"
                >
                  <social.Icon className="w-4 h-4 text-white" />
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          {/* Services Column */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white font-bold mb-4 font-[var(--font-poppins)]"
            >
              Servicios
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              {['Branding & Diseño', 'UX/UI Design', 'Diseño Web', 'Estrategia Digital'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-white/60 hover:text-lime-400 text-sm transition-colors font-[var(--font-sora)]">
                    {service}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white font-bold mb-4 font-[var(--font-poppins)]"
            >
              Contacto
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3"
            >
              <li>
                <a href="mailto:hola@brandidos.com" className="text-white/60 hover:text-lime-400 text-sm transition-colors font-[var(--font-sora)]">
                  hola@brandidos.com
                </a>
              </li>
              <li>
                <a href="tel:+50212345678" className="text-white/60 hover:text-lime-400 text-sm transition-colors font-[var(--font-sora)]">
                  +502 1234 5678
                </a>
              </li>
              <li>
                <span className="text-white/60 text-sm font-[var(--font-sora)]">
                  Guatemala City, GT
                </span>
              </li>
            </motion.ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/40 text-sm font-[var(--font-sora)]">
            © 2025 Brandidos. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors font-[var(--font-sora)]">
              Privacidad
            </a>
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors font-[var(--font-sora)]">
              Términos
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterWithCTA;