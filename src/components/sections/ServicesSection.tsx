import React, { useState } from "react"
import { motion } from "framer-motion"
import { servicesData, ServiceItem } from "@/data/services"
import { ServiceCard } from "./ServiceCard"
import { ServiceDetailModal } from "@/components/modals/ServiceDetailModal"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils"

interface ServicesSectionProps {
  onSelectServiceForInquiry?: (serviceId: string) => void
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForInquiry }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenDetails = (service: ServiceItem) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
  }

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Editorial Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-accent-crimson font-mono inline-flex items-center gap-1.5"
            >
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span>Core Capabilities & Solutions</span>
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 leading-tight"
            >
              Engineered digital services built for{" "}
              <span className="text-accent-crimson font-black">
                business outcomes.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs sm:text-sm md:text-base text-zinc-600 leading-relaxed font-normal"
            >
              Whether you are launching a high-converting company website, an iOS/Android mobile app,
              or an automated backend pipeline, we deliver clean, modular, and robust technology.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex"
          >
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToSection("contact")}
              className="gap-2 text-xs font-bold bg-white hover:border-zinc-950 shadow-xs hover:scale-105 transition-all"
            >
              <span>Custom Service Inquiry</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </motion.div>
        </div>

        {/* 4 Interactive Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSelectServiceForInquiry={onSelectServiceForInquiry}
      />
    </section>
  )
}
