/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        welcomeMainBg: 'rgba(29, 29, 37, 1)',
      },keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        shine: {
          '0%': {
            left: '4%',
            transform: 'skewX(-45deg)',
            opacity: '0'
          },
          '15%': {
            opacity: '0.5'
          },
          '25%': {
            opacity: '1'
          },
          '50%': {
            opacity: '1'
          },
          '65%': {
            opacity: '0.6'
          },
          '75%': {
            opacity: '0.3'
          },
          '100%': {
            left: '90%',
            opacity: '0',
            transform: 'skewX(-45deg)'
          }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out forwards',
        'shine': 'shine 0.8s forwards'
      }
    },
  },
  plugins: [],
};
