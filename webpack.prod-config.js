const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    index: './src/components',
    'Buttons/index': './src/components/Buttons/',
    'Container/index': './src/components/Container/',
    'Div/index': './src/components/Div/',
    'Wrapper/index': './src/components/Wrapper/',
    'Icons/AddCart': './src/components/Icons/AddCart',
    'Icons/WishListIcon': './src/components/Icons/WishListIcon',
    'Empty/index': './src/components/Empty/',
    'Heading/index': './src/components/Heading/',
    'HeadingH4/index': './src/components/HeadingH4/',
    'Icons/Fav': './src/components/Icons/Fav',
    'Icons/GotoCart': './src/components/Icons/GotoCart',
    'Icons/Refresh': './src/components/Icons/Refresh',
    'Img/index': './src/components/Img/',
    'Input/index': './src/components/Input/',
    'TextArea/index': './src/components/TextArea/',
    'InputField/index': './src/components/InputField/',
    'Label/index': './src/components/Label/',
    'Link/index': './src/components/Link/',
    'Media/index': './src/components/Media/',
    'Pincode/index': './src/components/Pincode/',
    'Product/index': './src/components/Product/',
    'ProductInline/index': './src/components/ProductInline/',
    'ProductInlineWithQuantity/index': './src/components/ProductInlineWithQuantity/',
    'Row/index': './src/components/Row/',
    'Section/index': './src/components/Section/',
    'Span/index': './src/components/Span/',
    'Select/index': './src/components/Select/',
    'Text/index': './src/components/Text/',
    'Theme/index': './src/components/Theme/',
    'Forms/LoginForm': './src/components/Forms/LoginForm',
    'Forms/SignupForm': './src/components/Forms/SignupForm',
    'Forms/ForgotPasswordForm': './src/components/Forms/ForgotPasswordForm',
    'Forms/ResetPasswordForm': './src/components/Forms/ResetPasswordForm',
    'Forms/ProfileForm': './src/components/Forms/ProfileForm',
    'Forms/UpdatePasswordForm': './src/components/Forms/UpdatePasswordForm',
    'Forms/PaymentMethodForm': './src/components/Forms/PaymentMethodForm',
    'Forms/FormInput': './src/components/Forms/FormInput',
    'Forms/FeedBackForm': './src/components/Forms/FeedBackForm',
    'Forms/ServiceRequestForm': './src/components/Forms/ServiceRequestForm',
    'ProductDetails/ColorOption': './src/components/ProductDetails/ColorOption',
    'ProductDetails/ProductDesc': './src/components/ProductDetails/ProductDesc',
    'ProductDetails/ServiceDetails': './src/components/ProductDetails/ServiceDetails',
    'ProductDetails/Specs': './src/components/ProductDetails/Specs',
    'ProductDetails/SpecList': './src/components/ProductDetails/SpecList',
    'ProductDetails/Spec': './src/components/ProductDetails/Spec',
    'ProductDetails/TitlePrice': './src/components/ProductDetails/TitlePrice',
    'ProductDetails/TitlePriceMobile': './src/components/ProductDetails/TitlePriceMobile',
    'Rating/index': './src/components/Rating/',
    'Reviews/index': './src/components/Reviews/',
    'ShippedTo/index': './src/components/ShippedTo/',
    'WishlistBtn/index': './src/components/WishlistBtn/',
    'CategoryCarousel/index': './src/components/CategoryCarousel/',
    'CategoryCarousel/CategoryCarouselItem': './src/components/CategoryCarousel/CategoryCarouselItem',
    'PaymentMethod/index': './src/components/PaymentMethod/',
    'Alert/index': './src/components/Alert/',
    'ScreenLoader/index': './src/components/ScreenLoader/',
    'Reviews/WriteReview': './src/components/Reviews/WriteReview',
    'Shimmer/index': './src/components/Shimmer/',
    'ImageShimmer/index': './src/components/ImageShimmer/',
    'ImageShimmerMobile/index': './src/components/ImageShimmerMobile/',
    'SeoContent/index': './src/components/SeoContent/',
    'Forms/ServiceSignUpForm': './src/components/Forms/ServiceSignUpForm',
    'Forms/ModularKitchenForm': './src/components/Forms/ModularKitchenForm',
    'Extend/index': './src/components/Extend/',
    'LoadMore/index': './src/components/LoadMore/',
    'Callus/index': './src/components/Callus/',
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
    },
    'react-router-dom': {
      commonjs2: 'react-router-dom'
    },
    'react-stars': {
      commonjs2: 'react-stars'
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
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          mimetype: 'image/svg+xml'
        }
      }
    ]
  },
  resolve: {
    modules: [
      'src',
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new UglifyJsPlugin()
  ]
};
