import { FC } from 'react'

export const Spinner: FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div
        className="h-12 w-12 animate-spin rounded-full border-4 border-t-4 border-gray-200 border-t-blue-500"
        role="status"
        aria-label="Loading"
      ></div>
    </div>
  )
}
