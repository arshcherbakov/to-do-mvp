import ESLintPlugin from 'eslint-webpack-plugin';
import path from 'path';

export default {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(path.dirname(new URL(import.meta.url).pathname), 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js'],
      emitWarning: true,
      failOnError: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /dist/],
      },
    ],
  },
};
