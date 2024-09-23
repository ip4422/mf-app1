import React, { useMemo } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'

import { AppSettingsContext } from 'shared/hooks/useAppSettings'
import { NotFoundPage } from 'pages/not-found'
import appRoutes from 'app/routes/AppRoutes'

export interface AppSettings {
  basename?: string
  parentHomeRoute?: string
  parentNavigate?: (pathName: string) => void
}

interface AppProps {
  settings?: AppSettings
}

const App: React.FC<AppProps> = ({ settings }) => {
  const { basename, parentNavigate, parentHomeRoute } = settings ?? {}

  const router = createBrowserRouter(appRoutes, {
    basename
  })

  const value = useMemo(
    () => ({
      parentHomeRoute: parentHomeRoute ?? '/',
      parentNavigate
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
