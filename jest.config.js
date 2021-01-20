module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setup-tests.js"],
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "<rootDir>/node_modules/jest-css-modules",
    "^components(.*)$": "<rootDir>/components$1",
    "^generated(.*)$": "<rootDir>/generated$1",
    "^utils(.*)$": "<rootDir>/utils$1",
    "^styles(.*)$": "<rootDir>/styles$1",
    "^pages(.*)$": "<rootDir>/pages$1",
  },
};
