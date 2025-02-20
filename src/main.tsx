import { createRoot } from 'react-dom/client'

import './i18n'
import App from './App'
import { GlobalStyles } from 'components'

createRoot(document.getElementById('root')!).render(
  <GlobalStyles>
    <App />
  </GlobalStyles>,
)
