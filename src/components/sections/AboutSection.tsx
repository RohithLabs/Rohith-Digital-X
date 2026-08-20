import React from "react"
import { motion } from "framer-motion"
import { techStackData } from "@/data/techStack"
import { Button } from "@/components/ui/button"
import { TiltCard } from "@/components/ui/tilt-card"
import { MapPin, Mail, Phone, CheckCircle, ArrowRight, Sparkles, Terminal } from "lucide-react"
import { scrollToSection } from "@/lib/utils"

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#FAFAFA] border-t border-zinc-200/70 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Grid: Bio on Left, Tech Architecture on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Founder Bio Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-widest text-accent-crimson font-mono inline-flex items-center gap-1.5"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>About The Agency & Leadership</span>
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 mt-2 mb-4"
              >
                Led by Rohith E. Built with{" "}
                <span className="text-accent-crimson font-black">
                  engineering discipline.
                </span>
              </motion.h2>
            </div>

            {/* Core Bio Statement Card with 3D Tilt */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TiltCard tiltMaxAngleX={4} tiltMaxAngleY={4} scale={1.015}>
                <div className="p-6 sm:p-7 rounded-3xl bg-white border border-zinc-200 shadow-card space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-white font-mono font-extrabold text-base shadow-sm">
                        RDX
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-zinc-900">Rohith E</h3>
                        <p className="text-xs text-zinc-500 font-medium">
                          Founder & Lead Full-Stack Developer
                        </p>
                      </div>
                    </div>

                    {/* Live Founder Status Beacon */}
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-mono font-semibold">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span>Available</span>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-700 leading-relaxed font-normal">
                    <strong>Rohith Digital X</strong> is an independent digital development agency led by <strong>Rohith E</strong>,
                    a Java backend & React developer based in <strong>Namakkal, Tamil Nadu</strong>.
                  </p>
                  
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    We bridge the gap between high-converting user interfaces and scalable, secure backend systems.
                    Every project is planned methodically, architected cleanly, and supported with dedication.
                  </p>

                  {/* Verified Details */}
                  <div className="pt-2 space-y-2 text-xs text-zinc-600 font-medium border-t border-zinc-100">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent-crimson shrink-0" />
                      <span>Namakkal, Tamil Nadu, India</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-accent-crimson shrink-0" />
                      <a href="mailto:e.rohit3130@gmail.com" className="hover:text-accent-crimson transition-colors font-mono">
                        e.rohit3130@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-accent-crimson shrink-0" />
                      <a href="tel:+919655483130" className="hover:text-accent-crimson transition-colors font-mono">
                        +91 96554 83130
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>

            {/* Guiding Principles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-3"
            >
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                Foundational Principles
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Clean, maintainable, modular codebase.",
                  "Zero fake hype or outsourced low-quality templates.",
                  "Direct founder communication and accountable sprint timelines.",
                  "Production security and database durability as default standards."
                ].map((principle, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-zinc-700">
                    <CheckCircle className="h-4 w-4 text-accent-crimson shrink-0 mt-0.5" />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <Button
              variant="default"
              size="default"
              onClick={() => scrollToSection("contact")}
              className="gap-2 text-xs font-bold hover:scale-105 transition-transform"
            >
              <span>Connect Directly With Rohith</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>

          {/* Tech Stack Matrix Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-widest text-accent-crimson font-mono"
              >
                Technical Stack & Architecture
              </motion.span>
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl font-bold tracking-tight text-zinc-950 mt-1 mb-2"
              >
                Production-grade technologies we employ.
              </motion.h3>
              <p className="text-xs text-zinc-500">
                We select resilient, industry-standard frameworks optimized for speed, security, and long-term maintainability.
              </p>
            </div>

            {/* Tech Categories Grid with 3D TiltCards and Hover Bounce */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techStackData.map((category, idx) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                >
                  <TiltCard tiltMaxAngleX={4} tiltMaxAngleY={4} scale={1.015} className="h-full">
                    <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-xs hover:border-accent-crimson hover:shadow-card transition-all duration-300 space-y-3 h-full cursor-default">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-zinc-900 group-hover:text-accent-crimson transition-colors">
                          {category.title}
                        </h4>
                        <span className="text-[10px] font-mono text-zinc-400 uppercase">
                          Core Stack
                        </span>
                      </div>

                      <p className="text-xs text-zinc-500 leading-normal">
                        {category.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {category.skills.map((tech) => (
                          <span
                            key={tech.name}
                            className="px-2.5 py-1 rounded-lg bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-800 hover:border-accent-crimson hover:bg-red-50/60 hover:text-accent-crimson transition-all duration-150 cursor-default"
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

      </div>
    </section>
  )
}
