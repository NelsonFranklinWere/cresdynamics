/** The Future of AI in Business — shared routes, copy, and programme data */

export const FUTURE_AI_EVENT_SLUG = 'the-future-of-ai-in-business';

export const FUTURE_AI_EVENT = {
  title: 'The Future of AI in Business',
  slug: FUTURE_AI_EVENT_SLUG,
  dateLabel: 'Saturday 25th July 2026',
  dateCheckout: 'Saturday, 25th July 2026',
  dateShort: '25 July 2026',
  dateIso: '2026-07-25T14:00:00+03:00',
  endIso: '2026-07-25T19:00:00+03:00',
  doorsOpen: '1:30 PM',
  timeRange: '2:00 PM — 7:00 PM',
  venue: 'Sarit Expo Centre, Westlands, Nairobi',
  venueShort: 'Sarit Expo Centre',
  status: 'confirmed' as const,
  note: '',
  confirmationDateLine:
    'The Future of AI in Business — Saturday 25th July 2026 at Sarit Expo Centre, Westlands, Nairobi.',
  organiser: 'Cres Dynamics Ltd',
  contactEmail: 'info@cresdynamics.com',
  contactPhone: '+254 0708 805 496',
  registrationUrl: 'https://cresdynamics.com/events',
  theme:
    'AI is not coming. It is already here. This afternoon is about what you do with it starting Monday.',
  tagline: 'Structured Growth Through Technology',
} as const;

export const FUTURE_AI_PATHS = {
  hub: '/events/',
  event: `/events/${FUTURE_AI_EVENT_SLUG}/`,
  programme: `/events/${FUTURE_AI_EVENT_SLUG}/programme/`,
  speak: '/events/speak/',
} as const;

export type ProgrammeSession = {
  time: string;
  title: string;
  body: string[];
  audience?: string;
  location?: string;
  sessionTitle?: string;
  format?: string;
  duration?: string;
  host?: string;
  speaker?: string;
  moderator?: string;
  panellists?: string;
  facilitator?: string;
  guest?: string;
  parallel?: boolean;
  maxAttendees?: string;
};

export const FUTURE_AI_LANYARDS = [
  { id: 'business_owner', label: 'Business Owner', color: '#3B82F6', colorName: 'Blue', role: 'Business Owners and Founders' },
  { id: 'developer', label: 'Developer', color: '#EAB308', colorName: 'Yellow', role: 'Developers and Engineers' },
  { id: 'investor', label: 'Investor', color: '#F97316', colorName: 'Orange', role: 'Investors' },
  { id: 'hiring', label: 'Hiring', color: '#EF4444', colorName: 'Red', role: 'Actively Hiring' },
  { id: 'job_seeker', label: 'Job Seeker', color: '#22C55E', colorName: 'Green', role: 'Job Seekers' },
  { id: 'student', label: 'Student', color: '#E2E8F0', colorName: 'White', role: 'Students' },
  { id: 'vip_speaker', label: 'VIP / Speaker', color: '#A855F7', colorName: 'Purple', role: 'VIP and Speakers' },
] as const;

export const FUTURE_AI_TICKETS = [
  {
    key: 'standard' as const,
    name: 'Standard',
    price: '2,500',
    includes: [
      'Full afternoon programme access',
      'Priority seating in the main hall',
      'Access to both breakout tracks — Business and Developer',
      'Lanyard networking system',
      'Post-event resources and session summaries sent to your email',
      'Certificate of attendance',
    ],
  },
  {
    key: 'vip' as const,
    name: 'VIP',
    price: '4,000',
    includes: [
      'Everything in Standard plus front row seating',
      'Exclusive VIP Roundtable session with Nelson and senior business leaders',
      'Post-event AI Systems Audit — a private 30 minute session where Cres Dynamics maps specifically where AI can remove friction in your business',
      'Direct speaker access during the closing networking hour',
      'VIP-only refreshments area',
    ],
  },
];

export const FUTURE_AI_SPONSORS = [
  { tier: 'Gold Sponsor', amount: 'KES 50,000' },
  { tier: 'Silver Sponsor', amount: 'KES 25,000' },
  { tier: 'Community Partner', amount: 'KES 10,000' },
];

