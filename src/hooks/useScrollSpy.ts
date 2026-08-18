import { useState, useEffect } from "react"

export function useScrollSpy(sectionIds: string[], offset: number = 100): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || "")

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + offset

          for (let i = sectionIds.length - 1; i >= 0; i--) {
            const sectionId = sectionIds[i]
            const element = document.getElementById(sectionId)

            if (element) {
              const top = element.offsetTop
              if (scrollPosition >= top) {
                setActiveSection((prev) => (prev !== sectionId ? sectionId : prev))
                break
              }
            }
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [sectionIds.join(","), offset])

  return activeSection
}
