import React from "react"
import { Dialog } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProjectItem } from "@/data/projects"
import { CheckCircle2, Server, ArrowRight, Lightbulb, Clock, MessageCircle } from "lucide-react"
import { scrollToSection } from "@/lib/utils"

interface ProjectDetailModalProps {
  project: ProjectItem | null
  isOpen: boolean
  onClose: () => void
  onDiscussSimilar?: (projectTitle: string) => void
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
  onDiscussSimilar,
}) => {
  if (!project) return null

  const handleDiscuss = () => {
    onClose()
    if (onDiscussSimilar) {
      onDiscussSimilar(project.title)
    }
    setTimeout(() => {
      scrollToSection("contact")
    }, 150)
  }

  const getWhatsAppUrl = () => {
    const text = `Hi Rohith! 👋

I was exploring your portfolio on Rohith Digital X and I'm interested in building a solution similar to:

📋 *Blueprint:* ${project.title}
🏷️ *Category:* ${project.categoryLabel}
🏭 *Target Industry:* ${project.targetIndustry}
⏱️ *Estimated Delivery:* ${project.timelineEstimate}

Please let me know how we can discuss requirements and architectural feasibility!`

    return `https://wa.me/919655483130?text=${encodeURIComponent(text)}`
  }

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      description={`Category: ${project.categoryLabel} • Industry: ${project.targetIndustry}`}
      maxWidth="max-w-3xl"
    >
      <div className="space-y-6 pt-1 pb-4">
        {/* Status notice */}
        <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900 text-white text-xs">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent-crimson animate-pulse" />
            <span className="font-semibold">{project.badge}</span>
            <span className="text-zinc-400">| Designed by Rohith Digital X</span>
          </div>
          <div className="flex items-center gap-1.5 text-zinc-400">
            <Clock className="h-3.5 w-3.5 text-accent-crimson" />
            <span>Est: {project.timelineEstimate}</span>
          </div>
        </div>

        {/* Project Summary */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider font-mono">
            Project Overview
          </h4>
          <p className="text-sm text-zinc-700 leading-relaxed font-normal">
            {project.summary}
          </p>
        </div>

        {/* Problem Solved */}
        <div className="p-4 rounded-2xl bg-red-50/60 border border-red-100 space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-bold text-accent-crimson uppercase tracking-wider font-mono">
            <Lightbulb className="h-4 w-4" />
            <span>Business Problem Addressed</span>
          </div>
          <p className="text-sm text-zinc-800 leading-relaxed font-medium">
            {project.problemSolved}
          </p>
        </div>

        {/* Features & Architecture Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Key Features */}
          <div className="space-y-3 p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider font-mono">
              Core Functional Features
            </h4>
            <ul className="space-y-2 text-xs text-zinc-600">
              {project.keyFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent-crimson mt-0.5 shrink-0" />
                  <span className="leading-snug">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Highlights */}
          <div className="space-y-3 p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 uppercase tracking-wider font-mono">
              <Server className="h-4 w-4 text-accent-crimson" />
              <h4>Engineering Highlights</h4>
            </div>
            <ul className="space-y-2 text-xs text-zinc-600">
              {project.architectureHighlights.map((arch, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-crimson mt-1.5 shrink-0" />
                  <span className="leading-snug">{arch}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="space-y-2 pt-2">
          <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider font-mono">
            Technologies Used in Blueprint
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs py-1 px-2.5 bg-zinc-100 border border-zinc-200">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Footer with WhatsApp + Online Form Buttons */}
        <div className="pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-500 text-center sm:text-left">
            Need a similar custom system built for your business?
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
              onClick={handleDiscuss}
              className="flex-1 sm:flex-none gap-1.5 text-xs font-bold shadow-crimson-sm"
            >
              <span>Discuss Project</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
