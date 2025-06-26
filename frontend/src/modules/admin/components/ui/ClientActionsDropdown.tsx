// src/modules/admin/components/ui/ClientActionsDropdown.tsx
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MoreVertical, 
  Eye, 
  Edit, 
  Trash2, 
  Mail,
  Phone,
  MessageCircle,
  Star,
  Archive
} from 'lucide-react';

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

interface ClientActionsDropdownProps {
  clientId: string;
  onView?: (id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onEmail?: (id: string) => void;
  onCall?: (id: string) => void;
  onMessage?: (id: string) => void;
  onRate?: (id: string) => void;
  onArchive?: (id: string) => void;
}

const ClientActionsDropdown = ({
  clientId,
  onView,
  onEdit,
  onDelete,
  onEmail,
  onCall,
  onMessage,
  onRate,
  onArchive
}: ClientActionsDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const actions: MenuItem[] = [
    {
      label: 'Ver Detalles',
      icon: Eye,
      onClick: () => onView?.(clientId),
      color: 'text-zinc-300 hover:text-white hover:bg-zinc-700'
    },
    {
      label: 'Editar',
      icon: Edit,
      onClick: () => onEdit?.(clientId),
      color: 'text-zinc-300 hover:text-white hover:bg-zinc-700'
    },
    {
      label: 'Enviar Email',
      icon: Mail,
      onClick: () => onEmail?.(clientId),
      color: 'text-blue-400 hover:text-blue-300 hover:bg-blue-400/20'
    },
    {
      label: 'Llamar',
      icon: Phone,
      onClick: () => onCall?.(clientId),
      color: 'text-green-400 hover:text-green-300 hover:bg-green-400/20'
    },
    {
      label: 'Mensaje',
      icon: MessageCircle,
      onClick: () => onMessage?.(clientId),
      color: 'text-purple-400 hover:text-purple-300 hover:bg-purple-400/20'
    },
    {
      label: 'Calificar',
      icon: Star,
      onClick: () => onRate?.(clientId),
      color: 'text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/20'
    },
    {
      type: 'divider'
    },
    {
      label: 'Archivar',
      icon: Archive,
      onClick: () => onArchive?.(clientId),
      color: 'text-orange-400 hover:text-orange-300 hover:bg-orange-400/20'
    },
    {
      label: 'Eliminar',
      icon: Trash2,
      onClick: () => onDelete?.(clientId),
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

export default ClientActionsDropdown;