export type ServicePageContent = {
  slug: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  h1Keyword: string;
  problemHeadline: string;
  costsThem: string[];
  whatWeBuild: string;
  whatChanges: string[];
  ctaHref?: string;
};

export const SERVICE_PAGES: Record<string, ServicePageContent> = {
  erp: {
    slug: 'erp',
    path: '/erp',
    metaTitle: 'Custom ERP System Kenya — Built Around Your Workflows | Cres Dynamics',
    metaDescription:
      'Your team runs on spreadsheets and WhatsApp because no ERP fits how you operate. Cres Dynamics builds custom ERP systems in Nairobi with M-Pesa integration, inventory, finance, and approvals in one platform.',
    h1Keyword: 'Custom ERP Kenya',
    problemHeadline:
      'Your business runs on five spreadsheets, three WhatsApp groups, and one person who holds it all together.',
    costsThem: [
      'Stock disappears without a trace because nothing tracks movement across locations in real time.',
      'Approvals sit in chat threads until someone chases them manually — projects stall.',
      'Finance finds out about revenue problems at month-end when the damage is already done.',
      'You cannot scale because every decision still flows through one overloaded person.',
    ],
    whatWeBuild:
      'A custom ERP system Kenya businesses actually run on — finance, inventory, HR, approvals, and operations in one platform. Built around your workflows, not a vendor template. M-Pesa integration included where payments matter.',
    whatChanges: [
      'One source of truth for stock, orders, and financial status across every location.',
      'Approval chains that move automatically — no chasing people on WhatsApp.',
      'Real-time dashboards showing revenue, costs, and operational bottlenecks.',
      'Your team knows who owns what and what is stuck without asking you.',
    ],
  },
  ecommerce: {
    slug: 'e-commerce',
    path: '/e-commerce',
    metaTitle: 'E-Commerce Website Kenya — M-Pesa, Orders & Stock in One System | Cres Dynamics',
    metaDescription:
      'Orders lost in WhatsApp. Stock updated manually. No online payments. Cres Dynamics builds e-commerce platforms for Kenyan businesses with M-Pesa, automated order management, and real-time inventory.',
    h1Keyword: 'E-Commerce Website Kenya',
    problemHeadline:
      'Customers want to buy online but your orders still arrive as WhatsApp messages and screenshots.',
    costsThem: [
      'Orders get missed, duplicated, or fulfilled late because there is no central order queue.',
      'Stock counts are wrong because online and in-store inventory are not connected.',
      'Customers abandon checkout because M-Pesa and card payments are not built in.',
      'You spend hours every day manually confirming payments and updating spreadsheets.',
    ],
    whatWeBuild:
      'A full e-commerce website Kenya customers can actually buy from — product catalogue, M-Pesa and card payments, automated order management, and stock tracked in real time across every channel.',
    whatChanges: [
      'Every order lands in one system with payment status confirmed automatically.',
      'Stock updates the moment a sale happens — online or in person.',
      'Customers pay via M-Pesa or card without you manually confirming each transaction.',
      'Your team manages fulfilment from a dashboard instead of scrolling chat threads.',
    ],
  },
  finance: {
    slug: 'finance-platforms',
    path: '/finance-platforms',
    metaTitle: 'Finance Platform Kenya — Real-Time Revenue & M-Pesa Reconciliation | Cres Dynamics',
    metaDescription:
      'You find out about revenue problems at month-end. M-Pesa payments do not reconcile. Cres Dynamics builds finance platforms for Kenyan businesses with live dashboards and automated reconciliation.',
    h1Keyword: 'Finance Platform Kenya',
    problemHeadline:
      'You cannot tell how much money your business made today — only what the spreadsheet says at month-end.',
    costsThem: [
      'M-Pesa payments arrive with no automatic link to invoices or customer records.',
      'Invoices go unsent or uncollected because there is no system tracking what is owed.',
      'Leadership makes decisions on numbers that are already two weeks old.',
      'Finance spends days reconciling instead of analysing where money is leaking.',
    ],
    whatWeBuild:
      'A finance platform Kenya businesses use to see every shilling in real time — automated M-Pesa reconciliation, invoice management, subscription billing, and financial dashboards that update live.',
    whatChanges: [
      'Revenue, outstanding invoices, and cash position visible on one dashboard today — not next month.',
      'M-Pesa payments matched to customers and invoices automatically.',
      'Invoices sent, tracked, and followed up without manual spreadsheets.',
      'Leadership decisions based on live numbers, not stale reports.',
    ],
  },
  ai: {
    slug: 'ai-automation',
    path: '/ai-automation',
    metaTitle: 'AI Automation Kenya — Replace Manual Work Your Team Does Every Day | Cres Dynamics',
    metaDescription:
      'Your team repeats the same manual tasks every day — follow-ups, data entry, status updates. Cres Dynamics builds AI automation systems for Kenyan businesses that work while you sleep.',
    h1Keyword: 'AI Automation Kenya',
    problemHeadline:
      'Your team spends hours every day on repetitive work that a system should handle automatically.',
    costsThem: [
      'Customer follow-ups get forgotten because nobody has time to chase every lead manually.',
      'Data gets entered twice — once in WhatsApp, once in a spreadsheet — and errors compound.',
      'Status updates require someone to remember to check and notify the next person.',
      'Growth means hiring more people to do the same manual tasks instead of fixing the process.',
    ],
    whatWeBuild:
      'AI automation Kenya businesses use to replace repetitive manual work — automated follow-ups, workflow triggers, intelligent routing, and decision support that runs while your team focuses on what only humans can do.',
    whatChanges: [
      'Follow-ups, reminders, and status updates happen automatically without human chasing.',
      'Data flows once into one system — no duplicate entry across tools.',
      'Workflows trigger the next step the moment conditions are met.',
      'Your team scales output without scaling headcount on manual tasks.',
    ],
  },
  websites: {
    slug: 'websites',
    path: '/websites',
    metaTitle: 'Website Development Nairobi — Sites That Convert & Rank on Google | Cres Dynamics',
    metaDescription:
      'Your website exists but nobody finds it on Google and visitors do not know what to do. Cres Dynamics builds professional websites in Nairobi designed to convert visitors into customers.',
    h1Keyword: 'Website Development Nairobi',
    problemHeadline:
      'Your website exists but it does not bring in customers — nobody can find it and nobody knows what to do when they land on it.',
    costsThem: [
      'Potential customers search for what you offer and find your competitors instead.',
      'Visitors land on your site and leave because there is no clear next step.',
      'You look less credible than competitors with professional, findable websites.',
      'Every enquiry still comes through referrals because your site generates zero inbound leads.',
    ],
    whatWeBuild:
      'Professional website development Nairobi businesses use as a sales tool — mobile-first design, SEO built in from day one, clear conversion paths, and content that tells visitors exactly what to do next.',
    whatChanges: [
      'Your business appears when customers search for what you offer on Google.',
      'Every page has one clear action — book, call, buy, or enquire.',
      'Visitors see a credible, professional presence that matches the quality of your work.',
      'Your website generates inbound enquiries instead of sitting as a digital brochure.',
    ],
  },
  marketing: {
    slug: 'marketing',
    path: '/marketing',
    metaTitle: 'Meta & Google Ads Kenya — Paid Traffic That Converts to Customers | Cres Dynamics',
    metaDescription:
      'You are spending on ads but cannot tell what is working. Cres Dynamics manages Meta and Google Ads for Kenyan businesses with landing pages and tracking built to convert.',
    h1Keyword: 'Meta and Google Ads Kenya',
    problemHeadline:
      'You are spending money on ads but cannot tell which campaigns bring customers and which burn budget.',
    costsThem: [
      'Ad spend goes out with no clear link to enquiries, sales, or revenue.',
      'Landing pages do not convert because they were not built for the ad message.',
      'You pause and restart campaigns based on gut feel instead of data.',
      'Competitors with better-targeted ads capture customers who should be yours.',
    ],
    whatWeBuild:
      'Meta and Google Ads management Kenya businesses use to turn ad spend into measurable customers — campaign strategy, landing pages built to convert, tracking that shows exactly what each shilling returns.',
    whatChanges: [
      'Every campaign tied to a measurable outcome — enquiries, bookings, or sales.',
      'Landing pages matched to ad messages so visitors convert instead of bouncing.',
      'Weekly reporting showing what works, what does not, and where to shift budget.',
      'Ad spend directed toward customers who actually buy, not just clicks.',
    ],
  },
  cresos: {
    slug: 'cresos',
    path: '/cresos',
    metaTitle: 'CresOS — Business Operating System Kenya | ERP, Finance & Operations in One | Cres Dynamics',
    metaDescription:
      'Your business runs on five disconnected tools that do not talk to each other. CresOS is an all-in-one business operating system for Kenyan companies — ERP, finance, sales, and operations unified.',
    h1Keyword: 'Business Operating System Kenya',
    problemHeadline:
      'Your finance, operations, sales, and inventory live in separate tools that never sync — and you are the glue holding them together.',
    costsThem: [
      'The same customer data gets entered three times across different systems.',
      'Finance cannot see operational status and operations cannot see cash flow — decisions get delayed.',
      'You pay for multiple subscriptions that overlap but still leave gaps in your workflow.',
      'Nothing gives you a single view of how the entire business is performing today.',
    ],
    whatWeBuild:
      'CresOS — an all-in-one business operating system Kenya companies run on. ERP, finance, sales, inventory, approvals, and reporting in one platform built on the Cres Core Engine, customised to how your business actually operates.',
    whatChanges: [
      'One login, one dashboard, one source of truth across finance, operations, and sales.',
      'Data entered once flows everywhere it needs to — no duplicate entry across tools.',
      'Leadership sees revenue, operations, and team performance on a live unified dashboard.',
      'Your business runs on infrastructure designed for growth — not a patchwork of disconnected apps.',
    ],
  },
  software: {
    slug: 'software',
    path: '/software',
    metaTitle: 'Custom Software Development Nairobi — Built for Your Exact Workflow | Cres Dynamics',
    metaDescription:
      'Off-the-shelf software forces your business to adapt. Cres Dynamics builds custom software and web applications in Nairobi — portals, dashboards, booking systems, and internal tools designed around how you work.',
    h1Keyword: 'Custom Software Development Nairobi',
    problemHeadline:
      'You need a system that does exactly what your business requires — but every off-the-shelf option forces you to change how you work.',
    costsThem: [
      'Generic software has features you do not need and misses the ones you do.',
      'Workarounds in spreadsheets fill the gaps the software cannot cover.',
      'Your team wastes time adapting to the tool instead of the tool serving the team.',
      'You cannot get a competitive edge from the same software your competitors also use.',
    ],
    whatWeBuild:
      'Custom software development Nairobi businesses use when off-the-shelf fails — customer portals, internal tools, booking systems, dashboards, and web applications designed around your exact workflow with full source code ownership.',
    whatChanges: [
      'Software that matches your process precisely — no workarounds, no forced adaptations.',
      'Your team works faster because the system was built for how they already operate.',
      'Features you actually need, without paying for bloat you will never use.',
      'Full ownership of the codebase — your competitive advantage stays yours.',
    ],
  },
  operations: {
    slug: 'operations-workflow',
    path: '/operations-workflow',
    metaTitle: 'Operations & Workflow System Kenya — Stop Being in Every Decision | Cres Dynamics',
    metaDescription:
      'Every approval, task, and decision still flows through you. Cres Dynamics builds operations and workflow systems for Kenyan businesses with automated approvals, task tracking, and real-time visibility.',
    h1Keyword: 'ERP System Kenya',
    problemHeadline:
      'Every task, approval, and operational decision still flows through you — and that is the bottleneck stopping your business from growing.',
    costsThem: [
      'Projects stall because approvals sit in WhatsApp until someone chases them.',
      'Nobody knows who owns what task or what status it is at without asking you.',
      'Operational mistakes happen because there is no system enforcing the correct process.',
      'You cannot take a day off because the business stops when you are not available.',
    ],
    whatWeBuild:
      'An operations and workflow system Kenya businesses use to run without you in every decision — automated approval chains, task assignment, status tracking, audit trails, and real-time visibility across every team and process.',
    whatChanges: [
      'Approvals move automatically through the right people without manual chasing.',
      'Every team member sees their tasks, deadlines, and priorities without asking.',
      'You get a live view of what is stuck, who owns it, and what needs attention.',
      'The business keeps running when you step away — because the system enforces the process.',
    ],
  },
};
