# Nairobi SEO Overhaul — Implementation Checklist

Completed in code (no visual or content changes except PART 6):

## PART 1 — Technical ✅
- [x] **Canonical URL**: Every updated page has `<link rel="canonical" href="https://cresdynamics.com/[path]/" />` via Next.js `metadata.alternates.canonical` (home, erp, websites, e-commerce, solutions/ai-automation, solutions/digital-sales, finance-platforms, operations-workflow, cresos, data-security, case-studies, contact, about, pricing).
- [x] **301 redirects**: `src/middleware.ts` — www.cresdynamics.com → https://cresdynamics.com; http → https. (Host-level redirects may still be needed on Vercel/host if the request never hits Next.)
- [x] **data-security**: `next.config.ts` redirect `/data-security` → `/data-security/` (301). Canonical on `/data-security/` page.
- [x] **Sitemap**: `src/app/sitemap.ts` — all main pages including /, /solutions/, /erp/, /websites/, /e-commerce/, /cresos/, /case-studies/, /finance-platforms/, /operations-workflow/, /data-security/, /contact/, plus case studies, pricing, careers, events, services, etc. URLs use trailing slashes. Live at https://cresdynamics.com/sitemap.xml
- [x] **robots.txt**: `src/app/robots.ts` — `User-agent: *`, `Allow: /`, `Sitemap: https://cresdynamics.com/sitemap.xml`. Live at https://cresdynamics.com/robots.txt

## PART 2 — Homepage ✅
- [x] `<title>`: Cres Dynamics | Custom ERP, Business Systems & Web Development Nairobi
- [x] `<meta name="description">` and `<meta name="keywords">` as specified
- [x] LocalBusiness JSON-LD in root layout (site-wide)

## PART 3 — Service page meta ✅
- [x] /erp/ — title, description, keywords, canonical
- [x] /websites/ — title, description, keywords, canonical + Service JSON-LD
- [x] /e-commerce/ — title, description, keywords, canonical
- [x] /solutions/ai-automation/ — title, description, keywords, canonical
- [x] /solutions/digital-sales/ — title, description, keywords, canonical
- [x] /finance-platforms/ — title, description, keywords, canonical
- [x] /operations-workflow/ — title, description, keywords, canonical
- [x] /cresos/ — title, description, keywords, canonical
- [x] /data-security/ — title, description, keywords, canonical
- [x] /case-studies/ — title, description, keywords, canonical
- [x] /contact/ — title, description, canonical

## PART 4 — Global head ✅
- [x] Open Graph: `og:type`, `og:site_name`, `og:locale`, `og:image` (https://cresdynamics.com/logo.png) in root layout
- [x] Geo: `geo.region` (KE-110), `geo.placename` (Nairobi), `geo.position`, `ICBM` in root layout

## PART 5 — Google Search Console (do manually after deploy)
- [ ] GSC → Settings → Ownership — confirm cresdynamics.com verified
- [ ] GSC → Sitemaps → add https://cresdynamics.com/sitemap.xml
- [ ] GSC → URL Inspection → request indexing for each key page (/, /erp/, /websites/, /e-commerce/, /solutions/ai-automation/, /solutions/digital-sales/, /finance-platforms/, /operations-workflow/, /data-security/, /case-studies/, /contact/, etc.)
- [ ] GSC → Coverage — fix any Excluded or Error
- [ ] Verify redirect chain with https://httpstatus.io: http://cresdynamics.com → 301 → https (and www → 301 → non-www https)

## PART 6 — /websites/ content ✅
- [x] “Types of Websites We Build” section added below the hero (above “The Problem”), with: Corporate/Business, E-Commerce, Landing Page, NGO, Portfolio, Web Application, Informational/Blog, School/Institution.

## Notes
- **Canonical**: Other routes (e.g. /how-we-build/, /careers/, /events/) inherit default metadata from root layout; add `metadata.alternates.canonical` in their layout or page to set canonical if needed.
- **Redirects**: If the site is behind a host (e.g. Vercel), configure “Redirect to HTTPS” and “Redirect www to non-www” in the host dashboard so the canonical domain is always https://cresdynamics.com.

### If Google Search Console shows “Redirect error”
1. **URL Inspection** — Open a failing URL in GSC and check “Page fetch” / live test; note every hop (status codes).
2. **No conflicting host rules** — In Vercel (or DNS host), the **primary domain must be `cresdynamics.com`**. If the host redirects apex → `www` while the app redirects `www` → apex, Google sees a **loop** → “Redirect error”. Fix: one canonical policy only (prefer apex + HTTPS, `www` as alias to apex).
3. **One clean chain** — Prefer: `http`/`www` → single 301 → `https://cresdynamics.com/path/` (trailing slash matches `next.config` `trailingSlash: true`).
4. **Verify externally** — Use [httpstatus.io](https://httpstatus.io) or `curl -I -L` on the exact URL GSC reports.
