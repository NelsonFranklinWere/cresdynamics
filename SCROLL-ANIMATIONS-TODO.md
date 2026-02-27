# Scroll Animations — Implementation To-Do List

**Current state:** Sections and cards on content pages do **not** have scroll-triggered animations. They appear statically. This list covers adding dynamic styling and different “slides” of sections as the user scrolls.

---

## Phase 1 — Foundation

- [x] **Create reusable scroll-reveal component(s)**  
  - **Done.** `src/components/ScrollReveal.tsx` uses Framer Motion `whileInView`.  
  - Variants: `fadeUp` | `fadeIn` | `slideLeft` | `slideRight` | `scaleIn`.  
  - `ScrollRevealStagger` for staggering children (e.g. card grids).  
  - Usage: `<ScrollReveal variant="fadeUp"><section>...</section></ScrollReveal>`.

- [ ] **Define section “slide” variants**  
  - Alternating: e.g. odd sections slide-up, even sections fade-in.  
  - Or by type: hero = fade, content = slide-up, cards = stagger fade-in-up, CTA = scale-in.

- [ ] **Add `ScrollReveal` (or similar) component** in `src/components/` and use it to wrap sections/cards on each page.

---

## Phase 2 — Apply to Core Pages (same pattern: wrap sections/cards)

- [ ] **Why Us** (`/why-us`) — Hero static or light fade; each `<section>` and card grids (pillars, comparison table, “What Makes Us Different”, framework steps, impact cards, final CTA) get scroll reveal.

- [ ] **Who We Are** (`/who-we-are`) — Hero; Identity list; Founder Story; Values & Culture.

- [ ] **About Us** (`/about`) — Each major section (opening, mission/vision/culture/theme, problem, philosophy, why us, culture, language, impact, who we work with, closing).

- [ ] **Custom ERP** (`/erp`) — Hero; “Why spreadsheets break”; generic vs custom table; phased approach blocks; governance; use cases; CTA.

- [ ] **CresOS** (`/cresos`) — Hero; “What CresOS Is” cards; “Who CresOS Serves”; off-the-shelf vs modular; CTAs.

- [ ] **Websites** (`/websites`) — Hero; pain points list; solutions list; outcome; CTA.

- [ ] **Finance Platforms** (`/finance-platforms`) — Hero; “What We Deliver” list; CTA.

- [ ] **Finance & Revenue Philosophy** (`/finance-revenue-philosophy`) — Hero; pillar cards; CTA.

- [ ] **AI & Automation** (`/ai-automation`) — Hero; “Where We Apply” cards; CTA.

- [ ] **How We Build** (`/how-we-build`) — Hero; each phase block (Diagnose, Architect & Build, Deploy & Optimize, Scale); production-readiness; CTA.

- [ ] **E-commerce** (`/e-commerce`) — Hero; who it’s for; pain points; solutions; integration; CTAs.

- [ ] **Pricing** (`/pricing`) — Hero; tier intro; pricing cards (stagger); footer note.

- [ ] **Operations & Workflow** (`/operations-workflow`) — Hero; “What We Deliver” list; CTA.

- [ ] **Careers** (`/careers`) — Hero; “How We Hire”; form section.

- [ ] **Projects** (`/projects`) — Hero; each project card (Optiohire, CresOS, Zyra); CTA.

---

## Phase 3 — Remaining Pages

- [ ] **Book Strategy Call** (`/book-strategy-call`) — Hero; “What to expect”.

- [ ] **Growth Guides** (`/growth-guides`) — Hero; links section.

- [ ] **Privacy** (`/privacy`) — Sections of policy text.

- [ ] **Terms** (`/terms`) — Sections of terms text.

- [ ] **Data & Security** (`/data-security`) — Hero; practice cards.

- [ ] **Contact** (`/contact`) — Form and any blocks.

- [ ] **Case Studies** (`/case-studies`) — Listing cards; individual case study pages if desired.

- [ ] **Insights** (`/insights`) — Article/list cards.

- [ ] **Solutions subpages** (`/solutions/*`) — Hero; problem/solution sections; CTAs.

- [ ] **Client Testimonials** (`/client-testimonials`) — Testimonial cards.

- [ ] **Proof of Work** (`/proof-of-work`) — Sections/cards.

---

## Phase 4 — Polish

- [ ] **Reduce motion** — Respect `prefers-reduced-motion` (no or minimal animation when user prefers reduced motion).

- [ ] **Performance** — Use `once: true` (or equivalent) so elements animate only once when they first enter viewport; avoid re-triggering on every scroll.

- [ ] **Different “slides” per section type** — Document or code a simple rule (e.g. hero = fade, content = slide-up, cards = stagger, CTA = scale) so all pages feel consistent but not identical.

---

## Technical notes

- **Framer Motion** is already installed. `ScrollReveal` and `ScrollRevealStagger` in `src/components/ScrollReveal.tsx` use `whileInView` with `viewport={{ once: true, margin: "-40px" }}`.
- **Usage:** Wrap any section or card with `<ScrollReveal variant="fadeUp">` (or `fadeIn`, `slideLeft`, `slideRight`, `scaleIn`). For grids of cards use `<ScrollRevealStagger variant="fadeUp">` and pass the card elements as children.
- Keep animations subtle (default duration 0.5s). Respect `prefers-reduced-motion` in Phase 4.
