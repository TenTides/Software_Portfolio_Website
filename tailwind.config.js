/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#050c1f',
        'glass-blue': '#0b1533'
      },
      boxShadow: {
        glass: '0 10px 30px -12px rgba(0,0,0,0.45)',
        glow: '0 0 40px rgba(64,199,255,0.25)'
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [],
};
