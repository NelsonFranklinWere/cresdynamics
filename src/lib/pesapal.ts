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
  return pesapalFetch<Record<string, unknown>>('/api/Transactions/SubmitOrderRequest', {
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
