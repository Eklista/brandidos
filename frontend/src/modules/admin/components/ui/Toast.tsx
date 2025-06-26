// src/modules/admin/components/ui/Toast.tsx
import { motion } from 'framer-motion';
import { X, CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react';
import { useEffect } from 'react';

export interface ToastProps {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  onClose: (id: string) => void;
}

const Toast = ({ id, type, title, message, duration = 5000, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  const getConfig = () => {
    switch (type) {
      case 'success':
        return {
          icon: CheckCircle,
          colors: 'bg-lime-400/20 border-lime-400/30 text-lime-400',
          iconColor: 'text-lime-400'
        };
      case 'error':
        return {
          icon: XCircle,
          colors: 'bg-red-400/20 border-red-400/30 text-red-400',
          iconColor: 'text-red-400'
        };
      case 'warning':
        return {
          icon: AlertTriangle,
          colors: 'bg-yellow-400/20 border-yellow-400/30 text-yellow-400',
          iconColor: 'text-yellow-400'
        };
      case 'info':
        return {
          icon: Info,
          colors: 'bg-blue-400/20 border-blue-400/30 text-blue-400',
          iconColor: 'text-blue-400'
        };
    }
  };

  const config = getConfig();
  const IconComponent = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: 300, scale: 0.3 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 300, scale: 0.5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative flex items-start space-x-3 p-4 rounded-xl border backdrop-blur-xl ${config.colors} shadow-lg min-w-80 max-w-md`}
    >
      <IconComponent className={`w-5 h-5 flex-shrink-0 mt-0.5 ${config.iconColor}`} />
      
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-bold text-white font-[var(--font-poppins)]">
          {title}
        </h4>
        {message && (
          <p className="text-sm text-white/80 font-[var(--font-sora)] mt-1">
            {message}
          </p>
        )}
      </div>

      <button
        onClick={() => onClose(id)}
        className="flex-shrink-0 p-1 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

export default Toast;