import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface DialogProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
  description?: string
  className?: string
  maxWidth?: string
}

export function Dialog({
  isOpen,
  onClose,
  children,
  title,
  description,
  className,
  maxWidth = "max-w-3xl",
}: DialogProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Dialog Container with Extended Comfortable Height & Padding */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: "spring", damping: 26, stiffness: 350 }}
            className={cn(
              "relative z-50 w-full rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 md:p-10 shadow-2xl my-auto max-h-[92vh] sm:max-h-[90vh] overflow-y-auto flex flex-col",
              maxWidth,
              className
            )}
            role="dialog"
            aria-modal="true"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 rounded-full p-2.5 bg-zinc-100 text-zinc-600 hover:bg-red-50 hover:text-accent-crimson transition-colors focus:outline-none focus:ring-2 focus:ring-accent-crimson cursor-pointer z-10"
              aria-label="Close dialog"
            >
              <X className="h-4 w-4" />
            </button>

            {title && (
              <div className="mb-5 pr-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-950 leading-tight">
                  {title}
                </h2>
                {description && (
                  <p className="mt-1.5 text-xs sm:text-sm text-zinc-500 leading-relaxed font-normal">
                    {description}
                  </p>
                )}
              </div>
            )}

            <div className="pb-6 sm:pb-8 flex-1">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
