/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#3E8A74',
        'clear-day': '#E2EEEA',
        'raisin-black': '#232323',
        'night-rider': '#323232',
        'dark-gray': '#A8A8A9',
        'medium-black': '#474746',
        'lavender': '#EFEFF0',
        'light-brown': '#F9F9F9',
        'dashed-border': '#E8E9E9'
      },
      height: {
        "72-vh": "72vh",
        "80-vh": "80vh",
      },
      fontFamily: {
        'sans': ['Figtree', ...defaultTheme.fontFamily.sans],
      },

    },
  },
  plugins: [],
};
