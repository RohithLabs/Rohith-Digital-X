import React, { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, ArrowUpRight, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn, scrollToSection } from "@/lib/utils"
import { useScrollSpy } from "@/hooks/useScrollSpy"

const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "services", label: "Services" },
  { id: "packages", label: "Packages" },
  { id: "work", label: "Work" },
  { id: "why-us", label: "Why Us" },
  { id: "process", label: "Process" },
  { id: "about", label: "About" },
  { id: "estimator", label: "Estimator" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
]

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const activeSection = useScrollSpy(NAV_LINKS.map((link) => link.id), 120)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false)
    scrollToSection(id)
  }

  return (
    <>
      {/* Rock-solid, stable glassmorphism header (no flickering or blinking) */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-zinc-200/90 py-3 shadow-subtle"
            : "bg-white/80 backdrop-blur-xs border-b border-zinc-200/40 py-4"
        )}
      >
        <div className="container max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
          
          {/* Exact Brand Logo matching Photo 3 */}
          <button
            onClick={() => handleNavClick("hero")}
            className="flex flex-col text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-crimson rounded-lg py-1 px-1.5 transition-transform active:scale-95 cursor-pointer"
          >
            <div className="flex items-center text-xl sm:text-2xl font-black tracking-tight text-zinc-950 leading-none">
              <span>Rohith Digital</span>
              <span className="text-accent-crimson ml-1.5 font-black">X</span>
            </div>
            <div className="text-[9px] sm:text-[10px] uppercase font-extrabold tracking-[0.28em] text-zinc-400 mt-1">
              TECHNOLOGY AGENCY
            </div>
          </button>

          {/* Desktop Navigation Links with Smooth Touch/Hover Color Shift */}
          <nav className="hidden xl:flex items-center gap-1 bg-zinc-100/90 p-1.5 rounded-full border border-zinc-200/80 backdrop-blur-md shadow-xs">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={cn(
                    "relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-150 cursor-pointer select-none",
                    isActive
                      ? "bg-white text-zinc-950 font-extrabold shadow-xs border border-zinc-200/80"
                      : "text-zinc-600 hover:text-accent-crimson hover:bg-white/60 active:text-accent-crimson"
                  )}
                >
                  <span>{link.label}</span>
                </button>
              )
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="crimson"
              size="sm"
              onClick={() => handleNavClick("contact")}
              className="gap-1.5 shadow-crimson-sm hover:shadow-crimson-md text-xs font-bold px-4 py-2"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden flex items-center justify-center h-10 w-10 rounded-xl border border-zinc-200 bg-white text-zinc-800 hover:text-accent-crimson hover:bg-red-50/50 focus:outline-none focus:ring-2 focus:ring-accent-crimson cursor-pointer transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs xl:hidden"
            />

            {/* Slide Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-20 left-4 right-4 z-50 rounded-3xl border border-zinc-200 bg-white p-6 shadow-2xl xl:hidden max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                <div className="flex flex-col text-left">
                  <div className="text-lg font-black tracking-tight text-zinc-950 leading-none">
                    <span>Rohith Digital</span>
                    <span className="text-accent-crimson ml-1">X</span>
                  </div>
                  <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-400 mt-1">
                    TECHNOLOGY AGENCY
                  </span>
                </div>
                <Badge variant="crimson-subtle" className="text-[10px]">
                  Available for Projects
                </Badge>
              </div>

              {/* Links with Touch Color Changing Hover Effects */}
              <div className="grid grid-cols-2 gap-2 py-4">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={cn(
                      "flex items-center justify-between p-3 rounded-xl text-left text-xs font-bold transition-all duration-200 cursor-pointer select-none",
                      activeSection === link.id
                        ? "bg-red-50 text-accent-crimson border border-red-200/80 shadow-xs"
                        : "text-zinc-700 hover:text-accent-crimson hover:bg-red-50/60 active:bg-red-100"
                    )}
                  >
                    <span>{link.label}</span>
                    {activeSection === link.id && (
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-crimson" />
                    )}
                  </button>
                ))}
              </div>

              {/* Contact Info Snippet */}
              <div className="mt-2 pt-4 border-t border-zinc-100 space-y-2.5 text-xs text-zinc-600">
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-accent-crimson" />
                  <a href="tel:+919655483130" className="hover:text-accent-crimson font-medium transition-colors">
                    +91 96554 83130
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-accent-crimson" />
                  <a href="mailto:e.rohit3130@gmail.com" className="hover:text-accent-crimson font-medium transition-colors">
                    e.rohit3130@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-accent-crimson" />
                  <span>Namakkal, Tamil Nadu, India</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-5">
                <Button
                  variant="crimson"
                  onClick={() => handleNavClick("contact")}
                  className="w-full justify-center gap-2 text-sm font-bold h-11 shadow-crimson-sm"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
