import { useState } from 'react';
import { User, Lock, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import AuthInput from './ui/AuthInput';
import AuthButton from './ui/AuthButton';
import { useAuthForm } from '../hooks/useAuthForm';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { isLoading, error, handleLogin, clearError } = useAuthForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    
    const result = await handleLogin({ email, password });
    
    if (result.success) {
      // Redirect o actualizar estado global
      console.log('Login exitoso!');
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <AuthInput
        type="email"
        icon={User}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={error ?? undefined}
        required
      />

      <div className="relative">
        <AuthInput
          type={showPassword ? 'text' : 'password'}
          icon={Lock}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="pr-10"
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 text-white/40 hover:text-white/70 transition-colors duration-200"
        >
          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>

      <AuthButton type="submit" isLoading={isLoading}>
        Entrar
      </AuthButton>

      <div className="mt-4 text-center">
        <button 
          type="button"
          className="text-white/50 hover:text-lime-400 text-xs font-medium transition-colors duration-300 font-[var(--font-sora)]"
        >
          ¿Olvidaste tu password?
        </button>
      </div>

      <div className="flex items-center my-6">
        <div className="flex-1 h-px bg-white/10"></div>
        <span className="px-3 text-white/30 text-xs font-mono">* * *</span>
        <div className="flex-1 h-px bg-white/10"></div>
      </div>

      <div className="text-center">
        <p className="text-white/50 text-xs font-[var(--font-sora)] mb-3">
          ¿No tienes acceso? Solo clientes pueden entrar.
        </p>
        
        <button 
          type="button"
          className="text-lime-400/80 hover:text-lime-400 text-xs font-medium transition-colors duration-300 font-[var(--font-sora)] underline"
        >
          Contactar soporte
        </button>
      </div>
    </motion.form>
  );
};

export default LoginForm;