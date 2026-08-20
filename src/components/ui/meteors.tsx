import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface MeteorsProps {
  number?: number
  minDelay?: number
  maxDelay?: number
  minDuration?: number
  maxDuration?: number
  angle?: number
  className?: string
}

export const Meteors: React.FC<MeteorsProps> = ({
  number = 16,
  minDelay = 0.2,
  maxDelay = 1.5,
  minDuration = 2,
  maxDuration = 8,
  angle = 215,
  className,
}) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([])

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      "--angle": -angle + "deg",
      top: "-5%",
      left: `calc(0% + ${Math.floor(Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200))}px)`,
      animationDelay: Math.random() * (maxDelay - minDelay) + minDelay + "s",
      animationDuration:
        Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) + "s",
    }))
    setMeteorStyles(styles)
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          style={{ ...style }}
          className={cn(
            "animate-meteor pointer-events-none absolute h-0.5 w-0.5 rotate-[var(--angle)] rounded-full bg-red-400 shadow-[0_0_0_1px_#ffffff20]",
            className
          )}
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[60px] -translate-y-1/2 bg-gradient-to-r from-red-500/80 to-transparent" />
        </span>
      ))}
    </div>
  )
}
