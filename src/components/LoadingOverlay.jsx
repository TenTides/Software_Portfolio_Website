import { useEffect, useState } from 'react';
import { Loader2, Sparkles, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const hudLines = [
  'Initializing secure connection',
  'Loading portfolio modules',
  'Calibrating glass UI shaders',
  'Streaming project data',
  'Engaging scroll control'
];

const LoadingOverlay = ({ isLoading, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (!isLoading) return undefined;

    document.body.style.overflow = 'hidden';
    const progressTimer = setInterval(() => {
      setProgress((prev) => Math.min(prev + Math.random() * 18, 100));
    }, 260);

    const lineTimer = setInterval(() => {
      setLineIndex((prev) => (prev + 1) % hudLines.length);
    }, 900);

    return () => {
      clearInterval(progressTimer);
      clearInterval(lineTimer);
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  useEffect(() => {
    if (progress >= 100 && isLoading) {
      const timer = setTimeout(() => {
        onComplete();
        document.body.style.overflow = '';
      }, 500);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [progress, isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#030815]/95 hud-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass-panel p-10 rounded-2xl max-w-lg w-[90%] text-center border border-cyan-400/20 shadow-glow"
          >
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 rounded-full border border-cyan-400/40 flex items-center justify-center glass-highlight">
                <Loader2 className="animate-spin text-cyan-300" size={28} />
              </div>
            </div>
            <p className="text-cyan-200 font-mono text-sm uppercase tracking-[0.3em] mb-2">
              System Boot Sequence
            </p>
            <h1 className="text-2xl font-bold text-slate-100 mb-4">Welcome aboard</h1>
            <p className="text-slate-400 text-sm flex items-center gap-2 justify-center mb-6">
              <Terminal size={16} className="text-cyan-300" />
              {hudLines[lineIndex]}
            </p>
            <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden mb-3 glass-highlight">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500"
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.5 }}
              />
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>status: online</span>
              <span className="text-cyan-300">{Math.floor(progress)}%</span>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-cyan-200 text-sm">
              <Sparkles size={16} /> Immersive view loading
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingOverlay;
