import React from "react"
import { techStackData } from "@/data/techStack"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Phone, CheckCircle, ArrowRight } from "lucide-react"
import { scrollToSection } from "@/lib/utils"

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#FAFAFA] border-t border-zinc-200/70 relative">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Grid: Bio on Left, Tech Architecture on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Founder Bio Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent-crimson font-mono">
                About The Agency & Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 editorial-title mt-2 mb-4">
                Led by Rohith E. Built with{" "}
                <span className="font-editorial italic font-normal text-accent-crimson">
                  engineering discipline.
                </span>
              </h2>
            </div>

            {/* Core Bio Statement */}
            <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-subtle space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-zinc-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-950 text-white font-mono font-bold text-base">
                  RDX
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-900">Rohith E</h3>
                  <p className="text-xs text-zinc-500 font-medium">
                    Founder & Lead Backend Developer
                  </p>
                </div>
              </div>

              <p className="text-sm text-zinc-700 leading-relaxed font-normal">
                <strong>Rohith Digital X</strong> is an independent digital development agency led by <strong>Rohith E</strong>,
                a Java backend developer and technology enthusiast based in <strong>Namakkal, Tamil Nadu</strong>.
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
                  <a href="mailto:e.rohit3130@gmail.com" className="hover:text-accent-crimson transition-colors">
                    e.rohit3130@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-accent-crimson shrink-0" />
                  <a href="tel:+919655483130" className="hover:text-accent-crimson transition-colors">
                    +91 96554 83130
                  </a>
                </div>
              </div>
            </div>

            {/* Guiding Principles */}
            <div className="space-y-3">
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
            </div>

            <Button
              variant="default"
              size="default"
              onClick={() => scrollToSection("contact")}
              className="gap-2 text-xs font-bold"
            >
              <span>Connect Directly With Rohith</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>

          {/* Tech Stack Matrix Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent-crimson font-mono">
                Technical Stack & Architecture
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-zinc-950 mt-1 mb-2">
                Production-grade technologies we employ.
              </h3>
              <p className="text-xs text-zinc-500">
                We select resilient, industry-standard frameworks optimized for speed, security, and long-term maintainability.
              </p>
            </div>

            {/* Tech Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techStackData.map((category) => (
                <div
                  key={category.title}
                  className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-xs hover:border-zinc-300 transition-colors space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-zinc-900">
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
                        className="px-2.5 py-1 rounded-lg bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-800"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
