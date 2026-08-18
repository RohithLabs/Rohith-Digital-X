import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "crimson" | "secondary" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", children, disabled, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-crimson focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer"

    const variants = {
      default:
        "bg-charcoal-950 text-white hover:bg-charcoal-800 active:scale-[0.98] shadow-sm",
      crimson:
        "bg-accent-crimson text-white hover:bg-accent-crimson-dark active:scale-[0.98] shadow-crimson-sm hover:shadow-crimson-md",
      secondary:
        "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 active:scale-[0.98]",
      outline:
        "border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50 hover:border-zinc-400 active:scale-[0.98]",
      ghost:
        "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900",
      link:
        "text-accent-crimson underline-offset-4 hover:underline p-0 h-auto",
    }

    const sizes = {
      default: "h-11 px-5 py-2.5 text-sm",
      sm: "h-9 rounded-md px-3.5 text-xs font-medium",
      lg: "h-12 rounded-lg px-7 text-base font-semibold",
      icon: "h-10 w-10 p-0",
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"
