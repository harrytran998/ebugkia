/**
 * @type {import('ts-jest/dist/types').InitialOptionsTsJest}
 */
module.exports = {
  transform: { '^.+\\.tsx?$': '@sucrase/jest-plugin' },
  moduleFileExtensions: ['ts', 'js'],
  rootDir: '.',
  testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/dist'],
  testMatch: ['<rootDir>/test/**/*.test.ts'],
  moduleNameMapper: {
    '^@/utils': '<rootDir>/src/utils',
  },
};
