import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { projectsData, ProjectItem, ProjectCategory } from "@/data/projects"
import { ProjectDetailModal } from "@/components/modals/ProjectDetailModal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TiltCard } from "@/components/ui/tilt-card"
import { ArrowUpRight, Sparkles, Activity } from "lucide-react"

interface WorkSectionProps {
  onDiscussSimilar?: (projectTitle: string) => void
}

const CATEGORY_TABS = [
  { id: "all" as ProjectCategory, label: "All Blueprints" },
  { id: "websites" as ProjectCategory, label: "Websites" },
  { id: "mobile" as ProjectCategory, label: "Mobile Apps" },
  { id: "backend" as ProjectCategory, label: "Backend & Cloud" },
  { id: "ai" as ProjectCategory, label: "AI Automation" },
]

export const WorkSection: React.FC<WorkSectionProps> = ({ onDiscussSimilar }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredProjects = activeCategory === "all"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory)

  const handleOpenProject = (project: ProjectItem) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <section id="work" className="py-24 bg-white border-t border-zinc-200/70 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Editorial Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-widest text-accent-crimson font-mono inline-flex items-center gap-1.5"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Portfolio & Production Blueprints</span>
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950"
            >
              Featured projects &{" "}
              <span className="text-accent-crimson font-black">
                system architectures.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base text-zinc-600 leading-relaxed font-normal"
            >
              Explore curated production blueprints, mobile app architectures, and AI agent frameworks
              designed with clean code principles and reliable backend infrastructure.
            </motion.p>
          </div>

          {/* Honest Transparency Notice */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-600 font-medium self-start md:self-auto shadow-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-crimson opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-crimson" />
            </span>
            <span>Honest Previews & Ready Codebases</span>
          </motion.div>
        </div>

        {/* Category Filters with Sliding Spring Indicator */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none relative">
          {CATEGORY_TABS.map((tab) => {
            const isActive = activeCategory === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors duration-200 cursor-pointer select-none z-10 ${
                  isActive ? "text-white" : "text-zinc-600 hover:text-zinc-950 bg-zinc-100/80 hover:bg-zinc-200/60"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeWorkCategoryTab"
                    className="absolute inset-0 rounded-full bg-zinc-950 shadow-xs"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Projects Grid with 3D TiltCards */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                onClick={() => handleOpenProject(project)}
                className="h-full cursor-pointer"
              >
                <TiltCard tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.02} className="h-full">
                  <div className="group relative rounded-2xl border border-zinc-200/90 bg-zinc-50/70 p-6 hover:bg-white hover:border-accent-crimson hover:shadow-card transition-all duration-300 flex flex-col justify-between h-full">
                    <div>
                      {/* Top Bar: Category and Type Badge */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent-crimson flex items-center gap-1">
                          <Activity className="h-3 w-3" />
                          <span>{project.categoryLabel}</span>
                        </span>
                        <Badge variant="outline" className="text-[10px] font-semibold bg-white border-zinc-200 text-zinc-700">
                          {project.badge}
                        </Badge>
                      </div>

                      {/* Project Title */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-bold text-zinc-950 group-hover:text-accent-crimson transition-colors leading-snug">
                          {project.title}
                        </h3>
                        <div className="h-8 w-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:text-accent-crimson group-hover:border-red-200 group-hover:scale-110 transition-all shrink-0 shadow-xs">
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>

                      {/* Project Overview */}
                      <p className="text-xs text-zinc-600 leading-relaxed line-clamp-3 mb-4 font-normal">
                        {project.summary}
                      </p>
                    </div>

                    <div>
                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-200/60">
                        {project.technologies.slice(0, 3).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded-md bg-white border border-zinc-200 text-[10px] font-mono text-zinc-700 group-hover:border-red-100 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-1.5 py-0.5 rounded-md bg-zinc-200/70 text-[10px] font-mono text-zinc-600">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Callout Banner with Animated Flare */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-zinc-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl border border-zinc-800 relative overflow-hidden"
        >
          <div className="relative z-10 space-y-1">
            <h4 className="text-lg font-bold text-white">Have a specialized custom architectural vision?</h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              We design robust data models, API gateways, and custom frontends tailored to your exact operations.
            </p>
          </div>
          <Button
            variant="crimson"
            size="default"
            onClick={() => onDiscussSimilar?.("Custom Architecture")}
            className="w-full sm:w-auto font-bold shrink-0 shadow-crimson-md hover:scale-105 transition-transform"
          >
            <span>Request Scope Review</span>
          </Button>
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
