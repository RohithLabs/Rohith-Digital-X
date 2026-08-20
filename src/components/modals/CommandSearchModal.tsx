import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, ArrowRight, Sparkles, Code2, Smartphone, Cpu, ShieldCheck, HelpCircle, PhoneCall, Layers, BookOpen } from "lucide-react"
import { useNavigation, PageRoute } from "@/context/NavigationContext"

interface CommandSearchModalProps {
  isOpen: boolean
  onClose: () => void
}

interface SearchItem {
  id: PageRoute
  title: string
  category: string
  icon: React.ReactNode
}

const SEARCH_ITEMS: SearchItem[] = [
  { id: "home", title: "Home & Executive Overview", category: "Navigation", icon: <Sparkles className="h-4 w-4 text-accent-crimson" /> },
  { id: "about", title: "About, Methodology & Software Dock", category: "Profile", icon: <Layers className="h-4 w-4 text-blue-400" /> },
  { id: "services", title: "Core Services: Web, Mobile, AI Agents", category: "Capabilities", icon: <Code2 className="h-4 w-4 text-emerald-400" /> },
  { id: "work", title: "Selected Work & Case Studies", category: "Portfolio", icon: <Smartphone className="h-4 w-4 text-purple-400" /> },
  { id: "packages", title: "Transparent Pricing & Production Packages", category: "Investment", icon: <ShieldCheck className="h-4 w-4 text-amber-400" /> },
  { id: "estimator", title: "Interactive Project Scope & Cost Estimator", category: "Calculator", icon: <Cpu className="h-4 w-4 text-sky-400" /> },
  { id: "guestbook", title: "Digital Guestbook & Community Signatures", category: "Community", icon: <BookOpen className="h-4 w-4 text-pink-400" /> },
  { id: "attribution", title: "System Architecture & Tech Attribution", category: "Blueprint", icon: <Code2 className="h-4 w-4 text-emerald-400" /> },
  { id: "contact", title: "Book a Strategy Call & Direct WhatsApp", category: "Contact", icon: <PhoneCall className="h-4 w-4 text-accent-crimson" /> },
]

export const CommandSearchModal: React.FC<CommandSearchModalProps> = ({ isOpen, onClose }) => {
  const { navigate } = useNavigation()
  const [query, setQuery] = useState("")

  // Listen for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        if (isOpen) {
          onClose()
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  const filteredItems = SEARCH_ITEMS.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  )

  const handleSelect = (id: PageRoute) => {
    onClose()
    navigate(id)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 sm:pt-32 p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Search Capsule */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="relative w-full max-w-xl rounded-3xl bg-zinc-950 text-white border border-zinc-800 shadow-2xl overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-zinc-800">
              <Search className="h-4 w-4 text-zinc-400 shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Search pages, services, packages, tools..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none font-sans"
              />
              <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded">
                ESC
              </span>
              <button
                onClick={onClose}
                className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1 divide-y divide-zinc-900">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item.id)}
                    className="w-full text-left p-3 rounded-2xl hover:bg-zinc-900/90 flex items-center justify-between group transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="h-8 w-8 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-zinc-200 group-hover:text-white truncate font-sans">
                          {item.title}
                        </p>
                        <p className="text-[10px] text-zinc-500 font-mono">
                          {item.category}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 text-zinc-600 group-hover:text-accent-crimson group-hover:translate-x-1 transition-all" />
                  </button>
                ))
              ) : (
                <div className="p-8 text-center text-xs text-zinc-500 font-sans">
                  No matching pages found for "{query}"
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
