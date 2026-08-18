import React from "react"
import { Dialog } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ServiceItem } from "@/data/services"
import { CheckCircle2, Clock, Layers, Users, ArrowRight, MessageCircle } from "lucide-react"
import { scrollToSection } from "@/lib/utils"

interface ServiceDetailModalProps {
  service: ServiceItem | null
  isOpen: boolean
  onClose: () => void
  onSelectServiceForInquiry?: (serviceId: string) => void
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  isOpen,
  onClose,
  onSelectServiceForInquiry,
}) => {
  if (!service) return null

  const handleStartProject = () => {
    onClose()
    if (onSelectServiceForInquiry) {
      onSelectServiceForInquiry(service.id)
    }
    setTimeout(() => {
      scrollToSection("contact")
    }, 150)
  }

  const getWhatsAppUrl = () => {
    const text = `Hi Rohith! 👋

I was reviewing your core services on Rohith Digital X and would like to get a quote and timeline for:

🚀 *Service:* ${service.title}
📌 *Focus:* ${service.tagline}
⏱️ *Typical Timeline:* ${service.timeframe}

Please let me know how we can schedule an initial consultation!`

    return `https://wa.me/919655483130?text=${encodeURIComponent(text)}`
  }

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title={service.title}
      description={service.tagline}
      maxWidth="max-w-3xl"
    >
      <div className="space-y-6 pt-1 pb-4">
        {/* Short Summary */}
        <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
          {service.shortDescription}
        </p>

        {/* Timeframe & Stack Pills */}
        <div className="flex flex-wrap items-center gap-3 p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80">
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700 font-mono">
            <Clock className="h-4 w-4 text-accent-crimson" />
            <span>Typical Timeline: {service.timeframe}</span>
          </div>
          <div className="h-4 w-[1px] bg-zinc-300 hidden sm:block" />
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs text-zinc-500 font-medium mr-1">Technologies:</span>
            {service.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-[11px] py-0 px-2 bg-white border border-zinc-200">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Target Audience & Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Target Audience */}
          <div className="space-y-3 p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 uppercase tracking-wider font-mono">
              <Users className="h-4 w-4 text-accent-crimson" />
              <h4>Designed For</h4>
            </div>
            <ul className="space-y-2 text-xs text-zinc-600">
              {service.targetAudience.map((audience, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-crimson mt-1.5 shrink-0" />
                  <span className="leading-snug">{audience}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Deliverables */}
          <div className="space-y-3 p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 uppercase tracking-wider font-mono">
              <Layers className="h-4 w-4 text-accent-crimson" />
              <h4>What You Receive</h4>
            </div>
            <ul className="space-y-2 text-xs text-zinc-600">
              {service.deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent-crimson mt-0.5 shrink-0" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Detailed Capabilities */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider font-mono">
            Key Capabilities & Features Included
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.keyFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 p-3 rounded-xl bg-zinc-50 border border-zinc-100 text-xs text-zinc-700 leading-snug">
                <span className="text-accent-crimson font-bold font-mono">0{idx + 1}.</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Footer with WhatsApp + Online Form Buttons */}
        <div className="pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-500 text-center sm:text-left">
            Have custom requirements? We tailor the scope to your exact budget.
          </p>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
            >
              <MessageCircle className="h-3.5 w-3.5 fill-current" />
              <span>Inquire on WhatsApp</span>
            </a>

            <Button
              variant="crimson"
              size="sm"
              onClick={handleStartProject}
              className="flex-1 sm:flex-none gap-1.5 text-xs font-bold shadow-crimson-sm"
            >
              <span>Request Quote</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
