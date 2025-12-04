export default {
  testEnvironment: "node",

  transform: {},

  moduleFileExtensions: ["js", "json"],

  testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).js"],

  collectCoverageFrom: [
    "src/**/*.js",
    "!src/**/*.test.js",
    "!src/**/*.spec.js",
  ],

  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },

  verbose: true,
};
