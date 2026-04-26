import { randomUUID } from 'crypto';
import { NextResponse } from 'next/server';
import { createPayment } from '@/lib/db';
import { submitPesapalOrder } from '@/lib/pesapal';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Body = {
  fullName?: string;
  email?: string;
  phone?: string;
  amountKes?: number;
  purpose?: string;
  description?: string;
  eventTitle?: string;
  eventDate?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;
    const fullName = (body.fullName || '').trim();
    const email = (body.email || '').trim();
    const phone = (body.phone || '').trim();
    const purpose = (body.purpose || 'general_payment').trim();
    const description = (body.description || `Payment for ${purpose}`).trim();
    const amountKes = Number(body.amountKes);

    if (!fullName || !email || !phone || !Number.isFinite(amountKes) || amountKes <= 0) {
      return NextResponse.json(
        { ok: false, error: 'fullName, email, phone, and amountKes (>0) are required.' },
        { status: 400 }
      );
    }

    const [firstName, ...rest] = fullName.split(/\s+/);
    const lastName = rest.join(' ');
    const merchantReference = `cres-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    const notificationId = process.env.PESAPAL_IPN_ID;

    if (!notificationId) {
      return NextResponse.json(
        {
          ok: false,
          error: 'PESAPAL_IPN_ID is missing. Register IPN first via /api/payments/pesapal/register-ipn.',
        },
        { status: 500 }
      );
    }

    const submit = await submitPesapalOrder({
      amountKes,
      description,
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

    await createPayment({
      source: 'pesapal',
      reference: randomUUID(),
      providerTrackingId: orderTrackingId || null,
      merchantReference,
      email,
      phone,
      amountKes: Math.round(amountKes),
      currency: 'KES',
      status: 'pending',
      purpose,
      eventTitle: body.eventTitle ?? null,
      eventDate: body.eventDate ?? null,
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
      {
        ok: false,
        error: error instanceof Error ? error.message : 'Failed to initialize Pesapal payment',
      },
      { status: 500 }
    );
  }
}
