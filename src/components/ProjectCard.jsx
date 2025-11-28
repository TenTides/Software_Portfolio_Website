import { motion } from 'framer-motion';
import { Code2, ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="glass-panel rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 group"
  >
      <div className="flex justify-between items-start mb-6">
        <div className="text-teal-300">
          <Code2 size={40} />
        </div>
        <div className="flex gap-4">
          {project.links.repo && (
            <a href={project.links.repo} className="text-slate-400 hover:text-teal-300 transition-colors">
              <Github size={20} />
            </a>
          )}
          {project.links.demo && (
            <a href={project.links.demo} className="text-slate-400 hover:text-teal-300 transition-colors">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-100 mb-4 group-hover:text-teal-300 transition-colors">
        {project.title}
      </h3>

    <p className="text-slate-300 mb-6 text-sm leading-relaxed">{project.description}</p>

    <ul className="flex flex-wrap gap-3 mt-auto font-mono text-xs text-slate-400">
      {project.tags.map((tag, i) => (
        <li key={i}>{tag}</li>
      ))}
    </ul>
  </motion.div>
);

export default ProjectCard;
