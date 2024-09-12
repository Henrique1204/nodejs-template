module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@types': './src/types',
          '@controllers': './src/controllers',
          '@routes': './src/routes',
          '@models': './src/models',
          '@views': './src/views',
          '@config': './src/core/config',
          '@utils': './src/core/utils',
          '@services': './src/core/services',
          '@repositories': './src/repositories',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts'],
};
