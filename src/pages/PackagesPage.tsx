import React from "react"
import { motion } from "framer-motion"
import { PackagesSection } from "@/components/sections/PackagesSection"
import { FaqSection } from "@/components/sections/FaqSection"
import { DetailedPackage } from "@/data/packages"
import { useNavigation } from "@/context/NavigationContext"

export const PackagesPage: React.FC = () => {
  const { setContactPrefill, navigate } = useNavigation()

  const handleSelectPackage = (pkg: DetailedPackage) => {
    let serviceName = "Business Website Development"
    if (pkg.category === "mobile") serviceName = "Mobile App Development"
    if (pkg.category === "ai") serviceName = "AI Automation Agents"

    let budget = "< ₹25,000"
    if (pkg.numericPrice >= 100000) {
      budget = "₹1,00,000+"
    } else if (pkg.numericPrice >= 50000) {
      budget = "₹50,000 - ₹1,00,000"
    } else if (pkg.numericPrice >= 25000) {
      budget = "₹25,000 - ₹50,000"
    }

    setContactPrefill({
      service: serviceName,
      budgetRange: budget,
      description: `I would like to proceed with the "${pkg.name}" package (${pkg.price} • Tier ${pkg.tierNumber}). Please connect to initiate discovery and project planning.`,
    })
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
          <span>TRANSPARENT ENGAGEMENT TIERS</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] text-zinc-950 font-display"
        >
          Clear packages<span className="text-accent-crimson">.</span> No hidden fees<span className="text-accent-crimson">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Flat, predictable pricing with full source code ownership, rapid turnaround, and dedicated founder sprints.
        </motion.p>
      </div>

      {/* Main Packages Component */}
      <PackagesSection onSelectPackage={handleSelectPackage} />

      {/* FAQ Component */}
      <FaqSection />
    </div>
  )
}
