import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { insertEventReservation } from '@/lib/db';
import { EVENT_TICKET_AMOUNTS_KES } from '@/lib/event-tickets';
import { EVENT_LANYARDS, lanyardLabel } from '@/lib/event-lanyards';
import { generateInquiryAutoReply } from '@/lib/aiAutoReply';
import { nlToBr } from '@/lib/escapeHtml';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const safe = (value?: string) =>
  (value || '—').toString().replace(/[<>]/g, (c) => (c === '<' ? '&lt;' : '&gt;'));

const TICKET_LABELS: Record<string, string> = {
  economy: 'General',
  standard: 'Standard',
  vip: 'VIP',
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fname, lname, email, phone, company, type, ticket, lanyard } = body;
    const lanyardCategory = String(lanyard || '').trim();
    const validLanyard = EVENT_LANYARDS.some((l) => l.id === lanyardCategory);

    if (!fname || !email || !phone) {
      return NextResponse.json(
        { error: 'First name, email and phone are required.' },
        { status: 400 }
      );
    }

    if (!validLanyard) {
      return NextResponse.json(
        { error: 'Please select your colour lanyard category.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    const recipientEmail =
      process.env.EVENTS_FORM_EMAIL ||
      process.env.INFO_EMAIL ||
      process.env.CAREERS_FORM_EMAIL ||
      'info@cresdynamics.com';
    const senderEmail = process.env.SENDER_EMAIL || 'onboarding@resend.dev';
    const eventTitle = body.eventTitle || 'The Future of AI in Business';
    const eventDate = body.eventDate || 'Saturday, 20 June 2026';
    const selectedTicket = String(ticket || 'standard').toLowerCase();
    const amountKes = EVENT_TICKET_AMOUNTS_KES[selectedTicket] ?? 2500;
    const ticketLabel = TICKET_LABELS[selectedTicket] ?? selectedTicket;
    const paybillNumber = process.env.EVENT_PAYBILL || '542542';
    const paybillAccount = process.env.EVENT_PAYBILL_ACCOUNT || '43869';

    let dbId: number | null = null;
    try {
      dbId = await insertEventReservation({
        eventTitle,
        eventDate,
        firstName: fname,
        lastName: lname,
        email,
        phone,
        company,
        attendanceType: type || lanyardLabel(lanyardCategory),
        ticketType: selectedTicket,
        lanyardCategory,
        bookingStatus: 'pending',
      });
    } catch (dbErr) {
      console.error('event_reservations insert failed:', dbErr);
    }

    if (!dbId) {
      const hint =
        process.env.NODE_ENV === 'development'
          ? ' Database is not running. Start it with: npm run db:up (requires Docker).'
          : '';
      return NextResponse.json(
        { error: `Failed to save your reservation. Please try again.${hint}` },
        { status: 500 }
      );
    }

    if (resend) {
      const attendeeReply = await generateInquiryAutoReply({
        name: String(fname || '').trim() || 'Guest',
        email: String(email || '').trim(),
        phone: String(phone || '').trim(),
        subject: `Event booking: ${eventTitle}`,
        details: `Signed up for ${eventTitle} (${eventDate}), ticket ${ticketLabel}, amount KES ${amountKes.toLocaleString()}.`,
        mode: 'event_signup',
        eventTitle,
        eventDate,
        ticketLabel,
        amountKes,
      });

      const { error } = await resend.emails.send({
        from: `CRES Events <${senderEmail}>`,
        to: [recipientEmail],
        replyTo: email,
        subject: `New event booking #${dbId} — ${fname} (${ticketLabel}, pay pending)`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #1A2433;">New Event Booking — payment pending</h1>
            <p><strong>Name:</strong> ${safe(fname)} ${safe(lname)}</p>
            <p><strong>Email:</strong> ${safe(email)}</p>
            <p><strong>Phone:</strong> ${safe(phone)}</p>
            <p><strong>Company:</strong> ${safe(company)}</p>
            <p><strong>Ticket:</strong> ${safe(ticketLabel)} (KES ${amountKes.toLocaleString()})</p>
            <p><strong>Lanyard:</strong> ${safe(lanyardLabel(lanyardCategory))}</p>
            <p><strong>Record ID:</strong> ${dbId}</p>
            <p style="margin-top:16px;color:#555;">Payment instructions sent to attendee by email.</p>
          </div>
        `,
      });
      if (error) console.error('Resend events error:', error);

      try {
        await resend.emails.send({
          from: `CRES Events <${senderEmail}>`,
          to: [email],
          subject: `Complete your booking — ${eventTitle}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 20px; background:#f8fafc;">
              <div style="background: linear-gradient(135deg, #0D1B2A 0%, #4FB3A9 100%); color:white; border-radius:10px; padding:22px;">
                <h2 style="margin:0; font-size:22px;">Your seat is reserved</h2>
                <p style="margin:8px 0 0 0; opacity:0.95;">Booking ref #${dbId} · ${safe(eventTitle)}</p>
              </div>
              <div style="background:#fff; border:1px solid #e2e8f0; border-radius:10px; margin-top:16px; padding:18px;">
                <p style="margin:0 0 12px 0; color:#2d3748; white-space:pre-line;">${nlToBr(attendeeReply)}</p>
                <table style="width:100%; border-collapse:collapse; font-size:14px;">
                  <tr><td style="padding:8px 0; color:#4a5568;">Event</td><td style="padding:8px 0; color:#1a202c; font-weight:600;">${safe(eventTitle)}</td></tr>
                  <tr><td style="padding:8px 0; color:#4a5568;">Date</td><td style="padding:8px 0; color:#1a202c; font-weight:600;">${safe(eventDate)}</td></tr>
                  <tr><td style="padding:8px 0; color:#4a5568;">Ticket</td><td style="padding:8px 0; color:#1a202c; font-weight:600;">${safe(ticketLabel)}</td></tr>
                  <tr><td style="padding:8px 0; color:#4a5568;">Amount</td><td style="padding:8px 0; color:#1a202c; font-weight:700;">KES ${amountKes.toLocaleString()}</td></tr>
                  <tr><td style="padding:8px 0; color:#4a5568;">M-Pesa Paybill</td><td style="padding:8px 0; color:#1a202c; font-weight:700;">${safe(paybillNumber)}</td></tr>
                  <tr><td style="padding:8px 0; color:#4a5568;">Account</td><td style="padding:8px 0; color:#1a202c; font-weight:700;">${safe(paybillAccount)}</td></tr>
                </table>
                <p style="margin:14px 0 0 0; color:#4a5568; font-size:13px;">After payment, reply with your M-Pesa confirmation message to speed up verification.</p>
              </div>
              <p style="margin-top:12px; color:#4a5568; font-size:12px;">Need help? Reply to this email or contact +254 708 805 496.</p>
            </div>
          `,
        });

        await resend.emails.send({
          from: `CRES Events <${senderEmail}>`,
          to: [recipientEmail],
          replyTo: email,
          subject: `Conversation copy — event booking #${dbId} — ${safe(fname)}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 680px; margin: 0 auto; padding: 20px; background:#f7fafc;">
              <h2 style="margin:0 0 14px 0; color:#1A2433;">Conversation copy (signup + AI reply)</h2>
              <div style="background:#fff; border:1px solid #e2e8f0; border-radius:10px; padding:16px;">
                <p style="margin:0 0 10px 0; font-size:13px; color:#4a5568;"><strong>Client:</strong> ${safe(fname)} ${safe(lname)} (${safe(email)})</p>
                <h3 style="margin:8px 0 6px 0; color:#1A2433; font-size:14px;">User signup context</h3>
                <p style="margin:0; color:#2d3748; line-height:1.6;">
                  Event: ${safe(eventTitle)}<br>
                  Date: ${safe(eventDate)}<br>
                  Ticket: ${safe(ticketLabel)}<br>
                  Amount: KES ${amountKes.toLocaleString()}<br>
                  Lanyard: ${safe(lanyardLabel(lanyardCategory))}
                </p>
                <h3 style="margin:16px 0 6px 0; color:#1A2433; font-size:14px;">AI reply sent to attendee</h3>
                <p style="margin:0; color:#2d3748; line-height:1.6; white-space:pre-line;">${nlToBr(attendeeReply)}</p>
              </div>
            </div>
          `,
        });
      } catch (attendeeErr) {
        console.error('Failed to send attendee booking email:', attendeeErr);
      }
    }

    return NextResponse.json({
      success: true,
      reservationId: dbId,
      paymentStatus: 'pending',
      message:
        'Your seat is reserved. Our team will contact you shortly with payment details (M-Pesa / Paybill) to confirm your ticket.',
    });
  } catch (error) {
    console.error('Events register error:', error);
    const message = error instanceof Error ? error.message : 'Registration failed. Please try again.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
