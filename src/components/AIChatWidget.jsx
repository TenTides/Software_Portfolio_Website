import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader2, MessageSquare, Send, Sparkles, X } from 'lucide-react';
import { callAI } from '../utils/aiClient.js';
import { experiences, personalInfo, projects, skills } from '../data/profile.js';

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: `Greetings. I am ${personalInfo.name.split(' ')[0]}'s automated assistant. Query me regarding his experience, skills, or projects.`
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
      projects,
      experience: experiences
    });

    const systemPrompt = `You are a professional AI assistant for ${personalInfo.name}'s portfolio. 
    Answer concisely based on this data: ${contextData}.
    Tone: Professional, slightly technical, helpful.
    If unknown, suggest checking the Resume or LinkedIn.`;

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
            <div className="bg-[#020c1b]/80 p-4 border-b border-white/10 flex justify-between items-center backdrop-blur-md">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-teal-300" />
                <span className="text-slate-100 font-bold text-sm">System Assistant</span>
              </div>
              <button type="button" onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                <X size={18} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-4 space-y-4 custom-scrollbar bg-[#0a192f]/50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] p-3 rounded-lg text-sm ${
                      msg.role === 'user'
                        ? 'bg-teal-500/20 text-teal-100 border border-teal-500/30'
                        : 'bg-[#112240] text-slate-300 border border-slate-700'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-[#112240] p-3 rounded-lg border border-slate-700">
                    <Loader2 className="animate-spin text-teal-300" size={16} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 bg-[#020c1b]/80 border-t border-white/10 backdrop-blur-md">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Execute query..."
                  className="flex-grow bg-[#112240] border border-slate-700 rounded px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-teal-300"
                />
                <button
                  type="button"
                  onClick={handleSend}
                  disabled={loading || !input.trim()}
                  className="text-teal-300 hover:bg-teal-300/10 p-2 rounded transition-colors disabled:opacity-50"
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
        className="bg-teal-500/90 text-[#020c1b] p-4 rounded-full shadow-lg shadow-teal-500/20 hover:bg-teal-400 transition-colors backdrop-blur-sm"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};

export default AIChatWidget;
