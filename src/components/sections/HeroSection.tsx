import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Code, Smartphone, Server, Bot, Sparkles, ShieldCheck, Zap, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroCanvas } from "@/components/visual/HeroCanvas"
import { BorderBeam } from "@/components/ui/border-beam"
import { TiltCard } from "@/components/ui/tilt-card"
import { scrollToSection } from "@/lib/utils"

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#FAFAFA]">
      {/* Background Interactive Nodes Canvas */}
      <HeroCanvas />

      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 subtle-grid opacity-60 pointer-events-none z-0" />
      
      {/* Subtle radial lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-red-100/30 rounded-full blur-3xl pointer-events-none z-0 animate-pulse-glow" />

      <div className="container max-w-6xl mx-auto relative z-10 px-4 sm:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          
          {/* Eyebrow / Agency Quality Badge with Animated Pulse Glow */}
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-950 text-white shadow-md border border-zinc-800 backdrop-blur-md group hover:border-accent-crimson transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-crimson opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-crimson" />
            </span>
            <Sparkles className="h-3.5 w-3.5 text-accent-crimson shrink-0 group-hover:rotate-12 transition-transform" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-zinc-200 font-mono">
              Digital Products for Ambitious Businesses
            </span>
          </motion.div>

          {/* Main Clean Kinetic Headline with Staggered Word Reveal */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-zinc-950 leading-[1.08] max-w-4xl"
          >
            Build a digital presence that{" "}
            <span className="relative inline-block text-accent-crimson font-black">
              moves your business
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
                className="absolute bottom-1 left-0 h-[3px] bg-accent-crimson/30 rounded-full"
              />
            </span>{" "}
            forward.
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-base sm:text-lg md:text-xl text-zinc-600 max-w-2xl font-normal leading-relaxed"
          >
            <strong className="font-bold text-zinc-950">Rohith Digital X</strong> designs and develops high-performance websites,
            native mobile applications, scalable backends, and AI automation solutions for modern companies.
          </motion.p>

          {/* Call to Actions with Interactive Hover Micro-Dynamics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto pt-2"
          >
            <Button
              variant="crimson"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto gap-2 text-base font-bold shadow-crimson-md px-8 py-3.5 hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              <span>Start a Project</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("packages")}
              className="w-full sm:w-auto gap-2 text-base font-semibold px-7 py-3.5 bg-white/90 backdrop-blur-xs hover:border-zinc-900 hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              <span>View Packages (From ₹5,000)</span>
            </Button>
          </motion.div>

          {/* Trust Statement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="pt-3 flex items-center justify-center gap-2 sm:gap-3 flex-wrap text-xs sm:text-sm font-semibold text-zinc-600"
          >
            <span className="hover:text-accent-crimson transition-colors cursor-default">Websites</span>
            <span className="text-accent-crimson font-bold">•</span>
            <span className="hover:text-accent-crimson transition-colors cursor-default">Mobile Apps</span>
            <span className="text-accent-crimson font-bold">•</span>
            <span className="hover:text-accent-crimson transition-colors cursor-default">Backend Systems</span>
            <span className="text-accent-crimson font-bold">•</span>
            <span className="hover:text-accent-crimson transition-colors cursor-default">AI Automation</span>
          </motion.div>

          {/* Interactive Hero Architecture Visual Card with Floating Stat Chips & 3D Tilt */}
          <div className="relative w-full max-w-3xl mt-6">
            
            {/* Floating Live Badge Left (Hidden on very small screens, responsive on sm+) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="hidden sm:flex absolute -left-6 -top-5 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-zinc-200/90 shadow-card text-xs font-semibold text-zinc-900 animate-float-slow backdrop-blur-md"
            >
              <Zap className="h-3.5 w-3.5 text-accent-crimson fill-accent-crimson/20" />
              <span>&lt; 800ms Fast Load Time</span>
            </motion.div>

            {/* Floating Live Badge Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="hidden sm:flex absolute -right-6 -bottom-4 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800 shadow-card text-xs font-semibold text-white animate-float-medium backdrop-blur-md"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>100% Code Ownership</span>
            </motion.div>

            <TiltCard tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.01}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="relative w-full rounded-2xl border border-zinc-200/90 bg-white/95 backdrop-blur-md shadow-card p-4 sm:p-6 text-left overflow-hidden group"
              >
                {/* Animated Travelling Laser Border Beam */}
                <BorderBeam size={180} duration={7} colorFrom="#DC2626" colorTo="#EF4444" borderWidth={2} />

                {/* Window Topbar */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-xs font-mono font-medium text-zinc-500">
                      rohith-digital-x / engineering-suite
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-[11px] font-mono font-semibold text-emerald-600">
                      Operational
                    </span>
                  </div>
                </div>

                {/* Micro Pillars Grid with Micro Hover Reaction */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                  <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-accent-crimson hover:bg-red-50/40 hover:shadow-xs transition-all duration-200 group/pillar">
                    <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 group-hover/pillar:text-accent-crimson transition-colors mb-1">
                      <Code className="h-3.5 w-3.5 text-accent-crimson" />
                      <span>Websites</span>
                    </div>
                    <p className="text-[11px] text-zinc-500">Fast React / SEO</p>
                    <div className="mt-2 text-[10px] font-mono text-zinc-700 font-bold">From ₹5,000</div>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-accent-crimson hover:bg-red-50/40 hover:shadow-xs transition-all duration-200 group/pillar">
                    <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 group-hover/pillar:text-accent-crimson transition-colors mb-1">
                      <Smartphone className="h-3.5 w-3.5 text-accent-crimson" />
                      <span>Mobile Apps</span>
                    </div>
                    <p className="text-[11px] text-zinc-500">Android & iOS</p>
                    <div className="mt-2 text-[10px] font-mono text-zinc-700 font-bold">From ₹30,000</div>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-accent-crimson hover:bg-red-50/40 hover:shadow-xs transition-all duration-200 group/pillar">
                    <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 group-hover/pillar:text-accent-crimson transition-colors mb-1">
                      <Server className="h-3.5 w-3.5 text-accent-crimson" />
                      <span>Backends</span>
                    </div>
                    <p className="text-[11px] text-zinc-500">Spring Boot / SQL</p>
                    <div className="mt-2 text-[10px] font-mono text-zinc-700 font-bold">Secure REST API</div>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-accent-crimson hover:bg-red-50/40 hover:shadow-xs transition-all duration-200 group/pillar">
                    <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 group-hover/pillar:text-accent-crimson transition-colors mb-1">
                      <Bot className="h-3.5 w-3.5 text-accent-crimson" />
                      <span>AI Agents</span>
                    </div>
                    <p className="text-[11px] text-zinc-500">Workflows & Bots</p>
                    <div className="mt-2 text-[10px] font-mono text-zinc-700 font-bold">From ₹20,000</div>
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  )
}
