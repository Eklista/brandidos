// src/modules/admin/components/modals/DeleteConfirmModal.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, X } from 'lucide-react';

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  itemName?: string;
  isLoading?: boolean;
}

const DeleteConfirmModal = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title, 
  message, 
  itemName,
  isLoading = false 
}: DeleteConfirmModalProps) => {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-zinc-900 border border-zinc-700 rounded-2xl w-full max-w-md"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-800">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-400/20 rounded-xl flex items-center justify-center border border-red-400/30">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h2 className="text-xl font-black font-[var(--font-poppins)] text-white">
                  {title}
                </h2>
                <p className="text-zinc-400 font-[var(--font-sora)] text-sm">
                  Esta acción no se puede deshacer
                </p>
              </div>
            </div>
            
            <button
              onClick={onClose}
              disabled={isLoading}
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors disabled:opacity-50"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="text-center space-y-4">
              <p className="text-white font-[var(--font-sora)] leading-relaxed">
                {message}
              </p>
              
              {itemName && (
                <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
                  <p className="text-sm text-zinc-400 font-[var(--font-sora)] mb-1">
                    Elemento a eliminar:
                  </p>
                  <p className="text-lime-400 font-semibold font-[var(--font-poppins)]">
                    {itemName}
                  </p>
                </div>
              )}

              <div className="bg-red-400/10 border border-red-400/20 rounded-lg p-3">
                <p className="text-red-400 text-sm font-[var(--font-sora)]">
                  ⚠️ Esta acción es permanente y no se puede revertir
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-zinc-800">
            <div className="flex space-x-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                disabled={isLoading}
                className="flex-1 px-6 py-3 border border-zinc-600 text-zinc-300 font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300 font-[var(--font-sora)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancelar
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleConfirm}
                disabled={isLoading}
                className="flex-1 px-6 py-3 bg-red-500 hover:bg-red-600 disabled:bg-red-500/50 text-white font-bold rounded-lg transition-all duration-300 font-[var(--font-sora)] disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Eliminando...</span>
                  </div>
                ) : (
                  'Eliminar'
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DeleteConfirmModal;