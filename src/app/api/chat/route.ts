import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// System prompt to guide the AI about CRES Dynamics
const SYSTEM_PROMPT = `You are a helpful AI assistant for CRES Dynamics, a Nairobi-based digital agency. Your role is to enlighten users about CRES Dynamics' services and help them understand how the company can help their business grow.

Key Information about CRES Dynamics:
- CRES Dynamics is a digital agency based in Nairobi, Kenya
- They specialize in: Website Development, SEO & Google Visibility, AI & Sales Automation, WhatsApp Business Systems, Content & Brand Authority, and Digital Strategy Consulting
- Their mission: Help Nairobi businesses turn clicks into clients
- They offer free strategy sessions
- They focus on building growth systems, not just templates
- They understand the African business market
- Contact: info@cresdynamics.com, Phone: +254 708 805 496 or +254 743 869 564
- Location: Kivuli Tower, 3rd Floor Westlands, Nairobi, Kenya

Your responses should:
1. Be helpful, friendly, and professional
2. Focus on educating users about CRES Dynamics services
3. Explain how their services can help businesses grow
4. Be concise but informative
5. Encourage users to book a free strategy session if they're interested
6. Always mention that they can contact CRES Dynamics directly for more information

Keep responses conversational and avoid being overly salesy. Focus on education and value.`;

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.GROK_API_KEY) {
      console.error('GROK_API_KEY is not configured');
      return NextResponse.json(
        { error: 'AI service is not configured' },
        { status: 500 }
      );
    }

    const { message, conversationHistory } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Build conversation messages for Grok API
    const messages = [
      {
        role: 'system',
        content: SYSTEM_PROMPT,
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

    // Call Grok API
    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GROK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'grok-beta', // or 'grok-2-1212' depending on available models
        messages: messages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Grok API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to get AI response' },
        { status: response.status }
      );
    }

    const data = await response.json();

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      return NextResponse.json(
        { error: 'Invalid response from AI' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      response: data.choices[0].message.content,
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

