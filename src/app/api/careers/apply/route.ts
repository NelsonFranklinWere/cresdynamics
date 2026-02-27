import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

if (!process.env.RESEND_API_KEY) {
  console.error('RESEND_API_KEY is not configured in environment variables');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is missing');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    const {
      fullName,
      email,
      phone,
      role,
      experienceSummary,
      linkedin,
      portfolio,
      whyCres,
    } = await request.json();

    if (!fullName || !email || !role || !experienceSummary) {
      return NextResponse.json(
        { error: 'Full name, email, role, and experience summary are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CAREERS_FORM_EMAIL || 'cresdynamics@gmail.com';
    const senderEmail = process.env.SENDER_EMAIL || 'onboarding@resend.dev';

    const safe = (value?: string) =>
      (value || '—').toString().replace(/[<>]/g, (c) => (c === '<' ? '&lt;' : '&gt;'));

    const { error } = await resend.emails.send({
      from: `CRES Careers <${senderEmail}>`,
      to: [recipientEmail],
      subject: `New Careers Application – ${role} – ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #0D1B2A 0%, #F47A2A 100%); padding: 24px 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: #fff; margin: 0; font-size: 22px; text-align: center;">New Careers Application</h1>
            <p style="color: #fff; margin: 8px 0 0 0; text-align: center; opacity: 0.9;">Role: <strong>${safe(
              role
            )}</strong></p>
          </div>

          <div style="background: #ffffff; padding: 24px 28px; border-radius: 10px; box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
            <h2 style="color: #0D1B2A; margin-top: 0; border-bottom: 2px solid #F47A2A; padding-bottom: 8px; font-size: 18px;">Candidate Details</h2>

            <div style="margin: 18px 0;">
              <div style="display: flex; margin-bottom: 10px;">
                <strong style="width: 150px; color: #0D1B2A;">Full Name:</strong>
                <span style="color: #333;">${safe(fullName)}</span>
              </div>
              <div style="display: flex; margin-bottom: 10px;">
                <strong style="width: 150px; color: #0D1B2A;">Email:</strong>
                <span style="color: #333;">${safe(email)}</span>
              </div>
              <div style="display: flex; margin-bottom: 10px;">
                <strong style="width: 150px; color: #0D1B2A;">Phone:</strong>
                <span style="color: #333;">${safe(phone)}</span>
              </div>
              <div style="display: flex; margin-bottom: 10px;">
                <strong style="width: 150px; color: #0D1B2A;">LinkedIn:</strong>
                <span style="color: #0066cc;">${safe(linkedin)}</span>
              </div>
              <div style="display: flex; margin-bottom: 10px;">
                <strong style="width: 150px; color: #0D1B2A;">Portfolio / GitHub:</strong>
                <span style="color: #0066cc;">${safe(portfolio)}</span>
              </div>
            </div>

            <h3 style="color: #0D1B2A; margin-top: 24px; border-bottom: 2px solid #F47A2A; padding-bottom: 8px; font-size: 16px;">Experience Summary</h3>
            <div style="background: #f8f9fa; padding: 16px 18px; border-radius: 6px; margin: 12px 0; border-left: 4px solid #F47A2A;">
              <p style="margin: 0; color: #333; line-height: 1.6;">${safe(experienceSummary).replace(
                /\\n/g,
                '<br>'
              )}</p>
            </div>

            <h3 style="color: #0D1B2A; margin-top: 24px; border-bottom: 2px solid #F47A2A; padding-bottom: 8px; font-size: 16px;">Why CRES Dynamics</h3>
            <div style="background: #f8f9fa; padding: 16px 18px; border-radius: 6px; margin: 12px 0; border-left: 4px solid #4FB3A9;">
              <p style="margin: 0; color: #333; line-height: 1.6;">${safe(whyCres).replace(
                /\\n/g,
                '<br>'
              )}</p>
            </div>

            <div style="background: #e8f5f3; padding: 14px 16px; border-radius: 6px; margin-top: 22px; border: 1px solid #4FB3A9;">
              <p style="margin: 0; color: #0D1B2A; font-size: 14px;">
                📌 <strong>Next step:</strong> Review this application, then schedule a short screening call if the profile matches current hiring needs.
              </p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 16px; color: #666; font-size: 11px;">
            <p style="margin: 0;">This email was sent from the CRES Dynamics careers form.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend careers error:', error);
      return NextResponse.json(
        { error: 'Failed to submit application. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Application submitted successfully. If there is a fit, we will reach out within 7 days.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Careers form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

