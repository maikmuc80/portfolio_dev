# Portfolio — Maik Radke

Personal portfolio site built with Angular 22 (standalone components, zoneless
change detection). The design follows the Developer Akademie Figma template,
implemented for mobile and desktop.

## Getting started

```bash
npm install
npm start
```

The dev server runs on `http://localhost:4200/`.

## Scripts

| Command | What it does |
| --- | --- |
| `npm start` | Dev server with live reload |
| `npm run build` | Production build into `dist/portfolio_dev/` |
| `npm test` | Unit tests (Vitest) |

## Structure

```
src/
├── app/
│   ├── components/   header and footer, present on every page
│   ├── core/         i18n dictionary, translation service, portfolio content
│   ├── pages/        home, legal notice, privacy policy
│   └── sections/     hero, about, skills, portfolio, references, contact
├── styles/           shared SCSS tokens and mixins
└── styles.scss       design tokens, reset, recurring building blocks
```

## Content

All visible text lives in `src/app/core/i18n.ts` in German and English. The
English keys are typed against the German ones, so a missing translation is a
compile error. Everything language independent — names, image paths, links —
lives in `src/app/core/portfolio-data.ts`.

## Deployment

The build output in `dist/portfolio_dev/browser/` is static and can be uploaded
as is. The contact form posts to `sendMail.php` in the web root, so that script
has to sit next to `index.html` on the server.
