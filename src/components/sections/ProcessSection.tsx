import React from "react"
import { motion } from "framer-motion"
import { processSteps } from "@/data/process"
import { Search, Compass, Hammer, Rocket, CheckCircle2, Sparkles } from "lucide-react"
import { TiltCard } from "@/components/ui/tilt-card"

const STEP_ICONS = [Search, Compass, Hammer, Rocket]

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white border-t border-zinc-200/70 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Editorial Typography */}
        <div className="max-w-3xl mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-accent-crimson font-mono inline-flex items-center gap-1.5"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Disciplined Delivery Workflow</span>
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950"
          >
            From initial concept to launch in{" "}
            <span className="text-accent-crimson font-black">
              4 disciplined phases.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-zinc-600 leading-relaxed font-normal"
          >
            A predictable, milestone-driven roadmap ensures zero surprises, honest timelines, and seamless execution.
          </motion.p>
        </div>

        {/* 4 Steps Timeline / Cards with Connecting SVG Pipeline Flow */}
        <div className="relative">
          
          {/* Animated Connecting Pipeline Conduit (Visible on lg screens) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 -translate-y-12 h-[2px] z-0 pointer-events-none">
            <svg className="w-full h-10 overflow-visible">
              <line
                x1="5%"
                y1="50%"
                x2="95%"
                y2="50%"
                stroke="#E4E4E7"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              <motion.line
                x1="5%"
                y1="50%"
                x2="95%"
                y2="50%"
                stroke="#DC2626"
                strokeWidth="2"
                strokeDasharray="12 180"
                animate={{ strokeDashoffset: [200, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {processSteps.map((step, index) => {
              const Icon = STEP_ICONS[index] || Search

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.12 }}
                  className="h-full"
                >
                  <TiltCard tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.02} className="h-full">
                    <div className="group relative rounded-3xl border border-zinc-200/90 bg-zinc-50/90 p-6 sm:p-7 shadow-subtle hover:bg-white hover:border-accent-crimson hover:shadow-card transition-all duration-300 flex flex-col justify-between h-full cursor-default">
                      <div>
                        {/* Step Header */}
                        <div className="flex items-center justify-between mb-5">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-zinc-200 text-zinc-900 group-hover:text-accent-crimson group-hover:border-red-200 group-hover:bg-red-50/60 group-hover:scale-110 transition-all duration-300 shadow-xs">
                            <Icon className="h-6 w-6" />
                          </div>
                          <span className="font-mono text-xs font-extrabold text-accent-crimson tracking-wider px-2.5 py-1 rounded-full bg-red-50/80 border border-red-100">
                            {step.step}
                          </span>
                        </div>

                        {/* Title & Tagline */}
                        <h3 className="text-lg font-bold tracking-tight text-zinc-950 mb-1 group-hover:text-accent-crimson transition-colors">
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
                            <li key={dIdx} className="flex items-center gap-2 text-xs text-zinc-700">
                              <CheckCircle2 className="h-3.5 w-3.5 text-accent-crimson shrink-0" />
                              <span className="leading-tight">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
