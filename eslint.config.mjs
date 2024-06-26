import { fixupConfigRules } from '@eslint/compat';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    languageOptions: {
      globals: globals.browser,
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      plugins: [
        'import',
        'prettier',
        'unicorn',
        'react',
        'react-extra',
        'sort-exports',
        'testing-library',
        '@typescript-eslint',
      ],
      ignorePatterns: ['**/node_modules', '**/public', '**/build'],
      rules: {
        'testing-library/await-async-query': 'error',
        'testing-library/no-await-sync-query': 'error',
        'testing-library/no-debugging-utils': 'warn',
        'testing-library/no-dom-import': 'off',

        'react/jsx-boolean-value': 2,
        'react/jsx-key': 2,
        'react/jsx-curly-brace-presence': 2,
        'react-extra/no-inline-styles': 1,

        // 'arrow-parens': [2, 'always'],
        'block-scoped-var': 2,
        'brace-style': [2, '1tbs'],
        // 'camelcase': [2, { properties: 'never' }],
        'curly': [2, 'all'],
        'dot-location': [1, 'property'],
        'dot-notation': 2,
        'eol-last': 2,
        'eqeqeq': 2,
        'no-alert': 2,
        'no-console': ['warn', { allow: ['error'] }],
        'no-else-return': 2,
        'no-empty': [2, { allowEmptyCatch: true }],
        'no-eq-null': 2,
        'no-eval': 2,
        'no-extra-semi': 2,
        'no-extend-native': 2,
        'no-fallthrough': 2,
        'no-implicit-coercion': [2, { allow: ['!!'] }],
        'no-implied-eval': 2,
        'no-lone-blocks': 2,
        'no-loop-func': 2,
        'no-multi-str': 2,
        'no-native-reassign': 2,
        'no-new': 2,
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-octal': 2,
        'no-octal-escape': 2,
        'no-return-assign': 2,
        'no-script-url': 2,
        'no-self-assign': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-unexpected-multiline': 2,
        'no-unmodified-loop-condition': 2,
        'no-unused-expressions': ['warn', { allowShortCircuit: true, allowTernary: true }],

        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': ['off'],

        // note you must disable the base rule as it can report incorrect errors
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          { argsIgnorePattern: '^_', caughtErrors: 'none' },
        ],

        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-useless-escape': 2,
        'no-void': 2,
        'no-var': 2,
        'one-var': [2, 'never'],
        'padding-line-between-statements': [
          'error',
          { blankLine: 'always', prev: 'multiline-const', next: '*' },
          { blankLine: 'always', prev: 'multiline-let', next: '*' },
          { blankLine: 'always', prev: '*', next: 'block-like' },
          { blankLine: 'always', prev: 'block-like', next: '*' },
          { blankLine: 'always', prev: '*', next: 'multiline-expression' },
          { blankLine: 'always', prev: 'multiline-expression', next: '*' },
          { blankLine: 'always', prev: '*', next: 'return' },
        ],
        'prefer-const': 2,
        'prefer-arrow-callback': 2,
        // 'quotes': [2, 'single', { avoidEscape: true }],
        'yoda': 2,

        // Plugin specific options:
        // 'babel/no-invalid-this': 2,

        // Does not recognize module.exports as default, so it's basically useless today
        'import/default': 0,
        'import/order': [
          2,
          {
            'groups': ['builtin', 'external', 'unknown', 'internal', 'parent', 'sibling', 'index'],
            'newlines-between': 'always-and-inside-groups',
            // "alphabetize": { "order": "asc" }
          },
        ],
        'import/first': 2,
        // 'import/no-unresolved': 2,
        'import/no-unassigned-import': 0,
        'import/named': 0,
        'import/no-amd': 2,
        'import/no-webpack-loader-syntax': 2,
        'import/no-named-as-default-member': 0,
        'import/no-named-as-default': 0,
        'import/no-anonymous-default-export': 0,
        'import/no-cycle': 2,

        'sort-imports': ['error', { ignoreDeclarationSort: true }],
        // "sort-exports/sort-exports": ["error", { "sortDir": "asc" }],

        'unicorn/no-for-loop': 2,
        'unicorn/no-abusive-eslint-disable': 2,
        'unicorn/no-array-instanceof': 2,
        'unicorn/no-zero-fractions': 2,
        'unicorn/prefer-includes': 2,
        'unicorn/prefer-text-content': 2,
        'unicorn/import-index': 0,
        'unicorn/throw-new-error': 2,

        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        // The following rules are unnecessary and potentially harmful if prettier is used:
        'semi': 0,
        'prettier/prettier': 'error',
        // 'semi': [2, 'always'],
        // 'key-spacing': 2,
        // 'keyword-spacing': 2,
        //'linebreak-style': [2, 'unix'],
        'linebreak-style': [2, process.platform === 'win32' ? 'windows' : 'unix'],
        // 'no-floating-decimal': 2,
        // 'no-multi-spaces': 2,
        // 'space-in-parens': [2, 'never'],
        // 'comma-dangle': [
        //     2,
        //     {
        //         arrays: 'always-multiline',
        //         imports: 'always-multiline',
        //         exports: 'always-multiline',
        //         objects: 'always-multiline',
        //         functions: 'ignore',
        //     },
        // ],
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
];
