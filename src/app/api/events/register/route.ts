import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { insertEventReservation } from '@/lib/db';
import { EVENT_TICKET_AMOUNTS_KES } from '@/lib/event-tickets';
import { EVENT_LANYARDS, lanyardLabel } from '@/lib/event-lanyards';

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
      process.env.CAREERS_FORM_EMAIL ||
      'cresdynamics@gmail.com';
    const senderEmail = process.env.SENDER_EMAIL || 'onboarding@resend.dev';
    const eventTitle = body.eventTitle || 'The Future of AI in Business';
    const eventDate = body.eventDate || 'Saturday, 20 June 2026';
    const selectedTicket = String(ticket || 'standard').toLowerCase();
    const amountKes = EVENT_TICKET_AMOUNTS_KES[selectedTicket] ?? 2500;
    const ticketLabel = TICKET_LABELS[selectedTicket] ?? selectedTicket;

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
      const { error } = await resend.emails.send({
        from: `CRES Events <${senderEmail}>`,
        to: [recipientEmail],
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
            <p style="margin-top:16px;color:#555;">Contact the guest to complete payment (M-Pesa / Paybill).</p>
          </div>
        `,
      });
      if (error) console.error('Resend events error:', error);
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
