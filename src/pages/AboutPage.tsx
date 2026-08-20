import React from "react"
import { motion } from "framer-motion"
import { AboutSection } from "@/components/sections/AboutSection"
import { TrustSection } from "@/components/sections/TrustSection"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { useNavigation } from "@/context/NavigationContext"
import { ArrowRight, Sparkles } from "lucide-react"

export const AboutPage: React.FC = () => {
  const { navigate } = useNavigation()

  return (
    <div className="pt-24 sm:pt-32 pb-20 space-y-16">
      {/* Top Page Header */}
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-zinc-600"
        >
          <span className="text-accent-crimson font-black text-sm">✦</span>
          <span>PROFILE & PHILOSOPHY</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] text-zinc-950 font-display"
        >
          Know <span className="font-light text-zinc-400">me</span> as I am<span className="text-accent-crimson">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Full-stack software engineer & digital product designer building robust, conversion-focused digital systems from Tamil Nadu, India.
        </motion.p>
      </div>

      {/* Main About Component */}
      <AboutSection />

      {/* Trust & Methodology Principles */}
      <TrustSection />

      {/* Bottom Action */}
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 text-white space-y-6 shadow-2xl border border-zinc-800">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold font-display">Ready to build your next project?</h3>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto">
              Get direct founder-level engineering, transparent pricing, and rapid sprint delivery.
            </p>
          </div>
          <div className="flex justify-center">
            <ShimmerButton onClick={() => navigate("contact")} className="py-3.5 px-8 text-sm font-bold">
              <span>Book a Strategy Call</span>
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </ShimmerButton>
          </div>
        </div>
      </div>
    </div>
  )
}
