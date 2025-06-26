import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { StreetButtonSpinner } from '../../../components/ui/StreetSpinner';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login attempt:', { email, password });
    }, 2000);
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 relative"
      style={{ backgroundImage: 'url(/hero-bg.webp)' }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/70 to-zinc-950/90"></div>

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ x: -4 }}
        className="absolute top-8 left-8 flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-300 group z-20"
      >
        <ArrowLeft className="w-5 h-5 group-hover:text-lime-400 transition-colors duration-300" />
        <span className="font-[var(--font-sora)] font-medium">Volver</span>
      </motion.button>

      {/* Login Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-black text-white font-[var(--font-poppins)] mb-2"
            >
              BRANDIDOS
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/60 font-[var(--font-sora)] text-sm"
            >
              Acceso para la banda
            </motion.p>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Email */}
            <div>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-4 h-4" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-lime-400/50 transition-all duration-300 font-[var(--font-sora)] text-sm"
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-4 h-4" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-xl pl-10 pr-10 py-3 text-white placeholder-white/40 focus:outline-none focus:border-lime-400/50 transition-all duration-300 font-[var(--font-sora)] text-sm"
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-lime-400 hover:bg-lime-500 disabled:bg-lime-400/50 text-black font-bold py-3 rounded-xl transition-all duration-300 font-[var(--font-poppins)] disabled:cursor-not-allowed mt-6"
            >
              {isLoading ? (
                <StreetButtonSpinner message="Entrando..." color="black" />
                ) : (
                'Entrar'
              )}
            </motion.button>
          </motion.form>

          {/* Forgot Password */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-4 text-center"
          >
            <button className="text-white/50 hover:text-lime-400 text-xs font-medium transition-colors duration-300 font-[var(--font-sora)]">
              ¿Olvidaste tu password?
            </button>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center my-6"
          >
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="px-3 text-white/30 text-xs font-mono">* * *</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </motion.div>

          {/* No Access */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center"
          >
            <p className="text-white/50 text-xs font-[var(--font-sora)] mb-3">
              ¿No tienes acceso? Solo clientes pueden entrar.
            </p>
            
            <button className="text-lime-400/80 hover:text-lime-400 text-xs font-medium transition-colors duration-300 font-[var(--font-sora)] underline">
              Contactar soporte
            </button>
          </motion.div>
        </div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center mt-6 text-white/30 text-xs font-[var(--font-sora)]"
        >
          Acceso por invitación • Brandidos 2025
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoginPage;