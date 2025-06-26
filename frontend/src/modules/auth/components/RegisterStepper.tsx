// src/modules/auth/components/RegisterStepper.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, ArrowLeft } from 'lucide-react';
import TokenInput from './ui/TokenInput';
import AuthInput from './ui/AuthInput';
import AuthButton from './ui/AuthButton';
import StepIndicator from './ui/StepIndicator';

interface RegisterData {
  token: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterStepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [formData, setFormData] = useState<RegisterData>({
    token: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const steps = [
    'Verificar invitación',
    'Información personal',
    'Crear contraseña'
  ];

  const handleTokenComplete = async (token: string) => {
    setIsLoading(true);
    setErrors({});
    
    try {
      // Simular verificación de token
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simular validación (puedes cambiar la lógica)
      if (token === '123456' || token === 'BRAND1') {
        setFormData({ ...formData, token });
        setCurrentStep(2);
      } else {
        setErrors({ token: 'Token de invitación inválido' });
      }
    } catch (error) {
      setErrors({ token: 'Error al verificar token' });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePersonalInfo = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    if (!formData.name.trim()) {
      setErrors({ name: 'El nombre es requerido' });
      return;
    }
    
    if (!formData.email.trim()) {
      setErrors({ email: 'El email es requerido' });
      return;
    }
    
    setCurrentStep(3);
  };

  const handlePasswordCreation = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    if (formData.password.length < 6) {
      setErrors({ password: 'La contraseña debe tener al menos 6 caracteres' });
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: 'Las contraseñas no coinciden' });
      return;
    }
    
    handleFinalSubmit();
  };

  const handleFinalSubmit = async () => {
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Registro completo:', formData);
      // Aquí iría la lógica real de registro
    } catch (error) {
      setErrors({ general: 'Error al crear cuenta' });
    } finally {
      setIsLoading(false);
    }
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setErrors({});
    }
  };

  return (
    <div className="space-y-6">
      <StepIndicator 
        currentStep={currentStep} 
        totalSteps={3} 
        steps={steps} 
      />

      <AnimatePresence mode="wait">
        {/* Paso 1: Token de invitación */}
        {currentStep === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center space-y-2">
              <h3 className="text-lg font-bold text-white font-[var(--font-poppins)]">
                Código de invitación
              </h3>
              <p className="text-white/60 text-sm font-[var(--font-sora)]">
                Ingresa el código que recibiste por email
              </p>
            </div>
            
            <TokenInput 
              length={6}
              onComplete={handleTokenComplete}
              error={errors.token}
              isLoading={isLoading}
            />
            
            <div className="text-center">
              <button className="text-lime-400/80 hover:text-lime-400 text-xs font-medium transition-colors duration-300 font-[var(--font-sora)] underline">
                ¿No recibiste el código?
              </button>
            </div>
          </motion.div>
        )}

        {/* Paso 2: Información personal */}
        {currentStep === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center space-y-2">
              <h3 className="text-lg font-bold text-white font-[var(--font-poppins)]">
                Cuéntanos sobre ti
              </h3>
              <p className="text-white/60 text-sm font-[var(--font-sora)]">
                Información básica para tu cuenta
              </p>
            </div>
            
            <form onSubmit={handlePersonalInfo} className="space-y-4">
              <AuthInput
                type="text"
                icon={User}
                placeholder="Nombre completo"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                error={errors.name}
                required
              />
              
              <AuthInput
                type="email"
                icon={Mail}
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                error={errors.email}
                required
              />
              
              <div className="flex space-x-3 pt-2">
                <AuthButton 
                  type="button" 
                  variant="secondary" 
                  onClick={goBack}
                  className="w-auto px-6"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Atrás
                </AuthButton>
                
                <AuthButton type="submit" className="flex-1">
                  Continuar
                  <ArrowRight className="w-4 h-4 ml-2" />
                </AuthButton>
              </div>
            </form>
          </motion.div>
        )}

        {/* Paso 3: Contraseña */}
        {currentStep === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center space-y-2">
              <h3 className="text-lg font-bold text-white font-[var(--font-poppins)]">
                Protege tu cuenta
              </h3>
              <p className="text-white/60 text-sm font-[var(--font-sora)]">
                Crea una contraseña segura
              </p>
            </div>
            
            <form onSubmit={handlePasswordCreation} className="space-y-4">
              <div className="relative">
                <AuthInput
                  type={showPassword ? 'text' : 'password'}
                  icon={Lock}
                  placeholder="Contraseña"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  error={errors.password}
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
              
              <div className="relative">
                <AuthInput
                  type={showConfirmPassword ? 'text' : 'password'}
                  icon={Lock}
                  placeholder="Confirmar contraseña"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  error={errors.confirmPassword}
                  className="pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3 text-white/40 hover:text-white/70 transition-colors duration-200"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              
              <div className="flex space-x-3 pt-2">
                <AuthButton 
                  type="button" 
                  variant="secondary" 
                  onClick={goBack}
                  className="w-auto px-6"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Atrás
                </AuthButton>
                
                <AuthButton type="submit" isLoading={isLoading} className="flex-1">
                  Crear cuenta
                </AuthButton>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      
      {errors.general && (
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-xs text-center font-[var(--font-sora)]"
        >
          {errors.general}
        </motion.p>
      )}
    </div>
  );
};

export default RegisterStepper;
