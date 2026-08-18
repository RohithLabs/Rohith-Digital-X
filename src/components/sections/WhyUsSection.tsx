import React from "react"
import { motion } from "framer-motion"
import { whyUsData } from "@/data/whyUs"
import { UserCheck, TrendingUp, Smartphone, Code2, Layers, MessageSquare, Target, CheckCircle2 } from "lucide-react"

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
    <section id="why-us" className="py-24 bg-[#FAFAFA] relative">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Editorial Typography */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-crimson font-mono">
            Why Collaborate With Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 editorial-title">
            The advantages of a dedicated,{" "}
            <span className="font-editorial italic font-normal text-accent-crimson">
              senior engineering partner.
            </span>
          </h2>
          <p className="text-base text-zinc-600 leading-relaxed font-normal">
            Unlike oversized agencies with layer upon layer of non-technical managers, 
            Rohith Digital X delivers direct founder accountability, clean code, and solutions built for your real business needs.
          </p>
        </div>

        {/* 7 Benefits Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUsData.map((item, index) => {
            const Icon = ICON_MAP[item.iconName] || Target
            const isFeatured = index === 0 || index === 6 // First and last cards highlighted

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? "bg-zinc-950 text-white shadow-xl md:col-span-2 lg:col-span-1 border border-zinc-800"
                    : "bg-white border border-zinc-200/90 text-zinc-900 hover:border-zinc-300 hover:shadow-card"
                }`}
              >
                <div>
                  {/* Top Bar: Icon and Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`h-11 w-11 rounded-xl flex items-center justify-center border ${
                        isFeatured
                          ? "bg-zinc-900 border-zinc-800 text-accent-crimson"
                          : "bg-zinc-50 border-zinc-200 text-zinc-900"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className={`text-xs font-mono font-bold tracking-widest ${
                        isFeatured ? "text-accent-crimson" : "text-zinc-400"
                      }`}
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl font-bold tracking-tight mb-3 ${
                      isFeatured ? "text-white" : "text-zinc-950"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-xs leading-relaxed font-normal ${
                      isFeatured ? "text-zinc-300" : "text-zinc-600"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Sub-tag / Trust Signal */}
                <div className="pt-6 mt-6 border-t border-zinc-200/50 dark:border-zinc-800 flex items-center gap-2">
                  <CheckCircle2
                    className={`h-3.5 w-3.5 ${
                      isFeatured ? "text-accent-crimson" : "text-accent-crimson"
                    }`}
                  />
                  <span
                    className={`text-[11px] font-medium ${
                      isFeatured ? "text-zinc-400" : "text-zinc-500"
                    }`}
                  >
                    Guaranteed standard on all projects
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
