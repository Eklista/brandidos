// src/modules/admin/components/ui/Navbar.tsx
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { menuItems } from '../../config/menuItems';

interface NavbarProps {
  currentPage?: string;
  onMenuClick: () => void;
}

const Navbar = ({ currentPage = 'home', onMenuClick }: NavbarProps) => {
  const currentItem = menuItems.find(item => item.id === currentPage);

  return (
    <header className="bg-zinc-900/30 backdrop-blur-xl border-b border-zinc-800 px-4 lg:px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div>
            <h2 className="text-xl font-bold font-[var(--font-poppins)] text-white">
              {currentItem?.name || 'Dashboard'}
            </h2>
            <p className="text-sm text-zinc-400 font-[var(--font-sora)]">
              {currentItem?.description || 'Panel de control'}
            </p>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center space-x-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-8 h-8 bg-lime-400/20 rounded-full flex items-center justify-center border border-lime-400/30"
          >
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
          </motion.div>
          <span className="hidden sm:inline text-xs text-zinc-400 font-[var(--font-sora)]">
            Sistema activo
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;