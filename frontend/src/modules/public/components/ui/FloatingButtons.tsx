import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowUp, Calculator, Plus, X } from 'lucide-react';

const FloatingButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const buttons = [
    {
      icon: MessageCircle,
      label: 'Chat',
      color: 'bg-zinc-900 hover:bg-zinc-800',
      action: () => console.log('Abrir chat')
    },
    {
      icon: Calculator,
      label: 'Cotizar',
      color: 'bg-zinc-900 hover:bg-zinc-800',
      action: () => console.log('Abrir cotizador')
    },
    {
      icon: ArrowUp,
      label: 'Subir',
      color: 'bg-zinc-900 hover:bg-zinc-800',
      action: () => window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-20 right-0 space-y-3"
          >
            {buttons.map((button, index) => (
              <motion.button
                key={button.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: index * 0.1 }
                }}
                exit={{ 
                  opacity: 0, 
                  y: 20,
                  transition: { delay: (buttons.length - index - 1) * 0.05 }
                }}
                whileHover={{ scale: 1.05, x: -4 }}
                whileTap={{ scale: 0.95 }}
                onClick={button.action}
                className={`flex items-center space-x-3 ${button.color} text-white px-4 py-3 rounded-full shadow-lg border border-zinc-700 transition-all duration-200 min-w-fit backdrop-blur-sm font-medium`}
              >
                <button.icon className="w-5 h-5" />
                <span className="text-sm whitespace-nowrap">{button.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-lime-400 hover:bg-lime-500 text-zinc-900 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 border border-lime-500"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </motion.div>
      </motion.button>
    </div>
  );
};

export default FloatingButtons;