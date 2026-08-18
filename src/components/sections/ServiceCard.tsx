import React from "react"
import { motion } from "framer-motion"
import { Globe, Smartphone, Server, Bot, ArrowRight } from "lucide-react"
import { ServiceItem } from "@/data/services"
import { Badge } from "@/components/ui/badge"
import { CardSpotlight } from "@/components/ui/card-spotlight"

interface ServiceCardProps {
  service: ServiceItem
  index: number
  onOpenDetails: (service: ServiceItem) => void
}

const ICON_MAP = {
  Globe: Globe,
  Smartphone: Smartphone,
  Server: Server,
  Bot: Bot,
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, onOpenDetails }) => {
  const IconComponent = ICON_MAP[service.iconName] || Globe

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="h-full"
    >
      <CardSpotlight
        spotlightColor="rgba(220, 38, 38, 0.07)"
        className="h-full group relative rounded-3xl border border-zinc-200/90 bg-white p-6 sm:p-8 shadow-subtle hover:shadow-card-hover hover:border-accent-crimson transition-all duration-300 flex flex-col justify-between"
      >
        <div>
          {/* Card Header: Icon, Number & Badge */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 group-hover:bg-red-50 group-hover:text-accent-crimson group-hover:border-red-200 transition-all duration-300">
              <IconComponent className="h-7 w-7" />
            </div>
            <span className="text-sm font-mono font-bold text-zinc-400 group-hover:text-accent-crimson transition-colors">
              {service.number}
            </span>
          </div>

          {/* Title & Tagline */}
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 group-hover:text-accent-crimson transition-colors">
            {service.title}
          </h3>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent-crimson mt-1 mb-3">
            {service.tagline}
          </p>

          {/* Short Description */}
          <p className="text-sm text-zinc-600 leading-relaxed font-normal mb-5">
            {service.shortDescription}
          </p>

          {/* Highlight Key Capabilities */}
          <div className="space-y-2 border-t border-zinc-100 pt-4 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono">
              Key Capabilities
            </span>
            <ul className="space-y-1.5 text-xs text-zinc-700">
              {service.keyFeatures.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-crimson mt-1.5 shrink-0" />
                  <span className="line-clamp-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card Footer: Tech tags & Action */}
        <div className="pt-4 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            {service.techStack.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-[10px] py-0.5 px-2 bg-zinc-100 border border-zinc-200">
                {tech}
              </Badge>
            ))}
            {service.techStack.length > 3 && (
              <span className="text-[10px] text-zinc-400 font-mono">
                +{service.techStack.length - 3}
              </span>
            )}
          </div>

          <button
            onClick={() => onOpenDetails(service)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-900 group-hover:text-accent-crimson transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-crimson rounded py-1 cursor-pointer"
          >
            <span>Learn more & specs</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </CardSpotlight>
    </motion.div>
  )
}
