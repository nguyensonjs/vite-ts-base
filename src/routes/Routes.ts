import { ComponentType } from 'react'
import { ROUTES, RouteValues } from 'defines'
import { About, Dashboard, Home, Profile } from 'pages'

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
/*~~~~~~~~~~RivateRoutes~~~~~~~~~~*/
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
