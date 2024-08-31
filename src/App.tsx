import React, { useEffect } from 'react'

import './App.css'

interface AppProps {
  settings?: string
}

const App: React.FC<AppProps> = ({ settings }: { settings?: string }) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(settings)
  }, [])

  return (
    <div className='App'>
      <header className='App1-header'>
        <div>Micro Frontend application app1.</div>
        <div>Exported as App1 from this mcrofrontend application.</div>
      </header>
    </div>
  )
}

export default App
