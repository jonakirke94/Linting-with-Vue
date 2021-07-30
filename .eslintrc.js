module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended', 'prettier', 'airbnb'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': [0, 'error', 'windows'],
    'import/no-unresolved': 'off',
    semi: ['error', 'always'],
    camelcase: 'off',
    'object-curly-newline': 'off',
    'no-tabs': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.vue'] }],
    'react/react-in-jsx-scope': 'off',
    'react/no-string-refs': 'off',
    'max-len': ['error', { code: 600, ignoreStrings: true, ignoreUrls: true }],
    // TODO: Remove when is https://github.com/babel/babel-eslint/issues/530 fixed
    indent: 'off',
    'template-curly-spacing': 'off',
  },
};
