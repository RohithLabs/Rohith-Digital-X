export interface FaqItem {
  question: string
  answer: string
  category: string
}

export const faqsData: FaqItem[] = [
  {
    question: 'What type of websites do you create?',
    answer: 'I design and build modern, fast, and responsive websites for clinics, hospitals, retail shops, local businesses, startups, service providers, and professionals. This includes high-converting landing pages, multi-page business websites, appointment booking portals, e-commerce storefronts with payment/WhatsApp checkout, and custom web applications.',
    category: 'Websites'
  },
  {
    question: 'Can you build both Android and iOS apps?',
    answer: 'Yes. I develop cross-platform mobile applications using React Native and modern mobile tools that run smoothly on both Android and iOS. This allows you to launch on both platforms faster and maintain a single, cost-effective codebase while delivering native performance.',
    category: 'Mobile Apps'
  },
  {
    question: 'Do you provide authentication and database integration?',
    answer: 'Yes. Robust backend engineering is a primary focus of Rohith Digital X. I implement secure user registration/login systems using JWT, OAuth, or session tokens, along with structured relational databases (PostgreSQL, MySQL) and cloud databases with role-based access control (RBAC).',
    category: 'Backend & Security'
  },
  {
    question: 'Can you help publish an app to the Play Store and App Store?',
    answer: 'Yes. I assist in preparing your application bundles (APK/AAB for Google Play, IPA/TestFlight for Apple App Store), configuring store assets, privacy policies, and guiding you through the store submission and review guidelines.',
    category: 'Mobile Apps'
  },
  {
    question: 'Can you build AI automation for my business?',
    answer: 'Yes. I build custom AI customer support chatbots trained on your company data, 24/7 lead qualification assistants, and automated workflow pipelines that connect website inquiries to WhatsApp, email, or your internal CRM to eliminate repetitive manual work.',
    category: 'AI Automation'
  },
  {
    question: 'How do I start a project?',
    answer: 'You can start by filling out the project inquiry form on this website, emailing me directly at e.rohit3130@gmail.com, or messaging on WhatsApp at +91 96554 83130. We will schedule a short discovery call to discuss your goals, requirements, timeline, and provide a clear quote.',
    category: 'Process'
  },
  {
    question: 'How will project communication work?',
    answer: 'You communicate directly with me (Rohith E) throughout the entire engagement. We stay aligned through regular progress updates via WhatsApp/Email, scheduled video milestone demos, and live staging preview links so you can test your product as it is being built.',
    category: 'Process'
  }
]
