module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  plugins: ['import'],
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'warn',
    'no-eval': 'error',
    'import/first': 'error',
  },
};
