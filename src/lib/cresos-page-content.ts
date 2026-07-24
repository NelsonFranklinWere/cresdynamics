/** CresOS product page — copy and structured sections */

export const CRESOS_PAGE = {
  metaTitle:
    'CresOS — Business Operating System Kenya | ERP, Finance & Operations in One | Cres Dynamics',
  metaDescription:
    'CresOS is a modular business operating system for Kenyan companies — project management, HR, finance, team chat, RAG knowledge, and AI voice commands in one platform. Built on the Cres Core Engine with M-Pesa and RBAC.',
  hero: {
    eyebrow: 'Flagship platform · Cres Dynamics',
    titleLine1: 'One operating system',
    titleLine2: 'for your entire business.',
    subtitle:
      'Project management, HR, finance, team communication, and AI — including RAG knowledge search and voice commands — in a single platform built around how Kenyan teams actually work.',
    image: '/cresOs.businessoperatingsystem.png',
    imageAlt: 'CresOS business operating system dashboard',
    background: '/sections/analytics-workspace.jpg',
  },
  stats: [
    { value: '1,500+', label: 'Active users' },
    { value: '6.8B+', label: 'KES value tracked' },
    { value: 'AI', label: 'RAG & voice ready' },
    { value: 'M-Pesa', label: 'Native integration' },
  ],
  problem: {
    headline:
      'Your finance, operations, sales, and inventory live in separate tools — and you are the glue holding them together.',
    costs: [
      'The same customer data gets entered three times across different systems.',
      'Finance cannot see operational status and operations cannot see cash flow — decisions get delayed.',
      'You pay for multiple subscriptions that overlap but still leave gaps in your workflow.',
      'Nothing gives you a single view of how the entire business is performing today.',
    ],
  },
  modules: {
    eyebrow: 'Platform modules',
    headline: 'Everything connected. Nothing duplicated.',
    subhead:
      'Start with what you need today. Add modules as you grow — every layer shares the same identity, data model, and permissions.',
    items: [
      {
        icon: '🔐',
        title: 'Identity & Access',
        body: 'Role-based and attribute-based access. Every user sees exactly what their job requires — nothing more.',
        tags: ['RBAC', 'Audit trails', 'Multi-branch'],
      },
      {
        icon: '📋',
        title: 'Project Management',
        body: 'Projects, tasks, due dates, and ownership in one place. The system flags what is up, what is overdue, and who needs to act — without chasing people on WhatsApp.',
        tags: ['Due-date flags', 'Task ownership', 'Status tracking'],
      },
      {
        icon: '💰',
        title: 'Finance & Revenue',
        body: 'Invoices, subscriptions, M-Pesa reconciliation, and live revenue dashboards — updated in real time.',
        tags: ['M-Pesa', 'Invoicing', 'Cash visibility'],
      },
      {
        icon: '🤝',
        title: 'Clients & CRM',
        body: 'Pipeline, engagement history, and follow-ups in one place. Sales and operations share the same customer record.',
        tags: ['Pipeline', 'Engagement', 'Follow-ups'],
      },
      {
        icon: '📊',
        title: 'Reporting & Analytics',
        body: 'Teams report progress where work already lives. Leadership sees revenue, delivery, and people performance on live dashboards.',
        tags: ['Live KPIs', 'Team reports', 'Exports'],
      },
      {
        icon: '👥',
        title: 'People & HR',
        body: 'Staff records, leave, payroll hooks, and org structure — fully integrated with project management so people and delivery stay aligned.',
        tags: ['HR module', 'Leave', 'Org structure'],
      },
      {
        icon: '💬',
        title: 'Team Community',
        body: 'In-system messaging for teams — like WhatsApp, but tied to projects, tasks, and roles so conversations stay inside the work, not scattered across personal chats.',
        tags: ['Internal chat', 'Channels', 'Work context'],
      },
      {
        icon: '🎙️',
        title: 'AI Voice & RAG',
        body: 'Speak instead of typing when time is short — AI turns voice into tasks, updates, and searches. RAG connects your company documents so answers come from your own knowledge, not generic chatbots.',
        tags: ['Voice commands', 'RAG', 'Company knowledge'],
      },
    ],
  },
  engine: {
    eyebrow: 'Cres Core Engine',
    headline: 'Not a template. Infrastructure you own.',
    body: 'CresOS runs on the Cres Core Engine — our proprietary foundation for identity, data, workflows, AI integrations, and payments. You get production-grade architecture without licensing fees to third-party ERP vendors or surprise deprecations.',
    points: [
      'Customised to your workflows — not forced into a generic chart of accounts or approval chain.',
      'API-first design so RAG, voice, and new modules plug in without rebuilding from scratch.',
      'Secure cloud deployment with encryption, RBAC, and audit trails from day one.',
      'Full relationship after launch — monitoring, AI improvements, and support as your business evolves.',
    ],
    image: '/data-connected-analysis.jpg',
  },
  outcomes: {
    eyebrow: 'After go-live',
    headline: 'What changes when everything runs on one system',
    items: [
      'One login for projects, HR, finance, chat, and AI — one source of truth.',
      'Due work is flagged automatically; people report and communicate without leaving the system.',
      'Voice and RAG cut the time spent typing status updates and hunting for documents.',
      'Leadership sees delivery, people, and revenue on a live unified dashboard.',
    ],
  },
  audiences: {
    eyebrow: 'Built for',
    headline: 'Growing businesses that have outgrown spreadsheets',
    items: [
      { label: 'SMEs & scaling companies', desc: 'Replace WhatsApp ops and spreadsheet chaos with one system.' },
      { label: 'Industrial & operations teams', desc: 'Flag due work, report fast, and keep floor-to-office aligned.' },
      { label: 'Training institutions', desc: 'Students, fees, schedules, and reporting unified.' },
      { label: 'Fintech & services', desc: 'Revenue tracking, client management, and compliance-ready audit trails.' },
    ],
  },
  pricing: {
    tier: 'CresOS Business',
    from: '200K',
    note: 'Starting from KES 200,000 · scope confirmed in discovery',
    includes: [
      'Project management & HR modules',
      'Finance & invoice tracking',
      'Team community & reporting',
      'AI voice, RAG & M-Pesa integration',
    ],
  },
} as const;
