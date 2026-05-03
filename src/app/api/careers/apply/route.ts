import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { insertCareerApplication } from '@/lib/db';
import { escapeHtml, nlToBr } from '@/lib/escapeHtml';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const DEFAULT_INBOX = 'cresdynamics@gmail.com';

const MAX_CV_BYTES = 4 * 1024 * 1024; // 4 MB (fits typical email + serverless limits)
const ALLOWED_CV_MIME = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

function safeAttachmentFilename(name: string): string {
  const base = name.replace(/[/\\?%*:|"<>]/g, '_').slice(0, 180);
  return base || 'cv.pdf';
}

function parseJsonBody(body: Record<string, unknown>) {
  return {
    fullName: typeof body.fullName === 'string' ? body.fullName.trim() : '',
    email: typeof body.email === 'string' ? body.email.trim() : '',
    phone: typeof body.phone === 'string' ? body.phone.trim() : '',
    role: typeof body.role === 'string' ? body.role.trim() : '',
    experienceSummary:
      typeof body.experienceSummary === 'string' ? body.experienceSummary.trim() : '',
    linkedin: typeof body.linkedin === 'string' ? body.linkedin.trim() : '',
    portfolio: typeof body.portfolio === 'string' ? body.portfolio.trim() : '',
    whyCres: typeof body.whyCres === 'string' ? body.whyCres.trim() : '',
  };
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is missing');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const contentType = request.headers.get('content-type') || '';
    let fullName: string;
    let email: string;
    let phone: string;
    let role: string;
    let experienceSummary: string;
    let linkedin: string;
    let portfolio: string;
    let whyCres: string;
    let cvBuffer: Buffer | null = null;
    let cvOriginalFilename: string | null = null;

    if (contentType.includes('multipart/form-data')) {
      const form = await request.formData();
      fullName = String(form.get('fullName') ?? '').trim();
      email = String(form.get('email') ?? '').trim();
      phone = String(form.get('phone') ?? '').trim();
      role = String(form.get('role') ?? '').trim();
      experienceSummary = String(form.get('experienceSummary') ?? '').trim();
      linkedin = String(form.get('linkedin') ?? '').trim();
      portfolio = String(form.get('portfolio') ?? '').trim();
      whyCres = String(form.get('whyCres') ?? '').trim();

      const file = form.get('cv');
      if (!(file instanceof File) || file.size === 0) {
        return NextResponse.json(
          { error: 'Please upload your CV (PDF or Word, max 4 MB).' },
          { status: 400 }
        );
      }
      if (file.size > MAX_CV_BYTES) {
        return NextResponse.json(
          { error: 'CV file is too large. Maximum size is 4 MB.' },
          { status: 400 }
        );
      }
      const mime = file.type || '';
      const lower = file.name.toLowerCase();
      const extOk = lower.endsWith('.pdf') || lower.endsWith('.doc') || lower.endsWith('.docx');
      const mimeOk =
        !mime ||
        ALLOWED_CV_MIME.has(mime) ||
        mime === 'application/octet-stream';
      if (!extOk || !mimeOk) {
        return NextResponse.json(
          { error: 'CV must be a PDF or Word document (.pdf, .doc, .docx).' },
          { status: 400 }
        );
      }
      const ab = await file.arrayBuffer();
      cvBuffer = Buffer.from(ab);
      cvOriginalFilename = safeAttachmentFilename(file.name);
    } else {
      const body = (await request.json()) as Record<string, unknown>;
      const p = parseJsonBody(body);
      fullName = p.fullName;
      email = p.email;
      phone = p.phone;
      role = p.role;
      experienceSummary = p.experienceSummary;
      linkedin = p.linkedin;
      portfolio = p.portfolio;
      whyCres = p.whyCres;
    }

    if (!fullName || !email || !role || !experienceSummary || !whyCres) {
      return NextResponse.json(
        { error: 'Full name, email, role, experience summary, and why CRES are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    let dbId: number | null = null;
    try {
      dbId = await insertCareerApplication({
        fullName,
        email,
        phone,
        role,
        linkedin,
        portfolio,
        experienceSummary,
        whyCres,
        cvOriginalFilename,
      });
    } catch (dbErr) {
      console.error('career_applications insert failed:', dbErr);
    }

    const recipientEmail = process.env.CAREERS_FORM_EMAIL || DEFAULT_INBOX;
    const senderEmail = process.env.SENDER_EMAIL || 'onboarding@resend.dev';

    const safe = escapeHtml;

    const attachments =
      cvBuffer && cvOriginalFilename
        ? [{ filename: cvOriginalFilename, content: cvBuffer }]
        : undefined;

    const cvLine = cvOriginalFilename
      ? `<p style="margin: 12px 0 0 0; color: #0D1B2A; font-size: 14px;"><strong>CV:</strong> attached (${safe(cvOriginalFilename)})</p>`
      : '<p style="margin: 12px 0 0 0; color: #856404; font-size: 13px;"><strong>CV:</strong> not attached (legacy JSON submit)</p>';

    const { error } = await resend.emails.send({
      from: `CRES Careers <${senderEmail}>`,
      to: [recipientEmail],
      replyTo: email,
      subject: `Careers application form — ${safe(role)} — ${safe(fullName)}`,
      ...(attachments?.length ? { attachments } : {}),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #0D1B2A 0%, #F47A2A 100%); padding: 24px 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: #fff; margin: 0; font-size: 22px; text-align: center;">Careers — application form</h1>
            <p style="color: #fff; margin: 8px 0 0 0; text-align: center; opacity: 0.9;">Complete submission from cresdynamics.com</p>
            ${dbId ? `<p style="color: rgba(255,255,255,0.85); margin: 8px 0 0 0; text-align: center; font-size: 12px;">Record ID: ${dbId}</p>` : ''}
          </div>

          <div style="background: #ffffff; padding: 24px 28px; border-radius: 10px; box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
            <h2 style="color: #0D1B2A; margin-top: 0; border-bottom: 2px solid #F47A2A; padding-bottom: 8px; font-size: 18px;">Applicant (from form)</h2>

            ${cvLine}

            <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #333; margin-bottom: 8px; margin-top: 16px;">
              <tr>
                <td style="padding: 8px 10px; border: 1px solid #e0e0e0; background: #f4f7f8; width: 160px; font-weight: bold; color: #0D1B2A;">Full name</td>
                <td style="padding: 8px 10px; border: 1px solid #e0e0e0;">${safe(fullName)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 10px; border: 1px solid #e0e0e0; background: #f4f7f8; font-weight: bold; color: #0D1B2A;">Email</td>
                <td style="padding: 8px 10px; border: 1px solid #e0e0e0;"><a href="mailto:${encodeURIComponent(email)}">${safe(email)}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 10px; border: 1px solid #e0e0e0; background: #f4f7f8; font-weight: bold; color: #0D1B2A;">Phone</td>
                <td style="padding: 8px 10px; border: 1px solid #e0e0e0;">${safe(phone)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 10px; border: 1px solid #e0e0e0; background: #f4f7f8; font-weight: bold; color: #0D1B2A;">Role applied for</td>
                <td style="padding: 8px 10px; border: 1px solid #e0e0e0;">${safe(role)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 10px; border: 1px solid #e0e0e0; background: #f4f7f8; font-weight: bold; color: #0D1B2A;">LinkedIn</td>
                <td style="padding: 8px 10px; border: 1px solid #e0e0e0;">${safe(linkedin)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 10px; border: 1px solid #e0e0e0; background: #f4f7f8; font-weight: bold; color: #0D1B2A;">Portfolio / GitHub</td>
                <td style="padding: 8px 10px; border: 1px solid #e0e0e0;">${safe(portfolio)}</td>
              </tr>
            </table>

            <h3 style="color: #0D1B2A; margin-top: 20px; border-bottom: 2px solid #F47A2A; padding-bottom: 8px; font-size: 16px;">Experience summary</h3>
            <div style="background: #f8f9fa; padding: 16px 18px; border-radius: 6px; margin: 12px 0; border-left: 4px solid #F47A2A;">
              <p style="margin: 0; color: #333; line-height: 1.6;">${nlToBr(experienceSummary)}</p>
            </div>

            <h3 style="color: #0D1B2A; margin-top: 20px; border-bottom: 2px solid #F47A2A; padding-bottom: 8px; font-size: 16px;">Why CRES Dynamics</h3>
            <div style="background: #f8f9fa; padding: 16px 18px; border-radius: 6px; margin: 12px 0; border-left: 4px solid #4FB3A9;">
              <p style="margin: 0; color: #333; line-height: 1.6;">${nlToBr(whyCres)}</p>
            </div>

            <div style="background: #e8f5f3; padding: 14px 16px; border-radius: 6px; margin-top: 22px; border: 1px solid #4FB3A9;">
              <p style="margin: 0; color: #0D1B2A; font-size: 14px;">
                <strong>Next step:</strong> Review this application form, then schedule a screening call if there is a match.
              </p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 16px; color: #666; font-size: 11px;">
            <p style="margin: 0;">CRES Dynamics — careers application</p>
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
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
