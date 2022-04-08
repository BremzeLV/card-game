module.exports = {
  testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
  rootDir: './src/',
  bail: false,
  verbose: true,
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  modulePathIgnorePatterns: [
    'node_modules',
  ],
}
