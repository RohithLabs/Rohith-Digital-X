import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Download, ExternalLink, Code2, Layers, Cpu, CheckCircle } from "lucide-react"

interface AssetsModalProps {
  isOpen: boolean
  onClose: () => void
  initialTab?: "assets" | "bucketlist" | "attribution"
}

export const AssetsModal: React.FC<AssetsModalProps> = ({ isOpen, onClose, initialTab = "assets" }) => {
  const [activeTab, setActiveTab] = React.useState<"assets" | "bucketlist" | "attribution">(initialTab)

  React.useEffect(() => {
    setActiveTab(initialTab)
  }, [initialTab, isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative w-full max-w-2xl rounded-3xl bg-zinc-950 text-white border border-zinc-800 shadow-2xl p-6 sm:p-8 z-10 space-y-6 max-h-[90vh] flex flex-col"
          >
            {/* Header with Tabs */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab("assets")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold font-sans transition-colors cursor-pointer ${
                    activeTab === "assets"
                      ? "bg-white text-zinc-950 shadow-xs"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Useful Assets
                </button>
                <button
                  onClick={() => setActiveTab("bucketlist")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold font-sans transition-colors cursor-pointer ${
                    activeTab === "bucketlist"
                      ? "bg-white text-zinc-950 shadow-xs"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Bucket List
                </button>
                <button
                  onClick={() => setActiveTab("attribution")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold font-sans transition-colors cursor-pointer ${
                    activeTab === "attribution"
                      ? "bg-white text-zinc-950 shadow-xs"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Attribution
                </button>
              </div>

              <button
                onClick={onClose}
                className="h-8 w-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Tab Contents */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-1">
              {activeTab === "assets" && (
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white">Full-Stack Production Boilerplate</h4>
                      <p className="text-xs text-zinc-400 font-normal">React 19 + TypeScript + Tailwind + Framer Motion Starter</p>
                    </div>
                    <a
                      href="https://github.com/Rohith-Digital-X"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-accent-crimson text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>GitHub</span>
                    </a>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white">Spring Boot 3 + JWT Security Template</h4>
                      <p className="text-xs text-zinc-400 font-normal">Clean REST API with PostgreSQL connection pooling & Docker</p>
                    </div>
                    <a
                      href="https://github.com/Rohith-Digital-X"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-accent-crimson text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Repo</span>
                    </a>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white">AI Automation Agent RAG Blueprint</h4>
                      <p className="text-xs text-zinc-400 font-normal">Fast vector search and webhook trigger synchronization</p>
                    </div>
                    <a
                      href="https://github.com/Rohith-Digital-X"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-accent-crimson text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Guide</span>
                    </a>
                  </div>
                </div>
              )}

              {activeTab === "bucketlist" && (
                <div className="space-y-3">
                  <div className="space-y-2">
                    <p className="text-xs font-mono uppercase text-zinc-400 tracking-wider">Dreams with a Deadline 🎯</p>
                  </div>
                  {[
                    { task: "Ship 50+ high-impact digital products for founders", done: true },
                    { task: "Build a top-tier open source React + Spring Boot design system", done: true },
                    { task: "Scale autonomous AI customer agents for 100+ businesses", done: false },
                    { task: "Mentor 500+ aspiring full-stack engineers in India", done: false },
                    { task: "Launch a global SaaS platform from Namakkal, Tamil Nadu", done: false },
                  ].map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-3">
                      <div className={`h-5 w-5 rounded-full flex items-center justify-center ${item.done ? "bg-emerald-500 text-white" : "border border-zinc-700 text-transparent"}`}>
                        {item.done && <CheckCircle className="h-3.5 w-3.5" />}
                      </div>
                      <span className={`text-xs font-medium ${item.done ? "text-zinc-200 line-through opacity-80" : "text-white"}`}>
                        {item.task}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "attribution" && (
                <div className="space-y-3 text-xs text-zinc-300 leading-relaxed font-normal">
                  <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-2">
                    <h4 className="text-sm font-bold text-white">Journey to build Rohith Digital X</h4>
                    <p>
                      Crafted with high-performance modern web technologies: React 19, TypeScript, Tailwind CSS, Framer Motion spring physics, Fontshare Cabinet Grotesk & General Sans, and Lenis smooth inertial scrolling.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono text-zinc-400">
                      <span className="px-2 py-1 rounded-md bg-zinc-950 border border-zinc-800">React 19</span>
                      <span className="px-2 py-1 rounded-md bg-zinc-950 border border-zinc-800">Framer Motion</span>
                      <span className="px-2 py-1 rounded-md bg-zinc-950 border border-zinc-800">Cabinet Grotesk</span>
                      <span className="px-2 py-1 rounded-md bg-zinc-950 border border-zinc-800">Lenis</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
