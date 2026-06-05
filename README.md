# Ehab Solutions — Corporate Website

Premium, fully responsive corporate website for **Ehab Solutions**, a Saudi Arabian business services company.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **next-intl** (English & Arabic)

## Features

- Multi-language (EN / AR) with RTL support
- Dark mode
- Sticky header with services dropdown & consulting sub-menu
- Service detail pages with FAQ, process, and contact forms
- Business Consulting hub with 8 sub-services
- SEO: meta tags, Open Graph, structured data, sitemap
- WhatsApp floating button & scroll-to-top
- Page load animation

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to `/en`.

## Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/[locale]/          # Localized pages
├── components/            # UI, layout, sections
├── i18n/                  # Routing & i18n config
├── lib/                   # Data & utilities
messages/                  # en.json, ar.json
```

## Customize

Update contact details in `src/lib/services-data.ts`:

- Phone, email, WhatsApp
- Office address
- Social media links
- Google Maps embed URL

## License

Private — Ehab Solutions © 2026
