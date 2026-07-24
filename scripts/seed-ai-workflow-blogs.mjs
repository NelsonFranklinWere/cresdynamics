#!/usr/bin/env node
/**
 * Publish six AI / Cres Dynamics workflow blogs into production CMS.
 * Usage (on server): node scripts/seed-ai-workflow-blogs.mjs
 */
import { existsSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

function loadEnvFile(name) {
  const p = join(root, name);
  if (!existsSync(p)) return;
  for (const line of readFileSync(p, 'utf8').split('\n')) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const i = t.indexOf('=');
    if (i === -1) continue;
    const key = t.slice(0, i).trim();
    let val = t.slice(i + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = val;
  }
}

loadEnvFile('.env.production');
loadEnvFile('.env.local');

const POSTS = [
  {
    slug: 'integrate-ai-into-business-workflows-kenya',
    title: 'How Cres Dynamics Helps Companies Integrate AI Into Daily Workflows',
    excerpt:
      'AI only creates value when it sits inside the work your team already does. Here is how Cres Dynamics wires AI into real Kenyan business workflows.',
    category: 'AI',
    metaTitle: 'Integrate AI Into Business Workflows Kenya | Cres Dynamics',
    metaDescription:
      'Learn how Cres Dynamics helps Kenyan companies integrate AI into daily workflows — from status updates to RAG knowledge and voice commands.',
    body: `Most AI demos look impressive. Most AI in real businesses never leaves a browser tab.

Cres Dynamics builds AI that lives inside the systems companies already run — projects, finance, HR, reporting, and team communication — so the work gets done without another disconnected tool.

## What "integrate AI" actually means

Integration means the model can see your tasks, documents, and roles — and take action your team would otherwise type by hand. That includes:

- Turning a spoken update into a logged task status
- Answering questions from your own company documents (RAG)
- Flagging overdue work before someone has to chase it
- Routing follow-ups when a customer or internal step changes

## Where we start with every company

We map the repetitive loops first: status chasing, document hunting, duplicate entry between WhatsApp and spreadsheets, and late reporting. Then we attach AI to those loops inside CresOS or a custom system — not as a side chatbot.

## What changes after go-live

Teams spend less time typing and hunting. Managers see what is due without asking. Knowledge stays in the company system instead of in one person's phone. That is the standard we ship to — practical AI for Kenyan operators who cannot afford theatre.`,
  },
  {
    slug: 'ai-integration-industrial-area-nairobi-companies',
    title: 'AI Integration for Industrial Area Businesses — More Than Five Companies Live',
    excerpt:
      'Cres Dynamics has integrated AI and operating systems for more than five companies in Nairobi’s industrial area. Here is what that looks like on the ground.',
    category: 'AI',
    metaTitle: 'AI Integration Industrial Area Nairobi | Cres Dynamics',
    metaDescription:
      'Cres Dynamics has live AI and workflow integrations with more than five industrial-area companies in Nairobi — practical systems, not demos.',
    body: `Industrial-area businesses move stock, people, and money under pressure. They do not need another dashboard that looks good in a pitch deck.

Cres Dynamics has integrated AI-assisted workflows and business systems for more than five companies operating in and around Nairobi’s industrial area — production, distribution, and operations teams that needed fewer WhatsApp threads and clearer ownership.

## What industrial teams asked for

- Know what is due today without calling three supervisors
- Report progress without rebuilding the same spreadsheet every Friday
- Keep communications tied to the job, not personal chats
- Use AI where typing slows people down on the floor

## How we delivered

We embedded project flags, reporting, team community, and AI helpers into systems the teams already log into. For several companies that meant CresOS modules; for others, custom layers on the Cres Core Engine. The common thread: AI and automation sit inside operations, not beside them.

## Proof, not promises

These are live integrations — companies running day-to-day work on systems we shipped. If your industrial operation is still held together by Excel and WhatsApp, the path is the same: map the loops, wire the system, then add AI where it removes friction.`,
  },
  {
    slug: 'rag-systems-for-kenyan-businesses',
    title: 'Building RAG Systems for Kenyan Businesses: Answers From Your Own Knowledge',
    excerpt:
      'RAG lets your team ask questions and get answers grounded in your SOPs, contracts, and manuals — not generic internet chat.',
    category: 'AI',
    metaTitle: 'RAG Systems for Kenyan Businesses | Cres Dynamics',
    metaDescription:
      'Cres Dynamics builds RAG systems so Kenyan teams get answers from company documents — SOPs, policies, and manuals — inside their workflow.',
    body: `Generic chatbots invent answers. RAG (Retrieval-Augmented Generation) answers from your files.

Cres Dynamics builds RAG layers on top of company knowledge — policies, SOPs, product sheets, training packs — so staff get grounded answers without digging through folders or pinging the one person who "knows".

## How RAG works in practice

1. Your documents are indexed into a secure knowledge store.
2. A question retrieves the most relevant passages first.
3. The model answers using those passages — with your context, not the open web.

## Where Kenyan teams use it

- Onboarding: new hires ask process questions without waiting for a manager
- Operations: floor supervisors pull the right procedure in seconds
- Sales and support: consistent answers from approved materials
- Leadership: faster briefings from internal reports and playbooks

## Tied to CresOS, not a separate app

We wire RAG into the same login as project management and HR where possible. People ask where they already work. That is how AI stays used after week one.`,
  },
  {
    slug: 'ai-voice-commands-business-systems-kenya',
    title: 'AI Voice Commands at Work: Speak Once, Let the System Do the Rest',
    excerpt:
      'When people are short on time, typing kills momentum. Cres Dynamics adds AI voice commands so teams can speak updates and the system does the work.',
    category: 'AI',
    metaTitle: 'AI Voice Commands for Business Systems Kenya | Cres Dynamics',
    metaDescription:
      'Cres Dynamics builds AI voice commands into business systems so Kenyan teams can speak tasks and updates instead of typing everything.',
    body: `On a busy day, asking someone to open a laptop and type a status update is how updates get skipped.

Cres Dynamics builds AI voice command flows into business systems so people can speak — create a task, mark something done, log a report — and the system writes it correctly.

## Why voice matters for time management

- Supervisors move between stations; they cannot sit and type every change
- Founders dictate faster than they type between meetings
- Field teams capture notes without fighting a small keyboard

## What the system does with a voice command

- Transcribes the request
- Maps it to the right project, person, or report field
- Confirms the action in the same system everyone already uses

## Built for real Kenyan operations

Voice is not a gimmick on our stack. It is a shortcut into project management, reporting, and community updates — so nothing important lives only in a voice note on someone’s phone.`,
  },
  {
    slug: 'cresos-project-management-hr-module',
    title: 'Project Management and HR in CresOS: One System for Delivery and People',
    excerpt:
      'CresOS now brings full project management and HR together — due-date flags, reporting, leave, and team structure in one operating system.',
    category: 'CresOS',
    metaTitle: 'CresOS Project Management & HR Module | Cres Dynamics',
    metaDescription:
      'CresOS includes project management and HR — flag due work, report in-system, manage people, and keep delivery aligned.',
    body: `Delivery and people used to live in separate tools. That is how deadlines slip and HR stays blind to real workload.

CresOS now carries a full project management layer and an HR module in the same platform — so who is working on what, what is due, and who is available stay connected.

## Project management that flags reality

- Tasks and projects with clear owners
- Flags when work is up next or overdue
- Status without chasing people across chats

## HR that matches the work

- Staff records and org structure
- Leave and payroll hooks
- Team visibility tied to delivery — not a separate HR island

## Reporting where the work already is

People report progress inside CresOS. Managers see delivery and capacity without exporting three spreadsheets. That is how Cres Dynamics ships efficiency: one system, fewer tools, clearer accountability.`,
  },
  {
    slug: 'team-community-reporting-ai-one-system',
    title: 'Team Community, Reporting, and AI — All in One Cres Dynamics System',
    excerpt:
      'Replace scattered WhatsApp groups with in-system community chat, structured reporting, and AI that helps the team move faster.',
    category: 'CresOS',
    metaTitle: 'Team Community & AI in One System | Cres Dynamics',
    metaDescription:
      'Cres Dynamics systems combine team community chat, reporting, project flags, and AI voice/RAG — WhatsApp-like communication tied to real work.',
    body: `WhatsApp is where work conversations happen for most Kenyan teams. It is also where context dies — no owners, no due dates, no audit trail.

Cres Dynamics builds systems where community communication sits next to projects and reports — like WhatsApp for speed, but tied to the work.

## What is in the one system

- Team community channels for day-to-day talk
- Reporting so updates are structured, not buried in a thread
- Project flags for what is due
- AI voice and RAG so people speak or ask instead of hunting

## Why companies switch

They keep the speed of chat without losing accountability. A message can sit beside a task. A report can feed leadership dashboards. AI can turn a spoken note into a tracked action.

## The Cres Dynamics standard

We have shipped production systems across finance, operations, talent platforms like OCH, and CresOS for growing companies — now tracking 500+ active users and KES 8.3M in revenue on live stacks. The next step for most teams is the same: put communication, delivery, people, and AI in one place.`,
  },
];

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

try {
  let upserted = 0;
  for (const post of POSTS) {
    const r = await pool.query(
      `
      INSERT INTO blog_posts (
        slug, title, excerpt, category, body, status,
        meta_title, meta_description, author, published_at, updated_at
      ) VALUES ($1,$2,$3,$4,$5,'published',$6,$7,'CRES Dynamics', now(), now())
      ON CONFLICT (slug) DO UPDATE SET
        title = EXCLUDED.title,
        excerpt = EXCLUDED.excerpt,
        category = EXCLUDED.category,
        body = EXCLUDED.body,
        status = 'published',
        meta_title = EXCLUDED.meta_title,
        meta_description = EXCLUDED.meta_description,
        published_at = COALESCE(blog_posts.published_at, now()),
        updated_at = now()
      RETURNING id, slug
      `,
      [
        post.slug,
        post.title,
        post.excerpt,
        post.category,
        post.body,
        post.metaTitle,
        post.metaDescription,
      ]
    );
    upserted += 1;
    console.log(`OK ${r.rows[0].id} ${r.rows[0].slug}`);
  }
  console.log(`\nPublished/updated ${upserted} blog posts.`);
} finally {
  await pool.end();
}
