/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'active-button': '#6FB7FF',
      },
      backgroundColor: {
        'main-bg': '#F0F0F0',
        'main-blue': '#034C95',
        'main-blue-button': 'rgba(9, 30, 66, 0.25)',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
    },
    fontFamily: {
      sans: ["Work Sns", ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [],
}