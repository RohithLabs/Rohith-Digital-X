import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { techStackData } from "@/data/techStack"
import { TiltCard } from "@/components/ui/tilt-card"
import { MacDock } from "@/components/ui/mac-dock"
import { Sparkles } from "lucide-react"

const CLIENT_LOGOS = [
  { name: "INTERWOVE", font: "font-serif tracking-[0.25em]" },
  { name: "ZARNAMA", font: "font-mono tracking-[0.2em]" },
  { name: "LAKSHITA", font: "font-sans font-black tracking-[0.15em]" },
  { name: "DINO SYSTEMS", font: "font-mono font-extrabold tracking-tight" },
  { name: "NOVAMARKET", font: "font-sans font-extrabold tracking-wider" },
  { name: "CAREPULSE", font: "font-sans font-bold tracking-widest" },
]

export const AboutSection: React.FC = () => {
  const [localTime, setLocalTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      // Format time for India (IST)
      const timeStr = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
      setLocalTime(timeStr)
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-t border-zinc-200/70 relative">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-24">
        
        {/* Top: "A SUMMARY" & "Know me as I am." (Exact Match to User Reference Screenshot) */}
        <div className="space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Left Column: Headline & Story */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.25em] text-zinc-400">
                A SUMMARY
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950">
                Know <span className="font-light text-zinc-400">me</span> as I am<span className="text-accent-crimson">.</span>
              </h2>

              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal pt-1">
                <span className="text-accent-crimson font-bold">I design products that get out of the way.</span> 3+ years across unisphere, SaaS, and consumer apps — from the brief to the build. I care about clarity, calmness, and the boring details no one notices when they're done right.
              </p>
            </div>

            {/* Right Column: Minimalist Metadata Table with Dividers */}
            <div className="lg:col-span-6 space-y-0 text-xs sm:text-sm divide-y divide-zinc-200 border-t border-b border-zinc-200">
              
              {/* Row 1: BASED */}
              <div className="py-3.5 flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] sm:text-xs uppercase font-bold tracking-widest text-zinc-400">
                  BASED
                </span>
                <div className="flex items-center gap-2 font-bold text-zinc-900 font-sans">
                  <span>Tamil Nadu, IN</span>
                  <span className="text-accent-crimson font-black text-xs">✦</span>
                  <span className="font-mono text-xs text-zinc-700">{localTime || "08:38 PM"}</span>
                </div>
              </div>

              {/* Row 2: CURRENTLY */}
              <div className="py-3.5 flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] sm:text-xs uppercase font-bold tracking-widest text-zinc-400">
                  CURRENTLY
                </span>
                <div className="flex items-center gap-2 font-bold text-zinc-900 font-sans">
                  <span>Founder & App Developer</span>
                  <span className="text-accent-crimson font-black text-xs">✦</span>
                  <span className="font-mono text-xs text-zinc-700">rdx.agency</span>
                </div>
              </div>

              {/* Row 3: DOMAIN */}
              <div className="py-3.5 flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] sm:text-xs uppercase font-bold tracking-widest text-zinc-400">
                  DOMAIN
                </span>
                <div className="font-semibold text-zinc-800 text-right">
                  <span>Mobile Apps • Web • AI & DS</span>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom of Summary: "SOFTWARE & TOOLS" macOS Floating Dock */}
          <div className="space-y-4 pt-4 border-t border-zinc-100">
            <p className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.25em] text-zinc-400 text-left">
              SOFTWARE & TOOLS
            </p>
            
            {/* Interactive macOS Dock */}
            <MacDock />
          </div>

        </div>

        {/* 3-Frame Showcase: "Building Apps. Designing Products. Crafting Systems." */}
        <div className="space-y-6 text-center border-t border-zinc-200/80 pt-16">
          
          {/* Centered Top Badge */}
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-zinc-600">
            <span className="text-accent-crimson font-black text-sm">✦</span>
            <span>ABOUT & METHODOLOGY</span>
          </div>

          {/* Bold Display Headline with Signature Crimson Periods (Exact Match to User Reference Screenshot 3) */}
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.04em] text-zinc-950 max-w-4xl mx-auto leading-tight font-display">
            Building Apps<span className="text-accent-crimson">.</span> Designing Products<span className="text-accent-crimson">.</span> Crafting Systems<span className="text-accent-crimson">.</span>
          </h3>

          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto font-normal leading-relaxed font-sans">
            Software engineer and product builder turning complex problems into calm, high-performance digital products. From architecture to production — obsessed with clarity, speed, and precision.
          </p>

          {/* 3 Minimalist Rounded Frames */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-4">
            
            {/* FRAME 1: System Engineering */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <TiltCard tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} className="h-full">
                <div className="rounded-[32px] bg-[#F7F7F8] border border-zinc-200/80 p-7 sm:p-8 flex flex-col justify-between h-[360px] sm:h-[400px] shadow-xs hover:shadow-card hover:border-accent-crimson/50 hover:bg-white transition-all duration-300 group">
                  
                  {/* Frame Header */}
                  <div className="space-y-2 text-center">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 flex items-center justify-center gap-1.5">
                      <span className="text-accent-crimson font-black">✦</span>
                      <span>FRAME 1</span>
                    </span>
                    <h4 className="text-lg font-bold text-zinc-950">Backend & Architecture</h4>
                  </div>

                  {/* Frame Visual Preview */}
                  <div className="my-auto p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-2 text-left">
                    <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                      <span>ENGINEERING DISCIPLINE</span>
                      <span className="text-emerald-600 font-bold">STABLE</span>
                    </div>
                    <p className="text-xs font-semibold text-zinc-800 leading-snug">
                      Java Spring Boot, relational PostgreSQL, database indexing, and strict token authorization.
                    </p>
                    <div className="flex gap-1.5 pt-1 text-[10px] font-mono text-zinc-500">
                      <span className="px-2 py-0.5 rounded bg-zinc-100">Java 21</span>
                      <span className="px-2 py-0.5 rounded bg-zinc-100">SQL</span>
                      <span className="px-2 py-0.5 rounded bg-zinc-100">JWT</span>
                    </div>
                  </div>

                  {/* Frame Bottom Note */}
                  <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 text-center">
                    Resilient Data Models
                  </p>

                </div>
              </TiltCard>
            </motion.div>

            {/* FRAME 2: Frontend & Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <TiltCard tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} className="h-full">
                <div className="rounded-[32px] bg-[#F7F7F8] border border-zinc-200/80 p-7 sm:p-8 flex flex-col justify-between h-[360px] sm:h-[400px] shadow-xs hover:shadow-card hover:border-accent-crimson/50 hover:bg-white transition-all duration-300 group">
                  
                  {/* Frame Header */}
                  <div className="space-y-2 text-center">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 flex items-center justify-center gap-1.5">
                      <span className="text-accent-crimson font-black">✦</span>
                      <span>FRAME 2</span>
                    </span>
                    <h4 className="text-lg font-bold text-zinc-950">UI/UX & Mobile Apps</h4>
                  </div>

                  {/* Frame Visual Preview */}
                  <div className="my-auto p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-2 text-left">
                    <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                      <span>CONVERSION PSYCHOLOGY</span>
                      <span className="text-accent-crimson font-bold">FLUID</span>
                    </div>
                    <p className="text-xs font-semibold text-zinc-800 leading-snug">
                      React 19, TypeScript, React Native, micro-animations, and sub-second responsive viewport scaling.
                    </p>
                    <div className="flex gap-1.5 pt-1 text-[10px] font-mono text-zinc-500">
                      <span className="px-2 py-0.5 rounded bg-zinc-100">React 19</span>
                      <span className="px-2 py-0.5 rounded bg-zinc-100">iOS/Android</span>
                      <span className="px-2 py-0.5 rounded bg-zinc-100">Tailwind</span>
                    </div>
                  </div>

                  {/* Frame Bottom Note */}
                  <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 text-center">
                    High-Converting Products
                  </p>

                </div>
              </TiltCard>
            </motion.div>

            {/* FRAME 3: AI & Automation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <TiltCard tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} className="h-full">
                <div className="rounded-[32px] bg-[#F7F7F8] border border-zinc-200/80 p-7 sm:p-8 flex flex-col justify-between h-[360px] sm:h-[400px] shadow-xs hover:shadow-card hover:border-accent-crimson/50 hover:bg-white transition-all duration-300 group">
                  
                  {/* Frame Header */}
                  <div className="space-y-2 text-center">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 flex items-center justify-center gap-1.5">
                      <span className="text-accent-crimson font-black">✦</span>
                      <span>FRAME 3</span>
                    </span>
                    <h4 className="text-lg font-bold text-zinc-950">AI & Autonomous Agents</h4>
                  </div>

                  {/* Frame Visual Preview */}
                  <div className="my-auto p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-2 text-left">
                    <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                      <span>INTELLIGENT PIPELINES</span>
                      <span className="text-purple-600 font-bold">SMART</span>
                    </div>
                    <p className="text-xs font-semibold text-zinc-800 leading-snug">
                      Trained RAG knowledge bases, 24/7 WhatsApp customer bots, and webhook CRM synchronization.
                    </p>
                    <div className="flex gap-1.5 pt-1 text-[10px] font-mono text-zinc-500">
                      <span className="px-2 py-0.5 rounded bg-zinc-100">Gemini</span>
                      <span className="px-2 py-0.5 rounded bg-zinc-100">RAG</span>
                      <span className="px-2 py-0.5 rounded bg-zinc-100">Webhooks</span>
                    </div>
                  </div>

                  {/* Frame Bottom Note */}
                  <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 text-center">
                    Automated Growth
                  </p>

                </div>
              </TiltCard>
            </motion.div>

          </div>

        </div>

        {/* Client Logos Bar */}
        <div className="text-center space-y-6 pt-4 border-t border-zinc-200/80">
          <p className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.25em] text-zinc-400">
            TRUSTED BY AMBITIOUS BUSINESSES & CLIENTS
          </p>

          <div className="flex items-center justify-center gap-8 sm:gap-14 flex-wrap opacity-65 hover:opacity-100 transition-opacity">
            {CLIENT_LOGOS.map((client, idx) => (
              <span
                key={idx}
                className={`text-sm sm:text-base text-zinc-700 hover:text-accent-crimson transition-colors cursor-default select-none ${client.font}`}
              >
                {client.name}
              </span>
            ))}
          </div>
        </div>

        {/* "Little about myself" Banner with Bold Red Stats */}
        <div className="border-t border-b border-zinc-200/80 py-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Story Bio Column */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
                KNOW ME
              </span>

              <div className="flex items-center gap-3">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950">
                  Little about myself<span className="text-accent-crimson">.</span>
                </h3>
                <span className="text-2xl sm:text-3xl select-none" role="img" aria-label="Developer emoji">
                  👨‍💻
                </span>
              </div>

              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                <strong>I'm Rohith</strong>. I started in engineering, moved into building high-converting digital products and full-stack systems, giving me a distinct instinct — less <em>“make it generic,”</em> more <strong>“will this actually convert, perform with zero lag, and deliver real business ROI?”</strong>
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs font-medium text-zinc-500 font-mono">
                <span>📍 Namakkal, Tamil Nadu, India</span>
                <span>•</span>
                <span className="text-emerald-600 font-bold">● Available for Projects</span>
              </div>
            </div>

            {/* Bold Red Stats Column */}
            <div className="lg:col-span-5 grid grid-cols-3 gap-4 text-center lg:text-left border-t lg:border-t-0 lg:border-l border-zinc-200 pt-6 lg:pt-0 lg:pl-8">
              
              {/* Stat 1 */}
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-accent-crimson tracking-tight font-mono">
                  03
                </div>
                <p className="text-[9px] sm:text-[10px] uppercase font-mono font-bold text-zinc-400 leading-tight">
                  Years In<br />Full-Stack
                </p>
              </div>

              {/* Stat 2 */}
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-accent-crimson tracking-tight font-mono">
                  15+
                </div>
                <p className="text-[9px] sm:text-[10px] uppercase font-mono font-bold text-zinc-400 leading-tight">
                  Projects<br />Delivered
                </p>
              </div>

              {/* Stat 3 */}
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-accent-crimson tracking-tight font-mono">
                  100%
                </div>
                <p className="text-[9px] sm:text-[10px] uppercase font-mono font-bold text-zinc-400 leading-tight">
                  Code & IP<br />Ownership
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Technical Stack Matrix */}
        <div className="space-y-8">
          <div>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-accent-crimson font-mono inline-flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Production Architecture & Engineering Standards</span>
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-950 mt-1">
              Production-grade technologies we employ.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {techStackData.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
              >
                <TiltCard tiltMaxAngleX={4} tiltMaxAngleY={4} scale={1.015} className="h-full">
                  <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/90 shadow-2xs hover:border-accent-crimson hover:bg-white hover:shadow-card transition-all duration-300 space-y-3 h-full cursor-default flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-zinc-900 group-hover:text-accent-crimson transition-colors uppercase tracking-wider font-mono">
                        {category.title}
                      </h4>
                      <p className="text-xs text-zinc-600 leading-relaxed mt-1.5 font-normal">
                        {category.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-200/60">
                      {category.skills.map((tech) => (
                        <span
                          key={tech.name}
                          className="px-2 py-0.5 rounded-md bg-white border border-zinc-200 text-[10px] font-mono font-medium text-zinc-800 hover:border-accent-crimson hover:text-accent-crimson transition-colors cursor-default"
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}


