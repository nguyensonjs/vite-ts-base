import { Navigate } from 'react-router-dom'

interface ProtectedRoute {
  isAuthenticated: boolean
  element: React.ElementType
}

export const ProtectedRoute = ({ element: Element, isAuthenticated }: ProtectedRoute) => {
  return isAuthenticated ? <Element /> : <Navigate to="/login" replace />
}
