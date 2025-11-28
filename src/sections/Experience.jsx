import { motion } from 'framer-motion';
import { experiences } from '../data/profile.js';

const Experience = () => (
  <section id="experience" className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
    <div className="section-heading">
      <span className="text-teal-300 font-mono text-xl">02.</span>
      <h2 className="text-3xl font-bold text-slate-100">Experience</h2>
    </div>

    <div className="space-y-12">
      {experiences.map((job, idx) => (
        <motion.div
          key={`${job.company}-${job.role}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="flex flex-col md:flex-row gap-4 md:gap-8"
        >
          <div className="md:w-1/4">
            <h3 className="text-xl font-bold text-slate-100">{job.company}</h3>
            <p className="font-mono text-sm text-teal-300 mt-1">{job.duration}</p>
          </div>
          <div className="md:w-3/4">
            <h4 className="text-lg font-semibold text-slate-200 mb-4">{job.role}</h4>
            <ul className="space-y-3">
              {job.description.map((desc) => (
                <li key={desc} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                  <span className="text-teal-300 mt-1.5">▹</span>
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experience;
