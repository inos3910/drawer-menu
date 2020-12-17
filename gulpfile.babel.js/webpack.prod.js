import { merge }       from 'webpack-merge'
import common          from './webpack.common.js'
import TerserPlugin    from 'terser-webpack-plugin'

module.exports = merge(common, {
  mode         : 'production',
  optimization : {
    minimizer  : [
    new TerserPlugin({
      terserOptions: {
        compress: {drop_console: true}
      }
    })
    ],
  }
});