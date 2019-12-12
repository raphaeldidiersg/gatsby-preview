module.exports = () => ({
  plugins: [
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
  ],
})