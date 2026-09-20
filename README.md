# World of Dentistry — Premium Dental Clinic Website

A premium, modern dental clinic website for World of Dentistry, Gurgaon. Built with Next.js, TypeScript, Tailwind CSS, React Three Fiber, and a responsible AI assistant.

## Live Demo

Production: [https://agent-kappa-one.vercel.app](https://agent-kappa-one.vercel.app)

GitHub: [https://github.com/vikasomu/world-of-dentistry](https://github.com/vikasomu/world-of-dentistry)

## Features

- Premium responsive design with Framer Motion animations
- Lazy-loaded Three.js hero + technology visualizations with static fallbacks
- 12 verified treatment pages + treatment index
- Doctor profiles + doctor index
- Smile Assistant AI (knowledge-base RAG, optional OpenAI)
- Appointment request flow (API-ready for booking integration)
- Blog / dental knowledge center
- Local SEO page (`/locations/gurgaon`)
- Structured data (Dentist, FAQPage, BreadcrumbList, MedicalProcedure, Physician, Article)
- SEO checklist: see `SEO_CHECKLIST.md`
- WCAG-conscious accessibility (skip link, reduced motion, focus states)
- Mobile sticky action bar (Call, WhatsApp, Book)

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- React Three Fiber + Three.js (lazy-loaded)
- React Hook Form + Zod
- Radix UI primitives

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `AI_PROVIDER` | `knowledge-base` (default) or `openai` |
| `AI_API_KEY` | Required if using OpenAI |
| `AI_MODEL` | e.g. `gpt-4o-mini` |

## Project Structure

```
app/                  # Pages, API routes, SEO files
components/           # UI, home sections, 3D, AI
data/clinic.ts        # Verified clinic content (single source of truth)
lib/ai/               # AI provider + knowledge base RAG
lib/seo/              # Metadata helpers + structured data
lib/hooks/            # useThreeEnabled, etc.
```

## SEO Setup (Post-Deploy)

The website alone does not guarantee local rankings. Google uses relevance, distance, and prominence.

1. **Google Search Console**
   - Add and verify your domain
   - Submit `https://www.worldofdentistry.co.in/sitemap.xml`
   - Inspect homepage, a treatment page, and `/locations/gurgaon`

2. **Google Business Profile**
   - Keep NAP identical to `data/clinic.ts`
   - Complete services, hours, photos, and genuine reviews
   - Link the verified website URL

3. **Monitor**
   - Core Web Vitals in Search Console
   - Structured data with Google Rich Results Test

See `SEO_CHECKLIST.md` for the full audit list.

## Content Integrity

All clinic content is sourced from verified information on the official World of Dentistry website. Before/after imagery and additional photography require clinic approval.

## Scripts

```bash
npm run dev      # Development
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint
```

## Deployment

```bash
# Requires GITHUB_TOKEN and VERCEL_TOKEN
./scripts/deploy.sh
```

Or connect the GitHub repo to Vercel for automatic deploys.

## Future Integrations

- Real booking provider (Cal.com, CRM webhook)
- Email service for contact/appointment notifications
- Analytics provider (GA4 or privacy-friendly alternative)
- CMS (Sanity, Contentful) connected to `data/clinic.ts` structure
