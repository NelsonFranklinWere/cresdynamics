import {
  buildEventConfirmationEmail,
  type EventConfirmationPayload,
} from '@/lib/event-confirmation-email';
import { hasResendConfigured, sendResendEmail } from '@/lib/resend-fallback';

export async function sendEventConfirmationEmail(
  payload: EventConfirmationPayload
): Promise<{ sent: boolean; error?: string }> {
  if (!hasResendConfigured()) {
    console.warn('event confirmation email skipped: RESEND_API_KEY not configured');
    return { sent: false, error: 'Email not configured' };
  }

  const senderEmail = process.env.SENDER_EMAIL || 'onboarding@resend.dev';
  const { subject, html, text } = buildEventConfirmationEmail(payload);

  const result = await sendResendEmail({
    from: `CRES Events <${senderEmail}>`,
    to: [payload.email],
    replyTo: process.env.INFO_EMAIL || 'info@cresdynamics.com',
    subject,
    html,
    text,
  });

  if (!result.sent) {
    console.error('event confirmation email failed:', result.error);
  }

  return { sent: result.sent, error: result.error };
}
