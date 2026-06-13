import { FUTURE_AI_EVENT } from '@/lib/future-ai-event';

export const EVENT_RESCHEDULE_SUBJECT =
  'Your seat is still reserved — The Future of AI in Business | New Date Coming';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function buildEventRescheduleEmail(firstName: string) {
  const text = `Dear ${firstName},

I want to reach out to you personally with an important update about The Future of AI in Business.

First — thank you. The response to this event has been incredible. Every seat in the room has been claimed and the community coming together for this afternoon is exactly what I envisioned when I started building it.

Here is the update.

The event has been moved to mid July 2026. The exact date will be communicated to you within the next 48 hours once we confirm the new venue details.

Here is why.

Sarit Expo Centre was double booked for 20th June for a boxing match. We were not informed until this week. Rather than scramble for a quick fix I made the decision to take the extra time and do this properly. The new venue will also allow us to run breakout sessions that the original space could not accommodate — meaning the experience on the day will be richer than what was originally planned.

Your registration is fully confirmed and your seat is reserved for the new date. You do not need to do anything. If the new date does not work for you reply to this email and I will process a full refund immediately — no questions asked.

The programme is ready. The speakers are confirmed. The room is filling up and there is no space left. This conversation about AI and business in Kenya is happening. It is just happening on a slightly better day in a better room.

Thank you for your patience and for being part of this from the beginning.

Nelson Were

Director, Cres Dynamics Ltd

+254 0708 805 496

${FUTURE_AI_EVENT.contactEmail}

cresdynamics.com

The Future of AI in Business — New Date July 2026 — Details Coming Within 48 Hours`;

  const html = `
<div style="font-family: Georgia, 'Times New Roman', serif; max-width: 640px; margin: 0 auto; color: #1a1a1a; line-height: 1.7; font-size: 15px;">
  <div style="background: linear-gradient(135deg, #060B18 0%, #0A2540 100%); padding: 28px 24px; text-align: center;">
    <p style="margin: 0 0 8px; color: #F39C24; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-family: Arial, sans-serif;">Important update</p>
    <h1 style="margin: 0; color: #fff; font-size: 22px; font-weight: 700;">Your seat is still reserved</h1>
    <p style="margin: 8px 0 0; color: #2FA6B3; font-size: 13px; font-family: Arial, sans-serif;">${escapeHtml(FUTURE_AI_EVENT.title)}</p>
  </div>
  <div style="padding: 28px 24px; background: #ffffff;">
    <p>Dear <strong>${escapeHtml(firstName)}</strong>,</p>
    <p>I want to reach out to you personally with an important update about <strong>The Future of AI in Business</strong>.</p>
    <p><strong>First — thank you.</strong> The response to this event has been incredible. Every seat in the room has been claimed and the community coming together for this afternoon is exactly what I envisioned when I started building it.</p>
    <p><strong>Here is the update.</strong></p>
    <p>The event has been moved to <strong>mid July 2026</strong>. The exact date will be communicated to you within the next <strong>48 hours</strong> once we confirm the new venue details.</p>
    <p><strong>Here is why.</strong></p>
    <p>Sarit Expo Centre was double booked for 20th June for a boxing match. We were not informed until this week. Rather than scramble for a quick fix I made the decision to take the extra time and do this properly. The new venue will also allow us to run breakout sessions that the original space could not accommodate — meaning the experience on the day will be richer than what was originally planned.</p>
    <p><strong>Your registration is fully confirmed</strong> and your seat is reserved for the new date. You do not need to do anything. If the new date does not work for you reply to this email and I will process a full refund immediately — no questions asked.</p>
    <p>The programme is ready. The speakers are confirmed. The room is filling up and there is no space left. This conversation about AI and business in Kenya is happening. It is just happening on a slightly better day in a better room.</p>
    <p>Thank you for your patience and for being part of this from the beginning.</p>
    <p style="margin-top: 28px;">
      <strong>Nelson Were</strong><br/>
      Director, Cres Dynamics Ltd<br/>
      <a href="tel:+254708805496" style="color: #2FA6B3;">+254 0708 805 496</a><br/>
      <a href="mailto:${FUTURE_AI_EVENT.contactEmail}" style="color: #2FA6B3;">${FUTURE_AI_EVENT.contactEmail}</a><br/>
      <a href="https://cresdynamics.com" style="color: #2FA6B3;">cresdynamics.com</a>
    </p>
  </div>
  <div style="background: #060B18; padding: 16px 24px; text-align: center; font-family: Arial, sans-serif; font-size: 12px; color: #94a3b8;">
    The Future of AI in Business — New Date July 2026 — Details Coming Within 48 Hours
  </div>
</div>`;

  return { subject: EVENT_RESCHEDULE_SUBJECT, html, text };
}
