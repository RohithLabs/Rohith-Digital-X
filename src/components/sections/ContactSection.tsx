import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare, ArrowUpRight, Sparkles, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input, Textarea, Select } from "@/components/ui/input"
import { TiltCard } from "@/components/ui/tilt-card"

interface ContactSectionProps {
  initialFormData?: {
    service?: string
    budgetRange?: string
    description?: string
  }
}

interface FormState {
  name: string
  email: string
  phone: string
  businessType: string
  service: string
  budgetRange: string
  description: string
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialFormData }) => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    businessType: "Local Business / Shop",
    service: "Business Website Development",
    budgetRange: "₹25,000 - ₹50,000",
    description: "",
  })

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [copiedSummary, setCopiedSummary] = useState(false)

  // Update form if estimator or service modal passed initial data
  useEffect(() => {
    if (initialFormData) {
      setFormData((prev) => ({
        ...prev,
        service: initialFormData.service || prev.service,
        budgetRange: initialFormData.budgetRange || prev.budgetRange,
        description: initialFormData.description || prev.description,
      }))
    }
  }, [initialFormData])

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone or WhatsApp number"
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = "Please enter a valid phone number"
    }
    if (!formData.description.trim()) {
      newErrors.description = "Please share a brief summary of what you'd like to build"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    setStatus("loading")

    setTimeout(() => {
      setStatus("success")
    }, 1000)
  }

  const handleCopySummary = () => {
    const summaryText = `*Project Inquiry for Rohith Digital X*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Business Type: ${formData.businessType}
Service: ${formData.service}
Budget: ${formData.budgetRange}
Project Scope: ${formData.description}`

    navigator.clipboard.writeText(summaryText)
    setCopiedSummary(true)
    setTimeout(() => setCopiedSummary(false), 2500)
  }

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Rohith, I would like to discuss a project:\n` +
      `• Name: ${formData.name || 'Client'}\n` +
      `• Service: ${formData.service}\n` +
      `• Business Type: ${formData.businessType}\n` +
      `• Budget: ${formData.budgetRange}\n` +
      `• Notes: ${formData.description || 'Discussing project scope'}`
    )
    return `https://wa.me/919655483130?text=${text}`
  }

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} - ${formData.name || 'New Client'}`)
    const body = encodeURIComponent(
      `Hi Rohith,\n\nI want to discuss a new digital project:\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Business: ${formData.businessType}\n` +
      `Service Needed: ${formData.service}\n` +
      `Estimated Budget: ${formData.budgetRange}\n\n` +
      `Project Details:\n${formData.description}\n\nBest regards,\n${formData.name}`
    )
    return `mailto:e.rohit3130@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-24 bg-white border-t border-zinc-200/70 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Editorial Typography */}
        <div className="max-w-3xl mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-accent-crimson font-mono inline-flex items-center gap-1.5"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Direct Founder Consultation</span>
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 editorial-title"
          >
            Have an idea? Let’s build it{" "}
            <span className="font-editorial italic font-normal text-accent-crimson">
              properly.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-zinc-600 leading-relaxed font-normal"
          >
            Tell me what you want to build, and I’ll help you identify the right digital solution.
            I respond personally to every inquiry within 24 hours.
          </motion.p>
        </div>

        {/* Contact Layout Grid: Info on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Channels Card with 3D Tilt */}
            <TiltCard tiltMaxAngleX={4} tiltMaxAngleY={4} scale={1.015}>
              <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950 text-white shadow-card space-y-6 border border-zinc-800">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-accent-crimson font-bold">
                    Direct Communication
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Contact Rohith E Directly
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Founder & Principal Developer at Rohith Digital X
                  </p>
                </div>

                <div className="space-y-4 pt-2 text-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="h-10 w-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-accent-crimson shrink-0 shadow-xs">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-xs text-zinc-400 block font-mono">Email Address</span>
                      <a
                        href="mailto:e.rohit3130@gmail.com"
                        className="font-medium text-white hover:text-red-300 transition-colors font-mono"
                      >
                        e.rohit3130@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="h-10 w-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-accent-crimson shrink-0 shadow-xs">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-xs text-zinc-400 block font-mono">Phone / WhatsApp</span>
                      <a
                        href="tel:+919655483130"
                        className="font-medium text-white hover:text-red-300 transition-colors font-mono"
                      >
                        +91 96554 83130
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="h-10 w-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-accent-crimson shrink-0 shadow-xs">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-xs text-zinc-400 block font-mono">Agency Location</span>
                      <span className="font-medium text-white">
                        Namakkal, Tamil Nadu, India
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct Quick WhatsApp Action */}
                <div className="pt-4 border-t border-zinc-800 space-y-2">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-all shadow-sm hover:shadow-md cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageSquare className="h-4 w-4 fill-current" />
                    <span>Chat on WhatsApp (+91 96554 83130)</span>
                  </a>
                </div>
              </div>
            </TiltCard>

            {/* Privacy & Response Guarantee */}
            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-600 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 font-bold text-zinc-900">
                <CheckCircle2 className="h-4 w-4 text-accent-crimson" />
                <span>Zero Spam & Confidentiality Promise</span>
              </div>
              <p className="leading-relaxed">
                Your project ideas and contact details are kept strictly confidential. No marketing spam, no third-party sales calls.
              </p>
            </div>

          </motion.div>

          {/* Right Column: Project Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-50/80 border border-zinc-200/90 shadow-card">
              
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm"
                  >
                    <CheckCircle2 className="h-8 w-8" />
                  </motion.div>
                  
                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-2xl font-bold text-zinc-900">Inquiry Prepared Successfully!</h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. Rohith will review your project details and respond to <strong>{formData.email}</strong> within 24 hours.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-zinc-200 text-left text-xs text-zinc-700 space-y-2 max-w-md mx-auto shadow-xs">
                    <span className="font-bold text-zinc-900 block">Next Instant Steps:</span>
                    <div className="flex flex-col sm:flex-row gap-2 pt-1">
                      <a
                        href={generateWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all hover:scale-105"
                      >
                        <span>Send via WhatsApp</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href={generateMailtoUrl()}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs transition-all hover:scale-105"
                      >
                        <span>Open Mail App</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setStatus("idle")
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        businessType: "Local Business / Shop",
                        service: "Business Website Development",
                        budgetRange: "₹25,000 - ₹50,000",
                        description: "",
                      })
                    }}
                    className="text-xs"
                  >
                    Submit Another Inquiry
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                        Your Name *
                      </label>
                      <Input
                        placeholder="e.g. John Doe / Dr. Rajesh"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        error={errors.name}
                        className="transition-all focus:border-accent-crimson"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        error={errors.email}
                        className="transition-all focus:border-accent-crimson"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                        Phone / WhatsApp *
                      </label>
                      <Input
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        error={errors.phone}
                        className="transition-all focus:border-accent-crimson"
                      />
                    </div>

                    {/* Business Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                        Organization / Client Type
                      </label>
                      <Select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="transition-all focus:border-accent-crimson"
                      >
                        <option value="Clinic / Hospital / Healthcare">Clinic / Hospital / Healthcare</option>
                        <option value="Retail Shop / Supermarket">Retail Shop / Supermarket</option>
                        <option value="Startup / Tech Venture">Startup / Tech Venture</option>
                        <option value="Local Business / Service Provider">Local Business / Service Provider</option>
                        <option value="Educational / Institution">Educational / Institution</option>
                        <option value="Individual / Professional">Individual / Professional</option>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Required */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                        Primary Service Needed
                      </label>
                      <Select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="transition-all focus:border-accent-crimson"
                      >
                        <option value="Business Website Development">Business Website Development</option>
                        <option value="Mobile App Development">Mobile App Development (Android/iOS)</option>
                        <option value="Backend, Storage & Authentication">Backend, Storage & Authentication</option>
                        <option value="AI Automation Agents">AI Automation Agents & Bots</option>
                        <option value="Full-Stack Custom Project">Full-Stack Custom Project</option>
                      </Select>
                    </div>

                    {/* Budget Range */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                        Estimated Budget Range
                      </label>
                      <Select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="transition-all focus:border-accent-crimson"
                      >
                        <option value="< ₹25,000">&lt; ₹25,000 (Basic Landing / Bot)</option>
                        <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000 (Standard Website / Service App)</option>
                        <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000 (Full Mobile App / Custom Backend)</option>
                        <option value="₹1,00,000+">₹1,00,000+ (Comprehensive Platform)</option>
                        <option value="Flexible / Needs Quote">Flexible / Needs Discussion</option>
                      </Select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                      Project Goals & Requirements *
                    </label>
                    <Textarea
                      placeholder="Briefly describe your goals, required pages/features, target timeline, or any reference links..."
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      error={errors.description}
                      className="transition-all focus:border-accent-crimson"
                    />
                  </div>

                  {/* Submit Button & Alternative Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <Button
                      type="submit"
                      variant="crimson"
                      size="lg"
                      disabled={status === "loading"}
                      className="w-full sm:w-auto gap-2 text-sm font-bold shadow-crimson-md justify-center px-8 hover:scale-105 active:scale-95 transition-transform"
                    >
                      {status === "loading" ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Submit Project Request</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </Button>

                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-900 transition-colors p-2 cursor-pointer"
                    >
                      {copiedSummary ? (
                        <motion.div
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          className="flex items-center gap-1.5 text-emerald-600 font-medium"
                        >
                          <Check className="h-3.5 w-3.5" />
                          <span>Summary Copied!</span>
                        </motion.div>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy Form Data</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
