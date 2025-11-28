import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks.jsx';
import TypewriterEffect from '../components/TypewriterEffect.jsx';
import { personalInfo } from '../data/profile.js';

const Hero = () => (
  <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto pt-20">
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
      <p className="font-mono text-teal-300 mb-5">Hi, my name is</p>
    </motion.div>

    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
      <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 tracking-tight">
        {personalInfo.name}.
      </h1>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-4 mb-8"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-slate-400 tracking-tight">
        <TypewriterEffect />
      </h2>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="max-w-xl mx-auto text-slate-400 text-lg leading-relaxed mb-12 glass-panel p-6 border-l-4 border-teal-500"
    >
      {personalInfo.about}
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-center"
    >
      <a
        href="#projects"
        className="px-8 py-4 border border-teal-300 text-teal-300 rounded font-mono hover:bg-teal-300/10 transition-all duration-300 backdrop-blur-sm"
      >
        Check out my work
      </a>
      <SocialLinks />
    </motion.div>
  </section>
);

export default Hero;
