import { motion } from 'framer-motion';
import { experiences } from '../data/profile.js';

const Experience = () => (
  <section id="experience" className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
    <div className="section-heading">
      <span className="text-cyan-300 font-mono text-xl">02.</span>
      <h2 className="text-3xl font-bold text-slate-100">Experience</h2>
    </div>

    <div className="space-y-6">
      {experiences.map((exp, idx) => (
        <motion.div
          key={exp.company}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
          className="glass-panel p-6 rounded-2xl border border-white/10"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
            <h3 className="text-xl font-semibold text-slate-100">
              {exp.role} <span className="text-cyan-300">@ {exp.company}</span>
            </h3>
            <p className="text-sm text-slate-400 font-mono">{exp.duration}</p>
          </div>
          <p className="text-slate-300 mb-4">{exp.summary}</p>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-200">
            {exp.highlights.map((line) => (
              <li key={line} className="flex gap-2 items-start">
                <span className="text-cyan-300">▹</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experience;
