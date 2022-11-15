/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      sm: '320px',
      md: '720px',
      lg: '900px',
      xl: '1440px',
    },
    extend: {
      colors: {
        darkBG: '#1e2124',
        darkHover: '#3A3E46',
        lightBG: '#e0ddcf',
        lightHover: '#fdf6e3',
      },
      margin: {
        100: '28rem',
      },
      dropShadow: {
        '3xl': '0 10px 8px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [require('tailwindcss-font-inter')],
};
