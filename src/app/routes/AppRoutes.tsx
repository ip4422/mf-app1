import { createRoutesFromElements, Route } from 'react-router-dom'

import RootLayout from './ui/RootLayout'

const appRoutes = createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route
      path='/'
      lazy={async () => {
        const module = await import('pages/home/HomePage')
        return {
          Component: module.default
        }
      }}
    />
  </Route>
)

export default appRoutes
