// src/modules/auth/components/ui/TokenInput.tsx
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface TokenInputProps {
  length?: number;
  onComplete: (token: string) => void;
  error?: string;
  isLoading?: boolean;
}

const TokenInput = ({ length = 6, onComplete, error, isLoading }: TokenInputProps) => {
  const [values, setValues] = useState<string[]>(new Array(length).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (value.length > 1) return;
    
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    // Mover al siguiente input
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Verificar si está completo
    if (newValues.every(v => v.length === 1)) {
      onComplete(newValues.join(''));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Backspace' && !values[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').slice(0, length);
    const newValues = [...values];
    
    for (let i = 0; i < pasteData.length && i < length; i++) {
      newValues[i] = pasteData[i];
    }
    
    setValues(newValues);
    
    if (newValues.every(v => v.length === 1)) {
      onComplete(newValues.join(''));
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-center space-x-3">
        {values.map((value, index) => (
          <motion.input
            key={index}
            ref={(el) => { inputRefs.current[index] = el; }}
            type="text"
            maxLength={1}
            value={value}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            disabled={isLoading}
            className={`w-12 h-14 text-center text-lg font-bold bg-white/5 border rounded-xl text-white focus:outline-none transition-all duration-300 ${
              error 
                ? 'border-red-400/50 focus:border-red-400' 
                : 'border-white/20 focus:border-lime-400/50'
            } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          />
        ))}
      </div>
      
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-xs text-center font-[var(--font-sora)]"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default TokenInput;