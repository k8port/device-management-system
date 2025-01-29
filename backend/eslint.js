module.exports = {
    env: {
      browser: true, // Enable browser global variables
      es2021: true, // Enable ES2021 syntax
      node: true, // Enable Node.js global variables
    },
    extends: [
      'eslint:recommended', // Use recommended ESLint rules
      'plugin:@typescript-eslint/recommended', // Use recommended TypeScript rules
      'plugin:prettier/recommended', // Integrate Prettier for code formatting
    ],
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        parser: '@typescript-eslint/parser',
      },
    ],
    parser: '@typescript-eslint/parser', // Use TypeScript parser
    parserOptions: {
      ecmaVersion: 'latest', // Use the latest ECMAScript version
      sourceType: 'module', // Allow ES modules
    },
    plugins: ['@typescript-eslint', 'prettier'], // Use TypeScript and Prettier plugins
    rules: {
      'prettier/prettier': 'error', // Treat Prettier formatting issues as errors
      '@typescript-eslint/no-var-requires': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/no-explicit-any': 'off',
    },
  };