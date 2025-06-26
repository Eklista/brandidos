// src/modules/admin/components/modals/LicenseDetailModal.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Building, 
  Key, 
  Calendar, 
  Copy,
  CheckCircle,
  Clock,
  Activity,
  Shield
} from 'lucide-react';

interface License {
  id: string;
  client: string;
  organization: string;
  licenseType: string;
  token: string;
  status: 'active' | 'inactive' | 'expired' | 'pending';
  expiryDate: string;
  createdAt: string;
  lastUsed?: string;
  usageCount?: number;
  features?: string[];
}

interface LicenseDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  license: License | null;
  onCopyToken?: (token: string) => void;
}

const LicenseDetailModal = ({ isOpen, onClose, license, onCopyToken }: LicenseDetailModalProps) => {
  if (!license || !isOpen) return null;

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'active':
        return {
          icon: CheckCircle,
          text: 'Activa',
          color: 'text-lime-400',
          bg: 'bg-lime-400/20',
          border: 'border-lime-400/30'
        };
      case 'expired':
        return {
          icon: Clock,
          text: 'Expirada',
          color: 'text-red-400',
          bg: 'bg-red-400/20',
          border: 'border-red-400/30'
        };
      case 'pending':
        return {
          icon: Clock,
          text: 'Pendiente',
          color: 'text-yellow-400',
          bg: 'bg-yellow-400/20',
          border: 'border-yellow-400/30'
        };
      default:
        return {
          icon: Clock,
          text: 'Inactiva',
          color: 'text-gray-400',
          bg: 'bg-gray-400/20',
          border: 'border-gray-400/30'
        };
    }
  };

  const statusConfig = getStatusConfig(license.status);
  const StatusIcon = statusConfig.icon;

  const handleCopyToken = () => {
    onCopyToken?.(license.token);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
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
              <div className="w-12 h-12 bg-lime-400/20 rounded-xl flex items-center justify-center border border-lime-400/30">
                <Key className="w-6 h-6 text-lime-400" />
              </div>
              <div>
                <h2 className="text-xl font-black font-[var(--font-poppins)] text-white">
                  Detalles de Licencia
                </h2>
                <p className="text-zinc-400 font-[var(--font-sora)] text-sm">
                  Información completa del token
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
            {/* Client Info */}
            <div className="bg-zinc-800/30 rounded-xl p-4 border border-zinc-700">
              <h3 className="text-lg font-bold text-white font-[var(--font-poppins)] mb-4 flex items-center">
                <Building className="w-5 h-5 mr-2 text-lime-400" />
                Información del Cliente
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-zinc-400 font-[var(--font-sora)]">
                    Cliente
                  </label>
                  <p className="text-white font-[var(--font-sora)] mt-1">
                    {license.client}
                  </p>
                </div>
                
                <div>
                  <label className="text-sm font-semibold text-zinc-400 font-[var(--font-sora)]">
                    Organización
                  </label>
                  <p className="text-white font-[var(--font-sora)] mt-1">
                    {license.organization}
                  </p>
                </div>
              </div>
            </div>

            {/* License Info */}
            <div className="bg-zinc-800/30 rounded-xl p-4 border border-zinc-700">
              <h3 className="text-lg font-bold text-white font-[var(--font-poppins)] mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-lime-400" />
                Información de Licencia
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-zinc-400 font-[var(--font-sora)]">
                    Tipo de Licencia
                  </label>
                  <div className="mt-1">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-lime-400/20 text-lime-400 border border-lime-400/30">
                      {license.licenseType}
                    </span>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-semibold text-zinc-400 font-[var(--font-sora)]">
                    Estado
                  </label>
                  <div className="mt-1">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${statusConfig.bg} ${statusConfig.border} ${statusConfig.color}`}>
                      <StatusIcon className="w-3 h-3 mr-1" />
                      {statusConfig.text}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Token */}
            <div className="bg-zinc-800/30 rounded-xl p-4 border border-zinc-700">
              <h3 className="text-lg font-bold text-white font-[var(--font-poppins)] mb-4 flex items-center">
                <Key className="w-5 h-5 mr-2 text-lime-400" />
                Token de Acceso
              </h3>
              
              <div className="flex items-center space-x-2">
                <code className="flex-1 text-sm font-mono text-lime-400 bg-zinc-900/50 px-4 py-3 rounded-lg border border-zinc-600 break-all">
                  {license.token}
                </code>
                <button
                  onClick={handleCopyToken}
                  className="p-3 text-zinc-400 hover:text-lime-400 hover:bg-zinc-700 rounded-lg transition-colors"
                  title="Copiar token"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              
              <p className="text-xs text-zinc-500 mt-2 font-[var(--font-sora)]">
                Este token es único y permite el acceso a los servicios contratados
              </p>
            </div>

            {/* Dates and Usage */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Dates */}
              <div className="bg-zinc-800/30 rounded-xl p-4 border border-zinc-700">
                <h3 className="text-lg font-bold text-white font-[var(--font-poppins)] mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-lime-400" />
                  Fechas
                </h3>
                
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-semibold text-zinc-400 font-[var(--font-sora)]">
                      Creada
                    </label>
                    <p className="text-white font-[var(--font-sora)] text-sm mt-1">
                      {formatDate(license.createdAt)}
                    </p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-semibold text-zinc-400 font-[var(--font-sora)]">
                      Vencimiento
                    </label>
                    <p className="text-white font-[var(--font-sora)] text-sm mt-1">
                      {formatDate(license.expiryDate)}
                    </p>
                  </div>
                  
                  {license.lastUsed && (
                    <div>
                      <label className="text-sm font-semibold text-zinc-400 font-[var(--font-sora)]">
                        Último Uso
                      </label>
                      <p className="text-white font-[var(--font-sora)] text-sm mt-1">
                        {formatDate(license.lastUsed)}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Usage Stats */}
              <div className="bg-zinc-800/30 rounded-xl p-4 border border-zinc-700">
                <h3 className="text-lg font-bold text-white font-[var(--font-poppins)] mb-4 flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-lime-400" />
                  Estadísticas
                </h3>
                
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-semibold text-zinc-400 font-[var(--font-sora)]">
                      Usos Totales
                    </label>
                    <p className="text-2xl font-black text-white font-[var(--font-poppins)] mt-1">
                      {license.usageCount || 0}
                    </p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-semibold text-zinc-400 font-[var(--font-sora)]">
                      Días Restantes
                    </label>
                    <p className="text-lg font-bold text-lime-400 font-[var(--font-poppins)] mt-1">
                      {Math.max(0, Math.ceil((new Date(license.expiryDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))} días
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            {license.features && license.features.length > 0 && (
              <div className="bg-zinc-800/30 rounded-xl p-4 border border-zinc-700">
                <h3 className="text-lg font-bold text-white font-[var(--font-poppins)] mb-4">
                  Features Incluidas
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {license.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-zinc-700/50 text-zinc-300 text-sm rounded-full border border-zinc-600 font-[var(--font-sora)]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}
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

export default LicenseDetailModal;