import { Pool } from 'pg';

let pool: Pool | null = null;

export function getPool(): Pool | null {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  if (!pool) {
    pool = new Pool({
      connectionString: url,
      max: 10,
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 10_000,
    });
  }
  return pool;
}

export type ContactLeadInput = {
  fullName: string;
  email: string;
  contactPhone: string;
  projectTitle: string;
  projectDetail: string;
  subscribe: boolean;
};

export async function insertContactLead(input: ContactLeadInput): Promise<number | null> {
  const p = getPool();
  if (!p) return null;
  const r = await p.query(
    `INSERT INTO contact_leads (full_name, email, contact_phone, project_title, project_detail, subscribe)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING id`,
    [
      input.fullName,
      input.email,
      input.contactPhone,
      input.projectTitle,
      input.projectDetail,
      input.subscribe,
    ]
  );
  return Number(r.rows[0].id);
}

export type ContactLeadRow = {
  id: number;
  fullName: string;
  email: string;
  contactPhone: string;
  projectTitle: string;
  projectDetail: string;
  subscribe: boolean;
  createdAt: string; // ISO
};

export async function listContactLeads(limit = 200): Promise<ContactLeadRow[]> {
  const p = getPool();
  if (!p) return [];
  const r = await p.query(
    `
    select id, full_name, email, contact_phone, project_title, project_detail, subscribe, created_at
    from contact_leads
    order by created_at desc
    limit $1
    `,
    [limit]
  );
  return r.rows.map((row) => ({
    id: Number(row.id),
    fullName: String(row.full_name),
    email: String(row.email),
    contactPhone: String(row.contact_phone),
    projectTitle: String(row.project_title),
    projectDetail: String(row.project_detail),
    subscribe: Boolean(row.subscribe),
    createdAt: new Date(row.created_at).toISOString(),
  }));
}

export type CareerApplicationInput = {
  fullName: string;
  email: string;
  phone: string;
  role: string;
  linkedin: string;
  portfolio: string;
  experienceSummary: string;
  whyCres: string;
  /** Original CV filename when a file was uploaded (stored in email; DB stores name only). */
  cvOriginalFilename?: string | null;
};

export async function insertCareerApplication(input: CareerApplicationInput): Promise<number | null> {
  const p = getPool();
  if (!p) return null;
  const r = await p.query(
    `INSERT INTO career_applications (full_name, email, phone, role, linkedin, portfolio, experience_summary, why_cres, cv_original_filename)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
     RETURNING id`,
    [
      input.fullName,
      input.email,
      input.phone || null,
      input.role,
      input.linkedin || null,
      input.portfolio || null,
      input.experienceSummary,
      input.whyCres,
      input.cvOriginalFilename ?? null,
    ]
  );
  return Number(r.rows[0].id);
}

export type CareerApplicationRow = {
  id: number;
  fullName: string;
  email: string;
  phone: string | null;
  role: string;
  linkedin: string | null;
  portfolio: string | null;
  experienceSummary: string;
  whyCres: string;
  cvOriginalFilename: string | null;
  createdAt: string; // ISO
};

export async function listCareerApplications(limit = 200): Promise<CareerApplicationRow[]> {
  const p = getPool();
  if (!p) return [];
  const r = await p.query(
    `
    select
      id,
      full_name,
      email,
      phone,
      role,
      linkedin,
      portfolio,
      experience_summary,
      why_cres,
      cv_original_filename,
      created_at
    from career_applications
    order by created_at desc
    limit $1
    `,
    [limit]
  );
  return r.rows.map((row) => ({
    id: Number(row.id),
    fullName: String(row.full_name),
    email: String(row.email),
    phone: row.phone ? String(row.phone) : null,
    role: String(row.role),
    linkedin: row.linkedin ? String(row.linkedin) : null,
    portfolio: row.portfolio ? String(row.portfolio) : null,
    experienceSummary: String(row.experience_summary),
    whyCres: String(row.why_cres),
    cvOriginalFilename: row.cv_original_filename ? String(row.cv_original_filename) : null,
    createdAt: new Date(row.created_at).toISOString(),
  }));
}

export type EventReservationInput = {
  eventTitle: string;
  eventDate: string;
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  company?: string;
  ticketType?: string;
  attendanceType?: string;
};

