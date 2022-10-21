module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['./jest-setup.js'],
  transform: {
    '\\.svg$': '<rootDir>/svgTransformer.js',
  },
};
