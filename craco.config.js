// eslint-disable-next-line @typescript-eslint/no-var-requires
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  mode: 'development',
  devServer: {
    port: 3002
  },
  webpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'app1',
        filename: 'remoteEntry.js',
        exposes: {
          './App1': './src/App'
        },
        shared: ['react', 'react-dom']
      })
    ],
    configure: {
      output: {
        publicPath: 'auto'
      }
    }
  }
}
