import { NextResponse } from 'next/server';
import { getPaymentByReferences, updatePaymentMetadataById, updatePaymentStatus, updateEventReservationBookingStatus } from '@/lib/db';
import { getPesapalTransactionStatus } from '@/lib/pesapal';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function normalizeStatus(input?: string) {
  const status = (input || '').toLowerCase();
  if (status.includes('complete') || status.includes('paid')) return 'paid';
  if (status.includes('fail') || status.includes('invalid') || status.includes('cancel')) return 'failed';
  return 'pending';
}

async function handleIpn(req: Request) {
  const url = new URL(req.url);
  const body =
    req.method === 'POST'
      ? await req
          .json()
          .catch(() => ({} as Record<string, unknown>))
      : {};
  const payload = body as Record<string, unknown>;

  const orderTrackingId =
    String(url.searchParams.get('OrderTrackingId') || payload.OrderTrackingId || '').trim();
  const merchantReference =
    String(url.searchParams.get('OrderMerchantReference') || payload.OrderMerchantReference || '').trim();

  if (!orderTrackingId && !merchantReference) {
    return NextResponse.json({ ok: false, error: 'Missing OrderTrackingId/OrderMerchantReference' }, { status: 400 });
  }

  let statusPayload: Record<string, unknown> = {};
  let normalized = 'pending';
  if (orderTrackingId) {
    const status = await getPesapalTransactionStatus(orderTrackingId);
    statusPayload = status as Record<string, unknown>;
    normalized = normalizeStatus(
      String(status.payment_status_description || status.status || status.message || '')
    );
  }

  await updatePaymentStatus({
    status: normalized,
    providerTrackingId: orderTrackingId || null,
    merchantReference: merchantReference || null,
    metadata: statusPayload,
  });

  if (normalized === 'paid') {
    const payment = await getPaymentByReferences(orderTrackingId || null, merchantReference || null, null);
    const reservationIdRaw = payment?.metadata?.reservationId;
    const reservationId =
      reservationIdRaw != null && reservationIdRaw !== '' ? Number(reservationIdRaw) : NaN;

    if (payment && Number.isFinite(reservationId) && reservationId > 0) {
      await updateEventReservationBookingStatus(reservationId, 'paid', {
        markedByEmail: 'pesapal',
      });
      await updatePaymentMetadataById(payment.id, {
        ...(payment.metadata || {}),
        reservationId,
        paymentConfirmationEmailSent: true,
        paymentConfirmationEmailSentAt: new Date().toISOString(),
      });
    }
  }

  return NextResponse.json({ ok: true, status: normalized });
}

export async function GET(req: Request) {
  try {
    return await handleIpn(req);
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : 'IPN processing failed' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    return await handleIpn(req);
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : 'IPN processing failed' },
      { status: 500 }
    );
  }
}
