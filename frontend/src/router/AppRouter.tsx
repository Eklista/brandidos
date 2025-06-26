import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../modules/public/views/HomePage';
import LoginPage from '../modules/auth/views/LoginPage';
import ForgotPasswordPage from '../modules/auth/views/ForgotPasswordPage';
import RegisterPage from '../modules/auth/views/RegisterPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;