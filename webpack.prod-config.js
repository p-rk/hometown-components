const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    index: './src/components',
    'Buttons/index': './src/components/Buttons/',
    'Container/index': './src/components/Container/',
    'Div/index': './src/components/Div/',
    'Heading/index': './src/components/Heading/',
    'Image/index': './src/components/Image/',
    'InputField/index': './src/components/InputField/',
    'Row/index': './src/components/Row/',
    'Text/index': './src/components/Text/',
    'Theme/index': './src/components/Theme/'
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    library: 'hometown-components',
    libraryTarget: 'commonjs2'
  },
  externals: {
    'styled-components': {
      commonjs2: 'styled-components'
    },
    react: {
      commonjs2: 'react'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader'
        }
      }
    ]
  },
  resolve: {
    modules: [
      'src',
      'node_modules'
    ],
    extensions: ['.json', '.js', '.jsx']
  },
  plugins: [
    new UglifyJsPlugin()
  ]
};
