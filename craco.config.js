// eslint-disable-next-line @typescript-eslint/no-var-requires
const { ModuleFederationPlugin } = require('webpack').container

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('./package.json')

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
          './App1': './src/bootstrap'
        },
        shared: packageJson.dependencies
      })
    ],
    configure: {
      output: {
        publicPath: 'auto'
      }
    }
  }
}
