'use client'

import { useState, createContext, useContext } from 'react'

interface ToastContextType {
  showToast: (msg: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) throw new Error('useToast must be used within ToastProvider')
  return context
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [, setMessage] = useState<string | null>(null)

  const showToast = (msg: string) => {
    setMessage(msg)
    // Add real implementation here
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
    </ToastContext.Provider>
  )
}
