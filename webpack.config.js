const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/Controller/controller.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  plugins: [new ESLintPlugin({
    extensions: ['js'], 
    emitWarning: true,  
    failOnError: false,
  })],
  devServer: {
    port: 3000
  },
};
