type ReplyContext = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  details: string;
  mode?: 'contact' | 'event_signup';
  eventTitle?: string;
  eventDate?: string;
  ticketLabel?: string;
  amountKes?: number;
};

const FALLBACK_REPLY = (ctx: ReplyContext) =>
  [
    `Hi ${ctx.name},`,
    '',
    `Thanks for the clear note on "${ctx.subject}". We have reviewed your message and assigned it for immediate follow-up.`,
    'From a delivery standpoint, we will return with a practical next-step recommendation based on your exact context.',
    '',
    'If there is any additional context that affects timelines or priorities, reply directly to this thread.',
    '',
    'Nelson\nCEO, Cres Dynamics',
  ].join('\n');

function sanitize(input: string, max = 1200): string {
  return input.replace(/\s+/g, ' ').trim().slice(0, max);
}

async function replyWithGroq(ctx: ReplyContext, apiKey: string): Promise<string | null> {
  const system =
    'You are the CEO of Cres Dynamics replying to inbound client emails. Voice: calm executive clarity, decisive, practical, no fluff, no hype, no sales clichés. Keep concise and specific.';
  const prompt = `Context mode: ${ctx.mode || 'contact'}
Client name: ${sanitize(ctx.name, 80)}
Client email: ${sanitize(ctx.email, 160)}
Client phone: ${sanitize(ctx.phone || 'Not provided', 80)}
Subject: ${sanitize(ctx.subject, 220)}
Details: ${sanitize(ctx.details, 900)}
Event title (if signup): ${sanitize(ctx.eventTitle || '', 120)}
Event date (if signup): ${sanitize(ctx.eventDate || '', 120)}
Ticket (if signup): ${sanitize(ctx.ticketLabel || '', 60)}
Amount KES (if signup): ${String(ctx.amountKes ?? '')}

Write only the email body text and sign off exactly as:
Nelson
CEO, Cres Dynamics

Requirements:
- Customized to what they said (mention their specific subject/problem).
- 5-9 short lines.
- Professional CEO tone, human, thoughtful.
- No generic "thank you for contacting us" template wording.
- For event_signup mode: confirm reservation and that payment instructions appear below in the same email.`;

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'llama-3.1-8b-instant',
      temperature: 0.3,
      max_tokens: 220,
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: prompt },
      ],
    }),
  });

  if (!response.ok) return null;
  const data = await response.json();
  const text = data?.choices?.[0]?.message?.content;
  return typeof text === 'string' && text.trim() ? text.trim() : null;
}

async function replyWithGemini(ctx: ReplyContext, apiKey: string): Promise<string | null> {
  const model = 'gemini-2.0-flash';
  const prompt = `Write a concise CEO-style email reply body for a website inquiry.
Mode: ${ctx.mode || 'contact'}
Client: ${sanitize(ctx.name, 80)}
Subject: ${sanitize(ctx.subject, 220)}
Details: ${sanitize(ctx.details, 900)}
Event title: ${sanitize(ctx.eventTitle || '', 120)}
Event date: ${sanitize(ctx.eventDate || '', 120)}
Ticket: ${sanitize(ctx.ticketLabel || '', 60)}
Amount KES: ${String(ctx.amountKes ?? '')}

Style: CEO tone, clear, thoughtful, practical, no exaggerated promises.
Length: 5-9 short lines.
Sign off exactly:
Nelson
CEO, Cres Dynamics`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-goog-api-key': apiKey,
      },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 220,
        },
      }),
    }
  );

  if (!response.ok) return null;
  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  return typeof text === 'string' && text.trim() ? text.trim() : null;
}

export async function generateInquiryAutoReply(ctx: ReplyContext): Promise<string> {
  try {
    const groqApiKey = process.env.GROQ_API_KEY;
    if (groqApiKey) {
      const text = await replyWithGroq(ctx, groqApiKey);
      if (text) return text;
    }

    const geminiApiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_AI_API_KEY;
    if (geminiApiKey) {
      const text = await replyWithGemini(ctx, geminiApiKey);
      if (text) return text;
    }
  } catch (error) {
    console.error('generateInquiryAutoReply failed:', error);
  }

  return FALLBACK_REPLY(ctx);
}
