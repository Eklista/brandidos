// src/modules/admin/views/clients/ClientsView.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Filter, 
  Building,
  Users,
  Mail,
  Phone,
  Star,
  MapPin,
  Eye,
  Edit
} from 'lucide-react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import NewClientModal from '../../components/modals/NewClientModal';
import ClientDetailModal from '../../components/modals/ClientDetailModal';
import DeleteConfirmModal from '../../components/modals/DeleteConfirmModal';
import ClientActionsDropdown from '../../components/ui/ClientActionsDropdown';
import { ClientGridSkeleton } from '../../components/ui/LoadingSkeletons';
import { useToastHelpers } from '../../components/ui/ToastContainer';

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
  avatar?: string;
}

const ClientsView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  
  // Modal states
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const { success, error, info } = useToastHelpers();

  const [clients, setClients] = useState<Client[]>([
    {
      id: '1',
      name: 'Carlos Mendoza',
      organization: 'Universidad Galileo - Medialab',
      email: 'carlos.mendoza@galileo.edu',
      phone: '+502 2423-8000',
      location: 'Guatemala City, GT',
      status: 'active',
      rating: 5,
      projectsCount: 3,
      totalSpent: 45200,
      joinedDate: '2024-01-15',
      lastContact: '2024-12-20'
    },
    {
      id: '2',
      name: 'María Rodriguez',
      organization: 'TechCorp Guatemala',
      email: 'maria.rodriguez@techcorp.gt',
      phone: '+502 2234-5678',
      location: 'Guatemala City, GT',
      status: 'active',
      rating: 4,
      projectsCount: 2,
      totalSpent: 28500,
      joinedDate: '2024-02-10',
      lastContact: '2024-12-18'
    },
    {
      id: '3',
      name: 'Luis Morales',
      organization: 'StartupGT',
      email: 'luis@startupgt.com',
      phone: '+502 5555-1234',
      location: 'Antigua, GT',
      status: 'lead',
      rating: 0,
      projectsCount: 0,
      totalSpent: 0,
      joinedDate: '2024-12-15',
      lastContact: '2024-12-15'
    },
    {
      id: '4',
      name: 'Ana García',
      organization: 'EduTech Solutions',
      email: 'ana.garcia@edutech.gt',
      phone: '+502 7777-9999',
      location: 'Quetzaltenango, GT',
      status: 'inactive',
      rating: 3,
      projectsCount: 1,
      totalSpent: 12000,
      joinedDate: '2024-06-20',
      lastContact: '2024-10-05'
    }
  ]);

  // Action handlers
  const handleViewClient = (clientId: string) => {
    const client = clients.find(c => c.id === clientId);
    if (client) {
      setSelectedClient(client);
      setIsDetailModalOpen(true);
    }
  };

  const handleEditClient = (clientId: string) => {
    info('Editar cliente', 'Esta funcionalidad estará disponible próximamente');
  };

  const handleDeleteClient = (clientId: string) => {
    const client = clients.find(c => c.id === clientId);
    if (client) {
      setSelectedClient(client);
      setIsDeleteModalOpen(true);
    }
  };

  const confirmDeleteClient = async () => {
    if (!selectedClient) return;
    
    setIsDeleting(true);
    
    setTimeout(() => {
      setClients(prev => prev.filter(c => c.id !== selectedClient.id));
      setIsDeleteModalOpen(false);
      setSelectedClient(null);
      setIsDeleting(false);
      success('Cliente eliminado', 'El cliente ha sido eliminado correctamente');
    }, 1500);
  };

  const handleEmailClient = (clientId: string) => {
    const client = clients.find(c => c.id === clientId);
    if (client) {
      window.open(`mailto:${client.email}?subject=Contacto desde Brandidos`);
      success('Email abierto', 'Se ha abierto tu cliente de email');
    }
  };

  const handleCallClient = (clientId: string) => {
    const client = clients.find(c => c.id === clientId);
    if (client) {
      window.open(`tel:${client.phone}`);
      success('Llamada iniciada', 'Se ha iniciado la llamada');
    }
  };

  const handleMessageClient = (clientId: string) => {
    info('Enviar mensaje', 'Esta funcionalidad estará disponible próximamente');
  };

  const handleRateClient = (clientId: string) => {
    info('Calificar cliente', 'Esta funcionalidad estará disponible próximamente');
  };

  const handleArchiveClient = (clientId: string) => {
    const client = clients.find(c => c.id === clientId);
    if (client) {
      setClients(prev => prev.map(c => 
        c.id === clientId ? { ...c, status: 'archived' as const } : c
      ));
      success('Cliente archivado', 'El cliente ha sido archivado');
    }
  };

  const handleCreateClient = (newClient: any) => {
    setClients([...clients, newClient]);
    success('Cliente creado', 'Nuevo cliente agregado exitosamente');
  };

  // Helper functions
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
      case 'archived':
        return {
          text: 'Archivado',
          color: 'text-gray-400',
          bg: 'bg-gray-400/20',
          border: 'border-gray-400/30'
        };
      default:
        return {
          text: 'Desconocido',
          color: 'text-gray-400',
          bg: 'bg-gray-400/20',
          border: 'border-gray-400/30'
        };
    }
  };

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

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || client.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  if (isLoading) {
    return (
      <DashboardLayout currentPage="clients">
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-black font-[var(--font-poppins)] text-white mb-2">
                Gestión de Clientes
              </h1>
              <p className="text-zinc-400 font-[var(--font-sora)]">
                Cargando clientes...
              </p>
            </div>
          </div>
          <ClientGridSkeleton count={6} />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout currentPage="clients">
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
              Gestión de Clientes
            </h1>
            <p className="text-zinc-400 font-[var(--font-sora)]">
              Administra tu base de clientes y leads
            </p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsNewModalOpen(true)}
            className="flex items-center px-6 py-3 bg-lime-400 hover:bg-lime-500 text-zinc-900 font-bold rounded-xl transition-all duration-300 font-[var(--font-sora)]"
          >
            <Plus className="w-5 h-5 mr-2" />
            Nuevo Cliente
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
              {clients.length}
            </div>
            <div className="text-sm text-zinc-400 font-[var(--font-sora)]">
              Total Clientes
            </div>
          </div>
          <div className="bg-zinc-900/30 backdrop-blur-xl rounded-lg p-4 border border-zinc-800 text-center">
            <div className="text-2xl font-black font-[var(--font-poppins)] text-lime-400 mb-1">
              {clients.filter(c => c.status === 'active').length}
            </div>
            <div className="text-sm text-zinc-400 font-[var(--font-sora)]">
              Activos
            </div>
          </div>
          <div className="bg-zinc-900/30 backdrop-blur-xl rounded-lg p-4 border border-zinc-800 text-center">
            <div className="text-2xl font-black font-[var(--font-poppins)] text-blue-400 mb-1">
              {clients.filter(c => c.status === 'lead').length}
            </div>
            <div className="text-sm text-zinc-400 font-[var(--font-sora)]">
              Leads
            </div>
          </div>
          <div className="bg-zinc-900/30 backdrop-blur-xl rounded-lg p-4 border border-zinc-800 text-center">
            <div className="text-2xl font-black font-[var(--font-poppins)] text-green-400 mb-1">
              {formatCurrency(clients.reduce((sum, c) => sum + c.totalSpent, 0))}
            </div>
            <div className="text-sm text-zinc-400 font-[var(--font-sora)]">
              Revenue Total
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
                placeholder="Buscar por nombre, organización o email..."
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
                <option value="active">Activos</option>
                <option value="lead">Leads</option>
                <option value="inactive">Inactivos</option>
                <option value="archived">Archivados</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {filteredClients.map((client, index) => {
            const statusConfig = getStatusConfig(client.status);
            
            return (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-zinc-900/30 backdrop-blur-xl rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
              >
                {/* Client Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-zinc-700 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {getInitials(client.name)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-white font-[var(--font-poppins)]">
                        {client.name}
                      </h3>
                      <p className="text-sm text-zinc-400 font-[var(--font-sora)]">
                        {client.organization}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className={`px-2 py-1 rounded-full text-xs font-medium border ${statusConfig.bg} ${statusConfig.border} ${statusConfig.color}`}>
                      {statusConfig.text}
                    </div>
                    <ClientActionsDropdown
                      clientId={client.id}
                      onView={handleViewClient}
                      onEdit={handleEditClient}
                      onDelete={handleDeleteClient}
                      onEmail={handleEmailClient}
                      onCall={handleCallClient}
                      onMessage={handleMessageClient}
                      onRate={handleRateClient}
                      onArchive={handleArchiveClient}
                    />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-zinc-400">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate font-[var(--font-sora)]">{client.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-zinc-400">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span className="font-[var(--font-sora)]">{client.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-zinc-400">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="font-[var(--font-sora)]">{client.location}</span>
                  </div>
                </div>

                {/* Rating */}
                {client.rating > 0 && (
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex space-x-1">
                      {renderStars(client.rating)}
                    </div>
                    <span className="text-sm text-zinc-400 font-[var(--font-sora)]">
                      ({client.rating}/5)
                    </span>
                  </div>
                )}

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white font-[var(--font-poppins)]">
                      {client.projectsCount}
                    </div>
                    <div className="text-xs text-zinc-400 font-[var(--font-sora)]">
                      Proyectos
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-lime-400 font-[var(--font-poppins)]">
                      {formatCurrency(client.totalSpent)}
                    </div>
                    <div className="text-xs text-zinc-400 font-[var(--font-sora)]">
                      Total Gastado
                    </div>
                  </div>
                </div>

                {/* Dates */}
                <div className="space-y-1 mb-4 text-xs text-zinc-500">
                  <div className="flex items-center justify-between">
                    <span className="font-[var(--font-sora)]">Cliente desde:</span>
                    <span className="font-[var(--font-sora)]">
                      {new Date(client.joinedDate).toLocaleDateString('es-ES')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-[var(--font-sora)]">Último contacto:</span>
                    <span className="font-[var(--font-sora)]">
                      {new Date(client.lastContact).toLocaleDateString('es-ES')}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleViewClient(client.id)}
                    className="flex-1 flex items-center justify-center px-3 py-2 bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700 rounded-lg transition-all duration-300 text-sm font-[var(--font-sora)]"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    Ver
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleEditClient(client.id)}
                    className="flex-1 flex items-center justify-center px-3 py-2 bg-lime-400/20 hover:bg-lime-400/30 border border-lime-400/30 text-lime-400 rounded-lg transition-all duration-300 text-sm font-[var(--font-sora)]"
                  >
                    <Edit className="w-4 h-4 mr-1" />
                    Editar
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Empty State */}
        {filteredClients.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <Users className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-zinc-400 mb-2 font-[var(--font-poppins)]">
              No se encontraron clientes
            </h3>
            <p className="text-zinc-500 font-[var(--font-sora)]">
              {searchTerm || filterStatus !== 'all' 
                ? 'Ajusta los filtros para ver más resultados' 
                : 'Agrega tu primer cliente para comenzar'
              }
            </p>
          </motion.div>
        )}
      </div>

      {/* Modals */}
      <NewClientModal
        isOpen={isNewModalOpen}
        onClose={() => setIsNewModalOpen(false)}
        onSubmit={handleCreateClient}
      />

      <ClientDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        client={selectedClient}
      />

      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDeleteClient}
        title="Eliminar Cliente"
        message="¿Estás seguro que quieres eliminar este cliente? Esta acción no se puede deshacer."
        itemName={selectedClient ? `${selectedClient.name} - ${selectedClient.organization}` : undefined}
        isLoading={isDeleting}
      />
    </DashboardLayout>
  );
};

export default ClientsView;