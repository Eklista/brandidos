import { motion } from 'framer-motion';

// Versión clean pero más grande y vistosa
const CleanCensorDivider = () => {
  const symbols = ['$', '#', '@', '*', '!'];
  
  return (
    <div className="relative py-12 md:py-16 bg-white overflow-hidden">
      {/* Elementos decorativos sutiles */}
      <motion.div
        animate={{ 
          x: [0, 10, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-4 left-1/4 w-1 h-1 bg-lime-400 rounded-full"
      />
      
      <motion.div
        animate={{ 
          y: [0, -8, 0],
          opacity: [0.1, 0.25, 0.1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute bottom-6 right-1/3 w-1.5 h-1.5 bg-zinc-300 rounded-sm transform rotate-45"
      />

      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-6 md:space-x-8">
          {/* Línea izquierda */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-24 md:w-40 h-0.5 bg-gradient-to-r from-transparent to-zinc-300 origin-right"
          />
          
          {/* Símbolos principales */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center space-x-3 md:space-x-4"
          >
            {symbols.map((symbol, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: -20, rotateZ: -45 }}
                whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6 + (index * 0.1),
                  type: "spring",
                  bounce: 0.3
                }}
                whileHover={{ 
                  scale: 1.2,
                  color: "#a3e635",
                  transition: { duration: 0.2 }
                }}
                className="text-zinc-600 text-3xl md:text-4xl lg:text-5xl font-black font-mono cursor-default select-none hover:text-lime-400 transition-colors duration-200"
                style={{
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                {symbol}
              </motion.span>
            ))}
          </motion.div>
          
          {/* Línea derecha */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-24 md:w-40 h-0.5 bg-gradient-to-l from-transparent to-zinc-300 origin-left"
          />
        </div>
        
        {/* Puntos decorativos debajo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex items-center justify-center space-x-2 mt-6"
        >
          <div className="w-1 h-1 bg-zinc-400 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-lime-400 rounded-full"></div>
          <div className="w-1 h-1 bg-zinc-400 rounded-full"></div>
        </motion.div>
      </div>
    </div>
  );
};

// Componente principal que solo exporta la versión clean
const StreetDivider = () => {
  return <CleanCensorDivider />;
};

export default StreetDivider;