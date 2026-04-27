import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getPaymentByReferences, updatePaymentMetadataById, updatePaymentStatus } from '@/lib/db';
import { getPesapalTransactionStatus } from '@/lib/pesapal';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

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
    const alreadySent = Boolean(payment?.metadata?.paymentConfirmationEmailSent);
    const shouldSend =
      !!payment &&
      !alreadySent &&
      !!payment.email &&
      !!payment.eventTitle &&
      !!payment.eventDate &&
      (payment.purpose || '').startsWith('event_ticket_');

    if (shouldSend && resend) {
      const senderEmail = process.env.SENDER_EMAIL || 'onboarding@resend.dev';
      const to = String(payment.email);
      await resend.emails.send({
        from: `CRES Events <${senderEmail}>`,
        to: [to],
        subject: `Booking Confirmed: ${payment.eventTitle}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
            <div style="background: linear-gradient(135deg, #1A2433 0%, #1E7C88 100%); padding: 24px 30px; border-radius: 10px; margin-bottom: 20px;">
              <h1 style="color: #fff; margin: 0; font-size: 22px; text-align: center;">Your Seat Is Confirmed</h1>
            </div>
            <div style="background: #ffffff; padding: 24px 28px; border-radius: 10px; box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
              <p>Hi,</p>
              <p>Your payment was received successfully and your event seat is now confirmed.</p>
              <p><strong>Event:</strong> ${payment.eventTitle}</p>
              <p><strong>Date:</strong> ${payment.eventDate}</p>
              <p><strong>Amount Paid:</strong> ${payment.currency} ${payment.amountKes?.toLocaleString() || '-'}</p>
              <p><strong>Payment Ref:</strong> ${payment.merchantReference || payment.providerTrackingId || '-'}</p>
              <p>We look forward to hosting you. See you at the event.</p>
            </div>
            <p style="text-align:center;color:#666;font-size:11px;margin-top:14px;">CRES Dynamics Events Team</p>
          </div>
        `,
      });
      await updatePaymentMetadataById(payment.id, {
        ...(payment.metadata || {}),
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
