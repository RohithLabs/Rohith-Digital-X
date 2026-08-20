import React from "react"
import { CheckCircle2, Star, Calendar, MessageSquare, ArrowRight, ShieldCheck, Zap, Bot, Database, ShoppingBag } from "lucide-react"

interface DeviceMockupProps {
  type: "laptop" | "phone" | "tablet"
  variant: "carepulse" | "novamarket" | "servicelink" | "securecore" | "agentx"
}

export const DeviceMockup: React.FC<DeviceMockupProps> = ({ type, variant }) => {
  if (type === "phone") {
    return (
      <div className="relative mx-auto w-[240px] sm:w-[270px] aspect-[9/18] rounded-[44px] bg-zinc-950 p-2.5 shadow-2xl ring-1 ring-zinc-800/80">
        {/* Dynamic Island / Speaker Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 h-5 w-24 rounded-full bg-zinc-900 z-30 flex items-center justify-between px-2.5">
          <div className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>

        {/* Screen Bezel & Content */}
        <div className="relative h-full w-full rounded-[36px] bg-white overflow-hidden flex flex-col justify-between pt-7 pb-4 px-3.5 text-zinc-900 select-none border border-zinc-100">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-zinc-100">
            <div className="flex items-center gap-1.5">
              <div className="h-6 w-6 rounded-lg bg-red-600 text-white font-mono font-bold text-[10px] flex items-center justify-center">
                SL
              </div>
              <span className="font-bold text-xs tracking-tight">ServiceLink Pro</span>
            </div>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold">ONLINE</span>
          </div>

          {/* Active Job Dispatch Card */}
          <div className="my-2 p-2.5 rounded-2xl bg-zinc-900 text-white space-y-2 shadow-md">
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-zinc-400 font-mono">DISPATCH #8492</span>
              <span className="text-accent-crimson font-bold">EN ROUTE</span>
            </div>
            <p className="text-xs font-bold leading-tight">AC Repair & Maintenance</p>
            <div className="flex items-center gap-2 text-[10px] text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Arriving in 12 mins • Namakkal</span>
            </div>
          </div>

          {/* Technician Profile Card */}
          <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-zinc-200 flex items-center justify-center text-[10px] font-bold">
                  RK
                </div>
                <div>
                  <p className="text-[11px] font-bold text-zinc-900">Ravi Kumar</p>
                  <p className="text-[9px] text-zinc-500">Master Technician</p>
                </div>
              </div>
              <div className="flex items-center gap-0.5 text-amber-500 text-[10px] font-bold">
                <Star className="h-3 w-3 fill-current" />
                <span>4.9</span>
              </div>
            </div>
          </div>

          {/* Quick Action Button */}
          <div className="pt-2">
            <div className="w-full py-2 rounded-xl bg-accent-crimson text-white text-center text-[10px] font-bold shadow-xs">
              Confirm Completion & Generate Invoice
            </div>
          </div>

        </div>
      </div>
    )
  }

  // Laptop Mockup Frame (MacBook Style)
  return (
    <div className="relative mx-auto w-full max-w-[480px] sm:max-w-[540px] aspect-[16/10] flex flex-col justify-end group">
      
      {/* Laptop Lid / Screen */}
      <div className="relative w-full aspect-[16/10] rounded-2xl bg-zinc-950 p-2.5 sm:p-3 shadow-2xl ring-1 ring-zinc-800/80 flex flex-col">
        
        {/* Camera Notch */}
        <div className="absolute top-1 sm:top-1.5 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-zinc-800" />

        {/* Screen Display */}
        <div className="relative h-full w-full rounded-xl bg-white overflow-hidden flex flex-col justify-between border border-zinc-200/80 text-zinc-900 select-none">
          
          {/* Top Browser Toolbar */}
          <div className="h-6 sm:h-7 bg-zinc-100/90 border-b border-zinc-200 px-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </div>
            <div className="px-3 py-0.5 rounded-md bg-white border border-zinc-200 text-[9px] sm:text-[10px] font-mono text-zinc-500 flex items-center gap-1 shadow-2xs">
              <span className="text-emerald-500">🔒</span>
              <span>https://{variant}.rohithdigitalx.com</span>
            </div>
            <div className="w-8" />
          </div>

          {/* Screen Body Content by Variant */}
          <div className="flex-1 p-3 sm:p-4 bg-[#FAF9F6] flex flex-col justify-between overflow-hidden">
            
            {variant === "carepulse" && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold text-[10px]">
                      CP
                    </div>
                    <span className="font-bold text-xs text-zinc-900">CarePulse Health Portal</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    ● Live Schedule Sync
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-xl bg-white border border-zinc-200/80 shadow-2xs space-y-1">
                    <p className="text-[9px] text-zinc-400 uppercase font-mono font-bold">Doctor On Duty</p>
                    <p className="text-xs font-bold text-zinc-900">Dr. A. Sundaram, MD</p>
                    <p className="text-[10px] text-zinc-500">Cardiology Specialist</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-red-50/60 border border-red-200/80 shadow-2xs space-y-1">
                    <p className="text-[9px] text-red-600 uppercase font-mono font-bold">Next Available Slot</p>
                    <p className="text-xs font-bold text-red-950">Today, 04:30 PM</p>
                    <p className="text-[10px] text-red-600 font-semibold">Instant SMS Confirmation</p>
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-zinc-950 text-white flex items-center justify-between px-3">
                  <span className="text-[10px] font-medium">1-Click WhatsApp Booking</span>
                  <span className="text-[10px] font-bold text-accent-crimson">CONFIRM APPOINTMENT →</span>
                </div>
              </div>
            )}

            {variant === "novamarket" && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">
                      NM
                    </div>
                    <span className="font-bold text-xs text-zinc-900">NovaMarket Digital Catalog</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    Instant WhatsApp Cart
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    { name: "Organic Honey 500g", price: "₹380", tag: "Bestseller" },
                    { name: "Cold Pressed Oil", price: "₹240", tag: "Fresh" },
                    { name: "Dry Fruits Mix", price: "₹520", tag: "Popular" },
                  ].map((prod, i) => (
                    <div key={i} className="p-2 rounded-xl bg-white border border-zinc-200 shadow-2xs space-y-1">
                      <span className="text-[8px] font-bold uppercase text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded">
                        {prod.tag}
                      </span>
                      <p className="text-[10px] font-bold text-zinc-900 truncate">{prod.name}</p>
                      <p className="text-[10px] font-extrabold text-zinc-900">{prod.price}</p>
                    </div>
                  ))}
                </div>

                <div className="p-2 rounded-xl bg-emerald-600 text-white flex items-center justify-between px-3">
                  <span className="text-[10px] font-medium">Cart: 3 Items (₹1,140)</span>
                  <span className="text-[10px] font-bold">SEND ORDER TO WHATSAPP ➔</span>
                </div>
              </div>
            )}

            {variant === "securecore" && (
              <div className="space-y-2 bg-zinc-950 -m-3 sm:-m-4 p-3.5 sm:p-4 text-white font-mono flex flex-col justify-between h-full">
                <div className="flex items-center justify-between pb-1.5 border-b border-zinc-800 text-[10px]">
                  <span className="text-zinc-400">SecureCore API Gateway • Java 21 / Spring Boot</span>
                  <span className="text-emerald-400 font-bold">ACTIVE (200 OK)</span>
                </div>

                <div className="space-y-1 text-[9px] sm:text-[10px] text-zinc-300">
                  <p className="text-zinc-500">// Token Exchange Handshake</p>
                  <p><span className="text-purple-400">POST</span> /api/v1/auth/rotate-jwt</p>
                  <p className="text-emerald-400">✓ Signature: Ed25519 Verified [2.4ms]</p>
                  <p className="text-zinc-400">✓ Role Hierarchy: SUPER_ADMIN, TENANT_MANAGER</p>
                  <p className="text-zinc-400">✓ PostgreSQL Pool: 24 active / 0 waiting</p>
                </div>

                <div className="p-1.5 rounded bg-zinc-900 border border-zinc-800 text-[9px] text-zinc-400 flex items-center justify-between">
                  <span>Latency: <strong className="text-white">18ms</strong></span>
                  <span>Throughput: <strong className="text-emerald-400">12,400 req/min</strong></span>
                </div>
              </div>
            )}

            {variant === "agentx" && (
              <div className="space-y-2 flex flex-col justify-between h-full">
                <div className="flex items-center justify-between pb-1 border-b border-zinc-100">
                  <div className="flex items-center gap-1.5">
                    <Bot className="h-4 w-4 text-accent-crimson" />
                    <span className="font-bold text-xs text-zinc-900">AgentX AI Lead Assistant</span>
                  </div>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-red-100 text-accent-crimson font-bold">
                    RAG Verified
                  </span>
                </div>

                <div className="space-y-2 text-[10px]">
                  <div className="p-2 rounded-xl bg-zinc-100 text-zinc-800 max-w-[85%]">
                    "Hi! Looking for clinic website development with patient booking."
                  </div>
                  <div className="p-2 rounded-xl bg-red-600 text-white max-w-[90%] ml-auto shadow-xs">
                    "We can deliver that in 2–3 weeks with SMS/WhatsApp sync! What is your estimated timeline?"
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-zinc-900 text-white flex items-center justify-between text-[10px] px-3">
                  <span className="text-zinc-300">Lead Intent: <strong className="text-emerald-400">98% High</strong></span>
                  <span className="text-accent-crimson font-bold">SYNCED TO CRM ➔</span>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Laptop Base Stand / Trackpad */}
      <div className="relative w-[108%] -left-[4%] h-3 sm:h-3.5 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-b-xl shadow-lg flex items-center justify-center">
        <div className="w-16 sm:w-20 h-1 bg-zinc-700 rounded-full" />
      </div>

    </div>
  )
}
