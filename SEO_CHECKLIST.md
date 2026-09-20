# SEO Checklist — World of Dentistry

This checklist covers what is implemented in the codebase and what still requires real-world clinic/business work outside the website.

## Technical SEO (Implemented in Codebase)

- [x] Unique `<title>` per important page via `createPageMetadata()` and page exports
- [x] Unique meta descriptions on core pages
- [x] Canonical URLs on indexable pages
- [x] OpenGraph + Twitter metadata
- [x] Dynamic `sitemap.xml` (`app/sitemap.ts`)
- [x] `robots.txt` allowing crawl (`app/robots.ts`)
- [x] Semantic HTML + heading hierarchy
- [x] Skip-to-content link
- [x] Breadcrumb navigation on key pages
- [x] Clean URL structure (`/treatments/[slug]`, `/doctors/[slug]`, `/blog/[slug]`)
- [x] Dynamic OG image (`app/opengraph-image.tsx`)
- [x] Favicon / app icon (`app/icon.tsx`)
- [x] Web manifest (`app/manifest.ts`)
- [x] Server-rendered content for treatment, doctor, blog, location pages
- [x] 404 page

### Still Required (Outside Code)

- [ ] Connect production domain (`worldofdentistry.co.in`) to Vercel/hosting
- [ ] Verify domain in Google Search Console
- [ ] Submit sitemap: `https://www.worldofdentistry.co.in/sitemap.xml`
- [ ] Inspect important URLs in Search Console
- [ ] Monitor Core Web Vitals in Search Console + PageSpeed Insights
- [ ] Set up analytics (GA4 or privacy-friendly alternative)

## Structured Data (Implemented)

- [x] `Dentist` / LocalBusiness schema (organization)
- [x] `WebSite` schema
- [x] `FAQPage` schema on homepage
- [x] `BreadcrumbList` on treatment, doctor, appointment, index pages
- [x] `MedicalProcedure` on treatment pages
- [x] `Physician` on doctor pages
- [x] `Article` on blog posts

### Not Implemented (Intentionally)

- [ ] `aggregateRating` / Review schema — requires verified, policy-compliant review markup
- [ ] Fake ratings or fabricated reviews in schema

Validate with [Google Rich Results Test](https://search.google.com/test/rich-results).

## Local SEO (Implemented)

- [x] Consistent NAP (Name, Address, Phone) in `data/clinic.ts` and across site
- [x] Opening hours displayed consistently
- [x] Google Maps embed + directions link on contact page
- [x] Location page: `/locations/gurgaon`
- [x] Treatment pages titled with Gurgaon context where appropriate
- [x] Local keywords in metadata (natural, not stuffed)

### Still Required (Outside Code)

- [ ] Maintain accurate **Google Business Profile**
- [ ] Correct primary category (e.g. Dentist / Dental clinic)
- [ ] Complete services list in GBP
- [ ] Real clinic photos in GBP
- [ ] Genuine patient reviews on GBP
- [ ] Respond to reviews professionally
- [ ] Ensure website URL in GBP matches live domain
- [ ] Keep NAP identical across GBP, website, directories

Google local rankings depend on **relevance, distance, and prominence** — not website tricks alone.

## Content SEO

- [x] 12 treatment pages with original educational content
- [x] 2 doctor profile pages with verified credentials
- [x] 7 blog articles (general education)
- [x] FAQ section with verified answers
- [x] Internal linking: home → treatments → doctors → appointment → blog

### Still Required (Clinic Approval)

- [ ] Professional photography for hero, doctors, treatments
- [ ] Before/after gallery with patient consent
- [ ] Expanded blog content calendar
- [ ] Medical reviewer attribution if applicable
- [ ] Additional localized pages only if genuinely useful (avoid doorway pages)

## Performance / Core Web Vitals

- [x] Next.js Image-ready architecture
- [x] Static generation for content pages
- [x] Lazy-loaded Three.js (hero + technology only)
- [x] WebGL fallback for mobile / reduced motion
- [x] Code splitting via dynamic imports for 3D

### Monitor After Launch

- [ ] LCP < 2.5s on mobile
- [ ] INP < 200ms
- [ ] CLS < 0.1
- [ ] Run Lighthouse on homepage, treatment page, appointment page

## Accessibility (SEO-adjacent)

- [x] Focus states
- [x] Reduced motion support
- [x] ARIA on carousel, mobile nav, AI chat
- [x] Form labels and error states
- [x] Skip link

## Backlinks & Reputation (Outside Code)

- [ ] Local directory listings (accurate NAP)
- [ ] Healthcare/dental directories where legitimate
- [ ] Press/features if available
- [ ] Never buy fake backlinks or reviews

## Pre-Launch Audit Commands

```bash
npm run lint
npm run build
```

After deploy:

1. Check `https://your-domain/sitemap.xml`
2. Check `https://your-domain/robots.txt`
3. Validate structured data on homepage, one treatment, one doctor
4. Test mobile menu, AI assistant, appointment form
5. Confirm no accidental `noindex`

## Content Integrity Reminder

Never publish without clinic approval:

- Success rates or patient counts not verified
- Awards or certifications not verified
- Before/after images without consent
- Pricing not confirmed
- Medical claims implying guaranteed outcomes
