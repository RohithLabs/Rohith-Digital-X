import React, { useState, useEffect } from "react"
import { motion, useScroll, AnimatePresence } from "framer-motion"
import { Compass, ChevronRight } from "lucide-react"
import { scrollToSection } from "@/lib/utils"

const SECTIONS = [
  { id: "hero", label: "Home", short: "01" },
  { id: "services", label: "Services", short: "02" },
  { id: "packages", label: "Packages", short: "03" },
  { id: "work", label: "Work", short: "04" },
  { id: "why-us", label: "Why Us", short: "05" },
  { id: "process", label: "Process", short: "06" },
  { id: "about", label: "About", short: "07" },
  { id: "estimator", label: "Estimator", short: "08" },
  { id: "faq", label: "FAQ", short: "09" },
  { id: "contact", label: "Contact", short: "10" },
]

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll()

  const [activeSection, setActiveSection] = useState<string>("hero")
  const [activeLabel, setActiveLabel] = useState<string>("Home")
  const [activeNumber, setActiveNumber] = useState<string>("01")
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const [showScrollHUD, setShowScrollHUD] = useState<boolean>(false)
  const [percent, setPercent] = useState<number>(0)

  // Track percentage
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setPercent(Math.round(latest * 100))
      setShowScrollHUD(latest > 0.02)
    })
  }, [scrollYProgress])

  // Track active section efficiently
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 260

          for (let i = SECTIONS.length - 1; i >= 0; i--) {
            const sec = SECTIONS[i]
            const el = document.getElementById(sec.id)
            if (el) {
              const top = el.offsetTop
              if (scrollPosition >= top) {
                setActiveSection(sec.id)
                setActiveLabel(sec.label)
                setActiveNumber(sec.short)
                break
              }
            }
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Calculate SVG circular stroke
  const radius = 10
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (percent / 100) * circumference

  return (
    <>
      {/* Floating Futuristic Mini-HUD Capsule (Bottom-Right, Zero top line artifact) */}
      <AnimatePresence>
        {showScrollHUD && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end select-none font-mono"
          >
            {/* Quick Navigation Drawer when HUD is clicked */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="mb-2 p-2 rounded-2xl bg-zinc-950/95 backdrop-blur-md border border-zinc-800 shadow-2xl space-y-1 min-w-[160px]"
                >
                  <div className="px-2.5 py-1 text-[10px] uppercase font-bold text-zinc-400 border-b border-zinc-800/80 mb-1 flex items-center justify-between">
                    <span>Jump to Section</span>
                    <Compass className="h-3 w-3 text-accent-crimson" />
                  </div>
                  {SECTIONS.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => {
                        scrollToSection(sec.id)
                        setIsExpanded(false)
                      }}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        activeSection === sec.id
                          ? "bg-red-950/80 text-white border border-accent-crimson/50 font-bold"
                          : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-zinc-500 font-bold">{sec.short}</span>
                        <span>{sec.label}</span>
                      </div>
                      {activeSection === sec.id && (
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-crimson" />
                      )}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Floating Capsule Pill */}
            <div
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-3 px-3.5 py-2 rounded-full bg-zinc-950/90 backdrop-blur-md border border-zinc-800 shadow-2xl text-white hover:border-accent-crimson transition-all duration-200 cursor-pointer group hover:scale-[1.03] active:scale-[0.98]"
            >
              {/* Circular SVG Micro Progress Meter */}
              <div className="relative flex items-center justify-center h-6 w-6">
                <svg className="h-6 w-6 -rotate-90" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r={radius}
                    className="stroke-zinc-800"
                    strokeWidth="2.5"
                    fill="transparent"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r={radius}
                    className="stroke-accent-crimson transition-all duration-150"
                    strokeWidth="2.5"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>
                <span className="absolute text-[8px] font-bold text-zinc-300 font-mono">
                  {percent}%
                </span>
              </div>

              {/* Active Section Label with Crimson Indicator */}
              <div className="flex items-center gap-1.5 text-xs font-semibold pr-1">
                <span className="text-[10px] text-accent-crimson font-bold">{activeNumber}</span>
                <span className="text-zinc-500">•</span>
                <span className="text-zinc-200 group-hover:text-white transition-colors">{activeLabel}</span>
              </div>

              {/* Quick Jump / Scroll to Top Icon */}
              <div className="h-5 w-5 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-700 transition-colors">
                <ChevronRight className={`h-3 w-3 transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
