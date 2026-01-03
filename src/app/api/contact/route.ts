import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Runtime configuration for Vercel
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { fullName, businessName, phone, email, problem, description, subscribe } = await request.json();

    // Validate required fields
    if (!fullName || !businessName || !phone || !email || !problem || !description) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'CRES Dynamics <cresdynamics@gmail.com>',
      to: ['info@cresdynamics.com'],
      subject: `New Contact Form Submission - ${businessName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #0D1B2A 0%, #4FB3A9 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px; text-align: center;">New Contact Form Submission</h1>
            <p style="color: white; margin: 10px 0 0 0; text-align: center; opacity: 0.9;">From CRES Dynamics Website</p>
          </div>

          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #0D1B2A; margin-top: 0; border-bottom: 2px solid #4FB3A9; padding-bottom: 10px;">Client Information</h2>

            <div style="margin: 20px 0;">
              <div style="display: flex; margin-bottom: 15px;">
                <strong style="width: 140px; color: #0D1B2A;">Full Name:</strong>
                <span style="color: #333;">${fullName}</span>
              </div>

              <div style="display: flex; margin-bottom: 15px;">
                <strong style="width: 140px; color: #0D1B2A;">Business Name:</strong>
                <span style="color: #333;">${businessName}</span>
              </div>

              <div style="display: flex; margin-bottom: 15px;">
                <strong style="width: 140px; color: #0D1B2A;">Phone:</strong>
                <span style="color: #333;">${phone}</span>
              </div>

              <div style="display: flex; margin-bottom: 15px;">
                <strong style="width: 140px; color: #0D1B2A;">Email:</strong>
                <span style="color: #333;">${email}</span>
              </div>

              <div style="display: flex; margin-bottom: 15px;">
                <strong style="width: 140px; color: #0D1B2A;">Main Problem:</strong>
                <span style="color: #333;">${problem.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}</span>
              </div>
            </div>

            <h3 style="color: #0D1B2A; margin-top: 30px; border-bottom: 2px solid #4FB3A9; padding-bottom: 10px;">Problem Description</h3>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #4FB3A9;">
              <p style="margin: 0; color: #333; line-height: 1.6;">${description.replace(/\n/g, '<br>')}</p>
            </div>

            <div style="background: #e8f5f3; padding: 15px; border-radius: 5px; margin-top: 30px; border: 1px solid #4FB3A9;">
              <p style="margin: 0; color: #0D1B2A; font-weight: bold;">⚡ Priority Action Required</p>
              <p style="margin: 5px 0 0 0; color: #333;">This lead requires immediate follow-up within 24 hours.</p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>This email was sent from the CRES Dynamics contact form.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Handle newsletter subscription - send welcome email immediately
    // Follow-up email will be sent via scheduled cron job (see vercel.json)
    if (subscribe) {
      try {
        // Send welcome email with subscription confirmation
        await resend.emails.send({
          from: 'CRES Dynamics <cresdynamics@gmail.com>',
          to: [email],
          subject: 'Welcome to CRES Dynamics Newsletter!',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
              <div style="background: linear-gradient(135deg, #0D1B2A 0%, #4FB3A9 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
                <h1 style="color: white; margin: 0; font-size: 24px; text-align: center;">Welcome to CRES Dynamics!</h1>
                <p style="color: white; margin: 10px 0 0 0; text-align: center; opacity: 0.9;">Hi ${fullName}!</p>
              </div>

              <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
                  Thank you for subscribing to our newsletter! You'll receive weekly insights on AI automation, SEO strategies, and digital growth tips for Nairobi businesses.
                </p>

                <div style="background: #e8f5f3; padding: 15px; border-radius: 5px; margin-top: 20px; border: 1px solid #4FB3A9;">
                  <p style="margin: 0; color: #0D1B2A; font-size: 14px;">
                    📧 <strong>What to expect:</strong> In one week, you'll receive your free digital growth checklist specifically designed for Nairobi businesses like yours.
                  </p>
                </div>

                <div style="text-align: center; margin-top: 30px;">
                  <a href="https://cresdynamics.com" style="display: inline-block; background: linear-gradient(135deg, #4FB3A9 0%, #00B894 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                    Visit Our Website
                  </a>
                </div>
              </div>

              <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
                <p>You can unsubscribe at any time by replying to this email.</p>
              </div>
            </div>
          `,
        });

        // Store subscriber info for follow-up (using Resend's scheduled emails or external service)
        // For now, we'll use a simple approach: store in environment variable or use a database
        // The follow-up will be handled by a cron job that checks for subscribers
        console.log(`New subscriber added: ${email}`);
      } catch (subscribeError) {
        console.error('Error handling subscription:', subscribeError);
        // Don't fail the main request if subscription fails
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully! We will contact you within 24 hours.' + (subscribe ? ' You\'ll also receive our weekly newsletter with digital growth insights.' : '')
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

