module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:testing-library/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'testing-library',
  ],
  overrides: [
    {
      files: ['**/?(*.)+spec.ts?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  rules: {
    'import/no-anonymous-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
    'no-useless-constructor': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'no-return-await': 'off',
    'global-require': 'off',
    'class-methods-use-this': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
    'no-unused-vars': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'react/no-danger': 'off',
    'import/no-extraneous-dependencies': 'off',

    'react/jsx-props-no-spreading': 'off',
  },
};