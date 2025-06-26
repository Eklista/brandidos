// src/modules/admin/components/modals/EditLicenseModal.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Building, 
  Calendar, 
  User,
  Copy,
  RefreshCw,
  Save
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
}

interface EditLicenseModalProps {
  isOpen: boolean;
  onClose: () => void;
  license: License | null;
  onSubmit: (updatedLicense: License) => void;
}

const EditLicenseModal = ({ isOpen, onClose, license, onSubmit }: EditLicenseModalProps) => {
  const [formData, setFormData] = useState({
    client: '',
    organization: '',
    licenseType: 'Business',
    expiryDate: '',
    status: 'active' as 'active' | 'inactive' | 'expired' | 'pending'
  });
  
  const [currentToken, setCurrentToken] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const licenseTypes = [
    { value: 'Starter', label: 'Starter', description: 'Para proyectos pequeños' },
    { value: 'Business', label: 'Business', description: 'Para empresas medianas' },
    { value: 'Enterprise Pro', label: 'Enterprise Pro', description: 'Para grandes organizaciones' },
    { value: 'Education', label: 'Education', description: 'Para instituciones educativas' },
    { value: 'Agency', label: 'Agency', description: 'Para agencias creativas' }
  ];

  const statusOptions = [
    { value: 'active', label: 'Activa', color: 'text-lime-400' },
    { value: 'inactive', label: 'Inactiva', color: 'text-yellow-400' },
    { value: 'pending', label: 'Pendiente', color: 'text-blue-400' },
    { value: 'expired', label: 'Expirada', color: 'text-red-400' }
  ];

  useEffect(() => {
    if (license && isOpen) {
      setFormData({
        client: license.client,
        organization: license.organization,
        licenseType: license.licenseType,
        expiryDate: license.expiryDate,
        status: license.status
      });
      setCurrentToken(license.token);
    }
  }, [license, isOpen]);

  const generateNewToken = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const prefix = 'BRD';
      const typePrefix = {
        'Starter': 'STR',
        'Business': 'BIZ',
        'Enterprise Pro': 'ENT',
        'Education': 'EDU',
        'Agency': 'AGY'
      }[formData.licenseType] || 'GEN';
      
      const clientCode = formData.client.substring(0, 2).toUpperCase() || 'XX';
      const randomPart = Array.from({ length: 32 }, () => 
        Math.random().toString(36).charAt(0).toUpperCase()
      ).join('');
      
      const newToken = `${prefix}-${typePrefix}-${clientCode}-${randomPart}`;
      setCurrentToken(newToken);
      setIsGenerating(false);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!license) return;

    setIsLoading(true);
    
    setTimeout(() => {
      const updatedLicense: License = {
        ...license,
        ...formData,
        token: currentToken
      };
      
      onSubmit(updatedLicense);
      setIsLoading(false);
      onClose();
    }, 1000);
  };

  const copyToken = () => {
    navigator.clipboard.writeText(currentToken);
  };

  if (!license || !isOpen) return null;

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
                Editar Licencia
              </h2>
              <p className="text-zinc-400 font-[var(--font-sora)] mt-1">
                Modifica los datos de la licencia existente
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
            {/* Client Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-zinc-300 mb-2 font-[var(--font-sora)]">
                  Cliente
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
                  <input
                    type="text"
                    value={formData.client}
                    onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-lime-400/50 transition-all duration-300 font-[var(--font-sora)]"
                    placeholder="Nombre del cliente"
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
                    placeholder="Empresa u organización"
                    required
                  />
                </div>
              </div>
            </div>

            {/* License Type */}
            <div>
              <label className="block text-sm font-semibold text-zinc-300 mb-3 font-[var(--font-sora)]">
                Tipo de Licencia
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {licenseTypes.map((type) => (
                  <motion.label
                    key={type.value}
                    whileHover={{ scale: 1.02 }}
                    className={`cursor-pointer p-4 rounded-lg border-2 transition-all duration-300 ${
                      formData.licenseType === type.value
                        ? 'border-lime-400 bg-lime-400/10'
                        : 'border-zinc-700 bg-zinc-800/30 hover:border-zinc-600'
                    }`}
                  >
                    <input
                      type="radio"
                      value={type.value}
                      checked={formData.licenseType === type.value}
                      onChange={(e) => setFormData({ ...formData, licenseType: e.target.value })}
                      className="sr-only"
                    />
                    <div className="text-sm font-semibold text-white mb-1 font-[var(--font-sora)]">
                      {type.label}
                    </div>
                    <div className="text-xs text-zinc-400 font-[var(--font-sora)]">
                      {type.description}
                    </div>
                  </motion.label>
                ))}
              </div>
            </div>

            {/* Status and Expiry */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-zinc-300 mb-2 font-[var(--font-sora)]">
                  Estado
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lime-400/50 transition-all duration-300 font-[var(--font-sora)]"
                >
                  {statusOptions.map((status) => (
                    <option key={status.value} value={status.value}>
                      {status.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-300 mb-2 font-[var(--font-sora)]">
                  Fecha de Vencimiento
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
                  <input
                    type="date"
                    value={formData.expiryDate}
                    onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-lime-400/50 transition-all duration-300 font-[var(--font-sora)]"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Token Management */}
            <div className="bg-zinc-800/30 rounded-lg p-4 border border-zinc-700">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-zinc-300 font-[var(--font-sora)]">
                  Token de Licencia
                </label>
                <motion.button
                  type="button"
                  onClick={generateNewToken}
                  disabled={isGenerating}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-3 py-1.5 bg-blue-500 hover:bg-blue-600 disabled:bg-zinc-700 disabled:text-zinc-400 text-white text-xs font-semibold rounded-lg transition-all duration-300"
                >
                  <RefreshCw className={`w-3 h-3 mr-1 ${isGenerating ? 'animate-spin' : ''}`} />
                  Regenerar
                </motion.button>
              </div>
              
              <div className="flex items-center space-x-2">
                <code className="flex-1 text-xs font-mono text-lime-400 bg-zinc-900/50 px-3 py-2 rounded border border-zinc-600 break-all">
                  {currentToken}
                </code>
                <button
                  type="button"
                  onClick={copyToken}
                  className="p-2 text-zinc-400 hover:text-lime-400 transition-colors"
                  title="Copiar token"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              
              <p className="text-xs text-zinc-500 mt-2 font-[var(--font-sora)]">
                Regenerar el token invalidará el token actual y requerirá actualización en el cliente
              </p>
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
                    <span>Actualizando...</span>
                  </div>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Actualizar Licencia
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EditLicenseModal;