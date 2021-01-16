module.exports = {
  extends: 'airbnb-typescript-prettier',
  env: {
    es6: true,
    browser: true
  },
  rules: {
    indent: 'off',
    'no-console': 'off',
    'no-tabs': 0,
    'brace-style': ['error', 'stroustrup'],
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': ['warn']
  },
  settings: {
    react: {
      version: '999.999.999'
    }
  }
};
