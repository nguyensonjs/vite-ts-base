import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import vn from './locales/vn.json'

const resources = {
  en: {
    translation: en,
  },
  vn: {
    translation: vn,
  },
}

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',

  interpolation: {
    escapeValue: false,
  },
})

export default i18next
