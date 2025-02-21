import { About, Dashboard, Home, Profile } from 'pages'

/*~~~~~~~~~~PublicRoutes~~~~~~~~~~*/
const publicRoutes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]
/*~~~~~~~~~~RivateRoutes~~~~~~~~~~*/
const privateRoutes = [
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/profile',
    component: Profile
  }
]
export { publicRoutes, privateRoutes }
