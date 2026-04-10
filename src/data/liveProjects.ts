export type LiveProjectFilter =
  | 'websites'
  | 'ecommerce'
  | 'erp'
  | 'hospitality'
  | 'retail'
  | 'infrastructure';

export type LiveProjectStatus = 'live' | 'confirm-url';

export interface LiveProject {
  id: string;
  industryTag: string;
  deliverableType: string;
  status: LiveProjectStatus;
  clientName: string;
  oneLiner: string;
  problem: string;
  solution: string;
  outcome: string;
  liveUrl: string;
  filters: LiveProjectFilter[];
  expanded: {
    businessContext: string;
    realConstraint: string;
    whatWeBuilt: string;
    outcomeInDetail: string;
    whatMadeItHard: string;
    stack: string[];
  };
}

export const LIVE_PROJECT_FILTERS: { id: LiveProjectFilter | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'websites', label: 'Websites' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'erp', label: 'ERP' },
  { id: 'hospitality', label: 'Hospitality' },
  { id: 'retail', label: 'Retail' },
  { id: 'infrastructure', label: 'Infrastructure' },
];

export const LIVE_PROJECTS: LiveProject[] = [
  {
    id: 'applicare',
    industryTag: 'Recruitment / HR Tech',
    deliverableType: 'Web Platform',
    status: 'live',
    clientName: 'Applicare',
    oneLiner: 'Recruitment / HR tech — employers and job seekers in one digital flow.',
    problem:
      'Applicants and employers had no shared digital space — coordination happened over email and WhatsApp with no tracking.',
    solution:
      'A recruitment platform connecting employers and job seekers, with structured application flows and status tracking.',
    outcome: 'Centralised hiring pipeline replacing fragmented manual coordination.',
    liveUrl: 'https://applicare.co.ke',
    filters: ['websites'],
    expanded: {
      businessContext:
        'Kenyan recruitment market where most SME hiring still runs through social media posts and manual shortlisting.',
      realConstraint:
        'No system of record for applications — every hire started from scratch with no history.',
      whatWeBuilt:
        'Web-based applicant tracking system with employer dashboard, candidate profiles, and application status management.',
      outcomeInDetail:
        'Centralised hiring pipeline replacing fragmented manual coordination.',
      whatMadeItHard:
        'Designing for two distinct user types (employer and applicant) with different needs in a single cohesive interface.',
      stack: ['Web platform', 'Structured application flows', 'Dashboard'],
    },
  },
  {
    id: 'spark-lights-254',
    industryTag: 'Lighting Retail',
    deliverableType: 'Website + SEO',
    status: 'live',
    clientName: 'Spark Lights 254',
    oneLiner: 'Large lighting showroom in Nyamakima; strong stock, no Google visibility for Nairobi buyers.',
    problem:
      'Large lighting showroom in Nyamakima with no Google visibility for Nairobi buyers searching by room or product category.',
    solution:
      'SEO-first website structured around 7 product categories (chandeliers, ceiling lights, pendant lights, dining room lights, wall lights, outdoor lights, bedroom lights) with local search targeting, a lighting guide blog, and WhatsApp ordering flow.',
    outcome:
      'Organic search presence for lighting category terms across Nairobi. Same-day delivery capability now discoverable without advertising.',
    liveUrl: 'https://sparklights.co.ke',
    filters: ['websites', 'retail'],
    expanded: {
      businessContext:
        'Physical showroom at Nyamakima, Duruma Road — strong stock, no digital discoverability. Buyers searching "chandeliers Nairobi" were finding competitors with inferior stock.',
      realConstraint:
        'Zero indexed pages for product-specific searches. The business existed only in physical space and word of mouth.',
      whatWeBuilt:
        'Multi-page SEO architecture with dedicated landing pages per product category, a lighting guide content section, structured WhatsApp CTA flow, and mobile-first layout.',
      outcomeInDetail:
        'Organic search presence for lighting category terms across Nairobi. Same-day delivery capability now discoverable without advertising.',
      whatMadeItHard:
        'Product photography had to be done from existing stock in a showroom environment — no studio conditions.',
      stack: ['HTML/CSS', 'SEO architecture', 'WhatsApp conversion flow', 'Lighting Guide blog section'],
    },
  },
  {
    id: 'trendy-fashion-zone',
    industryTag: 'Footwear Retail',
    deliverableType: 'E-Commerce Website',
    status: 'live',
    clientName: 'Trendy Fashion Zone',
    oneLiner:
      'Branded footwear (Nike, Jordan, Clarks, Vans, Timberland) from Moi Avenue CBD — foot traffic only, no online reach.',
    problem:
      'Quality branded footwear (Nike, Jordan, Clarks, Vans, Timberland) sold from Moi Avenue CBD but no online presence to reach buyers outside foot traffic range.',
    solution:
      'Full e-commerce website with product collections by category (officials, loafers, sandals, casual, sneakers, sports), WhatsApp ordering integration, free Nairobi delivery positioning, and blog section.',
    outcome:
      'Online storefront enabling buyers across Nairobi to browse and purchase without visiting CBD. Collections browsable by category with direct WhatsApp checkout.',
    liveUrl: 'https://trendyfashionzone.co.ke',
    filters: ['ecommerce', 'retail'],
    expanded: {
      businessContext:
        'Physical retail in Nairobi CBD — high footfall but geographically constrained. No ability to serve Westlands, Karen, or Kilimani buyers who wouldn\'t travel to Moi Avenue.',
      realConstraint: 'Inventory was strong but invisible to anyone outside walking distance.',
      whatWeBuilt:
        'Next.js e-commerce site with Supabase image storage, collection pages per shoe category, contact and blog pages, WhatsApp checkout flow, and case studies section.',
      outcomeInDetail:
        'Online storefront enabling buyers across Nairobi to browse and purchase without visiting CBD. Collections browsable by category with direct WhatsApp checkout.',
      whatMadeItHard:
        'Consistent product photography at scale. Each shoe required individual images in multiple angles.',
      stack: ['Next.js', 'Supabase storage', 'WhatsApp integration', 'Collection-based catalogue'],
    },
  },
  {
    id: 'floral-whispers-gifts',
    industryTag: 'Florist / Gift Delivery',
    deliverableType: 'E-Commerce + Delivery System',
    status: 'live',
    clientName: 'Floral Whispers Gifts',
    oneLiner: 'Florist in Nairobi — orders via word of mouth and Instagram DMs; same-day delivery not systematised on the web.',
    problem:
      'Florist operating in Nairobi with no way to capture orders outside word of mouth and Instagram DMs. No system for same-day delivery coordination.',
    solution:
      'E-commerce site with product collections across flowers, teddy bears, gift hampers, cards, and cakes — with same-day delivery positioning across Nairobi and WhatsApp ordering flow.',
    outcome:
      'Buyers across Nairobi CBD, Westlands, Karen, and Lavington can now browse, select, and order without requiring a phone call or DM thread. Delivery coverage communicated clearly on site.',
    liveUrl: 'https://floralwhispersgifts.co.ke',
    filters: ['ecommerce', 'retail'],
    expanded: {
      businessContext:
        'Gift and flower delivery market in Nairobi — highly competitive, heavily dependent on Instagram presence and referrals. Peak demand on Valentine\'s, Mother\'s Day, and anniversaries.',
      realConstraint:
        'Orders came through DMs with no structure — no product photos with prices, no confirmation system, no delivery address capture. Every order required manual back-and-forth.',
      whatWeBuilt:
        'Next.js e-commerce site with product collection pages, image-led browsing, contact page, and WhatsApp-integrated order flow with clear delivery zone communication.',
      outcomeInDetail:
        'Buyers across Nairobi CBD, Westlands, Karen, and Lavington can now browse, select, and order without requiring a phone call or DM thread. Delivery coverage communicated clearly on site.',
      whatMadeItHard:
        'Perishable inventory means pricing and availability change frequently. The system needed to be manageable by the owner without developer support for updates.',
      stack: ['Next.js', 'Product catalogue', 'WhatsApp order flow', 'Delivery zone positioning'],
    },
  },
  {
    id: 'och-waitlist',
    industryTag: 'Internal / Platform',
    deliverableType: 'Waitlist System',
    status: 'live',
    clientName: 'OCH Waitlist',
    oneLiner: 'Pre-launch waitlist — structured sign-up before full public launch.',
    problem: 'New product or service needed a structured way to capture and manage early interest before full launch.',
    solution: 'Dedicated waitlist landing page with sign-up capture, deployed on CRES infrastructure.',
    outcome: 'Pre-launch interest captured in a structured pipeline rather than through informal channels.',
    liveUrl: 'https://och-waitlist.cresdynamics.com',
    filters: ['websites'],
    expanded: {
      businessContext:
        'Pre-launch phase for a new offering requiring controlled access and interest management before public release.',
      realConstraint: 'No system to capture early adopters or manage launch sequencing.',
      whatWeBuilt:
        'Waitlist landing page with sign-up form, hosted on CRES Dynamics subdomain, structured for data capture and pre-launch communication.',
      outcomeInDetail:
        'Pre-launch interest captured in a structured pipeline rather than through informal channels.',
      whatMadeItHard: '',
      stack: ['CRES infrastructure', 'Sign-up capture', 'Waitlist management'],
    },
  },
  {
    id: 'ip-server',
    industryTag: 'Infrastructure',
    deliverableType: 'Server Deployment',
    status: 'live',
    clientName: 'IP Server Project (165.22.128.141)',
    oneLiner: 'Dedicated production server at 165.22.128.141 — outside shared hosting.',
    problem:
      'Client required a dedicated production server environment outside shared hosting — with control over configuration, security, and deployment.',
    solution:
      'Configured and deployed a live production server with direct IP access, managed under CRES infrastructure standards.',
    outcome:
      'Live production environment running at dedicated IP. Client has full control over deployment without shared hosting constraints.',
    liveUrl: 'http://165.22.128.141',
    filters: ['infrastructure'],
    expanded: {
      businessContext:
        'Business that had outgrown shared hosting — performance issues, no control over server configuration, security constraints.',
      realConstraint:
        'Shared hosting limitations blocking custom deployments and causing latency under load.',
      whatWeBuilt:
        'Dedicated server provisioned, configured, and deployed — managed production environment with direct access.',
      outcomeInDetail:
        'Live production environment running at dedicated IP. Client has full control over deployment without shared hosting constraints.',
      whatMadeItHard: 'Migration from existing setup without downtime.',
      stack: ['Linux server', 'CRES infrastructure standards', 'Production deployment'],
    },
  },
  {
    id: 'ksu-shop',
    industryTag: 'E-Commerce / Retail',
    deliverableType: 'Online Store',
    status: 'confirm-url',
    clientName: 'KSU Shop',
    oneLiner: 'Retail business adding an online purchasing channel.',
    problem: 'Retail business with no online purchasing capability — sales limited to physical or WhatsApp-based transactions.',
    solution: 'E-commerce storefront enabling online product browsing and purchasing.',
    outcome: 'Online sales channel operational independent of physical location.',
    liveUrl: 'https://ksushop.co.ke',
    filters: ['ecommerce', 'retail'],
    expanded: {
      businessContext: 'Retail business moving transactions into an online storefront.',
      realConstraint:
        'Retail business with no online purchasing capability — sales limited to physical or WhatsApp-based transactions.',
      whatWeBuilt: 'E-commerce storefront enabling online product browsing and purchasing.',
      outcomeInDetail: 'Online sales channel operational independent of physical location.',
      whatMadeItHard:
        'DNS error at audit — confirm ksushop.co.ke resolves before treating this as production-stable.',
      stack: ['E-commerce storefront'],
    },
  },
  {
    id: 'frank-labels-store',
    industryTag: 'Footwear Retail',
    deliverableType: 'E-Commerce Website + AI Chat',
    status: 'live',
    clientName: 'Frank Labels Store',
    oneLiner:
      'Sneaker and footwear retailer (Air Force 1, Jordans, Air Max, Clarks, Timberland) — sales only in WhatsApp, no catalogue.',
    problem:
      'Sneaker and footwear retailer (Air Force 1, Jordans, Air Max, Clarks, Timberland) with no structured online catalogue — sales driven entirely through WhatsApp conversations.',
    solution:
      'E-commerce site with AI chat assistant ("Dee") for product recommendations, full collection catalogue, category browsing, WhatsApp integration, and nationwide delivery system (free within Nairobi, KES 300 nationwide).',
    outcome:
      'Buyers can browse full catalogue and get product recommendations via AI chat without requiring human availability. Orders route to WhatsApp for confirmation. 3-day return policy communicated clearly.',
    liveUrl: 'https://franklabels.store',
    filters: ['ecommerce', 'retail'],
    expanded: {
      businessContext:
        'Kenyan sneaker retail — high-demand products (Nike, Jordan, Adidas) with a buyer base that researches online before purchasing. Competitor sites exist; this client had none.',
      realConstraint:
        'All selling happened in WhatsApp threads — no product photos with prices, no self-serve browsing, owner spending hours on repetitive product queries.',
      whatWeBuilt:
        'HTML/CSS e-commerce site with product grid, category pages, WhatsApp checkout integration, and an AI chat layer ("Dee") handling product fit and recommendation queries.',
      outcomeInDetail:
        'Buyers can browse full catalogue and get product recommendations via AI chat without requiring human availability. Orders route to WhatsApp for confirmation. 3-day return policy communicated clearly.',
      whatMadeItHard:
        'Training the AI assistant to answer footwear-specific questions (sizing, style matching, availability) accurately without hallucinating stock.',
      stack: ['HTML/CSS', 'WhatsApp integration', 'AI chat assistant', 'Product catalogue', 'Collection page'],
    },
  },
  {
    id: 'tambua-africa',
    industryTag: 'Culture / Media / Community',
    deliverableType: 'Website',
    status: 'confirm-url',
    clientName: 'Tambua Africa',
    oneLiner: 'Culture / media / community organisation — no public site for mission or engagement.',
    problem:
      'Organisation with a cultural or community mandate had no digital home — no way for audiences to find, understand, or engage with their mission online.',
    solution: 'Website establishing digital presence and communicating organisational purpose.',
    outcome: 'Digital identity established. Audience can find and engage with the organisation online.',
    liveUrl: 'https://tambuaafrica.com',
    filters: ['websites'],
    expanded: {
      businessContext:
        'Organisation with a cultural or community mandate requiring a single public reference point online.',
      realConstraint:
        'Organisation with a cultural or community mandate had no digital home — no way for audiences to find, understand, or engage with their mission online.',
      whatWeBuilt: 'Website establishing digital presence and communicating organisational purpose.',
      outcomeInDetail:
        'Digital identity established. Audience can find and engage with the organisation online.',
      whatMadeItHard:
        'Site returned HTTP 415 at audit — confirm CMS or server configuration before treating this as production-stable.',
      stack: ['Website'],
    },
  },
  {
    id: 'tavo-restaurant',
    industryTag: 'Fine Dining / Hospitality',
    deliverableType: 'Website + Reservation System',
    status: 'live',
    clientName: 'TAVO Restaurant',
    oneLiner: 'Fine dining at Rosslyn Square, Nairobi — Bolt Food only, no brand-owned web experience.',
    problem:
      'Fine dining restaurant in Rosslyn Square, Nairobi with no digital presence matching its premium positioning — Bolt Food listing existed but no brand-owned web experience.',
    solution:
      'Full restaurant website with home, about, menu, gallery, events, contact, and table reservation pages. Integrated with Bolt Food for delivery and Google Maps for directions. Premium visual positioning matching the "Savour The Difference" brand.',
    outcome:
      'Restaurant now has a brand-owned digital touchpoint separate from third-party delivery platforms. Table reservations bookable directly. Premium positioning communicated before guests arrive.',
    liveUrl: 'https://tavo-mu.vercel.app',
    filters: ['websites', 'hospitality'],
    expanded: {
      businessContext:
        'Premium dining in Rosslyn Square — a location associated with Nairobi\'s upper-market dining scene. Guests research before booking; the previous digital absence meant first impressions happened on Bolt Food, not on a brand-controlled surface.',
      realConstraint:
        'No brand-owned web presence. Entirely dependent on third-party platforms for discovery.',
      whatWeBuilt:
        'Next.js restaurant site with menu pages, gallery, events calendar, contact, and a reservations flow. Integrated Bolt Food link for delivery orders. Google Maps integration for directions. Premium photography-led visual design.',
      outcomeInDetail:
        'Restaurant now has a brand-owned digital touchpoint separate from third-party delivery platforms. Table reservations bookable directly. Premium positioning communicated before guests arrive.',
      whatMadeItHard:
        'Fine dining photography and copy standards are high — the site had to feel as premium as the in-restaurant experience.',
      stack: ['Next.js', 'Vercel deployment', 'Bolt Food integration', 'Google Maps', 'Reservation flow'],
    },
  },
  {
    id: 'green-cottage-hotel',
    industryTag: 'Hospitality / Accommodation',
    deliverableType: 'Website',
    status: 'live',
    clientName: 'Green Cottage Hotel',
    oneLiner: 'Hotel in Ugenya, Siaya County — local reputation, no digital reach for out-of-county visitors.',
    problem:
      'Hotel in Ugenya, Siaya County — strong local reputation but no digital presence to reach visitors travelling from outside the county.',
    solution:
      'Full hospitality website with home, about, services, menu, accommodation, and contact sections. Positioned as "The Pride of Siaya" to own the local hospitality search space.',
    outcome:
      'Hotel discoverable online for visitors researching accommodation in Siaya County before travelling. Services and accommodation options visible without requiring a phone call.',
    liveUrl: 'https://nelsonfranklinwere.github.io/GreeCottage/',
    filters: ['websites', 'hospitality'],
    expanded: {
      businessContext:
        'County-level hospitality in Ugenya Subcounty, Luhano-Ukwala. Strong word of mouth locally; zero digital footprint for visitors from Nairobi or other counties.',
      realConstraint:
        'Travellers researching accommodation in Siaya had no way to find Green Cottage — the only discovery path was local referral.',
      whatWeBuilt:
        'Static hospitality site with services overview (restaurant, accommodation, drinks), menu section, accommodation page, and contact/booking section.',
      outcomeInDetail:
        'Hotel discoverable online for visitors researching accommodation in Siaya County before travelling. Services and accommodation options visible without requiring a phone call.',
      whatMadeItHard:
        'Photography and content had to convey warmth and quality using available assets — no professional photography budget.',
      stack: ['HTML/CSS', 'GitHub Pages hosting', 'Accommodation and menu sections'],
    },
  },
  {
    id: 'abila-kitengela',
    industryTag: 'Food & Beverage / Cultural Dining',
    deliverableType: 'Website + WhatsApp Ordering',
    status: 'live',
    clientName: 'Abila Kitengela (Lounge)',
    oneLiner:
      'Luo cuisine restaurant and pub in Kitengela — Gwassi fish, Ohangla nights; no web presence outside the neighbourhood.',
    problem:
      'Authentic Luo cuisine restaurant and pub in Kitengela with no web presence — a culturally distinctive offering invisible outside its immediate neighbourhood.',
    solution:
      'Website with video hero, full menu (Luo cuisine + wines + spirits), cultural storytelling section, and WhatsApp + SMS ordering. Positioned around the "Gwassi Fish" signature dish and Ohangla nights as key differentiators.',
    outcome:
      'Cultural dining identity established digitally. Ordering available via WhatsApp and SMS directly from the site. Story of Luo heritage communicated to a wider audience.',
    liveUrl: 'https://nelsonfranklinwere.github.io/Lounge/',
    filters: ['websites', 'hospitality'],
    expanded: {
      businessContext:
        'Kitengela food scene is competitive. Most establishments are generic. Abila\'s differentiation — authentic Luo cuisine, Lake Victoria tilapia, cultural events — was known only to regulars.',
      realConstraint:
        'The cultural story was the product. Without a web presence, that story couldn\'t reach diners outside the immediate area.',
      whatWeBuilt:
        'HTML/CSS site with video hero background, categorised menu (Luo cuisine, wines, spirits), cultural section on Ohangla nights and Luo heritage, WhatsApp ordering integration, SMS ordering option.',
      outcomeInDetail:
        'Cultural dining identity established digitally. Ordering available via WhatsApp and SMS directly from the site. Story of Luo heritage communicated to a wider audience.',
      whatMadeItHard:
        'Video background without degrading mobile performance required careful compression and fallback handling.',
      stack: ['HTML/CSS', 'Video hero', 'WhatsApp + SMS ordering', 'GitHub Pages'],
    },
  },
  {
    id: 'frame-constructors',
    industryTag: 'Construction / Civil Engineering',
    deliverableType: 'Corporate Website',
    status: 'live',
    clientName: 'Frame Constructors (Michael Owino Constructions)',
    oneLiner:
      'Construction / civil engineering — 35+ years, 150+ projects, NCA and ISO; referrals only, no digital acquisition.',
    problem:
      '35-year-old construction company with 150+ completed projects, NCA certification, and ISO certification — but no digital presence to reach developers and homeowners searching for builders online.',
    solution:
      'Corporate website with full services overview, project portfolio, testimonials, certifications showcase (NCA, ISO, KMFB, AAK), insights/blog section, and quote request flow.',
    outcome:
      'Company\'s 35 years of credibility now visible online. Certifications and project history accessible to developers and homeowners researching builders before making contact.',
    liveUrl: 'https://nelsonfranklinwere.github.io/Construction/',
    filters: ['websites'],
    expanded: {
      businessContext:
        'Established construction firm active across Kitengela and Nairobi — residential and commercial. 35+ years, 150+ projects, 98% client satisfaction rate stated. All business through referral; zero digital acquisition.',
      realConstraint:
        'Developers and institutional buyers now Google contractors before calling. With no web presence, this company was invisible in that research phase despite being one of the most experienced in the market.',
      whatWeBuilt:
        'Corporate site with hero slider, services section, project portfolio, testimonials, certifications gallery (NCA, ISO, KMFB, Architects Association of Kenya), blog/insights section, and contact/quote form.',
      outcomeInDetail:
        'Company\'s 35 years of credibility now visible online. Certifications and project history accessible to developers and homeowners researching builders before making contact.',
      whatMadeItHard:
        '35 years of work with minimal digital documentation — no project photos, no case study records. Site had to convey credibility through structure and certification proof rather than project imagery.',
      stack: [
        'HTML/CSS',
        'GitHub Pages',
        'Project portfolio',
        'Certifications showcase',
        'Quote request form',
      ],
    },
  },
];
