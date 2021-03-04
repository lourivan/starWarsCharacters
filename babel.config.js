module.exports = (api) => {
  api.cache(true)
  return {
    presets: ['module:metro-react-native-babel-preset'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    plugins: [
      'babel-plugin-styled-components',
      [
        'babel-plugin-root-import',
        {
          paths: [
            {
              rootPathSuffix: './src',
              rootPathPrefix: '~/',
            },
            {
              rootPathSuffix: './assets',
              rootPathPrefix: 'assets/',
            },
          ],
        },
      ],
      [
        'babel-plugin-inline-import',
        {
          extensions: ['.svg'],
        },
      ],
      [
        'module:react-native-dotenv',
        {
          allowUndefined: false,
        },
      ],
    ],
  }
}
