/** SEO-first hero headlines — same structure on every case study page */

import type { Metadata } from 'next';

export type CaseStudyHeadline = {
  /** Primary H1: deliverable + market (keywords for search) */
  title: string;
  /** Secondary line: client · stack · location */
  subtitle: string;
  /** Page <title> / Open Graph */
  metaTitle: string;
  metaDescription: string;
};

export const CASE_STUDY_H1_CLASS =
  'text-3xl md:text-4xl lg:text-[2.65rem] font-black text-white leading-[1.12] tracking-tight';

export const CASE_STUDY_SUBTITLE_CLASS =
  'mt-3 text-base md:text-lg font-semibold text-[var(--cres-electric-teal)] max-w-3xl';

export const CASE_STUDY_HEADLINES: Record<string, CaseStudyHeadline> = {
  'the-stems-flowers': {
    title: 'Nairobi Florist E-Commerce, M-Pesa Checkout & Product SEO',
    subtitle: 'The Stems Flowers · Next.js · Supabase · Nairobi CBD',
    metaTitle: 'Nairobi Florist E-Commerce & M-Pesa SEO | The Stems Flowers | Cres Dynamics',
    metaDescription:
      'Next.js florist shop with M-Pesa checkout, product catalogue, and Nairobi CBD SEO. Built for The Stems Flowers by Cres Dynamics.',
  },
  'floral-whispers-gifts': {
    title: 'Gift Shop E-Commerce & Nairobi Florist SEO for M-Pesa Orders',
    subtitle: 'Floral Whispers Gifts · Next.js · Supabase · Kenya-wide delivery',
    metaTitle: 'Gift Shop E-Commerce & Florist SEO Nairobi | Floral Whispers | Cres Dynamics',
    metaDescription:
      'E-commerce and on-page SEO for Floral Whispers Gifts — collections, M-Pesa checkout, and local search visibility in Nairobi.',
  },
  'mohaa-finest': {
    title: 'Curtain & Home Décor Website with Eastleigh Local SEO',
    subtitle: 'Mohaa Finest · Business website · Nairobi Eastleigh',
    metaTitle: 'Curtain Retail Website & Local SEO Eastleigh | Mohaa Finest | Cres Dynamics',
    metaDescription:
      'New website and local SEO for Mohaa Finest — Nairobi curtain and home décor retailer reaching customers beyond walk-in traffic.',
  },
  'whitelight-store': {
    title: 'Fitness & Footwear E-Commerce with Nairobi Product SEO',
    subtitle: 'Whitelight Store · Next.js · Running, trail & gym categories',
    metaTitle: 'Fitness E-Commerce & Product SEO Nairobi | Whitelight Store | Cres Dynamics',
    metaDescription:
      'E-commerce store and product SEO for Whitelight Store — running shoes, gym gear, and fitness accessories in Nairobi.',
  },
  'spark-lights-254': {
    title: 'Lighting Retail Website & Google SEO for Chandelier Search Nairobi',
    subtitle: 'Spark Lights 254 · 11,700+ impressions · Nyamakima',
    metaTitle: 'Lighting Website & SEO Nairobi | Spark Lights 254 Case Study | Cres Dynamics',
    metaDescription:
      'Website and SEO for Spark Lights 254 — chandeliers and ceiling lights indexed for Nairobi Google search with measurable impressions and clicks.',
  },
  'florist-growth-system': {
    title: 'Florist Digital Infrastructure for Owner-Independent Customer Acquisition',
    subtitle: 'Florist business · Website · SEO · Nairobi Kenya',
    metaTitle: 'Florist Growth System & Digital Infrastructure Nairobi | Case Study | Cres Dynamics',
    metaDescription:
      'Digital systems for Nairobi florists to acquire customers without owner-dependent sales — e-commerce, SEO, and repeatable demand capture.',
  },
  'sacco-financial-services': {
    title: 'WhatsApp Lead Automation & 24/7 Loan Application Intake for SACCOs',
    subtitle: 'SACCO · Financial services Kenya · Production automation',
    metaTitle: 'SACCO WhatsApp Automation & Lead Intake Kenya | Case Study | Cres Dynamics',
    metaDescription:
      'After-hours WhatsApp automation and application intake for a Kenyan SACCO — 24/7 lead capture without extra staffing.',
  },
  'karen-boutique-retail': {
    title: 'SEO Retail Website & Organic Lead System for Boutique Retail Nairobi',
    subtitle: 'Karen boutique · Local SEO · Conversion-focused site',
    metaTitle: 'Boutique Retail SEO Website Nairobi | Karen Boutique Case Study | Cres Dynamics',
    metaDescription:
      'SEO-optimised retail website and lead system for a Karen boutique — organic discoverability beyond paid ads.',
  },
  'car-rental-growth-system': {
    title: 'Car Rental Booking Website, Inventory SEO & Expansion-Ready Brand System',
    subtitle: 'Car rental Nairobi · Real-time inventory · Local SEO',
    metaTitle: 'Car Rental Website & Local SEO Nairobi | Case Study | Cres Dynamics',
    metaDescription:
      'Booking website, inventory visibility, and local SEO for a Nairobi car rental business preparing multi-location growth.',
  },
  'restaurant-automation-system': {
    title: 'AI Order Management & Multi-Channel Restaurant Operations Automation',
    subtitle: 'Restaurant chain Kenya · Order routing · Customer CRM',
    metaTitle: 'Restaurant Order Automation & AI Systems Kenya | Case Study | Cres Dynamics',
    metaDescription:
      'AI-powered order management and customer systems for restaurant operations — reduced manual processing and faster fulfilment.',
  },
  'consulting-seo-growth': {
    title: 'Consulting Firm Authority Website & Niche SEO Lead System Nairobi',
    subtitle: 'B2B consulting · Authority content · Qualified leads',
    metaTitle: 'Consulting SEO & Authority Website Nairobi | Case Study | Cres Dynamics',
    metaDescription:
      'Authority website and niche SEO for a Nairobi consulting firm — qualified inbound leads without paid advertising dependency.',
  },
  'retail-sales-system': {
    title: 'Retail Sales Funnel, CRM Tracking & In-Store Conversion System Nairobi',
    subtitle: 'Electronics retail · Customer journey · Sales dashboard',
    metaTitle: 'Retail Sales Funnel & CRM System Nairobi | Case Study | Cres Dynamics',
    metaDescription:
      'Sales funnel, customer tracking, and conversion system for high-traffic Nairobi retail — predictable monthly revenue growth.',
  },
  'real-estate-brand-authority': {
    title: 'Luxury Real Estate Brand Authority & Premium Listing SEO Nairobi',
    subtitle: 'Real estate agency · Brand positioning · Content SEO',
    metaTitle: 'Luxury Real Estate SEO & Brand Authority Nairobi | Case Study | Cres Dynamics',
    metaDescription:
      'Brand authority platform and content SEO for a Nairobi luxury real estate agency — premium positioning and trust-led leads.',
  },
  'manufacturing-digital-transformation': {
    title: 'B2B Manufacturing Website, Technical SEO & Digital Sales Enablement Kenya',
    subtitle: 'Industrial manufacturing · B2B leads · Technical authority',
    metaTitle: 'Manufacturing Digital Transformation & B2B SEO Kenya | Case Study | Cres Dynamics',
    metaDescription:
      'B2B manufacturing website, technical SEO, and digital sales tools for Kenyan industrial companies entering new markets online.',
  },
};

export function getCaseStudyHeadline(slug: string): CaseStudyHeadline | undefined {
  return CASE_STUDY_HEADLINES[slug];
}

export function caseStudyMetadata(slug: string): Metadata {
  const h = CASE_STUDY_HEADLINES[slug];
  if (!h) return {};
  const url = `https://cresdynamics.com/case-studies/${slug}/`;
  return {
    title: h.metaTitle,
    description: h.metaDescription,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: h.metaTitle,
      description: h.metaDescription,
      url,
      type: 'article',
    },
  };
}
