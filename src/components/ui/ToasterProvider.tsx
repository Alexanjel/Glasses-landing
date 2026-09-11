import React from 'react'
import { Toaster } from 'sonner'

export const ToasterProvider: React.FC = () => {
  return (
    <Toaster
      position="top-center"
      richColors
      closeButton
      duration={4000}
      toastOptions={{
        style: {
          borderRadius: '16px',
          fontFamily: 'inherit',
          padding: '16px 20px',
        },
        classNames: {
          toast: 'border shadow-xl backdrop-blur-md',
          title: 'font-semibold text-sm',
          description: 'text-xs text-slate-600',
        },
      }}
    />
  )
}
