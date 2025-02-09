module.exports = {
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true,
  rootDir: './',
  modulePaths: ['<rootDir>'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'node'],
  preset: 'jest-expo',
  setupFiles: ['<rootDir>/.jest/setup.tsx/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setupFilesAfterEnv.ts/'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    'src/components/**/*.tsx',
    'src/hooks/**/*.{ts,tsx}',
    'src/screens/**/*.tsx',
    'src/utils/**/*.{ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  clearMocks: true,
};
