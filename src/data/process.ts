export interface ProcessStep {
  step: string
  title: string
  tagline: string
  description: string
  actionItems: string[]
  deliverables: string[]
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'Understanding Your Business & Strategy',
    description: 'We begin with an in-depth conversation to understand your business model, target customers, current pain points, and specific project goals.',
    actionItems: [
      'Analyze your target market, competitors, and client expectations',
      'Identify core business requirements and necessary digital features',
      'Clarify timeline expectations, budget scope, and technical preferences'
    ],
    deliverables: [
      'Project Scope Summary',
      'Feature Prioritization Matrix',
      'Clear Timeline & Milestone Roadmap'
    ]
  },
  {
    step: '02',
    title: 'Plan',
    tagline: 'Architecture & UX Wireframing',
    description: 'We structure the product blueprint, database schemas, user journeys, API specifications, and interface layouts before writing a single line of code.',
    actionItems: [
      'Map intuitive user navigation paths and conversion funnels',
      'Design clean relational database schemas and API contracts',
      'Select the optimal technology stack for performance and long-term scalability'
    ],
    deliverables: [
      'Interactive UI Wireframes & Layout Prototypes',
      'Database Entity-Relationship Schema',
      'System Architecture Blueprint'
    ]
  },
  {
    step: '03',
    title: 'Design & Build',
    tagline: 'Clean Code & High-Standard Engineering',
    description: 'We craft modern, responsive interfaces and build robust backend services using clean, strictly-typed code with continuous review checkpoints.',
    actionItems: [
      'Develop pixel-perfect responsive layouts for mobile, tablet, and desktop',
      'Implement secure authentication, REST APIs, and database integrations',
      'Integrate AI automation workflows, chatbots, and external notification webhooks'
    ],
    deliverables: [
      'Live Staging Environment for Weekly Client Previews',
      'Fully Responsive Frontend & Tested Backend Services',
      'Performance, SEO & Security Benchmark Report'
    ]
  },
  {
    step: '04',
    title: 'Launch & Improve',
    tagline: 'Deployment, Store Submission & Handover',
    description: 'We execute a smooth production launch, configure domains, publish app store bundles, and provide post-launch optimization based on real user feedback.',
    actionItems: [
      'Deploy to high-speed cloud infrastructure (Vercel, AWS, Cloudflare, etc.)',
      'Prepare store listings and metadata for Google Play & Apple App Store',
      'Walk through the admin dashboard and provide clean documentation'
    ],
    deliverables: [
      'Live Production System with SSL and Domain Setup',
      'Clean Codebase Handover & Documentation Guide',
      'Post-Launch Support & Warranty Check-in'
    ]
  }
]
