import { createContext, ReactNode, useContext, useState } from 'react'

interface AppContextProps {
  theme: 'light' | 'dark'
  language: 'en' | 'vi'
  toggleTheme: () => void
  setLanguage: (lang: 'en' | 'vi') => void
}

interface AppProviderProps {
  children: ReactNode
}

const defaultValue: AppContextProps = {
  theme: 'light',
  language: 'en',
  toggleTheme: () => {},
  setLanguage: () => {}
}

const AppContext = createContext<AppContextProps>(defaultValue)

export const AppProvider = ({ children }: AppProviderProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [language, setLanguage] = useState<'en' | 'vi'>('en')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return <AppContext.Provider value={{ theme, language, toggleTheme, setLanguage }}>{children}</AppContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const context = useContext(AppContext)
  return context
}
