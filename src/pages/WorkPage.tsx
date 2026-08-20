import React from "react"
import { motion } from "framer-motion"
import { WorkSection } from "@/components/sections/WorkSection"
import { useNavigation } from "@/context/NavigationContext"

export const WorkPage: React.FC = () => {
  const { setContactPrefill, navigate } = useNavigation()

  const handleDiscussSimilar = (projectTitle: string) => {
    setContactPrefill((prev) => ({
      ...prev,
      description: `I am interested in building a solution similar to "${projectTitle}". Let's discuss requirements and architecture.`,
    }))
    navigate("contact", "contact")
  }

  return (
    <div className="pt-24 sm:pt-32 pb-20 space-y-12">
      {/* Top Page Header */}
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-zinc-600"
        >
          <span className="text-accent-crimson font-black text-sm">✦</span>
          <span>SELECTED CASE STUDIES</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] text-zinc-950 font-display"
        >
          crafting the finest of all<span className="text-accent-crimson">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Explore our production architectures across clinical management systems, local retail storefronts, on-demand field apps, and AI agents.
        </motion.p>
      </div>

      {/* Main Work Section */}
      <WorkSection onDiscussSimilar={handleDiscussSimilar} />
    </div>
  )
}
