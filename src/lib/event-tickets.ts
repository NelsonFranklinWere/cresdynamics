/** Client-safe ticket pricing — no server/db imports */
export const EVENT_TICKET_AMOUNTS_KES: Record<string, number> = {
  economy: 1500,
  standard: 2500,
  vip: 3500,
  virtual: 0,
};
