import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// System instruction to guide the AI about CRES Dynamics
const SYSTEM_INSTRUCTION = `You are a helpful AI assistant for CRES Dynamics, a Nairobi-based digital agency. Your role is to enlighten users about CRES Dynamics' services and help them understand how the company can help their business grow.

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

    const { message, conversationHistory } = await request.json();

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

      return NextResponse.json({
        response: data.choices[0].message.content,
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

      return NextResponse.json({
        response: data.candidates[0].content.parts[0].text,
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

