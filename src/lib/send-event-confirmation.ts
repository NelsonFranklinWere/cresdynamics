import { Resend } from 'resend';
import {
  buildEventConfirmationEmail,
  type EventConfirmationPayload,
} from '@/lib/event-confirmation-email';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendEventConfirmationEmail(
  payload: EventConfirmationPayload
): Promise<{ sent: boolean; error?: string }> {
  if (!resend) {
    console.warn('event confirmation email skipped: RESEND_API_KEY not configured');
    return { sent: false, error: 'Email not configured' };
  }

  const senderEmail = process.env.SENDER_EMAIL || 'onboarding@resend.dev';
  const { subject, html, text } = buildEventConfirmationEmail(payload);

  try {
    const result = await resend.emails.send({
      from: `CRES Events <${senderEmail}>`,
      to: [payload.email],
      replyTo: process.env.INFO_EMAIL || 'info@cresdynamics.com',
      subject,
      html,
      text,
    });
    if (result.error) {
      console.error('event confirmation email failed:', result.error);
      return { sent: false, error: result.error.message };
    }
    return { sent: true };
  } catch (err) {
    console.error('event confirmation email error:', err);
    return { sent: false, error: err instanceof Error ? err.message : 'Send failed' };
  }
}
