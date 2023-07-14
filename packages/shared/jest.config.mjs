/** @type {import('jest').Config} */
export default {
  dir: "./",
  preset: "ts-jest",
  transformIgnorePatterns: ["../../node_modules/(?!jest-cucumber)"],
  testMatch: ["**/*.steps.ts", "**/*.test.ts"],
  testEnvironment: "node",
};
