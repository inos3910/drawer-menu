import { merge }  from 'webpack-merge'
import common     from './webpack.common.js'

module.exports = merge(common, {
  mode     : 'development',
  devtool  : 'eval-cheap-module-source-map'
});
