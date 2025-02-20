import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()
  return (
    <>
      <p className="text-3xl font-bold underline">{t('Hello World')}</p>
    </>
  )
}

export default App
