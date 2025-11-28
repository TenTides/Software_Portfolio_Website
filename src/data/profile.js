import { Cpu, Database, Globe, Layout, Server, Code2 } from 'lucide-react';

export const personalInfo = {
  name: 'Tyler Crawford',
  title: 'Full Stack Engineer',
  tagline: 'Building scalable solutions with pixel-perfect aesthetics.',
  about:
    "I am a passionate developer focused on creating interactive experiences and robust backend architectures. With a background in containerization and cloud infrastructure, I ensure my applications are not just beautiful, but reliable.",
  email: 'hello@example.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com'
};

export const skills = [
  { name: 'React / Next.js', icon: <Layout size={20} /> },
  { name: 'TypeScript', icon: <Code2 size={20} /> },
  { name: 'Node.js', icon: <Server size={20} /> },
  { name: 'Docker / K8s', icon: <Cpu size={20} /> },
  { name: 'PostgreSQL', icon: <Database size={20} /> },
  { name: 'AWS / Cloud', icon: <Globe size={20} /> }
];

export const experiences = [
  {
    company: 'Blue Horizon Labs',
    role: 'Senior Full Stack Engineer',
    duration: '2023 — Present',
    summary:
      'Leading feature development across a multi-tenant SaaS platform, improving performance and user delight with modern UI systems.',
    highlights: [
      'Delivered a design system refresh with glassmorphism patterns and accessibility baked in',
      'Cut cloud costs by 18% through container optimizations and smarter caching',
      'Mentored 4 engineers on TypeScript best practices and observability'
    ]
  },
  {
    company: 'Northwind Commerce',
    role: 'Full Stack Engineer',
    duration: '2020 — 2023',
    summary:
      'Built and maintained headless commerce experiences with Next.js and serverless APIs, focusing on Core Web Vitals.',
    highlights: [
      'Shipped personalization features that lifted checkout conversions by 9%',
      'Implemented CI/CD with preview environments for every pull request',
      'Owned integrations with Stripe, Sanity, and internal fulfillment systems'
    ]
  },
  {
    company: 'Freelance',
    role: 'Front-End Engineer',
    duration: '2017 — 2020',
    summary:
      'Partnered with founders and small teams to prototype web apps, dashboards, and marketing sites.',
    highlights: [
      'Delivered responsive interfaces with React and Tailwind',
      'Set up analytics and A/B testing to guide product decisions',
      'Maintained SEO health and accessibility across launches'
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: 'Nebula Dashboard',
    description:
      'A real-time analytics dashboard for cloud infrastructure monitoring. Features dark mode, data visualization with D3.js, and WebSocket integration.',
    tags: ['React', 'TypeScript', 'D3.js', 'WebSockets'],
    links: { demo: '#', repo: '#' }
  },
  {
    id: 2,
    title: 'CryptoVault',
    description:
      'Secure cryptocurrency wallet implementation with biometric authentication and blockchain transaction history visualization.',
    tags: ['React Native', 'Node.js', 'Blockchain', 'Security'],
    links: { demo: '#', repo: '#' }
  },
  {
    id: 3,
    title: 'TaskFlow API',
    description:
      'A high-performance RESTful API for project management tools. Built with scalability in mind using microservices architecture.',
    tags: ['Go', 'Docker', 'gRPC', 'Redis'],
    links: { demo: '#', repo: '#' }
  },
  {
    id: 4,
    title: 'E-Commerce Headless',
    description: 'A headless CMS integration for high-end fashion retail. Optimized for SEO and Core Web Vitals.',
    tags: ['Next.js', 'Sanity.io', 'Stripe', 'Tailwind'],
    links: { demo: '#', repo: '#' }
  },
  {
    id: 5,
    title: 'AI Chat Interface',
    description:
      "Conversational UI wrapping OpenAI's GPT-4 API. Includes syntax highlighting for code blocks and conversation history persistence.",
    tags: ['OpenAI API', 'React', 'Firebase', 'Tailwind'],
    links: { demo: '#', repo: '#' }
  },
  {
    id: 6,
    title: 'DevOps Pipeline Tool',
    description:
      'A CLI tool to automate deployment workflows to Kubernetes clusters. Written in Rust for maximum performance.',
    tags: ['Rust', 'Kubernetes', 'CLI', 'CI/CD'],
    links: { demo: '#', repo: '#' }
  }
];
