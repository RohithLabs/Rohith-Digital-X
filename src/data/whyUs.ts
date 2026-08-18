export interface WhyUsBenefit {
  number: string
  title: string
  subtitle: string
  description: string
  highlight: string
  iconName: 'UserCheck' | 'TrendingUp' | 'Smartphone' | 'Code2' | 'Layers' | 'MessageSquare' | 'Target'
}

export const whyUsData: WhyUsBenefit[] = [
  {
    number: '01',
    title: 'One Focused Point of Contact',
    subtitle: 'Direct Founder & Engineering Collaboration',
    description: 'You communicate directly with Rohith E throughout your entire project. No account managers, no junior handoffs, and no miscommunication.',
    highlight: 'Direct founder accountability from first call to deployment.',
    iconName: 'UserCheck',
  },
  {
    number: '02',
    title: 'Business-Focused Decisions',
    subtitle: 'Engineered for Conversion & ROI',
    description: 'Every interface layout, button placement, and technical choice is designed with one goal: converting your visitors into paying customers and patients.',
    highlight: 'Design and technology aligned with real revenue goals.',
    iconName: 'TrendingUp',
  },
  {
    number: '03',
    title: 'Responsive & Accessible Interfaces',
    subtitle: 'Flawless on Every Screen Size',
    description: 'Every project is rigorously tested on actual smartphones, tablets, laptops, and ultra-wide displays to guarantee smooth touch targets and fast loading.',
    highlight: 'Tested across real mobile, tablet, and desktop devices.',
    iconName: 'Smartphone',
  },
  {
    number: '04',
    title: 'Clean, Maintainable Development',
    subtitle: 'Zero Fragile Hacks or Bloated Code',
    description: 'Built with modular architecture, strict typing, and clean coding standards so your team or future developers can easily extend and manage the product.',
    highlight: 'Organized, readable, and documented codebase.',
    iconName: 'Code2',
  },
  {
    number: '05',
    title: 'Scalable Backend Architecture',
    subtitle: 'Built for High Traffic & Data Integrity',
    description: 'Using proven backend standards including Java Spring Boot, PostgreSQL, and secure token authentication that handle growing user loads without crashing.',
    highlight: 'Battle-tested backends that scale seamlessly with your growth.',
    iconName: 'Layers',
  },
  {
    number: '06',
    title: 'Clear Project Communication',
    subtitle: 'Transparent Milestones & Regular Updates',
    description: 'You receive regular milestone demonstrations, transparent timelines, and clear progress summaries in simple human terms without confusing technical jargon.',
    highlight: 'No surprises, no dark periods—always know your project status.',
    iconName: 'MessageSquare',
  },
  {
    number: '07',
    title: 'Solutions Tailored to Your Needs',
    subtitle: 'No Cookie-Cutter Templates',
    description: 'Whether you run a clinic, retail shop, hospital, or technology startup, the solution is designed specifically around your operational workflow and target audience.',
    highlight: 'Custom-tailored functionality built for your exact business model.',
    iconName: 'Target',
  }
]
