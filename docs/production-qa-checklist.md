# Prominent Experts — Production QA Checklist

## ✅ Phase 8 — Launch Verification

### 1. Environment Variables
- [ ] `NEXT_PUBLIC_SITE_URL` set
- [ ] `NEXT_PUBLIC_GA_ID` set (optional)
- [ ] `NEXT_PUBLIC_SUPABASE_URL` set
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` set
- [ ] `SUPABASE_SERVICE_ROLE_KEY` set
- [ ] `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE` set
- [ ] `SMTP_USER`, `SMTP_PASS` set
- [ ] `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` set
- [ ] `ADMIN_LEADS_TOKEN` set

### 2. Supabase Database
- [ ] SQL script `docs/database/contact-leads.sql` executed in Supabase Dashboard
- [ ] Table `contact_leads` exists
- [ ] RLS policies enabled (anon insert only, service_role full access)
- [ ] Indexes created (created_at, status, phone, service)

### 3. Contact API — Functional Tests
- [ ] POST `/api/contact` with valid data → returns `success: true`
- [ ] POST `/api/contact` missing `name` → validation error
- [ ] POST `/api/contact` missing `phone` → validation error
- [ ] POST `/api/contact` message < 10 chars → validation error
- [ ] POST `/api/contact` invalid email → validation error
- [ ] POST `/api/contact` with honeypot filled → accepts silently (spam protection)
- [ ] Lead saved in Supabase `contact_leads` table
- [ ] SMTP email sent to `CONTACT_TO_EMAIL`

### 4. Dashboard — /admin/leads
- [ ] Access without token → login screen
- [ ] Invalid token → error message
- [ ] Valid token → dashboard loads with real data
- [ ] Leads displayed in table/cards
- [ ] Search by name works
- [ ] Search by phone works
- [ ] Search by email works
- [ ] Search by service works
- [ ] Filter by status (new, contacted, closed, spam)
- [ ] Sort by newest/oldest
- [ ] Open lead detail drawer
- [ ] Change status → saved in Supabase
- [ ] Add notes → saved in Supabase
- [ ] Pagination works
- [ ] Empty state when no results
- [ ] `/admin/leads` has `noindex`
- [ ] `/admin/leads` NOT in sitemap.xml

### 5. PWA
- [ ] `/manifest.webmanifest` loads
- [ ] manifest has: name, short_name, lang=ar, dir=rtl, start_url, display=standalone
- [ ] theme_color = `#7448F5`, background_color = `#FFFFFF`
- [ ] Icons 192 and 512 load
- [ ] Service Worker (`/sw.js`) loads on HTTPS
- [ ] Service Worker does NOT cache `/admin/*` or `/api/*`
- [ ] Install prompt works (if supported)
- [ ] Offline fallback works (if implemented)
- [ ] No broken cache on updates

### 6. Security Headers
- [ ] `X-Frame-Options: SAMEORIGIN`
- [ ] `X-Content-Type-Options: nosniff`
- [ ] `Referrer-Policy: strict-origin-when-cross-origin`
- [ ] `X-XSS-Protection: 1; mode=block`
- [ ] `poweredByHeader: false`

### 7. Performance — Lighthouse Targets
- [ ] Performance ≥ 90
- [ ] Accessibility ≥ 95
- [ ] Best Practices ≥ 95
- [ ] SEO ≥ 95

### 8. Mobile Responsiveness
- [ ] Homepage no horizontal scroll
- [ ] Navbar menu works (mobile hamburger)
- [ ] All grids stack correctly (1→2→3 columns)
- [ ] Contact form full-width on mobile
- [ ] Dashboard responsive
- [ ] Blog cards stack on mobile
- [ ] Portfolio cards stack on mobile
- [ ] Footer columns stack on mobile
- [ ] Buttons ≥ 44px tap target

### 9. A11y
- [ ] H1 one per page
- [ ] H2/H3 hierarchy logical
- [ ] All images have `alt` text
- [ ] `aria-label` on icon buttons
- [ ] `htmlFor` on form labels
- [ ] Focus-visible rings visible
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Dashboard modal closes with Escape
- [ ] Mobile menu closes after link click
- [ ] Color not sole indicator

### 10. Content Checks
- [ ] Blog posts have real Arabic content (≥500 words)
- [ ] Blog categories match posts
- [ ] Project data is accurate
- [ ] AI solution pages have content
- [ ] Privacy page has all sections
- [ ] Terms page has all sections
- [ ] No Lorem Ipsum or placeholder text
- [ ] No TODO or FIXME comments

### 11. SEO
- [ ] `/sitemap.xml` loads and has all public pages
- [ ] No admin/api pages in sitemap
- [ ] `/robots.txt` loads and allows public pages
- [ ] Each page has unique `title` and `description`
- [ ] OpenGraph meta present on key pages
- [ ] JSON-LD Organization schema present
- [ ] `lang="ar"` and `dir="rtl"` on all pages
- [ ] Canonical URLs correct
- [ ] No duplicate titles/descriptions

### 12. Build & Deploy
- [ ] `npm run typecheck` → 0 errors
- [ ] `npm run lint` → 0 warnings
- [ ] `npm run build` → successful
- [ ] `.next` directory is output
- [ ] `start` script in package.json
- [ ] No console errors in browser

---

## Quick Start for Testing

```bash
# 1. Install dependencies
npm install

# 2. Set up environment
cp .env.example .env.local
# Edit .env.local with real credentials

# 3. Run SQL in Supabase Dashboard
# Open Supabase → SQL Editor → Paste docs/database/contact-leads.sql → Run

# 4. Build and test
npm run build
npm run start

# 5. Test endpoints
curl -X POST http://localhost:5010/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"اختبار","phone":"0555555555","service":"تصميم مواقع","message":"هذه رسالة اختبار للتأكد من عمل النظام."}'
```

---

*Last updated: July 2026*
