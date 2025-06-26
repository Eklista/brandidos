// src/modules/auth/components/ui/StepIndicator.tsx
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  steps: string[];
}

const StepIndicator = ({ currentStep, totalSteps, steps }: StepIndicatorProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          
          return (
            <div key={index} className="flex items-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  isCompleted 
                    ? 'bg-lime-400 text-zinc-900' 
                    : isCurrent 
                    ? 'bg-white/20 border-2 border-lime-400 text-white' 
                    : 'bg-white/10 border border-white/30 text-white/50'
                }`}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4" />
                ) : (
                  stepNumber
                )}
              </motion.div>
              
              {index < totalSteps - 1 && (
                <div className={`w-16 h-0.5 mx-2 transition-colors duration-300 ${
                  isCompleted ? 'bg-lime-400' : 'bg-white/20'
                }`} />
              )}
            </div>
          );
        })}
      </div>
      
      <motion.p
        key={currentStep}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-white/70 text-sm text-center font-[var(--font-sora)]"
      >
        {steps[currentStep - 1]}
      </motion.p>
    </div>
  );
};

export default StepIndicator;