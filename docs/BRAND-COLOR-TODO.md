# CRES Dynamics — Brand Color Palette Transformation

**Goal:** Transform the site to the official CRES Dynamics brand palette. Feel: modern, structured, trustworthy, technology-focused, calm but powerful.

---

## Brand palette reference

| Role | Hex | Use |
|------|-----|-----|
| **Primary Navy** | `#2F3B52` | Headings, nav, footer, secondary buttons, body text |
| **Teal Blue** | `#2FA6B3` | Highlights, icons, links, hover, UI accents |
| **Deep Teal** | `#1E7C88` | Section backgrounds, cards, panels, hero overlays |
| **Energy Orange** | `#F39C24` | Primary buttons, CTAs, key emphasis |
| **Light Neutral** | `#F5F7FA` | Page background, section separation, cards |
| **Dark Navy** | `#1A2433` | Footer, dark sections, contrast panels |

**Hover:** Primary orange → `#E48B18` · Teal → darker teal (e.g. `#268F9A`).

---

## Phase 1 — Foundation (CSS variables)

- [x] **1.1** Add new brand variables in `src/app/globals.css` under `:root`:
  - `--navy-primary: #2F3B52`
  - `--teal-accent: #2FA6B3`
  - `--teal-deep: #1E7C88`
  - `--orange-energy: #F39C24`
  - `--orange-energy-hover: #E48B18`
  - `--neutral-bg: #F5F7FA`
  - `--navy-dark: #1A2433`
- [x] **1.2** Map existing `--cres-*` tokens to new palette (or keep both during migration):
  - e.g. `--cres-deep-navy` → `--navy-primary` for text/headers, `--navy-dark` for dark panels
  - `--cres-electric-teal` / teal secondary → `--teal-accent`
  - `--cres-orange-primary` / hover → `--orange-energy` / `--orange-energy-hover`
  - Light sections → `--neutral-bg`
- [x] **1.3** Update hero gradient to `linear-gradient(135deg, #1A2433, #1E7C88)`.
- [ ] **1.4** Check WCAG contrast for navy text on light bg and white text on teal/orange; fix if needed.

---

## Phase 2 — Navigation

- [x] **2.1** Nav bar: background `#FFFFFF`, text `#2F3B52`.
- [x] **2.2** Nav links: hover color `#2FA6B3`.
- [x] **2.3** Active page: underline or indicator `#F39C24`.
- [x] **2.4** Logo left-aligned; ensure it works on white nav.
- [x] **2.5** Mobile menu: apply same palette (e.g. white/light bg, navy text, teal hover).

---

## Phase 3 — Hero section

- [x] **3.1** Hero background: gradient `#1A2433` → `#1E7C88`.
- [x] **3.2** Headline: white.
- [x] **3.3** Subtext: light grey (e.g. `rgba(255,255,255,0.85)`).
- [x] **3.4** Primary CTA button: bg `#F39C24`, text white, hover `#E48B18`.
- [x] **3.5** Secondary CTA: outline style with teal `#2FA6B3`, hover fill optional.

---

## Phase 4 — Section layout & rhythm

- [x] **4.1** Alternate section backgrounds: Section 1 white, Section 2 `#F5F7FA`, Section 3 white, etc.
- [x] **4.2** “Highlight” sections (e.g. why-us, social proof): bg `#1E7C88`, text white.
- [x] **4.3** Increase whitespace between sections where needed.
- [x] **4.4** Clear section hierarchy (heading size/weight, spacing) so the brand feels premium.

---

## Phase 5 — Buttons

- [x] **5.1** Primary buttons: bg `#F39C24`, text white, hover `#E48B18`.
- [x] **5.2** Secondary buttons: bg `#2FA6B3`, text white, hover darker teal.
- [x] **5.3** Replace all primary/secondary button classes sitewide (home, about, pricing, contact, book-strategy-call, insights, etc.).
- [x] **5.4** Ensure focus states for accessibility (e.g. ring color teal or orange).

---

## Phase 6 — Cards & panels

- [x] **6.1** Card background: white (or `#F5F7FA` where it fits section alternation).
- [x] **6.2** Card border: subtle grey (e.g. `#E5E7EB` or similar).
- [x] **6.3** Icons and small accents on cards: `#2FA6B3`.
- [x] **6.4** Dark cards (e.g. on deep teal sections): keep contrast; use white or light text.

---

## Phase 7 — Footer

- [x] **7.1** Footer background: `#1A2433`.
- [x] **7.2** Footer text: white.
- [x] **7.3** Footer links: color `#2FA6B3`, hover `#F39C24`.

---

## Phase 8 — Typography & links

- [x] **8.1** Headings: color `#2F3B52`, bold where specified.
- [x] **8.2** Body text: dark grey (e.g. `#374151` or `#2F3B52` on light backgrounds).
- [x] **8.3** Inline links: `#2FA6B3`, hover underline or `#F39C24`.
- [x] **8.4** Ensure body text on light sections uses dark grey/navy, not white.

---

## Phase 9 — Component sweep

- [x] **9.1** **Homepage:** hero, sections, CTAs, cards, marquee (orange/navy as per palette).
- [ ] **9.2** **About:** section backgrounds, card borders, teal icons, orange CTAs (uses --cres-* vars, aligned via Phase 1).
- [ ] **9.3** **Pricing:** cards, primary/secondary buttons (uses --cres-* vars, aligned via Phase 1).
- [ ] **9.4** **Contact / Book strategy call:** form focus states, button colors (vars aligned).
- [ ] **9.5** **Insights:** filters, cards, CTAs (vars aligned).
- [x] **9.6** **Chat widget:** header/buttons use orange + teal via --cres-* mapping.
- [ ] **9.7** **Privacy / legal:** links and headings (vars aligned).

---

## Phase 10 — Polish & QA

- [x] **10.1** Reduce clutter; remove redundant decorative elements if they conflict with “calm but powerful”.
- [x] **10.2** Make CTAs visible and consistent (one primary orange style, one secondary teal).
- [x] **10.3** Avoid gradient overload; use brand gradient only where specified (e.g. hero).
- [x] **10.4** Avoid heavy shadows; keep subtle where needed.
- [ ] **10.5** Mobile: verify contrast and tap targets; section alternation still clear.
- [ ] **10.6** Run a quick WCAG check on key pages (nav, hero, one form, footer).

---

## Technical checklist

- [x] Color variables defined globally in `globals.css`.
- [x] Hover states consistent (primary orange, secondary teal).
- [x] CSS variables used in Tailwind/classes (e.g. `bg-[var(--orange-energy)]`).
- [ ] No hardcoded old hex values left for primary/teal/orange/backgrounds (search for `#0D1B2A`, `#00B894`, `#F47A2A`, `#E87528`, etc.) – inner pages may still reference old hex; --cres-* mapping covers most.

---

## File reference

- **Variables:** `src/app/globals.css`
- **Layout/Nav/Footer:** likely in `src/components/` or `src/app/layout.tsx`
- **Pages:** `src/app/**/page.tsx` (home, about, pricing, contact, book-strategy-call, insights, privacy)
- **Chat:** `src/components/AIChatWidget.tsx`

---

*When applying the palette: increase whitespace, improve section hierarchy, reduce clutter, and make CTAs visible so the brand feels premium and strategic.*
