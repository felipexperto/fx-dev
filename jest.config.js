module.exports = {
  preset: 'ts-jest',
  transform: {
    "^.+\\.(js|jsx)$": `<rootDir>/configs/jest-preprocess.js`,
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  moduleDirectories: ["node_modules", "src"],
  roots: [
    "<rootDir>/src"
  ],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/node_modules/",
    "!<rootDir>/src/styles/**/*.js"
  ],
  coverageReporters: ['lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/configs/mockSvgr.js',
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/configs/jestFileTransformer.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`, `<rootDir>.*/configs`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testEnvironmentOptions: {
    url: `http://localhost`,
  },
  setupFiles: [`<rootDir>/configs/loadershim.js`],
}
