import { useState } from 'react';
import type { LoginCredentials } from '../types/auth.types';

export const useAuthForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simular API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Aquí iría la lógica real de autenticación
      console.log('Login attempt:', credentials);
      
      // Simular éxito o error
      if (credentials.email === 'admin@brandidos.com' && credentials.password === 'admin123') {
        // Login exitoso
        return { success: true };
      } else {
        setError('Credenciales incorrectas');
        return { success: false };
      }
    } catch (err) {
      setError('Error de conexión');
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  const clearError = () => setError(null);

  return {
    isLoading,
    error,
    handleLogin,
    clearError
  };
};