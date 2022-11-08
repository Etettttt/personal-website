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
        neonPurple: '#C724B1',
        brightPink: '#FF2C6D',
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
