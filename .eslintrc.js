module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'rules': {
    'linebreak-style': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'semi': ['error', 'never'],
    'require-jsdoc': 0,
    'valid-jsdoc': 0,
    'max-len': ['error', {'code': 140}],
  },
}
