import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "crimson" | "crimson-subtle" | "dark"
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 border-transparent",
    secondary: "bg-zinc-100 text-zinc-800 border-zinc-200",
    outline: "text-zinc-700 border-zinc-300 bg-transparent",
    crimson: "bg-accent-crimson text-white border-transparent",
    "crimson-subtle": "bg-red-50 text-accent-crimson border-red-200/80 font-medium",
    dark: "bg-charcoal-900 text-zinc-200 border-charcoal-800",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent-crimson focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}
