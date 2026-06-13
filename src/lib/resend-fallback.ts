import { Resend } from 'resend';

export type ResendEmailPayload = {
  from: string;
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string | string[];
  attachments?: Array<{ filename: string; content: string | Buffer }>;
};

function uniqueKeys(keys: Array<string | undefined>): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const key of keys) {
    const trimmed = key?.trim();
    if (!trimmed || seen.has(trimmed)) continue;
    seen.add(trimmed);
    out.push(trimmed);
  }
  return out;
}

/** Primary + fallback Resend keys (both used; second only if first fails). */
export function getResendApiKeys(): string[] {
  return uniqueKeys([process.env.RESEND_API_KEY, process.env.RESEND_API_KEY_FALLBACK]);
}

export function hasResendConfigured(): boolean {
  return getResendApiKeys().length > 0;
}

export async function sendResendEmail(
  payload: ResendEmailPayload
): Promise<{ sent: boolean; error?: string; keyUsed?: 'primary' | 'fallback' }> {
  const keys = getResendApiKeys();
  if (keys.length === 0) {
    return { sent: false, error: 'RESEND_API_KEY not configured' };
  }

  let lastError = 'Send failed';

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const label: 'primary' | 'fallback' = i === 0 ? 'primary' : 'fallback';
    try {
      const client = new Resend(key);
      const result = await client.emails.send(payload);
      if (result.error) {
        lastError = result.error.message;
        console.warn(`Resend ${label} key failed:`, result.error.message);
        continue;
      }
      if (label === 'fallback') {
        console.info('Resend email sent using fallback API key');
      }
      return { sent: true, keyUsed: label };
    } catch (err) {
      lastError = err instanceof Error ? err.message : 'Send failed';
      console.warn(`Resend ${label} key error:`, lastError);
    }
  }

  return { sent: false, error: lastError };
}
