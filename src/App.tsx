import { ProtectedRoute } from 'components/ProtectedRoute'
import { Spinner } from 'components/Spinner'
import { ROUTES } from 'defines'
import { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from 'routes'

function App() {
  const isAuthenticated = false
  return (
    <>
      <div className="App">
        <Suspense fallback={<Spinner hasLogo />}>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component
              if (route.path === ROUTES.PUBLIC.LOGIN && isAuthenticated) {
                return (
                  <Route key={index} path={route.path} element={<Navigate to={ROUTES.PRIVATE.DASHBOARD} replace />} />
                )
              }
              return <Route key={index} path={route.path} element={<Page />} />
            })}

            {privateRoutes.map((route, index) => {
              const Page = route.component
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<ProtectedRoute element={Page} isAuthenticated={isAuthenticated} />}
                />
              )
            })}
          </Routes>
        </Suspense>
      </div>
    </>
  )
}

export default App
