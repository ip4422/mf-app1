import { createContext, useContext } from 'react'

export interface AppSettings {
  parentHomeRoute?: string
  parentNavigate?: (pathName: string) => void
}

export const AppSettingsContext = createContext<AppSettings>({
  parentHomeRoute: '',
  parentNavigate: () => null
})

export const useAppSettings = () => {
  const context = useContext(AppSettingsContext)
  if (!context) {
    throw new Error('useAppSettings must be used within a AppSettingsProvider')
  }
  return context
}
