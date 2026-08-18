import React from "react"
import { motion } from "framer-motion"
import { MessageSquareCode, Cpu, Smartphone, Layers, CheckCircle2 } from "lucide-react"
import { Marquee } from "@/components/ui/marquee"

const TRUST_PILLARS = [
  {
    icon: MessageSquareCode,
    title: "Clear Communication",
    description: "Direct founder interaction with structured weekly progress reviews, eliminating middleman delays and misunderstandings.",
  },
  {
    icon: Cpu,
    title: "Practical Technology",
    description: "Battle-tested tech stacks (Java, Spring Boot, React, PostgreSQL) chosen for real business stability and performance, not hype.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Execution",
    description: "Every interface is built and tested across physical mobile and tablet viewports to guarantee intuitive navigation and fast loading.",
  },
  {
    icon: Layers,
    title: "Scalable Solutions",
    description: "Strict database schema normalization, secure authentication, and modular code ready to handle growing customer traffic smoothly.",
  },
]

const TECH_ITEMS = [
  { name: "Java & Spring Boot", category: "Backend" },
  { name: "React 19 & Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "PostgreSQL & MySQL", category: "Database" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Flutter & React Native", category: "Mobile" },
  { name: "FastAPI & Python", category: "AI / Microservices" },
  { name: "Docker & AWS Cloud", category: "DevOps" },
  { name: "LangChain & Gemini API", category: "AI Agents" },
  { name: "Redis & RESTful APIs", category: "Infrastructure" },
]

export const TrustSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-y border-zinc-200/70 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Editorial Introduction Statement */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-crimson font-mono">
            Foundational Engineering Principles
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950">
            Turning ambitious ideas into{" "}
            <span className="text-accent-crimson font-black">reliable digital products.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            <strong>Rohith Digital X</strong> helps businesses turn ideas into reliable digital products.
            From a high-converting business website to a complete mobile app or AI-powered workflow,
            every solution is designed with clarity, performance, and scalability in mind.
          </p>
        </div>

        {/* 4 Core Value Statements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {TRUST_PILLARS.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-zinc-50/80 border border-zinc-200/80 hover:border-accent-crimson hover:bg-white hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-zinc-200 text-zinc-900 group-hover:text-accent-crimson group-hover:border-red-200 transition-colors shadow-xs">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-zinc-400">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 group-hover:text-accent-crimson transition-colors mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-zinc-500">
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent-crimson" />
                  <span>Standard Guarantee</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Magic UI Technology Marquee Banner */}
        <div className="mt-16 pt-10 border-t border-zinc-100">
          <div className="text-center mb-5">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-400">
              Modern Enterprise Tech Stack & Production Frameworks
            </span>
          </div>

          <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
            <Marquee pauseOnHover className="[--duration:30s]">
              {TECH_ITEMS.map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-50 border border-zinc-200/80 text-xs font-mono font-semibold text-zinc-800 hover:border-accent-crimson hover:bg-white hover:text-accent-crimson transition-colors shadow-xs cursor-default"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-crimson" />
                  <span>{tech.name}</span>
                  <span className="text-[10px] text-zinc-400 font-normal">({tech.category})</span>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

      </div>
    </section>
  )
}
