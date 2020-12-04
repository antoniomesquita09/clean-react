const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx', // file input to generate bundle
  output: {
    path: path.join(__dirname, 'public/js'), // path to bundle
    publicPath: '/public/js', // path to output bundle
    filename: 'bundle.js' // output bundle file name
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.join(__dirname, 'src') // @ alias to src
    }
  },
  devServer: {
    contentBase: './public', // dev server folder to watch
    writeToDisk: true,
    historyApiFallback: true // for router dom
  },
  externals: { // exclude react and react-dom imports to bundle, we`ve already done this inside index.html manualy
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
