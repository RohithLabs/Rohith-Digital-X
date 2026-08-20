import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Sparkles, Heart, MessageSquare, User, Calendar } from "lucide-react"
import { Confetti } from "@/components/ui/confetti"

interface GuestMessage {
  id: string
  name: string
  location: string
  message: string
  date: string
  avatarColor: string
}

const INITIAL_MESSAGES: GuestMessage[] = [
  {
    id: "1",
    name: "Alex Thompson",
    location: "San Francisco, USA",
    message: "Stunning aesthetic and micro-animations! The stacked cards and macOS dock physics are world-class.",
    date: "Today at 07:15 PM",
    avatarColor: "bg-red-500",
  },
  {
    id: "2",
    name: "Priya Sundaram",
    location: "Bengaluru, India",
    message: "Rohith built our clinic's patient platform and it cut booking friction by 60%. Highly recommend!",
    date: "Yesterday",
    avatarColor: "bg-emerald-500",
  },
  {
    id: "3",
    name: "Marcus Vance",
    location: "London, UK",
    message: "Top-tier full-stack architecture. Incredible attention to typography and performance.",
    date: "2 days ago",
    avatarColor: "bg-purple-500",
  },
]

interface GuestbookModalProps {
  isOpen: boolean
  onClose: () => void
}

export const GuestbookModal: React.FC<GuestbookModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<GuestMessage[]>(INITIAL_MESSAGES)
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [message, setMessage] = useState("")
  const [showConfetti, setShowConfetti] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return

    setIsSubmitting(true)
    setTimeout(() => {
      const newMsg: GuestMessage = {
        id: Date.now().toString(),
        name: name.trim(),
        location: location.trim() || "Earth",
        message: message.trim(),
        date: "Just now",
        avatarColor: "bg-accent-crimson",
      }
      setMessages([newMsg, ...messages])
      setName("")
      setLocation("")
      setMessage("")
      setIsSubmitting(false)
      setShowConfetti(true)
    }, 400)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Confetti Trigger */}
          {showConfetti && <Confetti trigger={showConfetti} onComplete={() => setShowConfetti(false)} />}

          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative w-full max-w-2xl rounded-3xl bg-zinc-950 text-white border border-zinc-800 shadow-2xl p-6 sm:p-8 z-10 space-y-6 max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-xl bg-accent-crimson/20 border border-accent-crimson/40 flex items-center justify-center text-accent-crimson">
                  <Heart className="h-5 w-5 fill-accent-crimson/30" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black font-display text-white">
                    Digital Guestbook<span className="text-accent-crimson">.</span>
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono">
                    Leave a mark or testimonial note on our wall
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="h-8 w-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="space-y-3 bg-zinc-900/60 p-4 rounded-2xl border border-zinc-800/80">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Name (e.g. Rohith)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-accent-crimson transition-colors"
                />
                <input
                  type="text"
                  placeholder="Location (e.g. Tamil Nadu, IN)"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-accent-crimson transition-colors"
                />
              </div>
              <textarea
                placeholder="Share your thoughts, feedback, or a friendly hello..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={2}
                className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-accent-crimson transition-colors resize-none"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting || !name.trim() || !message.trim()}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent-crimson text-white text-xs font-bold shadow-md hover:bg-red-700 disabled:opacity-50 transition-all cursor-pointer"
                >
                  <Send className="h-3 w-3" />
                  <span>Sign Guestbook</span>
                </button>
              </div>
            </form>

            {/* Messages Feed */}
            <div className="flex-1 overflow-y-auto space-y-3 pr-1 divide-y divide-zinc-900">
              {messages.map((item) => (
                <div key={item.id} className="pt-3 first:pt-0 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 font-bold text-zinc-200">
                      <span className={`h-6 w-6 rounded-full ${item.avatarColor} text-white flex items-center justify-center text-[10px] font-black`}>
                        {item.name.charAt(0)}
                      </span>
                      <span>{item.name}</span>
                      <span className="text-zinc-500 font-normal font-mono text-[10px]">
                        • {item.location}
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-500 font-mono">{item.date}</span>
                  </div>
                  <p className="text-xs text-zinc-300 pl-8 leading-relaxed font-sans font-normal">
                    {item.message}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
