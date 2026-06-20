# Image Background Section Rollout — Master Todo

Apply the **hero treatment** to every page section:
- **No solid colour backgrounds** (no white, grey, navy, or gradient fills)
- **Unique photo per section** — never repeat hero carousel images on the same page
- **Dark overlay** (`black/58`–`black/78`) for readable white text
- **Glass cards** (`bg-black/40`, `border-white/15`, `backdrop-blur-sm`) for content blocks
- **Fully responsive** — mobile-first padding, typography, and grid breakpoints

Shared components:
- `src/components/ImageSection.tsx` — full-bleed background wrapper
- `src/lib/section-backgrounds.ts` — image registry per section/page
- `src/components/TypewriterBoard.tsx` — animated numbered board (homepage problem section)

New assets in `public/sections/`:
- `team-collaboration-board.jpg` — problem / familiar section
- `analytics-workspace.jpg` — systems / solutions
- `tech-team-planning.jpg` — proof / live systems
- `startup-team-office.jpg` — audience / who-for

---

## Phase 1 — Homepage ✅ COMPLETE

| Section | Image | Special |
|---------|-------|---------|
| Hero | Rotating hero set (4 images) | Photo bg + centred headline |
| Does this sound familiar? | `sections/team-collaboration-board.jpg` | **TypewriterBoard** loops 1→5 |
| We build systems… | `sections/analytics-workspace.jpg` | Glass service cards |
| Live systems proof | `sections/tech-team-planning.jpg` | Glass stat cards |
| How we work with you | `04_how_we_build.jpg` | Glass step cards |
| Is this for you? | `sections/startup-team-office.jpg` | Glass audience list |
| Final CTA | `connecting-nairobi.jpg` | Hero-style CTA buttons |

---

## Phase 2 — Core marketing pages

| Page | Sections to convert | Suggested images | Status |
|------|---------------------|------------------|--------|
| `/about` | Opening, Who we are, Our approach, CTA | `01_who_we_are.jpg`, `03_how_we_work.jpg`, `05_contact.jpg` | [ ] |
| `/contact` | Hero, form area | `05_contact.jpg`, `sections/team-collaboration-board.jpg` | [ ] |
| `/case-studies` | Index hero, card grid | `10_operations_workflow.jpg`, per-case thumbnails | [ ] |
| `/proof-of-work` | Hero, project cards | `sections/analytics-workspace.jpg` | [ ] |
| `/projects` | Hero, project grid | `09_finance.jpg` | [ ] |
| `/pricing` | Hero, tiers | `07_websites.jpg` | [ ] |
| `/how-we-build` | All sections | `04_how_we_build.jpg` | [ ] |
| `/how-we-work` | All sections | `03_how_we_work.jpg` | [ ] |
| `/why-us` | All sections | `02_why_us.jpg` | [ ] |
| `/who-we-are` | Redirect or merge with `/about` | — | [ ] |

---

## Phase 3 — Service pages (9 routes)

Replace `ServiceProblemSolutionPage` solid colour blocks with `ImageSection` per block:

| Page | Problem bg | Solution bg | CTA bg | Status |
|------|------------|-------------|--------|--------|
| `/erp` | `06_custom_erp.jpg` | `sections/analytics-workspace.jpg` | `connecting-nairobi.jpg` | [ ] |
| `/e-commerce` | `08_ecommerce.jpg` | `sections/startup-team-office.jpg` | `connecting-nairobi.jpg` | [ ] |
| `/finance-platforms` | `finance.and.revenue.png` | `09_finance.jpg` | `connecting-nairobi.jpg` | [ ] |
| `/ai-automation` | `ai.automation.png` | `sections/tech-team-planning.jpg` | `connecting-nairobi.jpg` | [ ] |
| `/websites` | `07_websites.jpg` | `sections/analytics-workspace.jpg` | `connecting-nairobi.jpg` | [ ] |
| `/marketing` | `07_websites.jpg` | `sections/startup-team-office.jpg` | `connecting-nairobi.jpg` | [ ] |
| `/software` | `10_operations_workflow.jpg` | `04_how_we_build.jpg` | `connecting-nairobi.jpg` | [ ] |
| `/operations-workflow` | `operations.and.workflow.png` | `03_how_we_work.jpg` | `connecting-nairobi.jpg` | [ ] |
| `/cresos` | `cresOs.businessoperatingsystem.png` | `06_custom_erp.jpg` | `connecting-nairobi.jpg` | [ ] |

---

## Phase 4 — Solutions pages (6 routes)

- [ ] `/solutions/ai-automation`
- [ ] `/solutions/consulting-strategy`
- [ ] `/solutions/content-brand`
- [ ] `/solutions/digital-sales`
- [ ] `/solutions/seo-visibility`
- [ ] `/solutions/web-growth`

---

## Phase 5 — Case studies (15 pages)

- [ ] Index `/case-studies`
- [ ] Each individual case study component
- [ ] Update shared case study components to use `ImageSection`

---

## Phase 6 — Content pages

- [ ] `/blog` index + `/blog/[slug]`
- [ ] `/insights` + 4 insight articles
- [ ] `/events` (keep reschedule banner; convert sections below)
- [ ] `/careers`, `/terms`, `/privacy`, `/data-security`

---

## Phase 7 — Global

- [ ] Refactor `ServiceProblemSolutionPage` to image sections
- [ ] Remove remaining solid colour backgrounds site-wide
- [ ] Audit `layout.tsx` critical CSS

---

## Phase 8 — Images & performance

- [ ] Compress new section JPGs (`npm run compress-images`)
- [ ] Descriptive alt text on every section
- [ ] Lazy-load below-fold backgrounds
- [ ] Extend `section-backgrounds.ts` per route

---

## Phase 9 — Responsive QA

- [ ] Mobile 375px — typewriter board readable
- [ ] iPad 768px — grids correct
- [ ] Desktop 1280px+
- [ ] `prefers-reduced-motion` — static list fallback
- [ ] Contrast check on all overlays

---

## Phase 10 — Deploy

- [ ] Build passes
- [ ] Visual QA homepage
- [ ] Deploy production

---

## Image rules

1. Hero carousel images — hero only, never reused as section backgrounds on same page
2. One unique photo per section
3. Product PNG screenshots — inside cards only
4. No coloured gradient section backgrounds — photo + dark overlay only
