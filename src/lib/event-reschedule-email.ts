import { FUTURE_AI_EVENT } from '@/lib/future-ai-event';

export const EVENT_RESCHEDULE_SUBJECT = 'Your seat is still yours — Important event update';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function buildEventRescheduleEmail(firstName: string) {
  const text = `Dear ${firstName},

I want to reach out to you personally before you hear it anywhere else.

The Future of AI in Business has been moved to July 2026.

Here is exactly what happened.

Registrations came in stronger than we projected. We crossed 300 people and kept going. When we went back to Sarit Expo Centre to expand the space and fit everyone who wanted to be in that room we were told the halls are fully booked for a boxing match on 20th June.

Rather than compress everyone into a space that was not designed for the size this event has become or rush a substitute venue at the last minute I made the decision to move to July. The new venue will accommodate everyone and will allow us to run breakout sessions simultaneously — business owners in one room, developers in another, investors and operators in a third. The experience will be significantly better than what the original configuration could deliver.

Your registration is fully confirmed. Your seat is reserved for the new date. You do not need to do anything.

The exact date and new venue will be confirmed within 48 hours and you will receive another email the moment that is locked.

If the new date does not work for you simply reply to this email and I will process a full refund immediately. No forms. No delay. Just a reply.

Thank you for registering. Thank you for telling people about this event. The fact that we outgrew the room before the date arrived tells me this conversation about AI and business in Kenya is one that Nairobi has been waiting to have.

We will have it in July. In a bigger room. With a better programme.

Watch your inbox.

Nelson Were

Director, Cres Dynamics Ltd

+254 0708 805 496

${FUTURE_AI_EVENT.contactEmail}

cresdynamics.com

The Future of AI in Business — July 2026 — New Date and Venue Confirmed Within 48 Hours`;

  const html = `
<div style="font-family: Georgia, 'Times New Roman', serif; max-width: 640px; margin: 0 auto; color: #1a1a1a; line-height: 1.7; font-size: 15px;">
  <div style="background: linear-gradient(135deg, #060B18 0%, #0A2540 100%); padding: 28px 24px; text-align: center;">
    <p style="margin: 0 0 8px; color: #F39C24; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-family: Arial, sans-serif;">Important event update</p>
    <h1 style="margin: 0; color: #fff; font-size: 22px; font-weight: 700;">Your seat is still yours</h1>
    <p style="margin: 8px 0 0; color: #2FA6B3; font-size: 13px; font-family: Arial, sans-serif;">${escapeHtml(FUTURE_AI_EVENT.title)} · July 2026</p>
  </div>
  <div style="padding: 28px 24px; background: #ffffff;">
    <p>Dear <strong>${escapeHtml(firstName)}</strong>,</p>
    <p>I want to reach out to you personally before you hear it anywhere else.</p>
    <p><strong>The Future of AI in Business has been moved to July 2026.</strong></p>
    <p><strong>Here is exactly what happened.</strong></p>
    <p>Registrations came in stronger than we projected. We crossed 300 people and kept going. When we went back to Sarit Expo Centre to expand the space and fit everyone who wanted to be in that room we were told the halls are fully booked for a boxing match on 20th June.</p>
    <p>Rather than compress everyone into a space that was not designed for the size this event has become or rush a substitute venue at the last minute I made the decision to move to July. The new venue will accommodate everyone and will allow us to run breakout sessions simultaneously — business owners in one room, developers in another, investors and operators in a third. The experience will be significantly better than what the original configuration could deliver.</p>
    <p><strong>Your registration is fully confirmed.</strong> Your seat is reserved for the new date. You do not need to do anything.</p>
    <p>The exact date and new venue will be confirmed within 48 hours and you will receive another email the moment that is locked.</p>
    <p>If the new date does not work for you simply reply to this email and I will process a full refund immediately. No forms. No delay. Just a reply.</p>
    <p>Thank you for registering. Thank you for telling people about this event. The fact that we outgrew the room before the date arrived tells me this conversation about AI and business in Kenya is one that Nairobi has been waiting to have.</p>
    <p><strong>We will have it in July. In a bigger room. With a better programme.</strong></p>
    <p>Watch your inbox.</p>
    <p style="margin-top: 28px;">
      <strong>Nelson Were</strong><br/>
      Director, Cres Dynamics Ltd<br/>
      <a href="tel:+254708805496" style="color: #2FA6B3;">+254 0708 805 496</a><br/>
      <a href="mailto:${FUTURE_AI_EVENT.contactEmail}" style="color: #2FA6B3;">${FUTURE_AI_EVENT.contactEmail}</a><br/>
      <a href="https://cresdynamics.com" style="color: #2FA6B3;">cresdynamics.com</a>
    </p>
  </div>
  <div style="background: #060B18; padding: 16px 24px; text-align: center; font-family: Arial, sans-serif; font-size: 12px; color: #94a3b8;">
    The Future of AI in Business — July 2026 — New Date and Venue Confirmed Within 48 Hours
  </div>
</div>`;

  return { subject: EVENT_RESCHEDULE_SUBJECT, html, text };
}
