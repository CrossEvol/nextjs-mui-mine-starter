// module.exports = {
//   transform: {
//     '^.+\\.ts?$': 'ts-jest',
//   },
//   testEnvironment: 'node',
//   testRegex: './.*\\.(test|spec)?\\.(ts|ts)$',
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
//   roots: ['<rootDir>'],
//   moduleNameMapper: {
//     '^@/(.*)$': '<rootDir>/$1'
//   },
// };

const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  modulePathIgnorePatterns: ['<rootDir>/e2e/'],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
