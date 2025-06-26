import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: LucideIcon;
  error?: string;
}

const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ icon: Icon, error, className, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <div className="relative">
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-4 h-4" />
          <input
            ref={ref}
            className={`w-full bg-white/5 border ${
              error ? 'border-red-400/50' : 'border-white/20'
            } rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-lime-400/50 transition-all duration-300 font-[var(--font-sora)] text-sm ${className}`}
            {...props}
          />
        </div>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-xs font-[var(--font-sora)] ml-1"
          >
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);

export default AuthInput;