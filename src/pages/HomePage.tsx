import React from "react"
import { HeroSection } from "@/components/sections/HeroSection"
import { TrustSection } from "@/components/sections/TrustSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { PackagesSection } from "@/components/sections/PackagesSection"
import { WorkSection } from "@/components/sections/WorkSection"
import { WhyUsSection } from "@/components/sections/WhyUsSection"
import { ProcessSection } from "@/components/sections/ProcessSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { ProjectEstimator } from "@/components/sections/ProjectEstimator"
import { FaqSection } from "@/components/sections/FaqSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { DetailedPackage } from "@/data/packages"
import { useNavigation } from "@/context/NavigationContext"

export const HomePage: React.FC = () => {
  const { contactPrefill, setContactPrefill, navigate } = useNavigation()

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

  const handleDiscussSimilar = (projectTitle: string) => {
    setContactPrefill((prev) => ({
      ...prev,
      description: `I am interested in building a solution similar to "${projectTitle}". Let's discuss requirements and architecture.`,
    }))
    navigate("contact", "contact")
  }

  const handleApplyEstimate = (estimateData: {
    service: string
    budgetRange: string
    features: string[]
    description: string
  }) => {
    setContactPrefill({
      service: estimateData.service,
      budgetRange: estimateData.budgetRange,
      description: estimateData.description,
    })
    navigate("contact", "contact")
  }

  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesSection onSelectServiceForInquiry={handleSelectServiceForInquiry} />
      <PackagesSection onSelectPackage={handleSelectPackage} />
      <WhyUsSection />
      <ProcessSection />
      <WorkSection onDiscussSimilar={handleDiscussSimilar} />
      <AboutSection />
      <ProjectEstimator onApplyEstimate={handleApplyEstimate} />
      <FaqSection />
      <ContactSection initialFormData={contactPrefill} />
    </>
  )
}
