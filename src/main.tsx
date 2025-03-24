import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Spinner } from 'components/Spinner'
import { AppProvider } from 'contexts/AppContext'

import './i18n'
import './assets/styles/index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false
    }
  }
})
const LazyApp = lazy(() => import('./App'))

const rootEl = document.getElementById('root')

if (rootEl) {
  const root = createRoot(rootEl)
  root.render(
    <StrictMode>
      <Router>
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            <Suspense fallback={<Spinner hasLogo />}>
              <LazyApp />
            </Suspense>
            <ReactQueryDevtools initialIsOpen={false} />
          </AppProvider>
        </QueryClientProvider>
      </Router>
    </StrictMode>
  )
}
