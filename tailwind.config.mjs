/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy:  '#293682',
        coral: '#E51D41',
        paper: '#FFF5ED',
        cream: '#FFFFFF',
        blush: '#F7C4A8',
        rose:  '#FF878C',
        grey:  '#5A5F75',
        slate: '#6B6F80',
        mute:  '#9296A8',
      },
      fontFamily: {
        sans:    ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Neue Haas Display', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