export async function insertEventReservation(
  input: EventReservationInput
): Promise<number | null> {
  const p = getPool();
  if (!p) return null;

  const r = await p.query(
    `
    INSERT INTO event_reservations
      (event_title, event_date, first_name, last_name, email, phone, company, ticket_type, attendance_type)
    VALUES
      ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    ON CONFLICT (event_title, event_date, email) DO UPDATE SET
      last_name = EXCLUDED.last_name,
      phone = EXCLUDED.phone,
      company = EXCLUDED.company,
      ticket_type = EXCLUDED.ticket_type,
      attendance_type = EXCLUDED.attendance_type,
      updated_at = now()
    RETURNING id
    `,
    [
      input.eventTitle,
      input.eventDate,
      input.firstName,
      input.lastName ?? null,
      input.email,
      input.phone ?? null,
      input.company ?? null,
      input.ticketType ?? null,
      input.attendanceType ?? null,
    ]
  );

  return Number(r.rows[0].id);
}

export type EventReservationRow = {
  id: number;
  eventTitle: string;
  eventDate: string;
  firstName: string;
  lastName: string | null;
  email: string;
  phone: string | null;
  company: string | null;
  ticketType: string | null;
  attendanceType: string | null;
  createdAt: string; // ISO
  updatedAt: string; // ISO
};

export async function listEventReservations(limit = 200): Promise<EventReservationRow[]> {
  const p = getPool();
  if (!p) return [];
  const r = await p.query(
    `
    select
      id,
      event_title,
      event_date,
      first_name,
      last_name,
      email,
      phone,
      company,
      ticket_type,
      attendance_type,
      created_at,
      updated_at
    from event_reservations
    order by created_at desc
    limit $1
    `,
    [limit]
  );
  return r.rows.map((row) => ({
    id: Number(row.id),
    eventTitle: String(row.event_title),
    eventDate: String(row.event_date),
    firstName: String(row.first_name),
    lastName: row.last_name ? String(row.last_name) : null,
    email: String(row.email),
    phone: row.phone ? String(row.phone) : null,
    company: row.company ? String(row.company) : null,
    ticketType: row.ticket_type ? String(row.ticket_type) : null,
    attendanceType: row.attendance_type ? String(row.attendance_type) : null,
    createdAt: new Date(row.created_at).toISOString(),
    updatedAt: new Date(row.updated_at).toISOString(),
  }));
}

export type PaymentRow = {
  id: number;
  source: string;
  reference: string | null;
  providerTrackingId: string | null;
  merchantReference: string | null;
  paymentLinkToken: string | null;
  paymentLinkActive: boolean;
  email: string | null;
  phone: string | null;
  amountKes: number | null;
  currency: string;
  status: string;
  purpose: string | null;
  eventTitle: string | null;
  eventDate: string | null;
  metadata: Record<string, unknown> | null;
  updatedAt: string; // ISO
  createdAt: string; // ISO
};

export async function listPayments(limit = 200): Promise<PaymentRow[]> {
  const p = getPool();
  if (!p) return [];
  const r = await p.query(
    `
    select
      id,
      source,
      reference,
      provider_tracking_id,
      merchant_reference,
      payment_link_token,
      payment_link_active,
      email,
      phone,
      amount_kes,
      currency,
      status,
      purpose,
      event_title,
      event_date,
      metadata_json,
      updated_at,
      created_at
    from payments
    order by created_at desc
    limit $1
    `,
    [limit]
  );
  return r.rows.map((row) => ({
    id: Number(row.id),
    source: String(row.source),
    reference: row.reference ? String(row.reference) : null,
    providerTrackingId: row.provider_tracking_id ? String(row.provider_tracking_id) : null,
    merchantReference: row.merchant_reference ? String(row.merchant_reference) : null,
    paymentLinkToken: row.payment_link_token ? String(row.payment_link_token) : null,
    paymentLinkActive: Boolean(row.payment_link_active),
    email: row.email ? String(row.email) : null,
    phone: row.phone ? String(row.phone) : null,
    amountKes: row.amount_kes === null || row.amount_kes === undefined ? null : Number(row.amount_kes),
    currency: String(row.currency),
    status: String(row.status),
    purpose: row.purpose ? String(row.purpose) : null,
    eventTitle: row.event_title ? String(row.event_title) : null,
    eventDate: row.event_date ? String(row.event_date) : null,
    metadata: row.metadata_json && typeof row.metadata_json === 'object'
      ? (row.metadata_json as Record<string, unknown>)
      : null,
    updatedAt: new Date(row.updated_at).toISOString(),
    createdAt: new Date(row.created_at).toISOString(),
  }));
}

