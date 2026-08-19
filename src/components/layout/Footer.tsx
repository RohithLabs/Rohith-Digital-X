import React, { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"
import { LegalModal } from "@/components/modals/LegalModal"
import { scrollToSection } from "@/lib/utils"

const ROTATING_KEYWORDS = [
  "TECHNOLOGY AGENCY",
  "BRAND BUILDING",
  "WEB & MOBILE APPS",
  "AI AUTOMATION",
  "CLOUD ARCHITECTURE",
  "FULL-STACK SYSTEMS",
]

export const Footer: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<"privacy" | "terms" | null>(null)
  const [keywordIndex, setKeywordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setKeywordIndex((prev) => (prev + 1) % ROTATING_KEYWORDS.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  const currentKeyword = ROTATING_KEYWORDS[keywordIndex]
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="bg-zinc-950 text-white border-t border-zinc-900 pt-16 pb-12 relative">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/80">
            
            {/* Column 1: Agency Brand & Mission */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex flex-col text-left">
                <div className="flex items-baseline font-syne text-2xl font-extrabold tracking-tight text-white leading-none">
                  <span>Rohith</span>
                  <span className="text-zinc-400 font-normal ml-1">Digital</span>
                  <span className="font-playfair font-black italic text-accent-crimson text-3xl ml-1.5 inline-block">
                    X
                  </span>
                </div>

                {/* Word-by-Word Animated Keyword Ticker */}
                <div className="flex items-center gap-1.5 text-[9.5px] uppercase font-mono font-bold tracking-[0.28em] text-zinc-400 mt-2 h-4 overflow-hidden">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-crimson shrink-0 animate-pulse" />
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentKeyword}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="flex items-center gap-1.5 whitespace-nowrap"
                    >
                      {currentKeyword.split(" ").map((word, wIdx) => (
                        <motion.span
                          key={wIdx}
                          initial={{ opacity: 0, x: -3 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.25, delay: wIdx * 0.08 }}
                          className="inline-block"
                        >
                          {word}
                        </motion.span>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm pt-2">
                Independent technology and software engineering agency led by Rohith E.
                Crafting robust websites, mobile apps, scalable backends, and AI automation for ambitious businesses.
              </p>

              <div className="pt-2 text-xs text-zinc-400 space-y-1.5 font-mono">
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-accent-crimson" />
                  <span>Namakkal, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-accent-crimson" />
                  <a href="mailto:e.rohit3130@gmail.com" className="hover:text-accent-crimson transition-colors">
                    e.rohit3130@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-accent-crimson" />
                  <a href="tel:+919655483130" className="hover:text-accent-crimson transition-colors">
                    +91 96554 83130
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-300">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs text-zinc-400">
                {["Services", "Packages", "Work", "Why Us", "Process", "About", "Estimator", "FAQ", "Contact"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                      className="hover:text-accent-crimson transition-colors cursor-pointer"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Core Services */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-300">
                Capabilities
              </h4>
              <ul className="space-y-2 text-xs text-zinc-400">
                {[
                  "Business Websites",
                  "Android & iOS Apps",
                  "Backend APIs & DB",
                  "AI Agents & Chatbots",
                  "Cloud Infrastructure",
                  "Custom Platforms",
                ].map((service) => (
                  <li key={service}>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="hover:text-accent-crimson transition-colors cursor-pointer text-left"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Quick Action & Transparency */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-300">
                Direct Kickoff
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Skip the back-and-forth. Chat directly with lead engineer Rohith on WhatsApp.
              </p>
              
              <a
                href="https://wa.me/919655483130?text=Hello%20Rohith,%20I%20would%20like%20to%20discuss%20a%20new%20project%20with%20Rohith%20Digital%20X."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                <span>Direct WhatsApp Chat</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-[11px] text-zinc-400 space-y-1">
                <span className="font-semibold text-zinc-200 block">Senior Engineering Promise:</span>
                <p>100% code ownership, strict NDA privacy, and direct founder accountability.</p>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Legal */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <div className="text-center sm:text-left">
              <p>© {currentYear} Rohith Digital X. All rights reserved.</p>
              <p className="text-[10px] text-zinc-400 mt-0.5">
                Engineered with React 19, TypeScript, Tailwind CSS, & Framer Motion.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <button
                onClick={() => setLegalModalType("privacy")}
                className="hover:text-zinc-300 transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                onClick={() => setLegalModalType("terms")}
                className="hover:text-zinc-300 transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Legal Policy Modals */}
      <LegalModal
        isOpen={legalModalType !== null}
        onClose={() => setLegalModalType(null)}
        type={legalModalType || "privacy"}
      />
    </>
  )
}
