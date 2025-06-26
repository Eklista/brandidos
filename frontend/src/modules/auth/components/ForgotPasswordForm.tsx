// src/modules/auth/components/ForgotPasswordForm.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft } from 'lucide-react';
import AuthInput from './ui/AuthInput';
import AuthButton from './ui/AuthButton';
import TokenInput from './ui/TokenInput';
import StepIndicator from './ui/StepIndicator';

const ForgotPasswordForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const steps = [
    'Solicitar código',
    'Verificar código',
    'Listo para resetear'
  ];

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simular envío de email
      setSuccess('Código enviado a tu email');
      setCurrentStep(2);
    } catch (err) {
      setError('Error al enviar el código');
    } finally {
      setIsLoading(false);
    }
  };

  const handleTokenComplete = async (token: string) => {
    setIsLoading(true);
    setError('');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simular verificación
      if (token === '123456') {
        setCurrentStep(3);
        setSuccess('Código verificado. Revisa tu email para el enlace de reseteo.');
      } else {
        setError('Código incorrecto');
      }
    } catch (err) {
      setError('Error al verificar código');
    } finally {
      setIsLoading(false);
    }
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setError('');
      setSuccess('');
    }
  };

  return (
    <div className="space-y-6">
      <StepIndicator 
        currentStep={currentStep} 
        totalSteps={3} 
        steps={steps} 
      />

      {/* Paso 1: Email */}
      {currentStep === 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="text-center space-y-2">
            <h3 className="text-lg font-bold text-white font-[var(--font-poppins)]">
              Recuperar contraseña
            </h3>
            <p className="text-white/60 text-sm font-[var(--font-sora)]">
              Te enviaremos un código para resetear tu contraseña
            </p>
          </div>
          
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <AuthInput
              type="email"
              icon={Mail}
              placeholder="Tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error}
              required
            />
            
            <AuthButton type="submit" isLoading={isLoading}>
              Enviar código
            </AuthButton>
          </form>
        </motion.div>
      )}

      {/* Paso 2: Verificar código */}
      {currentStep === 2 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="text-center space-y-2">
            <h3 className="text-lg font-bold text-white font-[var(--font-poppins)]">
              Código de verificación
            </h3>
            <p className="text-white/60 text-sm font-[var(--font-sora)]">
              Revisa tu email e ingresa el código de 6 dígitos
            </p>
          </div>
          
          <TokenInput 
            length={6}
            onComplete={handleTokenComplete}
            error={error}
            isLoading={isLoading}
          />
          
          <div className="flex space-x-3">
            <AuthButton 
              type="button" 
              variant="secondary" 
              onClick={goBack}
              className="w-auto px-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Atrás
            </AuthButton>
            
            <button className="flex-1 text-lime-400/80 hover:text-lime-400 text-sm font-medium transition-colors duration-300 font-[var(--font-sora)] underline">
              Reenviar código
            </button>
          </div>
        </motion.div>
      )}

      {/* Paso 3: Confirmación */}
      {currentStep === 3 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 text-center"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', bounce: 0.4 }}
              className="w-16 h-16 bg-lime-400/20 rounded-full flex items-center justify-center mx-auto"
            >
              <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center">
                <motion.div
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  ✓
                </motion.div>
              </div>
            </motion.div>
            
            <h3 className="text-lg font-bold text-white font-[var(--font-poppins)]">
              ¡Listo!
            </h3>
            
            <p className="text-white/70 text-sm font-[var(--font-sora)] leading-relaxed">
              Te hemos enviado un enlace a <span className="text-lime-400">{email}</span> para que puedas crear tu nueva contraseña.
            </p>
          </div>
          
          <AuthButton 
            type="button" 
            onClick={() => window.location.href = '/login'}
          >
            Volver al login
          </AuthButton>
        </motion.div>
      )}

      {success && (
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lime-400 text-xs text-center font-[var(--font-sora)]"
        >
          {success}
        </motion.p>
      )}
    </div>
  );
};

export default ForgotPasswordForm;