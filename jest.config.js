export default {
  testEnvironment: "node",

  transform: {},

  moduleFileExtensions: ["js", "json"],

  testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).js"],

  collectCoverageFrom: [
    // Only collect coverage from files we're actually testing
    "src/filter.js",
    "src/reduce.js",
    "src/ceil.js",
    "src/clamp.js",
    "src/defaultTo.js",
    "src/compact.js",
    "src/words.js",
    "src/isEmpty.js",
    "src/toNumber.js",
    "src/capitalize.js",

    // Exclude patterns
    "!src/**/*.test.js",
    "!src/**/*.spec.js",
    "!src/.internal/**",
    "!**/.internal/**",
  ],

  // coverageThreshold: {
  //   global: {
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //     statements: 80,
  //   },
  // },

  verbose: true,
};
