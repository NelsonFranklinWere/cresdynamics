import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { insertSpeakerApplication } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const fullName = String(form.get('fullName') || '').trim();
    const email = String(form.get('email') || '').trim();
    const phone = String(form.get('phone') || '').trim();
    const company = String(form.get('company') || '').trim();
    const topic = String(form.get('topic') || '').trim();
    const linkedin = String(form.get('linkedin') || '').trim();
    const audienceWhy = String(form.get('audienceWhy') || '').trim();
    const bioPdf = form.get('bioPdf');
    const image = form.get('image');

    if (!fullName || !email || !phone || !topic || !audienceWhy) {
      return NextResponse.json({ error: 'Please fill all required fields.' }, { status: 400 });
    }
    if (!(bioPdf instanceof File) || !(image instanceof File)) {
      return NextResponse.json({ error: 'Bio PDF and image are required.' }, { status: 400 });
    }
    if (bioPdf.type !== 'application/pdf') {
      return NextResponse.json({ error: 'Bio must be uploaded as PDF.' }, { status: 400 });
    }
    if (!image.type.startsWith('image/')) {
      return NextResponse.json({ error: 'Image must be an image file.' }, { status: 400 });
    }

    const id = await insertSpeakerApplication({
      fullName,
      email,
      phone,
      company: company || null,
      topic,
      linkedin: linkedin || null,
      audienceWhy,
      bioPdfFilename: bioPdf.name,
      imageFilename: image.name,
    });

    if (!id) {
      return NextResponse.json({ error: 'Database unavailable.' }, { status: 503 });
    }

    if (resend) {
      const recipientEmail =
        process.env.EVENTS_FORM_EMAIL || process.env.CAREERS_FORM_EMAIL || 'cresdynamics@gmail.com';
      const senderEmail = process.env.SENDER_EMAIL || 'onboarding@resend.dev';
      const bioBuf = Buffer.from(await bioPdf.arrayBuffer());
      const imageBuf = Buffer.from(await image.arrayBuffer());
      await resend.emails.send({
        from: `CRES Events <${senderEmail}>`,
        to: [recipientEmail],
        subject: `Speaker Application: ${fullName}`,
        html: `
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company || '—'}</p>
          <p><strong>Topic:</strong> ${topic}</p>
          <p><strong>LinkedIn:</strong> ${linkedin || '—'}</p>
          <p><strong>Why this audience:</strong><br>${audienceWhy.replace(/\n/g, '<br>')}</p>
          <p><strong>Record ID:</strong> ${id}</p>
        `,
        attachments: [
          { filename: bioPdf.name || 'bio.pdf', content: bioBuf.toString('base64') },
          { filename: image.name || 'speaker-image', content: imageBuf.toString('base64') },
        ],
      });
    }

    return NextResponse.json({ success: true, id });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to submit speaker application' },
      { status: 500 }
    );
  }
}
