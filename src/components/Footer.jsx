import SocialLinks from './SocialLinks.jsx';
import { personalInfo } from '../data/profile.js';

const Footer = () => (
  <footer className="py-6 text-center text-slate-500 font-mono text-xs bg-[#020c1b]/90 border-t border-white/5 mt-12">
    <div className="flex justify-center gap-6 mb-4 md:hidden">
      <SocialLinks />
    </div>
    <a
      href={personalInfo.github}
      target="_blank"
      rel="noreferrer"
      className="hover:text-teal-300 transition-colors"
    >
      <div>Designed &amp; Built by {personalInfo.name}</div>
    </a>
  </footer>
);

export default Footer;
