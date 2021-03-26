const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')





module.exports = {
  mode: 'development',
  devServer: {
    port: 9999,
  },
  module: {
    rules: [
      /*
      JAVASCRIPT
      ----------
      * ESx => ES5
      * JSX => ES5
    */
      {
        // sideEffects: false,
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),

        /*
          http://bit.ly/2KmGQDb
          Loaders will be applied from right to left.
          E.x.: loader3(loader2(loader1(data)))
        */
        use: [
          // http://bit.ly/2KnMe9c
          {
            /*
              http://bit.ly/2KpNbOj - Babel loader.
                - babel-loader
                - @babel/core
                - @babel/preset-env
                - @babel/preset-react
                - @babel/plugin-proposal-object-rest-spread
                - @babel/plugin-proposal-class-properties
                - @babel/plugin-syntax-dynamic-import
                - @babel/plugin-proposal-optional-chaining
                - @babel/plugin-proposal-nullish-coalescing-operator
            */
            loader: 'babel-loader',
            options: {
              presets: [
                /*
                  To get tree shaking working, we need the `modules: false` below.

                  http://bit.ly/2KkhOVv - 2ality blog mentions that the issue is caused
                  by under-the-hood usage of `transform-es2015-modules-commonjs`.

                  http://bit.ly/2KnKtZN - A comment on the above post shows that we
                  can use `modules: false`.
                */
                [
                  '@babel/preset-env', // http://bit.ly/2KoqDxm
                  {
                    modules: false, // Needed for tree shaking to work (see above).
                    useBuiltIns: 'entry', // http://bit.ly/2KkBZCu
                    corejs: { // http://bit.ly/2KkC09w
                      version: 3,
                      proposals: true
                    }
                  }
                ],
                '@babel/preset-react' // http://bit.ly/2KpNOYb
              ],

              // http://bit.ly/2KmgNfz - List of Babel plugins.
              plugins: [
                '@babel/plugin-proposal-object-rest-spread', // http://bit.ly/2KnLroT
                '@babel/plugin-proposal-class-properties', // http://bit.ly/2KoJQPM
                '@babel/plugin-syntax-dynamic-import', // http://bit.ly/2KoKcG6
                '@babel/plugin-proposal-optional-chaining', // http://bit.ly/2ZDuBdB
                '@babel/plugin-proposal-nullish-coalescing-operator' // http://bit.ly/2CvleQ4
              ]
            }
          }
        ]
      },

      /*
        SCSS
        ----
        * SCSS => CSS
        * Extract CSS from JS bundle => separate asset
        * Asset => <link> in index.html
      */
      {
        test: /\.(scss|css)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          MiniCssExtractPlugin.loader,
          {
            /*
              http://bit.ly/2WBprNT
              Using `fast-css-loader` combined with `fast-sass-loader` (below)
              produces about a 50% faster build. You'll notice it while developing.
              `css-loader` is still included so feel free to switch.
            */
            loader: 'fast-css-loader',
            options: {
              importLoaders: 2
            }
          },
          'postcss-loader', // http://bit.ly/2WOusTr - needs to be *after* `css-loader`.

        ]
      },

      /*
        FONTS
        -----
        * Copies fonts found within the `src` tree to the `dist` folder
        * Keeps the original file name
      */
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },

      /*
        IMAGES
        ------
        * Copies fonts found within the `src` tree to the `dist` folder
        * Keeps the original file name
      */
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new ModuleFederationPlugin(
      {
        name: 'microfrontendshost',
        library: { type:'global',name:'microfrontendshost'},
        filename:
          'remoteEntry.js',
        exposes: {
          './FancyButton':
            './src/components/FancyButton/FancyButton',
        },
      }
    ),
    // This must be used in conjunction with the associated scss module rule.
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // Both options are optional.
      filename: '[name].[hash].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      template:
        './public/index.html',
    }),

  ],
};