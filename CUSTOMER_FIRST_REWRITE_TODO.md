# Customer-First Website Rewrite — Master Checklist

Every page must pass this test within 5 seconds of landing:
1. **What problem does this company solve?**
2. **Is that my problem?**
3. **What do I do next?**

---

## Phase 1 — COMPLETE

- [x] **Homepage** (`/`) — Hero, problem, solution, proof, how-it-works, who-for, CTA
- [x] **About** (`/about`) — Customer-problem opening, who we are, our approach
- [x] **Contact** (`/contact`) — New headline, form fields, 2-hour response promise
- [x] **Footer** — Tagline "Systems businesses run on.", customer-first links
- [x] **Service pages (6)** — Problem-first template applied:
  - [x] `/erp` — Custom ERP Systems
  - [x] `/e-commerce` — E-Commerce Platforms
  - [x] `/finance-platforms` — Finance and Revenue Platforms
  - [x] `/ai-automation` — AI and Automation
  - [x] `/websites` — Professional Websites
  - [x] `/marketing` — Meta and Google Ads Management
- [x] **Homepage SEO** — Meta title, description, organisation schema with phone/address

---

## Phase 2 — Core marketing pages (HIGH PRIORITY)

Each page: problem headline → cost → solution → proof → CTA "Start the conversation"

| Page | Route | Status | Notes |
|------|-------|--------|-------|
| Who We Are | `/who-we-are` | [ ] | Redirect or merge into `/about` |
| Why Us | `/why-us` | [ ] | Rewrite as customer proof, not company pitch |
| How We Build | `/how-we-build` | [ ] | Align with 3-step "How we work with you" |
| How We Work | `/how-we-work` | [ ] | Same as above — dedupe or merge |
| Pricing | `/pricing` | [ ] | Lead with "what it costs to keep running manually" |
| Book Strategy Call | `/book-strategy-call` | [ ] | Rename CTA to "Start the conversation" |
| Proof of Work | `/proof-of-work` | [ ] | Lead with live systems proof (127 users, KES 4.97M) |
| Case Studies index | `/case-studies` | [ ] | Problem-first card titles per case |
| Projects | `/projects` | [ ] | Same treatment as proof section |

---

## Phase 3 — Extended service pages (MEDIUM PRIORITY)

| Page | Route | Status |
|------|-------|--------|
| Custom Software | `/software` | [ ] Apply ServiceProblemSolutionPage template |
| Operations & Workflow | `/operations-workflow` | [ ] Apply template |
| CresOS | `/cresos` | [ ] Problem: outgrown spreadsheets → unified OS |
| Service aliases | `/services/*` | [ ] Inherit from canonical pages (already re-exports) |

---

## Phase 4 — Solutions pages (MEDIUM PRIORITY)

All 6 `/solutions/*` pages use identical company-first structure. Rewrite each:

- [ ] `/solutions/ai-automation`
- [ ] `/solutions/consulting-strategy`
- [ ] `/solutions/content-brand`
- [ ] `/solutions/digital-sales`
- [ ] `/solutions/seo-visibility`
- [ ] `/solutions/web-growth`

---

## Phase 5 — Case studies (15 pages)

Each case study: open with the client's problem, not Cres Dynamics intro.

- [ ] `/case-studies` index
- [ ] `/case-studies/car-rental-growth-system`
- [ ] `/case-studies/consulting-seo-growth`
- [ ] `/case-studies/floral-whispers-gifts`
- [ ] `/case-studies/florist-growth-system`
- [ ] `/case-studies/karen-boutique-retail`
- [ ] `/case-studies/manufacturing-digital-transformation`
- [ ] `/case-studies/mohaa-finest`
- [ ] `/case-studies/real-estate-brand-authority`
- [ ] `/case-studies/restaurant-automation-system`
- [ ] `/case-studies/retail-sales-system`
- [ ] `/case-studies/sacco-financial-services`
- [ ] `/case-studies/spark-lights-254`
- [ ] `/case-studies/the-stems-flowers`
- [ ] `/case-studies/whitelight-store`

Update `src/lib/caseStudyHeadlines.ts` for customer-first meta titles.

---

## Phase 6 — Content & resources (LOWER PRIORITY)

