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
    title: 'Discovery & Goals',
    tagline: 'Understanding Your Business & Audience',
    description: 'We begin with an in-depth discovery session to understand your business model, customer psychology, competitive landscape, and specific revenue targets.',
    actionItems: [
      'Analyze your target audience, customer pain points, and commercial objectives',
      'Identify essential digital features, integrations, and user conversion funnels',
      'Establish clear milestones, transparent fixed pricing, and delivery timelines'
    ],
    deliverables: [
      'Project Scope & Strategy Summary',
      'Feature Prioritization Matrix',
      'Clear Milestone & Delivery Roadmap'
    ]
  },
  {
    step: '02',
    title: 'Wireframe & Messaging',
    tagline: 'Architecture, Copy & System Design',
    description: 'We structure the narrative flow, conversion messaging, database schemas, API specs, and interactive wireframes before writing code.',
    actionItems: [
      'Craft high-impact copy and intuitive user journey paths',
      'Design relational database schemas and secure API contracts',
      'Prototype mobile-first responsive wireframes for early feedback'
    ],
    deliverables: [
      'Interactive UI Wireframes & Layout Prototypes',
      'Messaging & Copy Hierarchy Blueprint',
      'System Architecture & Database Schema'
    ]
  },
  {
    step: '03',
    title: 'Design & Build',
    tagline: 'Clean Code & High-Performance Engineering',
    description: 'We craft modern, polished interfaces and implement robust backend services and AI agents using clean, strictly-typed code with weekly sprint previews.',
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
    title: 'Review & Launch',
    tagline: 'Testing, Deployment & Client Handover',
    description: 'We execute thorough cross-device QA, configure domains and SSL, publish mobile app store bundles, and deliver 100% complete source code ownership.',
    actionItems: [
      'Deploy to high-speed cloud infrastructure (Vercel, AWS, Cloudflare, etc.)',
      'Prepare store listings and metadata for Google Play & Apple App Store',
      'Walk through the admin dashboard and provide clean documentation'
    ],
    deliverables: [
      'Live Production System with SSL and Domain Setup',
      'Clean Codebase Handover & Documentation Guide',
      'Post-Launch Support & Performance Check-in'
    ]
  }
]
