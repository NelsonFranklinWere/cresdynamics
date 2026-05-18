import { attachPaymentCheckoutDetails, createPayment } from '@/lib/db';
import { resolvePesapalNotificationId, submitPesapalOrder } from '@/lib/pesapal';

export type InitiatePesapalInput = {
  amountKes: number;
  description: string;
  email: string;
  phone: string;
  firstName: string;
  lastName?: string;
  source: string;
  purpose: string;
  eventTitle?: string;
  eventDate?: string;
  metadata?: Record<string, unknown>;
};

export type InitiatePesapalResult = {
  paymentId: number | null;
  redirectUrl: string;
  orderTrackingId: string | null;
};

export async function initiatePesapalCheckout(
  input: InitiatePesapalInput
): Promise<InitiatePesapalResult> {
  const notificationId = await resolvePesapalNotificationId();

  const paymentId = await createPayment({
    source: input.source,
    status: 'pending',
    amountKes: input.amountKes,
    currency: 'KES',
    email: input.email,
    phone: input.phone,
    purpose: input.purpose,
    eventTitle: input.eventTitle ?? null,
    eventDate: input.eventDate ?? null,
    metadata: input.metadata ?? null,
  });

  if (!paymentId) {
    throw new Error('Could not create payment record. Please try again.');
  }

  const merchantReference = `${input.source}-${paymentId}-${Date.now()}`;
  const submit = await submitPesapalOrder({
    amountKes: input.amountKes,
    description: input.description,
    userFirstName: input.firstName,
    userLastName: input.lastName || '-',
    email: input.email,
    phoneNumber: input.phone,
    merchantReference,
    notificationId,
  });

  const redirectUrl = String(
    submit.redirect_url ||
      submit.redirectUrl ||
      submit.payment_url ||
      submit.paymentUrl ||
      (submit as { data?: { redirect_url?: string } }).data?.redirect_url ||
      ''
  );
  const orderTrackingId = String(
    submit.order_tracking_id || submit.orderTrackingId || submit.tracking_id || ''
  );

  if (!redirectUrl) {
    throw new Error('Payment gateway did not return a checkout URL. Please try again.');
  }

  await attachPaymentCheckoutDetails({
    paymentId,
    email: input.email,
    phone: input.phone,
    merchantReference,
    providerTrackingId: orderTrackingId || null,
    metadata: submit as Record<string, unknown>,
  });

  return { paymentId, redirectUrl, orderTrackingId: orderTrackingId || null };
}

export const EVENT_TICKET_AMOUNTS_KES: Record<string, number> = {
  economy: 1500,
  standard: 2500,
  vip: 3500,
  virtual: 0,
};
