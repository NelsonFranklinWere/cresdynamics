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
