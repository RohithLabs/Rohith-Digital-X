import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ConfettiPiece {
  id: number
  x: number
  y: number
  color: string
  size: number
  rotation: number
  xOffset: number
  duration: number
}

const CONFETTI_COLORS = ["#DC2626", "#EF4444", "#F87171", "#18181B", "#09090B", "#10B981", "#3B82F6", "#F59E0B"]

export const Confetti: React.FC<{ trigger: boolean; onComplete?: () => void }> = ({
  trigger,
  onComplete,
}) => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([])

  useEffect(() => {
    if (trigger) {
      const newPieces: ConfettiPiece[] = Array.from({ length: 45 }, (_, i) => ({
        id: i,
        x: 50 + (Math.random() * 20 - 10),
        y: 50,
        color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        size: Math.floor(Math.random() * 8) + 6,
        rotation: Math.random() * 360,
        xOffset: (Math.random() - 0.5) * 600,
        duration: Math.random() * 1.5 + 1.2,
      }))
      setPieces(newPieces)

      const timer = setTimeout(() => {
        setPieces([])
        onComplete?.()
      }, 2800)

      return () => clearTimeout(timer)
    }
  }, [trigger, onComplete])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <AnimatePresence>
        {pieces.map((piece) => (
          <motion.div
            key={piece.id}
            initial={{
              top: `${piece.y}%`,
              left: `${piece.x}%`,
              opacity: 1,
              scale: 0,
              rotate: 0,
            }}
            animate={{
              top: ["50%", `${piece.y - 30 + Math.random() * 10}%`, "110%"],
              left: [`${piece.x}%`, `calc(${piece.x}% + ${piece.xOffset}px)`],
              opacity: [1, 1, 0],
              scale: [0, 1.2, 0.8],
              rotate: piece.rotation + 720,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: piece.duration,
              ease: [0.25, 1, 0.5, 1],
            }}
            style={{
              position: "absolute",
              width: piece.size,
              height: piece.size * 1.4,
              backgroundColor: piece.color,
              borderRadius: "2px",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
