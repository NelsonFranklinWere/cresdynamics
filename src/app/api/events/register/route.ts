import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { insertEventReservation } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

if (!process.env.RESEND_API_KEY) {
  console.error('RESEND_API_KEY is not configured');
}

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const safe = (value?: string) =>
  (value || '—').toString().replace(/[<>]/g, (c) => (c === '<' ? '&lt;' : '&gt;'));

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fname, lname, email, phone, company, type, ticket } = body;

    if (!fname || !email) {
      return NextResponse.json(
        { error: 'First name and email are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const recipientEmail =
      process.env.EVENTS_FORM_EMAIL ||
      process.env.CAREERS_FORM_EMAIL ||
      'cresdynamics@gmail.com';
    const senderEmail = process.env.SENDER_EMAIL || 'onboarding@resend.dev';
    const eventTitle = body.eventTitle || 'The Future of AI in Business';
    const eventDate = body.eventDate || '20 June 2026';

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
        attendanceType: type,
        ticketType: ticket,
      });
    } catch (dbErr) {
      console.error('event_reservations insert failed:', dbErr);
    }

    if (!dbId) {
      return NextResponse.json(
        { error: 'Failed to save your reservation. Please try again.' },
        { status: 500 }
      );
    }

    // Email sending is best-effort. We must always persist to Postgres first.
    if (resend) {
      const { error } = await resend.emails.send({
        from: `CRES Events <${senderEmail}>`,
        to: [recipientEmail],
        subject: `Event Registration: ${fname} ${lname || ''} — ${eventTitle}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
            <div style="background: linear-gradient(135deg, #1A2433 0%, #1E7C88 100%); padding: 24px 30px; border-radius: 10px; margin-bottom: 20px;">
              <h1 style="color: #fff; margin: 0; font-size: 22px; text-align: center;">New Event Registration</h1>
              <p style="color: #fff; margin: 8px 0 0 0; text-align: center; opacity: 0.9;">${safe(eventTitle)} — ${safe(eventDate)}</p>
            </div>
            <div style="background: #ffffff; padding: 24px 28px; border-radius: 10px; box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
              <p><strong>Name:</strong> ${safe(fname)} ${safe(lname)}</p>
              <p><strong>Email:</strong> ${safe(email)}</p>
              <p><strong>Phone:</strong> ${safe(phone)}</p>
              <p><strong>Company:</strong> ${safe(company)}</p>
              <p><strong>Attendance:</strong> ${safe(type)}</p>
              <p><strong>Ticket:</strong> ${safe(ticket)}</p>
              ${dbId ? `<p style="margin-top: 14px; color: #856404; font-size: 12px;"><strong>Record ID:</strong> ${dbId}</p>` : ''}
            </div>
            <p style="text-align: center; margin-top: 16px; color: #666; font-size: 11px;">CRES Dynamics events form.</p>
          </div>
        `,
      });

      if (error) {
        console.error('Resend events error:', error);
        // Don't block reservation creation due to email issues.
      }
    } else {
      console.warn('RESEND_API_KEY not configured; reservation saved but email not sent.');
    }

    return NextResponse.json(
      { success: true, message: resend ? 'Reservation saved.' : 'Reservation saved (email not configured).' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Events register error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
