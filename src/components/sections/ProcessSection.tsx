import React from "react"
import { motion } from "framer-motion"
import { processSteps } from "@/data/process"
import { Search, Compass, Hammer, Rocket, CheckCircle2 } from "lucide-react"

const STEP_ICONS = [Search, Compass, Hammer, Rocket]

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white border-t border-zinc-200/70 relative">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Editorial Typography */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-crimson font-mono">
            Structured Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 editorial-title">
            From initial concept to launch in{" "}
            <span className="font-editorial italic font-normal text-accent-crimson">
              4 disciplined phases.
            </span>
          </h2>
          <p className="text-base text-zinc-600 leading-relaxed font-normal">
            A clear, predictable roadmap ensures zero surprises, honest timelines, and seamless execution.
          </p>
        </div>

        {/* 4 Steps Timeline / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step, index) => {
            const Icon = STEP_ICONS[index] || Search

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="group relative rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 shadow-subtle hover:bg-white hover:border-zinc-300 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-zinc-200 text-zinc-900 group-hover:text-accent-crimson group-hover:border-red-200 group-hover:bg-red-50/60 transition-colors shadow-xs">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-accent-crimson tracking-wider">
                      {step.step}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg font-bold tracking-tight text-zinc-950 mb-1">
                    {step.title}
                  </h3>
                  <div className="text-[11px] font-semibold text-zinc-500 mb-3">
                    {step.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-zinc-600 leading-relaxed mb-6 font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="pt-4 border-t border-zinc-200/60">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-2 font-mono">
                    Key Deliverables
                  </span>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-1.5 text-xs text-zinc-700">
                        <CheckCircle2 className="h-3 w-3 text-accent-crimson shrink-0" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
