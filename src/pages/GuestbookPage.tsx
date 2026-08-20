import React, { useState } from "react"
import { motion } from "framer-motion"
import { Send, Heart } from "lucide-react"
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

export const GuestbookPage: React.FC = () => {
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
    <div className="pt-24 sm:pt-32 pb-20 space-y-12">
      {showConfetti && <Confetti trigger={showConfetti} onComplete={() => setShowConfetti(false)} />}

      <div className="container max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-zinc-600"
        >
          <span className="text-accent-crimson font-black text-sm">✦</span>
          <span>COMMUNITY & FEEDBACK</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] text-zinc-950 font-display"
        >
          Digital Guestbook<span className="text-accent-crimson">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-zinc-600 max-w-xl mx-auto font-normal leading-relaxed"
        >
          Leave a message, feedback, or say hello on our community wall.
        </motion.p>
      </div>

      <div className="container max-w-2xl mx-auto px-4 space-y-8">
        {/* Input Form Card */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-3xl bg-zinc-950 text-white border border-zinc-800 shadow-2xl space-y-4">
          <div className="flex items-center gap-2 text-accent-crimson">
            <Heart className="h-5 w-5 fill-accent-crimson/30" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300">Sign the Wall</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Your Name (e.g. Rohith)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-accent-crimson transition-colors"
            />
            <input
              type="text"
              placeholder="Location (e.g. Tamil Nadu, IN)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-accent-crimson transition-colors"
            />
          </div>

          <textarea
            placeholder="Share your thoughts, review, or feedback..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={3}
            className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-accent-crimson transition-colors resize-none"
          />

          <div className="flex justify-end pt-1">
            <button
              type="submit"
              disabled={isSubmitting || !name.trim() || !message.trim()}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-accent-crimson text-white text-xs font-bold shadow-md hover:bg-red-700 disabled:opacity-50 transition-all cursor-pointer"
            >
              <Send className="h-3.5 w-3.5" />
              <span>Publish Signature</span>
            </button>
          </div>
        </form>

        {/* Message Feed */}
        <div className="space-y-4">
          {messages.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-card space-y-2 text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className={`h-7 w-7 rounded-full ${item.avatarColor} text-white flex items-center justify-center text-xs font-bold`}>
                    {item.name.charAt(0)}
                  </span>
                  <span className="font-bold text-sm text-zinc-950 font-sans">{item.name}</span>
                  <span className="text-xs text-zinc-400 font-mono">• {item.location}</span>
                </div>
                <span className="text-xs text-zinc-400 font-mono">{item.date}</span>
              </div>
              <p className="text-sm text-zinc-700 pl-9 leading-relaxed font-sans font-normal">
                {item.message}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
