import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

if (!process.env.RESEND_API_KEY) {
  console.error('RESEND_API_KEY is not configured');
}

const resend = new Resend(process.env.RESEND_API_KEY);

const safe = (value?: string) =>
  (value || '—').toString().replace(/[<>]/g, (c) => (c === '<' ? '&lt;' : '&gt;'));

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { fname, lname, email, phone, company, type } = body;

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

    const recipientEmail = process.env.EVENTS_FORM_EMAIL || process.env.CAREERS_FORM_EMAIL || 'info@cresdynamics.com';
    const senderEmail = process.env.SENDER_EMAIL || 'onboarding@resend.dev';
    const eventTitle = body.eventTitle || 'The Future of AI in Business';
    const eventDate = body.eventDate || '16 May 2026';

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
          </div>
          <p style="text-align: center; margin-top: 16px; color: #666; font-size: 11px;">CRES Dynamics events form.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend events error:', error);
      return NextResponse.json(
        { error: 'Failed to submit registration. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Events register error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
