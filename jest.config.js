// TypeScript files (.ts, .tsx) will be transformed by ts-jest to ESM syntax
const { defaultsESM: tsEsmPreset } = require('ts-jest/presets');

/**
 * @type {import('ts-jest/dist/types').InitialOptionsTsJest}
 */
module.exports = {
  transform: { ...tsEsmPreset.transform },
  moduleFileExtensions: ['ts', 'js'],
  rootDir: '.',
  testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/dist'],
  testMatch: ['<rootDir>/test/**/*.spec.ts'],
  moduleNameMapper: {
    '^@/utils': '<rootDir>/src/utils',
  },
};
