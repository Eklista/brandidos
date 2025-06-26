// src/modules/admin/views/DashboardHome.tsx
import { motion } from 'framer-motion';
import { 
  Users, 
  Key, 
  Activity, 
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import DashboardLayout from '../components/layouts/DashboardLayout';

const DashboardHome = () => {
  const stats = [
    {
      title: 'Clientes Activos',
      value: '24',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'lime'
    },
    {
      title: 'Licencias Activas',
      value: '67',
      change: '+8%',
      trend: 'up',
      icon: Key,
      color: 'blue'
    },
    {
      title: 'Proyectos en Curso',
      value: '15',
      change: '+3',
      trend: 'up',
      icon: Activity,
      color: 'purple'
    },
    {
      title: 'Revenue Mensual',
      value: '$45,231',
      change: '+15%',
      trend: 'up',
      icon: DollarSign,
      color: 'green'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'license',
      title: 'Nueva licencia generada',
      description: 'Medialab - Universidad Galileo',
      time: 'Hace 2 horas',
      status: 'success'
    },
    {
      id: 2,
      type: 'client',
      title: 'Cliente actualizado',
      description: 'TechCorp Guatemala',
      time: 'Hace 4 horas',
      status: 'info'
    },
    {
      id: 3,
      type: 'project',
      title: 'Proyecto completado',
      description: 'Rediseño de marca - StartupGT',
      time: 'Hace 6 horas',
      status: 'success'
    },
    {
      id: 4,
      type: 'warning',
      title: 'Licencia por vencer',
      description: 'EduTech Solutions - 7 días restantes',
      time: 'Hace 1 día',
      status: 'warning'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-lime-400" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      default:
        return <Clock className="w-4 h-4 text-blue-400" />;
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      lime: 'bg-lime-400/20 border-lime-400/30 text-lime-400',
      blue: 'bg-blue-400/20 border-blue-400/30 text-blue-400',
      purple: 'bg-purple-400/20 border-purple-400/30 text-purple-400',
      green: 'bg-green-400/20 border-green-400/30 text-green-400'
    };
    return colors[color as keyof typeof colors] || colors.lime;
  };

  return (
    <DashboardLayout currentPage="home">
      <div className="space-y-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-zinc-900/50 to-zinc-800/50 backdrop-blur-xl rounded-2xl p-8 border border-zinc-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-black font-[var(--font-poppins)] text-white mb-2">
                ¡Qué tal, bandido! 🤠
              </h1>
              <p className="text-zinc-400 font-[var(--font-sora)] text-lg">
                Todo funcionando smooth. Tu empire está bajo control.
              </p>
            </div>
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="hidden md:block"
            >
              <img 
                src="/brandido.webp" 
                alt="Brandido" 
                className="w-24 h-24 object-contain opacity-80"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-zinc-900/30 backdrop-blur-xl rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${getColorClasses(stat.color)}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className="text-xs text-zinc-400 font-[var(--font-sora)]">
                    {stat.change}
                  </div>
                  <TrendingUp className="w-4 h-4 text-lime-400 ml-auto" />
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="text-2xl font-black font-[var(--font-poppins)] text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-400 font-[var(--font-sora)]">
                  {stat.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Activity Feed */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-zinc-900/30 backdrop-blur-xl rounded-xl p-6 border border-zinc-800"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold font-[var(--font-poppins)] text-white">
                Actividad Reciente
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="text-xs text-lime-400 hover:text-lime-300 font-[var(--font-sora)] underline"
              >
                Ver todo
              </motion.button>
            </div>

            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-zinc-800/50 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 mt-1">
                    {getStatusIcon(activity.status)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-white font-[var(--font-sora)]">
                      {activity.title}
                    </div>
                    <div className="text-sm text-zinc-400 font-[var(--font-sora)]">
                      {activity.description}
                    </div>
                    <div className="text-xs text-zinc-500 mt-1 font-[var(--font-sora)]">
                      {activity.time}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-zinc-900/30 backdrop-blur-xl rounded-xl p-6 border border-zinc-800"
          >
            <h3 className="text-xl font-bold font-[var(--font-poppins)] text-white mb-6">
              Acciones Rápidas
            </h3>

            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-between p-4 bg-lime-400/20 hover:bg-lime-400/30 border border-lime-400/30 rounded-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <Key className="w-5 h-5 text-lime-400" />
                  <span className="font-semibold text-white font-[var(--font-sora)]">
                    Nueva Licencia
                  </span>
                </div>
                <div className="text-lime-400">→</div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-between p-4 bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700 rounded-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="font-semibold text-white font-[var(--font-sora)]">
                    Agregar Cliente
                  </span>
                </div>
                <div className="text-zinc-400">→</div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-between p-4 bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700 rounded-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <Activity className="w-5 h-5 text-purple-400" />
                  <span className="font-semibold text-white font-[var(--font-sora)]">
                    Nuevo Proyecto
                  </span>
                </div>
                <div className="text-zinc-400">→</div>
              </motion.button>
            </div>

            {/* System Status */}
            <div className="mt-6 pt-6 border-t border-zinc-800">
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-400 font-[var(--font-sora)]">
                  Sistema
                </span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-lime-400 font-[var(--font-sora)]">
                    Operativo
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardHome;