import { FC } from 'react'
import loadingLogo from 'assets/imgs/logo.svg'

type SpinnerProps = {
  hasLogo?: boolean
}

export const Spinner: FC<SpinnerProps> = ({ hasLogo = false }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      {hasLogo && <img src={loadingLogo} alt="loading-logo" className="mb-2" />}
      <div className="relative h-14 w-14">
        <div className="absolute h-14 w-14 animate-spin rounded-full border-4 border-transparent border-l-indigo-500"></div>
        <div className="absolute h-14 w-14 animate-spin rounded-full border-4 border-transparent border-l-indigo-500 opacity-75"></div>
        <div className="absolute h-14 w-14 animate-spin rounded-full border-4 border-transparent border-l-indigo-500 opacity-50"></div>
      </div>
    </div>
  )
}
