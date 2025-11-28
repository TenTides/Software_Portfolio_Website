import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/profile.js';

const SocialLinks = ({ className = '' }) => (
  <div className={`flex space-x-6 items-center ${className}`}>
    <a
      href={personalInfo.github}
      target="_blank"
      rel="noreferrer"
      className="text-slate-400 hover:text-teal-300 transition-all hover:-translate-y-1"
    >
      <Github size={24} />
    </a>
    <a
      href={personalInfo.linkedin}
      target="_blank"
      rel="noreferrer"
      className="text-slate-400 hover:text-teal-300 transition-all hover:-translate-y-1"
    >
      <Linkedin size={24} />
    </a>
    <a
      href={`mailto:${personalInfo.email}`}
      className="text-slate-400 hover:text-teal-300 transition-all hover:-translate-y-1"
    >
      <Mail size={24} />
    </a>
  </div>
);

export default SocialLinks;
