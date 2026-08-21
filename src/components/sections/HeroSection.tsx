import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Code, Smartphone, Server, Bot, ShieldCheck } from "lucide-react"
import { HeroCanvas } from "@/components/visual/HeroCanvas"
import { Particles } from "@/components/ui/particles"
import { BorderBeam } from "@/components/ui/border-beam"
import { TiltCard } from "@/components/ui/tilt-card"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { FlipWords } from "@/components/ui/flip-words"
import { scrollToSection } from "@/lib/utils"

const KINETIC_PHRASES = [
  "high-converting websites.",
  "native mobile apps.",
  "scalable cloud systems.",
  "custom AI agents.",
]

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-36 sm:pt-44 pb-16 sm:pb-20 overflow-hidden bg-[#FAFAFA]">
      {/* Background Interactive Nodes Canvas */}
      <HeroCanvas />

      {/* Interactive Particle Atmosphere */}
      <Particles quantity={35} staticity={40} ease={30} size={0.6} color="#DC2626" />

      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 subtle-grid opacity-50 pointer-events-none z-0" />
      
      {/* Subtle radial lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[300px] sm:h-[400px] bg-red-100/30 rounded-full blur-3xl pointer-events-none z-0 animate-pulse-glow" />

      <div className="container max-w-5xl mx-auto relative z-10 px-4 sm:px-6">
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-7 max-w-4xl mx-auto">
          
          {/* Eyebrow / Agency Quality Badge with Apple Logo */}
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-950 text-white shadow-lg border border-zinc-800 backdrop-blur-xl group hover:border-accent-crimson transition-all relative z-20"
          >
            {/* Apple Logo SVG */}
            <svg
              className="h-3.5 w-3.5 fill-white shrink-0 group-hover:scale-110 transition-transform"
              viewBox="0 0 170 170"
            >
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.58-7.77-11.64-14.19-5.74-8.87-10.22-19.16-13.43-30.86-3.21-11.7-4.82-22.95-4.82-33.74 0-14.28 3.57-26.04 10.7-35.29 7.14-9.25 16.32-13.97 27.53-14.15 4.97 0 10.45 1.25 16.44 3.75 5.99 2.5 9.87 3.8 11.64 3.9 1.54 0 5.67-1.42 12.39-4.26 6.72-2.84 12.28-4.08 16.69-3.73 12.7.99 22.58 5.76 29.64 14.31-11.39 6.89-16.96 16.27-16.71 28.14.25 9.53 3.99 17.51 11.22 23.94 4.5 4.02 9.63 6.94 15.4 8.76-.87 2.61-1.84 5.3-2.91 8.08zM119.22 31.84c0-7.39 2.69-14.33 8.07-20.81 5.38-6.49 12.07-10.48 20.07-11.98.37 1.58.55 3.03.55 4.36 0 7.35-2.82 14.49-8.46 21.42-5.64 6.93-12.44 10.87-20.4 11.83-.06-1.57.17-3.18.17-4.82z" />
            </svg>

            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-200 font-pilcrow">
              DIGITAL PRODUCTS FOR AMBITIOUS BUSINESSES
            </span>
          </motion.div>

          {/* Main Clean Kinetic Headline with Staggered Word Reveal & FlipWords */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] text-zinc-950 leading-[1.12] sm:leading-[1.06] max-w-4xl mx-auto text-center font-display"
          >
            <span>Build faster. <span className="font-boska italic font-normal text-zinc-800">Sell smarter.</span></span>
            <div className="flex items-center justify-center flex-wrap gap-x-2.5 mt-1 sm:mt-1.5 mx-auto text-center">
              <span className="text-zinc-900 font-display font-black">Grow with</span>
              <FlipWords words={KINETIC_PHRASES} duration={3000} className="text-accent-crimson inline-flex justify-center text-center font-black" />
            </div>
          </motion.h1>

          {/* Supporting Text with Fluid Typography */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-sm sm:text-base md:text-lg text-zinc-600 max-w-2xl mx-auto text-center font-normal leading-relaxed px-1 sm:px-0 font-sans"
          >
            We design, build, and deploy high-performance web applications, native mobile apps, and autonomous AI agents for ambitious founders and modern companies.
          </motion.p>

          {/* Call to Actions with ShimmerButton & Interactive Hover Dynamics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 w-full sm:w-auto mx-auto pt-1 sm:pt-2"
          >
            <ShimmerButton
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto text-xs sm:text-sm py-3 sm:py-3.5 px-7 sm:px-8 font-bold justify-center"
            >
              <span>Let's connect & build</span>
              <ArrowRight className="h-4 w-4 shrink-0" />
            </ShimmerButton>

            <button
              onClick={() => scrollToSection("work")}
              className="w-full sm:w-auto text-xs sm:text-sm py-3 sm:py-3.5 px-6 rounded-full border border-zinc-300 bg-white hover:border-zinc-900 text-zinc-900 font-semibold transition-all shadow-xs cursor-pointer active:scale-95"
            >
              Explore Selected Work ↗
            </button>
          </motion.div>

          {/* Interactive Hero Architecture Visual Card with Floating Stat Chips & 3D Tilt */}
          <div className="relative w-full max-w-3xl mt-4 sm:mt-6">
            
            {/* Floating Live Badge Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="hidden md:flex absolute -right-5 -bottom-3 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800 shadow-card text-xs font-semibold text-white backdrop-blur-md"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>100% Code Ownership</span>
            </motion.div>

            <TiltCard tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.01}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="relative w-full rounded-2xl border border-zinc-200/90 bg-white/95 backdrop-blur-md shadow-card p-3.5 sm:p-6 text-left overflow-hidden group"
              >
                {/* Border Beam */}
                <BorderBeam size={180} duration={7} colorFrom="#DC2626" colorTo="#EF4444" borderWidth={1.5} />

                {/* Window Topbar */}
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-zinc-100">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-emerald-400" />
                    <span className="ml-1 sm:ml-2 text-[10px] sm:text-xs font-mono font-medium text-zinc-500 truncate max-w-[170px] sm:max-w-none">
                      rohith-digital-x / engineering-suite
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-[10px] sm:text-[11px] font-mono font-semibold text-emerald-700">
                      Available for Projects
                    </span>
                  </div>
                </div>

                {/* Micro Pillars Grid with Micro Hover Reaction */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-3 sm:pt-4">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-accent-crimson hover:bg-red-50/40 hover:shadow-xs transition-all duration-200 group/pillar">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-zinc-900 group-hover/pillar:text-accent-crimson transition-colors mb-0.5 sm:mb-1">
                      <Code className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-accent-crimson shrink-0" />
                      <span className="font-general font-bold">Websites</span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-zinc-500 font-general">Fast React / SEO</p>
                    <div className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs font-trench text-zinc-800 font-bold">From ₹5,000</div>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-accent-crimson hover:bg-red-50/40 hover:shadow-xs transition-all duration-200 group/pillar">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-zinc-900 group-hover/pillar:text-accent-crimson transition-colors mb-0.5 sm:mb-1">
                      <Smartphone className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-accent-crimson shrink-0" />
                      <span className="font-general font-bold">Mobile Apps</span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-zinc-500 font-general">Android & iOS</p>
                    <div className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs font-trench text-zinc-800 font-bold">From ₹30,000</div>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-accent-crimson hover:bg-red-50/40 hover:shadow-xs transition-all duration-200 group/pillar">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-zinc-900 group-hover/pillar:text-accent-crimson transition-colors mb-0.5 sm:mb-1">
                      <Server className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-accent-crimson shrink-0" />
                      <span className="font-general font-bold">Backends</span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-zinc-500 font-general">Spring Boot / SQL</p>
                    <div className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs font-trench text-zinc-800 font-bold">Secure REST API</div>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-accent-crimson hover:bg-red-50/40 hover:shadow-xs transition-all duration-200 group/pillar">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-zinc-900 group-hover/pillar:text-accent-crimson transition-colors mb-0.5 sm:mb-1">
                      <Bot className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-accent-crimson shrink-0" />
                      <span className="font-general font-bold">AI Agents</span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-zinc-500 font-general">Workflows & Bots</p>
                    <div className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs font-trench text-zinc-800 font-bold">From ₹20,000</div>
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
