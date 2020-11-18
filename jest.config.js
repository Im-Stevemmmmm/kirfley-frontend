module.exports = {
  setupFiles: ['<rootDir>/setup-tests.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
  },
};
