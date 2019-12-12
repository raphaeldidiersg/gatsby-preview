const isDev = process.env.NODE_ENV === 'development'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

exports.onCreateWebpackConfig = ({
  getConfig,
  loaders,
  actions
}) => {
  const originalConfig = getConfig()

  const finalRules = originalConfig.module.rules.filter(rule => {
    if (Object.prototype.hasOwnProperty.call(rule, 'oneOf')) {
      return false
    }
    return true
  })

  const postcssRule = {
    test: /\.css$/,
    exclude: /\.m\.css$/,
    use: [
      loaders.miniCssExtract({
        hmr: isDev
      }), {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1
        }
      }, {
        loader: 'postcss-loader'
      }
    ]
  }

  const use = [
    isDev
      ? loaders.miniCssExtract({
          hmr: isDev
      })
      : {
        loader: MiniCssExtractPlugin.loader
    },
    {
      loader: require.resolve('css-loader'),
      options: {
        importLoaders: 1,
        modules: {
          localIdentName: isDev
          ? '[path]__[name]___[local]' : '[hash:base64:5]',
        }
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        plugins: [
          require('postcss-custom-media')({
            importFrom: './config/queries.css'
          }),
          require('autoprefixer'),
          require('postcss-simple-vars')({
            variables: function variables() {
              return require('./config/variables')
            },
            unknown: function unknown(node, name, result) {
              node.warn(result, 'Unknown variable ' + name)
            }
          }),
          require("postcss-nested"),
          require(`postcss-preset-env`)({
            stage: 0,
          }),
        ]
      }
    }
    // loaders.postcss()
  ]

  const postcssModule = {
    test: /\.m\.css$/,
    use
  }

  originalConfig.module.rules = finalRules.concat([
    {
      oneOf: [postcssModule, postcssRule]
    }
  ])

  if(!isDev) {
  originalConfig.plugins = [
    ...originalConfig.plugins,
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDev ? '[id].css' : '[id].[hash].css',
      ignoreOrder: false
    })
  ]
}
 
  actions.replaceWebpackConfig(originalConfig)
}