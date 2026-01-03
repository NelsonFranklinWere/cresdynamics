import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';

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
                <span style="color: #333;">${problem.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
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

    // Handle newsletter subscription
    if (subscribe) {
      try {
        const subscribersFile = path.join(process.cwd(), 'subscribers.json');

        // Read existing subscribers
        let subscribers = [];
        if (fs.existsSync(subscribersFile)) {
          const data = fs.readFileSync(subscribersFile, 'utf8');
          subscribers = JSON.parse(data);
        }

        // Check if email already exists
        const existingSubscriber = subscribers.find((sub: any) => sub.email === email);
        if (!existingSubscriber) {
          // Add new subscriber
          const newSubscriber = {
            email,
            fullName,
            businessName,
            phone,
            subscribedAt: new Date().toISOString(),
            followUpSent: false,
            followUpScheduledFor: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 1 week later
          };
          subscribers.push(newSubscriber);

          // Write back to file
          fs.writeFileSync(subscribersFile, JSON.stringify(subscribers, null, 2));
          console.log(`New subscriber added: ${email}`);
        } else {
          console.log(`Email already subscribed: ${email}`);
        }
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

