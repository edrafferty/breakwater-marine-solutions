'use client'

import * as Toast from '@radix-ui/react-toast'
import { useState } from 'react'

export function ToastProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  return (
    <Toast.Provider swipeDirection="right">
      {children}
      <Toast.Root
        open={open}
        onOpenChange={setOpen}
        className="fixed bottom-4 right-4 z-50 bg-white shadow-md rounded-md px-4 py-3 border border-gray-200 text-sm text-gray-900 w-[300px]"
      >
        <Toast.Title className="font-medium">{message}</Toast.Title>
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-0 right-0 p-6 w-96 max-w-full outline-none" />
    </Toast.Provider>
  )
}

export function useToast() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  const trigger = (msg: string) => {
    setMessage(msg)
    setOpen(true)
    setTimeout(() => setOpen(false), 4000)
  }

  return { open, setOpen, message, trigger }
}
