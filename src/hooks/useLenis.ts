import { useEffect } from "react"
import Lenis from "lenis"

export function useLenis() {
  useEffect(() => {
    // Only activate smooth scroll on larger screens to preserve native fluid momentum on touch devices
    if (typeof window === "undefined" || window.innerWidth < 768) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])
}
