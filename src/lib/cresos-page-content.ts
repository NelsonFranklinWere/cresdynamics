/** CresOS product page — copy and structured sections */

export const CRESOS_PAGE = {
  metaTitle:
    'CresOS — Business Operating System Kenya | ERP, Finance & Operations in One | Cres Dynamics',
  metaDescription:
    'CresOS is a modular business operating system for Kenyan companies — identity, operations, finance, clients, and analytics in one platform. Built on the Cres Core Engine with M-Pesa, RBAC, and API-first architecture.',
  hero: {
    eyebrow: 'Flagship platform · Cres Dynamics',
    titleLine1: 'One operating system',
    titleLine2: 'for your entire business.',
    subtitle:
      'Finance, operations, sales, inventory, and approvals in a single platform — built around how you work, not a vendor template. Modular, role-based, and ready for M-Pesa.',
    image: '/cresOs.businessoperatingsystem.png',
    imageAlt: 'CresOS business operating system dashboard',
    background: '/sections/analytics-workspace.jpg',
  },
  stats: [
    { value: '6', label: 'Core modules' },
    { value: '1', label: 'Source of truth' },
    { value: 'API', label: 'First architecture' },
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
        icon: '⚙️',
        title: 'Operations',
        body: 'Projects, tasks, approvals, and workflows. Know who owns what and what is stuck without chasing people.',
        tags: ['Approvals', 'Task routing', 'Status tracking'],
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
        title: 'Analytics',
        body: 'Executive dashboards that leadership actually uses — revenue, operations, and team performance at a glance.',
        tags: ['Live KPIs', 'Exports', 'Role views'],
      },
      {
        icon: '👥',
        title: 'People & HR',
        body: 'Staff records, leave, payroll hooks, and team structure — integrated with operations and finance.',
        tags: ['Staff records', 'Leave', 'Org structure'],
      },
    ],
  },
  engine: {
    eyebrow: 'Cres Core Engine',
    headline: 'Not a template. Infrastructure you own.',
    body: 'CresOS runs on the Cres Core Engine — our proprietary foundation for identity, data, workflows, and integrations. You get production-grade architecture without licensing fees to third-party ERP vendors or surprise deprecations.',
    points: [
      'Customised to your workflows — not forced into a generic chart of accounts or approval chain.',
      'API-first design so new modules and integrations plug in without rebuilding from scratch.',
      'Secure cloud deployment with encryption, RBAC, and audit trails from day one.',
      'Full relationship after launch — monitoring, improvements, and support as your business evolves.',
    ],
    image: '/data-connected-analysis.jpg',
  },
  outcomes: {
    eyebrow: 'After go-live',
    headline: 'What changes when everything runs on one system',
    items: [
      'One login, one dashboard, one source of truth across finance, operations, and sales.',
      'Data entered once flows everywhere it needs to — no duplicate entry across tools.',
      'Leadership sees revenue, operations, and team performance on a live unified dashboard.',
      'Your business runs on infrastructure designed for growth — not a patchwork of disconnected apps.',
    ],
  },
  audiences: {
    eyebrow: 'Built for',
    headline: 'Growing businesses that have outgrown spreadsheets',
    items: [
      { label: 'SMEs & scaling companies', desc: 'Replace WhatsApp ops and spreadsheet chaos with one system.' },
      { label: 'Training institutions', desc: 'Students, fees, schedules, and reporting unified.' },
      { label: 'Fintech & services', desc: 'Revenue tracking, client management, and compliance-ready audit trails.' },
      { label: 'NGOs & organisations', desc: 'Programmes, donors, finance, and field operations in sync.' },
    ],
  },
  pricing: {
    tier: 'CresOS Business',
    from: '200K',
    note: 'Starting from KES 200,000 · scope confirmed in discovery',
    includes: [
      'Operations management module',
      'Finance & invoice tracking',
      'Client & team management',
      'Analytics dashboard & M-Pesa integration',
    ],
  },
} as const;
