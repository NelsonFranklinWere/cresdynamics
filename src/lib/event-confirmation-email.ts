import { FUTURE_AI_EVENT, FUTURE_AI_LANYARDS, FUTURE_AI_PATHS } from '@/lib/future-ai-event';
import { getLanyardById, lanyardLabel } from '@/lib/event-lanyards';

const FUTURE_AI_SITE = 'https://cresdynamics.com';

function absolute(path: string) {
  return `${FUTURE_AI_SITE}${path}`;
}

export const EVENT_TICKET_NUMBER_PREFIX = 'FoAIB-2026';

export function formatEventTicketNumber(sequence: number): string {
  return `${EVENT_TICKET_NUMBER_PREFIX}-${String(sequence).padStart(3, '0')}`;
}

export const EVENT_CONFIRMATION_SUBJECT = `You are confirmed — ${FUTURE_AI_EVENT.title} — ${FUTURE_AI_EVENT.dateShort}`;

export type EventConfirmationPayload = {
  firstName: string;
  lastName: string | null;
  email: string;
  ticketType: string | null;
  ticketNumber: string;
  amountPaidKes: number;
  paymentReference: string;
  paymentDate: string;
  lanyardCategory: string | null;
  isVip: boolean;
};

const TICKET_DISPLAY: Record<string, string> = {
  economy: 'General',
  general: 'General',
  standard: 'Standard',
  vip: 'VIP',
};

export function ticketTypeDisplay(ticketType: string | null): string {
  if (!ticketType) return 'General';
  return TICKET_DISPLAY[ticketType.toLowerCase()] ?? ticketType;
}

