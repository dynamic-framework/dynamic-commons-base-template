const { createDefaultPreset } = require('ts-jest');

module.exports = {
  verbose: false,
  testEnvironment: 'jsdom',
  transform: {
    ...createDefaultPreset().transform,
  },
  maxWorkers: 4,
  cacheDirectory: '<rootDir>/.jest-cache',
  setupFilesAfterEnv: [
    '<rootDir>/node_modules/@dynamic-framework/ui-react/jest/setup.js',
    '<rootDir>/tests/setup.ts',
  ],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/dist-transpiled/',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/dist-transpiled/',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/node_modules/@dynamic-framework/ui-react/jest/__mocks__/fileMock.js',
    '\\.(css|sass|scss)$': '<rootDir>/node_modules/@dynamic-framework/ui-react/jest/__mocks__/styleMock.js',
  },
};

