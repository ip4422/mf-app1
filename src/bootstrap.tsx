import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// We are running through container
// and we should export the mount function
// Mount function to start up the app
const mount = (el: HTMLElement) => {
  const rootEl = ReactDOM.createRoot(el)

  rootEl.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_app1-dev-root') as HTMLElement

  if (devRoot) {
    mount(devRoot)

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals()
  }
}

// We are running through container
// and we should export the mount function
export { mount }
