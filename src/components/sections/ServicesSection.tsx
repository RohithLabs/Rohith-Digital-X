import React, { useState } from "react"
import { servicesData, ServiceItem } from "@/data/services"
import { ServiceCard } from "./ServiceCard"
import { ServiceDetailModal } from "@/components/modals/ServiceDetailModal"
import { ArrowRight } from "lucide-react"
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
    <section id="services" className="py-24 bg-[#FAFAFA] relative">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Editorial Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-crimson font-mono">
              Core Capabilities & Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 editorial-title">
              Engineered digital services built for{" "}
              <span className="font-editorial italic font-normal text-accent-crimson">
                business outcomes.
              </span>
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed font-normal">
              Whether you are launching a new company website, an iOS/Android mobile app,
              or an automated backend pipeline, we deliver clean and robust technology.
            </p>
          </div>

          <div className="hidden md:flex">
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToSection("contact")}
              className="gap-2 text-xs font-bold bg-white hover:border-zinc-950"
            >
              <span>Custom Service Inquiry</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
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
