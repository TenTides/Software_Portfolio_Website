import { Terminal } from 'lucide-react';
import { skills } from '../data/profile.js';

const About = () => (
  <section id="about" className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
    <div className="section-heading">
      <span className="text-cyan-300 font-mono text-xl">01.</span>
      <h2 className="text-3xl font-bold text-slate-100">About Me</h2>
    </div>

    <div className="grid md:grid-cols-2 gap-12">
      <div className="text-slate-300 leading-relaxed space-y-4 glass-panel p-6 rounded-2xl border border-white/10">
        <p>
          Hello! I'm a software engineer who loves building things that live on the internet. My interest in web development
          started back in 2015 when I decided to try editing custom Tumblr themes — turns out hacking HTML & CSS together was
          pretty fun!
        </p>
        <p>
          Fast-forward to today, and I've had the privilege of working at an <span className="text-cyan-300">advertising
          agency</span>, a <span className="text-cyan-300">start-up</span>, and a <span className="text-cyan-300">huge
          corporation</span>.
        </p>
        <p>Here are a few technologies I've been working with recently:</p>

        <ul className="grid grid-cols-2 gap-3 mt-4 font-mono text-sm">
          {skills.map((skill, idx) => (
            <li key={idx} className="flex items-center gap-2 text-slate-200">
              <span className="text-cyan-300"><Terminal size={14} /></span>
              {skill.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative group mx-auto md:mx-0">
        <div className="absolute top-5 left-5 w-full h-full rounded-2xl fade-border opacity-70 blur-xl" aria-hidden />
        <div className="relative w-64 h-64 bg-gradient-to-br from-cyan-500/60 to-indigo-500/40 rounded-2xl overflow-hidden mix-blend-screen border border-white/10 shadow-glow">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_45%)]" />
          <div className="w-full h-full flex items-center justify-center text-slate-900 font-bold backdrop-blur-sm">
            [Profile IMG]
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
