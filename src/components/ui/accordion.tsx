import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionItemProps {
  id: string
  title: string
  children: React.ReactNode
  isOpen: boolean
  onToggle: () => void
  badge?: string
  className?: string
}

export function AccordionItem({
  id,
  title,
  children,
  isOpen,
  onToggle,
  badge,
  className,
}: AccordionItemProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-zinc-200/80 bg-white transition-all duration-200 overflow-hidden",
        isOpen ? "border-zinc-300 shadow-sm" : "hover:border-zinc-300",
        className
      )}
    >
      <button
        id={`accordion-btn-${id}`}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
        onClick={onToggle}
        className="flex w-full items-center justify-between p-5 md:p-6 text-left font-medium text-zinc-900 transition-colors hover:text-accent-crimson focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-crimson focus-visible:ring-offset-2 cursor-pointer"
      >
        <span className="flex items-center gap-3 text-base md:text-lg font-semibold text-zinc-900 pr-4">
          {title}
          {badge && (
            <span className="inline-block rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600">
              {badge}
            </span>
          )}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-colors",
            isOpen && "bg-red-50 text-accent-crimson"
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`accordion-content-${id}`}
            role="region"
            aria-labelledby={`accordion-btn-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-zinc-100 p-5 md:p-6 pt-3 text-zinc-600 leading-relaxed text-sm md:text-base">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
