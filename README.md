# Dr. Dhrumil Patel — Spine Surgeon Website

Next.js 15 (App Router) + TypeScript + Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/layout.tsx` — root layout, metadata, global styles
- `app/page.tsx` — single-page site (hero, about, services, conditions, testimonials, contact, footer)
- `app/globals.css` — Tailwind directives
- `next.config.mjs` — remote image patterns (Unsplash) configured for `next/image`

## Notes

- The original `gpt.js` is the source component that was ported. Once you're happy with the migration you can delete it.
- Images currently hot-link Unsplash. Replace `src` URLs with your own assets in `public/` for production.
- Phone number in the Contact section is a placeholder (`+91 XXXXX XXXXX`).
