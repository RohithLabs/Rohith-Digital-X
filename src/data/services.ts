export interface ServiceFeature {
  title: string
  description: string
}

export interface ServiceItem {
  id: string
  number: string
  title: string
  shortDescription: string
  tagline: string
  targetAudience: string[]
  keyFeatures: string[]
  deliverables: string[]
  techStack: string[]
  timeframe: string
  iconName: 'Globe' | 'Smartphone' | 'Server' | 'Bot'
}

export const servicesData: ServiceItem[] = [
  {
    id: 'business-websites',
    number: '01',
    title: 'Business Website Development',
    tagline: 'Websites That Build Trust & Convert Visitors',
    shortDescription: 'Modern, responsive, and conversion-focused websites for shops, clinics, hospitals, startups, local businesses, and professionals.',
    targetAudience: [
      'Clinics & Healthcare Centers',
      'Hospitals & Medical Practices',
      'Retail Shops & Showrooms',
      'Startups & Tech Ventures',
      'Local Businesses & Service Providers',
      'Professionals & Consultants',
    ],
    keyFeatures: [
      'High-converting landing pages and multi-page business websites',
      'Online appointment and consultation booking systems',
      'E-commerce catalogs with payment gateway integrations',
      'Responsive optimization across mobile, tablet, and desktop viewports',
      'Technical SEO architecture, OpenGraph tags, and ultra-fast page speeds',
      'Content management setup and self-serve editing options'
    ],
    deliverables: [
      'Custom UI/UX Design Tailored to Your Brand',
      'Production-Ready Frontend Code (React / Next.js / Static)',
      'Responsive Mobile & Tablet Viewport Testing',
      'Lead Capture & WhatsApp/Email Notification Integration',
      'Domain Setup, SSL Certificate, and Cloud Hosting Deployment'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js', 'Vercel / Cloudflare'],
    timeframe: '1 to 3 Weeks',
    iconName: 'Globe',
  },
  {
    id: 'mobile-apps',
    number: '02',
    title: 'Mobile App Development',
    tagline: 'Mobile Apps Ready for Store Launch',
    shortDescription: 'Android and iOS applications engineered with polished UX, authentication, cloud databases, and store-publishing readiness.',
    targetAudience: [
      'Startups Launching Mobile-First MVPs',
      'Shops & Retailers Requiring Customer Apps',
      'Healthcare Providers Needing Patient Portals',
      'Service Businesses Needing Booking & Tracking Apps'
    ],
    keyFeatures: [
      'Cross-platform development for Android and iOS',
      'Secure biometric, OTP, and social user authentication',
      'Real-time cloud database syncing and offline cache support',
      'Admin dashboards for managing users, listings, and orders',
      'Push notification systems for customer re-engagement',
      'Store preparation for Google Play Store and Apple App Store'
    ],
    deliverables: [
      'Cross-Platform Mobile Application Bundle (APK / AAB / iOS Build)',
      'Backend API & Database Connection Layer',
      'Admin Control Panel for Content Management',
      'Store Submission Checklist & Publishing Guidance',
      'Post-Launch Bug Fixes & Device Compatibility Support'
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'REST APIs', 'Firebase / Supabase', 'Cloud Storage'],
    timeframe: '3 to 6 Weeks',
    iconName: 'Smartphone',
  },
  {
    id: 'backend-systems',
    number: '03',
    title: 'Backend, Storage & Authentication',
    tagline: 'Secure, Scalable & Resilient Backend Architecture',
    shortDescription: 'Reliable REST APIs, enterprise authentication, database architectures, user role permissions, and scalable cloud systems.',
    targetAudience: [
      'Growing Businesses Needing Custom Internal Tools',
      'SaaS Startups Requiring Scalable API Infrastructure',
      'Platforms Requiring Strict Role-Based Access (RBAC)',
      'Companies Modernizing Legacy Backends'
    ],
    keyFeatures: [
      'Scalable Java & Spring Boot / Node.js microservices and REST APIs',
      'Secure authentication systems (JWT, OAuth2, Session management)',
      'Relational database design (PostgreSQL, MySQL) with indexing and optimization',
      'Cloud storage integrations for secure document and media handling',
      'Granular Role-Based Access Control (Admin, Manager, Staff, Customer)',
      'Audit logging, data validation, and automated error tracking'
    ],
    deliverables: [
      'Comprehensive REST API Suite with OpenAPI / Swagger Documentation',
      'Optimized Relational Database Schemas and Migration Scripts',
      'Authentication & Token Security Verification',
      'Cloud Server Configuration & Environment Variable Security',
      'Data Backup & Disaster Recovery Procedures'
    ],
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'MySQL', 'JWT / OAuth', 'Docker', 'AWS / DigitalOcean'],
    timeframe: '2 to 5 Weeks',
    iconName: 'Server',
  },
  {
    id: 'ai-automation',
    number: '04',
    title: 'AI Automation Agents',
    tagline: 'Intelligent Workflows for Modern Businesses',
    shortDescription: 'Custom AI chatbots, lead qualification assistants, customer support agents, and automated workflows that eliminate repetitive tasks.',
    targetAudience: [
      'Clinics & Practices Requiring 24/7 Inquiry Handling',
      'E-commerce & Retailers Needing Instant Customer Support',
      'Sales Teams Requiring Automated Lead Qualification',
      'Operations Teams Drowning in Repetitive Data Entry'
    ],
    keyFeatures: [
      'Custom AI customer support chatbots trained on your company knowledge',
      'Lead-generation bots that capture, qualify, and route high-intent inquiries',
      'Multi-channel connectivity (Website Widget, WhatsApp, Telegram, Email)',
      'Automated data extraction and CRM / Google Sheets synchronization',
      'Intelligent notification webhooks for immediate team escalation',
      'Privacy-first design ensuring sensitive business data remains protected'
    ],
    deliverables: [
      'Custom Configured AI Agent with Tailored System Prompts & Guardrails',
      'Knowledge Base Ingestion & Vector Retrieval Setup',
      'Multi-Platform Webhook Integrations (WhatsApp / CRM / Email)',
      'Live Testing Suite & Accuracy Benchmarking',
      'Admin Monitoring Dashboard for Conversation Review'
    ],
    techStack: ['Python', 'OpenAI / Gemini APIs', 'LangChain', 'FastAPI', 'Webhooks', 'Make / Zapier'],
    timeframe: '1 to 3 Weeks',
    iconName: 'Bot',
  }
]
