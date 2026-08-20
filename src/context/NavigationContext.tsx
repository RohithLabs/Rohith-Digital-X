import React, { createContext, useContext, useState, useEffect } from "react"

export type PageRoute =
  | "home"
  | "about"
  | "work"
  | "services"
  | "packages"
  | "estimator"
  | "guestbook"
  | "attribution"
  | "contact"

interface NavigationContextType {
  currentPage: PageRoute
  navigate: (page: PageRoute, targetSectionId?: string) => void
  contactPrefill: {
    service?: string
    budgetRange?: string
    description?: string
  }
  setContactPrefill: React.Dispatch<
    React.SetStateAction<{
      service?: string
      budgetRange?: string
      description?: string
    }>
  >
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

const pathToRoute = (pathname: string): PageRoute => {
  const clean = pathname.replace(/^\//, "").toLowerCase()
  if (clean === "about") return "about"
  if (clean === "work" || clean === "projects") return "work"
  if (clean === "services") return "services"
  if (clean === "packages" || clean === "pricing") return "packages"
  if (clean === "estimator" || clean === "calculator") return "estimator"
  if (clean === "guestbook") return "guestbook"
  if (clean === "attribution") return "attribution"
  if (clean === "contact" || clean === "book") return "contact"
  return "home"
}

const routeToPath = (route: PageRoute): string => {
  if (route === "home") return "/"
  return `/${route}`
}

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => {
    if (typeof window !== "undefined") {
      return pathToRoute(window.location.pathname)
    }
    return "home"
  })

  const [contactPrefill, setContactPrefill] = useState<{
    service?: string
    budgetRange?: string
    description?: string
  }>({})

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(pathToRoute(window.location.pathname))
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [])

  const navigate = (page: PageRoute, targetSectionId?: string) => {
    setCurrentPage(page)
    const newPath = routeToPath(page)
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, "", newPath)
    }

    if (targetSectionId) {
      setTimeout(() => {
        const el = document.getElementById(targetSectionId)
        if (el) {
          el.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        navigate,
        contactPrefill,
        setContactPrefill,
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}

export const useNavigation = () => {
  const context = useContext(NavigationContext)
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider")
  }
  return context
}
