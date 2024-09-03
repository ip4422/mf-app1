const path = require('path')
const fs = require('fs')
const dotenv = require('dotenv')
const { ModuleFederationPlugin } = require('webpack').container

// Determine the absolute path to the .env file if it exists
// __dirname - the directory where craco.config.js is located
const getEnvFilePath = () => {
  let resolvedPath = ''

  // If the .env.<environment> file exists, return it
  resolvedPath = path.resolve(
    __dirname, // The directory where craco.config.js is located
    `.env.${process.env.REACT_APP_ENVIRONMENT ?? 'development'}`
  )
  if (fs.existsSync(resolvedPath)) {
    return resolvedPath
  }

  // If the .env.development file exists, return it
  resolvedPath = path.resolve(
    __dirname, // The directory where craco.config.js is located
    '.env.development'
  )
  if (fs.existsSync(resolvedPath)) {
    return resolvedPath
  }

  // By default at least .env file should exists
  resolvedPath = path.resolve(
    __dirname, // The directory where craco.config.js is located
    '.env'
  )
  if (fs.existsSync(resolvedPath)) {
    return resolvedPath
  }

  return resolvedPath
}

const envFilePath = getEnvFilePath()
// Check if the .env file exists before loading the environment variables
if (fs.existsSync(envFilePath)) {
  dotenv.config({ path: envFilePath })
} else {
  console.error(
    `App settings file "${envFilePath}" not found. Make sure that the settings file exists.`
  )
  process.exit(1)
}

const portalUrl =
  // remove trailing slash from portal name if it exists
  // because it will be added in settings
  process.env.REACT_APP_PORTAL_URL.replace(/\/+$/, '') +
  (process.env.REACT_APP_PORTAL_PORT
    ? `:${process.env.REACT_APP_PORTAL_PORT}`
    : '')

// Settings for our Remotes applications. Here we setup where our remotes
// are located. We could setup it in our .env file.
// Each remote has a name and a domain. If we didn't pick remotes here it will
// not work.
// We need to remove the trailing slash from the domain to be sure that
// further pathes are working

// const remotesApp2Domain = process.env.REACT_APP_APP2_DOMAIN.replace(/\/+$/, '')

const remotes = {
  // remoteApp2 - the name of the remote application inside container
  // remoteApp2Domain - the domain of the remote application
  // app1 - the name of the entry point of the remote application inside
  // remote application. This name should be setted in configuration of
  // remote application
  // remoteApp2: `app2@${remotesApp2Domain}/remoteEntry.js`
}

// Shared settings
// uploading all packages from package.json
const deps = require('./package.json').dependencies
// setup requiredVersion for all packages
const sharedModules = Object.keys(deps).reduce((acc, dep) => {
  acc[dep] = { requiredVersion: deps[dep], singleton: true }
  return acc
}, {})

module.exports = {
  mode: 'development',
  devServer: {
    port: process.env.REACT_APP_PORTAL_PORT
  },
  webpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'app1',
        filename: 'remoteEntry.js',
        exposes: {
          './App1': './src/app/mfe-app/MfeApp'
        },
        ...(remotes && Object.keys(remotes).length > 0 && { remotes }),
        shared: sharedModules
      })
    ],
    configure: {
      output: {
        publicPath: 'auto'
      }
    }
  }
}
