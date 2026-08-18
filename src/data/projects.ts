export type ProjectCategory = 'all' | 'websites' | 'mobile' | 'backend' | 'ai'

export interface ProjectItem {
  id: string
  title: string
  badge: 'Project Preview' | 'Architecture Blueprint' | 'Concept Prototype'
  category: 'websites' | 'mobile' | 'backend' | 'ai'
  categoryLabel: string
  summary: string
  problemSolved: string
  keyFeatures: string[]
  technologies: string[]
  architectureHighlights: string[]
  targetIndustry: string
  timelineEstimate: string
  themeGradient: string
}

export const projectsData: ProjectItem[] = [
  {
    id: 'healthcare-portal',
    title: 'CarePulse — Healthcare Clinic & Doctor Booking System',
    badge: 'Project Preview',
    category: 'websites',
    categoryLabel: 'Business Website',
    summary: 'A modern, high-speed appointment scheduling and clinic information platform designed for private practices, clinics, and multi-specialty healthcare centers.',
    problemSolved: 'Replaces manual phone bookings and scattered WhatsApp messages with an automated, synchronized patient scheduling portal that reduces no-shows.',
    keyFeatures: [
      'Interactive doctor availability calendar and instant slot booking',
      'Automated SMS & WhatsApp appointment confirmation webhooks',
      'Clinic departments, doctor credentials, and service fee breakdown',
      'Mobile-optimized patient intake form with file upload support',
      'Doctor admin dashboard for daily schedule & patient queue management'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Twilio API'],
    architectureHighlights: [
      'Single-page fast client application with dynamic serverless API routes',
      'Atomic calendar booking engine with conflict prevention algorithms',
      'Zero-lag responsive layout optimized for elderly & mobile users'
    ],
    targetIndustry: 'Clinics & Hospitals',
    timelineEstimate: '2–3 Weeks',
    themeGradient: 'from-zinc-900 via-zinc-800 to-zinc-900',
  },
  {
    id: 'retail-storefront',
    title: 'NovaMarket — Local Retail & Supermarket Catalog Platform',
    badge: 'Project Preview',
    category: 'websites',
    categoryLabel: 'E-Commerce & Catalog',
    summary: 'A lightweight, ultra-responsive digital catalog and direct WhatsApp ordering system tailored for local retail stores, supermarkets, and specialty shops.',
    problemSolved: 'Enables neighborhood stores to showcase full inventory online with instant direct-to-owner WhatsApp cart checkout without heavy e-commerce fees.',
    keyFeatures: [
      'Fast category browsing with instant client-side keyword search',
      'One-click WhatsApp cart builder with delivery address collection',
      'Featured deals, seasonal discounts, and promotional banners',
      'Store hours, Google Maps navigation, and contact integration',
      'Lightweight inventory manager with quick price and stock updates'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Cloudinary CDN'],
    architectureHighlights: [
      'Sub-second page loads with progressive image loading',
      'Persistent cart state via localStorage with zero login friction',
      'Deep linking for individual products to share via social channels'
    ],
    targetIndustry: 'Retail & Local Shops',
    timelineEstimate: '1–2 Weeks',
    themeGradient: 'from-zinc-950 via-zinc-900 to-zinc-950',
  },
  {
    id: 'field-service-app',
    title: 'ServiceLink — On-Demand Field Technician & Booking App',
    badge: 'Concept Prototype',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    summary: 'A dual-interface mobile application designed for home service providers (plumbing, electrical, appliance repair) connecting customers with verified technicians.',
    problemSolved: 'Eliminates scheduling friction with real-time job dispatching, technician status tracking, and transparent job pricing.',
    keyFeatures: [
      'Customer job request flow with photo upload and location pinning',
      'Technician job acceptance queue and in-app navigation routes',
      'Real-time job status updates (Assigned, En Route, In Progress, Completed)',
      'Digital invoice generation with payment status tracking',
      'Push notifications for immediate dispatch alerts'
    ],
    technologies: ['React Native', 'TypeScript', 'Firebase Auth', 'Firestore', 'Google Maps SDK'],
    architectureHighlights: [
      'Cross-platform codebase sharing 90%+ UI logic between iOS and Android',
      'Offline queue for technicians working in low-connectivity areas',
      'End-to-end encrypted user authentication with OTP fallback'
    ],
    targetIndustry: 'Service Providers & Field Operations',
    timelineEstimate: '4–5 Weeks',
    themeGradient: 'from-zinc-900 via-neutral-900 to-zinc-950',
  },
  {
    id: 'spring-enterprise-auth',
    title: 'SecureCore — Enterprise Auth Gateway & Role-Based API',
    badge: 'Architecture Blueprint',
    category: 'backend',
    categoryLabel: 'Backend System',
    summary: 'A production-grade backend authorization, user management, and API gateway blueprint built with Java Spring Boot and PostgreSQL.',
    problemSolved: 'Provides organizations with a secure, battle-tested foundation for microservices requiring granular multi-tenant role permissions and audit compliance.',
    keyFeatures: [
      'JWT authentication with secure HTTP-only refresh token rotation',
      'Hierarchical Role-Based Access Control (Super Admin, Manager, Staff, User)',
      'Database connection pooling with HikariCP and query indexing',
      'API rate limiting and brute-force protection middleware',
      'Automated OpenAPI / Swagger API specification documentation'
    ],
    technologies: ['Java 21', 'Spring Boot 3', 'Spring Security', 'PostgreSQL', 'Docker', 'Redis'],
    architectureHighlights: [
      'Stateless token verification with Redis-backed token revocation blacklist',
      'Comprehensive database migrations managed via Flyway / Liquibase',
      'Strict input validation and sanitized centralized error responses'
    ],
    targetIndustry: 'Startups & Enterprise SaaS',
    timelineEstimate: '2–4 Weeks',
    themeGradient: 'from-zinc-950 via-zinc-900 to-neutral-950',
  },
  {
    id: 'ai-lead-assistant',
    title: 'AgentX — 24/7 AI Lead Qualification & Customer Support Bot',
    badge: 'Project Preview',
    category: 'ai',
    categoryLabel: 'AI Automation',
    summary: 'An intelligent conversational agent embedded on websites and WhatsApp that answers business inquiries, collects lead data, and schedules consultations.',
    problemSolved: 'Prevents lost sales opportunities after business hours by answering FAQs instantly and filtering high-intent leads directly into the owner inbox.',
    keyFeatures: [
      'Trained on custom business FAQs, service catalogs, and pricing policies',
      'Multi-step lead qualification questionnaire tailored to project type',
      'Instant webhook delivery to email, Telegram, and Google Sheets',
      'Smooth fallback handover to human operator when requested',
      'Context-aware conversation history retention'
    ],
    technologies: ['Python', 'FastAPI', 'OpenAI / Gemini API', 'LangChain', 'PostgreSQL', 'Webhooks'],
    architectureHighlights: [
      'Retrieval-Augmented Generation (RAG) ensuring answers strictly follow verified company data',
      'System guardrails preventing prompt injection and hallucinatory claims',
      'Ultra-low latency streaming response architecture'
    ],
    targetIndustry: 'Clinics, Agencies & E-commerce',
    timelineEstimate: '1–2 Weeks',
    themeGradient: 'from-zinc-900 via-neutral-900 to-zinc-900',
  },
  {
    id: 'hospital-inventory-system',
    title: 'MedSupply — Clinic & Hospital Resource Management Backend',
    badge: 'Architecture Blueprint',
    category: 'backend',
    categoryLabel: 'Backend System',
    summary: 'A robust inventory, equipment maintenance, and consumable supply tracking backend designed for small to medium clinics and hospitals.',
    problemSolved: 'Stops stock-outs and expired medical supplies through automated threshold alerts and batch-level audit trails.',
    keyFeatures: [
      'Batch tracking with expiry date calculation and early warning alerts',
      'Departmental stock allocation and transfer request workflows',
      'Supplier catalog, purchase order generation, and receiving logs',
      'Role-restricted access for pharmacy, nursing, and admin teams',
      'Automated weekly PDF consumption summaries for management'
    ],
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'JPA / Hibernate', 'Docker'],
    architectureHighlights: [
      'ACID transactional guarantees for stock deductions and adjustments',
      'Asynchronous background workers for alert dispatching and reporting',
      'Optimized indexed queries ensuring sub-50ms API response times'
    ],
    targetIndustry: 'Hospitals & Medical Centers',
    timelineEstimate: '3–5 Weeks',
    themeGradient: 'from-zinc-950 via-zinc-900 to-zinc-950',
  }
]
