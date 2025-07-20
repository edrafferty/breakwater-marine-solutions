import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition"
    >
      {children}
    </button>
  )
}
