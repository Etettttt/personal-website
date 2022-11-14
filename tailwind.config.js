/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '360px',
      md: '720px',
      lg: '900px',
      xl: '1440px',
    },
    extend: {
      colors: {
        darkBG: '#1e2124',
        darkHover: '#3A3E46',
        lightBG: '#e0ddcf',
        lightHover: '#C0C4B1',
      },
      margin: {
        100: '28rem',
      },
      dropShadow: {
        '3xl': '0 10px 8px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [require('tailwindcss-font-inter')],
};
