import React from "react"
import { motion } from "framer-motion"
import { ContactSection } from "@/components/sections/ContactSection"
import { useNavigation } from "@/context/NavigationContext"

export const ContactPage: React.FC = () => {
  const { contactPrefill } = useNavigation()

  return (
    <div className="pt-24 sm:pt-32 pb-20 space-y-12">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-zinc-600"
        >
          <span className="text-accent-crimson font-black text-sm">✦</span>
          <span>INITIATE PROJECT SPRINT</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] text-zinc-950 font-display"
        >
          Let's build together<span className="text-accent-crimson">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-zinc-600 max-w-xl mx-auto font-normal leading-relaxed"
        >
          Share your project requirements for a detailed scope breakdown, transparent quote, and architecture plan within 24 hours.
        </motion.p>
      </div>

      <ContactSection initialFormData={contactPrefill} />
    </div>
  )
}
