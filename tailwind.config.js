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
        darkPurple: '#232946',
        lightPurple: '#b8c1ec',
        offPink: '#eebbc3',
        offWhite: '#e9ecef',
        darkGray: '#212529',
      },
      margin: {
        100: '28rem',
      },
    },
  },
  plugins: [],
};
