module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@constants/*': './src/constants/*',
        '@controllers/*': './src/controllers/*',
        '@database/*': './src/database/*',
        '@models/*': './src/models/*',
        '@services/*': './src/services/*',
        '@utils/*': './src/utils/*'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}