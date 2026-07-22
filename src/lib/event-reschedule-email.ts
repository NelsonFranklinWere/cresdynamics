import { FUTURE_AI_EVENT } from '@/lib/future-ai-event';

export const EVENT_RESCHEDULE_SUBJECT =
  'An update on The Future of AI in Business — new date: 31st October 2026';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function buildEventRescheduleEmail(firstName: string) {
  const text = `Dear ${firstName},

We're writing to you with an update on The Future of AI in Business.

After a meeting with a team from Google that had been engaging with us on this event, it has become clear that we need more room, both in scale and in preparation, than our original date allows. Unfortunately, the team we had lined up will no longer be able to make the original date work. Rather than compromise on what we're building, we've made the decision to move the event.

The Future of AI in Business will now take place on Saturday, 31st October 2026, at Sarit Expo Centre, Westlands, keeping the same time and format you registered for.

Your seat is already secured. There is nothing you need to do. Your ticket carries forward automatically to the new date, at the same tier you registered under.

If you would like to upgrade your tier, we will be in touch separately with details on how to do so.

If this new date no longer works for you and you would prefer a refund, simply reply to this email and we will process it promptly.

We know this shift asks for a little more patience, and we don't take that for granted. What's coming together for October will be worth the wait.

See you at Sarit.

Event Management Team, Cres Dynamics
The Future of AI in Business
${FUTURE_AI_EVENT.contactEmail}`;

  const html = `
<div style="font-family: Georgia, 'Times New Roman', serif; max-width: 640px; margin: 0 auto; color: #1a1a1a; line-height: 1.7; font-size: 15px;">
  <div style="background: linear-gradient(135deg, #060B18 0%, #0A2540 100%); padding: 28px 24px; text-align: center;">
    <p style="margin: 0 0 8px; color: #F39C24; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-family: Arial, sans-serif;">Event date update</p>
    <h1 style="margin: 0; color: #fff; font-size: 22px; font-weight: 700;">New date: 31st October 2026</h1>
    <p style="margin: 8px 0 0; color: #2FA6B3; font-size: 13px; font-family: Arial, sans-serif;">${escapeHtml(FUTURE_AI_EVENT.title)}</p>
  </div>
  <div style="padding: 28px 24px; background: #ffffff;">
    <p>Dear <strong>${escapeHtml(firstName)}</strong>,</p>
    <p>We're writing to you with an update on The Future of AI in Business.</p>
    <p>After a meeting with a team from Google that had been engaging with us on this event, it has become clear that we need more room, both in scale and in preparation, than our original date allows. Unfortunately, the team we had lined up will no longer be able to make the original date work. Rather than compromise on what we're building, we've made the decision to move the event.</p>
    <p><strong>The Future of AI in Business will now take place on Saturday, 31st October 2026, at Sarit Expo Centre, Westlands,</strong> keeping the same time and format you registered for.</p>
    <p><strong>Your seat is already secured.</strong> There is nothing you need to do. Your ticket carries forward automatically to the new date, at the same tier you registered under.</p>
    <p>If you would like to upgrade your tier, we will be in touch separately with details on how to do so.</p>
    <p>If this new date no longer works for you and you would prefer a refund, simply reply to this email and we will process it promptly.</p>
    <p>We know this shift asks for a little more patience, and we don't take that for granted. What's coming together for October will be worth the wait.</p>
    <p><strong>See you at Sarit.</strong></p>
    <p style="margin-top: 28px;">
      Event Management Team, Cres Dynamics<br/>
      The Future of AI in Business<br/>
      <a href="mailto:${FUTURE_AI_EVENT.contactEmail}" style="color: #2FA6B3;">${FUTURE_AI_EVENT.contactEmail}</a>
    </p>
  </div>
  <div style="background: #060B18; padding: 16px 24px; text-align: center; font-family: Arial, sans-serif; font-size: 12px; color: #94a3b8;">
    ${escapeHtml(FUTURE_AI_EVENT.title)} — Saturday, 31st October 2026 — Sarit Expo Centre, Westlands
  </div>
</div>`;

  return { subject: EVENT_RESCHEDULE_SUBJECT, html, text };
}
