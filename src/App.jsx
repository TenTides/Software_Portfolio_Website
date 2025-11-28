import { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Code2, Github, Linkedin } from 'lucide-react';

import StarryBackground from './components/StarryBackground.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact.jsx';
import AIChatWidget from './components/AIChatWidget.jsx';
import Footer from './components/Footer.jsx';
import LoadingOverlay from './components/LoadingOverlay.jsx';
import { personalInfo } from './data/profile.js';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#050c1f] selection:bg-cyan-300 selection:text-[#050c1f] text-slate-300">
      <StarryBackground />
      <LoadingOverlay isLoading={isLoading} onComplete={() => setIsLoading(false)} />

      <div className={`relative z-10 ${isLoading ? 'pointer-events-none select-none' : ''}`}>
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 transform origin-left z-[60]"
          style={{ scaleX }}
        />

        <Navbar />

        <div className="fixed bottom-0 left-10 hidden lg:flex flex-col items-center gap-6 text-slate-400">
          <div className="flex flex-col gap-6 glass-panel p-3 rounded-full border border-white/10">
            <a href={personalInfo.github} className="hover:text-cyan-300 hover:-translate-y-1 transition-all"><Github size={20} /></a>
            <a href={personalInfo.linkedin} className="hover:text-cyan-300 hover:-translate-y-1 transition-all"><Linkedin size={20} /></a>
            <a href="#projects" className="hover:text-cyan-300 hover:-translate-y-1 transition-all"><Code2 size={20} /></a>
          </div>
          <div className="w-[1px] h-24 bg-slate-600" />
        </div>

        <div className="fixed bottom-0 right-10 hidden lg:flex flex-col items-center gap-6 text-slate-400">
          <a
            href={`mailto:${personalInfo.email}`}
            className="font-mono text-sm tracking-widest hover:text-cyan-300 hover:-translate-y-1 transition-all rotate-90 mb-24"
          >
            {personalInfo.email}
          </a>
          <div className="w-[1px] h-24 bg-slate-600" />
        </div>

        <main className="relative">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>

        <AIChatWidget />
        <Footer />
      </div>
    </div>
  );
}
