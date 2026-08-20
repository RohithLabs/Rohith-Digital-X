import React from "react"
import { motion } from "framer-motion"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { ProcessSection } from "@/components/sections/ProcessSection"
import { useNavigation } from "@/context/NavigationContext"

export const ServicesPage: React.FC = () => {
  const { setContactPrefill, navigate } = useNavigation()

  const handleSelectServiceForInquiry = (serviceId: string) => {
    let serviceName = "Business Website Development"
    if (serviceId === "mobile-apps") serviceName = "Mobile App Development"
    if (serviceId === "backend-systems") serviceName = "Backend, Storage & Authentication"
    if (serviceId === "ai-automation") serviceName = "AI Automation Agents"

    setContactPrefill((prev) => ({
      ...prev,
      service: serviceName,
      description: `Inquiry regarding ${serviceName}. Please provide scope consultation.`,
    }))
    navigate("contact", "contact")
  }

  return (
    <div className="pt-24 sm:pt-32 pb-20 space-y-12">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-zinc-600"
        >
          <span className="text-accent-crimson font-black text-sm">✦</span>
          <span>CAPABILITIES & ARCHITECTURE</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] text-zinc-950 font-display"
        >
          Engineered for scale<span className="text-accent-crimson">.</span> Built for speed<span className="text-accent-crimson">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          From conversion-focused React frontends to robust Spring Boot backends and custom AI agent workflows.
        </motion.p>
      </div>

      <ServicesSection onSelectServiceForInquiry={handleSelectServiceForInquiry} />
      <ProcessSection />
    </div>
  )
}
