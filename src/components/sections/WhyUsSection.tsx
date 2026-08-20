import React from "react"
import { motion } from "framer-motion"
import { whyUsData } from "@/data/whyUs"
import { UserCheck, TrendingUp, Smartphone, Code2, Layers, MessageSquare, Target, CheckCircle2, ShieldCheck, Zap, Terminal } from "lucide-react"
import { TiltCard } from "@/components/ui/tilt-card"

const ICON_MAP = {
  UserCheck,
  TrendingUp,
  Smartphone,
  Code2,
  Layers,
  MessageSquare,
  Target,
}

export const WhyUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Editorial Typography */}
        <div className="max-w-3xl mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-accent-crimson font-mono inline-block"
          >
            Senior Engineering Partnership
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950"
          >
            The advantages of a dedicated,{" "}
            <span className="text-accent-crimson font-black">
              senior engineering partner.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-zinc-600 leading-relaxed font-normal"
          >
            Unlike oversized agencies with layer upon layer of non-technical account managers, 
            Rohith Digital X delivers direct founder accountability, clean code, and solutions built for your real business needs.
          </motion.p>
        </div>

        {/* 7 Benefits Bento Grid with Interactive Micro-Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUsData.map((item, index) => {
            const Icon = ICON_MAP[item.iconName] || Target
            const isFeatured = index === 0 // Founder direct interaction card

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={isFeatured ? "md:col-span-2 lg:col-span-2" : "col-span-1"}
              >
                <TiltCard tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.015} className="h-full">
                  <div
                    className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 h-full cursor-default ${
                      isFeatured
                        ? "bg-zinc-950 text-white shadow-2xl border border-zinc-800 relative overflow-hidden"
                        : "bg-white border border-zinc-200/90 text-zinc-900 hover:border-accent-crimson hover:shadow-card"
                    }`}
                  >
                    {/* Visual accent flair for featured card */}
                    {isFeatured && (
                      <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
                    )}

                    <div>
                      {/* Top Bar: Icon and Step Number */}
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className={`h-12 w-12 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                            isFeatured
                              ? "bg-zinc-900 border-zinc-800 text-accent-crimson"
                              : "bg-zinc-50 border-zinc-200 text-zinc-900 group-hover:text-accent-crimson group-hover:bg-red-50/60"
                          }`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex items-center gap-2">
                          {isFeatured && (
                            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400 text-[11px] font-mono font-semibold">
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                              </span>
                              <span>&lt; 24h Founder SLA</span>
                            </span>
                          )}
                          <span
                            className={`text-xs font-mono font-bold tracking-widest ${
                              isFeatured ? "text-accent-crimson" : "text-zinc-400"
                            }`}
                          >
                            {item.number}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-xl sm:text-2xl font-bold tracking-tight mb-3 ${
                          isFeatured ? "text-white" : "text-zinc-950"
                        }`}
                      >
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p
                        className={`text-xs sm:text-sm leading-relaxed font-normal ${
                          isFeatured ? "text-zinc-300 max-w-xl" : "text-zinc-600"
                        }`}
                      >
                        {item.description}
                      </p>

                      {/* Live Micro-Component for Featured Card */}
                      {isFeatured && (
                        <div className="mt-6 p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                          <div className="flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                            <span className="text-zinc-300 font-medium">Direct WhatsApp Support</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Zap className="h-4 w-4 text-accent-crimson shrink-0" />
                            <span className="text-zinc-300 font-medium">Weekly Sprint Demos</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Terminal className="h-4 w-4 text-blue-400 shrink-0" />
                            <span className="text-zinc-300 font-medium">Zero Layer Overhead</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Sub-tag / Trust Signal */}
                    <div
                      className={`pt-5 mt-6 border-t flex items-center gap-2 ${
                        isFeatured ? "border-zinc-800 text-zinc-400" : "border-zinc-200/60 text-zinc-500"
                      }`}
                    >
                      <CheckCircle2 className="h-4 w-4 text-accent-crimson shrink-0" />
                      <span className="text-[11px] font-semibold">
                        Guaranteed standard across all client engagements
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
