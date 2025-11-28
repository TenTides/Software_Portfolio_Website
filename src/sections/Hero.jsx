import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks.jsx';
import { personalInfo } from '../data/profile.js';

const Hero = () => (
  <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto pt-20">
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
      <p className="font-mono text-cyan-300 mb-5">Hi, my name is</p>
    </motion.div>

    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
      <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 tracking-tight">
        {personalInfo.name}.
      </h1>
    </motion.div>

    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
      <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8 tracking-tight">
        {personalInfo.tagline}
      </h2>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="max-w-xl text-slate-400 text-lg leading-relaxed mb-12 glass-highlight p-5 rounded-xl border border-white/5"
    >
      {personalInfo.about}
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
    >
      <a
        href="#projects"
        className="px-8 py-4 border border-cyan-300 text-cyan-300 rounded font-mono hover:bg-cyan-300/10 transition-all duration-300 glass-highlight"
      >
        Check out my work
      </a>
      <SocialLinks />
    </motion.div>
  </section>
);

export default Hero;
