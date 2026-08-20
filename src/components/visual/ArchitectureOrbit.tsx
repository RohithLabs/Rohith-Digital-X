import React from "react"
import { motion } from "framer-motion"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"
import { Code, Smartphone, Server, Bot, ShieldCheck, Zap, Database, Cpu, Layers } from "lucide-react"

export const ArchitectureOrbit: React.FC = () => {
  return (
    <div className="relative flex h-[340px] sm:h-[400px] w-full max-w-lg flex-col items-center justify-center overflow-hidden rounded-3xl border border-zinc-200/80 bg-zinc-950 shadow-2xl p-6">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Central Core Brand Node */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-3xl bg-zinc-900 border-2 border-accent-crimson shadow-[0_0_35px_-5px_rgba(220,38,38,0.6)] p-3 text-center"
      >
        <div className="flex flex-col items-center justify-center">
          <span className="text-[10px] sm:text-xs font-mono font-extrabold uppercase tracking-wider text-zinc-400">
            RDX
          </span>
          <span className="text-xs sm:text-sm font-black text-white">
            ENGINE
          </span>
          <span className="text-[9px] font-mono text-emerald-400 font-bold flex items-center gap-1 mt-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            LIVE
          </span>
        </div>
      </motion.div>

      {/* Inner Orbit (Radius 90px) - Core Tech Stacks */}
      <OrbitingCircles
        radius={90}
        duration={22}
        iconSize={36}
        className="border-none bg-transparent"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-700 text-white shadow-md hover:scale-115 hover:border-accent-crimson transition-transform cursor-pointer" title="React Frontend">
          <Code className="h-4 w-4 text-accent-crimson" />
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-700 text-white shadow-md hover:scale-115 hover:border-accent-crimson transition-transform cursor-pointer" title="Spring Boot Backend">
          <Server className="h-4 w-4 text-amber-400" />
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-700 text-white shadow-md hover:scale-115 hover:border-accent-crimson transition-transform cursor-pointer" title="PostgreSQL / SQL">
          <Database className="h-4 w-4 text-blue-400" />
        </div>
      </OrbitingCircles>

      {/* Outer Orbit (Radius 155px) - Platforms & AI Agents */}
      <OrbitingCircles
        radius={155}
        duration={35}
        reverse
        iconSize={40}
        className="border-none bg-transparent"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-700 text-white shadow-lg hover:scale-115 hover:border-emerald-400 transition-transform cursor-pointer" title="AI Agents & Workflows">
          <Bot className="h-4 w-4 text-emerald-400" />
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-700 text-white shadow-lg hover:scale-115 hover:border-purple-400 transition-transform cursor-pointer" title="Mobile App (iOS & Android)">
          <Smartphone className="h-4 w-4 text-purple-400" />
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-700 text-white shadow-lg hover:scale-115 hover:border-cyan-400 transition-transform cursor-pointer" title="Microservices & APIs">
          <Layers className="h-4 w-4 text-cyan-400" />
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-700 text-white shadow-lg hover:scale-115 hover:border-red-400 transition-transform cursor-pointer" title="Security & JWT">
          <ShieldCheck className="h-4 w-4 text-accent-crimson" />
        </div>
      </OrbitingCircles>

      {/* Top Floating Badge */}
      <div className="absolute top-3 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-[10px] font-mono text-zinc-300 backdrop-blur-md">
        <Zap className="h-3 w-3 text-accent-crimson" />
        <span>Connected Full-Stack Mesh</span>
      </div>

      {/* Bottom Floating Stats */}
      <div className="absolute bottom-3 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-[10px] font-mono text-zinc-300 backdrop-blur-md">
        <Cpu className="h-3 w-3 text-emerald-400" />
        <span>Sub-800ms API Response</span>
      </div>

    </div>
  )
}
