export type PackageCategory = 'website' | 'mobile' | 'ai'

export interface PackageCategoryMeta {
  id: PackageCategory
  label: string
  icon: string
  subtitle: string
}

export interface DetailedPackage {
  id: string
  category: PackageCategory
  name: string
  price: string
  numericPrice: number
  tierNumber: string
  badge?: string
  popular?: boolean
  tagline: string
  idealFor: string
  pagesOrScreens: string
  features: string[]
  examples?: string[]
  notIncluded?: string[]
  supportDays: string
  thirdPartyNotes: string
}

export const packageCategories: PackageCategoryMeta[] = [
  {
    id: 'website',
    label: 'Website Development',
    icon: 'Globe',
    subtitle: 'High-converting websites from landing pages to full e-commerce'
  },
  {
    id: 'mobile',
    label: 'Mobile App Development',
    icon: 'Smartphone',
    subtitle: 'Store-ready Android and iOS applications with backend & auth'
  },
  {
    id: 'ai',
    label: 'AI Automation Agents',
    icon: 'Bot',
    subtitle: 'Custom AI chatbots, lead qualification, and business workflows'
  }
]

export const allPackagesData: DetailedPackage[] = [
  // ==========================================
  // 1. WEBSITE DEVELOPMENT PACKAGES (₹5,000 / ₹15,000 / ₹50,000)
  // ==========================================
  {
    id: 'web-starter',
    category: 'website',
    name: 'Starter Landing Page',
    tierNumber: '01',
    price: '₹5,000',
    numericPrice: 5000,
    tagline: 'High-Converting Single Page Website',
    idealFor: 'Small Businesses, Freelancers, Personal Brands & Service Providers',
    pagesOrScreens: '1 Professional Single Landing Page',
    features: [
      '1 Professional Landing Page',
      'Hero / Introduction Section',
      'About Business Section',
      'Services Section',
      'Portfolio / Gallery',
      'Why Choose Us Section',
      'Testimonials',
      'FAQ Section',
      'Contact Details',
      'Enquiry Form',
      'WhatsApp Button',
      'Google Maps Integration',
      'Social Media Links',
      'Mobile Responsive Design',
      'Basic SEO Setup'
    ],
    supportDays: '15 Days Support',
    thirdPartyNotes: 'Domain & Hosting: Purchased separately by the client.'
  },
  {
    id: 'web-professional',
    category: 'website',
    name: 'Professional Business Website',
    tierNumber: '02',
    price: '₹15,000',
    numericPrice: 15000,
    popular: true,
    badge: 'Most Popular for Businesses & Clinics',
    tagline: 'Complete 5–6 Page Business Website',
    idealFor: 'Growing Businesses, Companies, Clinics, Studios, Agencies & Professional Services',
    pagesOrScreens: '5 to 6 Dedicated Custom Pages',
    features: [
      'Includes 5–6 Pages: Home, About Us, Services, Portfolio/Gallery, Testimonials/FAQ, Contact/Enquiry',
      'Professional UI/UX Design',
      'Enquiry Forms & Lead Capture',
      'WhatsApp Integration',
      'Google Maps Integration',
      'Testimonials Showcase',
      'FAQ Accordion Section',
      'High-Resolution Gallery',
      'Social Media Integration',
      'Basic Technical SEO Setup',
      'Mobile-First Responsive Design',
      'Conversion Call-to-Action Buttons',
      'Structured Business Information Sections',
      'Blog Section (Optional Setup)'
    ],
    supportDays: '30 Days Support',
    thirdPartyNotes: 'Domain & Hosting: Purchased separately by the client.'
  },
  {
    id: 'web-ecommerce',
    category: 'website',
    name: 'Complete E-Commerce Website',
    tierNumber: '03',
    price: '₹50,000',
    numericPrice: 50000,
    badge: 'Complete Online Store',
    tagline: 'End-to-End Online Selling Platform',
    idealFor: 'Product-Based Businesses & Brands Looking to Sell Online',
    pagesOrScreens: 'Full Storefront + Catalog + Admin Dashboard',
    features: [
      'Professional Home Page & About Us Page',
      'Shop Page with Categories & Product Taxonomy',
      'Product Listing & Detail Pages with Zoom',
      'Product Search & Dynamic Filters',
      'Add to Cart & Wishlist System',
      'Streamlined Checkout System',
      'Online Payment Integration (Razorpay/Stripe/UPI)',
      'Customer Login / User Accounts',
      'Order Confirmation & Management',
      'Product & Inventory Management',
      'Admin Dashboard Control Panel',
      'Coupon & Discount System',
      'Shipping Information & Delivery Rules',
      'Customer Reviews & Ratings',
      'Offers, Promotions & Sliders',
      'Blog Section',
      'Contact / Enquiry Form & WhatsApp Integration',
      'Google Maps & Social Media Integration',
      'Basic SEO Setup & Mobile Responsive Design'
    ],
    supportDays: '60 Days Support',
    thirdPartyNotes: 'Domain & Hosting: Purchased separately by the client. Note: Payment gateway charges, premium plugins/tools, hosting, domain and other third-party services are charged separately where applicable.'
  },

  // ==========================================
  // 2. MOBILE APP DEVELOPMENT PACKAGES
  // ==========================================
  {
    id: 'mobile-starter',
    category: 'mobile',
    name: 'App Starter',
    tierNumber: '01',
    price: '₹30,000',
    numericPrice: 30000,
    tagline: 'Essential Android Utility & Catalog App',
    idealFor: 'Small Businesses, Freelancers, Personal Brands, Service Providers & Simple Utility Apps',
    pagesOrScreens: 'Up to 8–10 Primary Screens',
    features: [
      'Android Application Build',
      'Up to 8–10 Primary Screens',
      'Splash Screen & App Icon Setup',
      'Professional Home Screen',
      'About / Services Section',
      'Product / Service Catalogue',
      'Contact / Enquiry Form with Validation',
      'Basic Navigation System',
      'Professional Responsive UI',
      'WhatsApp Integration',
      'Phone / Email Contact Integration',
      'Basic Backend / Database Connection',
      'Basic API Integration',
      'Form Validation & Basic Error Handling',
      'Basic Testing across screen sizes',
      'Production APK / AAB Build',
      'Play Store Build Preparation'
    ],
    notIncluded: [
      'iOS Application',
      'Online Payment',
      'Live Chat',
      'Advanced Admin Dashboard',
      'Real-Time GPS Tracking',
      'Complex Booking System',
      'Advanced AI Features'
    ],
    supportDays: '30 Days Bug-Fix Support',
    thirdPartyNotes: 'Third-Party Charges: Play Store account, hosting, APIs, SMS/OTP, payment gateways and other external services are charged separately.'
  },
  {
    id: 'mobile-professional',
    category: 'mobile',
    name: 'Professional Business App',
    tierNumber: '02',
    price: '₹70,000',
    numericPrice: 70000,
    popular: true,
    badge: 'Cross-Platform (iOS + Android)',
    tagline: 'Cross-Platform Android & iOS Solution',
    idealFor: 'Clinics, Restaurants, Shops, Educational Institutions, Agencies & Growing Businesses',
    pagesOrScreens: 'Up to 15–20 Screens',
    features: [
      'Android & iOS Application (Cross-Platform)',
      'Up to 15–20 Screens',
      'Professional UI/UX Design System',
      'Splash Screen & Onboarding Experience',
      'User Registration, Login & Profile',
      'Services / Product Catalogue with Search & Filters',
      'Enquiry / Appointment Request Flow',
      'Push Notification Setup',
      'REST API Integration',
      'Database Integration (PostgreSQL / Cloud)',
      'Basic Admin Dashboard',
      'Image / Document Upload & Cloud Storage',
      'WhatsApp & Communication Features',
      'Basic Analytics Setup',
      'Form Validation, Error Handling & Security',
      'Device Testing on Common Devices',
      'Production Builds (AAB / iOS Archive)',
      'Play Store & App Store Submission Assistance'
    ],
    supportDays: '60 Days Bug-Fix Support',
    thirdPartyNotes: 'Third-Party Charges: Cloud hosting, database, SMS/OTP, payment gateway, Apple Developer Account, Google Play Console and other third-party services are charged separately.'
  },
  {
    id: 'mobile-complete',
    category: 'mobile',
    name: 'Complete Business App System',
    tierNumber: '03',
    price: '₹1,50,000',
    numericPrice: 150000,
    badge: 'Enterprise Platform',
    tagline: 'End-to-End Mobile Platform with Full Backend',
    idealFor: 'Startups, Established Businesses & Companies Requiring a Complete Digital Platform',
    pagesOrScreens: 'Up to 30–40 Screens + Admin Control Suite',
    features: [
      'Android & iOS Applications with Custom UI/UX',
      'Up to 30–40 Screens with Onboarding Flow',
      'Secure Auth (Email / Password / OTP Authentication)',
      'User Profiles with Role-Based Access Control (RBAC)',
      'Product / Service Management & Filtering',
      'Booking / Order Management System',
      'Payment Gateway Integration (Razorpay / Stripe)',
      'Push Notifications & Email Notifications',
      'REST API Backend & Robust Database Architecture',
      'Cloud Storage Integration',
      'Comprehensive Admin Dashboard',
      'User Management & Role Permissions',
      'Order / Booking Management Control',
      'Basic Reports & Analytics Dashboard',
      'Customer Support / Enquiry Module',
      'Image & Document Upload',
      'Production Builds & Store Submission Assistance (Play Store + App Store)'
    ],
    notIncluded: [
      'Live GPS Tracking (Unless Quoted)',
      'Video Calling (Unless Quoted)',
      'Multi-Vendor Marketplace (Unless Quoted)',
      'Continuous Content Management (Unless Quoted)'
    ],
    supportDays: '90 Days Bug-Fix Support',
    thirdPartyNotes: 'Third-Party Charges: Hosting, cloud services, SMS/OTP, payment gateways, developer accounts, APIs and other external services are charged separately.'
  },

  // ==========================================
  // 3. AI AUTOMATION AGENT PACKAGES
  // ==========================================
  {
    id: 'ai-starter',
    category: 'ai',
    name: 'AI Starter Agent',
    tierNumber: '01',
    price: '₹20,000',
    numericPrice: 20000,
    tagline: '24/7 Intelligent Website Chatbot',
    idealFor: 'Small Businesses, Freelancers, Clinics, Shops & Service Providers',
    pagesOrScreens: '1 Custom AI Chatbot / Automation Agent',
    features: [
      '1 AI Chatbot / Automation Agent',
      'Website Chatbot Widget Integration',
      'Custom Business Knowledge Base Setup',
      'Business FAQ & Product/Service Training',
      'Instant Customer Question Answering',
      'Basic Lead Collection (Name, Email, Phone)',
      'Basic Enquiry Qualification Logic',
      'Automated Lead Notification via Email',
      'Custom Conversation Flow & Greetings',
      'Basic Prompt Engineering & Guardrails',
      'Conversation Testing & Deployment Assistance'
    ],
    examples: [
      'Clinic Enquiry Assistant',
      'Website Customer Support Bot',
      'Product Information Assistant',
      'Freelancer Lead Collection Bot',
      'Business FAQ Assistant'
    ],
    supportDays: '15 Days Bug-Fix Support',
    thirdPartyNotes: 'AI API Usage, Hosting, WhatsApp Charges & Automation Platform Charges: Paid separately by the client.'
  },
  {
    id: 'ai-business',
    category: 'ai',
    name: 'AI Business Automation',
    tierNumber: '02',
    price: '₹60,000',
    numericPrice: 60000,
    popular: true,
    badge: 'Multi-Channel AI Workflow',
    tagline: 'Website + WhatsApp Lead & Booking Bot',
    idealFor: 'Clinics, Agencies, Shops, Educational Businesses, Real-Estate & Service Providers',
    pagesOrScreens: 'Custom Multi-Channel AI Business Agent',
    features: [
      'Custom AI Business Agent',
      'Website AI Chatbot + WhatsApp OR Email Workflow Integration',
      'Business Knowledge Base (FAQ & Documents)',
      'Automated Lead Collection & Qualification',
      'Customer Enquiry Automation',
      'Appointment / Booking Request Workflow',
      'Automated Follow-Up Notification System',
      'Google Sheets & CRM / Database Integration',
      'Email Notifications & Lead Status Tracking',
      'Admin View for Inquiries & Conversation History',
      'Custom AI Conversation Flow & Prompt Engineering',
      'Human Handoff Option for Team Escalation',
      'Conversation Testing & Production Deployment'
    ],
    examples: [
      'AI Clinic Appointment Assistant',
      'Real-Estate Lead Qualification Agent',
      'Course Enquiry & Follow-Up Agent',
      'E-Commerce Customer Support Agent',
      'Agency Lead Generation Agent'
    ],
    supportDays: '30 Days Support',
    thirdPartyNotes: 'Recurring AI Model, WhatsApp, Hosting, CRM, Automation Platform & Third-Party API Charges: Paid separately by the client.'
  },
  {
    id: 'ai-complete',
    category: 'ai',
    name: 'Complete AI Automation System',
    tierNumber: '03',
    price: '₹1,20,000',
    numericPrice: 120000,
    badge: 'Enterprise AI Ecosystem',
    tagline: 'Multi-Agent Operations & Workflow Suite',
    idealFor: 'Growing Companies, Startups & Businesses Requiring Multiple AI-Powered Workflows',
    pagesOrScreens: 'Multiple AI Agents & Deep Workflow Automation',
    features: [
      'Multiple AI Agents / Workflows (Support + Sales + Operations)',
      'Website AI Integration + WhatsApp Integration',
      'Custom Business & Document Knowledge Base',
      'AI Customer Support Agent + AI Lead Generation Agent',
      'Comprehensive Lead Qualification System',
      'Appointment / Booking Workflow & Automated Follow-Up',
      'CRM, Database & External REST API Integrations',
      'Automated Lead Assignment & Email Automation',
      'Notification Workflows for Instant Team Alerts',
      'Customer Enquiry Management Admin Dashboard',
      'Conversation Logs & Analytics Reporting',
      'Human Handoff System & Role-Based Access Control',
      'Authentication, Security & Strict Data Validation',
      'Custom AI Prompt Engineering & Guardrails',
      'Production Deployment & Performance Optimization'
    ],
    examples: [
      'AI Customer Support System',
      'AI Sales & Lead Management System',
      'AI Appointment & Follow-Up Platform',
      'AI Business Workflow Automation',
      'AI Internal Knowledge Assistant'
    ],
    supportDays: '60 Days Support & Optimization',
    thirdPartyNotes: 'Recurring AI Model Usage, WhatsApp, Hosting, CRM, Automation Platforms, Cloud Services & Third-Party API Charges: Paid separately by the client.'
  }
]
