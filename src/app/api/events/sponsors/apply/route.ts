import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import {
  hasRecentSponsorApplicationByEmail,
  insertSponsorApplication,
  type SponsorPackageTier,
} from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const TIERS = new Set<SponsorPackageTier>([
  'gold',
  'silver',
  'community',
  'community_inkind',
  'custom',
]);

type Body = {
  companyName?: string;
  contactFullName?: string;
  jobTitle?: string;
  email?: string;
  phone?: string;
  companyWebsite?: string | null;
  packageTier?: string;
  packageSelected?: string;
  whySponsor?: string;
  howHeard?: string | null;
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Body;
    const companyName = String(body.companyName || '').trim();
    const contactFullName = String(body.contactFullName || '').trim();
    const jobTitle = String(body.jobTitle || '').trim();
    const email = String(body.email || '').trim();
    const phone = String(body.phone || '').trim();
    const companyWebsite = body.companyWebsite != null ? String(body.companyWebsite).trim() : '';
    const packageTierRaw = String(body.packageTier || '').trim() as SponsorPackageTier;
    const packageSelected = String(body.packageSelected || '').trim();
    const whySponsor = String(body.whySponsor || '').trim();
    const howHeard = body.howHeard != null ? String(body.howHeard).trim() : '';

    if (!companyName || !contactFullName || !jobTitle || !email || !phone || !packageSelected) {
      return NextResponse.json({ error: 'Please fill all required fields.' }, { status: 400 });
    }
    if (!TIERS.has(packageTierRaw)) {
      return NextResponse.json({ error: 'Invalid sponsor package selection.' }, { status: 400 });
    }
    if (whySponsor.length < 50) {
      return NextResponse.json(
        { error: 'Please enter at least 50 characters explaining why you want to sponsor.' },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }
    let websiteNormalized: string | null = companyWebsite.length > 0 ? companyWebsite : null;
    if (websiteNormalized) {
      try {
        const u = websiteNormalized.startsWith('http')
          ? websiteNormalized
          : `https://${websiteNormalized}`;
        new URL(u);
        websiteNormalized = u;
      } catch {
        return NextResponse.json({ error: 'Please enter a valid website URL or leave it blank.' }, { status: 400 });
      }
    }

    const dup = await hasRecentSponsorApplicationByEmail(email, 24);
    if (dup) {
      return NextResponse.json(
        {
          error:
            'You recently submitted an application with this email. Please wait 24 hours before applying again or contact us directly.',
        },
        { status: 429 }
      );
    }

    const id = await insertSponsorApplication({
      companyName,
      contactFullName,
      jobTitle,
      email,
      phone,
      companyWebsite: websiteNormalized,
      packageSelected,
      packageTier: packageTierRaw,
      whySponsor,
      howHeard: howHeard || null,
    });

    if (!id) {
      return NextResponse.json({ error: 'Database unavailable.' }, { status: 503 });
    }

    if (resend) {
      const recipientEmail =
        process.env.EVENTS_FORM_EMAIL || process.env.CAREERS_FORM_EMAIL || 'cresdynamics@gmail.com';
      const senderEmail = process.env.SENDER_EMAIL || 'onboarding@resend.dev';
      let waDigits = phone.replace(/\D/g, '');
      if (waDigits.startsWith('0')) waDigits = '254' + waDigits.slice(1);
      else if (waDigits.length === 9 && waDigits.startsWith('7')) waDigits = '254' + waDigits;
      const waHref = waDigits.length >= 11 ? `https://wa.me/${waDigits}` : '';

      await resend.emails.send({
        from: `CRES Events <${senderEmail}>`,
        to: [recipientEmail],
        subject: `New sponsor application: ${companyName} · ${packageSelected}`,
        html: `
          <p><strong>New sponsor application</strong> (record #${id})</p>
          <p><strong>Company:</strong> ${escapeHtml(companyName)}</p>
          <p><strong>Package:</strong> ${escapeHtml(packageSelected)}</p>
          <p><strong>WhatsApp / phone:</strong> ${escapeHtml(phone)}
            ${waHref ? `<br><a href="${escapeHtml(waHref)}">Open WhatsApp</a>` : ''}
          </p>
          <p><strong>Contact:</strong> ${escapeHtml(contactFullName)} · ${escapeHtml(jobTitle)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <hr />
          <p><strong>Why sponsor:</strong><br>${escapeHtml(whySponsor).replace(/\n/g, '<br>')}</p>
        `,
      });
    }

    return NextResponse.json({
      success: true,
      message:
        'Thank you. We have received your application and will be in touch within 48 hours via WhatsApp or email.',
      id,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to submit sponsor application' },
      { status: 500 }
    );
  }
}
