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
        // Maquettes : #9296A8, mais contraste 2,94 sur blanc (< 4,5 requis en WCAG AA).
        // Assombri au strict nécessaire pour atteindre 4,70 en gardant la teinte.
        mute:  '#6E7387',
      },
      fontFamily: {
        sans:    ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Neue Haas Display', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
