import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader2, MessageSquare, Send, Sparkles, X } from 'lucide-react';
import { callAI } from '../utils/aiClient.js';
import { personalInfo, projects, skills } from '../data/profile.js';

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: `Hi! I'm ${personalInfo.name.split(' ')[0]}'s AI assistant. Ask me anything about their skills, experience, or projects!`
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const contextData = JSON.stringify({
      profile: personalInfo,
      skills,
      projects
    });

    const systemPrompt = `You are a helpful and professional AI assistant for the portfolio website of ${personalInfo.name}.
    Your goal is to answer visitor questions about ${personalInfo.name} based strictly on the following data: ${contextData}.
    Keep answers concise (under 3 sentences where possible) and friendly.
    If the answer isn't in the data, politely say you don't know but suggest contacting ${personalInfo.name} directly.`;

    try {
      const response = await callAI(userMsg, systemPrompt);
      setMessages((prev) => [...prev, { role: 'assistant', text: response }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: "Sorry, I'm having trouble connecting right now. Please try again later." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="glass-panel border border-slate-700/60 w-[300px] sm:w-[350px] h-[450px] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="bg-[#050c1f]/70 p-4 border-b border-slate-800 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-cyan-300" />
                <span className="text-slate-100 font-bold text-sm">Ask AI-{personalInfo.name.split(' ')[0]}</span>
              </div>
              <button type="button" onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                <X size={18} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-4 space-y-4 custom-scrollbar bg-[#040a1a]/60">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] p-3 rounded-lg text-sm ${
                      msg.role === 'user'
                        ? 'bg-cyan-500/20 text-cyan-100 border border-cyan-500/30 glass-highlight'
                        : 'bg-[#050c1f]/80 text-slate-300 border border-slate-800 glass-panel'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-[#050c1f]/80 p-3 rounded-lg border border-slate-800 glass-panel">
                    <Loader2 className="animate-spin text-cyan-300" size={16} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 bg-[#050c1f]/70 border-t border-slate-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about my experience..."
                  className="flex-grow bg-[#0b1533] border border-slate-800 rounded px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-300"
                />
                <button
                  type="button"
                  onClick={handleSend}
                  disabled={loading || !input.trim()}
                  className="text-cyan-300 hover:bg-cyan-300/10 p-2 rounded transition-colors disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-cyan-500 text-[#050c1f] p-4 rounded-full shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition-colors"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};

export default AIChatWidget;
