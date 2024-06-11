module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'next/core-web-vitals',
  ],
  plugins: ['prefer-arrow', 'import'],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-destructuring': ['error'],
    'prefer-const': ['error'],
    'prefer-rest-params': ['error'],
    'import/newline-after-import': ['error'],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'unknown', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          { pattern: '@/components/**', group: 'internal' },
          { pattern: '@/config/**', group: 'internal' },
          { pattern: '@/context/**', group: 'internal' },
          { pattern: '@/hooks/**', group: 'internal' },
          { pattern: '@/lib/**', group: 'internal' },
          { pattern: '@/api/**', group: 'internal' },
          { pattern: '@/types/**', group: 'internal', position: 'after' },
          { pattern: '@/styles/**', group: 'internal', position: 'after' },
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    // Disable prop-types rule
    'react/prop-types': 'off',
    'react/display-name': 'off',
    '@next/next/no-document-import-in-page': 'off',
    'react/jsx-no-target-blank': [
      'error',
      {
        allowReferrer: true,
        links: true,
        forms: false,
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../*'],
      },
    ],
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
