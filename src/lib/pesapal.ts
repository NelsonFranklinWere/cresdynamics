import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const IPN_CACHE_FILE = join(process.cwd(), '.data', 'pesapal_ipn.json');

type PesapalTokenResponse = {
  token: string;
  expiryDate?: string;
  error?: unknown;
};

export type PesapalOrderStatus = {
  status_code?: number;
  payment_status_description?: string;
  status?: string;
  message?: string;
  [key: string]: unknown;
};

function getPesapalConfig() {
  const consumerKey = process.env.PESAPAL_CONSUMER_KEY;
  const consumerSecret = process.env.PESAPAL_CONSUMER_SECRET;
  const baseUrl = (process.env.PESAPAL_BASE_URL || 'https://pay.pesapal.com/v3').replace(/\/+$/, '');
  if (!consumerKey || !consumerSecret) {
    throw new Error('Missing PESAPAL_CONSUMER_KEY or PESAPAL_CONSUMER_SECRET');
  }
  return { consumerKey, consumerSecret, baseUrl };
}

function getAppBaseUrl() {
  return (process.env.APP_BASE_URL || 'http://159.223.137.21').replace(/\/+$/, '');
}

export function getPesapalIpnRegistrationUrl() {
  return process.env.PESAPAL_IPN_URL || `${getAppBaseUrl()}/api/payments/pesapal/ipn`;
}

export function getPesapalCallbackUrl() {
  return process.env.PESAPAL_CALLBACK_URL || `${getAppBaseUrl()}/api/payments/pesapal/callback`;
}

async function pesapalFetch<T>(path: string, init: RequestInit): Promise<T> {
  const { baseUrl } = getPesapalConfig();
  const res = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init.headers || {}),
    },
    cache: 'no-store',
  });
  const body = await res.json().catch(() => null);
  if (!res.ok) {
    const detail = body ? JSON.stringify(body) : `${res.status} ${res.statusText}`;
    throw new Error(`Pesapal API error (${path}): ${detail}`);
  }
  return body as T;
}

export async function getPesapalAuthToken(): Promise<string> {
  const { consumerKey, consumerSecret } = getPesapalConfig();
  const body = await pesapalFetch<PesapalTokenResponse>('/api/Auth/RequestToken', {
    method: 'POST',
    body: JSON.stringify({
      consumer_key: consumerKey,
      consumer_secret: consumerSecret,
    }),
  });
  if (!body?.token) {
    throw new Error('Pesapal token missing in response');
  }
  return body.token;
}

export async function registerPesapalIpn(ipnUrl: string, notificationType: 'GET' | 'POST' = 'POST') {
  const token = await getPesapalAuthToken();
  return pesapalFetch<Record<string, unknown>>('/api/URLSetup/RegisterIPN', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify({
      url: ipnUrl,
      ipn_notification_type: notificationType,
    }),
  });
}

function extractIpnId(result: Record<string, unknown>): string | null {
  const id =
    result.ipn_id ??
    result.ipnId ??
    (result as { data?: { ipn_id?: string } }).data?.ipn_id;
  return id != null ? String(id) : null;
}

async function readCachedIpnId(): Promise<string | null> {
  try {
    const raw = await readFile(IPN_CACHE_FILE, 'utf8');
    const parsed = JSON.parse(raw) as { ipnId?: string };
    return parsed.ipnId ?? null;
  } catch {
    return null;
  }
}

async function cacheIpnId(ipnId: string, ipnUrl: string): Promise<void> {
  await mkdir(join(process.cwd(), '.data'), { recursive: true });
  await writeFile(
    IPN_CACHE_FILE,
    JSON.stringify({ ipnId, ipnUrl, cachedAt: new Date().toISOString() }, null, 2),
    'utf8'
  );
}

/** Resolves Pesapal notification_id from env, cache, or live IPN registration. */
export async function resolvePesapalNotificationId(): Promise<string> {
  if (process.env.PESAPAL_IPN_ID) {
    return process.env.PESAPAL_IPN_ID;
  }

  const cached = await readCachedIpnId();
  if (cached) return cached;

  const ipnUrl = getPesapalIpnRegistrationUrl();
  const result = await registerPesapalIpn(ipnUrl, 'POST');
  const ipnId = extractIpnId(result);
  if (!ipnId) {
    throw new Error(
      'Pesapal IPN registration did not return an ipn_id. Set PESAPAL_IPN_ID in .env.local or call POST /api/payments/pesapal/register-ipn.'
    );
  }

  await cacheIpnId(ipnId, ipnUrl);
  console.info('[pesapal] Registered IPN; cached ipn_id in .data/pesapal_ipn.json — add PESAPAL_IPN_ID=%s to .env.local for production.', ipnId);
  return ipnId;
}

export type SubmitPesapalOrderInput = {
  amountKes: number;
  description: string;
  userFirstName: string;
  userLastName: string;
  email: string;
  phoneNumber: string;
  merchantReference: string;
  notificationId: string;
  callbackUrl?: string;
};

export async function submitPesapalOrder(input: SubmitPesapalOrderInput) {
  const token = await getPesapalAuthToken();
  const body = await pesapalFetch<Record<string, unknown>>('/api/Transactions/SubmitOrderRequest', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify({
      id: input.merchantReference,
      currency: 'KES',
      amount: input.amountKes,
      description: input.description,
      callback_url: input.callbackUrl || getPesapalCallbackUrl(),
      notification_id: input.notificationId,
      billing_address: {
        email_address: input.email,
        phone_number: input.phoneNumber,
        first_name: input.userFirstName,
        last_name: input.userLastName || '-',
      },
    }),
  });

  const err = body.error as Record<string, unknown> | undefined;
  if (err?.message) {
    const msg = String(err.message);
    if (err.code === 'amount_exceeds_default_limit') {
      throw new Error(
        `${msg} Your Pesapal merchant account must allow KES ${input.amountKes} per transaction — contact Pesapal support to raise the limit.`
      );
    }
    throw new Error(msg);
  }

  return body;
}

export async function getPesapalTransactionStatus(orderTrackingId: string) {
  const token = await getPesapalAuthToken();
  const { baseUrl } = getPesapalConfig();
  const res = await fetch(
    `${baseUrl}/api/Transactions/GetTransactionStatus?orderTrackingId=${encodeURIComponent(orderTrackingId)}`,
    {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
      cache: 'no-store',
    }
  );
  const body = await res.json().catch(() => null);
  if (!res.ok) {
    const detail = body ? JSON.stringify(body) : `${res.status} ${res.statusText}`;
    throw new Error(`Pesapal status error: ${detail}`);
  }
  return body as PesapalOrderStatus;
}
