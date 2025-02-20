import { createRoot } from 'react-dom/client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './i18n'
import { GlobalStyles } from 'components'
import { lazy } from 'react'

const queryClient = new QueryClient()
const LazyApp = lazy(() => import('./App'))

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <GlobalStyles>
      <LazyApp />
    </GlobalStyles>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
)
