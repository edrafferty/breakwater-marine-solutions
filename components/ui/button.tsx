import { Slot } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils' // Optional if you have a `cn` utility

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        className={cn(
          'bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition',
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)

Button.displayName = 'Button'
