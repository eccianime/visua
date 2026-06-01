/** @type {import("prettier").Config} */
const config = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'es5',
  semi: true,
  // Esta línea y el orden de los plugins aseguran que ordene los classNames de NativeWind
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
