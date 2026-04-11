/** Single source of truth for careers — keep hero, listings, and application form in sync. */

export type CareerRoleId = 'full-stack-developer' | 'sales-executive';

export type CareerRole = {
  id: CareerRoleId;
  /** Display title — must match form <option> values */
  title: string;
  department: string;
  location: string;
  commitment: string;
  tags: string[];
  /** One line for sidebar / listings */
  summary: string;
  /** What success looks like in this seat */
  focus: string[];
};

export const CAREER_ROLES: CareerRole[] = [
  {
    id: 'full-stack-developer',
    title: 'Full-Stack Developer',
    department: 'Engineering',
    location: 'Westlands, Nairobi (Hybrid)',
    commitment: 'Full-time · Competitive + performance',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Next.js'],
    summary: 'Ship production systems—CresOS, finance tooling, and client platforms—with ownership from schema to UI.',
    focus: [
      'Comfort owning features end-to-end: APIs, data, and interfaces',
      'Care about reliability, clarity, and code that teammates can extend',
      'Bonus: experience with payments, ERP-style workflows, or automation',
    ],
  },
  {
    id: 'sales-executive',
    title: 'Sales Executive',
    department: 'Sales',
    location: 'Nairobi',
    commitment: 'Full-time · Base + commission',
    tags: ['B2B', 'SME & enterprise', 'Discovery calls'],
    summary: 'Own outbound and inbound conversations: qualify operators, run discovery, and move the right fits to strategy and systems calls.',
    focus: [
      'Clear communication; consistent follow-up without being pushy',
      'Genuine interest in how Kenyan businesses run—not generic pitches',
      'CRM discipline, pipeline thinking, and measurable outcomes',
    ],
  },
];
