import React, { useState } from "react"
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"
import { LegalModal } from "@/components/modals/LegalModal"
import { scrollToSection } from "@/lib/utils"

export const Footer: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<"privacy" | "terms" | null>(null)

  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="bg-zinc-950 text-white border-t border-zinc-900 pt-16 pb-12 relative">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/80">
            
            {/* Column 1: Agency Brand & Mission */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex flex-col text-left">
                <div className="text-2xl font-black tracking-tight text-white leading-none">
                  <span>Rohith Digital</span>
                  <span className="text-accent-crimson ml-1.5 font-black">X</span>
                </div>
                <div className="text-[10px] uppercase font-extrabold tracking-[0.28em] text-zinc-400 mt-1">
                  TECHNOLOGY AGENCY
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
                Independent technology and software engineering agency led by Rohith E.
                Crafting robust websites, mobile apps, scalable backends, and AI automation for ambitious businesses.
              </p>

              <div className="pt-2 text-xs text-zinc-400 space-y-1.5 font-mono">
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-accent-crimson" />
                  <span>Namakkal, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-accent-crimson" />
                  <a href="mailto:e.rohit3130@gmail.com" className="hover:text-accent-crimson transition-colors">
                    e.rohit3130@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-accent-crimson" />
                  <a href="tel:+919655483130" className="hover:text-accent-crimson transition-colors">
                    +91 96554 83130
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-300">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs text-zinc-400">
                {["hero", "services", "packages", "work", "why-us", "process", "about", "estimator", "faq"].map((id) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollToSection(id)}
                      className="hover:text-accent-crimson transition-colors capitalize cursor-pointer"
                    >
                      {id.replace("-", " ")}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services Provided */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-300">
                Packages & Services
              </h4>
              <ul className="space-y-2 text-xs text-zinc-400">
                <li>
                  <button
                    onClick={() => scrollToSection("packages")}
                    className="hover:text-accent-crimson transition-colors text-left cursor-pointer"
                  >
                    Starter Landing Page (₹5,000)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("packages")}
                    className="hover:text-accent-crimson transition-colors text-left cursor-pointer font-medium text-white"
                  >
                    Professional Business Website (₹15,000)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("packages")}
                    className="hover:text-accent-crimson transition-colors text-left cursor-pointer"
                  >
                    Complete E-Commerce (₹50,000)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    Mobile App Development (Android/iOS)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    Backend & AI Automation Agents
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Channels & Status */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-300">
                Connect
              </h4>
              <div className="flex flex-col space-y-2 text-xs text-zinc-400">
                <a
                  href="https://wa.me/919655483130"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
                >
                  <span>WhatsApp Direct</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
                <a
                  href="mailto:e.rohit3130@gmail.com"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>Email Consultation</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
                <a
                  href="tel:+919655483130"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>Direct Call</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>

              <div className="pt-3">
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-400">
                  <span className="text-emerald-400 font-bold">● Q3 Available</span>
                  <p className="mt-0.5 text-[10px]">Accepting new website & mobile projects.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Legal */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <div className="flex items-center gap-1">
              <span>© {currentYear} Rohith Digital X. All rights reserved. Founded by Rohith E.</span>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setLegalModalType("privacy")}
                className="hover:text-zinc-300 transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                onClick={() => setLegalModalType("terms")}
                className="hover:text-zinc-300 transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Legal Dialog */}
      <LegalModal
        type={legalModalType}
        isOpen={legalModalType !== null}
        onClose={() => setLegalModalType(null)}
      />
    </>
  )
}