export type CreatePaymentInput = {
  source: string;
  reference?: string | null;
  providerTrackingId?: string | null;
  merchantReference?: string | null;
  paymentLinkToken?: string | null;
  paymentLinkActive?: boolean;
  email?: string | null;
  phone?: string | null;
  amountKes?: number | null;
  currency?: string;
  status?: string;
  purpose?: string | null;
  eventTitle?: string | null;
  eventDate?: string | null;
  metadata?: Record<string, unknown> | null;
};

export async function createPayment(input: CreatePaymentInput): Promise<number | null> {
  const p = getPool();
  if (!p) return null;
  const r = await p.query(
    `
    INSERT INTO payments
      (source, reference, provider_tracking_id, merchant_reference, payment_link_token, payment_link_active, email, phone, amount_kes, currency, status, purpose, event_title, event_date, metadata_json, updated_at)
    VALUES
      ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, now())
    RETURNING id
    `,
    [
      input.source,
      input.reference ?? null,
      input.providerTrackingId ?? null,
      input.merchantReference ?? null,
      input.paymentLinkToken ?? null,
      input.paymentLinkActive ?? true,
      input.email ?? null,
      input.phone ?? null,
      input.amountKes ?? null,
      input.currency ?? 'KES',
      input.status ?? 'pending',
      input.purpose ?? null,
      input.eventTitle ?? null,
      input.eventDate ?? null,
      input.metadata ?? null,
    ]
  );
  return Number(r.rows[0].id);
}

export type UpdatePaymentStatusInput = {
  status: string;
  providerTrackingId?: string | null;
  merchantReference?: string | null;
  reference?: string | null;
  metadata?: Record<string, unknown> | null;
};

export async function updatePaymentStatus(input: UpdatePaymentStatusInput): Promise<void> {
  const p = getPool();
  if (!p) return;
  await p.query(
    `
    UPDATE payments
    SET status = $1,
        payment_link_active = CASE WHEN $1 = 'paid' THEN false ELSE payment_link_active END,
        metadata_json = COALESCE($2, metadata_json),
        updated_at = now()
    WHERE
      ($3::text IS NOT NULL AND provider_tracking_id = $3)
      OR ($4::text IS NOT NULL AND merchant_reference = $4)
      OR ($5::text IS NOT NULL AND reference = $5)
    `,
    [
      input.status,
      input.metadata ?? null,
      input.providerTrackingId ?? null,
      input.merchantReference ?? null,
      input.reference ?? null,
    ]
  );
}

export async function getPaymentByLinkToken(token: string): Promise<PaymentRow | null> {
  const p = getPool();
  if (!p) return null;
  const r = await p.query(
    `
    select
      id,
      source,
      reference,
      provider_tracking_id,
      merchant_reference,
      payment_link_token,
      payment_link_active,
      email,
      phone,
      amount_kes,
      currency,
      status,
      purpose,
      event_title,
      event_date,
      metadata_json,
      updated_at,
      created_at
    from payments
    where payment_link_token = $1
    limit 1
    `,
    [token]
  );
  if (r.rows.length === 0) return null;
  const row = r.rows[0];
  return {
    id: Number(row.id),
    source: String(row.source),
    reference: row.reference ? String(row.reference) : null,
    providerTrackingId: row.provider_tracking_id ? String(row.provider_tracking_id) : null,
    merchantReference: row.merchant_reference ? String(row.merchant_reference) : null,
    paymentLinkToken: row.payment_link_token ? String(row.payment_link_token) : null,
    paymentLinkActive: Boolean(row.payment_link_active),
    email: row.email ? String(row.email) : null,
    phone: row.phone ? String(row.phone) : null,
    amountKes: row.amount_kes === null || row.amount_kes === undefined ? null : Number(row.amount_kes),
    currency: String(row.currency),
    status: String(row.status),
    purpose: row.purpose ? String(row.purpose) : null,
    eventTitle: row.event_title ? String(row.event_title) : null,
    eventDate: row.event_date ? String(row.event_date) : null,
    metadata: row.metadata_json && typeof row.metadata_json === 'object'
      ? (row.metadata_json as Record<string, unknown>)
      : null,
    updatedAt: new Date(row.updated_at).toISOString(),
    createdAt: new Date(row.created_at).toISOString(),
  };
}