export const FUTURE_AI_PROGRAMME: ProgrammeSession[] = [
  {
    time: '1:30 PM',
    title: 'Doors Open and Registration',
    body: [
      'Guests arrive and check in at the registration desk. Lanyards issued based on attendee category. Welcome refreshments served. Networking begins immediately. Attendees explore the exhibition space where selected companies and tools are showcased.',
      'This 30 minutes is intentional. The lanyard system means networking starts the moment someone walks through the door. No awkward standing around. People know who is in the room immediately.',
    ],
  },
  {
    time: '2:00 PM',
    title: 'Official Opening and Welcome',
    host: 'Nelson Were — Director, Cres Dynamics Ltd',
    duration: '15 minutes',
    body: [
      'Nelson opens the event. Sets the tone for the afternoon. Addresses why this event exists, what the room is here to do, and what every person should leave with. Introduces the lanyard networking system and how to use it. Sets the ground rules — this is a conversation not a lecture. Every voice in this room matters.',
    ],
  },
  {
    time: '2:15 PM',
    title: 'Keynote 1: The State of AI in Kenyan Business',
    speaker: 'TBC — Senior business or technology leader',
    duration: '25 minutes',
    format: 'Keynote address followed by 5 minutes of direct questions from the audience',
    body: [
      'The opening keynote sets the context. Where is AI adoption in Kenya right now. What are the industries moving fastest. What is the gap between what Kenyan businesses know about AI and what they are actually doing with it. What does the next three years look like for business owners and developers who get this right versus those who do not.',
      'This keynote is the foundation everything else builds on. Real data. Real Kenyan context. No imported Silicon Valley framing.',
    ],
  },
  {
    time: '2:45 PM',
    title: 'Panel Discussion: Business Owners Who Are Using AI Right Now',
    moderator: 'Nelson Were',
    panellists: '3 Nairobi business owners currently using AI in their operations',
    duration: '30 minutes',
    format: 'Moderated panel with audience questions in the final 10 minutes',
    body: [
      'Three business owners sit on stage and have an honest conversation about what AI is actually doing for their businesses. Not what it could do. What it is doing right now. What they implemented first. What worked. What did not. What it cost. What changed in their operations the week after they deployed it.',
      'This panel is designed to answer the question every business owner in the audience is privately asking — is this actually working for businesses like mine or is it just for big companies.',
    ],
  },
  {
    time: '3:15 PM',
    title: 'Session 1A — Business Track',
    audience: 'For Blue Lanyards — Business Owners and Founders',
    location: 'Breakout Room or Designated Section',
    sessionTitle: 'The Five AI Tools Every Kenyan Business Should Be Using This Week',
    speaker: 'TBC — Digital operations practitioner',
    duration: '30 minutes',
    parallel: true,
    body: [
      'A practical, no-jargon session walking business owners through five specific AI tools that can be implemented immediately. Customer communication automation. Lead follow-up systems. Invoice and payment tracking. Social media content generation. Operations dashboards. For each tool — what it is, what it costs, how to set it up, and what changes in the business the following week.',
      'No theory. Every tool demonstrated live.',
    ],
  },
  {
    time: '3:15 PM',
    title: 'Session 1B — Developer Track',
    audience: 'For Yellow Lanyards — Developers and Engineers',
    location: 'Separate Section or Breakout Room',
    sessionTitle: 'Building AI Into Systems — How Enterprise Developers Are Staying Irreplaceable',
    speaker: 'Nelson Were — Director, Cres Dynamics Ltd',
    duration: '30 minutes',
    parallel: true,
    body: [
      'A technical session specifically for developers and engineers. How to architect AI automation into production systems. How to position your skill set for enterprise contracts. The difference between a developer who writes features and a developer who builds infrastructure businesses cannot operate without. Live demonstration of AI-assisted development workflows.',
    ],
  },
  {
    time: '3:45 PM',
    title: 'Networking Break',
    duration: '30 minutes',
    body: [
      '30 minutes of structured networking. The lanyard system is at full power here. Attendees are encouraged to connect with three specific people they identified during the opening sessions. Light refreshments served. Music playing. Energy kept high.',
      'This is not a passive break. It is an active part of the programme. Attendees know who to talk to because of the lanyards. The room facilitates itself.',
    ],
  },
  {
    time: '4:15 PM',
    title: 'Keynote 2: The Future of Work in Africa — AI, Talent, and the Next Generation',
    speaker: 'TBC — HR leader, talent expert, or academic',
    duration: '25 minutes',
    format: 'Keynote address followed by 5 minutes of direct questions',
    body: [
      'The second keynote addresses the workforce dimension of AI. How AI is changing what companies need from their teams. What skills will be irreplaceable in five years and what skills are already being automated. How graduates and young professionals should be positioning themselves. What companies need to do now to build teams that can operate in an AI-enabled environment.',
      'This keynote speaks directly to the job seekers, the students, and the developers in the room — and to the business owners who need to understand what talent looks like in 2026 and beyond.',
    ],
  },
  {
    time: '4:40 PM',
    title: 'Fireside Chat: Building Systems That Scale — Lessons from the Field',
    host: 'Nelson Were',
    guest: 'Morara Kebaso',
    duration: '20 minutes',
    body: [
      'An informal conversation on stage. Two chairs. Honest dialogue. The guest shares their experience building operational infrastructure for a growing African business. What they got wrong. What they would do differently. What the systems that changed their business actually looked like before they were built and after.',
      'The fireside format is intentional. No slides. No presentations. Just a real conversation that the audience gets to listen in on.',
    ],
  },
  {
    time: '5:00 PM',
    title: 'VIP Roundtable — Parallel Session',
    audience: 'For Purple Lanyards — VIP Ticket Holders Only',
    location: 'Dedicated VIP Space',
    sessionTitle: 'The CEO Conversation — AI Strategy for Business Leaders',
    duration: '45 minutes',
    maxAttendees: 'Maximum attendees: 30 VIP ticket holders',
    parallel: true,
    body: [
      'While the main hall continues with audience challenge activities, VIP ticket holders move to a dedicated roundtable space. Nelson facilitates a closed-door conversation with business owners, founders, and investors. Every person at the table shares one specific operational challenge they are facing. The group discusses AI-based approaches to each challenge. No pitching. No presentations. Pure peer-level strategic conversation.',
      'This is the room inside the room.',
    ],
  },
  {
    time: '5:00 PM',
    title: 'Audience Challenge — Main Hall',
    audience: 'For All Non-VIP Attendees',
    sessionTitle: 'Build It in 20 Minutes — Live AI Challenge',
    facilitator: 'TBC from Cres Dynamics team',
    duration: '45 minutes',
    parallel: true,
    body: [
      'Teams of four are formed on the spot using the lanyard system — each team must have at least one blue lanyard and one yellow lanyard. The challenge: use AI tools provided on screen to solve a real business problem in 20 minutes. Teams present their solution in 60 seconds. The audience votes. Winners announced.',
      'This is the most energetic segment of the afternoon. It forces business owners and developers to work together in real time and demonstrates practically what AI can do when applied by people who understand the problem.',
    ],
  },
  {
    time: '5:45 PM',
    title: 'Panel Discussion: Developers, Employers, and the Skills Gap',
    moderator: 'TBC',
    panellists: '2 developers, 1 HR professional, 1 business owner',
    duration: '25 minutes',
    format: 'Moderated panel with audience questions in the final 10 minutes',
    body: [
      'A direct conversation about the gap between what employers need and what the current talent market is producing. What skills are actually in demand. What developers should be building in their spare time to become more employable. What business owners should look for when hiring technical talent. How AI is changing the answer to all of these questions.',
      'This panel connects the job seeker and student audience directly to the employer and developer audience in one conversation.',
    ],
  },
  {
    time: '6:10 PM',
    title: 'Closing Keynote: The Monday Morning Action Plan',
    speaker: 'Nelson Were — Director, Cres Dynamics Ltd',
    duration: '20 minutes',
    body: [
      'The closing keynote is the most important session of the afternoon. Nelson brings everything together. Every session, every panel, every conversation that happened in that room distilled into one clear message.',
      'You came here with questions about AI and your business or your career. You are leaving with answers. Here is specifically what you do on Monday morning. Here is the first tool you install. Here is the first workflow you automate. Here is the first conversation you have with your team.',
      'No vague inspiration. A specific action plan tied to what was discussed throughout the afternoon.',
      'This keynote closes the intellectual loop of the event and sends every person in the room back into the world with something concrete to do.',
    ],
  },
  {
    time: '6:30 PM',
    title: 'The Open Table',
    host: 'Nelson Were — Director, Cres Dynamics Ltd',
    duration: '30 minutes',
    body: [
      'The final segment of the afternoon is not a ceremony. It is a conversation.',
      'Every attendee, every speaker, every panellist, and every investor in the room comes to the table as an equal. No stage. No microphone. Just people who spent the afternoon thinking about the same problems sitting together and talking honestly about what comes next.',
      'Nelson opens the table with one question directed at the room: "You have been in this room for four hours. What is the one thing you are doing differently starting Monday?"',
      'Every person who wants to answer does. Business owners. Developers. Students. Investors. Job seekers. The lanyard colours do not matter at this table. What matters is what was learned and what happens because of it.',
      'This is the moment the afternoon becomes a movement. Not an event people attended. A conversation people were part of.',
    ],
  },
  {
    time: '7:00 PM',
    title: 'Official Close',
    speaker: 'Nelson Were — Director, Cres Dynamics Ltd',
    body: [
      'Nelson closes the event. Thanks every person in the room for showing up. Reminds them that the value of the afternoon is in what they do with it. Announces the next event or follow-up touchpoint. Official end.',
    ],
  },
];

export const FUTURE_AI_AGENDA_PREVIEW = FUTURE_AI_PROGRAMME.slice(0, 5);
