import { NextResponse } from 'next/server';
import { getPesapalIpnRegistrationUrl, registerPesapalIpn } from '@/lib/pesapal';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    ipnUrl: getPesapalIpnRegistrationUrl(),
    hint: 'Register this URL in Pesapal IPN settings (prefer HTTPS in production).',
  });
}

export async function POST() {
  try {
    const ipnUrl = getPesapalIpnRegistrationUrl();
    const result = await registerPesapalIpn(ipnUrl, 'POST');
    return NextResponse.json({
      ipnUrl,
      registered: true,
      pesapal: result,
      hint: 'Save the returned ipn_id to PESAPAL_IPN_ID in your env.',
    });
  } catch (error) {
    return NextResponse.json(
      {
        registered: false,
        error: error instanceof Error ? error.message : 'Failed to register IPN',
      },
      { status: 500 }
    );
  }
}
