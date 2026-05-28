type ReplyContext = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  details: string;
};

const FALLBACK_REPLY = (ctx: ReplyContext) =>
  [
    `Hi ${ctx.name},`,
    '',
    `Thanks for reaching out about "${ctx.subject}". We have received your message and logged it with our team.`,
    'A specialist from Cres Dynamics will review your requirements and get back to you shortly with clear next steps.',
    '',
    'If you want to add context, just reply to this email.',
    '',
    'Cres Dynamics',
  ].join('\n');

function sanitize(input: string, max = 1200): string {
  return input.replace(/\s+/g, ' ').trim().slice(0, max);
}

async function replyWithGroq(ctx: ReplyContext, apiKey: string): Promise<string | null> {
  const system =
    'You write concise client acknowledgement emails for Cres Dynamics. Tone: professional, warm, brief, no hype. 5-8 short lines max.';
  const prompt = `Client name: ${sanitize(ctx.name, 80)}
Client email: ${sanitize(ctx.email, 160)}
Client phone: ${sanitize(ctx.phone || 'Not provided', 80)}
Subject: ${sanitize(ctx.subject, 220)}
Details: ${sanitize(ctx.details, 900)}

Write only the body text. Include:
- acknowledgement
- that team will review and respond
- invite them to reply with extra context
- sign off as "Cres Dynamics".`;

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
  const prompt = `Write a concise email reply body for a website inquiry.
Client: ${sanitize(ctx.name, 80)}
Subject: ${sanitize(ctx.subject, 220)}
Details: ${sanitize(ctx.details, 900)}

Style: professional, clear, Kenyan business context, no exaggerated promises.
Length: 5-8 short lines.
Close with "Cres Dynamics".`;

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
