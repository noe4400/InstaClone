module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
     plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            assets: './assets',
            components: './src/components',
            screens: './src/screens',
            hooks: './src/hooks',
            hoc: './src/hoc',
            config: './src/config',
            types: './src/types',
            utils: './src/utils',
          },
        },
      ],
    ],
  };
};
