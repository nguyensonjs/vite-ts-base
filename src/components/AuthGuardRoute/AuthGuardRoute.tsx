import { FC } from 'react'
import { Navigate } from 'react-router-dom'

import { ROUTES } from 'defines'

interface AuthGuardRouteProps {
  isAuthenticated: boolean
  element: React.ElementType
}

export const AuthGuardRoute: FC<AuthGuardRouteProps> = ({ element: Component, isAuthenticated }) => {
  return isAuthenticated ? <Component /> : <Navigate to={ROUTES.PUBLIC.LOGIN} replace />
}
