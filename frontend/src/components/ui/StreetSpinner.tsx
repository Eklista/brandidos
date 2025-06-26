import { motion } from 'framer-motion';

interface StreetSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'white' | 'black' | 'lime' | 'blue';
  message?: string;
}

const StreetSpinner = ({ 
  size = 'md', 
  color = 'white',
  message = 'Cargando...'
}: StreetSpinnerProps) => {
  const symbols = ['$', '#', '@', '*', '!'];
  
  const sizeConfig = {
    sm: {
      symbol: 'text-sm',
      gap: 'space-x-1',
      message: 'text-xs'
    },
    md: {
      symbol: 'text-lg',
      gap: 'space-x-2',
      message: 'text-sm'
    },
    lg: {
      symbol: 'text-2xl',
      gap: 'space-x-3',
      message: 'text-base'
    }
  };

  const colorConfig = {
    white: 'text-white',
    black: 'text-black',
    lime: 'text-lime-400',
    blue: 'text-blue-500'
  };

  const config = sizeConfig[size];
  const textColor = colorConfig[color];

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className={`flex items-center justify-center ${config.gap}`}>
        {symbols.map((symbol, index) => (
          <motion.span
            key={`${symbol}-${index}`}
            initial={{ opacity: 0.5, scale: 0.9 }}
            animate={{ 
              opacity: [0.5, 1, 0.5],
              scale: [0.9, 1.05, 0.9],
              y: [0, -4, 0]
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              delay: index * 0.15,
              ease: "easeInOut"
            }}
            className={`${config.symbol} ${textColor} font-semibold font-mono select-none tracking-wide`}
          >
            {symbol}
          </motion.span>
        ))}
      </div>

      {message && (
        <motion.p
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ 
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`${config.message} ${textColor.replace('400', '300').replace('500', '400')} font-normal tracking-wide opacity-80`}
        >
          {message}
        </motion.p>
      )}
    </div>
  );
};

const StreetLoadingScreen = ({ 
  background = 'dark',
  accent = 'lime'
}: { 
  background?: 'dark' | 'light' | 'gradient' | 'hero';
  accent?: 'lime' | 'blue' | 'purple' | 'orange';
}) => {
  const symbols = ['$', '#', '@', '*', '!'];
  
  const backgroundStyles = {
    dark: 'bg-zinc-950',
    light: 'bg-zinc-50',
    gradient: 'bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900',
    hero: 'bg-cover bg-center bg-no-repeat'
  };

  const accentColors = {
    lime: 'text-lime-400',
    blue: 'text-blue-400',
    purple: 'text-purple-400',
    orange: 'text-orange-400'
  };

  const textColor = background === 'light' ? 'text-zinc-800' : 'text-white';

  return (
    <div 
      className={`min-h-screen flex items-center justify-center ${backgroundStyles[background]}`}
      style={background === 'hero' ? { backgroundImage: 'url(/hero-bg.webp)' } : {}}
    >
      {background === 'hero' && (
        <div className="absolute inset-0 bg-zinc-950/80"></div>
      )}
      
      <div className="relative z-10 flex items-center justify-center">
        <div className="flex items-center justify-center space-x-3 md:space-x-4">
          {symbols.map((symbol, index) => (
            <motion.div
              key={`clean-${symbol}-${index}`}
              initial={{ opacity: 0.4, scale: 0.9 }}
              animate={{ 
                opacity: [0.4, 1, 0.4],
                scale: [0.9, 1.05, 0.9],
                y: [0, -6, 0]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div
                className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-none select-none ${textColor} opacity-20`}
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  letterSpacing: '0.1em'
                }}
              >
                {symbol}
              </div>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: [0.8, 1, 0.8],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.15,
                  ease: "easeInOut"
                }}
                className={`absolute inset-0 text-4xl md:text-5xl lg:text-6xl font-bold leading-none select-none ${accentColors[accent]}`}
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  letterSpacing: '0.1em'
                }}
              >
                {symbol}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StreetButtonSpinner = ({ 
  message = 'Procesando...',
  color = 'black',
  size = 'sm'
}: {
  message?: string;
  color?: 'white' | 'black' | 'lime' | 'blue';
  size?: 'sm' | 'md';
}) => {
  const symbols = ['*', '#', '*'];
  
  const sizeConfig = {
    sm: { symbol: 'text-xs', text: 'text-xs' },
    md: { symbol: 'text-sm', text: 'text-sm' }
  };

  const colorConfig = {
    white: 'text-white',
    black: 'text-black', 
    lime: 'text-lime-400',
    blue: 'text-blue-500'
  };

  const config = sizeConfig[size];
  const textColor = colorConfig[color];

  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="flex items-center space-x-0.5">
        {symbols.map((symbol, index) => (
          <motion.span
            key={`btn-${symbol}-${index}`}
            initial={{ opacity: 0.4 }}
            animate={{ 
              opacity: [0.4, 1, 0.4],
              scale: [0.9, 1.1, 0.9]
            }}
            transition={{
              duration: 0.9,
              repeat: Infinity,
              delay: index * 0.15,
              ease: "easeInOut"
            }}
            className={`${config.symbol} ${textColor} font-black font-mono`}
          >
            {symbol}
          </motion.span>
        ))}
      </div>
      <span className={`${config.text} font-medium`}>{message}</span>
    </div>
  );
};

export default StreetSpinner;
export { StreetLoadingScreen, StreetButtonSpinner };