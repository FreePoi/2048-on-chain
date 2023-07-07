const base = require('@alt-research/dev/config/eslint.cjs');

module.exports = {
  ...base,
  ignorePatterns: [
    ...base.ignorePatterns,
    '.estlintrc.js',
    '.github/**',
    '.vscode/**',
    '.yarn/**',
    '**/build/*',
    '**/coverage/*',
    '**/node_modules/*',
  ],
  extends: [...base.extends],
  parserOptions: {
    ...base.parserOptions,
    project: ['./tsconfig.json'],
  },
  rules: {
    ...base.rules,
    'import-newlines/enforce': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    'arrow-parens': ['error', 'as-needed'],
    '@typescript-eslint/no-empty-function': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
  },
};
