module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.ios.js',
            '.android.js',
            '.ios.jsx',
            '.android.jsx',
            '.js',
            '.jsx',
            '.json',
            '.ts',
            '.tsx',
          ],
          root: ['.'],
          alias: {
            '@/components': './src/components',
            '@/screens': './src/screens',
            '@/utils': './src/utils',
            '@/assets': './src/assets',
            '@/features': './src/features',
            '@/src': './src',
            '@/navigation': './src/navigation',
          },
        },
      ],
      ['react-native-reanimated/plugin'],
    ],
  };
};
