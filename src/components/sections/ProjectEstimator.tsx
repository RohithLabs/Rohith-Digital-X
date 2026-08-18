import React, { useState, useMemo } from "react"
import { Calculator, Check, ArrowRight, Clock, Sliders, PackageCheck, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { scrollToSection } from "@/lib/utils"

interface ProjectEstimatorProps {
  onApplyEstimate?: (estimateData: {
    service: string
    budgetRange: string
    features: string[]
    description: string
  }) => void
}

const PRESET_PACKAGES = [
  {
    id: "pkg-web-1",
    name: "Starter Landing Page",
    category: "Business Website",
    tier: "Pack 01",
    price: 5000,
    priceLabel: "₹5,000",
    weeks: "1 to 2 Weeks",
    popular: false,
    description: "1-Page high conversion layout, enquiry form, WhatsApp, Maps & SEO",
  },
  {
    id: "pkg-web-2",
    name: "Professional Business Website",
    category: "Business Website",
    tier: "Pack 02",
    price: 15000,
    priceLabel: "₹15,000",
    weeks: "2 to 3 Weeks",
    popular: true,
    description: "5–6 Custom Pages, UI/UX, contact capture, WhatsApp, maps & optional blog",
  },
  {
    id: "pkg-web-3",
    name: "Complete E-Commerce Website",
    category: "Business Website",
    tier: "Pack 03",
    price: 50000,
    priceLabel: "₹50,000",
    weeks: "3 to 4 Weeks",
    popular: false,
    description: "Full store, payments, customer accounts, order & inventory management",
  },
  {
    id: "pkg-mob-1",
    name: "App Starter (Android)",
    category: "Mobile App",
    tier: "Pack 01",
    price: 30000,
    priceLabel: "₹30,000",
    weeks: "3 to 4 Weeks",
    popular: false,
    description: "Android application, 8–10 screens, product catalog & Play Store prep",
  },
  {
    id: "pkg-mob-2",
    name: "Professional Business App",
    category: "Mobile App",
    tier: "Pack 02",
    price: 70000,
    priceLabel: "₹70,000",
    weeks: "4 to 6 Weeks",
    popular: true,
    description: "Android + iOS, auth, database, push notifications & admin panel",
  },
  {
    id: "pkg-ai-1",
    name: "AI Starter Agent",
    category: "AI Automation",
    tier: "Pack 01",
    price: 20000,
    priceLabel: "₹20,000",
    weeks: "1 to 2 Weeks",
    popular: false,
    description: "Website chatbot, business FAQ knowledge base & automated lead alerts",
  },
  {
    id: "pkg-ai-2",
    name: "AI Business Automation",
    category: "AI Automation",
    tier: "Pack 02",
    price: 60000,
    priceLabel: "₹60,000",
    weeks: "3 to 4 Weeks",
    popular: false,
    description: "Web + WhatsApp AI agent, CRM & Google Sheets sync, booking flow",
  },
]

const SERVICE_TYPES = [
  { id: "website", label: "Business Website", basePrice: 5000, baseWeeks: 1, icon: "🌐" },
  { id: "mobile", label: "Mobile App (Android / iOS)", basePrice: 30000, baseWeeks: 3, icon: "📱" },
  { id: "backend", label: "Backend, APIs & Cloud DB", basePrice: 25000, baseWeeks: 3, icon: "⚙️" },
  { id: "ai", label: "AI Chatbot & Automation Agent", basePrice: 20000, baseWeeks: 2, icon: "🤖" },
  { id: "fullstack", label: "Full-Stack Custom Platform", basePrice: 50000, baseWeeks: 4, icon: "🚀" },
]

const FEATURE_ADDONS = [
  { id: "auth", label: "User Auth & Roles (JWT / OTP)", price: 5000, days: 3 },
  { id: "admin", label: "Custom Admin Dashboard", price: 8000, days: 4 },
  { id: "booking", label: "Appointment / Booking Engine", price: 6000, days: 3 },
  { id: "whatsapp", label: "WhatsApp / Email Notifications", price: 3000, days: 2 },
  { id: "payments", label: "Online Payment Gateway Integration", price: 5000, days: 3 },
  { id: "seo", label: "Advanced SEO & Speed Optimization", price: 3000, days: 2 },
]

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onApplyEstimate }) => {
  // Estimator Mode: "packages" (Preset Pack 1, 2, 3) vs "custom" (Modular Builder)
  const [estimateMode, setEstimateMode] = useState<"packages" | "custom">("packages")

  // Preset Selection State
  const [selectedPresetId, setSelectedPresetId] = useState<string>("pkg-web-2")

  // Custom Modular State
  const [selectedService, setSelectedService] = useState<string>("website")
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [timelineUrgency, setTimelineUrgency] = useState<"standard" | "urgent">("standard")

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId) ? prev.filter((id) => id !== featureId) : [...prev, featureId]
    )
  }

  const activePreset = PRESET_PACKAGES.find((p) => p.id === selectedPresetId) || PRESET_PACKAGES[1]
  const currentService = SERVICE_TYPES.find((s) => s.id === selectedService) || SERVICE_TYPES[0]

  // Calculation for Custom Mode
  const customCalculation = useMemo(() => {
    let total = currentService.basePrice
    let days = currentService.baseWeeks * 7

    selectedFeatures.forEach((fId) => {
      const addon = FEATURE_ADDONS.find((f) => f.id === fId)
      if (addon) {
        total += addon.price
        days += addon.days
      }
    })

    if (timelineUrgency === "urgent") {
      total = Math.round(total * 1.15)
      days = Math.max(Math.round(days * 0.75), 4)
    }

    const estimatedWeeks = Math.max(1, Math.ceil(days / 7))
    
    let budgetBracket = "< ₹25,000"
    if (total < 25000) budgetBracket = "< ₹25,000"
    else if (total <= 50000) budgetBracket = "₹25,000 - ₹50,000"
    else if (total <= 100000) budgetBracket = "₹50,000 - ₹1,00,000"
    else budgetBracket = "₹1,00,000+"

    return {
      total,
      priceRange: `₹${total.toLocaleString("en-IN", { maximumFractionDigits: 0 })} – ₹${Math.round(
        total * 1.25
      ).toLocaleString("en-IN", { maximumFractionDigits: 0 })}`,
      timeline: `${estimatedWeeks} to ${estimatedWeeks + 1} Weeks`,
      budgetBracket,
    }
  }, [currentService, selectedFeatures, timelineUrgency])

  const handleApply = () => {
    if (estimateMode === "packages") {
      let budgetBracket = "< ₹25,000"
      if (activePreset.price >= 100000) budgetBracket = "₹1,00,000+"
      else if (activePreset.price >= 50000) budgetBracket = "₹50,000 - ₹1,00,000"
      else if (activePreset.price >= 25000) budgetBracket = "₹25,000 - ₹50,000"

      const summaryText = `Selected ${activePreset.name} (${activePreset.priceLabel} • ${activePreset.tier}). Scope: ${activePreset.description}.`

      if (onApplyEstimate) {
        onApplyEstimate({
          service: activePreset.category,
          budgetRange: budgetBracket,
          features: [activePreset.tier, activePreset.name],
          description: summaryText,
        })
      }
    } else {
      const featureLabels = selectedFeatures.map(
        (fId) => FEATURE_ADDONS.find((f) => f.id === fId)?.label || fId
      )
      
      const summaryText = `Inquiry for ${currentService.label} with estimated investment of ${customCalculation.priceRange} (${customCalculation.timeline}). Selected add-ons: ${featureLabels.length > 0 ? featureLabels.join(", ") : "Standard baseline"}.`

      if (onApplyEstimate) {
        onApplyEstimate({
          service: currentService.label,
          budgetRange: customCalculation.budgetBracket,
          features: featureLabels,
          description: summaryText,
        })
      }
    }

    scrollToSection("contact")
  }

  // Generate WhatsApp message for Estimator
  const getEstimatorWhatsAppUrl = () => {
    let text = ""
    if (estimateMode === "packages") {
      text = `Hi Rohith! 👋

I configured the following package on the Rohith Digital X estimator:

📦 *Package:* ${activePreset.name} (${activePreset.tier})
💰 *Estimated Price:* ${activePreset.priceLabel}
⏱️ *Timeline:* ${activePreset.weeks}
📌 *Scope:* ${activePreset.description}

Please let me know how we can proceed with kickoff!`
    } else {
      const featureLabels = selectedFeatures.map(
        (fId) => FEATURE_ADDONS.find((f) => f.id === fId)?.label || fId
      )
      text = `Hi Rohith! 👋

I built a custom project scope on the Rohith Digital X estimator:

🎯 *Service Offering:* ${currentService.label}
💰 *Estimated Investment:* ${customCalculation.priceRange}
⏱️ *Estimated Delivery:* ${customCalculation.timeline} (${timelineUrgency} pace)
⚙️ *Selected Add-ons:* ${featureLabels.length > 0 ? featureLabels.join(", ") : "Standard Baseline"}

Please let me know how we can discuss requirements and schedule a kickoff call!`
    }

    return `https://wa.me/919655483130?text=${encodeURIComponent(text)}`
  }

  return (
    <section id="estimator" className="py-24 bg-white border-t border-zinc-200/70 relative">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Clean Typography */}
        <div className="max-w-3xl mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-crimson font-mono">
            Interactive Scope & Investment Estimator
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 leading-tight">
            Calculate your scope &{" "}
            <span className="text-accent-crimson font-black">
              estimated investment.
            </span>
          </h2>
          <p className="text-base text-zinc-600 leading-relaxed font-normal">
            Choose a standard turnkey package (Pack 1, 2, 3) or build a custom modular scope with your exact feature checklist.
          </p>
        </div>

        {/* Mode Selector Tabs with Touch Hover Color Shift */}
        <div className="flex mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-zinc-100 border border-zinc-200/80 shadow-xs gap-1.5">
            <button
              onClick={() => setEstimateMode("packages")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                estimateMode === "packages"
                  ? "bg-zinc-950 text-white shadow-sm ring-1 ring-zinc-900"
                  : "text-zinc-600 hover:text-accent-crimson hover:bg-white active:bg-red-50 active:text-accent-crimson"
              }`}
            >
              <PackageCheck className="h-4 w-4 text-accent-crimson" />
              <span>Standard Package Selection (Pack 1, 2, 3)</span>
            </button>

            <button
              onClick={() => setEstimateMode("custom")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                estimateMode === "custom"
                  ? "bg-zinc-950 text-white shadow-sm ring-1 ring-zinc-900"
                  : "text-zinc-600 hover:text-accent-crimson hover:bg-white active:bg-red-50 active:text-accent-crimson"
              }`}
            >
              <Sliders className="h-4 w-4 text-accent-crimson" />
              <span>Custom Modular Builder</span>
            </button>
          </div>
        </div>

        {/* Interactive Estimator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* OPTION A: PRESET PACKAGES LIST */}
            {estimateMode === "packages" && (
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-900 flex items-center justify-between">
                  <span>Select a Pre-Configured Package</span>
                  <span className="text-zinc-400 font-mono text-[11px]">Instant Pricing</span>
                </label>

                <div className="grid grid-cols-1 gap-3">
                  {PRESET_PACKAGES.map((pkg) => {
                    const isSelected = selectedPresetId === pkg.id
                    return (
                      <div
                        key={pkg.id}
                        onClick={() => setSelectedPresetId(pkg.id)}
                        className={`group p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                          isSelected
                            ? "bg-zinc-950 text-white border-zinc-900 shadow-lg ring-2 ring-accent-crimson"
                            : "bg-zinc-50/90 text-zinc-900 border-zinc-200 hover:border-accent-crimson hover:bg-white active:border-accent-crimson"
                        }`}
                      >
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded transition-colors ${
                                isSelected ? "bg-zinc-800 text-accent-crimson" : "bg-zinc-200 text-zinc-700 group-hover:bg-red-100 group-hover:text-accent-crimson"
                              }`}
                            >
                              {pkg.tier}
                            </span>
                            <span className="text-xs font-semibold text-zinc-400">
                              {pkg.category}
                            </span>
                            {pkg.popular && (
                              <span className="text-[10px] font-bold bg-accent-crimson text-white px-2 py-0.5 rounded-full">
                                Popular
                              </span>
                            )}
                          </div>
                          <h4 className={`text-base font-bold transition-colors ${isSelected ? "text-white" : "text-zinc-950 group-hover:text-accent-crimson"}`}>
                            {pkg.name}
                          </h4>
                          <p className={`text-xs ${isSelected ? "text-zinc-300" : "text-zinc-500"}`}>
                            {pkg.description}
                          </p>
                        </div>

                        <div className="text-left sm:text-right shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-zinc-200 dark:border-zinc-800">
                          <div className={`text-xl sm:text-2xl font-extrabold tracking-tight ${isSelected ? "text-white" : "text-zinc-950"}`}>
                            {pkg.priceLabel}
                          </div>
                          <div className={`text-[11px] font-medium ${isSelected ? "text-emerald-400" : "text-zinc-500"}`}>
                            ~{pkg.weeks}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* OPTION B: CUSTOM MODULAR BUILDER */}
            {estimateMode === "custom" && (
              <div className="space-y-6">
                {/* Step 1: Select Service Type */}
                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-900 flex items-center justify-between">
                    <span>1. Select Primary Service Type</span>
                    <span className="text-zinc-400 font-mono">Required</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {SERVICE_TYPES.map((service) => {
                      const isSelected = selectedService === service.id
                      return (
                        <button
                          key={service.id}
                          onClick={() => setSelectedService(service.id)}
                          className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                            isSelected
                              ? "bg-white border-zinc-900 shadow-sm ring-1 ring-zinc-900"
                              : "bg-white/80 border-zinc-200 hover:border-accent-crimson hover:bg-white active:bg-red-50"
                          }`}
                        >
                          <span className="text-xl">{service.icon}</span>
                          <div className="flex-1">
                            <div className="text-xs font-bold text-zinc-900">{service.label}</div>
                            <div className="text-[11px] text-zinc-500">From ₹{service.basePrice.toLocaleString("en-IN")}</div>
                          </div>
                          {isSelected && (
                            <span className="h-2 w-2 rounded-full bg-accent-crimson shrink-0" />
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Step 2: Select Feature Add-ons */}
                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-900 flex items-center justify-between">
                    <span>2. Select Key Feature Add-ons</span>
                    <span className="text-zinc-400 font-mono">Optional</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {FEATURE_ADDONS.map((addon) => {
                      const isChecked = selectedFeatures.includes(addon.id)
                      return (
                        <button
                          key={addon.id}
                          onClick={() => toggleFeature(addon.id)}
                          className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                            isChecked
                              ? "bg-white border-red-300 shadow-xs ring-1 ring-red-300"
                              : "bg-white/80 border-zinc-200 hover:border-accent-crimson hover:bg-white active:bg-red-50"
                          }`}
                        >
                          <div
                            className={`h-5 w-5 rounded-md flex items-center justify-center border transition-colors ${
                              isChecked
                                ? "bg-accent-crimson border-accent-crimson text-white"
                                : "bg-zinc-100 border-zinc-300 text-transparent"
                            }`}
                          >
                            <Check className="h-3.5 w-3.5 stroke-[3]" />
                          </div>
                          <div className="flex-1">
                            <span className="text-xs font-medium text-zinc-800 leading-snug block">
                              {addon.label}
                            </span>
                            <span className="text-[10px] text-zinc-400 font-mono">
                              +₹{addon.price.toLocaleString("en-IN")}
                            </span>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Step 3: Timeline Urgency */}
                <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                      3. Timeline Preference
                    </h4>
                    <p className="text-xs text-zinc-500">
                      Standard milestone delivery vs expedited sprint
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setTimelineUrgency("standard")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                        timelineUrgency === "standard"
                          ? "bg-zinc-900 text-white border-zinc-900"
                          : "bg-white text-zinc-700 border-zinc-300 hover:bg-zinc-50"
                      }`}
                    >
                      Standard
                    </button>
                    <button
                      onClick={() => setTimelineUrgency("urgent")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                        timelineUrgency === "urgent"
                          ? "bg-accent-crimson text-white border-accent-crimson"
                          : "bg-white text-zinc-700 border-zinc-300 hover:bg-zinc-50"
                      }`}
                    >
                      Fast-Track (+15%)
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Estimate Summary Column */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950 text-white shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-accent-crimson" />
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-300">
                    Estimate Summary
                  </span>
                </div>
                <Badge variant="dark" className="text-[10px] bg-zinc-800 text-zinc-300 border-zinc-700">
                  {estimateMode === "packages" ? "Turnkey Package" : "Custom Scope"}
                </Badge>
              </div>

              {/* Service & Addons Selected */}
              <div className="space-y-3">
                {estimateMode === "packages" ? (
                  <>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-zinc-400">Selected Package:</span>
                      <span className="font-bold text-white">{activePreset.name}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-zinc-400">Package Tier:</span>
                      <span className="font-bold text-accent-crimson">{activePreset.tier}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-zinc-400">Category:</span>
                      <span className="font-bold text-white">{activePreset.category}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-zinc-400">Selected Offering:</span>
                      <span className="font-bold text-white">{currentService.label}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-zinc-400">Add-on Features:</span>
                      <span className="font-bold text-white">{selectedFeatures.length} selected</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-zinc-400">Timeline Pace:</span>
                      <span className="font-bold text-white capitalize">{timelineUrgency}</span>
                    </div>
                  </>
                )}
              </div>

              {/* Calculated Ballpark Investment */}
              <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                  Estimated Investment
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {estimateMode === "packages" ? activePreset.priceLabel : customCalculation.priceRange}
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium pt-1">
                  <Clock className="h-3.5 w-3.5 text-accent-crimson" />
                  <span>
                    Estimated Delivery:{" "}
                    {estimateMode === "packages" ? activePreset.weeks : customCalculation.timeline}
                  </span>
                </div>
              </div>

              <div className="text-[11px] text-zinc-400 leading-relaxed space-y-1">
                <p>
                  * Transparent rates for production-grade engineering. Final proposals are finalized with transparent milestone roadmaps.
                </p>
              </div>

              {/* Action Buttons: WhatsApp Direct & Online Form */}
              <div className="space-y-2.5 pt-1">
                <a
                  href={getEstimatorWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-sm transition-all duration-200 cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 fill-current" />
                  <span>Send Estimate to WhatsApp</span>
                </a>

                <Button
                  variant="crimson"
                  size="default"
                  onClick={handleApply}
                  className="w-full gap-2 text-xs sm:text-sm font-bold shadow-crimson-md justify-center"
                >
                  <span>Apply Estimate to Online Form</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
