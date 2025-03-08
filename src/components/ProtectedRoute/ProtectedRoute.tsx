import { FC } from 'react'
import { Navigate } from 'react-router-dom'

import { ROUTES } from 'defines'

interface ProtectedRouteProps {
  isAuthenticated: boolean
  element: React.ElementType
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ element: Component, isAuthenticated }) => {
  return isAuthenticated ? <Component /> : <Navigate to={ROUTES.PUBLIC.LOGIN} replace />
}
