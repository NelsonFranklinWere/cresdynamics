import { NextRequest, NextResponse } from 'next/server';
import { insertContactLead } from '@/lib/db';
import { escapeHtml, nlToBr } from '@/lib/escapeHtml';
import { generateInquiryAutoReply } from '@/lib/aiAutoReply';
import { hasResendConfigured, sendResendEmail } from '@/lib/resend-fallback';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const DEFAULT_INBOX = 'info@cresdynamics.com';

export async function POST(request: NextRequest) {
  try {
    if (!hasResendConfigured()) {
      console.error('RESEND_API_KEY is missing');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const fullName = typeof body.fullName === 'string' ? body.fullName.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const contactPhone = typeof body.contactPhone === 'string' ? body.contactPhone.trim() : '';
    const projectTitle = typeof body.projectTitle === 'string' ? body.projectTitle.trim() : '';
    const projectDetail = typeof body.projectDetail === 'string' ? body.projectDetail.trim() : '';
    const subscribe = Boolean(body.subscribe);

    if (!fullName || !email || !contactPhone || !projectTitle || !projectDetail) {
      return NextResponse.json(
        {
          error:
            'All fields are required: name, email, phone/WhatsApp, project title, and project details.',
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    let dbId: number | null = null;
    try {
      dbId = await insertContactLead({
        fullName,
        email,
        contactPhone,
        projectTitle,
        projectDetail,
        subscribe,
      });
    } catch (dbErr) {
      console.error('contact_leads insert failed:', dbErr);
    }

    const recipientEmail = process.env.CONTACT_FORM_EMAIL || process.env.INFO_EMAIL || DEFAULT_INBOX;
    const senderEmail = process.env.SENDER_EMAIL || 'onboarding@resend.dev';

    const safe = escapeHtml;
    const detailHtml = nlToBr(projectDetail);

    const mailtoHref = `mailto:${encodeURIComponent(email)}`;

    const autoReplyBody = await generateInquiryAutoReply({
      name: fullName,
      email,
      phone: contactPhone,
      subject: projectTitle,
      details: projectDetail,
      mode: 'contact',
    });

    const result = await sendResendEmail({
      from: `CRES Dynamics <${senderEmail}>`,
      to: [recipientEmail],
      replyTo: email,
      subject: `New project inquiry — ${safe(projectTitle)} — ${safe(fullName)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #0D1B2A 0%, #4FB3A9 100%); padding: 28px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 22px; text-align: center;">Client project onboarding</h1>
            <p style="color: white; margin: 10px 0 0 0; text-align: center; opacity: 0.95; font-size: 14px;">Submitted from cresdynamics.com contact form</p>
            ${dbId ? `<p style="color: rgba(255,255,255,0.85); margin: 8px 0 0 0; text-align: center; font-size: 12px;">Record ID: ${dbId}</p>` : ''}
          </div>

          <div style="background: #ffffff; padding: 28px; border-radius: 10px; box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
            <p style="margin: 0 0 16px 0; color: #333; line-height: 1.5;">Use the details below to follow up. <strong>Reply</strong> goes to the client&apos;s email.</p>

            <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #333;">
              <tr>
                <td style="padding: 10px 12px; border: 1px solid #e0e0e0; background: #f4f7f8; width: 140px; font-weight: bold; color: #0D1B2A;">Name</td>
                <td style="padding: 10px 12px; border: 1px solid #e0e0e0;">${safe(fullName)}</td>
              </tr>
              <tr>
                <td style="padding: 10px 12px; border: 1px solid #e0e0e0; background: #f4f7f8; font-weight: bold; color: #0D1B2A;">Email</td>
                <td style="padding: 10px 12px; border: 1px solid #e0e0e0;"><a href="${mailtoHref}">${safe(email)}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 12px; border: 1px solid #e0e0e0; background: #f4f7f8; font-weight: bold; color: #0D1B2A;">Phone / WhatsApp</td>
                <td style="padding: 10px 12px; border: 1px solid #e0e0e0;">${safe(contactPhone)}</td>
              </tr>
              <tr>
                <td style="padding: 10px 12px; border: 1px solid #e0e0e0; background: #f4f7f8; font-weight: bold; color: #0D1B2A;">Project</td>
                <td style="padding: 10px 12px; border: 1px solid #e0e0e0;">${safe(projectTitle)}</td>
              </tr>
            </table>

            <h3 style="color: #0D1B2A; margin: 24px 0 10px 0; border-bottom: 2px solid #4FB3A9; padding-bottom: 8px; font-size: 16px;">What they&apos;re trying to build / solve</h3>
            <div style="background: #f8f9fa; padding: 18px; border-radius: 6px; border-left: 4px solid #4FB3A9;">
              <p style="margin: 0; color: #333; line-height: 1.65;">${detailHtml}</p>
            </div>

            <div style="background: #e8f5f3; padding: 14px 16px; border-radius: 6px; margin-top: 22px; border: 1px solid #4FB3A9;">
              <p style="margin: 0; color: #0D1B2A; font-size: 14px;">
                <strong>Next step:</strong> Respond within 24 hours. Qualify fit, then book a systems discovery call if appropriate.
              </p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 16px; color: #666; font-size: 11px;">
            <p style="margin: 0;">CRES Dynamics — contact form</p>
          </div>
        </div>
      `,
    });

    if (!result.sent) {
      console.error('Resend error:', result.error);
      let errorMessage = 'Failed to send email. ';
      if (result.error) {
        errorMessage += result.error;
      } else {
        errorMessage += 'Please try again later or contact support.';
      }
      return NextResponse.json({ error: errorMessage }, { status: 500 });
    }

    try {
      await sendResendEmail({
        from: `CRES Dynamics <${senderEmail}>`,
        to: [email],
        subject: `Re: ${projectTitle}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 20px;">
            <h2 style="color:#1A2433; margin-top:0;">Thanks for contacting Cres Dynamics</h2>
            <div style="border:1px solid #e3e8ea; border-radius:10px; padding:16px; background:#f9fbfc;">
              <p style="margin:0; white-space:pre-line; color:#26313f; line-height:1.6;">${nlToBr(autoReplyBody)}</p>
            </div>
            <p style="margin-top:16px; color:#4a5568; font-size:13px;">
              Inquiry reference: ${dbId ?? 'n/a'} · Phone: ${safe(contactPhone)}
            </p>
          </div>
        `,
      });
    } catch (replyErr) {
      console.error('Failed to send contact auto-reply:', replyErr);
    }

    // Share full conversation copy with internal team mailbox
    try {
      await sendResendEmail({
        from: `CRES Dynamics <${senderEmail}>`,
        to: [recipientEmail],
        replyTo: email,
        subject: `Conversation copy — inquiry #${dbId ?? 'n/a'} — ${safe(fullName)}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 680px; margin: 0 auto; padding: 20px; background:#f7fafc;">
            <h2 style="margin:0 0 14px 0; color:#1A2433;">Conversation copy (user + AI reply)</h2>
            <div style="background:#fff; border:1px solid #e2e8f0; border-radius:10px; padding:16px;">
              <p style="margin:0 0 10px 0; font-size:13px; color:#4a5568;"><strong>Client:</strong> ${safe(fullName)} (${safe(email)})</p>
              <h3 style="margin:8px 0 6px 0; color:#1A2433; font-size:14px;">User message</h3>
              <p style="margin:0; color:#2d3748; line-height:1.6;">${detailHtml}</p>
              <h3 style="margin:16px 0 6px 0; color:#1A2433; font-size:14px;">AI reply sent to user</h3>
              <p style="margin:0; color:#2d3748; line-height:1.6;">${nlToBr(autoReplyBody)}</p>
            </div>
          </div>
        `,
      });
    } catch (copyErr) {
      console.error('Failed to send conversation copy email:', copyErr);
    }

    if (subscribe) {
      try {
        await sendResendEmail({
          from: `CRES Dynamics <${senderEmail}>`,
          to: [email],
          subject: 'Welcome to CRES Dynamics Newsletter!',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
              <div style="background: linear-gradient(135deg, #0D1B2A 0%, #4FB3A9 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
                <h1 style="color: white; margin: 0; font-size: 24px; text-align: center;">Welcome to CRES Dynamics!</h1>
                <p style="color: white; margin: 10px 0 0 0; text-align: center; opacity: 0.9;">Hi ${safe(fullName)}!</p>
              </div>

              <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
                  Thank you for subscribing to our newsletter! You will receive insights on AI automation, SEO, and digital growth for Nairobi businesses.
                </p>

                <div style="background: #e8f5f3; padding: 15px; border-radius: 5px; margin-top: 20px; border: 1px solid #4FB3A9;">
                  <p style="margin: 0; color: #0D1B2A; font-size: 14px;">
                    <strong>What to expect:</strong> In one week, you may receive a free digital growth checklist tailored for businesses like yours.
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

        const followUpDate = new Date();
        followUpDate.setDate(followUpDate.getDate() + 7);
        console.log(`Newsletter opt-in: ${email}, follow-up window: ${followUpDate.toISOString()}`);
      } catch (subscribeError) {
        console.error('Error handling subscription:', subscribeError);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message:
          'Thank you — we received your project details. We will reach out shortly.' +
          (subscribe ? ' You will also get occasional insights if you opted in.' : ''),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
