import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        ecmaFeatures: {
            jsx: true
        }
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": ["warn", { "fixToUnknown": true }]
    },
  },
  {
    ignores: [
      '**/node_modules/*',
      '**/dist/*',
      '**/.cache/*',
      '**/public/*',
      '**/*.js', 
      '**/configs/*',
    ],
  }
);