export type AttachCheckoutDetailsInput = {
  paymentId: number;
  email: string;
  phone: string;
  merchantReference: string;
  providerTrackingId?: string | null;
  metadata?: Record<string, unknown> | null;
};

export async function attachPaymentCheckoutDetails(input: AttachCheckoutDetailsInput): Promise<void> {
  const p = getPool();
  if (!p) return;
  await p.query(
    `
    update payments
    set email = $2,
        phone = $3,
        merchant_reference = $4,
        provider_tracking_id = $5,
        status = 'pending',
        metadata_json = COALESCE($6, metadata_json),
        updated_at = now()
    where id = $1
    `,
    [
      input.paymentId,
      input.email,
      input.phone,
      input.merchantReference,
      input.providerTrackingId ?? null,
      input.metadata ?? null,
    ]
  );
}

export async function getPaymentByReferences(
  providerTrackingId?: string | null,
  merchantReference?: string | null,
  reference?: string | null
): Promise<PaymentRow | null> {
  const p = getPool();
  if (!p) return null;
  const r = await p.query(
    `
    select
      id,
      source,
      reference,
      provider_tracking_id,
      merchant_reference,
      payment_link_token,
      payment_link_active,
      email,
      phone,
      amount_kes,
      currency,
      status,
      purpose,
      event_title,
      event_date,
      metadata_json,
      updated_at,
      created_at
    from payments
    where
      ($1::text is not null and provider_tracking_id = $1)
      or ($2::text is not null and merchant_reference = $2)
      or ($3::text is not null and reference = $3)
    order by created_at desc
    limit 1
    `,
    [providerTrackingId ?? null, merchantReference ?? null, reference ?? null]
  );
  if (r.rows.length === 0) return null;
  const row = r.rows[0];
  return {
    id: Number(row.id),
    source: String(row.source),
    reference: row.reference ? String(row.reference) : null,
    providerTrackingId: row.provider_tracking_id ? String(row.provider_tracking_id) : null,
    merchantReference: row.merchant_reference ? String(row.merchant_reference) : null,
    paymentLinkToken: row.payment_link_token ? String(row.payment_link_token) : null,
    paymentLinkActive: Boolean(row.payment_link_active),
    email: row.email ? String(row.email) : null,
    phone: row.phone ? String(row.phone) : null,
    amountKes: row.amount_kes === null || row.amount_kes === undefined ? null : Number(row.amount_kes),
    currency: String(row.currency),
    status: String(row.status),
    purpose: row.purpose ? String(row.purpose) : null,
    eventTitle: row.event_title ? String(row.event_title) : null,
    eventDate: row.event_date ? String(row.event_date) : null,
    metadata:
      row.metadata_json && typeof row.metadata_json === 'object'
        ? (row.metadata_json as Record<string, unknown>)
        : null,
    updatedAt: new Date(row.updated_at).toISOString(),
    createdAt: new Date(row.created_at).toISOString(),
  };
}

export async function updatePaymentMetadataById(
  paymentId: number,
  metadata: Record<string, unknown>
): Promise<void> {
  const p = getPool();
  if (!p) return;
  await p.query(
    `
    update payments
    set metadata_json = $2,
        updated_at = now()
    where id = $1
    `,
    [paymentId, metadata]
  );
}

export type ChatLeadSessionInput = {
  sessionPublicId: string;
  visitorName: string;
  phone: string;
  email: string | null;
  pageUrl: string | null;
  userAgent: string | null;
};

