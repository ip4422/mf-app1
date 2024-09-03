import React, { useEffect } from 'react'

import App from 'app/root/App'
import { AppSettings } from 'shared/hooks/useAppSettings'
import useSingleReactRoot from './useSingleReactRoot'

interface MfeAppSettings extends AppSettings {
  idTag?: string
}

interface MfeAppProps {
  settings?: MfeAppSettings
}

export const MfeApp: React.FC<MfeAppProps> = ({ settings }) => {
  const render = useSingleReactRoot(settings?.idTag)

  useEffect(() => {
    if (settings?.idTag) {
      render(
        <React.StrictMode>
          <App settings={settings} />
        </React.StrictMode>
      )
    }
  }, [settings?.idTag])

  return null
}

export default MfeApp
