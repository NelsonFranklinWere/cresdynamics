import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { attachPaymentCheckoutDetails, createPayment, insertEventReservation } from '@/lib/db';
import { submitPesapalOrder } from '@/lib/pesapal';

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
    const { fname, lname, email, phone, company, type, ticket, paymentMethod } = body;

    if (!fname || !email || !phone) {
      return NextResponse.json(
        { error: 'First name, email and phone are required.' },
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
    const eventDate = body.eventDate || 'Saturday, 20th June 2026';
    const ticketPrices: Record<string, number> = {
      economy: 1500,
      standard: 2500,
      vip: 3500,
    };
    const selectedTicket = String(ticket || 'standard').toLowerCase();
    const amountKes = ticketPrices[selectedTicket] || 2500;

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

    const paymentId = await createPayment({
      source: 'event_registration',
      status: 'pending',
      amountKes,
      currency: 'KES',
      email,
      phone,
      purpose: `event_ticket_${selectedTicket}`,
      eventTitle,
      eventDate,
      metadata: {
        reservationId: dbId,
        paymentMethod: paymentMethod || 'pesapal',
      },
    });

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

    const method = String(paymentMethod || 'pesapal').toLowerCase();
    if (method === 'paybill') {
      return NextResponse.json(
        {
          success: true,
          reservationId: dbId,
          paymentId,
          paymentStatus: 'pending',
          paymentMethod: 'paybill',
          paybill: { number: '542542', account: '43869' },
          message: 'Reservation saved. Complete payment via Paybill 542542 Account 43869.',
        },
        { status: 200 }
      );
    }

    const notificationId = process.env.PESAPAL_IPN_ID;
    if (!notificationId) {
      return NextResponse.json(
        {
          success: true,
          reservationId: dbId,
          paymentId,
          paymentStatus: 'pending',
          paymentMethod: 'pesapal',
          warning: 'PESAPAL_IPN_ID missing. Reservation saved; payment link unavailable.',
        },
        { status: 200 }
      );
    }

    const merchantReference = `event-${dbId}-${Date.now()}`;
    try {
      const submit = await submitPesapalOrder({
        amountKes,
        description: `${eventTitle} (${selectedTicket})`,
        userFirstName: fname,
        userLastName: lname || '-',
        email,
        phoneNumber: phone,
        merchantReference,
        notificationId,
      });
      const redirectUrl = String(
        submit.redirect_url || submit.redirectUrl || submit.payment_url || submit.paymentUrl || ''
      );
      const orderTrackingId = String(
        submit.order_tracking_id || submit.orderTrackingId || submit.tracking_id || ''
      );
      if (paymentId) {
        await attachPaymentCheckoutDetails({
          paymentId,
          email,
          phone,
          merchantReference,
          providerTrackingId: orderTrackingId || null,
          metadata: submit as Record<string, unknown>,
        });
      }

      return NextResponse.json(
        {
          success: true,
          reservationId: dbId,
          paymentId,
          paymentStatus: 'pending',
          paymentMethod: 'pesapal',
          redirectUrl,
          orderTrackingId: orderTrackingId || null,
          message: resend ? 'Reservation saved.' : 'Reservation saved (email not configured).',
        },
        { status: 200 }
      );
    } catch (pesapalErr) {
      console.error('Pesapal submission failed after reservation save:', pesapalErr);
      return NextResponse.json(
        {
          success: true,
          reservationId: dbId,
          paymentId,
          paymentStatus: 'pending',
          paymentMethod: 'pesapal',
          warning: 'Reservation saved but Pesapal checkout failed to initialize. We will contact you.',
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Events register error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
