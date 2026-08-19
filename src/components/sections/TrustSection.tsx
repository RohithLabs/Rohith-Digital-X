import React from "react"
import { motion } from "framer-motion"
import { MessageSquareCode, Cpu, Smartphone, Layers, CheckCircle2, ShieldCheck, Zap, Lock, Code2 } from "lucide-react"
import { Marquee } from "@/components/ui/marquee"
import { TiltCard } from "@/components/ui/tilt-card"

const TRUST_PILLARS = [
  {
    icon: MessageSquareCode,
    title: "Direct Founder Interaction",
    description: "Work directly with Rohith E with structured sprint updates, eliminating middleman miscommunications and unnecessary delays.",
  },
  {
    icon: Cpu,
    title: "Battle-Tested Tech Stacks",
    description: "Java, Spring Boot, React, PostgreSQL, and Flutter chosen for real business stability and sub-second performance, not hype.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Precision",
    description: "Every UI is architected and tested on physical mobile screens to ensure smooth touch feedback, rapid load times, and fluid navigation.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Normalized databases, secure authentication, and modular architecture engineered to handle growing business traffic effortlessly.",
  },
]

const TECH_ITEMS_ROW_1 = [
  { name: "Java & Spring Boot", category: "Backend Engine" },
  { name: "React 19 & Next.js", category: "Modern Frontend" },
  { name: "TypeScript", category: "Type-Safe Core" },
  { name: "PostgreSQL & MySQL", category: "Relational DB" },
  { name: "Tailwind CSS", category: "Design System" },
  { name: "Flutter & React Native", category: "Mobile Apps" },
  { name: "FastAPI & Python", category: "Microservices" },
  { name: "LangChain & Gemini API", category: "AI Workflows" },
]

const TECH_ITEMS_ROW_2 = [
  { name: "99.9% Uptime Architecture", icon: ShieldCheck },
  { name: "< 800ms Time-to-Interactive", icon: Zap },
  { name: "Strict SQL & JWT Security", icon: Lock },
  { name: "Clean Modular Source Code", icon: Code2 },
  { name: "100% Client Code Ownership", icon: CheckCircle2 },
  { name: "Turnkey Play Store Deployment", icon: Smartphone },
]

export const TrustSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-y border-zinc-200/70 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Editorial Introduction Statement */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-accent-crimson font-mono inline-block"
          >
            Foundational Engineering Principles
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950"
          >
            Turning ambitious ideas into{" "}
            <span className="text-accent-crimson font-black">reliable digital products.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal"
          >
            <strong>Rohith Digital X</strong> helps businesses turn ideas into durable digital products.
            From a high-converting business website to a mobile app or AI automated workflow,
            every solution is built with speed, scalability, and long-term maintainability.
          </motion.p>
        </div>

        {/* 4 Core Value Statements Grid with 3D TiltCards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {TRUST_PILLARS.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="h-full"
              >
                <TiltCard tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.02} className="h-full">
                  <div className="group relative p-6 rounded-2xl bg-zinc-50/90 border border-zinc-200/90 hover:border-accent-crimson hover:bg-white hover:shadow-card transition-all duration-300 flex flex-col justify-between h-full cursor-default">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-zinc-200 text-zinc-900 group-hover:text-accent-crimson group-hover:border-red-200 group-hover:bg-red-50/60 group-hover:scale-110 transition-all duration-300 shadow-xs">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-mono font-extrabold text-zinc-400 group-hover:text-accent-crimson transition-colors">
                          0{index + 1}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-zinc-900 group-hover:text-accent-crimson transition-colors mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-zinc-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-zinc-500">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent-crimson shrink-0" />
                      <span>Standard Quality SLA</span>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>

        {/* Dual Opposing Direction Marquees */}
        <div className="mt-16 pt-10 border-t border-zinc-100 space-y-4">
          <div className="text-center mb-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-400">
              Modern Enterprise Tech Stack & Production SLAs
            </span>
          </div>

          {/* Row 1: Leftward moving Tech Stacks */}
          <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            <Marquee pauseOnHover className="[--duration:28s]">
              {TECH_ITEMS_ROW_1.map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-50 border border-zinc-200/80 text-xs font-mono font-semibold text-zinc-800 hover:border-accent-crimson hover:bg-white hover:text-accent-crimson transition-all shadow-xs cursor-default hover:scale-105"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-crimson" />
                  <span>{tech.name}</span>
                  <span className="text-[10px] text-zinc-400 font-normal">({tech.category})</span>
                </div>
              ))}
            </Marquee>
          </div>

          {/* Row 2: Rightward (Reverse) moving SLAs & Guarantees */}
          <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            <Marquee reverse pauseOnHover className="[--duration:32s]">
              {TECH_ITEMS_ROW_2.map((item, i) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono font-semibold text-zinc-200 hover:border-accent-crimson hover:bg-zinc-900 transition-all shadow-xs cursor-default hover:scale-105"
                  >
                    <IconComponent className="h-3.5 w-3.5 text-accent-crimson" />
                    <span>{item.name}</span>
                  </div>
                )
              })}
            </Marquee>
          </div>
        </div>

      </div>
    </section>
  )
}
