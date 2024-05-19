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
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
];
