/** @type {import('tailwindcss').Config} */
module.exports = {
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
        lightPurple: '#D2C4FD',
        darkGray: '#393D40',
      },
      margin: {
        100: '28rem',
      },
    },
  },
  plugins: [],
};
