export const ROUTES = {
  PUBLIC: {
    HOME: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
    NOT_FOUND: '*'
  },
  PRIVATE: {
    DASHBOARD: '/dashboard',
    PROFILE: '/profile',
    SETTINGS: '/settings',
    LOGOUT: '/logout'
  }
} as const

type FlattenRoutes<T> = T extends object
  ? { [K in keyof T]: T[K] extends object ? FlattenRoutes<T[K]> : T[K] }[keyof T]
  : T

export type RouteValues = FlattenRoutes<typeof ROUTES>
