import expoConfig from 'eslint-config-expo/flat.js'; // <- Añadido .js al final
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...expoConfig,
  {
    ignores: ['.expo/*', 'node_modules/*', 'dist/*'],
  },
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
]);
