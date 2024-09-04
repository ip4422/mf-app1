import { createRoutesFromElements, Route } from 'react-router-dom'

import RootLayout from './ui/RootLayout'
import { routeNames } from './config'

const appRoutes = createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route
      path={routeNames.home}
      lazy={async () => {
        const module = await import('pages/home')
        return {
          Component: module.default
        }
      }}
    />
    <Route
      path={routeNames.minorInfo}
      lazy={async () => {
        const module = await import('pages/minor-info')
        return {
          Component: module.default
        }
      }}
    />
    <Route
      path={routeNames.importantInfo}
      lazy={async () => {
        const module = await import('pages/important-info')
        return {
          Component: module.default
        }
      }}
    />
  </Route>
)

export default appRoutes
