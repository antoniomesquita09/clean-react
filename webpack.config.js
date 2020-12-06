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
    extensions: ['.ts', '.tsx', '.js', 'scss'],
    alias: {
      '@': path.join(__dirname, 'src') // @ alias to src
    }
  },
  module: { // config sass
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: './public', // dev server folder to watch
    writeToDisk: true,
    historyApiFallback: true, // for router dom
    port: 8080
  },
  externals: { // exclude react and react-dom imports to bundle, we`ve already done this inside index.html manualy
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
