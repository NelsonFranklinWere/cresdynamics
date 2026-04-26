import { NextResponse } from 'next/server';
import { attachPaymentCheckoutDetails, getPaymentByLinkToken } from '@/lib/db';
import { submitPesapalOrder } from '@/lib/pesapal';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Body = {
  token?: string;
  fullName?: string;
  email?: string;
  phone?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;
    const token = (body.token || '').trim();
    const fullName = (body.fullName || '').trim();
    const email = (body.email || '').trim();
    const phone = (body.phone || '').trim();

    if (!token || !fullName || !email || !phone) {
      return NextResponse.json(
        { ok: false, error: 'token, fullName, email and phone are required.' },
        { status: 400 }
      );
    }

    const payment = await getPaymentByLinkToken(token);
    if (!payment || !payment.paymentLinkActive) {
      return NextResponse.json({ ok: false, error: 'Payment link is invalid or inactive.' }, { status: 404 });
    }
    if (!payment.amountKes || payment.amountKes <= 0) {
      return NextResponse.json({ ok: false, error: 'Payment amount is not configured.' }, { status: 400 });
    }
    if (payment.status === 'paid') {
      return NextResponse.json({ ok: false, error: 'This payment has already been cleared.' }, { status: 409 });
    }

    const [firstName, ...rest] = fullName.split(/\s+/);
    const lastName = rest.join(' ');
    const merchantReference = `cres-link-${payment.id}-${Date.now()}`;
    const notificationId = process.env.PESAPAL_IPN_ID;
    if (!notificationId) {
      return NextResponse.json({ ok: false, error: 'PESAPAL_IPN_ID is missing on server.' }, { status: 500 });
    }

    const submit = await submitPesapalOrder({
      amountKes: payment.amountKes,
      description: payment.purpose || 'Payment request',
      userFirstName: firstName || 'Customer',
      userLastName: lastName || '-',
      email,
      phoneNumber: phone,
      merchantReference,
      notificationId,
    });

    const redirectUrl = String(
      submit.redirect_url || submit.redirectUrl || submit.payment_url || submit.paymentUrl || ''
    );
    const orderTrackingId = String(
      submit.order_tracking_id || submit.orderTrackingId || submit.tracking_id || ''
    );
    if (!redirectUrl) {
      return NextResponse.json(
        { ok: false, error: 'Pesapal did not return redirect URL.', pesapal: submit },
        { status: 502 }
      );
    }

    await attachPaymentCheckoutDetails({
      paymentId: payment.id,
      email,
      phone,
      merchantReference,
      providerTrackingId: orderTrackingId || null,
      metadata: submit as Record<string, unknown>,
    });

    return NextResponse.json({
      ok: true,
      redirectUrl,
      orderTrackingId: orderTrackingId || null,
      merchantReference,
    });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : 'Failed to initialize payment link' },
      { status: 500 }
    );
  }
}
