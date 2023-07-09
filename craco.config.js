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
        // We have to configure the output dir mode because
        // we using nested paths for the pages and in this case webpack will
        // try to fetch our main.js path from this publicPath
        // `http://localhost:3002/main.js` instead of
        // `http://localhost:3003/somePageName/main.js`
        // finalizing slash is important!

        publicPath: 'http://localhost:3002/'
      }
    }
  }
}
