import nextJest from '@next/jest'

const createJestConfig = nextJest({
  dir: './', // path to your Next.js app
})

/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // match your tsconfig paths
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

const exportedConfig = createJestConfig(customJestConfig)
module.exports = exportedConfig
