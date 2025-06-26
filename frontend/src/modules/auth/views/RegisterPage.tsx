// src/modules/auth/views/RegisterPage.tsx
import AuthLayout from '../components/AuthLayout';
import RegisterStepper from '../components/RegisterStepper';

const RegisterPage = () => {
  return (
    <AuthLayout 
      title="ÚNETE A LA BANDA" 
      subtitle="Solo por invitación"
    >
      <RegisterStepper />
      
      <p className="text-center mt-6 text-white/30 text-xs font-[var(--font-sora)]">
        ¿Ya tienes cuenta? <a href="/login" className="text-lime-400 hover:underline">Iniciar sesión</a>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;