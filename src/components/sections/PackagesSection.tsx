import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  allPackagesData,
  packageCategories,
  DetailedPackage,
  PackageCategory,
} from "@/data/packages"
import {
  Check,
  ArrowRight,
  Sparkles,
  Globe,
  Smartphone,
  Bot,
  Clock,
  CheckCircle2,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { BorderBeam } from "@/components/ui/border-beam"
import { scrollToSection } from "@/lib/utils"

interface PackagesSectionProps {
  onSelectPackage?: (pkg: DetailedPackage) => void
}

const CATEGORY_ICONS: Record<PackageCategory, React.ElementType> = {
  website: Globe,
  mobile: Smartphone,
  ai: Bot,
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  const [selectedCategory, setSelectedCategory] = useState<PackageCategory>("website")

  const currentCategoryMeta =
    packageCategories.find((c) => c.id === selectedCategory) || packageCategories[0]

  const packages = allPackagesData.filter((p) => p.category === selectedCategory)

  const handleChoosePackage = (pkg: DetailedPackage) => {
    if (onSelectPackage) {
      onSelectPackage(pkg)
    }
    scrollToSection("contact")
  }

  // Generate complete, structured WhatsApp inquiry message
  const getWhatsAppUrl = (pkg: DetailedPackage) => {
    const featureBulletList = pkg.features.slice(0, 8).map((f) => `• ${f}`).join("\n")

    const message = `Hi Rohith! 👋

I want to inquire about the following package at Rohith Digital X:

📦 *Package:* ${pkg.name} (Tier ${pkg.tierNumber})
💰 *Investment:* ${pkg.price}
⏱️ *Scope:* ${pkg.pagesOrScreens} (${pkg.supportDays})
🎯 *Target:* ${pkg.idealFor}

*Key Inclusions:*
${featureBulletList}

Please let me know the kickoff process and timeline to get started!`

    return `https://wa.me/919655483130?text=${encodeURIComponent(message)}`
  }

  return (
    <section id="packages" className="py-24 bg-white border-t border-zinc-200/70 relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Clean Typography */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-crimson font-mono">
            Transparent Pricing & Production Packages
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 leading-tight">
            Tailored digital{" "}
            <span className="text-accent-crimson font-black">
              service packages.
            </span>
          </h2>
          <p className="text-base text-zinc-600 leading-relaxed font-normal">
            Clear, transparent scope and pricing designed for businesses, clinics, shops, startups, and institutions.
            Tap any package to inquire instantly on WhatsApp or book online.
          </p>
        </div>

        {/* Category Switcher Tabs with Touch Color Feedback */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex p-1.5 rounded-2xl bg-zinc-100/90 border border-zinc-200/80 shadow-xs gap-1.5 flex-wrap justify-center">
            {packageCategories.map((cat) => {
              const Icon = CATEGORY_ICONS[cat.id]
              const isSelected = selectedCategory === cat.id

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer select-none ${
                    isSelected
                      ? "bg-zinc-950 text-white shadow-sm ring-1 ring-zinc-900"
                      : "text-zinc-600 hover:text-accent-crimson hover:bg-white active:bg-red-50 active:text-accent-crimson"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isSelected ? "text-accent-crimson" : ""}`} />
                  <span>{cat.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Category Description Banner */}
        <div className="text-center mb-10 max-w-xl mx-auto">
          <p className="text-xs sm:text-sm text-zinc-500 font-medium">
            {currentCategoryMeta.subtitle}
          </p>
        </div>

        {/* 3 Packages Cards Grid with Touch / Hover Color Changing Effects */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {packages.map((pkg) => {
            const isPopular = pkg.popular
            const Icon = CATEGORY_ICONS[pkg.category]
            const whatsappUrl = getWhatsAppUrl(pkg)

            return (
              <div
                key={pkg.id}
                className={`group relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-default overflow-hidden ${
                  isPopular
                    ? "bg-zinc-950 text-white shadow-2xl ring-2 ring-accent-crimson lg:-translate-y-2 z-10 hover:shadow-crimson-md"
                    : "bg-zinc-50/90 text-zinc-900 border border-zinc-200 hover:border-accent-crimson hover:bg-white hover:shadow-card active:border-accent-crimson"
                }`}
              >
                {/* Popular Card Border Beam Animation from Magic UI */}
                {isPopular && (
                  <BorderBeam size={180} duration={7} colorFrom="#DC2626" colorTo="#EF4444" borderWidth={2} />
                )}

                {/* Popular Pill Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-accent-crimson text-white text-xs font-bold shadow-crimson-md uppercase tracking-wider">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>{pkg.badge || "Recommended"}</span>
                    </span>
                  </div>
                )}

                <div className="relative z-10">
                  {/* Top: Icon, Tier Number with Touch Color Reaction */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 ${
                        isPopular
                          ? "bg-zinc-900 border-zinc-800 text-accent-crimson group-hover:scale-105"
                          : "bg-white border-zinc-200 text-zinc-900 group-hover:border-accent-crimson group-hover:text-accent-crimson group-hover:bg-red-50/60"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span
                      className={`text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full transition-colors ${
                        isPopular
                          ? "bg-zinc-800 text-zinc-300"
                          : "bg-zinc-200/80 text-zinc-700 group-hover:bg-red-100 group-hover:text-accent-crimson"
                      }`}
                    >
                      Tier {pkg.tierNumber}
                    </span>
                  </div>

                  <h3
                    className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                      isPopular ? "text-white" : "text-zinc-950 group-hover:text-accent-crimson"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className={`text-xs font-semibold mt-1 mb-4 ${
                      isPopular ? "text-red-400" : "text-accent-crimson"
                    }`}
                  >
                    {pkg.tagline}
                  </p>

                  {/* Price Tag with Touch Color Reaction */}
                  <div className="flex items-baseline gap-2 pb-4 mb-5 border-b border-zinc-200/60 dark:border-zinc-800">
                    <span
                      className={`text-3xl sm:text-4xl font-extrabold tracking-tight transition-colors ${
                        isPopular ? "text-white" : "text-zinc-950 group-hover:text-zinc-950"
                      }`}
                    >
                      {pkg.price}
                    </span>
                    <span
                      className={`text-xs font-medium ${
                        isPopular ? "text-zinc-400" : "text-zinc-500"
                      }`}
                    >
                      investment
                    </span>
                  </div>

                  {/* Scope & Delivery Info Pills with Touch Color Feedback */}
                  <div className="space-y-2 mb-5">
                    <div
                      className={`flex items-center gap-2 p-2.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                        isPopular
                          ? "bg-zinc-900 text-zinc-200 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700"
                          : "bg-white text-zinc-800 border border-zinc-200 hover:border-red-200 hover:bg-red-50/60 hover:text-accent-crimson"
                      }`}
                    >
                      <Clock className="h-3.5 w-3.5 text-accent-crimson shrink-0" />
                      <span>Scope: {pkg.pagesOrScreens}</span>
                    </div>

                    <div
                      className={`flex items-center gap-2 p-2.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                        isPopular
                          ? "bg-zinc-900 text-emerald-400 border border-zinc-800 hover:bg-zinc-800"
                          : "bg-white text-emerald-700 border border-zinc-200 hover:border-emerald-300 hover:bg-emerald-50/60"
                      }`}
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                      <span>{pkg.supportDays}</span>
                    </div>
                  </div>

                  {/* Perfect For Box with Hover/Touch Highlight */}
                  <div
                    className={`p-3.5 rounded-xl mb-6 text-xs transition-all duration-200 ${
                      isPopular
                        ? "bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-850 hover:border-zinc-700"
                        : "bg-white border border-zinc-200 text-zinc-700 hover:border-red-200 hover:bg-red-50/30"
                    }`}
                  >
                    <span className="font-bold block mb-1">Perfect For:</span>
                    <p className="leading-relaxed">{pkg.idealFor}</p>
                  </div>

                  {/* Features List with Micro-Hover & Touch Color Shift */}
                  <div className="space-y-2.5 mb-6">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider block mb-2 ${
                        isPopular ? "text-zinc-400" : "text-zinc-500"
                      }`}
                    >
                      Included In This Package:
                    </span>
                    <ul className="space-y-2 text-xs">
                      {pkg.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className={`flex items-start gap-2 p-1 rounded-md transition-colors duration-150 ${
                            isPopular
                              ? "hover:bg-zinc-900 hover:text-white"
                              : "hover:bg-red-50/70 hover:text-accent-crimson"
                          }`}
                        >
                          <Check
                            className={`h-4 w-4 shrink-0 mt-0.5 transition-transform duration-150 hover:scale-125 ${
                              isPopular ? "text-accent-crimson" : "text-accent-crimson"
                            }`}
                          />
                          <span
                            className={`leading-relaxed ${
                              isPopular ? "text-zinc-300" : "text-zinc-700"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Examples (if applicable) */}
                  {pkg.examples && pkg.examples.length > 0 && (
                    <div
                      className={`p-3.5 rounded-xl mb-6 text-xs transition-colors ${
                        isPopular
                          ? "bg-zinc-900/90 border border-zinc-800 text-zinc-300 hover:border-zinc-700"
                          : "bg-white border border-zinc-200 text-zinc-700 hover:border-red-200"
                      }`}
                    >
                      <span className="font-bold block mb-1.5 text-accent-crimson">
                        Practical Use-Cases:
                      </span>
                      <ul className="space-y-1 text-[11px]">
                        {pkg.examples.map((ex, exIdx) => (
                          <li key={exIdx} className="flex items-center gap-1.5">
                            <span className="h-1 w-1 rounded-full bg-accent-crimson" />
                            <span>{ex}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Not Included Notes (if applicable) */}
                  {pkg.notIncluded && pkg.notIncluded.length > 0 && (
                    <div
                      className={`p-3.5 rounded-xl mb-6 text-[11px] ${
                        isPopular
                          ? "bg-zinc-900/60 border border-zinc-800 text-zinc-400"
                          : "bg-red-50/40 border border-red-100 text-zinc-600"
                      }`}
                    >
                      <span className="font-bold block mb-1 text-zinc-700 dark:text-zinc-300">
                        Excluded / Available as Add-ons:
                      </span>
                      <ul className="space-y-0.5">
                        {pkg.notIncluded.map((item, nIdx) => (
                          <li key={nIdx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Card Bottom: WhatsApp Direct & Online Booking CTAs */}
                <div className="relative z-10 pt-4 border-t border-zinc-200/60 dark:border-zinc-800 space-y-2.5">
                  
                  {/* Primary WhatsApp Action with Complete Pre-filled Information */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-sm transition-all duration-200 cursor-pointer"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0 fill-current" />
                    <span>Inquire on WhatsApp ({pkg.price})</span>
                  </a>

                  {/* Secondary Online Customization CTA */}
                  <Button
                    variant={isPopular ? "outline" : "default"}
                    size="sm"
                    onClick={() => handleChoosePackage(pkg)}
                    className={`w-full justify-center gap-2 text-xs font-bold ${
                      isPopular
                        ? "bg-zinc-900 text-white border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600"
                        : "bg-zinc-950 text-white hover:bg-zinc-900"
                    }`}
                  >
                    <span>Customize Online & Book</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>

                  <p
                    className={`text-[10px] leading-relaxed text-center pt-1 ${
                      isPopular ? "text-zinc-400" : "text-zinc-500"
                    }`}
                  >
                    {pkg.thirdPartyNotes}
                  </p>
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* Third-Party Service Note Box */}
        <div className="mt-14 p-5 rounded-2xl bg-zinc-50 border border-zinc-200 text-center max-w-3xl mx-auto text-xs text-zinc-600 space-y-1">
          <p className="font-semibold text-zinc-900">
            Transparent Pricing & Direct WhatsApp Kickoff:
          </p>
          <p>
            Tap any WhatsApp button above to instantly open a pre-filled chat with founder Rohith E with all package specs and milestones.
          </p>
        </div>

      </div>
    </section>
  )
}
