import { Activity, Cpu, Database, Layout, Server, Terminal } from 'lucide-react';

export const personalInfo = {
  name: 'Tyler L. Crawford',
  title: 'Computer Science & Finance',
  tagline: '',
  about:
    'My current goal is to join a purpose-driven initiative where I can grow both personally and professionally while collaborating alongside like-minded individuals. My expertise lies in the technical and financial, enabling me to deliver effective solutions that align with client goals and team objectives.',
  email: 'tyler001crawford@gmail.com',
  github: 'https://github.com/TenTides',
  linkedin: 'https://linkedin.com/in/tyler-crawford-518a37285/'
};

export const skills = [
  { name: 'Python / C / C#', icon: <Terminal size={18} /> },
  { name: 'PyTorch / TensorFlow', icon: <Cpu size={18} /> },
  { name: 'React / JS / HTML', icon: <Layout size={18} /> },
  { name: 'SQL / MongoDB', icon: <Database size={18} /> },
  { name: 'Azure / Docker', icon: <Server size={18} /> },
  { name: 'Finance / Analytics', icon: <Activity size={18} /> }
];

export const experiences = [
  {
    company: 'Institute Of Simulation And Training',
    role: 'Junior Simulation & Visualization Engineer',
    duration: 'Sept 2024 – Present',
    description: [
      'Built a from-scratch PyQt5-based vector renderer (SVG/GIF) with keyframe timelines and real-time playback.',
      'Integrated with AI/RL simulations to dynamically control animations from live data streams.',
      'Designed and deployed an API connector linking MySQL/Azure databases to NVIDIA Omniverse twins.'
    ]
  },
  {
    company: 'Institute Of Simulation And Training',
    role: 'Undergraduate VR/XR Developer',
    duration: 'May 2024 – Sept 2024',
    description: [
      'Enhanced an existing PyTorch CNN for facial recognition, improving validation performance by 33%.',
      'Developed a pipeline to leverage lung CT scans and MonAI-based cancer detection models in 3D VR.',
      'Created mental health LLM assistants in Unity XR responding to multimodal user behaviors.'
    ]
  },
  {
    company: 'nTEG LLC',
    role: 'Data Analyst Intern',
    duration: 'Dec 2023 – Mar 2024',
    description: [
      'Conducted market research and analyzed seasonal trends for short-term rental services.',
      'Automated reporting processes in MS Excel, streamlining presentation of research findings.',
      'Presented project milestones and strategic updates to senior leadership.'
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: 'Buyer Beware: AI Firewall',
    description:
      'An AI-powered firewall that detects and blocks human-trafficking-related language on a live network. Uses a refactored HateXplain transformer model and GPT/Grok-based RAG classification pipeline. Containerized with Docker and deployed on Azure.',
    tags: ['PyTorch', 'Docker', 'Azure', 'FastAPI', 'React'],
    links: { repo: 'https://github.com/TenTides' }
  },
  {
    id: 2,
    title: 'Stock Market Predictions (LSTM)',
    description:
      'Developed a Long Short-Term Memory (LSTM) network using TensorFlow to predict stock market price movements using 20 years of historical data from Yahoo Finance. Implemented real-time visualizations using Matplotlib.',
    tags: ['Python', 'TensorFlow', 'NumPy', 'Pandas'],
    links: { repo: 'https://github.com/TenTides' }
  },
  {
    id: 3,
    title: 'Unity XR Mental Health Assistant',
    description:
      'A virtual reality assistant built in Unity that responds to speech, movement, and gaze to provide real-time feedback, powered by Large Language Models.',
    tags: ['Unity', 'C#', 'LLM', 'XR'],
    links: { repo: 'https://github.com/TenTides' }
  }
];