| Page | Route | Status |
|------|-------|--------|
| Blog index | `/blog` | [ ] Customer-problem category framing |
| Blog posts | `/blog/[slug]` | [ ] Per-post review |
| Insights index | `/insights` | [ ] Problem-led article cards |
| Insight articles (4) | `/insights/*` | [ ] Already problem-led — verify CTAs |
| Growth Guides | `/growth-guides` | [ ] Rewrite intro |
| Client Testimonials | `/client-testimonials` | [ ] Lead with visitor problem |
| Finance Philosophy | `/finance-revenue-philosophy` | [ ] Reframe as customer outcome |
| Careers | `/careers` | [ ] Remove "We are a small team" opener |
| Data Security | `/data-security` | [ ] Lead with "your data stays yours" |
| Terms / Privacy | `/terms`, `/privacy` | [ ] Minimal copy changes |

---

## Phase 7 — Events (DO NOT BREAK REGISTRATION)

- [ ] `/events` — Keep reschedule banner; review hero copy for customer-first tone
- [ ] `/events/the-future-of-ai-in-business` — Review only
- [ ] `/events/speak` — Review only

---

## Phase 8 — Global components & navigation

- [ ] **Header** (`Header.tsx`) — Nav labels: replace "Who We Are" with problem-led labels; primary CTA → "Start the conversation"
- [ ] **AI Chat Widget** (`AIChatWidget.tsx`, `chatConstants.ts`) — Opening message must ask about visitor's problem
- [ ] **FinalCTA** — Done on homepage; reuse on other pages
- [ ] **Remove legacy heroes** — `HeroSection1/2/3.tsx` if unused

---

## Phase 9 — SEO & technical (ONGOING)

### Homepage — DONE
- [x] Meta title: Custom ERP Systems and Business Software Nairobi Kenya — Cres Dynamics
- [x] Meta description with target keywords
- [x] Organisation schema with name, address, phone, website

### All pages — TODO
- [ ] Unique meta title and description per page (audit remaining 60+ routes)
- [ ] H1 contains primary keyword per page
- [ ] Logical H1 → H2 → H3 hierarchy on every page
- [ ] Descriptive alt text on all images (audit `HeroTesla`, carousels, case study images)
- [ ] Internal links use descriptive anchor text — no "click here" or "read more"
- [ ] Keywords woven naturally: custom ERP Kenya, business software Nairobi, M-Pesa integration, e-commerce website Kenya, custom software development Nairobi, finance platform Kenya, AI automation Kenya, ERP system Kenya, website development Nairobi
- [ ] `sitemap.ts` — verify all public routes included
- [ ] `robots.ts` — already present; verify
- [ ] Submit sitemap to Google Search Console (manual step)
- [ ] Image compression — run `npm run compress-images`
- [ ] Page load — verify lazy loading on below-fold sections

---

## Phase 10 — Language audit (GLOBAL FIND & REPLACE)

Run grep across `src/` and fix every instance:

| Remove | Replace with |
|--------|-------------|
| Welcome to Cres Dynamics | Problem statement for that page |
| We are a dynamic innovative company | What the customer gets |
| Our mission is to | What changes for the customer |
| We are committed to | Specific outcome or proof point |
| Contact us today | Start the conversation |
| Book a Systems Discovery Session | Start the conversation |
| We build business systems | [Context-specific customer outcome] |

---

## Phase 11 — Deploy checklist

- [ ] `npm run build` passes
- [ ] Visual QA on mobile + desktop for homepage, about, contact, 6 service pages
- [ ] Contact form submits correctly with new fields
- [ ] Deploy to production
- [ ] Verify live pages at cresdynamics.com

---

## Shared components created

| Component | Path | Used by |
|-----------|------|---------|
| ServiceProblemSolutionPage | `src/components/ServiceProblemSolutionPage.tsx` | All 6 service pages |
| Service content data | `src/lib/service-page-content.ts` | Service pages metadata + copy |
| HomepageWhoThisIsFor | `src/components/HomepageWhoThisIsFor.tsx` | Homepage |

To add a new service page: add entry to `SERVICE_PAGES` in `service-page-content.ts`, create thin `page.tsx` wrapper.
