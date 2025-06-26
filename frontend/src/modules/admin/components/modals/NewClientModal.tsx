// src/modules/admin/components/modals/NewClientModal.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Building, 
  User,
  Mail,
  Phone,
  MapPin,
  Star
} from 'lucide-react';

interface NewClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (clientData: any) => void;
}

const NewClientModal = ({ isOpen, onClose, onSubmit }: NewClientModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    location: '',
    status: 'lead' as 'active' | 'inactive' | 'lead' | 'archived',
    rating: 0
  });
  
  const [isLoading, setIsLoading] = useState(false);

  const statusOptions = [
    { value: 'lead', label: 'Lead', description: 'Cliente potencial' },
    { value: 'active', label: 'Activo', description: 'Cliente trabajando' },
    { value: 'inactive', label: 'Inactivo', description: 'Cliente pausado' },
    { value: 'archived', label: 'Archivado', description: 'Cliente finalizado' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      const newClient = {
        ...formData,
        id: Date.now().toString(),
        projectsCount: 0,
        totalSpent: 0,
        joinedDate: new Date().toISOString().split('T')[0],
        lastContact: new Date().toISOString().split('T')[0]
      };
      
      onSubmit(newClient);
      setIsLoading(false);
      onClose();
      
      // Reset form
      setFormData({
        name: '',
        organization: '',
        email: '',
        phone: '',
        location: '',
        status: 'lead',
        rating: 0
      });
    }, 1000);
  };

  const renderStarRating = () => {
    return (
      <div className="flex items-center space-x-1">
        {Array.from({ length: 5 }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setFormData({ ...formData, rating: i + 1 })}
            className="p-1 transition-colors duration-200"
          >
            <Star
              className={`w-5 h-5 ${
                i < formData.rating 
                  ? 'text-yellow-400 fill-current' 
                  : 'text-zinc-600 hover:text-yellow-300'
              }`}
            />
          </button>
        ))}
        <button
          type="button"
          onClick={() => setFormData({ ...formData, rating: 0 })}
          className="ml-2 text-xs text-zinc-400 hover:text-white transition-colors"
        >
          Limpiar
        </button>
      </div>
    );
  };

  if (!isOpen) return null;

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
          className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-black font-[var(--font-poppins)] text-white">
                Nuevo Cliente
              </h2>
              <p className="text-zinc-400 font-[var(--font-sora)] mt-1">
                Agrega un nuevo cliente a la base de datos
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-zinc-300 mb-2 font-[var(--font-sora)]">
                  Nombre Completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-lime-400/50 transition-all duration-300 font-[var(--font-sora)]"
                    placeholder="Ej: Juan Pérez"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-300 mb-2 font-[var(--font-sora)]">
                  Organización
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-lime-400/50 transition-all duration-300 font-[var(--font-sora)]"
                    placeholder="Ej: TechCorp Guatemala"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-zinc-300 mb-2 font-[var(--font-sora)]">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-lime-400/50 transition-all duration-300 font-[var(--font-sora)]"
                    placeholder="Ej: juan@techcorp.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-300 mb-2 font-[var(--font-sora)]">
                  Teléfono
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-lime-400/50 transition-all duration-300 font-[var(--font-sora)]"
                    placeholder="Ej: +502 1234-5678"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-semibold text-zinc-300 mb-2 font-[var(--font-sora)]">
                Ubicación
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-lime-400/50 transition-all duration-300 font-[var(--font-sora)]"
                  placeholder="Ej: Guatemala City, GT"
                  required
                />
              </div>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-semibold text-zinc-300 mb-3 font-[var(--font-sora)]">
                Estado del Cliente
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {statusOptions.map((status) => (
                  <motion.label
                    key={status.value}
                    whileHover={{ scale: 1.02 }}
                    className={`cursor-pointer p-4 rounded-lg border-2 transition-all duration-300 ${
                      formData.status === status.value
                        ? 'border-lime-400 bg-lime-400/10'
                        : 'border-zinc-700 bg-zinc-800/30 hover:border-zinc-600'
                    }`}
                  >
                    <input
                      type="radio"
                      value={status.value}
                      checked={formData.status === status.value}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                      className="sr-only"
                    />
                    <div className="text-sm font-semibold text-white mb-1 font-[var(--font-sora)]">
                      {status.label}
                    </div>
                    <div className="text-xs text-zinc-400 font-[var(--font-sora)]">
                      {status.description}
                    </div>
                  </motion.label>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-semibold text-zinc-300 mb-3 font-[var(--font-sora)]">
                Calificación (Opcional)
              </label>
              <div className="bg-zinc-800/30 rounded-lg p-4 border border-zinc-700">
                {renderStarRating()}
                <p className="text-xs text-zinc-500 mt-2 font-[var(--font-sora)]">
                  Califica la experiencia con este cliente (opcional)
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-3 pt-4">
              <motion.button
                type="button"
                onClick={onClose}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 px-6 py-3 border border-zinc-600 text-zinc-300 font-semibold rounded-lg hover:bg-zinc-800/50 transition-all duration-300 font-[var(--font-sora)]"
              >
                Cancelar
              </motion.button>
              
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 px-6 py-3 bg-lime-400 hover:bg-lime-500 disabled:bg-zinc-700 disabled:text-zinc-400 text-zinc-900 font-bold rounded-lg transition-all duration-300 font-[var(--font-sora)] flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-zinc-600 border-t-zinc-900 rounded-full animate-spin"></div>
                    <span>Creando...</span>
                  </div>
                ) : (
                  'Crear Cliente'
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NewClientModal;