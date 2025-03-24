import { ComponentType } from 'react'
import { About, Dashboard, Home, Profile } from 'pages'
import { ROUTES, RouteValues } from './type'

interface RouteConfig {
  path: RouteValues
  component: ComponentType
}

/*~~~~~~~~~~PublicRoutes~~~~~~~~~~*/
const publicRoutes: RouteConfig[] = [
  {
    path: ROUTES.PUBLIC.HOME,
    component: Home
  },
  {
    path: ROUTES.PUBLIC.LOGIN,
    component: About
  }
]
/*~~~~~~~~~~PrivateRoutes~~~~~~~~~~*/
const privateRoutes: RouteConfig[] = [
  {
    path: ROUTES.PRIVATE.DASHBOARD,
    component: Dashboard
  },
  {
    path: ROUTES.PRIVATE.PROFILE,
    component: Profile
  }
]
export { publicRoutes, privateRoutes }
