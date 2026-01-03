import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Runtime configuration for Vercel
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    // Get subscribers from environment variable or external storage
    // For Vercel, we'll use a simple approach: store subscribers in a JSON string in env var
    // In production, you should use a database (Vercel Postgres, Supabase, etc.)
    const subscribersJson = process.env.SUBSCRIBERS_DATA || '[]';
    let subscribers = [];
    
    try {
      subscribers = JSON.parse(subscribersJson);
    } catch (parseError) {
      console.error('Error parsing subscribers data:', parseError);
      subscribers = [];
    }

    const now = new Date();
    let emailsSent = 0;
    let updatedSubscribers = [];

    for (const subscriber of subscribers) {
      // Check if follow-up is due and hasn't been sent
      if (!subscriber.followUpSent && new Date(subscriber.followUpScheduledFor) <= now) {
        try {
          // Send follow-up email
          const { data: emailData, error } = await resend.emails.send({
            from: 'CRES Dynamics <cresdynamics@gmail.com>',
            to: [subscriber.email],
            subject: `Your Free Digital Growth Checklist - CRES Dynamics`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
                <div style="background: linear-gradient(135deg, #0D1B2A 0%, #4FB3A9 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
                  <h1 style="color: white; margin: 0; font-size: 24px; text-align: center;">Your Free Digital Growth Checklist</h1>
                  <p style="color: white; margin: 10px 0 0 0; text-align: center; opacity: 0.9;">Hi ${subscriber.fullName}!</p>
                </div>

                <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                  <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
                    Thank you for your interest in CRES Dynamics! As promised, here's your <strong>free digital growth checklist</strong> specifically designed for Nairobi businesses like yours.
                  </p>

                  <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #4FB3A9;">
                    <h3 style="color: #0D1B2A; margin-top: 0;">📋 Quick Digital Growth Checklist</h3>
                    <ul style="color: #333; line-height: 1.8;">
                      <li><strong>Website Visibility:</strong> Is your website showing up in Google searches for your services?</li>
                      <li><strong>Lead Generation:</strong> Do you have a system to capture and convert website visitors?</li>
                      <li><strong>Customer Communication:</strong> Are you using automation to stay in touch with prospects?</li>
                      <li><strong>Growth Tracking:</strong> Do you measure what's working and what's not?</li>
                      <li><strong>Competitive Edge:</strong> How do you stand out from other Nairobi businesses in your niche?</li>
                    </ul>
                  </div>

                  <h3 style="color: #0D1B2A; border-bottom: 2px solid #4FB3A9; padding-bottom: 10px;">Why Nairobi Businesses Choose CRES Dynamics</h3>

                  <div style="margin: 20px 0;">
                    <div style="display: flex; align-items: center; margin-bottom: 15px;">
                      <span style="font-size: 24px; margin-right: 15px;">🤖</span>
                      <div>
                        <strong style="color: #0D1B2A;">AI-Powered Automation</strong>
                        <p style="margin: 5px 0; color: #666; font-size: 14px;">Save 10+ hours per week with intelligent systems</p>
                      </div>
                    </div>

                    <div style="display: flex; align-items: center; margin-bottom: 15px;">
                      <span style="font-size: 24px; margin-right: 15px;">🎯</span>
                      <div>
                        <strong style="color: #0D1B2A;">Strategy-First Approach</strong>
                        <p style="margin: 5px 0; color: #666; font-size: 14px;">We plan your growth before building solutions</p>
                      </div>
                    </div>

                    <div style="display: flex; align-items: center; margin-bottom: 15px;">
                      <span style="font-size: 24px; margin-right: 15px;">📈</span>
                      <div>
                        <strong style="color: #0D1B2A;">Results-Driven Focus</strong>
                        <p style="margin: 5px 0; color: #666; font-size: 14px;">Every feature is designed to increase revenue</p>
                      </div>
                    </div>

                    <div style="display: flex; align-items: center; margin-bottom: 15px;">
                      <span style="font-size: 24px; margin-right: 15px;">🇰🇪</span>
                      <div>
                        <strong style="color: #0D1B2A;">Built for Kenya</strong>
                        <p style="margin: 5px 0; color: #666; font-size: 14px;">Understanding local market dynamics and customer behavior</p>
                      </div>
                    </div>
                  </div>

                  <div style="background: linear-gradient(135deg, #4FB3A9 0%, #00B894 100%); padding: 20px; border-radius: 8px; margin: 30px 0; text-align: center;">
                    <h3 style="color: white; margin: 0 0 10px 0;">Ready to Transform Your Business?</h3>
                    <p style="color: white; margin: 0; opacity: 0.9;">
                      Schedule a free 30-minute strategy call to discuss your specific challenges.
                    </p>
                    <a href="https://cresdynamics.com/contact" style="display: inline-block; background: white; color: #0D1B2A; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 15px;">
                      Book Your Strategy Call
                    </a>
                  </div>

                  <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px;">
                    <p style="color: #666; font-size: 14px; margin: 0;">
                      <strong>Stay Connected:</strong><br>
                      📧 Email: info@cresdynamics.com<br>
                      📱 Phone/WhatsApp: +254 708 805 496<br>
                      🌐 Website: <a href="https://cresdynamics.com" style="color: #4FB3A9;">cresdynamics.com</a>
                    </p>
                  </div>

                  <div style="background: #e8f5f3; padding: 15px; border-radius: 5px; margin-top: 20px; border: 1px solid #4FB3A9;">
                    <p style="margin: 0; color: #0D1B2A; font-size: 12px;">
                      💡 <strong>Pro Tip:</strong> Most Nairobi businesses lose money because they focus on "looking good" instead of "getting results." We help you do both.
                    </p>
                  </div>
                </div>

                <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
                  <p>You received this email because you subscribed to updates from CRES Dynamics.</p>
                  <p><a href="https://cresdynamics.com/unsubscribe?email=${encodeURIComponent(subscriber.email)}" style="color: #666;">Unsubscribe</a> | <a href="https://cresdynamics.com" style="color: #666;">Visit our website</a></p>
                </div>
              </div>
            `,
          });

          if (error) {
            console.error(`Failed to send follow-up to ${subscriber.email}:`, error);
          } else {
            console.log(`Follow-up email sent to ${subscriber.email}`);
            emailsSent++;
            // Mark as sent
            subscriber.followUpSent = true;
          }
        } catch (emailError) {
          console.error(`Error sending follow-up to ${subscriber.email}:`, emailError);
        }
      }

      updatedSubscribers.push(subscriber);
    }

    // Note: In production, update subscribers in your database
    // For now, we'll log the updated list (you'll need to manually update env var or use a database)
    console.log('Updated subscribers:', JSON.stringify(updatedSubscribers, null, 2));
    // TODO: Update SUBSCRIBERS_DATA environment variable or database

    return NextResponse.json({
      success: true,
      message: `Follow-up emails sent to ${emailsSent} subscribers`,
      emailsSent,
      note: 'For production, use a database (Vercel Postgres, Supabase) to store subscribers'
    });

  } catch (error) {
    console.error('Send follow-up error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
