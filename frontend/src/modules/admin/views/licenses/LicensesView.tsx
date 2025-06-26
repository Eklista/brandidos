// src/modules/admin/views/licenses/LicensesView.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Filter, 
  Eye, 
  EyeOff, 
  Copy, 
  Calendar,
  Building,
  Key,
  CheckCircle
} from 'lucide-react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import NewLicenseModal from '../../components/modals/licenses/NewLicenseModal';
import LicenseDetailModal from '../../components/modals/licenses/LicenseDetailModal';
import EditLicenseModal from '../../components/modals/licenses/EditLicenseModal';
import DeleteConfirmModal from '../../components/modals/DeleteConfirmModal';
import LicenseActionsDropdown from '../../components/ui/LicenseActionsDropdown';
import { LicenseListSkeleton } from '../../components/ui/LoadingSkeletons';
import { useToastHelpers } from '../../components/ui/ToastContainer';

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

const LicensesView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [visibleTokens, setVisibleTokens] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(false);
  
  // Modal states
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedLicense, setSelectedLicense] = useState<License | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const { success, error, info } = useToastHelpers();

  const [licenses, setLicenses] = useState<License[]>([
    {
      id: '1',
      client: 'Medialab',
      organization: 'Universidad Galileo',
      licenseType: 'Enterprise Pro',
      token: 'BRD-ENT-ML-4A7B9C2D8E1F6G3H5J9K2L7M4N8P1Q5R3S',
      status: 'active',
      expiryDate: '2025-12-31',
      createdAt: '2024-01-15',
      lastUsed: '2024-12-20',
      usageCount: 47,
      features: ['API Access', 'Advanced Analytics', 'Priority Support', 'Custom Integration']
    }
  ]);

  // Actions handlers
  const handleViewLicense = (licenseId: string) => {
    const license = licenses.find(l => l.id === licenseId);
    if (license) {
      setSelectedLicense(license);
      setIsDetailModalOpen(true);
    }
  };

  const handleEditLicense = (licenseId: string) => {
    const license = licenses.find(l => l.id === licenseId);
    if (license) {
      setSelectedLicense(license);
      setIsEditModalOpen(true);
    }
  };

  const handleDeleteLicense = (licenseId: string) => {
    const license = licenses.find(l => l.id === licenseId);
    if (license) {
      setSelectedLicense(license);
      setIsDeleteModalOpen(true);
    }
  };

  const confirmDeleteLicense = async () => {
    if (!selectedLicense) return;
    
    setIsDeleting(true);
    
    setTimeout(() => {
      setLicenses(prev => prev.filter(l => l.id !== selectedLicense.id));
      setIsDeleteModalOpen(false);
      setSelectedLicense(null);
      setIsDeleting(false);
      success('Licencia eliminada', 'La licencia ha sido eliminada correctamente');
    }, 1500);
  };

  const handleCopyToken = async (licenseId: string) => {
    const license = licenses.find(l => l.id === licenseId);
    if (license) {
      try {
        await navigator.clipboard.writeText(license.token);
        success('Token copiado', 'El token ha sido copiado al portapapeles');
      } catch (err) {
        error('Error', 'No se pudo copiar el token');
      }
    }
  };

  const handleRefreshToken = (licenseId: string) => {
    info('Regenerando token', 'Esta funcionalidad estará disponible próximamente');
  };

  const handleDownload = (licenseId: string) => {
    info('Descargando', 'Esta funcionalidad estará disponible próximamente');
  };

  const handleSettings = (licenseId: string) => {
    info('Configuración', 'Esta funcionalidad estará disponible próximamente');
  };

  const handleCreateLicense = (newLicense: any) => {
    setLicenses([...licenses, newLicense]);
    success('Licencia creada', 'Nueva licencia generada exitosamente');
  };

  const handleUpdateLicense = (updatedLicense: License) => {
    setLicenses(prev => prev.map(l => l.id === updatedLicense.id ? updatedLicense : l));
    success('Licencia actualizada', 'Los cambios han sido guardados correctamente');
  };

  const toggleTokenVisibility = (licenseId: string) => {
    const newVisible = new Set(visibleTokens);
    if (newVisible.has(licenseId)) {
      newVisible.delete(licenseId);
    } else {
      newVisible.add(licenseId);
    }
    setVisibleTokens(newVisible);
  };

  const getStatusConfig = (status: string) => {
    return {
      icon: CheckCircle,
      text: 'Activa',
      color: 'text-lime-400',
      bg: 'bg-lime-400/20',
      border: 'border-lime-400/30'
    };
  };

  const formatToken = (token: string, isVisible: boolean) => {
    if (isVisible) return token;
    
    const parts = token.split('-');
    if (parts.length >= 4) {
      return `${parts[0]}-${parts[1]}-${parts[2]}-${'•'.repeat(20)}`;
    }
    return '•'.repeat(token.length - 10) + token.slice(-10);
  };

  const filteredLicenses = licenses.filter(license => {
    const matchesSearch = license.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         license.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         license.licenseType.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || license.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  if (isLoading) {
    return (
      <DashboardLayout currentPage="licenses">
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-black font-[var(--font-poppins)] text-white mb-2">
                Gestión de Licencias
              </h1>
              <p className="text-zinc-400 font-[var(--font-sora)]">
                Cargando licencias...
              </p>
            </div>
          </div>
          <LicenseListSkeleton count={3} />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout currentPage="licenses">
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
        >
          <div>
            <h1 className="text-3xl font-black font-[var(--font-poppins)] text-white mb-2">
              Gestión de Licencias
            </h1>
            <p className="text-zinc-400 font-[var(--font-sora)]">
              Controla los tokens y accesos de tus clientes
            </p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsNewModalOpen(true)}
            className="flex items-center px-6 py-3 bg-lime-400 hover:bg-lime-500 text-zinc-900 font-bold rounded-xl transition-all duration-300 font-[var(--font-sora)]"
          >
            <Plus className="w-5 h-5 mr-2" />
            Nueva Licencia
          </motion.button>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <div className="bg-zinc-900/30 backdrop-blur-xl rounded-lg p-4 border border-zinc-800 text-center">
            <div className="text-2xl font-black font-[var(--font-poppins)] text-white mb-1">
              {licenses.length}
            </div>
            <div className="text-sm text-zinc-400 font-[var(--font-sora)]">
              Total
            </div>
          </div>
          <div className="bg-zinc-900/30 backdrop-blur-xl rounded-lg p-4 border border-zinc-800 text-center">
            <div className="text-2xl font-black font-[var(--font-poppins)] text-lime-400 mb-1">
              {licenses.filter(l => l.status === 'active').length}
            </div>
            <div className="text-sm text-zinc-400 font-[var(--font-sora)]">
              Activas
            </div>
          </div>
          <div className="bg-zinc-900/30 backdrop-blur-xl rounded-lg p-4 border border-zinc-800 text-center">
            <div className="text-2xl font-black font-[var(--font-poppins)] text-yellow-400 mb-1">
              {licenses.filter(l => l.status === 'pending').length}
            </div>
            <div className="text-sm text-zinc-400 font-[var(--font-sora)]">
              Pendientes
            </div>
          </div>
          <div className="bg-zinc-900/30 backdrop-blur-xl rounded-lg p-4 border border-zinc-800 text-center">
            <div className="text-2xl font-black font-[var(--font-poppins)] text-red-400 mb-1">
              {licenses.filter(l => l.status === 'expired').length}
            </div>
            <div className="text-sm text-zinc-400 font-[var(--font-sora)]">
              Expiradas
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-zinc-900/30 backdrop-blur-xl rounded-xl p-6 border border-zinc-800"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por cliente, organización o tipo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-lime-400/50 transition-all duration-300 font-[var(--font-sora)]"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-zinc-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lime-400/50 transition-all duration-300 font-[var(--font-sora)]"
              >
                <option value="all">Todos los estados</option>
                <option value="active">Activas</option>
                <option value="pending">Pendientes</option>
                <option value="expired">Expiradas</option>
                <option value="inactive">Inactivas</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* License Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4"
        >
          {filteredLicenses.map((license, index) => {
            const statusConfig = getStatusConfig(license.status);
            const isTokenVisible = visibleTokens.has(license.id);
            
            return (
              <motion.div
                key={license.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-zinc-900/30 backdrop-blur-xl rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Cliente Info */}
                  <div className="lg:col-span-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-zinc-700 rounded-xl flex items-center justify-center">
                        <Building className="w-6 h-6 text-zinc-400" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white font-[var(--font-poppins)]">
                          {license.client}
                        </div>
                        <div className="text-sm text-zinc-400 font-[var(--font-sora)]">
                          {license.organization}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* License Type */}
                  <div className="lg:col-span-2">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-lime-400/20 text-lime-400 border border-lime-400/30">
                      {license.licenseType}
                    </span>
                  </div>

                  {/* Token */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center space-x-2">
                      <code className="flex-1 text-sm font-mono text-zinc-300 bg-zinc-800/50 px-3 py-2 rounded-lg border border-zinc-700 truncate">
                        {formatToken(license.token, isTokenVisible)}
                      </code>
                      <div className="flex space-x-1">
                        <button
                          onClick={() => toggleTokenVisibility(license.id)}
                          className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-700 rounded-lg transition-all duration-200"
                          title={isTokenVisible ? 'Ocultar token' : 'Mostrar token'}
                        >
                          {isTokenVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                        <button
                          onClick={() => handleCopyToken(license.id)}
                          className="p-2 text-zinc-400 hover:text-lime-400 hover:bg-zinc-700 rounded-lg transition-all duration-200"
                          title="Copiar token"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Status & Date */}
                  <div className="lg:col-span-2">
                    <div className="space-y-2">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${statusConfig.bg} ${statusConfig.border} ${statusConfig.color}`}>
                        <statusConfig.icon className="w-3 h-3 mr-1" />
                        {statusConfig.text}
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-zinc-400">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(license.expiryDate).toLocaleDateString('es-ES')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="lg:col-span-1 text-right">
                    <LicenseActionsDropdown
                      licenseId={license.id}
                      onView={handleViewLicense}
                      onEdit={handleEditLicense}
                      onDelete={handleDeleteLicense}
                      onCopyToken={() => handleCopyToken(license.id)}
                      onRefreshToken={handleRefreshToken}
                      onDownload={handleDownload}
                      onSettings={handleSettings}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Empty State */}
        {filteredLicenses.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <Key className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-zinc-400 mb-2 font-[var(--font-poppins)]">
              No se encontraron licencias
            </h3>
            <p className="text-zinc-500 font-[var(--font-sora)]">
              {searchTerm || filterStatus !== 'all' 
                ? 'Ajusta los filtros para ver más resultados' 
                : 'Crea tu primera licencia para comenzar'
              }
            </p>
          </motion.div>
        )}
      </div>

      {/* Modals */}
      <NewLicenseModal
        isOpen={isNewModalOpen}
        onClose={() => setIsNewModalOpen(false)}
        onSubmit={handleCreateLicense}
      />

      <LicenseDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        license={selectedLicense}
        onCopyToken={() => selectedLicense && handleCopyToken(selectedLicense.id)}
      />

      <EditLicenseModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        license={selectedLicense}
        onSubmit={handleUpdateLicense}
      />

      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDeleteLicense}
        title="Eliminar Licencia"
        message="¿Estás seguro que quieres eliminar esta licencia? Esta acción no se puede deshacer."
        itemName={selectedLicense ? `${selectedLicense.client} - ${selectedLicense.organization}` : undefined}
        isLoading={isDeleting}
      />
    </DashboardLayout>
  );
};

export default LicensesView;