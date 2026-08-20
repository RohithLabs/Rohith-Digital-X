import React, { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X as CloseIcon, ArrowUpRight, Phone, Mail, MapPin, ChevronDown, Package, Wrench, CreditCard, BookOpen, Heart, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn, scrollToSection } from "@/lib/utils"
import { GuestbookModal } from "@/components/modals/GuestbookModal"
import { AssetsModal } from "@/components/modals/AssetsModal"
import { CommandSearchModal } from "@/components/modals/CommandSearchModal"

import { useNavigation, PageRoute } from "@/context/NavigationContext"

export const Navbar: React.FC = () => {
  const { navigate, currentPage } = useNavigation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const [isGuestbookOpen, setIsGuestbookOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [assetsModalState, setAssetsModalState] = useState<{ isOpen: boolean; tab: "assets" | "bucketlist" | "attribution" }>({
    isOpen: false,
    tab: "assets",
  })
  const moreDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(e.target as Node)) {
        setIsMoreOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleNavClick = (route: PageRoute, targetId?: string) => {
    setIsMobileMenuOpen(false)
    setIsMoreOpen(false)
    navigate(route, targetId)
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-4 sm:top-5 left-0 right-0 z-50 transition-all duration-300 pointer-events-none px-4 sm:px-6",
          isScrolled ? "translate-y-0" : "translate-y-0.5"
        )}
      >
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between md:grid md:grid-cols-3 pointer-events-auto relative">
          
          {/* Left Column: Brand Logo Pill */}
          <div className="flex items-center justify-start">
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center gap-2 bg-white/95 backdrop-blur-md border border-zinc-200/90 py-2 px-4 rounded-full shadow-sm hover:border-accent-crimson transition-all active:scale-95 cursor-pointer"
            >
              <div className="flex items-baseline font-sans text-xs sm:text-sm font-extrabold tracking-tight text-zinc-950 leading-none">
                <span className="font-black">Rohith</span>
                <span className="text-zinc-500 font-medium ml-1 tracking-tight">Digital</span>
                <span className="font-black text-accent-crimson ml-1">X</span>
              </div>
            </button>
          </div>

          {/* Center Column: Perfectly Dead-Centered Dark Pill Navigation */}
          <div className="hidden md:flex items-center justify-center relative" ref={moreDropdownRef}>
            <nav className="flex items-center gap-1 bg-zinc-950/95 backdrop-blur-md text-white p-1.5 rounded-full border border-zinc-800 shadow-2xl relative">
              {[
                { id: "home" as PageRoute, label: "Home" },
                { id: "about" as PageRoute, label: "About" },
                { id: "work" as PageRoute, label: "Work" },
                { id: "packages" as PageRoute, label: "Packages" },
              ].map((link) => {
                const isActive = currentPage === link.id
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={cn(
                      "relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors duration-150 cursor-pointer select-none z-10",
                      isActive ? "text-white font-extrabold" : "text-zinc-400 hover:text-white"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPillTab"
                        className="absolute inset-0 rounded-full bg-zinc-800 shadow-xs ring-1 ring-zinc-700 -z-10"
                        transition={{ type: "spring", stiffness: 450, damping: 32 }}
                      />
                    )}
                    <span>{link.label}</span>
                  </button>
                )
              })}

              {/* "More ⌄" Mega Menu Trigger */}
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className={cn(
                  "flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors cursor-pointer select-none",
                  isMoreOpen ? "bg-zinc-800 text-white font-bold" : "text-zinc-400 hover:text-white"
                )}
              >
                <span>More</span>
                <ChevronDown className={cn("h-3 w-3 transition-transform duration-200", isMoreOpen ? "rotate-180 text-accent-crimson" : "")} />
              </button>

              {/* "Book a Call" Action inside Centered Pill */}
              <button
                onClick={() => handleNavClick("contact")}
                className="ml-1 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-800 hover:bg-accent-crimson text-white text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-95"
              >
                <span>Book a Call</span>
                <ArrowUpRight className="h-3 w-3 text-accent-crimson group-hover:text-white" />
              </button>
            </nav>

            {/* Standalone Search Circle Floating Outside Nav Pill with Space (Screenshot Match) */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search sections"
              className="h-9 w-9 rounded-full bg-zinc-950/95 backdrop-blur-md border border-zinc-800 shadow-2xl hover:border-accent-crimson hover:bg-zinc-900 text-zinc-300 hover:text-white flex items-center justify-center transition-all cursor-pointer ml-2.5 shrink-0 active:scale-90"
            >
              <Search className="h-4 w-4" />
            </button>

            <AnimatePresence>
              {isMoreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-14 left-1/2 -translate-x-1/2 w-[620px] rounded-[2rem] bg-[#18181B] border border-zinc-700/90 shadow-[0_25px_60px_rgba(0,0,0,0.5)] p-3.5 z-50 pointer-events-auto"
                >
                  <div className="grid grid-cols-12 gap-3">
                    <div
                      onClick={() => { setIsMoreOpen(false); setIsGuestbookOpen(true); }}
                      className="col-span-4 relative rounded-2xl overflow-hidden h-[180px] bg-gradient-to-br from-amber-950/60 to-zinc-900 border border-zinc-700/70 p-4 flex flex-col justify-end group cursor-pointer hover:border-accent-crimson transition-all shadow-md"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-600/20 via-zinc-900/90 to-black z-0" />
                      <div className="absolute top-3 right-3 text-amber-400/80 group-hover:scale-110 transition-transform">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div className="relative z-10 space-y-1">
                        <h4 className="text-sm font-bold text-white group-hover:text-accent-crimson transition-colors font-display">Guestbook</h4>
                        <p className="text-[11px] text-zinc-400 font-sans leading-tight">Let me know you were here</p>
                      </div>
                    </div>
                    <div
                      onClick={() => { setIsMoreOpen(false); setAssetsModalState({ isOpen: true, tab: "bucketlist" }); }}
                      className="col-span-4 relative rounded-2xl overflow-hidden h-[180px] bg-gradient-to-br from-rose-950/60 to-zinc-900 border border-zinc-700/70 p-4 flex flex-col justify-end group cursor-pointer hover:border-accent-crimson transition-all shadow-md"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-600/20 via-zinc-900/90 to-black z-0" />
                      <div className="absolute top-3 right-3 text-rose-400/80 group-hover:scale-110 transition-transform">
                        <Heart className="h-5 w-5 fill-rose-500/30" />
                      </div>
                      <div className="relative z-10 space-y-1">
                        <h4 className="text-sm font-bold text-white group-hover:text-accent-crimson transition-colors font-display">Bucket List</h4>
                        <p className="text-[11px] text-zinc-400 font-sans leading-tight">Dreams with a deadline</p>
                      </div>
                    </div>
                    <div className="col-span-4 flex flex-col justify-between gap-1.5">
                      <button
                        onClick={() => { setIsMoreOpen(false); setAssetsModalState({ isOpen: true, tab: "assets" }); }}
                        className="w-full text-left p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800/90 transition-all flex items-center gap-2.5 group cursor-pointer"
                      >
                        <div className="h-7 w-7 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-white shrink-0">
                          <Package className="h-3.5 w-3.5" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-white truncate">Useful Assets</div>
                          <div className="text-[10px] text-zinc-400 truncate">Design resources & code</div>
                        </div>
                      </button>
                      <button
                        onClick={() => { setIsMoreOpen(false); scrollToSection("about"); }}
                        className="w-full text-left p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800/90 transition-all flex items-center gap-2.5 group cursor-pointer"
                      >
                        <div className="h-7 w-7 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-white shrink-0">
                          <Wrench className="h-3.5 w-3.5" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-white truncate">Tools Which I Use</div>
                          <div className="text-[10px] text-zinc-400 truncate">Hardware & software stack</div>
                        </div>
                      </button>
                      <button
                        onClick={() => { setIsMoreOpen(false); setAssetsModalState({ isOpen: true, tab: "attribution" }); }}
                        className="w-full text-left p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800/90 transition-all flex items-center gap-2.5 group cursor-pointer"
                      >
                        <div className="h-7 w-7 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-white shrink-0">
                          <CreditCard className="h-3.5 w-3.5" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-white truncate">Attribution</div>
                          <div className="text-[10px] text-zinc-400 truncate">Journey to create site</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="hidden md:flex items-center justify-end">
            <a
              href="https://wa.me/919655483130?text=Hello%20Rohith,%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200/90 text-zinc-900 text-xs font-bold shadow-sm hover:border-emerald-500 hover:text-emerald-700 transition-all active:scale-95 cursor-pointer"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => handleNavClick("contact")}
              className="px-3.5 py-1.5 rounded-full bg-accent-crimson text-white text-xs font-bold shadow-crimson-sm cursor-pointer"
            >
              Book a Call
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center h-9 w-9 rounded-full border border-zinc-200 bg-white/95 backdrop-blur-md text-zinc-900 shadow-sm hover:text-accent-crimson cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <CloseIcon className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      <GuestbookModal isOpen={isGuestbookOpen} onClose={() => setIsGuestbookOpen(false)} />
      <AssetsModal isOpen={assetsModalState.isOpen} initialTab={assetsModalState.tab} onClose={() => setAssetsModalState({ ...assetsModalState, isOpen: false })} />
      <CommandSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
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
                  <div className="flex items-baseline font-sans text-lg font-extrabold tracking-tight text-zinc-950 leading-none">
                    <span className="font-black">Rohith</span>
                    <span className="text-zinc-500 font-medium ml-1.5 tracking-tight">Digital</span>
                    <span className="font-black text-accent-crimson ml-1.5">
                      X
                    </span>
                  </div>
                  <div className="text-[10px] uppercase font-mono font-bold tracking-wider text-zinc-400 mt-1">
                    Digital Product Studio
                  </div>
                </div>
                <Badge variant="crimson-subtle" className="text-[10px]">
                  Available for Projects
                </Badge>
              </div>

              {/* Mobile Drawer Page Links */}
              <div className="grid grid-cols-2 gap-2 py-4">
                {[
                  { id: "home" as PageRoute, label: "Home" },
                  { id: "about" as PageRoute, label: "About" },
                  { id: "work" as PageRoute, label: "Work" },
                  { id: "packages" as PageRoute, label: "Packages" },
                  { id: "services" as PageRoute, label: "Services" },
                  { id: "estimator" as PageRoute, label: "Estimator" },
                  { id: "guestbook" as PageRoute, label: "Guestbook" },
                  { id: "attribution" as PageRoute, label: "Attribution" },
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={cn(
                      "flex items-center justify-between p-3 rounded-xl text-left text-xs font-bold transition-all duration-200 cursor-pointer select-none",
                      currentPage === link.id
                        ? "bg-red-50 text-accent-crimson border border-red-200/80 shadow-xs"
                        : "text-zinc-700 hover:text-accent-crimson hover:bg-red-50/60 active:bg-red-100"
                    )}
                  >
                    <span>{link.label}</span>
                    {currentPage === link.id && (
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-crimson" />
                    )}
                  </button>
                ))}
              </div>

              {/* Contact Info Snippet */}
              <div className="mt-2 pt-4 border-t border-zinc-100 space-y-2.5 text-xs text-zinc-600">
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-accent-crimson" />
                  <a href="tel:+919655483130" className="hover:text-accent-crimson font-medium transition-colors font-mono">
                    +91 96554 83130
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-accent-crimson" />
                  <a href="mailto:e.rohit3130@gmail.com" className="hover:text-accent-crimson font-medium transition-colors font-mono">
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
