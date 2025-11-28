import { personalInfo } from '../data/profile.js';

const Contact = () => (
  <section id="contact" className="py-32 px-6 max-w-3xl mx-auto text-center">
    <span className="text-cyan-300 font-mono text-lg mb-4 block">04. What's Next?</span>
    <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Get In Touch</h2>
    <p className="text-slate-300 text-lg leading-relaxed mb-12 glass-highlight p-6 rounded-2xl border border-white/5">
      I am currently looking for new opportunities. Whether you have a question about my stack, a project proposal, or just want
      to say hi, my inbox is always open!
    </p>
    <a
      href={`mailto:${personalInfo.email}`}
      className="px-8 py-4 border border-cyan-300 text-cyan-300 rounded font-mono hover:bg-cyan-300/10 transition-all duration-300 inline-block glass-highlight"
    >
      Say Hello
    </a>
  </section>
);

export default Contact;
