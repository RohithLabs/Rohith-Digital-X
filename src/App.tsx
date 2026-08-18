import { useState } from "react"
import { Navbar } from "@/components/layout/Navbar"
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
import { Footer } from "@/components/layout/Footer"
import { ScrollToTop } from "@/components/layout/ScrollToTop"
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar"
import { DetailedPackage } from "@/data/packages"

export function App() {
  const [contactPrefill, setContactPrefill] = useState<{
    service?: string
    budgetRange?: string
    description?: string
  }>({})

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
  }

  const handleDiscussSimilar = (projectTitle: string) => {
    setContactPrefill((prev) => ({
      ...prev,
      description: `I am interested in building a solution similar to "${projectTitle}". Let's discuss requirements and architecture.`,
    }))
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
  }

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] text-zinc-900 flex flex-col font-sans selection:bg-accent-crimson selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Sleek Vertical Scroll Slide Progress Bar */}
      <ScrollProgressBar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Trust & Principles Section with Technology Marquee */}
        <TrustSection />

        {/* 3. Services Section */}
        <ServicesSection onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        {/* 4. Complete Packages Section (Websites, Mobile Apps, AI Agents) */}
        <PackagesSection onSelectPackage={handleSelectPackage} />

        {/* 5. Featured Work & Blueprints Section */}
        <WorkSection onDiscussSimilar={handleDiscussSimilar} />

        {/* 6. Why Work With Rohit Digital X */}
        <WhyUsSection />

        {/* 7. 4-Step Development Process */}
        <ProcessSection />

        {/* 8. About Founder (Rohith E) & Tech Stack */}
        <AboutSection />

        {/* 9. Interactive Project Estimator */}
        <ProjectEstimator onApplyEstimate={handleApplyEstimate} />

        {/* 10. FAQ Section */}
        <FaqSection />

        {/* 11. High-Converting Contact Section */}
        <ContactSection initialFormData={contactPrefill} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll to Top */}
      <ScrollToTop />
    </div>
  )
}

export default App
