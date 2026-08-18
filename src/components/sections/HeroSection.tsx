import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Code, Smartphone, Server, Bot, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroCanvas } from "@/components/visual/HeroCanvas"
import { BorderBeam } from "@/components/ui/border-beam"
import { scrollToSection } from "@/lib/utils"

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#FAFAFA]">
      {/* Background Interactive Nodes Canvas */}
      <HeroCanvas />

      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 subtle-grid opacity-60 pointer-events-none z-0" />
      
      {/* Subtle radial lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-red-100/30 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="container max-w-6xl mx-auto relative z-10 px-4 sm:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          
          {/* Eyebrow / Agency Quality Badge (Clean, No Blinking) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950 text-white shadow-xs border border-zinc-800"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent-crimson shrink-0" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-zinc-200 font-mono">
              Digital Products for Ambitious Businesses
            </span>
          </motion.div>

          {/* Main Clean Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-zinc-950 leading-[1.08] max-w-4xl"
          >
            Build a digital presence that{" "}
            <span className="text-accent-crimson font-black">
              moves your business
            </span>{" "}
            forward.
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-zinc-600 max-w-2xl font-normal leading-relaxed"
          >
            <strong className="font-bold text-zinc-950">Rohith Digital X</strong> designs and develops high-quality websites,
            mobile applications, backend systems, and AI automation solutions for modern businesses.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto pt-2"
          >
            <Button
              variant="crimson"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto gap-2 text-base font-bold shadow-crimson-md px-8 py-3.5"
            >
              <span>Start a Project</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("packages")}
              className="w-full sm:w-auto gap-2 text-base font-semibold px-7 py-3.5 bg-white/90 backdrop-blur-xs hover:border-zinc-900"
            >
              <span>View Packages (From ₹5,000)</span>
            </Button>
          </motion.div>

          {/* Trust Statement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-4 flex items-center justify-center gap-2 sm:gap-3 flex-wrap text-xs sm:text-sm font-semibold text-zinc-600"
          >
            <span className="hover:text-zinc-950 transition-colors">Websites</span>
            <span className="text-accent-crimson font-bold">•</span>
            <span className="hover:text-zinc-950 transition-colors">Mobile Apps</span>
            <span className="text-accent-crimson font-bold">•</span>
            <span className="hover:text-zinc-950 transition-colors">Backend Systems</span>
            <span className="text-accent-crimson font-bold">•</span>
            <span className="hover:text-zinc-950 transition-colors">AI Automation</span>
          </motion.div>

          {/* Interactive Hero Architecture Visual Card with BorderBeam from Magic UI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative w-full max-w-3xl mt-6 rounded-2xl border border-zinc-200/90 bg-white/95 backdrop-blur-md shadow-card p-4 sm:p-6 text-left overflow-hidden"
          >
            {/* Animated Travelling Laser Border Beam */}
            <BorderBeam size={160} duration={8} colorFrom="#DC2626" colorTo="#EF4444" />

            {/* Window Topbar */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-2 text-xs font-mono font-medium text-zinc-400">
                  rohith-digital-x / engineering-suite
                </span>
              </div>
              <span className="text-[11px] font-mono font-medium text-zinc-400">
                v2.0 • Production Stack
              </span>
            </div>

            {/* Micro Pillars Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-all">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 mb-1">
                  <Code className="h-3.5 w-3.5 text-accent-crimson" />
                  <span>Websites</span>
                </div>
                <p className="text-[11px] text-zinc-500">Fast React / SEO</p>
                <div className="mt-2 text-[10px] font-mono text-zinc-500 font-semibold">From ₹5,000</div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-all">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 mb-1">
                  <Smartphone className="h-3.5 w-3.5 text-accent-crimson" />
                  <span>Mobile Apps</span>
                </div>
                <p className="text-[11px] text-zinc-500">Android & iOS</p>
                <div className="mt-2 text-[10px] font-mono text-zinc-500 font-semibold">From ₹30,000</div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-all">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 mb-1">
                  <Server className="h-3.5 w-3.5 text-accent-crimson" />
                  <span>Backends</span>
                </div>
                <p className="text-[11px] text-zinc-500">Java / Spring Boot</p>
                <div className="mt-2 text-[10px] font-mono text-zinc-500 font-semibold">Secure REST & SQL</div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-all">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 mb-1">
                  <Bot className="h-3.5 w-3.5 text-accent-crimson" />
                  <span>AI Agents</span>
                </div>
                <p className="text-[11px] text-zinc-500">Workflows & Bots</p>
                <div className="mt-2 text-[10px] font-mono text-zinc-500 font-semibold">From ₹20,000</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
