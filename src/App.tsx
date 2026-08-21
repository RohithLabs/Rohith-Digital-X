import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollToTop } from "@/components/layout/ScrollToTop"
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar"
import { useLenis } from "@/hooks/useLenis"
import { NavigationProvider, useNavigation } from "@/context/NavigationContext"

// Dedicated Separate Pages
import { HomePage } from "@/pages/HomePage"
import { AboutPage } from "@/pages/AboutPage"
import { WorkPage } from "@/pages/WorkPage"
import { PackagesPage } from "@/pages/PackagesPage"
import { ServicesPage } from "@/pages/ServicesPage"
import { EstimatorPage } from "@/pages/EstimatorPage"
import { GuestbookPage } from "@/pages/GuestbookPage"
import { AttributionPage } from "@/pages/AttributionPage"
import { ContactPage } from "@/pages/ContactPage"

function AppContent() {
  const { currentPage } = useNavigation()

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <AboutPage />
      case "work":
        return <WorkPage />
      case "packages":
        return <PackagesPage />
      case "services":
        return <ServicesPage />
      case "estimator":
        return <EstimatorPage />
      case "guestbook":
        return <GuestbookPage />
      case "attribution":
        return <AttributionPage />
      case "contact":
        return <ContactPage />
      case "home":
      default:
        return <HomePage />
    }
  }

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] text-zinc-900 flex flex-col font-sans selection:bg-accent-crimson selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Sleek Vertical Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Multi-Page Route Render with Smooth Page Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Sleek Dark Executive Footer */}
      <Footer />

      {/* Floating Scroll to Top */}
      <ScrollToTop />
    </div>
  )
}

export function App() {
  useLenis()

  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  )
}

export default App
