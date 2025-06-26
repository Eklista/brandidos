// src/modules/admin/components/ui/LicenseActionsDropdown.tsx
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MoreVertical, 
  Eye, 
  Edit, 
  Copy, 
  Trash2, 
  RefreshCw,
  Download,
  Settings
} from 'lucide-react';

interface LicenseActionsDropdownProps {
  licenseId: string;
  onView?: (id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onCopyToken?: (id: string) => void;
  onRefreshToken?: (id: string) => void;
  onDownload?: (id: string) => void;
  onSettings?: (id: string) => void;
}

const LicenseActionsDropdown = ({
  licenseId,
  onView,
  onEdit,
  onDelete,
  onCopyToken,
  onRefreshToken,
  onDownload,
  onSettings
}: LicenseActionsDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  interface ActionItem {
    label: string;
    icon: any;
    onClick: () => void;
    color: string;
  }

  interface DividerItem {
    type: 'divider';
  }

  type MenuItem = ActionItem | DividerItem;

  const actions: MenuItem[] = [
    {
      label: 'Ver Detalles',
      icon: Eye,
      onClick: () => onView?.(licenseId),
      color: 'text-zinc-300 hover:text-white hover:bg-zinc-700'
    },
    {
      label: 'Editar',
      icon: Edit,
      onClick: () => onEdit?.(licenseId),
      color: 'text-zinc-300 hover:text-white hover:bg-zinc-700'
    },
    {
      label: 'Copiar Token',
      icon: Copy,
      onClick: () => onCopyToken?.(licenseId),
      color: 'text-lime-400 hover:text-lime-300 hover:bg-lime-400/20'
    },
    {
      label: 'Regenerar Token',
      icon: RefreshCw,
      onClick: () => onRefreshToken?.(licenseId),
      color: 'text-blue-400 hover:text-blue-300 hover:bg-blue-400/20'
    },
    {
      label: 'Descargar',
      icon: Download,
      onClick: () => onDownload?.(licenseId),
      color: 'text-zinc-300 hover:text-white hover:bg-zinc-700'
    },
    {
      label: 'Configuración',
      icon: Settings,
      onClick: () => onSettings?.(licenseId),
      color: 'text-zinc-300 hover:text-white hover:bg-zinc-700'
    },
    {
      type: 'divider'
    },
    {
      label: 'Eliminar',
      icon: Trash2,
      onClick: () => onDelete?.(licenseId),
      color: 'text-red-400 hover:text-red-300 hover:bg-red-400/20'
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleActionClick = (action: ActionItem) => {
    action.onClick();
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-700 rounded-lg transition-all duration-200"
      >
        <MoreVertical className="w-4 h-4" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-56 bg-zinc-800/95 backdrop-blur-xl border border-zinc-700 rounded-xl shadow-2xl py-2 z-50"
          >
            {actions.map((action, index) => {
              if ('type' in action && action.type === 'divider') {
                return (
                  <div key={`divider-${index}`} className="h-px bg-zinc-700 my-2 mx-2" />
                );
              }

              const actionItem = action as ActionItem;
              const ActionIcon = actionItem.icon;
              
              return (
                <motion.button
                  key={actionItem.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15, delay: index * 0.02 }}
                  onClick={() => handleActionClick(actionItem)}
                  className={`w-full flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 font-[var(--font-sora)] ${actionItem.color}`}
                >
                  <ActionIcon className="w-4 h-4 mr-3 flex-shrink-0" />
                  {actionItem.label}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LicenseActionsDropdown;