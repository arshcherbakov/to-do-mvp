import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config'} */
export default {
  languageOptions: {
    globals: globals.browser,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignores: ['dist/*'],
  ...pluginJs.configs.recommended,
};
