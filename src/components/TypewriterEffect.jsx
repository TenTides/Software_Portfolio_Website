import { useEffect, useState } from 'react';

const TypewriterEffect = () => {
  const phrases = [
    'Technical expertise meets financial insight.',
    'Full Stack Engineer.',
    'Simulation & Visualization Expert.',
    'Financial Analyst.',
    'AI & Computer Vision Researcher.'
  ];

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(
        isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [phrases, text, isDeleting, loopNum, typingSpeed]);

  return (
    <span className="text-slate-400 border-r-2 border-teal-300 pr-1 animate-pulse">{text}</span>
  );
};

export default TypewriterEffect;
