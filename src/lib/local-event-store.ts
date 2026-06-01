import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

type EventReservationInput = {
  eventTitle: string;
  eventDate: string;
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  company?: string;
  ticketType?: string;
  attendanceType?: string;
  lanyardCategory?: string;
  bookingStatus?: string;
};

type CreatePaymentInput = {
  source: string;
  reference?: string | null;
  providerTrackingId?: string | null;
  merchantReference?: string | null;
  paymentLinkToken?: string | null;
  paymentLinkActive?: boolean;
  email?: string | null;
  phone?: string | null;
  amountKes?: number | null;
  currency?: string;
  status?: string;
  purpose?: string | null;
  eventTitle?: string | null;
  eventDate?: string | null;
  metadata?: Record<string, unknown> | null;
};

const DATA_DIR = join(process.cwd(), '.data');
const RESERVATIONS_FILE = join(DATA_DIR, 'event_reservations.json');
const PAYMENTS_FILE = join(DATA_DIR, 'payments.json');

type StoreFile<T> = { nextId: number; items: T[] };

type LocalReservation = EventReservationInput & { id: number; createdAt: string };
type LocalPayment = CreatePaymentInput & {
  id: number;
  merchantReference?: string | null;
  providerTrackingId?: string | null;
  metadata?: Record<string, unknown> | null;
  createdAt: string;
};

async function readStore<T>(path: string): Promise<StoreFile<T>> {
  try {
    const raw = await readFile(path, 'utf8');
    return JSON.parse(raw) as StoreFile<T>;
  } catch {
    return { nextId: 1, items: [] };
  }
}

async function writeStore<T>(path: string, data: StoreFile<T>): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(path, JSON.stringify(data, null, 2), 'utf8');
}

export function isLocalEventStoreEnabled(): boolean {
  if (process.env.DISABLE_LOCAL_EVENT_STORE === 'true') return false;
  return process.env.USE_LOCAL_EVENT_STORE === 'true' || process.env.NODE_ENV !== 'production';
}

export async function insertEventReservationLocal(input: EventReservationInput): Promise<number> {
  const store = await readStore<LocalReservation>(RESERVATIONS_FILE);
  const existing = store.items.find(
    (r) => r.eventTitle === input.eventTitle && r.eventDate === input.eventDate && r.email === input.email
  );
  if (existing) {
    Object.assign(existing, input);
    await writeStore(RESERVATIONS_FILE, store);
    return existing.id;
  }
  const id = store.nextId++;
  store.items.push({ ...input, id, createdAt: new Date().toISOString() });
  await writeStore(RESERVATIONS_FILE, store);
  return id;
}

export type UpdateReservationResult = {
  ok: boolean;
  bookingStatus?: string;
  paidAt?: string | null;
  paidBy?: string | null;
};

export async function updateEventReservationBookingStatusLocal(
  id: number,
  bookingStatus: 'pending' | 'paid' | 'cancelled',
  markedBy: string | null
): Promise<UpdateReservationResult> {
  const store = await readStore<
    LocalReservation & { bookingStatus?: string; paidAt?: string; paidBy?: string; paidSource?: string }
  >(RESERVATIONS_FILE);
  const item = store.items.find((r) => r.id === id);
  if (!item) return { ok: false };

  item.bookingStatus = bookingStatus.toLowerCase();
  if (bookingStatus === 'paid') {
    item.paidAt = new Date().toISOString();
    item.paidBy = markedBy ?? undefined;
    item.paidSource = 'manual';
  } else {
    item.paidAt = undefined;
    item.paidBy = undefined;
    item.paidSource = undefined;
  }

  await writeStore(RESERVATIONS_FILE, store);

  const payStore = await readStore<LocalPayment>(PAYMENTS_FILE);
  const linked = payStore.items.filter(
    (p) => p.metadata && Number((p.metadata as { reservationId?: number }).reservationId) === id
  );
  if (bookingStatus === 'paid') {
    if (linked.length === 0 && item.email) {
      const payId = payStore.nextId++;
      payStore.items.push({
        source: 'manual',
        status: 'paid',
        email: item.email,
        phone: item.phone ?? null,
        amountKes: null,
        purpose: 'event_ticket',
        eventTitle: item.eventTitle,
        eventDate: item.eventDate,
        metadata: { reservationId: id, markedBy, manualAdminMark: true },
        id: payId,
        createdAt: new Date().toISOString(),
      });
      await writeStore(PAYMENTS_FILE, payStore);
    } else {
      for (const p of linked) {
        p.status = 'paid';
      }
      await writeStore(PAYMENTS_FILE, payStore);
    }
  }

  return {
    ok: true,
    bookingStatus,
    paidAt: item.paidAt ?? null,
    paidBy: item.paidBy ?? null,
  };
}

export async function createPaymentLocal(input: CreatePaymentInput): Promise<number> {
  const store = await readStore<LocalPayment>(PAYMENTS_FILE);
  const id = store.nextId++;
  store.items.push({
    ...input,
    id,
    createdAt: new Date().toISOString(),
  });
  await writeStore(PAYMENTS_FILE, store);
  return id;
}

export async function attachPaymentCheckoutDetailsLocal(input: {
  paymentId: number;
  email: string;
  phone: string;
  merchantReference: string;
  providerTrackingId?: string | null;
  metadata?: Record<string, unknown> | null;
}): Promise<void> {
  const store = await readStore<LocalPayment>(PAYMENTS_FILE);
  const row = store.items.find((p) => p.id === input.paymentId);
  if (!row) return;
  row.email = input.email;
  row.phone = input.phone;
  row.merchantReference = input.merchantReference;
  row.providerTrackingId = input.providerTrackingId ?? null;
  row.metadata = input.metadata ?? row.metadata ?? null;
  await writeStore(PAYMENTS_FILE, store);
}
