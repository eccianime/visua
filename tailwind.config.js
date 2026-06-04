/** @type {import('tailwindcss').Config} */
const colors = require('./src/config/colors');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fontFamily: {
        'montserrat-light': ['Montserrat_300Light'],
        'montserrat-regular': ['Montserrat_400Regular'],
        'montserrat-medium': ['Montserrat_500Medium'],
        'montserrat-semibold': ['Montserrat_600SemiBold'],
        'montserrat-bold': ['Montserrat_700Bold'],
      },
    },
  },
  plugins: [],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
};
