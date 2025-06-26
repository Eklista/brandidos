// src/modules/admin/config/menuItems.ts
import { 
  Home, 
  Key, 
  Users, 
  Settings, 
  Activity,
  type LucideIcon
} from 'lucide-react';

export interface MenuItem {
  id: string;
  name: string;
  icon: LucideIcon;
  href: string;
  description: string;
}

export const menuItems: MenuItem[] = [
  { 
    id: 'home', 
    name: 'Dashboard', 
    icon: Home, 
    href: '/admin',
    description: 'Overview general'
  },
  { 
    id: 'licenses', 
    name: 'Licencias', 
    icon: Key, 
    href: '/admin/licenses',
    description: 'Tokens de clientes'
  },
  { 
    id: 'clients', 
    name: 'Clientes', 
    icon: Users, 
    href: '/admin/clients',
    description: 'Base de clientes'
  },
  { 
    id: 'projects', 
    name: 'Proyectos', 
    icon: Activity, 
    href: '/admin/projects',
    description: 'Trabajos activos'
  },
  { 
    id: 'settings', 
    name: 'Configuración', 
    icon: Settings, 
    href: '/admin/settings',
    description: 'Sistema'
  }
];