/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '360px',
      md: '720px',
      lg: '900px',
      xl: '1440px',
    },
    extend: {
      colors: {
        darkGray: '#393D40',
      },
      margin: {
        100: '28rem',
      },
      dropShadow: {
        '3xl': '0 10px 8px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
