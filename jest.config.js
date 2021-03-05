module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./scripts/setupJest'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleNameMapper: {
      "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
      "\\.(gif|ttf|eot|svg|png|jpg|jpeg)$": "<rootDir>/__mocks__/fileMock.js"
    }
}
