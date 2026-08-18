import React, { useState, useEffect } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { scrollToSection } from "@/lib/utils"

const SECTIONS = [
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

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 26,
    mass: 0.15,
  })

  const [activeSection, setActiveSection] = useState<string>("hero")
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)

  // Pure transform for smooth percentage without triggering React state updates on every frame
  const percentText = useTransform(scrollYProgress, (val) => `${Math.round(val * 100)}%`)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 220

          for (let i = SECTIONS.length - 1; i >= 0; i--) {
            const sec = SECTIONS[i]
            const el = document.getElementById(sec.id)
            if (el) {
              const top = el.offsetTop
              if (scrollPosition >= top) {
                setActiveSection(sec.id)
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

  return (
    <div
      className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center select-none"
      aria-label="Scroll progress and section navigator"
    >
      {/* Animated Percentage Tooltip using Motion Value (Zero React Re-renders on Scroll) */}
      <motion.div className="mb-3 px-2 py-0.5 rounded-full bg-zinc-900/90 backdrop-blur-sm text-[10px] font-mono text-zinc-300 border border-zinc-700 shadow-xs">
        {percentText}
      </motion.div>

      {/* Main Track */}
      <div className="relative w-1.5 h-64 sm:h-72 rounded-full bg-zinc-200/80 shadow-inner overflow-hidden">
        {/* Animated Crimson Progress Fill */}
        <motion.div
          className="absolute top-0 left-0 right-0 w-full bg-gradient-to-b from-accent-crimson via-red-500 to-accent-crimson rounded-full origin-top"
          style={{ scaleY, height: "100%" }}
        />
      </div>

      {/* Section Node Dots */}
      <div className="absolute top-8 bottom-0 w-6 flex flex-col justify-between items-center pointer-events-auto">
        {SECTIONS.map((section) => {
          const isActive = activeSection === section.id
          const isHovered = hoveredSection === section.id

          return (
            <div
              key={section.id}
              className="relative flex items-center justify-center cursor-pointer group"
              onClick={() => scrollToSection(section.id)}
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {/* Dot */}
              <div
                className={`h-2 w-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-accent-crimson ring-4 ring-red-200 scale-125 shadow-crimson-sm"
                    : "bg-zinc-300 group-hover:bg-zinc-700 group-hover:scale-110"
                }`}
              />

              {/* Tooltip Label */}
              {(isHovered || isActive) && (
                <div
                  className={`absolute right-6 px-2 py-1 rounded-md text-[10px] font-bold whitespace-nowrap shadow-sm transition-opacity duration-150 pointer-events-none ${
                    isActive
                      ? "bg-zinc-950 text-white border border-zinc-800"
                      : "bg-white text-zinc-700 border border-zinc-200"
                  }`}
                >
                  {section.label}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
