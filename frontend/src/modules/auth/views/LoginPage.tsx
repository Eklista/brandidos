import AuthLayout from '../components/AuthLayout';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <AuthLayout 
      title="BRANDIDOS" 
      subtitle="Acceso para la banda"
    >
      <LoginForm />
      
      <p className="text-center mt-6 text-white/30 text-xs font-[var(--font-sora)]">
        Acceso por invitación • Brandidos 2025
      </p>
    </AuthLayout>
  );
};

export default LoginPage;