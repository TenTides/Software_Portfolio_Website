import { useEffect, useState } from 'react';
import { personalInfo } from '../data/profile.js';

const navItems = ['About', 'Experience', 'Projects', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-[#050c1f]/90 backdrop-blur-md shadow-glass py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div
          className="text-cyan-300 font-mono text-xl font-bold tracking-wider cursor-pointer"
          onClick={() => scrollTo('hero')}
        >
          &lt;{personalInfo.name.split(' ')[0]} /&gt;
        </div>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, idx) => (
            <button
              key={item}
              type="button"
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-slate-300 hover:text-cyan-300 font-mono text-sm transition-colors duration-200"
            >
              <span className="text-cyan-300 mr-1">0{idx + 1}.</span> {item}
            </button>
          ))}
        </div>
        <a
          href="/resume.pdf"
          target="_blank"
          className="px-4 py-2 border border-cyan-300 text-cyan-300 rounded font-mono text-sm hover:bg-cyan-300/10 transition-all duration-300"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
