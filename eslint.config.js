import jest from "eslint-plugin-jest";

export default [
  {
    ignores: ["src/**", "node_modules/**", "coverage/**"],
  },
  {
    files: ["tests/**/*.test.js"],
    plugins: {
      jest,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...jest.environments.globals.globals,
      },
    },
    rules: {
      ...jest.configs.recommended.rules,
      "jest/expect-expect": "error",
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/valid-expect": "error",
      "no-unused-vars": "warn",
      "no-console": "warn",
    },
  },
];
