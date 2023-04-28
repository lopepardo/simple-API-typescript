module.exports = {
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  testEnvironment: "node",
  moduleNameMapper: {
    "^src/(.*)": "<rootDir>/src/$1",
  },
  modulePaths: ["<rootDir>/src"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts"],
  coverageDirectory: "coverage",
  testMatch: ["**/*.test.ts"],
};
