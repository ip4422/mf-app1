// eslint-disable-next-line @typescript-eslint/no-var-requires
const { ModuleFederationPlugin } = require('webpack').container

// eslint-disable-next-line @typescript-eslint/no-var-requires
const deps = require('./package.json').dependencies

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
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps['react']
          },
          'react-dom': {
            singleton: true,
            requiredVersion: deps['react-dom']
          }
        }
      })
    ],
    configure: {
      output: {
        publicPath: 'auto'
      }
    }
  }
}
