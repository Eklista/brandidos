// src/modules/auth/views/ForgotPasswordPage.tsx
import AuthLayout from '../components/AuthLayout';
import ForgotPasswordForm from '../components/ForgotPasswordForm';

const ForgotPasswordPage = () => {
  return (
    <AuthLayout 
      title="RECUPERAR ACCESO" 
      subtitle="No te preocupes, nos pasa a todos"
    >
      <ForgotPasswordForm />
      
      <div className="text-center mt-6 space-y-2">
        <p className="text-white/30 text-xs font-[var(--font-sora)]">
          ¿Recordaste tu contraseña? <a href="/login" className="text-lime-400 hover:underline">Iniciar sesión</a>
        </p>
        <p className="text-white/30 text-xs font-[var(--font-sora)]">
          ¿No tienes cuenta? <a href="/register" className="text-lime-400 hover:underline">Registrarse</a>
        </p>
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;