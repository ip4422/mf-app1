// To run this sccript add this to package.json scripts section:
// "scripts": {
//     "startlogs": "node start-with-logging.js",
//   },

// start-with-logging.js file content:
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
const { exec } = require('child_process')

// Function to introduce a delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function start() {
  // console.log('Waiting 5 seconds before starting the development server...')
  // await delay(1000) // Adjust the time as needed
  console.log(
    'This script intercept stderr and stdout and log it to the console.'
  )

  // Start the CRACO development server
  const server = exec('npm start', { stdio: 'pipe', shell: true })
  // const server = exec('npx craco start', { stdio: 'pipe', shell: true })

  // Capture and display the output from Webpack and CRACO
  server.stdout.on('data', data => {
    console.log('stdout: ', data.toString())
  })

  server.stderr.on('data', data => {
    console.error('stderr: ', data.toString())
  })

  server.on('error', err => {
    console.error('Error starting the server:', err)
  })

  server.on('exit', code => {
    if (code !== 0) {
      console.log(`Server exited with code ${code}`)
    }
  })
}

start()
