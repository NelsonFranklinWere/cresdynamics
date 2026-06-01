import { EVENT_TICKET_AMOUNTS_KES } from '@/lib/event-tickets';
import { getManagementDashboardStatsFromDb, type ManagementDashboardStats } from '@/lib/db';

/** Targets for progress bars on the management overview dashboard. */
export const MANAGEMENT_TARGETS = {
  eventRegistrations: 80,
  eventPaidRegistrations: 60,
  eventRevenueKes: 150_000,
  contactLeads: 40,
  careerApplications: 15,
  speakerApplications: 10,
  sponsorConfirmed: 5,
  blogPublished: 8,
  paymentsPaid: 50,
} as const;

export type { ManagementDashboardStats };

export async function getManagementDashboardStats(): Promise<ManagementDashboardStats | null> {
  return getManagementDashboardStatsFromDb();
}

export function ticketAmountKes(ticketType: string | null | undefined): number {
  if (!ticketType) return 0;
  return EVENT_TICKET_AMOUNTS_KES[ticketType.toLowerCase()] ?? 0;
}

export function progressPercent(current: number, target: number): number {
  if (target <= 0) return 0;
  return Math.min(100, Math.round((current / target) * 100));
}

export function progressTone(percent: number): 'default' | 'teal' | 'gold' {
  if (percent >= 100) return 'gold';
  if (percent >= 60) return 'teal';
  return 'default';
}
