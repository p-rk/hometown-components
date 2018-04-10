const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    index: './src/components',
    'Buttons/index': './src/components/Buttons/',
    'Container/index': './src/components/Container/',
    'Div/index': './src/components/Div/',
    'Heading/index': './src/components/Heading/',
    'Img/index': './src/components/Img/',
    'Input/index': './src/components/Input/',
    'InputField/index': './src/components/InputField/',
    'Label/index': './src/components/Label/',
    'Link/index': './src/components/Link/',
    'Product/index': './src/components/Product/',
    'ProductInline/index': './src/components/ProductInline/',
    'Row/index': './src/components/Row/',
    'Section/index': './src/components/Section/',
    'Span/index': './src/components/Span/',
    'Text/index': './src/components/Text/',
    'Theme/index': './src/components/Theme/',
    'Forms/LoginForm': './src/components/Forms/LoginForm'
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
