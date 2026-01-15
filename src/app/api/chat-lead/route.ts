import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Check if API key is configured
if (!process.env.RESEND_API_KEY) {
  console.error('RESEND_API_KEY is not configured in environment variables');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is missing');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    const { name, phone, email, pageUrl, userAgent } = await request.json();

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    // Validate phone format (basic validation)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone format' },
        { status: 400 }
      );
    }

    // Send email via Resend - Always send to cresdynamics@gmail.com
    const recipientEmail = 'cresdynamics@gmail.com';
    const senderEmail = process.env.SENDER_EMAIL || 'onboarding@resend.dev';
    
    const { data, error } = await resend.emails.send({
      from: `CRES Dynamics Chat Bot <${senderEmail}>`,
      to: [recipientEmail],
      subject: `New Chat Visitor - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #0D1B2A 0%, #4FB3A9 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px; text-align: center;">New Chat Visitor</h1>
            <p style="color: white; margin: 10px 0 0 0; text-align: center; opacity: 0.9;">Someone started a chat on CRES Dynamics Website</p>
          </div>

          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #0D1B2A; margin-top: 0; border-bottom: 2px solid #4FB3A9; padding-bottom: 10px;">Visitor Information</h2>

            <div style="margin: 20px 0;">
              <div style="display: flex; margin-bottom: 15px;">
                <strong style="width: 140px; color: #0D1B2A;">Name:</strong>
                <span style="color: #333;">${name}</span>
              </div>

              <div style="display: flex; margin-bottom: 15px;">
                <strong style="width: 140px; color: #0D1B2A;">Phone:</strong>
                <span style="color: #333;">${phone}</span>
              </div>

              ${email ? `
              <div style="display: flex; margin-bottom: 15px;">
                <strong style="width: 140px; color: #0D1B2A;">Email:</strong>
                <span style="color: #333;">${email}</span>
              </div>
              ` : ''}

              ${pageUrl ? `
              <div style="display: flex; margin-bottom: 15px;">
                <strong style="width: 140px; color: #0D1B2A;">Page:</strong>
                <span style="color: #333;">${pageUrl}</span>
              </div>
              ` : ''}
            </div>

            <div style="background: #e8f5f3; padding: 15px; border-radius: 5px; margin-top: 30px; border: 1px solid #4FB3A9;">
              <p style="margin: 0; color: #0D1B2A; font-weight: bold;">💬 Chat Started</p>
              <p style="margin: 5px 0 0 0; color: #333;">This visitor has started a conversation with the AI chat widget. Follow up with them to convert this lead!</p>
            </div>

            <div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin-top: 20px; border: 1px solid #ffc107;">
              <p style="margin: 0; color: #856404; font-weight: bold;">⚡ Action Required</p>
              <p style="margin: 5px 0 0 0; color: #856404;">Contact this lead within 24 hours for best conversion rates.</p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>This email was sent automatically from the CRES Dynamics chat widget.</p>
            <p>Timestamp: ${new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' })}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send notification email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Lead captured successfully',
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Chat lead API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

