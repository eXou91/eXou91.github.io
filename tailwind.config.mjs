/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy:  '#26387F',
        royal: '#001F98',
        coral: '#E51D41',
        paper: '#FFF5ED',
        cream: '#FFFFFF',
        blush: '#F7C4A8',
        rose:  '#F0858C',
      },
      fontFamily: {
        sans:    ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Neue Haas Display', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
