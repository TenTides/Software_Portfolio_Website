import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Lightbulb, Sparkles } from 'lucide-react';
import { callAI } from '../utils/aiClient.js';

const AIProjectArchitect = () => {
  const [techStack, setTechStack] = useState('');
  const [generatedIdea, setGeneratedIdea] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!techStack.trim()) return;
    setLoading(true);
    setError('');
    setGeneratedIdea(null);

    const prompt = `Generate a unique, impressive coding project idea that uses the following technologies: ${techStack}.\n    Focus on creating a project that would look good on a senior developer portfolio.`;

    const schema = {
      type: 'OBJECT',
      properties: {
        title: { type: 'STRING' },
        tagline: { type: 'STRING' },
        description: { type: 'STRING' },
        difficulty: { type: 'STRING', enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'] },
        features: { type: 'ARRAY', items: { type: 'STRING' } }
      }
    };

    try {
      const result = await callAI(
        prompt,
        'You are a creative Tech Lead helping a developer brainstorm portfolio projects.',
        schema
      );
      setGeneratedIdea(JSON.parse(result));
    } catch (e) {
      setError('Failed to generate idea. Please check your API key and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-panel rounded-2xl p-6 md:p-8 border border-white/10 mt-12 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Sparkles size={100} className="text-teal-300" />
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-slate-100 flex items-center gap-2 mb-4">
          <Sparkles className="text-teal-300" size={24} />
          AI Project Architect
        </h3>
        <p className="text-slate-400 mb-6">
          Enter a tech stack and let AI brainstorm your next masterpiece.
        </p>

        <div className="flex gap-4 flex-col sm:flex-row mb-8">
          <input
            type="text"
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
            placeholder="e.g. Python, Azure, React"
            className="flex-grow bg-[#020c1b]/50 border border-slate-700 rounded-md px-4 py-3 text-slate-300 focus:outline-none focus:border-teal-300 transition-colors"
          />
          <button
            type="button"
            onClick={handleGenerate}
            disabled={loading || !techStack.trim()}
            className="bg-teal-500/10 text-teal-300 border border-teal-500/50 px-6 py-3 rounded-md font-mono hover:bg-teal-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[140px]"
          >
            {loading ? <Loader2 className="animate-spin" size={18} /> : <><Lightbulb size={18} /> Generate</>}
          </button>
        </div>

        {error && <p className="text-red-400 font-mono text-sm">{error}</p>}

        <AnimatePresence>
          {generatedIdea && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-[#020c1b]/80 rounded-md p-6 border-l-4 border-teal-300"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-bold text-slate-100">{generatedIdea.title}</h4>
                <span className="text-xs font-mono px-2 py-1 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20">
                  {generatedIdea.difficulty}
                </span>
              </div>
              <p className="text-teal-300 font-mono text-sm mb-4 italic">{generatedIdea.tagline}</p>
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">{generatedIdea.description}</p>

              <div className="mb-2 font-mono text-xs text-slate-500 uppercase tracking-widest">Key Features</div>
              <ul className="grid sm:grid-cols-2 gap-2">
                {generatedIdea.features.map((feat, i) => (
                  <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                    <span className="text-teal-300 mt-1">▹</span> {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AIProjectArchitect;
