/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        background: "var(--theme-color-background)",
        primary: "var(--theme-color-primary)",
        secondary: "var(--theme-color-secondary)",
        welcomeMainBg: 'rgba(29, 29, 37, 1)',
      },
    },
  },
  plugins: [],
};