function lanyardEmailLine(category: string | null): string {
  const l = category ? getLanyardById(category) : null;
  if (!l) return 'Please select your category at the registration desk.';
  return `${l.colorName} — ${l.role}`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatPaymentDate(iso: string): string {
  return new Date(iso).toLocaleString('en-KE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function buildEventConfirmationEmail(payload: EventConfirmationPayload) {
  const fullName = [payload.firstName, payload.lastName].filter(Boolean).join(' ');
  const ticketLabel = ticketTypeDisplay(payload.ticketType);
  const selectedLanyard = lanyardEmailLine(payload.lanyardCategory);
  const lanyardList = FUTURE_AI_LANYARDS.map(
    (l) => `${l.colorName} — ${l.role.replace(' and ', ' or ').replace('Developers and Engineers', 'Developer or Engineer').replace('Business Owners and Founders', 'Business Owner or Founder').replace('VIP and Speakers', 'VIP')}`
  ).join('\n');

  const vipBlock = payload.isVip
    ? `
VIP ATTENDEES — ADDITIONAL INFORMATION

If you purchased a VIP ticket your experience includes the following in addition to the main programme.

The CEO Roundtable session running from 5:00 PM to 5:45 PM in the dedicated VIP space. This is a closed-door conversation between founders, business owners, and investors facilitated by Nelson Were. Maximum 30 people. No pitching. Pure peer-level strategic conversation.

Your post-event AI Systems Audit. This is a private 30 minute session with the Cres Dynamics team scheduled after the event. We will contact you within 48 hours of the event to book your audit session at a time that works for you.

VIP check-in is at a dedicated desk separate from general registration. Please look for the purple lanyard sign when you arrive.
`
    : '';

  const text = `Dear ${payload.firstName},

Your seat is reserved.

Thank you for registering for ${FUTURE_AI_EVENT.title}. Your payment has been received and your place at Sarit Expo Centre on ${FUTURE_AI_EVENT.dateLabel} is confirmed.

Here is everything you need to know before the day.

YOUR BOOKING DETAILS
Name: ${fullName}
Ticket Type: ${ticketLabel}
Ticket Number: ${payload.ticketNumber}
Amount Paid: KES ${payload.amountPaidKes.toLocaleString()}
Payment Reference: ${payload.paymentReference}
Date of Payment: ${formatPaymentDate(payload.paymentDate)}

EVENT DETAILS
Event: ${FUTURE_AI_EVENT.title}
Date: ${FUTURE_AI_EVENT.dateLabel}
Time: Doors open at ${FUTURE_AI_EVENT.doorsOpen}. Programme begins at 2:00 PM. Close at 7:00 PM.
Venue: ${FUTURE_AI_EVENT.venue}
Address: Sarit Centre, Karuna Road, Westlands, Nairobi

YOUR LANYARD COLOUR
At registration you will receive your colour coded lanyard based on your category. This is how every person in the room knows who you are and who to connect with instantly.

Your selected category: ${selectedLanyard}

${FUTURE_AI_LANYARDS.map((l) => {
    const role = l.role
      .replace('Business Owners and Founders', 'Business Owner or Founder')
      .replace('Developers and Engineers', 'Developer or Engineer')
      .replace('VIP and Speakers', 'VIP');
    return `${l.colorName} — ${role}`;
  }).join('\n')}

Please indicate your category when you arrive at the registration desk if you have not already done so during booking.

WHAT TO BRING ON THE DAY
One — This confirmation email. Either printed or on your phone. This is your entry pass.
Two — Your national ID or any valid identification.
Three — Your business cards if you have them. The networking in this room will be intentional and valuable. Come prepared.
${vipBlock}
GETTING THERE
Sarit Expo Centre is located inside Sarit Centre on Karuna Road, Westlands, Nairobi.
By car — Paid parking is available at Sarit Centre. Enter via the Karuna Road entrance.
By matatu — Routes serving Westlands stop directly outside Sarit Centre.
By taxi or ride hailing — Drop off at Sarit Centre, Westlands. The Expo Centre entrance is clearly signposted inside the mall.

FREQUENTLY ASKED QUESTIONS
Can I transfer my ticket to someone else?
Yes. Reply to this email with the name and contact of the person you are transferring to and we will update the registration.

Can I get a refund?
Tickets are non-refundable. However they are transferable as described above.

What if I cannot attend?
Reply to this email and let us know. We will hold your details for future events and note your registration.

Is there food at the event?
Refreshments are served during the networking breaks. The event runs from 2PM to 7PM so we recommend having lunch before you arrive.

Who do I contact if I have a question before the event?
Email ${FUTURE_AI_EVENT.contactEmail} or WhatsApp ${FUTURE_AI_EVENT.contactPhone}. We respond within 2 hours during working hours.

A NOTE FROM NELSON
You made a decision to be in that room on ${FUTURE_AI_EVENT.dateShort}. That decision already puts you ahead of everyone who said they would think about it.

The value of this afternoon is not in what you hear from the stage. It is in what you do with it the following Monday. Come ready to listen. Come ready to connect. Come ready to leave with something you can act on immediately.

I will see you there.

Nelson Were
Director, Cres Dynamics Ltd
Founder, OptioHire

SHARE THIS EVENT
Know someone who should be in that room?
Forward this email or share the registration link — cresdynamics.com/events
Every person you bring into that room makes your network stronger.

${FUTURE_AI_EVENT.title}
${FUTURE_AI_EVENT.dateLabel} · Sarit Expo Centre · Westlands · Nairobi
2PM — 7PM
${FUTURE_AI_EVENT.organiser} · cresdynamics.com · ${FUTURE_AI_EVENT.contactEmail} · ${FUTURE_AI_EVENT.contactPhone}
© 2026 ${FUTURE_AI_EVENT.organiser}. All rights reserved.`;

  const html = `
<div style="font-family: Georgia, 'Times New Roman', serif; max-width: 640px; margin: 0 auto; color: #1a1a1a; line-height: 1.65; font-size: 15px;">
  <div style="background: linear-gradient(135deg, #060B18 0%, #0A2540 100%); padding: 28px 24px; text-align: center;">
    <p style="margin: 0 0 8px; color: #2FA6B3; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-family: Arial, sans-serif;">Cres Dynamics Events</p>
    <h1 style="margin: 0; color: #fff; font-size: 22px; font-weight: 700;">You are confirmed</h1>
    <p style="margin: 8px 0 0; color: #F39C24; font-size: 13px; font-family: Arial, sans-serif;">${escapeHtml(FUTURE_AI_EVENT.title)}</p>
  </div>
  <div style="padding: 28px 24px; background: #ffffff;">
    <p>Dear <strong>${escapeHtml(payload.firstName)}</strong>,</p>
    <p><strong>Your seat is reserved.</strong></p>
    <p>Thank you for registering for <strong>${escapeHtml(FUTURE_AI_EVENT.title)}</strong>. Your payment has been received and your place at Sarit Expo Centre on <strong>${escapeHtml(FUTURE_AI_EVENT.dateLabel)}</strong> is confirmed.</p>
    <p>Here is everything you need to know before the day.</p>

    <h2 style="font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; color: #2FA6B3; border-bottom: 2px solid #2FA6B3; padding-bottom: 6px; margin-top: 28px; font-family: Arial, sans-serif;">Your booking details</h2>
    <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; font-size: 14px;">
      <tr><td style="padding: 6px 0; color: #666; width: 40%;">Name</td><td style="padding: 6px 0;"><strong>${escapeHtml(fullName)}</strong></td></tr>
      <tr><td style="padding: 6px 0; color: #666;">Ticket Type</td><td style="padding: 6px 0;"><strong>${escapeHtml(ticketLabel)}</strong></td></tr>
      <tr><td style="padding: 6px 0; color: #666;">Ticket Number</td><td style="padding: 6px 0; font-family: monospace; font-size: 16px; color: #F39C24;"><strong>${escapeHtml(payload.ticketNumber)}</strong></td></tr>
      <tr><td style="padding: 6px 0; color: #666;">Amount Paid</td><td style="padding: 6px 0;"><strong>KES ${payload.amountPaidKes.toLocaleString()}</strong></td></tr>
      <tr><td style="padding: 6px 0; color: #666;">Payment Reference</td><td style="padding: 6px 0;">${escapeHtml(payload.paymentReference)}</td></tr>
      <tr><td style="padding: 6px 0; color: #666;">Date of Payment</td><td style="padding: 6px 0;">${escapeHtml(formatPaymentDate(payload.paymentDate))}</td></tr>
    </table>

    <h2 style="font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; color: #2FA6B3; border-bottom: 2px solid #2FA6B3; padding-bottom: 6px; margin-top: 28px; font-family: Arial, sans-serif;">Event details</h2>
    <p style="margin: 8px 0; font-family: Arial, sans-serif; font-size: 14px;">
      <strong>Event:</strong> ${escapeHtml(FUTURE_AI_EVENT.title)}<br/>
      <strong>Date:</strong> ${escapeHtml(FUTURE_AI_EVENT.dateLabel)}<br/>
      <strong>Time:</strong> Doors open at ${escapeHtml(FUTURE_AI_EVENT.doorsOpen)}. Programme begins at 2:00 PM. Close at 7:00 PM.<br/>
      <strong>Venue:</strong> ${escapeHtml(FUTURE_AI_EVENT.venue)}<br/>
      <strong>Address:</strong> Sarit Centre, Karuna Road, Westlands, Nairobi
    </p>

    <h2 style="font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; color: #2FA6B3; border-bottom: 2px solid #2FA6B3; padding-bottom: 6px; margin-top: 28px; font-family: Arial, sans-serif;">Your lanyard colour</h2>
    <p>At registration you will receive your colour coded lanyard based on your category.</p>
    <div style="background: #f0f9fa; border-left: 4px solid #2FA6B3; padding: 12px 16px; margin: 12px 0; font-family: Arial, sans-serif;">
      <strong>Your selected category:</strong> ${escapeHtml(selectedLanyard)}
      ${payload.lanyardCategory ? `<br/><span style="color:#666;font-size:13px;">(${escapeHtml(lanyardLabel(payload.lanyardCategory))})</span>` : ''}
    </div>
    <ul style="padding-left: 18px; font-family: Arial, sans-serif; font-size: 14px;">
      ${FUTURE_AI_LANYARDS.map((l) => {
        const role = l.role
          .replace('Business Owners and Founders', 'Business Owner or Founder')
          .replace('Developers and Engineers', 'Developer or Engineer')
          .replace('VIP and Speakers', 'VIP');
        return `<li><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${l.color};margin-right:6px;"></span>${escapeHtml(l.colorName)} — ${escapeHtml(role)}</li>`;
      }).join('')}
    </ul>

    <h2 style="font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; color: #2FA6B3; border-bottom: 2px solid #2FA6B3; padding-bottom: 6px; margin-top: 28px; font-family: Arial, sans-serif;">What to bring on the day</h2>
    <ol style="font-family: Arial, sans-serif; font-size: 14px;">
      <li><strong>This confirmation email</strong> — printed or on your phone. This is your entry pass.</li>
      <li><strong>Your national ID</strong> or any valid identification.</li>
      <li><strong>Your business cards</strong> if you have them.</li>
    </ol>

    ${
      payload.isVip
        ? `
    <h2 style="font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; color: #F39C24; border-bottom: 2px solid #F39C24; padding-bottom: 6px; margin-top: 28px; font-family: Arial, sans-serif;">VIP attendees — additional information</h2>
    <ul style="font-family: Arial, sans-serif; font-size: 14px;">
      <li><strong>CEO Roundtable</strong> — 5:00 PM to 5:45 PM in the dedicated VIP space. Closed-door conversation facilitated by Nelson Were. Maximum 30 people.</li>
      <li><strong>Post-event AI Systems Audit</strong> — private 30-minute session with Cres Dynamics. We will contact you within 48 hours after the event to schedule.</li>
      <li><strong>VIP check-in</strong> — dedicated desk separate from general registration. Look for the purple lanyard sign.</li>
    </ul>`
        : ''
    }

    <h2 style="font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; color: #2FA6B3; border-bottom: 2px solid #2FA6B3; padding-bottom: 6px; margin-top: 28px; font-family: Arial, sans-serif;">Getting there</h2>
    <p style="font-family: Arial, sans-serif; font-size: 14px;">Sarit Expo Centre is inside Sarit Centre on Karuna Road, Westlands, Nairobi.<br/>
    <strong>By car</strong> — Paid parking at Sarit Centre, Karuna Road entrance.<br/>
    <strong>By matatu</strong> — Routes serving Westlands stop outside Sarit Centre.<br/>
    <strong>By taxi</strong> — Drop off at Sarit Centre, Westlands.</p>

    <h2 style="font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; color: #2FA6B3; border-bottom: 2px solid #2FA6B3; padding-bottom: 6px; margin-top: 28px; font-family: Arial, sans-serif;">A note from Nelson</h2>
    <blockquote style="margin: 0; padding: 16px 20px; background: #fafafa; border-left: 4px solid #F39C24; font-style: italic;">
      You made a decision to be in that room on ${escapeHtml(FUTURE_AI_EVENT.dateShort)}. That decision already puts you ahead of everyone who said they would think about it.<br/><br/>
      The value of this afternoon is not in what you hear from the stage. It is in what you do with it the following Monday. Come ready to listen. Come ready to connect. Come ready to leave with something you can act on immediately.<br/><br/>
      I will see you there.<br/><br/>
      <strong>Nelson Were</strong><br/>
      Director, Cres Dynamics Ltd<br/>
      Founder, OptioHire
    </blockquote>

    <p style="margin-top: 24px; font-family: Arial, sans-serif; font-size: 14px;">
      <strong>Share this event:</strong> <a href="${absolute(FUTURE_AI_PATHS.hub)}" style="color: #2FA6B3;">cresdynamics.com/events</a>
    </p>
  </div>
  <div style="background: #060B18; padding: 20px 24px; text-align: center; font-family: Arial, sans-serif; font-size: 12px; color: rgba(255,255,255,0.65);">
    <p style="margin: 0 0 4px; color: #fff; font-weight: 700;">${escapeHtml(FUTURE_AI_EVENT.title)}</p>
    <p style="margin: 0;">${escapeHtml(FUTURE_AI_EVENT.dateLabel)} · Sarit Expo Centre · Westlands · Nairobi · 2PM — 7PM</p>
    <p style="margin: 8px 0 0;">${escapeHtml(FUTURE_AI_EVENT.organiser)} · <a href="${FUTURE_AI_SITE}" style="color: #2FA6B3;">cresdynamics.com</a></p>
    <p style="margin: 4px 0 0;">© 2026 ${escapeHtml(FUTURE_AI_EVENT.organiser)}. All rights reserved.</p>
  </div>
</div>`;

  return { subject: EVENT_CONFIRMATION_SUBJECT, html, text };
}
