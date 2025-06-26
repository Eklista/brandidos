// src/modules/admin/components/modals/ClientDetailModal.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X,
  User, 
  Mail,
  Phone,
  MapPin,
  Calendar,
  Star,
  Activity,
  DollarSign
} from 'lucide-react';

interface Client {
  id: string;
  name: string;
  organization: string;
  email: string;
  phone: string;
  location: string;
  status: 'active' | 'inactive' | 'lead' | 'archived';
  rating: number;
  projectsCount: number;
  totalSpent: number;
  joinedDate: string;
  lastContact: string;
}

interface ClientDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  client: Client | null;
}

const ClientDetailModal = ({ isOpen, onClose, client }: ClientDetailModalProps) => {
  if (!client || !isOpen) return null;

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'active':
        return {
          text: 'Activo',
          color: 'text-lime-400',
          bg: 'bg-lime-400/20',
          border: 'border-lime-400/30'
        };
      case 'lead':
        return {
          text: 'Lead',
          color: 'text-blue-400',
          bg: 'bg-blue-400/20',
          border: 'border-blue-400/30'
        };
      case 'inactive':
        return {
          text: 'Inactivo',
          color: 'text-yellow-400',
          bg: 'bg-yellow-400/20',
          border: 'border-yellow-400/30'
        };
      default:
        return {
          text: 'Archivado',
          color: 'text-gray-400',
          bg: 'bg-gray-400/20',
          border: 'border-gray-400/30'
        };
    }
  };

  const statusConfig = getStatusConfig(client.status);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-zinc-600'
        }`}
      />
    ));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-GT', {
      style: 'currency',
      currency: 'GTQ'
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
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
          className="bg-zinc-900 border border-zinc-700 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-800">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-400/20 rounded-xl flex items-center justify-center border border-blue-400/30">
                <User className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-xl font-black font-[var(--font-poppins)] text-white">
                  Detalles del Cliente
                </h2>
                <p className="text-zinc-400 font-[var(--font-sora)] text-sm">
                  Información completa del cliente
                </p>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Client Header */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-zinc-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {getInitials(client.name)}
                </span>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-black text-white font-[var(--font-poppins)]">
                  {client.name}
                </h3>
                <p className="text-zinc-400 font-[var(--font-sora)] text-lg">
                  {client.organization}
                </p>
                
                <div className="flex items-center space-x-3 mt-2">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium border ${statusConfig.bg} ${statusConfig.border} ${statusConfig.color}`}>
                    {statusConfig.text}
                  </div>
                  
                  {client.rating > 0 && (
                    <div className="flex items-center space-x-1">
                      {renderStars(client.rating)}
                      <span className="text-sm text-zinc-400 ml-1">({client.rating}/5)</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-zinc-800/30 rounded-xl p-4 border border-zinc-700">
              <h3 className="text-lg font-bold text-white font-[var(--font-poppins)] mb-4 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-400" />
                Información de Contacto
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-zinc-400 font-[var(--font-sora)]">
                    Email
                  </label>
                  <p className="text-white font-[var(--font-sora)] mt-1 flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-zinc-400" />
                    {client.email}
                  </p>
                </div>
                
                <div>
                  <label className="text-sm font-semibold text-zinc-400 font-[var(--font-sora)]">
                    Teléfono
                  </label>
                  <p className="text-white font-[var(--font-sora)] mt-1 flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-zinc-400" />
                    {client.phone}
                  </p>
                </div>
                
                <div className="md:col-span-2">
                  <label className="text-sm font-semibold text-zinc-400 font-[var(--font-sora)]">
                    Ubicación
                  </label>
                  <p className="text-white font-[var(--font-sora)] mt-1 flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-zinc-400" />
                    {client.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-zinc-800/30 rounded-xl p-4 border border-zinc-700 text-center">
                <div className="w-12 h-12 bg-purple-400/20 rounded-xl flex items-center justify-center mx-auto mb-3 border border-purple-400/30">
                  <Activity className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-2xl font-black text-white font-[var(--font-poppins)] mb-1">
                  {client.projectsCount}
                </div>
                <div className="text-sm text-zinc-400 font-[var(--font-sora)]">
                  Proyectos
                </div>
              </div>

              <div className="bg-zinc-800/30 rounded-xl p-4 border border-zinc-700 text-center">
                <div className="w-12 h-12 bg-lime-400/20 rounded-xl flex items-center justify-center mx-auto mb-3 border border-lime-400/30">
                  <DollarSign className="w-6 h-6 text-lime-400" />
                </div>
                <div className="text-2xl font-black text-lime-400 font-[var(--font-poppins)] mb-1">
                  {formatCurrency(client.totalSpent)}
                </div>
                <div className="text-sm text-zinc-400 font-[var(--font-sora)]">
                  Total Gastado
                </div>
              </div>

              <div className="bg-zinc-800/30 rounded-xl p-4 border border-zinc-700 text-center">
                <div className="w-12 h-12 bg-blue-400/20 rounded-xl flex items-center justify-center mx-auto mb-3 border border-blue-400/30">
                  <Calendar className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-lg font-bold text-white font-[var(--font-poppins)] mb-1">
                  {Math.floor((Date.now() - new Date(client.joinedDate).getTime()) / (1000 * 60 * 60 * 24))} días
                </div>
                <div className="text-sm text-zinc-400 font-[var(--font-sora)]">
                  Como Cliente
                </div>
              </div>
            </div>

            {/* Dates */}
            <div className="bg-zinc-800/30 rounded-xl p-4 border border-zinc-700">
              <h3 className="text-lg font-bold text-white font-[var(--font-poppins)] mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-400" />
                Historial
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-zinc-400 font-[var(--font-sora)]">
                    Cliente desde
                  </label>
                  <p className="text-white font-[var(--font-sora)] mt-1">
                    {formatDate(client.joinedDate)}
                  </p>
                </div>
                
                <div>
                  <label className="text-sm font-semibold text-zinc-400 font-[var(--font-sora)]">
                    Último contacto
                  </label>
                  <p className="text-white font-[var(--font-sora)] mt-1">
                    {formatDate(client.lastContact)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-zinc-800">
            <div className="flex justify-end space-x-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="px-6 py-2 border border-zinc-600 text-zinc-300 font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300 font-[var(--font-sora)]"
              >
                Cerrar
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ClientDetailModal;