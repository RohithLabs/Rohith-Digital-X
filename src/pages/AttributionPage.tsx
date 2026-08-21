import React from "react"
import { motion } from "framer-motion"

const ATTRIBUTIONS = [
  {
    title: "Fontshare Typography Suite (11 Typefaces)",
    description: "Curated Indian Type Foundry & Fontshare editorial typography systems.",
    items: [
      { name: "General Sans", purpose: "Primary Interface Body, Controls & Fluid Reading" },
      { name: "Boska", purpose: "Luxury Editorial Serif & Refined Heading Accents" },
      { name: "Bonny", purpose: "Contemporary Display Serif for Methodology & Frame Titles" },
      { name: "Melodrama", purpose: "Artistic Expressive Serif for Showcase Moments" },
      { name: "Trench Slab", purpose: "Heavy Architectural Slab for Stats, Numbers & Pricing" },
      { name: "Khand", purpose: "High-Impact Condensed Display for Monumental Watermarks" },
      { name: "Pilcrow Rounded", purpose: "Technical Metadata, System Badges & Code Tags" },
      { name: "Britney", purpose: "Creative Experimental Display for Taglines & Accents" },
      { name: "Hind", purpose: "Balanced Humanist Sans for Long-Form Narrative Copy" },
      { name: "Quicksand", purpose: "Friendly Geometric Rounded for Interactive Elements & Signatures" },
      { name: "Nunito", purpose: "Soft Rounded Secondary Reading & Tooltips" },
    ],
  },
  {
    title: "Frameworks & Core Architecture",
    description: "Modern, high-performance UI and animation libraries.",
    items: [
      { name: "React 19 & TypeScript", purpose: "Type-safe UI component hierarchy" },
      { name: "Vite 6", purpose: "Sub-second dev server and optimized production bundler" },
      { name: "Tailwind CSS", purpose: "Precision utility design system & curated tokens" },
      { name: "Framer Motion", purpose: "Physics-based continuous spring animations" },
      { name: "Lenis", purpose: "Butter-smooth momentum scrolling engine" },
      { name: "Lucide React", purpose: "Crisp vector icons & UI glyphs" },
    ],
  },
  {
    title: "Backend & Systems Stack",
    description: "Production architectures utilized across client projects.",
    items: [
      { name: "Java 21 & Spring Boot", purpose: "High-concurrency backend API services" },
      { name: "PostgreSQL & Supabase", purpose: "ACID-compliant relational database architecture" },
      { name: "Flutter & React Native", purpose: "Cross-platform mobile applications" },
      { name: "OpenAI & Gemini API", purpose: "RAG pipelines and autonomous workflow agents" },
    ],
  },
]

export const AttributionPage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-32 pb-20 space-y-12">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-zinc-600"
        >
          <span className="text-accent-crimson font-black text-sm">✦</span>
          <span>SYSTEM BLUEPRINT</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] text-zinc-950 font-display"
        >
          Attribution & Stack<span className="text-accent-crimson">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-zinc-600 max-w-xl mx-auto font-normal leading-relaxed"
        >
          Transparent acknowledgment of all design tokens, typefaces, and engineering libraries powering Rohith Digital X.
        </motion.p>
      </div>

      <div className="container max-w-3xl mx-auto px-4 space-y-6">
        {ATTRIBUTIONS.map((section, idx) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-card space-y-4 text-left"
          >
            <div>
              <h3 className="text-lg font-bold text-zinc-950 font-display">{section.title}</h3>
              <p className="text-xs text-zinc-500">{section.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {section.items.map((item) => (
                <div key={item.name} className="p-3 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-900 font-mono">{item.name}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-crimson" />
                  </div>
                  <p className="text-[11px] text-zinc-600 leading-tight">{item.purpose}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
