module.exports = {
  setupFiles: ['<rootDir>/setup-tests.ts'],
  modulePathIgnorePatterns: ['__tests__/__utils__/'],
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
  },
};
