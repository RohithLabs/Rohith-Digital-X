import React, { useState } from "react"
import { faqsData } from "@/data/faqs"
import { AccordionItem } from "@/components/ui/accordion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils"

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-[#FAFAFA] border-t border-zinc-200/70 relative">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Editorial Typography */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-crimson font-mono">
            Common Questions & Answers
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 editorial-title">
            Frequently asked{" "}
            <span className="font-editorial italic font-normal text-accent-crimson">
              questions & candid answers.
            </span>
          </h2>
          <p className="text-base text-zinc-600 leading-relaxed font-normal">
            Direct, candid answers about how we build, communicate, and deliver digital systems for clients.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqsData.map((faq, index) => (
            <AccordionItem
              key={index}
              id={`faq-${index}`}
              title={faq.question}
              badge={faq.category}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            >
              <p>{faq.answer}</p>
            </AccordionItem>
          ))}
        </div>

        {/* Bottom Help CTA */}
        <div className="mt-14 p-6 rounded-2xl bg-white border border-zinc-200 text-center space-y-3 shadow-subtle">
          <h3 className="text-base font-bold text-zinc-900">
            Have a specific requirement not covered here?
          </h3>
          <p className="text-xs text-zinc-600 max-w-md mx-auto">
            We are always happy to review technical constraints and recommend the ideal architecture.
          </p>
          <div className="pt-1">
            <Button
              variant="default"
              size="sm"
              onClick={() => scrollToSection("contact")}
              className="gap-1.5 text-xs font-bold"
            >
              <span>Ask Rohith Directly</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}
