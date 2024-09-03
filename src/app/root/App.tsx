import React, { useMemo } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'

import { AppSettingsContext } from 'shared/hooks/useAppSettings'
import { NotFoundPage } from 'pages/not-found/NotFoundPage'
import appRoutes from 'app/routes/AppRoutes'

export interface AppSettings {
  basename?: string
  parentHomeName?: string
  parentNavigate?: (pathName: string) => void
  isMarketing?: boolean
}

interface AppProps {
  settings?: AppSettings
}

const App: React.FC<AppProps> = ({ settings }) => {
  const { basename, parentNavigate, parentHomeName, isMarketing } =
    settings ?? {}

  const router = createBrowserRouter(appRoutes, {
    basename
  })

  const value = useMemo(
    () => ({
      parentHomeName: parentHomeName ?? '/',
      parentNavigate,
      isMarketing
    }),
    [parentNavigate]
  )

  return (
    <AppSettingsContext.Provider value={value}>
      <RouterProvider router={router} fallbackElement={<NotFoundPage />} />
    </AppSettingsContext.Provider>
  )
}

export default App
