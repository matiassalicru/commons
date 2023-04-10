module.exports = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    'src/**/**/*.{ts,tsx,js,jsx}',
    '!src/**/*.stories.{js,tsx}',
    '!src/mocks/**.*',
    '!src/utils/**.*',
    '!src/index.js',
    '!src/App.tsx',
    '!src/**/query.js',
    '!src/**/*.interface.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },
  modulePaths: ['node_modules', '<rootDir>/'],
  verbose: true,
  globals: {
    lang: 'es',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  setupFiles: ['jest-canvas-mock'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/mocks/styles.js',
    '\\.(css|less)$': '<rootDir>/src/mocks/styles.js',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/lib/',
    '<rootDir>/public',
    '<rootDir>/.storybook',
    '<rootDir>/node_modules',
    'e2e',
    '<rootDir>/src/components/svg-icon',
    '<rootDir>/src/components/task-row',
    '<rootDir>/src/components/tooltip',
    '<rootDir>/src/components/filters/components/l2-dropdown',
  ],
}
