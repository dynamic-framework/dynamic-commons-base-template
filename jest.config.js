module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  verbose: false,
  testEnvironment: 'jsdom',
  maxWorkers: 4,
  cacheDirectory: '<rootDir>/.jest-cache',
  setupFilesAfterEnv: [
    '<rootDir>/tests/setupTests.ts',
  ],
  transformIgnorePatterns: [
    '<rootDir>/dist/',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/dist/',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/__mocks__/fileMock.js',
    '\\.(css|sass|scss)$': '<rootDir>/tests/__mocks__/styleMock.js',
  },
};
