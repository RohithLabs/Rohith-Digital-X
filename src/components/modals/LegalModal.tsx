import React from "react"
import { Dialog } from "@/components/ui/dialog"

interface LegalModalProps {
  type: "privacy" | "terms" | null
  isOpen: boolean
  onClose: () => void
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, isOpen, onClose }) => {
  if (!type) return null

  const isPrivacy = type === "privacy"

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title={isPrivacy ? "Privacy Policy" : "Terms of Service"}
      description={isPrivacy ? "How Rohith Digital X handles your contact information." : "Standard terms of project engagement with Rohith Digital X."}
      maxWidth="max-w-2xl"
    >
      <div className="space-y-4 text-sm text-zinc-600 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
        {isPrivacy ? (
          <>
            <p>
              At <strong>Rohith Digital X</strong> (founded by Rohith E, Namakkal, Tamil Nadu), we respect your privacy.
            </p>
            <h4 className="font-bold text-zinc-900 pt-2">1. Information We Collect</h4>
            <p>
              When you submit an inquiry through our contact form, we collect your name, email address, phone number, organization name, and project requirements solely to respond to your request and prepare project estimates.
            </p>
            <h4 className="font-bold text-zinc-900 pt-2">2. How We Use Your Data</h4>
            <p>
              Your contact details are strictly used to communicate with you regarding your project inquiry. We do not sell, rent, or trade your personal data to any third-party marketing services.
            </p>
            <h4 className="font-bold text-zinc-900 pt-2">3. Confidentiality & Code Ownership</h4>
            <p>
              Any proprietary business information, intellectual property, database schemes, or project ideas shared with Rohith Digital X during consultations or contract execution remain strictly confidential.
            </p>
            <h4 className="font-bold text-zinc-900 pt-2">4. Contact Us</h4>
            <p>
              For privacy-related questions, contact Rohith E at <code>e.rohit3130@gmail.com</code> or <code>+91 96554 83130</code>.
            </p>
          </>
        ) : (
          <>
            <p>
              Welcome to <strong>Rohith Digital X</strong>. These terms outline our engagement principles for freelance development and consulting.
            </p>
            <h4 className="font-bold text-zinc-900 pt-2">1. Project Scoping & Proposals</h4>
            <p>
              Each project begins with a clear scope of work, defined milestone deliverables, timelines, and payment schedule agreed upon in writing by both parties prior to work commencing.
            </p>
            <h4 className="font-bold text-zinc-900 pt-2">2. Intellectual Property & Code Delivery</h4>
            <p>
              Upon final milestone completion and full payment settlement, all custom code, assets, and project deliverables created specifically for the client belong entirely to the client.
            </p>
            <h4 className="font-bold text-zinc-900 pt-2">3. Revisions & Support</h4>
            <p>
              Projects include a dedicated review and post-launch bug fixing warranty period as defined in the project agreement. Additional out-of-scope features are quoted separately with clear upfront pricing.
            </p>
            <h4 className="font-bold text-zinc-900 pt-2">4. Governing Jurisdiction</h4>
            <p>
              These terms are governed in accordance with the laws of Tamil Nadu, India.
            </p>
          </>
        )}
      </div>
    </Dialog>
  )
}
