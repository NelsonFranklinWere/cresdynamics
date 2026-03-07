import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Optional email client for chat-triggered actions
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// System instruction: CRES website + Nairobi/market + pricing (no price before problem) + email with booked session
const SYSTEM_INSTRUCTION = `You are the CRES Dynamics website chat assistant.

Company (from website):
- CRES Dynamics is a systems engineering and digital agency based in Nairobi, Kenya (Kivuli Tower, 3rd Floor Westlands).
- They build: Websites (professional, mobile-optimised, WhatsApp integration), SEO & Google visibility, AI & Sales Automation, WhatsApp Business systems, Content & Brand authority, and Digital Strategy Consulting.
- CresOS: business operations platform (operations, finance, client & team management, analytics, Mpesa). Tiers: Starter (website), Growth (CresOS Business), Scale (Full ERP), Enterprise (custom). Also custom ERP systems, finance platforms, operations/workflow systems, automation.
- Mission: Help Nairobi and Kenyan businesses turn clicks into clients; build growth systems, not just templates. Free strategy/discovery sessions (no pitch, 20 min). Contact: info@cresdynamics.com, +254 708 805 496, +254 743 869 564.

Nairobi / Kenya market (use when relevant):
- Many SMEs need better online visibility, lead generation, and integrated systems. CRES focuses on local context: Mpesa, WhatsApp; discovery session required to align scope and investment; pricing customised per business.

Pricing (strict): Do NOT quote specific prices (KES or package prices) until the visitor has clearly described the core problem they want to solve or the outcome they need. First understand what they want to achieve or what is not working; only then may you mention options (Starter, Growth, Scale, Enterprise) and that investment is customised after a strategy call. Do not give numbers before the problem is discussed.

Response style:
- Keep answers short, clear, and practical.
- Maximum 3 short paragraphs or bullet lists, no long essays.
- Go straight to the point, avoid repeating yourself.
- Do NOT tell users to go and book themselves; instead, offer to arrange a call or follow-up from the CRES team.

Actions you can trigger:
- When a user shows serious interest (e.g. asks for help, pricing, proposal, or how to start), ask if they’d like a call or WhatsApp follow-up.
- Confirm rough timing with them (e.g. “today”, “tomorrow”, or a day next week, plus preferred time window).
- Once they clearly agree to be contacted, notify the CRES team by including an action in your JSON response with type "send_email_to_team".
- In the action include "summary" (what they need, key points), "preferredDay", "preferredTime", and "channel" (call or WhatsApp) so the team gets the booked session details.

Response format (very important):
- ALWAYS respond ONLY as minified JSON (no markdown, no extra text). Shape:
  {"reply":"SHORT_TEXT_RESPONSE","actions":[{"type":"send_email_to_team","subject":"EMAIL_SUBJECT","summary":"WHAT_THE_USER_WANTS_AND_KEY_POINTS","preferredDay":"DAY_OR_DATE","preferredTime":"TIME_WINDOW","channel":"call_or_WhatsApp"}]}
- Use [] for actions when there is no follow-up. Only include "send_email_to_team" when the user has agreed to be contacted and you have confirmed at least rough day and time.`;

type ClientDetails = {
  name?: string;
  phone?: string;
  email?: string;
};

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

type AssistantAction = {
  type: 'send_email_to_team';
  subject?: string;
  summary?: string;
  preferredDay?: string;
  preferredTime?: string;
  channel?: string;
};

type ParsedAssistantResponse = {
  reply: string;
  actions: AssistantAction[];
};

