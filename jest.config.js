module.exports = {
  setupFiles: ['<rootDir>/__tests__/__utils__/setup-tests.js'],
  modulePathIgnorePatterns: ['__tests__/__utils__/'],
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
  },
};
