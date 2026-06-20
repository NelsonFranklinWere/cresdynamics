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

-- Events registrations (AI Event landing page reserve spot)
CREATE TABLE IF NOT EXISTS event_reservations (
  id SERIAL PRIMARY KEY,
  event_title TEXT NOT NULL,
  event_date TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  ticket_type TEXT,
  attendance_type TEXT,
  lanyard_category TEXT,
  booking_status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (event_title, event_date, email)
);

CREATE INDEX IF NOT EXISTS idx_event_reservations_created_at ON event_reservations (created_at DESC);

-- Payments (placeholder for integrating Mpesa/Stripe later)
CREATE TABLE IF NOT EXISTS payments (
  id SERIAL PRIMARY KEY,
  source TEXT NOT NULL, -- e.g. 'mpesa', 'stripe', 'manual'
  reference TEXT,
  provider_tracking_id TEXT,
  merchant_reference TEXT,
  payment_link_token TEXT UNIQUE,
  payment_link_active BOOLEAN NOT NULL DEFAULT true,
  email TEXT,
  phone TEXT,
  amount_kes INTEGER,
  currency TEXT NOT NULL DEFAULT 'KES',
  status TEXT NOT NULL DEFAULT 'pending', -- pending|paid|failed|refunded
  purpose TEXT, -- e.g. 'event_ticket'
  event_title TEXT,
  event_date TEXT,
  metadata_json JSONB,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Backward compatibility: add columns before indexes (existing DBs may lack these)
ALTER TABLE payments ADD COLUMN IF NOT EXISTS provider_tracking_id TEXT;
ALTER TABLE payments ADD COLUMN IF NOT EXISTS merchant_reference TEXT;
ALTER TABLE payments ADD COLUMN IF NOT EXISTS payment_link_token TEXT;
ALTER TABLE payments ADD COLUMN IF NOT EXISTS payment_link_active BOOLEAN NOT NULL DEFAULT true;
ALTER TABLE payments ADD COLUMN IF NOT EXISTS metadata_json JSONB;
ALTER TABLE payments ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ NOT NULL DEFAULT now();
ALTER TABLE event_reservations ADD COLUMN IF NOT EXISTS lanyard_category TEXT;
ALTER TABLE event_reservations ADD COLUMN IF NOT EXISTS booking_status TEXT NOT NULL DEFAULT 'pending';
ALTER TABLE event_reservations ADD COLUMN IF NOT EXISTS paid_at TIMESTAMPTZ;
ALTER TABLE event_reservations ADD COLUMN IF NOT EXISTS paid_by TEXT;
ALTER TABLE event_reservations ADD COLUMN IF NOT EXISTS paid_source TEXT;
ALTER TABLE event_reservations ADD COLUMN IF NOT EXISTS ticket_number TEXT;
ALTER TABLE event_reservations ADD COLUMN IF NOT EXISTS confirmation_sent_at TIMESTAMPTZ;

CREATE UNIQUE INDEX IF NOT EXISTS idx_event_reservations_ticket_number
  ON event_reservations (ticket_number)
  WHERE ticket_number IS NOT NULL;

CREATE UNIQUE INDEX IF NOT EXISTS idx_payments_payment_link_token ON payments (payment_link_token)
  WHERE payment_link_token IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_payments_created_at ON payments (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_payments_provider_tracking_id ON payments (provider_tracking_id);
CREATE INDEX IF NOT EXISTS idx_payments_merchant_reference ON payments (merchant_reference);

-- Speaker applications (events)
CREATE TABLE IF NOT EXISTS speaker_applications (
  id SERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  topic TEXT NOT NULL,
  linkedin TEXT,
  audience_why TEXT NOT NULL,
  bio_pdf_filename TEXT NOT NULL,
  image_filename TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_speaker_applications_created_at ON speaker_applications (created_at DESC);

-- Sponsor applications (AI event)
CREATE TABLE IF NOT EXISTS sponsors_applications (
  id SERIAL PRIMARY KEY,
  company_name TEXT NOT NULL,
  contact_full_name TEXT NOT NULL,
  job_title TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company_website TEXT,
  package_selected TEXT NOT NULL,
  package_tier TEXT NOT NULL,
  why_sponsor TEXT NOT NULL,
  how_heard TEXT,
  status TEXT NOT NULL DEFAULT 'New',
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_sponsors_applications_created_at ON sponsors_applications (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_sponsors_applications_email_lower ON sponsors_applications (lower(email));

-- Blog posts (CMS — publish from /management/blog)
CREATE TABLE IF NOT EXISTS blog_posts (
  id SERIAL PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT,
  category TEXT,
  body TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  meta_title TEXT,
  meta_description TEXT,
  author TEXT NOT NULL DEFAULT 'CRES Dynamics',
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_blog_posts_status_published ON blog_posts (status, published_at DESC NULLS LAST);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts (slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_updated_at ON blog_posts (updated_at DESC);

-- Event catalogue (metadata for landing pages, rescheduling, etc.)
CREATE TABLE IF NOT EXISTS events (
  id SERIAL PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  date_label TEXT NOT NULL,
  date_short TEXT,
  status TEXT NOT NULL DEFAULT 'confirmed',
  note TEXT,
  venue TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_events_slug ON events (slug);

INSERT INTO events (slug, title, date_label, date_short, status, note, venue)
VALUES (
  'the-future-of-ai-in-business',
  'The Future of AI in Business',
  'Thursday 25th June 2026',
  '25 June 2026',
  'confirmed',
  '',
  'Sarit Expo Centre, Westlands, Nairobi'
)
ON CONFLICT (slug) DO UPDATE SET
  date_label = EXCLUDED.date_label,
  date_short = EXCLUDED.date_short,
  status = EXCLUDED.status,
  note = EXCLUDED.note,
  venue = EXCLUDED.venue,
  updated_at = now();

-- Log for bulk / automated attendee communications
CREATE TABLE IF NOT EXISTS event_communication_log (
  id SERIAL PRIMARY KEY,
  event_slug TEXT NOT NULL,
  communication_type TEXT NOT NULL,
  reservation_id INTEGER REFERENCES event_reservations (id) ON DELETE SET NULL,
  email TEXT NOT NULL,
  first_name TEXT,
  success BOOLEAN NOT NULL DEFAULT false,
  error_message TEXT,
  sent_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_event_communication_log_event ON event_communication_log (event_slug, communication_type, sent_at DESC);
CREATE INDEX IF NOT EXISTS idx_event_communication_log_email ON event_communication_log (email);

ALTER TABLE event_reservations ADD COLUMN IF NOT EXISTS reschedule_email_sent_at TIMESTAMPTZ;
