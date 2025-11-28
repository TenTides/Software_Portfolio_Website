import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingOverlay = ({ isLoading, onComplete }) => {
  const [text, setText] = useState('');
  const fullText = 'INITIALIZING SYSTEM... ACCESSING SECURE VAULT... WELCOME VISITOR.';

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) return undefined;
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i += 1;
      if (i > fullText.length) {
        clearInterval(interval);
        setTimeout(() => onComplete(), 800);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [fullText, isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] bg-[#020c1b] flex flex-col items-center justify-center font-mono text-teal-300"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <div className="relative w-64 h-64 mb-8 flex items-center justify-center">
            <motion.div
              className="absolute inset-0 border-4 border-teal-500/20 border-t-teal-500 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-4 border-2 border-teal-300/10 border-b-teal-300 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            <div className="text-4xl font-bold tracking-tighter">TC</div>
          </div>

          <div className="h-6 text-sm md:text-base tracking-widest text-center px-4">
            {text}
            <span className="animate-pulse">_</span>
          </div>

          <motion.div className="mt-8 w-48 h-1 bg-teal-900 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-teal-400"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 3.5, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingOverlay;
