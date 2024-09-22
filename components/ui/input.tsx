import * as React from "react"
import { cn } from "../../utils/cn"

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    className={cn(
      "bg-white text-black border-2 border-black py-2 px-4 rounded transition-shadow focus:outline-none focus:ring-0 focus:border-black hover:shadow-md w-full",
      className
    )}
    {...props}
  />
))
Input.displayName = "Input"

export { Input }