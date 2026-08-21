import React from "react"
import { motion } from "framer-motion"

interface ShadedBrandWatermarkProps {
  text?: string
  subtext?: string
  className?: string
  variant?: "light" | "dark"
}

export const ShadedBrandWatermark: React.FC<ShadedBrandWatermarkProps> = ({
  text = "ROHITH DIGITAL X",
  subtext = "ENGINEERED FOR SCALE & HIGH-CONVERTING DIGITAL EXPERIENCES",
  className = "",
  variant = "light",
}) => {
  const isLight = variant === "light"

  return (
    <div
      className={`relative w-full overflow-hidden select-none pointer-events-none flex flex-col items-center justify-end ${
        isLight ? "bg-[#FAFAFA] text-zinc-950" : "bg-[#090A0B] text-white"
      } ${className}`}
    >
      {/* Top subtle decorative subline */}
      {subtext && (
        <div className="pt-8 sm:pt-12 pb-2 sm:pb-4 flex items-center gap-2 sm:gap-3 opacity-70">
          <span className="h-px w-6 sm:w-12 bg-zinc-300 dark:bg-zinc-800" />
          <span className="text-[10px] sm:text-xs font-pilcrow font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-zinc-500">
            {subtext}
          </span>
          <span className="h-px w-6 sm:w-12 bg-zinc-300 dark:bg-zinc-800" />
        </div>
      )}

      {/* Mammoth Shaded Typography Watermark */}
      <div className="w-full flex justify-center items-end leading-none overflow-hidden px-2 sm:px-4">
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`font-khand font-black tracking-tight uppercase text-center whitespace-nowrap leading-[0.74] block ${
            isLight
              ? "bg-gradient-to-b from-zinc-400 via-zinc-300/40 to-transparent bg-clip-text text-transparent"
              : "bg-gradient-to-b from-zinc-600 via-zinc-800/30 to-transparent bg-clip-text text-transparent"
          }`}
          style={{
            fontSize: "clamp(4.5rem, 18vw, 17rem)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0) 92%)",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0) 92%)",
          }}
        >
          {text}
        </motion.span>
      </div>

      {/* Crisp bottom baseline dividing line matching the user screenshot */}
      <div className={`w-full h-px ${isLight ? "bg-zinc-900/10" : "bg-zinc-800/80"}`} />
    </div>
  )
}

export default ShadedBrandWatermark
