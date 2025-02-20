import { ReactNode } from 'react'
import './GlobalStyles.css'

interface GlobalStylesProps {
  children: ReactNode
}

export const GlobalStyles = ({ children }: GlobalStylesProps) => {
  return children
}
