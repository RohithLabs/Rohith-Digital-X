import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { projectsData, ProjectItem, ProjectCategory } from "@/data/projects"
import { ProjectDetailModal } from "@/components/modals/ProjectDetailModal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

interface WorkSectionProps {
  onDiscussSimilar?: (projectTitle: string) => void
}

const CATEGORY_TABS = [
  { id: "all" as ProjectCategory, label: "All Works" },
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
    <section id="work" className="py-24 bg-white border-t border-zinc-200/70 relative">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Editorial Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-crimson font-mono">
              Portfolio & Production Blueprints
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 editorial-title">
              Featured projects &{" "}
              <span className="font-editorial italic font-normal text-accent-crimson">
                system architectures.
              </span>
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed font-normal">
              Explore curated production blueprints, mobile app architectures, and AI agent frameworks
              designed with clean code principles and reliable backend infrastructure.
            </p>
          </div>

          {/* Honest Transparency Notice */}
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-600 font-medium self-start md:self-auto">
            <span className="h-2 w-2 rounded-full bg-accent-crimson" />
            <span>Honest Project Previews & Ready Architectures</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CATEGORY_TABS.map((tab) => {
            const isActive = activeCategory === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-zinc-950 text-white shadow-xs"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200/80 hover:text-zinc-900"
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
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
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => handleOpenProject(project)}
                className="group relative rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-5 hover:bg-white hover:border-zinc-300 hover:shadow-card transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Top Bar: Category and Type Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent-crimson">
                      {project.categoryLabel}
                    </span>
                    <Badge variant="outline" className="text-[10px] font-medium bg-white">
                      {project.badge}
                    </Badge>
                  </div>

                  {/* Project Title */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-zinc-950 group-hover:text-accent-crimson transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <div className="h-7 w-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:text-zinc-950 group-hover:border-zinc-400 transition-all shrink-0">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>

                  {/* Project Overview */}
                  <p className="text-xs text-zinc-500 leading-relaxed line-clamp-3 mb-4 font-normal">
                    {project.summary}
                  </p>
                </div>

                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-200/60">
                    {project.technologies.slice(0, 3).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-white border border-zinc-200 text-[10px] font-mono text-zinc-600"
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-zinc-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div>
            <h4 className="text-base font-bold">Have a custom architectural vision?</h4>
            <p className="text-xs text-zinc-400">
              We design specialized architectures tailored precisely to your company workflows.
            </p>
          </div>
          <Button
            variant="crimson"
            size="sm"
            onClick={() => onDiscussSimilar?.("Custom Architecture")}
            className="w-full sm:w-auto font-bold"
          >
            <span>Request Scope Review</span>
          </Button>
        </div>

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
