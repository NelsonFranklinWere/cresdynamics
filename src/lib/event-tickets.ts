/** Client-safe ticket pricing — no server/db imports */
export const EVENT_TICKET_AMOUNTS_KES: Record<string, number> = {
  /** Legacy tier — kept for existing bookings only */
  economy: 1500,
  standard: 2500,
  vip: 4000,
  virtual: 0,
};

/** Ticket types available for new registrations */
export const ACTIVE_EVENT_TICKET_TYPES = ['standard', 'vip'] as const;
export type ActiveEventTicketType = (typeof ACTIVE_EVENT_TICKET_TYPES)[number];

export function isActiveEventTicketType(value: string): value is ActiveEventTicketType {
  return (ACTIVE_EVENT_TICKET_TYPES as readonly string[]).includes(value.toLowerCase());
}
