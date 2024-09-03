import { createContext, useContext } from 'react'

export interface AppSettings {
  parentHomeName?: string
  parentNavigate?: (pathName: string) => void
  isMarketing?: boolean
}

export const AppSettingsContext = createContext<AppSettings>({
  parentHomeName: '',
  parentNavigate: () => null
})

export const useAppSettings = () => {
  const context = useContext(AppSettingsContext)
  if (!context) {
    throw new Error('useAppSettings must be used within a AppSettingsProvider')
  }
  return context
}