export async function upsertChatSessionFromLead(input: ChatLeadSessionInput): Promise<void> {
  const p = getPool();
  if (!p) return;
  await p.query(
    `INSERT INTO chat_sessions (session_public_id, visitor_name, phone, email, page_url, user_agent, last_message_at)
     VALUES ($1, $2, $3, $4, $5, $6, now())
     ON CONFLICT (session_public_id) DO UPDATE SET
       visitor_name = EXCLUDED.visitor_name,
       phone = EXCLUDED.phone,
       email = EXCLUDED.email,
       page_url = EXCLUDED.page_url,
       user_agent = EXCLUDED.user_agent,
       last_message_at = now()`,
    [
      input.sessionPublicId,
      input.visitorName,
      input.phone,
      input.email,
      input.pageUrl,
      input.userAgent,
    ]
  );
}

export async function ensureChatSession(sessionPublicId: string): Promise<void> {
  const p = getPool();
  if (!p) return;
  await p.query(
    `INSERT INTO chat_sessions (session_public_id) VALUES ($1)
     ON CONFLICT (session_public_id) DO NOTHING`,
    [sessionPublicId]
  );
}

export async function insertChatMessage(
  sessionPublicId: string,
  role: 'user' | 'assistant',
  content: string
): Promise<void> {
  const p = getPool();
  if (!p) return;
  await p.query(`INSERT INTO chat_messages (session_public_id, role, content) VALUES ($1, $2, $3)`, [
    sessionPublicId,
    role,
    content,
  ]);
  await p.query(`UPDATE chat_sessions SET last_message_at = now() WHERE session_public_id = $1`, [
    sessionPublicId,
  ]);
}

/** First assistant greeting once per session (avoids duplicates if lead form is resubmitted). */
export async function insertFrankGreetingIfEmpty(
  sessionPublicId: string,
  greeting: string
): Promise<void> {
  const p = getPool();
  if (!p) return;
  await p.query(
    `INSERT INTO chat_messages (session_public_id, role, content)
     SELECT $1, 'assistant', $2
     WHERE NOT EXISTS (SELECT 1 FROM chat_messages WHERE session_public_id = $1)`,
    [sessionPublicId, greeting]
  );
  await p.query(`UPDATE chat_sessions SET last_message_at = now() WHERE session_public_id = $1`, [
    sessionPublicId,
  ]);
}

export type SpeakerApplicationInput = {
  fullName: string;
  email: string;
  phone: string;
  company?: string | null;
  topic: string;
  linkedin?: string | null;
  audienceWhy: string;
  bioPdfFilename: string;
  imageFilename: string;
};

export async function insertSpeakerApplication(input: SpeakerApplicationInput): Promise<number | null> {
  const p = getPool();
  if (!p) return null;
  const r = await p.query(
    `
    INSERT INTO speaker_applications
      (full_name, email, phone, company, topic, linkedin, audience_why, bio_pdf_filename, image_filename)
    VALUES
      ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING id
    `,
    [
      input.fullName,
      input.email,
      input.phone,
      input.company ?? null,
      input.topic,
      input.linkedin ?? null,
      input.audienceWhy,
      input.bioPdfFilename,
      input.imageFilename,
    ]
  );
  return Number(r.rows[0].id);
}

export type SpeakerApplicationRow = {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  company: string | null;
  topic: string;
  linkedin: string | null;
  audienceWhy: string;
  bioPdfFilename: string;
  imageFilename: string;
  createdAt: string;
};

export async function listSpeakerApplications(limit = 200): Promise<SpeakerApplicationRow[]> {
  const p = getPool();
  if (!p) return [];
  const r = await p.query(
    `
    select
      id,
      full_name,
      email,
      phone,
      company,
      topic,
      linkedin,
      audience_why,
      bio_pdf_filename,
      image_filename,
      created_at
    from speaker_applications
    order by created_at desc
    limit $1
    `,
    [limit]
  );
  return r.rows.map((row) => ({
    id: Number(row.id),
    fullName: String(row.full_name),
    email: String(row.email),
    phone: String(row.phone),
    company: row.company ? String(row.company) : null,
    topic: String(row.topic),
    linkedin: row.linkedin ? String(row.linkedin) : null,
    audienceWhy: String(row.audience_why),
    bioPdfFilename: String(row.bio_pdf_filename),
    imageFilename: String(row.image_filename),
    createdAt: new Date(row.created_at).toISOString(),
  }));
}
