module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/strongly-recommended', '@vue/standard'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'indent': [
      'error', 2,
      { ignoredNodes: ['TemplateLiteral'] },
    ],
    'template-curly-spacing': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: [
    'vue',
  ],
}
