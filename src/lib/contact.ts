/**
 * CRES Dynamics contact links: WhatsApp (with pre-filled context) and direct call.
 * 90% of CTAs use these; ~10% remain /contact for general inquiries.
 */

const WHATSAPP_NUMBER = '254708805496';
const TEL_NUMBER = '+254708805496';

export const TEL_LINK = `tel:${TEL_NUMBER}` as const;

export function whatsappUrl(prefillMessage: string): string {
  const encoded = encodeURIComponent(prefillMessage.trim());
  return `https://wa.me/${WHATSAPP_NUMBER}${encoded ? `?text=${encoded}` : ''}`;
}

/** Pre-filled messages by context (what the client is reaching out for) */
export const WHATSAPP_PREFILL = {
  strategySession: 'Hi, I\'d like to book a strategy session with CRES Dynamics.',
  websiteDiscovery: 'Hi, I\'d like to book a website discovery call.',
  financeDiscovery: 'Hi, I\'d like to book a finance discovery session.',
  operationsDiscovery: 'Hi, I\'d like to book an operations discovery session.',
  automationDiscovery: 'Hi, I\'d like to book an automation discovery session.',
  ecommerceDiscovery: 'Hi, I\'d like to discuss an e-commerce system for my business.',
  systemsDiscovery: 'Hi, I\'d like to book a systems discovery session.',
  cresosDiscovery: 'Hi, I\'d like to learn more about CresOS and book a discovery session.',
  marketingDiscovery: 'Hi, I\'d like to discuss marketing and ads with CRES.',
  emailPackage: (name: string) => `Hi, I'm interested in the ${name} email package.`,
  marketingPackage: (name: string) => `Hi, I'm interested in the ${name} marketing package.`,
  pricingPackage: (name: string) => `Hi, I'm interested in the ${name} package.`,
  caseStudy: (title: string) => `Hi, I read the ${title} case study and would like to discuss how CRES could help my business.`,
  eventsNotify: 'Hi, I\'d like to be notified about CRES Dynamics events and workshops.',
  generalInquiry: 'Hi, I have a general inquiry for CRES Dynamics.',
} as const;
