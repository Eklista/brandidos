import { motion } from 'framer-motion';
import { StreetButtonSpinner } from '../../../../components/ui/StreetSpinner';

interface AuthButtonProps extends React.ComponentProps<typeof motion.button> {
  isLoading?: boolean;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const AuthButton = ({ 
  isLoading, 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}: AuthButtonProps) => {
  const baseClasses = "w-full font-bold py-3 rounded-xl transition-all duration-300 font-[var(--font-poppins)] disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "bg-lime-400 hover:bg-lime-500 disabled:bg-lime-400/50 text-black",
    secondary: "border border-white/30 hover:bg-white/10 text-white"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={isLoading}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {isLoading ? (
        <StreetButtonSpinner 
          message="Procesando..." 
          color={variant === 'primary' ? 'black' : 'white'} 
        />
      ) : (
        children
      )}
    </motion.button>
  );
};

export default AuthButton;