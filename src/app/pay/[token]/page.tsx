import { notFound } from 'next/navigation';
import { getPaymentByLinkToken } from '@/lib/db';
import PayByLinkClient from './PayByLinkClient';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export default async function PayByLinkPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const payment = await getPaymentByLinkToken(token);
  if (!payment || !payment.paymentLinkActive || !payment.amountKes) {
    notFound();
  }

  return (
    <PayByLinkClient
      token={token}
      amountKes={payment.amountKes}
      purpose={payment.purpose || 'Payment request'}
    />
  );
}
