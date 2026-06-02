/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
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
