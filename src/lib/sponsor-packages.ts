export type SponsorPackageTier =
  | 'gold'
  | 'silver'
  | 'community'
  | 'community_inkind'
  | 'custom';

export const SPONSOR_PACKAGE_AMOUNTS_KES: Record<SponsorPackageTier, number> = {
  gold: 50_000,
  silver: 25_000,
  community: 10_000,
  community_inkind: 0,
  custom: 0,
};

export type SponsorPackageInfo = {
  tier: SponsorPackageTier;
  label: string;
  priceLabel: string;
  amountKes: number;
  requiresPayment: boolean;
};

export const SPONSOR_PACKAGES: SponsorPackageInfo[] = [
  {
    tier: 'gold',
    label: 'Gold Sponsor',
    priceLabel: 'KES 50,000',
    amountKes: SPONSOR_PACKAGE_AMOUNTS_KES.gold,
    requiresPayment: true,
  },
  {
    tier: 'silver',
    label: 'Silver Sponsor',
    priceLabel: 'KES 25,000',
    amountKes: SPONSOR_PACKAGE_AMOUNTS_KES.silver,
    requiresPayment: true,
  },
  {
    tier: 'community',
    label: 'Community Partner',
    priceLabel: 'KES 10,000',
    amountKes: SPONSOR_PACKAGE_AMOUNTS_KES.community,
    requiresPayment: true,
  },
  {
    tier: 'community_inkind',
    label: 'Community Partner (In-Kind)',
    priceLabel: 'In-Kind — no online fee',
    amountKes: 0,
    requiresPayment: false,
  },
  {
    tier: 'custom',
    label: 'Custom Package',
    priceLabel: 'Custom — we will quote you',
    amountKes: 0,
    requiresPayment: false,
  },
];

export function getSponsorPackage(tier: SponsorPackageTier): SponsorPackageInfo {
  return SPONSOR_PACKAGES.find((p) => p.tier === tier) ?? SPONSOR_PACKAGES[1];
}
