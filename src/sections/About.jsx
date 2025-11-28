import { Terminal } from 'lucide-react';
import { skills } from '../data/profile.js';

const About = () => (
  <section id="about" className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
    <div className="section-heading">
      <span className="text-teal-300 font-mono text-xl">01.</span>
      <h2 className="text-3xl font-bold text-slate-100">About Me</h2>
    </div>

    <div className="grid md:grid-cols-2 gap-12">
      <div className="text-slate-400 leading-relaxed space-y-4">
        <p>
          I am a senior at the <span className="text-teal-300">University of Central Florida</span> pursuing a Bachelor of Computer Science with a Minor in Finance.
        </p>
        <p>
          My passion lies in bridging the gap between complex technical systems and real-world financial applications. From building <span className="text-teal-300">AI firewalls</span> to analyzing stock market trends with <span className="text-teal-300">LSTM networks</span>, I enjoy challenges that require both analytical rigor and creative engineering.
        </p>
        <p>Key technologies I work with:</p>

        <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
          {skills.map((skill, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="text-teal-300"><Terminal size={14} /></span>
              {skill.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative group mx-auto md:mx-0">
        <div className="absolute top-4 left-4 w-full h-full border-2 border-teal-300 rounded transition-all duration-300 group-hover:top-2 group-hover:left-2" />
        <div className="relative w-64 h-64 bg-[#112240] rounded overflow-hidden flex items-center justify-center border border-slate-700">
          <Terminal size={64} className="text-teal-500/50" />
        </div>
      </div>
    </div>
  </section>
);

export default About;