function parseAssistantContent(raw: string): ParsedAssistantResponse {
  const text = raw.trim();

  // Strip markdown fences if the model accidentally adds them
  let cleaned = text;
  if (cleaned.startsWith('```')) {
    const withoutStart = cleaned.replace(/^```[a-zA-Z]*\n?/, '');
    const endFenceIndex = withoutStart.lastIndexOf('```');
    cleaned = endFenceIndex >= 0 ? withoutStart.slice(0, endFenceIndex) : withoutStart;
  }

  try {
    const parsed = JSON.parse(cleaned);
    const reply =
      typeof parsed.reply === 'string' && parsed.reply.trim().length > 0
        ? parsed.reply.trim()
        : cleaned;
    const actions = Array.isArray(parsed.actions)
      ? parsed.actions
          .filter((a: any) => a && a.type === 'send_email_to_team')
          .map((a: any) => ({
            type: 'send_email_to_team' as const,
            subject: a.subject,
            summary: a.summary,
            preferredDay: a.preferredDay,
            preferredTime: a.preferredTime,
            channel: a.channel,
          }))
      : [];

    return {
      reply,
      actions,
    };
  } catch {
    // Fallback: treat entire text as the reply with no actions
    return {
      reply: cleaned,
      actions: [],
    };
  }
}

async function executeActions(
  actions: AssistantAction[],
  opts: { clientDetails?: ClientDetails; latestUserMessage: string; conversationHistory?: ChatMessage[] }
) {
  if (!actions.length || !resend) return;

  const recipientEmail = 'cresdynamics@gmail.com';
  const senderEmail = process.env.SENDER_EMAIL || 'onboarding@resend.dev';

  // Build a short transcript from recent messages, including the latest user message
  let transcriptHtml = '';
  try {
    const history: ChatMessage[] = Array.isArray(opts.conversationHistory)
      ? opts.conversationHistory
      : [];
    const combined: ChatMessage[] = [
      ...history.slice(-8), // last few messages before the latest input
      { role: 'user', content: opts.latestUserMessage },
    ];

    if (combined.length) {
      const lines = combined.map((m) => {
        const who = m.role === 'user' ? 'Client' : 'Assistant';
        const safeContent = (m.content || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return `<li><strong>${who}:</strong> ${safeContent}</li>`;
      });
      transcriptHtml = `
        <h3 style="color:#0D1B2A; margin-top:20px;">Conversation summary</h3>
        <ul style="color:#333; padding-left:18px; list-style-type:disc;">
          ${lines.join('')}
        </ul>
      `;
    }
  } catch (e) {
    console.error('Failed to build transcript HTML for chat action email:', e);
  }

  for (const action of actions) {
    if (action.type !== 'send_email_to_team') continue;

    const subject =
      action.subject ||
      `New chat follow-up request from ${opts.clientDetails?.name || 'website visitor'}`;
    const summary = action.summary || opts.latestUserMessage;
    const day = (action.preferredDay || '').trim();
    const time = (action.preferredTime || '').trim();
    const channel = (action.channel || '').trim();
    const hasBookedSession = day || time || channel;

    const bookedSessionHtml = hasBookedSession
      ? `
            <h3 style="color:#0D1B2A; margin-top:20px;">📅 Booked session (day &amp; time)</h3>
            <div style="background:#e8f5f3; border-left:4px solid #1E7C88; padding:14px 18px; margin:10px 0; border-radius:6px;">
              <p style="margin:0; color:#333;"><strong>Day/date:</strong> ${day || 'Not specified'}</p>
              <p style="margin:6px 0 0 0; color:#333;"><strong>Time window:</strong> ${time || 'Not specified'}</p>
              <p style="margin:6px 0 0 0; color:#333;"><strong>Channel:</strong> ${channel || 'Not specified'}</p>
            </div>
            `
      : '';

    try {
      await resend.emails.send({
        from: `CRES Dynamics Chat Assistant <${senderEmail}>`,
        to: [recipientEmail],
        subject,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
            <h2 style="color: #0D1B2A;">Chat follow-up requested from website</h2>
            <p style="color:#333;">The visitor asked the AI assistant to have the CRES team follow up.</p>
            <h3 style="color:#0D1B2A; margin-top:20px;">Visitor details</h3>
            <ul style="color:#333; padding-left:18px;">
              <li><strong>Name:</strong> ${opts.clientDetails?.name || 'Not provided'}</li>
              <li><strong>Phone:</strong> ${opts.clientDetails?.phone || 'Not provided'}</li>
              <li><strong>Email:</strong> ${opts.clientDetails?.email || 'Not provided'}</li>
            </ul>
            ${bookedSessionHtml}
            <h3 style="color:#0D1B2A; margin-top:20px;">Summary of request</h3>
            <p style="color:#333; white-space:pre-line;">${(summary || '').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
            ${transcriptHtml}
            <p style="margin-top:24px; font-size:12px; color:#666;">
              This email was generated automatically from a chat conversation on the CRES Dynamics website.
            </p>
          </div>
        `,
      });
    } catch (error) {
      console.error('Failed to execute chat action (send_email_to_team):', error);
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured (try Groq first, then Gemini)
    const groqApiKey = process.env.GROQ_API_KEY;
    const geminiApiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_AI_API_KEY;
    
    if (!groqApiKey && !geminiApiKey) {
      console.error('No AI API key configured (GROQ_API_KEY or GEMINI_API_KEY)');
      return NextResponse.json(
        { error: 'AI service is not configured' },
        { status: 500 }
      );
    }

    const { message, conversationHistory, clientDetails } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Use Groq if available (faster and more reliable free tier), otherwise use Gemini
    if (groqApiKey) {
      // Build conversation messages for Groq API (OpenAI-compatible format)
      const messages = [
        {
          role: 'system',
          content: SYSTEM_INSTRUCTION,
        },
        // Add conversation history (last 10 messages to avoid token limits)
        ...(conversationHistory || [])
          .slice(-10)
          .map((msg: { role: string; content: string }) => ({
            role: msg.role === 'user' ? 'user' : 'assistant',
            content: msg.content,
          })),
        {
          role: 'user',
          content: message,
        },
      ];

      // Call Groq API (OpenAI-compatible)
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${groqApiKey}`,
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant', // Fast and free model
          messages: messages,
          temperature: 0.7,
          max_tokens: 500,
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Groq API error:', errorData);
        return NextResponse.json(
          { error: 'Failed to get AI response from Groq' },
          { status: response.status }
        );
      }

      const data = await response.json();

      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        console.error('Invalid Groq response:', data);
        return NextResponse.json(
          { error: 'Invalid response from AI' },
          { status: 500 }
        );
      }

      const assistantText = data.choices[0].message.content as string;
      const parsed = parseAssistantContent(assistantText);
      await executeActions(parsed.actions, {
        clientDetails,
        latestUserMessage: message,
        conversationHistory: (conversationHistory || []) as ChatMessage[],
      });

      return NextResponse.json({
        response: parsed.reply,
      });
    } else {
      // Fallback to Gemini API
      // Build conversation contents for Gemini API
      const contents = [];
      const history = (conversationHistory || []).slice(-10);
      
      for (let i = 0; i < history.length; i++) {
        const msg = history[i];
        contents.push({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }],
        });
      }

      contents.push({
        role: 'user',
        parts: [{ text: message }],
      });

      const model = 'gemini-2.0-flash';
      const requestBody: any = {
        contents: contents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 500,
        },
        systemInstruction: {
          parts: [{ text: SYSTEM_INSTRUCTION }],
        },
      };

      if (!geminiApiKey) {
        return NextResponse.json(
          { error: 'Gemini API key not configured' },
          { status: 500 }
        );
      }

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-goog-api-key': geminiApiKey,
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Gemini API error:', errorData);
        
        let errorMessage = 'Failed to get AI response';
        try {
          const errorJson = JSON.parse(errorData);
          if (errorJson.error?.message) {
            errorMessage = errorJson.error.message;
            if (errorJson.error.code === 429 || errorMessage.includes('quota')) {
              errorMessage = 'API quota exceeded. Please try again later or contact support.';
            }
          }
        } catch (e) {
          // Keep default error message
        }
        
        return NextResponse.json(
          { error: errorMessage },
          { status: response.status }
        );
      }

      const data = await response.json();

      if (
        !data.candidates ||
        !data.candidates[0] ||
        !data.candidates[0].content ||
        !data.candidates[0].content.parts ||
        !data.candidates[0].content.parts[0]
      ) {
        console.error('Invalid Gemini response:', data);
        return NextResponse.json(
          { error: 'Invalid response from AI' },
          { status: 500 }
        );
      }

      const assistantText = data.candidates[0].content.parts[0].text as string;
      const parsed = parseAssistantContent(assistantText);
      await executeActions(parsed.actions, {
        clientDetails,
        latestUserMessage: message,
        conversationHistory: (conversationHistory || []) as ChatMessage[],
      });

      return NextResponse.json({
        response: parsed.reply,
      });
    }
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

