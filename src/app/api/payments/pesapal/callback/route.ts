import { NextResponse } from 'next/server';
import { getPaymentByReferences, updatePaymentStatus } from '@/lib/db';
import { getPesapalTransactionStatus } from '@/lib/pesapal';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function normalizeStatus(input?: string) {
  const status = (input || '').toLowerCase();
  if (status.includes('complete') || status.includes('paid')) return 'paid';
  if (status.includes('fail') || status.includes('invalid') || status.includes('cancel')) return 'failed';
  return 'pending';
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const orderTrackingId = String(url.searchParams.get('OrderTrackingId') || '').trim();
    const merchantReference = String(url.searchParams.get('OrderMerchantReference') || '').trim();

    let normalized = 'pending';
    if (orderTrackingId) {
      const status = await getPesapalTransactionStatus(orderTrackingId);
      normalized = normalizeStatus(
        String(status.payment_status_description || status.status || status.message || '')
      );
      await updatePaymentStatus({
        status: normalized,
        providerTrackingId: orderTrackingId,
        merchantReference: merchantReference || null,
        metadata: status as Record<string, unknown>,
      });
    }

    const payment = await getPaymentByReferences(orderTrackingId || null, merchantReference || null, null);
    const isEventTicket = Boolean(payment?.purpose?.startsWith('event_ticket_'));
    const redirectTo = isEventTicket
      ? new URL('/events/', url.origin)
      : new URL('/management/payments', url.origin);
    if (isEventTicket) {
      redirectTo.searchParams.set('payment', normalized === 'paid' ? 'success' : 'pending');
    } else {
      if (merchantReference) redirectTo.searchParams.set('ref', merchantReference);
      if (orderTrackingId) redirectTo.searchParams.set('trackingId', orderTrackingId);
    }
    return NextResponse.redirect(redirectTo, { status: 302 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : 'Callback processing failed' },
      { status: 500 }
    );
  }
}
