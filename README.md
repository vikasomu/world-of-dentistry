# World of Dentistry — Premium Dental Clinic Website

A premium, modern dental clinic website for World of Dentistry, Gurgaon. Built with Next.js, TypeScript, Tailwind CSS, and a responsible AI assistant.

## Features

- Premium responsive design with Framer Motion animations
- 12 verified treatment pages with dynamic routing
- Doctor profile pages with verified credentials
- Smile Assistant AI chat with knowledge-base RAG architecture
- Appointment request flow (API-ready for booking integration)
- Blog / dental knowledge center
- SEO optimized with structured data, sitemap, and robots.txt
- WCAG-conscious accessibility patterns
- Mobile sticky action bar (Call, WhatsApp, Book)

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
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

The AI assistant works out of the box using the built-in knowledge base. To enable OpenAI:

```
AI_PROVIDER=openai
AI_API_KEY=your-key
AI_MODEL=gpt-4o-mini
```

## Project Structure

```
app/                  # Next.js App Router pages and API routes
components/           # Reusable UI and section components
data/clinic.ts        # Verified clinic content (single source of truth)
lib/ai/               # AI provider abstraction and knowledge base
lib/validation/       # Zod schemas
types/                # TypeScript interfaces
```

## Content Integrity

All clinic-specific content is sourced from verified information on the official World of Dentistry website. Content requiring clinic approval is marked in `data/clinic.ts`.

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## Future Integrations

See TODO comments in API routes for:
- Real booking provider (Cal.com, CRM webhook)
- Email service for contact forms
- Analytics provider
- CMS connection (Sanity, Contentful)
