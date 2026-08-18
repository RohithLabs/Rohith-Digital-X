import React, { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  originX: number
  originY: number
  vx: number
  vy: number
  radius: number
  baseAlpha: number
  alpha: number
  isAccent: boolean
  pulseSpeed: number
  pulseVal: number
}

export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const dpr = window.devicePixelRatio || 1

    let width = 0
    let height = 0

    const updateSize = () => {
      if (!canvas || !canvas.parentElement) return
      width = canvas.parentElement.clientWidth
      height = canvas.parentElement.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(dpr, dpr)
      initParticles()
    }

    // Mouse tracking
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 160,
      isHovered: false,
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.isHovered = true
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
      mouse.isHovered = false
    }

    window.addEventListener("resize", updateSize)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    let particles: Particle[] = []

    const initParticles = () => {
      particles = []
      // High node density
      const count = Math.min(Math.floor((width * height) / 12000), 75)

      for (let i = 0; i < count; i++) {
        const isAccent = Math.random() < 0.35 // 35% crimson red nodes
        const x = Math.random() * width
        const y = Math.random() * height
        particles.push({
          x,
          y,
          originX: x,
          originY: y,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          radius: isAccent ? Math.random() * 2 + 3.2 : Math.random() * 1.8 + 2.2, // Clearly visible balls
          baseAlpha: isAccent ? 0.85 : 0.45,
          alpha: isAccent ? 0.85 : 0.45,
          isAccent,
          pulseSpeed: Math.random() * 0.03 + 0.015,
          pulseVal: Math.random() * Math.PI,
        })
      }
    }

    updateSize()

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // 1. Draw connecting lines between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 140) {
            const lineAlpha = (1 - dist / 140) * 0.22
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle =
              particles[i].isAccent || particles[j].isAccent
                ? `rgba(220, 38, 38, ${lineAlpha * 1.4})`
                : `rgba(60, 60, 75, ${lineAlpha})`
            ctx.lineWidth = particles[i].isAccent || particles[j].isAccent ? 1.0 : 0.7
            ctx.stroke()
          }
        }
      }

      // 2. Draw dynamic interactive laser connection to cursor
      if (mouse.isHovered && mouse.x > 0 && mouse.y > 0) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i]
          const mdx = p.x - mouse.x
          const mdy = p.y - mouse.y
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy)

          if (mDist < mouse.radius) {
            const lineAlpha = (1 - mDist / mouse.radius) * 0.45
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = p.isAccent
              ? `rgba(220, 38, 38, ${lineAlpha})`
              : `rgba(15, 23, 42, ${lineAlpha * 0.8})`
            ctx.lineWidth = 1.2
            ctx.stroke()
          }
        }

        // Mouse focal ring
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(220, 38, 38, 0.7)"
        ctx.fill()
      }

      // 3. Draw and update each particle ball
      particles.forEach((p) => {
        p.pulseVal += p.pulseSpeed
        const pulse = Math.sin(p.pulseVal) * 0.6

        p.x += p.vx
        p.y += p.vy

        // Wrap around viewport boundaries smoothly
        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20
        if (p.y < -20) p.y = height + 20
        if (p.y > height + 20) p.y = -20

        // Mouse interactive physics (elastic magnetic push)
        if (mouse.isHovered) {
          const mdx = p.x - mouse.x
          const mdy = p.y - mouse.y
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy)

          if (mDist < mouse.radius && mDist > 0) {
            const force = (1 - mDist / mouse.radius) * 3.0
            p.x += (mdx / mDist) * force
            p.y += (mdy / mDist) * force
            p.alpha = Math.min(p.baseAlpha + 0.35, 1.0)
          } else {
            p.alpha = p.baseAlpha
          }
        }

        // Draw outer glowing halo for accent nodes
        if (p.isAccent) {
          const glowRadius = (p.radius + 4 + pulse)
          const gradient = ctx.createRadialGradient(p.x, p.y, p.radius * 0.5, p.x, p.y, glowRadius)
          gradient.addColorStop(0, "rgba(220, 38, 38, 0.35)")
          gradient.addColorStop(1, "rgba(220, 38, 38, 0)")
          ctx.beginPath()
          ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2)
          ctx.fillStyle = gradient
          ctx.fill()
        }

        // Draw solid core ball
        ctx.beginPath()
        ctx.arc(p.x, p.y, Math.max(p.radius + pulse * 0.4, 1.5), 0, Math.PI * 2)
        if (p.isAccent) {
          ctx.fillStyle = `rgba(220, 38, 38, ${p.alpha})`
        } else {
          ctx.fillStyle = `rgba(24, 24, 27, ${p.alpha})`
        }
        ctx.fill()

        // Subtle specular highlight on accent balls
        if (p.isAccent) {
          ctx.beginPath()
          ctx.arc(p.x - p.radius * 0.25, p.y - p.radius * 0.25, p.radius * 0.35, 0, Math.PI * 2)
          ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
          ctx.fill()
        }
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", updateSize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-95"
      aria-hidden="true"
    />
  )
}
