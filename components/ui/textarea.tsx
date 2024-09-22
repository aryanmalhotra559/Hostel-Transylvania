import * as React from "react"
import { cn } from "@/utils/cn"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "bg-white text-black border-2 border-black py-2 px-4 rounded transition-shadow focus:outline-none focus:ring-0 focus:border-black hover:shadow-md w-full",
      className
    )}
    {...props}
  />
))
Textarea.displayName = "Textarea"

export { Textarea }