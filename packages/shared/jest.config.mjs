/** @type {import('jest').Config} */
export default {
  dir: "./",
  preset: "ts-jest",
  testMatch: ["**/*.steps.ts", "**/*.test.ts"],
  testEnvironment: "node",
};
