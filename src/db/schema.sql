-- CRES Dynamics — PostgreSQL schema (run via npm run db:init)

CREATE TABLE IF NOT EXISTS contact_leads (
  id SERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  contact_phone TEXT NOT NULL,
  project_title TEXT NOT NULL,
  project_detail TEXT NOT NULL,
  subscribe BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_contact_leads_created_at ON contact_leads (created_at DESC);

CREATE TABLE IF NOT EXISTS career_applications (
  id SERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  role TEXT NOT NULL,
  linkedin TEXT,
  portfolio TEXT,
  experience_summary TEXT NOT NULL,
  why_cres TEXT NOT NULL,
  cv_original_filename TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_career_applications_created_at ON career_applications (created_at DESC);

-- Existing databases: add CV filename column if missing
ALTER TABLE career_applications ADD COLUMN IF NOT EXISTS cv_original_filename TEXT;

-- Website chat widget (Frank) — full conversation log
CREATE TABLE IF NOT EXISTS chat_sessions (
  id SERIAL PRIMARY KEY,
  session_public_id TEXT NOT NULL UNIQUE,
  visitor_name TEXT,
  phone TEXT,
  email TEXT,
  page_url TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  last_message_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_chat_sessions_created_at ON chat_sessions (created_at DESC);

CREATE TABLE IF NOT EXISTS chat_messages (
  id SERIAL PRIMARY KEY,
  session_public_id TEXT NOT NULL REFERENCES chat_sessions (session_public_id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_chat_messages_session ON chat_messages (session_public_id, created_at);
