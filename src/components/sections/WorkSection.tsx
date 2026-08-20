import React, { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { projectsData, ProjectItem } from "@/data/projects"
import { ProjectDetailModal } from "@/components/modals/ProjectDetailModal"
import { DeviceMockup } from "@/components/ui/device-mockup"
import { ArrowUpRight, Sparkles, Activity, Layers, Laptop, Smartphone, Bot, Server } from "lucide-react"

interface WorkSectionProps {
  onDiscussSimilar?: (projectTitle: string) => void
}

interface StackedCardItem {
  id: string
  title: string
  brandName: string
  tagline: string
  tags: string[]
  description: string
  bgColor: string
  borderColor: string
  deviceType: "laptop" | "phone"
  variant: "carepulse" | "novamarket" | "servicelink" | "securecore" | "agentx"
  fullProject: ProjectItem
}

const STACKED_PROJECTS: StackedCardItem[] = [
  {
    id: "healthcare-portal",
    brandName: "CarePulse",
    title: "Healthcare Clinic & Patient Appointment Engine",
    tagline: "CLINIC & DOCTOR APPOINTMENTS",
    tags: ["WEB DEVELOPMENT", "PATIENT PORTAL", "WHATSAPP SYNC", "CALENDAR ENGINE"],
    description:
      "Custom high-speed patient scheduling and private clinic platform designed to eliminate no-shows with instant WhatsApp and SMS confirmation webhooks.",
    bgColor: "bg-[#FFF9EA]",
    borderColor: "border-[#F2E4C2]",
    deviceType: "laptop",
    variant: "carepulse",
    fullProject: projectsData[0],
  },
  {
    id: "retail-storefront",
    brandName: "NovaMarket",
    title: "Local Retail & Supermarket Catalog Platform",
    tagline: "E-COMMERCE & LOCAL RETAIL",
    tags: ["WEB DEVELOPMENT", "LOCAL BRAND", "E-COMMERCE", "1-CLICK WHATSAPP CART"],
    description:
      "Lightweight, ultra-responsive digital storefront for retail shops and supermarkets. Features sub-second product search and direct-to-owner WhatsApp cart checkout.",
    bgColor: "bg-[#ECF7EE]",
    borderColor: "border-[#D1EADC]",
    deviceType: "laptop",
    variant: "novamarket",
    fullProject: projectsData[1],
  },
  {
    id: "field-service-app",
    brandName: "ServiceLink",
    title: "On-Demand Field Technician & Dispatch Mobile App",
    tagline: "NATIVE MOBILE APPS",
    tags: ["REACT NATIVE", "JOB DISPATCH", "IOS & ANDROID", "INVOICE GENERATION"],
    description:
      "Dual-interface native mobile application for home services and field operations. Includes real-time technician GPS tracking, dispatch queue, and instant billing.",
    bgColor: "bg-[#FDF0EB]",
    borderColor: "border-[#F7D8CC]",
    deviceType: "phone",
    variant: "servicelink",
    fullProject: projectsData[2],
  },
  {
    id: "spring-enterprise-auth",
    brandName: "SecureCore",
    title: "Enterprise Auth Gateway & Role-Based API Infrastructure",
    tagline: "CLOUD & BACKEND ARCHITECTURE",
    tags: ["JAVA SPRING BOOT", "JWT SECURITY", "POSTGRESQL", "HIGH CONCURRENCY"],
    description:
      "Production-grade backend authentication and microservices gateway. Features Ed25519 token rotation, RBAC role hierarchies, and sub-20ms database queries.",
    bgColor: "bg-[#EDF5FB]",
    borderColor: "border-[#D6E7F6]",
    deviceType: "laptop",
    variant: "securecore",
    fullProject: projectsData[3],
  },
  {
    id: "ai-lead-assistant",
    brandName: "AgentX",
    title: "24/7 AI Lead Qualification & Customer Support Agent",
    tagline: "AI AUTOMATION & RAG",
    tags: ["AI AUTOMATION", "GEMINI / OPENAI", "RAG PIPELINE", "LEAD CAPTURE"],
    description:
      "Trained conversational AI agent embedded on client websites and WhatsApp. Qualifies incoming leads, answers complex FAQs with RAG precision, and syncs directly to CRM.",
    bgColor: "bg-[#F5EFFB]",
    borderColor: "border-[#E4D5F8]",
    deviceType: "laptop",
    variant: "agentx",
    fullProject: projectsData[4],
  },
]

// Single Card with Scroll Stacking & Parallax Transform
const StackedCard: React.FC<{
  card: StackedCardItem
  index: number
  total: number
  onOpenModal: (project: ProjectItem) => void
}> = ({ card, index, total, onOpenModal }) => {
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={cardRef}
      className="sticky top-24 sm:top-28 mb-8 sm:mb-12"
      style={{
        zIndex: index + 1,
      }}
    >
      <div
        className={`relative rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border ${card.borderColor} ${card.bgColor} shadow-2xl transition-all duration-300 overflow-hidden`}
      >
        {/* Subtle decorative watermark */}
        <div className="absolute top-4 right-8 font-mono text-[90px] sm:text-[140px] font-black text-black/[0.02] select-none pointer-events-none leading-none">
          0{index + 1}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Project Details */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            
            {/* Tagline / Categories with Diamond Separators */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-zinc-600">
              {card.tags.map((tag, tIdx) => (
                <React.Fragment key={tIdx}>
                  <span className="hover:text-zinc-950 transition-colors">{tag}</span>
                  {tIdx < card.tags.length - 1 && (
                    <span className="text-accent-crimson font-black">✦</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Brand Title with Crimson Period */}
            <div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950 leading-tight">
                {card.brandName}
                <span className="text-accent-crimson">.</span>
              </h3>
              <p className="text-xs sm:text-sm font-bold text-zinc-700 mt-1">
                {card.title}
              </p>
            </div>

            {/* Description Body */}
            <p className="text-xs sm:text-sm md:text-base text-zinc-700 leading-relaxed font-normal">
              {card.description}
            </p>

            {/* Key Capabilities Pills */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {card.fullProject.technologies.map((tech, techIdx) => (
                <span
                  key={techIdx}
                  className="px-2.5 py-1 rounded-full bg-white/90 border border-zinc-200/90 text-[10px] sm:text-[11px] font-mono text-zinc-800 font-semibold shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action CTA Button */}
            <div className="pt-2 sm:pt-4">
              <button
                onClick={() => onOpenModal(card.fullProject)}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-zinc-950 text-white font-bold text-xs sm:text-sm shadow-md hover:bg-accent-crimson transition-all duration-300 group/btn cursor-pointer active:scale-95"
              >
                <span>PREVIEW THE UI</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 text-accent-crimson group-hover/btn:text-white" />
              </button>
            </div>

          </div>

          {/* Right Column: Interactive 3D Device Showcase */}
          <div className="lg:col-span-6 flex items-center justify-center pt-4 lg:pt-0">
            <div
              onClick={() => onOpenModal(card.fullProject)}
              className="cursor-pointer w-full hover:scale-[1.02] transition-transform duration-300"
            >
              <DeviceMockup type={card.deviceType} variant={card.variant} />
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onDiscussSimilar }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [viewMode, setViewMode] = useState<"stack" | "grid">("stack")

  const categories = [
    { id: "all", label: "ALL", count: STACKED_PROJECTS.length },
    { id: "web", label: "WEB DEVELOPMENT", count: 3 },
    { id: "mobile", label: "MOBILE APPLICATIONS", count: 2 },
    { id: "ai", label: "AI AUTOMATION", count: 2 },
  ]

  const filteredProjects = STACKED_PROJECTS.filter((p) => {
    if (activeCategory === "all") return true
    if (activeCategory === "web") return p.tags.includes("WEB DEVELOPMENT") || p.tags.includes("E-COMMERCE")
    if (activeCategory === "mobile") return p.deviceType === "phone" || p.tags.includes("IOS & ANDROID")
    if (activeCategory === "ai") return p.tags.includes("AI AUTOMATION")
    return true
  })

  const handleOpenProject = (project: ProjectItem) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <section id="work" className="py-16 sm:py-24 bg-white border-t border-zinc-200/70 relative">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header with Exact Match to User Reference Screenshot */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          
          {/* Centered Top Badge: ✦ WORKS */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-zinc-600"
          >
            <span className="text-accent-crimson font-black text-sm">✦</span>
            <span>WORKS</span>
          </motion.div>

          {/* Bold Lowercase Headline with Signature Crimson Period */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.04em] text-zinc-950 lowercase max-w-4xl mx-auto leading-tight font-display"
          >
            crafting the finest of all<span className="text-accent-crimson">.</span>
          </motion.h2>
        </div>

        {/* Filter Navigation Capsule Bar (Exact Match to User Reference Screenshot) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          
          {/* Left Capsule Filter Pills */}
          <div className="flex items-center gap-1 p-1 rounded-full bg-[#F4F4F5] border border-zinc-200/90 shadow-2xs overflow-x-auto max-w-full no-scrollbar">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold font-mono transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-zinc-950 text-white shadow-xs"
                      : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] ${isActive ? "text-zinc-400" : "text-zinc-400 font-normal"}`}>
                    {cat.count < 10 ? `0${cat.count}` : cat.count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Right: Shown Count & View Switcher */}
          <div className="flex items-center gap-3 self-end sm:self-center">
            <span className="text-xs font-mono font-bold text-zinc-500">
              {filteredProjects.length} shown
            </span>

            <div className="flex items-center p-1 rounded-xl bg-[#F4F4F5] border border-zinc-200">
              <button
                onClick={() => setViewMode("stack")}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === "stack" ? "bg-white text-zinc-950 shadow-2xs" : "text-zinc-400 hover:text-zinc-700"
                }`}
                title="Stacked Scroll Deck View"
              >
                <Layers className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === "grid" ? "bg-white text-zinc-950 shadow-2xs" : "text-zinc-400 hover:text-zinc-700"
                }`}
                title="Grid Gallery View"
              >
                <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
                  <div className="bg-current rounded-[1px]" />
                  <div className="bg-current rounded-[1px]" />
                  <div className="bg-current rounded-[1px]" />
                  <div className="bg-current rounded-[1px]" />
                </div>
              </button>
            </div>
          </div>

        </div>

        {/* Stacked Cards on Scroll Deck */}
        <div className="relative pb-12">
          {filteredProjects.map((card, index) => (
            <StackedCard
              key={card.id}
              card={card}
              index={index}
              total={filteredProjects.length}
              onOpenModal={handleOpenProject}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 p-6 sm:p-8 rounded-3xl bg-zinc-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl border border-zinc-800 relative overflow-hidden"
        >
          <div className="relative z-10 space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-white">Need a specialized custom architecture for your business?</h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              We design custom workflows, secure databases, and tailored frontend experiences.
            </p>
          </div>
          <button
            onClick={() => onDiscussSimilar?.("Custom Architecture")}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-accent-crimson text-white font-bold text-xs sm:text-sm shadow-crimson-md hover:scale-105 active:scale-95 transition-transform cursor-pointer"
          >
            Request Project Consultation
          </button>
        </motion.div>

      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedProject(null)
        }}
        onDiscussSimilar={onDiscussSimilar}
      />
    </section>
  )
}

