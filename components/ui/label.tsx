import { LabelHTMLAttributes } from 'react'

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

export function Label({ children, ...props }: LabelProps) {
  return (
    <label
      {...props}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {children}
    </label>
  )
}
