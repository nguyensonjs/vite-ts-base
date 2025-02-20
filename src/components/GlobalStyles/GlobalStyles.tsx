import { ReactNode } from 'react'
import './GlobalStyles.css'

interface GlobalStylesProps {
  children: ReactNode
}

const GlobalStyles = ({ children }: GlobalStylesProps) => {
  return children
}

export default GlobalStyles
