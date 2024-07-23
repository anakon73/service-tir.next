import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind'

const compat = new FlatCompat()

export default antfu(
  {
    ignores: ['README.md'],
    plugins: {
      'readable-tailwind': eslintPluginReadableTailwind,
    },
    rules: {
      'max-len': ['error', 90],
      'import/order': [
        'warn',
        { groups: ['builtin', 'external'], warnOnUnassignedImports: true },
      ],
      'unused-imports/no-unused-imports': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-redeclare': 'off',
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 3,
        },
        multiline: {
          max: 1,
        },
      }],
      ...eslintPluginReadableTailwind.configs.warning.rules,
      ...eslintPluginReadableTailwind.configs.error.rules,
      'readable-tailwind/multiline': ['warn', { printWidth: 90 }],
    },
  },
  ...compat.config({ extends: ['plugin:storybook/recommended'] }),
)
