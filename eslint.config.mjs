// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommended, {
  files: ['**/queries.ts'],
  rules: {
    // Lib generates any types in these files
    '@typescript-eslint/no-explicit-any': 'off',
  },
})
