export interface TechCategory {
  title: string
  description: string
  skills: {
    name: string
    level: string
    description: string
    badge: string
  }[]
}

export const techStackData: TechCategory[] = [
  {
    title: 'Backend & Enterprise Core',
    description: 'Robust server-side logic, microservices, and high-concurrency architectures.',
    skills: [
      { name: 'Java', level: 'Core Expertise', description: 'Enterprise backend development, OOP design patterns, and multithreading.', badge: 'Primary' },
      { name: 'Spring Boot', level: 'Framework', description: 'Production-ready REST APIs, Spring Security, JPA/Hibernate, and dependency injection.', badge: 'Core' },
      { name: 'RESTful APIs', level: 'Architecture', description: 'Clean resource routing, JSON serialization, OpenAPI/Swagger specifications, and rate limiting.', badge: 'Standard' },
      { name: 'Node.js', level: 'Runtime', description: 'Lightweight API endpoints, webhook handling, and serverless background tasks.', badge: 'Secondary' },
    ]
  },
  {
    title: 'Frontend & Mobile Interfaces',
    description: 'Modern, responsive, high-performance web applications and cross-platform mobile apps.',
    skills: [
      { name: 'React', level: 'UI Library', description: 'Component architectures, state management, hooks, and clean virtual DOM rendering.', badge: 'Core' },
      { name: 'JavaScript & TypeScript', level: 'Language', description: 'Strict type safety, modern ES6+ syntax, asynchronous programming, and DOM APIs.', badge: 'Standard' },
      { name: 'Tailwind CSS', level: 'Styling', description: 'Custom design systems, responsive grid layouts, and micro-animations.', badge: 'Core' },
      { name: 'React Native', level: 'Mobile', description: 'Cross-platform mobile apps for Android and iOS with native device integrations.', badge: 'Mobile' },
    ]
  },
  {
    title: 'Databases, Security & Cloud',
    description: 'Persistent data integrity, secure authentication, and cloud infrastructure.',
    skills: [
      { name: 'PostgreSQL & MySQL', level: 'Databases', description: 'Relational data modeling, schema indexing, transactions, and query optimization.', badge: 'Database' },
      { name: 'Authentication & Security', level: 'Security', description: 'JWT tokens, OAuth2, password hashing (BCrypt), and role-based access control (RBAC). badge: Security', badge: 'Security' },
      { name: 'Cloud & Hosting', level: 'Infrastructure', description: 'Vercel, AWS, Cloudflare, Docker containerization, and DNS configuration.', badge: 'DevOps' },
      { name: 'Git & GitHub', level: 'Versioning', description: 'Clean branch workflows, code reviews, and structured commit versioning.', badge: 'Workflow' },
    ]
  },
  {
    title: 'AI Automation & Integrations',
    description: 'Connecting generative AI models and automation webhooks to real business workflows.',
    skills: [
      { name: 'AI Models & APIs', level: 'GenAI', description: 'Integration of OpenAI and Gemini APIs with structured JSON output and prompt engineering.', badge: 'AI' },
      { name: 'LangChain & RAG', level: 'AI Framework', description: 'Custom knowledge base retrieval, document chunking, and contextual chatbots.', badge: 'Automation' },
      { name: 'Webhooks & Automation', level: 'Workflows', description: 'Connecting WhatsApp, Telegram, CRM systems, and Google Sheets for lead automation.', badge: 'Integration' },
    ]
  }
]
