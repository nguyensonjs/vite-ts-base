import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import vi from './locales/vi.json'

const resources = {
  en: {
    translation: en
  },
  vi: {
    translation: vi
  }
}

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',

  interpolation: {
    escapeValue: false
  }
})

export default i18next
