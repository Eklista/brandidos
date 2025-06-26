// src/router/AppRouter.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../modules/public/views/HomePage';
import LoginPage from '../modules/auth/views/LoginPage';
import ForgotPasswordPage from '../modules/auth/views/ForgotPasswordPage';
import RegisterPage from '../modules/auth/views/RegisterPage';

// Admin imports
import DashboardHome from '../modules/admin/views/DashboardHome';
import LicensesView from '../modules/admin/views/licenses/LicensesView';
import ClientsView from '../modules/admin/views/clients/ClientsView';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        
        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<DashboardHome />} />
        <Route path="/admin/licenses" element={<LicensesView />} />
        <Route path="/admin/clients" element={<ClientsView />} />
        
        {/* Placeholder routes para futuras vistas */}
        <Route path="/admin/projects" element={<div>Proyectos - En desarrollo</div>} />
        <Route path="/admin/settings" element={<div>Configuración - En desarrollo</div>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;