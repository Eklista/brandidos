// src/modules/admin/components/layouts/DashboardLayout.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '../ui/Sidebar';
import Navbar from '../ui/Navbar';

interface DashboardLayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

const DashboardLayout = ({ children, currentPage = 'home' }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar 
          currentPage={currentPage} 
          isOpen={true} 
          onClose={() => {}} 
          isMobile={false} 
        />
      </div>

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <Sidebar 
          currentPage={currentPage} 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
          isMobile={true} 
        />
      </div>

      {/* Main Content */}
      <div className="lg:ml-72">
        {/* Navbar */}
        <Navbar 
          currentPage={currentPage}
          onMenuClick={() => setSidebarOpen(true)}
        />

        {/* Content */}
        <main className="p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;