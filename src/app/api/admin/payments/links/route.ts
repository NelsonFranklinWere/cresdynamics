import crypto from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';
import { getAdminSessionFromRequest } from '@/lib/adminAuth';
import { createPayment } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Body = {
  amountKes?: number;
  purpose?: string;
};

export async function POST(req: NextRequest) {
  const session = getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = (await req.json()) as Body;
    const amountKes = Number(body.amountKes);
    const purpose = (body.purpose || '').trim();
    if (!Number.isFinite(amountKes) || amountKes <= 0 || !purpose) {
      return NextResponse.json(
        { ok: false, error: 'amountKes (>0) and purpose are required.' },
        { status: 400 }
      );
    }

    const token = crypto.randomBytes(16).toString('hex');
    const id = await createPayment({
      source: 'pesapal_link',
      amountKes: Math.round(amountKes),
      currency: 'KES',
      status: 'pending',
      purpose,
      paymentLinkToken: token,
      paymentLinkActive: true,
      metadata: {
        createdBy: session.email,
        createdAt: new Date().toISOString(),
      },
    });

    if (!id) {
      return NextResponse.json({ ok: false, error: 'Database unavailable.' }, { status: 503 });
    }

    const base = (process.env.APP_BASE_URL || 'https://cresdynamics.com').replace(/\/+$/, '');
    const paymentUrl = `${base}/pay/${token}`;
    return NextResponse.json({ ok: true, paymentUrl, token, paymentId: id });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : 'Failed to create payment link' },
      { status: 500 }
    );
  }
}
