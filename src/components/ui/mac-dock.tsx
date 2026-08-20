import React, { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"

export interface DockItem {
  id: string
  title: string
  category: string
  icon: React.ReactNode
}

const AUTHENTIC_APP_TOOLS: DockItem[] = [
  {
    id: "figma",
    title: "Figma",
    category: "Interface Design",
    icon: (
      <div className="w-full h-full rounded-[10px] bg-white shadow-md flex items-center justify-center border border-zinc-200/80">
        <svg className="w-5 h-5" viewBox="0 0 38 57" fill="none">
          <path d="M19 28.5C19 33.7467 14.7467 38 9.5 38C4.25329 38 0 33.7467 0 28.5C0 23.2533 4.25329 19 9.5 19C14.7467 19 19 23.2533 19 28.5Z" fill="#0ACF83" />
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#A259FF" />
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
          <path d="M19 19V38H28.5C33.7467 38 38 33.7467 38 28.5C38 23.2533 33.7467 19 28.5 19H19Z" fill="#1ABCFE" />
        </svg>
      </div>
    ),
  },
  {
    id: "xcode",
    title: "Xcode / IDE",
    category: "Apple Native Dev",
    icon: (
      <div className="w-full h-full rounded-[10px] bg-[#1C202B] shadow-md flex items-center justify-center border border-zinc-700/80 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4px_4px]" />
        <svg className="w-6 h-6 z-10 drop-shadow" viewBox="0 0 24 24" fill="none">
          <path d="M14.5 4L20 9.5L18 11.5L16 10L10.5 15.5L7 12L12.5 6.5L11 4.5L13 2.5L14.5 4Z" fill="#007ACC" />
          <rect x="4" y="15" width="4" height="6" rx="1" transform="rotate(-45 4 15)" fill="#60A5FA" />
          <line x1="8" y1="11" x2="15" y2="18" stroke="#FFFFFF" strokeWidth="1.5" />
        </svg>
      </div>
    ),
  },
  {
    id: "raycast",
    title: "Raycast & Automation",
    category: "Productivity Engine",
    icon: (
      <div className="w-full h-full rounded-[10px] bg-white shadow-md flex items-center justify-center border border-zinc-200/80">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="url(#ray-grad-2)" />
          <path d="M7 16C8.5 11 11 8 16 7C14.5 12 12 15 7 16Z" fill="white" />
          <defs>
            <linearGradient id="ray-grad-2" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF6363" />
              <stop offset="0.5" stopColor="#FF9F43" />
              <stop offset="1" stopColor="#54A0FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
  },
  {
    id: "android",
    title: "Android Studio",
    category: "Native Android Apps",
    icon: (
      <div className="w-full h-full rounded-[10px] bg-white shadow-md flex items-center justify-center border border-zinc-200/80 relative">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#3DDC84" opacity="0.15" />
          <path d="M12 4L15 10H9L12 4Z" fill="#4285F4" />
          <path d="M7 13L12 19L17 13H7Z" fill="#34A853" />
          <circle cx="12" cy="12" r="2.5" fill="#1E293B" />
        </svg>
      </div>
    ),
  },
  {
    id: "warp",
    title: "Warp & Terminal",
    category: "Cloud CLI & Docker",
    icon: (
      <div className="w-full h-full rounded-[10px] bg-[#0A84FF] shadow-md flex items-center justify-center border border-blue-400/50">
        <span className="font-mono font-black text-white text-sm tracking-tighter">
          &gt;_
        </span>
      </div>
    ),
  },
  {
    id: "shopify",
    title: "Shopify",
    category: "E-Commerce Engines",
    icon: (
      <div className="w-full h-full rounded-[10px] bg-white shadow-md flex items-center justify-center border border-zinc-200/80">
        <svg className="w-6 h-6" viewBox="0 0 109 124" fill="none">
          <path d="M78.6 14.7L67.7 1.4C66.6 0.1 64.8-0.3 63.3 0.3L6.3 22C4.6 22.7 3.5 24.3 3.5 26.2L0 114.7C0 116.8 1.4 118.6 3.4 119.2L68.7 138.8C69.3 139 69.9 139.1 70.5 139.1C72 139.1 73.5 138.2 74.2 136.8L108.5 40.5C109.4 38.1 108.2 35.3 105.8 34.4L78.6 14.7Z" fill="#95BF47" />
          <path d="M67.7 1.4L78.6 14.7L60.5 19.3L52.8 5.6C53.7 4.1 55.4 3.2 57.2 3.2C58.3 3.2 59.4 3.5 60.4 4.1L67.7 1.4Z" fill="#5E8E3E" />
          <path d="M47.7 51.5C36.8 51.5 32.5 59.3 32.5 65.4C32.5 76.5 48.7 78.4 48.7 89.2C48.7 94.2 44.5 97.4 38.5 97.4C30.6 97.4 25.1 91.8 25.1 91.8L22 103.3C22 103.3 28.5 108.4 38.2 108.4C50.2 108.4 60.1 100.9 60.1 88.5C60.1 76.4 43.6 74.7 43.6 65.4C43.6 61.6 46.5 58.7 51.3 58.7C57 58.7 61.5 61.6 61.5 61.6L64.5 50.4C64.5 50.4 58.3 45.9 47.7 51.5Z" fill="white" />
        </svg>
      </div>
    ),
  },
  {
    id: "chatgpt",
    title: "ChatGPT & OpenAI",
    category: "LLM Reasoning",
    icon: (
      <div className="w-full h-full rounded-[10px] bg-[#10A37F] shadow-md flex items-center justify-center border border-emerald-400/40 p-1.5">
        <svg className="w-full h-full text-white fill-white" viewBox="0 0 24 24">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.6669zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813v6.7227zm1.1451-3.0184l3.0544-1.7618 3.0544 1.7618v3.5236l-3.0544 1.7618-3.0544-1.7618z" />
        </svg>
      </div>
    ),
  },
  {
    id: "claude",
    title: "Claude 3.5 Sonnet",
    category: "Anthropic AI",
    icon: (
      <div className="w-full h-full rounded-[10px] bg-[#CC785C] shadow-md flex items-center justify-center border border-amber-800/40 p-2">
        <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
          <path d="M18 16L19 19.5L22.5 20.5L19 21.5L18 25L17 21.5L13.5 20.5L17 19.5L18 16Z" opacity="0.6" />
        </svg>
      </div>
    ),
  },
  {
    id: "gemini",
    title: "Google Gemini AI",
    category: "Multimodal Agent",
    icon: (
      <div className="w-full h-full rounded-[10px] bg-white shadow-md flex items-center justify-center border border-zinc-200/80 p-1.5">
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#gemini-dock-grad)" />
          <defs>
            <linearGradient id="gemini-dock-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="0.5" stopColor="#818CF8" />
              <stop offset="1" stopColor="#C084FC" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
  },
  {
    id: "github",
    title: "GitHub",
    category: "Source & CI/CD",
    icon: (
      <div className="w-full h-full rounded-[10px] bg-[#18181B] shadow-md flex items-center justify-center border border-zinc-700/80 p-2">
        <svg className="w-full h-full fill-white" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      </div>
    ),
  },
  {
    id: "canva",
    title: "Canva & Assets",
    category: "Design System",
    icon: (
      <div className="w-full h-full rounded-[10px] bg-gradient-to-tr from-[#00C4CC] via-[#5B32F5] to-[#7D2AE8] shadow-md flex items-center justify-center border border-purple-400/40 p-1.5">
        <svg className="w-5 h-5 text-white fill-white" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c-2.49 0-4.5-2.01-4.5-4.5S10.51 7.5 13 7.5c1.47 0 2.77.71 3.59 1.81l-1.63 1.18c-.46-.62-1.17-1.01-1.96-1.01-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5c.79 0 1.5-.39 1.96-1.01l1.63 1.18C15.77 15.79 14.47 16.5 13 16.5z" />
        </svg>
      </div>
    ),
  },
  {
    id: "spotify",
    title: "Spotify",
    category: "Focus Music",
    icon: (
      <div className="w-full h-full rounded-[10px] bg-[#121212] shadow-md flex items-center justify-center border border-zinc-700/80 p-1.5">
        <svg className="w-5 h-5 fill-[#1DB954]" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.348-1.435-5.304-1.76-8.785-.963-.335.077-.67-.133-.746-.468-.077-.334.132-.67.467-.745 3.808-.87 7.076-.496 9.715 1.115.293.18.386.563.206.854zm1.226-2.723c-.226.367-.707.483-1.074.257-2.687-1.652-6.785-2.131-9.965-1.166-.413.127-.852-.107-.978-.52-.127-.414.107-.853.52-.979 3.632-1.102 8.147-.568 11.24 1.334.367.226.483.707.257 1.074zm.106-2.836C14.692 8.95 9.374 8.77 6.297 9.705c-.494.15-1.018-.129-1.168-.623-.15-.494.13-1.018.624-1.168 3.532-1.072 9.404-.866 13.115 1.338.445.264.59.838.327 1.282-.264.444-.838.59-1.282.327z" />
        </svg>
      </div>
    ),
  },
]

interface DockIconProps {
  item: DockItem
  mouseX: any
}

const DockIcon: React.FC<DockIconProps> = ({ item, mouseX }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Distance from mouse X to icon center
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  // Smooth sinusoidal continuous magnification curve (macOS physics)
  // Distance 0 (under mouse): 66px, Neighbors (±75px): 52px, Default: 42px
  const widthSync = useTransform(distance, [-150, -75, 0, 75, 150], [42, 52, 66, 52, 42])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 220, damping: 14 })

  // Lift icon slightly upward when magnified
  const ySync = useTransform(distance, [-150, -75, 0, 75, 150], [0, -4, -10, -4, 0])
  const y = useSpring(ySync, { mass: 0.1, stiffness: 220, damping: 14 })

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center justify-center cursor-pointer shrink-0"
    >
      {/* Tooltip on Hover (Floating cleanly above the dock without clipping) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.92 }}
            animate={{ opacity: 1, y: -58, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.92 }}
            transition={{ duration: 0.14, ease: "easeOut" }}
            className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-50 whitespace-nowrap px-3.5 py-1.5 rounded-xl bg-zinc-950 text-white shadow-2xl border border-zinc-700/90 flex flex-col items-center gap-0.5 min-w-[100px]"
          >
            <span className="font-extrabold text-white text-xs tracking-tight font-sans leading-none">{item.title}</span>
            <span className="text-[10px] text-zinc-400 font-mono font-medium leading-none">{item.category}</span>
            {/* Tooltip caret arrow */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-950 border-r border-b border-zinc-700/90 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dock Icon Tile with Dynamic Spring Size */}
      <motion.div
        style={{ width, height: width, y }}
        whileTap={{ scale: 0.88 }}
        className="relative flex items-center justify-center rounded-[12px] p-0.5 transition-all shadow-xs"
      >
        {item.icon}
      </motion.div>
    </div>
  )
}

export const MacDock: React.FC = () => {
  const mouseX = useMotionValue(Infinity)

  return (
    <div className="relative flex flex-col items-center justify-center pt-8 sm:pt-10 pb-2 overflow-visible">
      {/* Floating Dark macOS Dock Pill Container with overflow-visible to prevent clipping */}
      <div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="relative flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-2.5 rounded-full bg-[#18181B] backdrop-blur-2xl border border-zinc-700/80 shadow-[0_16px_40px_rgba(0,0,0,0.25)] ring-1 ring-white/10 overflow-visible max-w-full"
      >
        {AUTHENTIC_APP_TOOLS.map((item) => (
          <DockIcon key={item.id} item={item} mouseX={mouseX} />
        ))}
      </div>
    </div>
  )
}
