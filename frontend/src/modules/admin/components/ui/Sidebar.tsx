// src/modules/admin/components/ui/Sidebar.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, LogOut, X } from 'lucide-react';
import { menuItems } from '../../config/menuItems';

interface SidebarProps {
  currentPage?: string;
  isOpen: boolean;
  onClose: () => void;
  isMobile?: boolean;
}

const Sidebar = ({ currentPage = 'home', isOpen, onClose, isMobile = false }: SidebarProps) => {
  if (isMobile) {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-y-0 left-0 w-72 z-50"
          >
            <div className="flex flex-col h-full bg-zinc-900/95 backdrop-blur-xl border-r border-zinc-800">
              {/* Logo Mobile */}
              <div className="flex items-center justify-between h-20 px-6 border-b border-zinc-800">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center">
                    <span className="text-zinc-900 font-black text-sm">B</span>
                  </div>
                  <div>
                    <h1 className="text-lg font-black font-[var(--font-poppins)] text-white">
                      BRANDIDOS
                    </h1>
                    <p className="text-xs text-zinc-400 font-[var(--font-sora)]">
                      Admin Panel
                    </p>
                  </div>
                </motion.div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Mobile */}
              <nav className="flex-1 px-4 py-6 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    onClick={onClose}
                    className={`group flex items-center px-4 py-3 rounded-xl transition-all duration-300 ${
                      currentPage === item.id
                        ? 'bg-lime-400/20 text-lime-400 border border-lime-400/30'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-sm font-semibold font-[var(--font-sora)]">
                        {item.name}
                      </div>
                      <div className="text-xs opacity-70 font-[var(--font-sora)]">
                        {item.description}
                      </div>
                    </div>
                    {currentPage === item.id && (
                      <ChevronRight className="w-4 h-4 text-lime-400" />
                    )}
                  </motion.a>
                ))}
              </nav>

              {/* User Section Mobile */}
              <div className="p-4 border-t border-zinc-800">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-white">A</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-white">Admin User</div>
                    <div className="text-xs text-zinc-400">admin@brandidos.com</div>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center px-4 py-2 text-zinc-400 hover:text-red-400 transition-colors duration-300 rounded-lg hover:bg-zinc-800/50"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  <span className="text-sm font-[var(--font-sora)]">Salir</span>
                </motion.button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    );
  }

  // Desktop Sidebar
  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed inset-y-0 left-0 w-72 z-40"
    >
      <div className="flex flex-col h-full bg-zinc-900/50 backdrop-blur-xl border-r border-zinc-800">
        {/* Logo Desktop */}
        <div className="flex items-center h-20 px-6 border-b border-zinc-800">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-3"
          >
            <div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center">
              <span className="text-zinc-900 font-black text-sm">B</span>
            </div>
            <div>
              <h1 className="text-lg font-black font-[var(--font-poppins)] text-white">
                BRANDIDOS
              </h1>
              <p className="text-xs text-zinc-400 font-[var(--font-sora)]">
                Admin Panel
              </p>
            </div>
          </motion.div>
        </div>

        {/* Navigation Desktop */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ x: 4 }}
              className={`group flex items-center px-4 py-3 rounded-xl transition-all duration-300 ${
                currentPage === item.id
                  ? 'bg-lime-400/20 text-lime-400 border border-lime-400/30'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-sm font-semibold font-[var(--font-sora)]">
                  {item.name}
                </div>
                <div className="text-xs opacity-70 font-[var(--font-sora)]">
                  {item.description}
                </div>
              </div>
              {currentPage === item.id && (
                <ChevronRight className="w-4 h-4 text-lime-400" />
              )}
            </motion.a>
          ))}
        </nav>

        {/* User Section Desktop */}
        <div className="p-4 border-t border-zinc-800">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-white">A</span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-white">Admin User</div>
              <div className="text-xs text-zinc-400">admin@brandidos.com</div>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center px-4 py-2 text-zinc-400 hover:text-red-400 transition-colors duration-300 rounded-lg hover:bg-zinc-800/50"
          >
            <LogOut className="w-4 h-4 mr-2" />
            <span className="text-sm font-[var(--font-sora)]">Salir</span>
          </motion.button>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;