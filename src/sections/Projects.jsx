import { personalInfo, projects } from '../data/profile.js';
import ProjectCard from '../components/ProjectCard.jsx';
import AIProjectArchitect from '../components/AIProjectArchitect.jsx';

const Projects = () => (
  <section id="projects" className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
    <div className="section-heading">
      <span className="text-teal-300 font-mono text-xl">03.</span>
      <h2 className="text-3xl font-bold text-slate-100">Things I've Built</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>

    <AIProjectArchitect />

    <div className="mt-12 text-center">
      <a
        href={personalInfo.github}
        className="inline-block px-8 py-4 border border-teal-300 text-teal-300 rounded font-mono hover:bg-teal-300/10 transition-all duration-300"
      >
        View Github
      </a>
    </div>
  </section>
);

export default Projects;
