module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },

  extends: [
    'airbnb-base',
  ],

  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },

  rules: {
    // Если нужно включить логирование — можешь сделать:
    // "no-console": "off"
  },
};
