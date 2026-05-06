import js from '@eslint/js';
import globals from 'globals'; // Importação corrigida
import { defineConfig } from 'eslint/config';

export default defineConfig([
  js.configs.recommended, // Forma correta de estender o recomendado no Flat Config
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      // Usamos o spread operator para combinar os globais de Node e Browser (se necessário)
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
    },
  },
]);
