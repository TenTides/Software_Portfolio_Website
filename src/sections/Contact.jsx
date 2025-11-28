import { personalInfo } from '../data/profile.js';

const Contact = () => (
  <section id="contact" className="py-32 px-6 max-w-3xl mx-auto text-center">
    <span className="text-teal-300 font-mono text-lg mb-4 block">04. What's Next?</span>
    <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Get In Touch</h2>
    <p className="text-slate-400 text-lg leading-relaxed mb-12">
      I am currently open to new opportunities. Whether you have a question about my research, simulation work, or just want to
      say hi, my inbox is always open!
    </p>
    <a
      href={`mailto:${personalInfo.email}`}
      className="px-8 py-4 border border-teal-300 text-teal-300 rounded font-mono hover:bg-teal-300/10 transition-all duration-300 inline-block"
    >
      Say Hello
    </a>
  </section>
);

export default Contact;
