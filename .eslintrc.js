module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: ['tsconfig.eslint.json'],
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  extends: ['@techmely/eslint-config-vue-ts'],
  rules: {
    'vue/singleline-html-element-content-newline': ['off'],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 5,
          allowFirstLine: true,
        },
        multiline: {
          max: 5,
          allowFirstLine: true,
        },
      },
    ],
  },
};
