# Aymen Ouerghui — Portfolio

**Live: [aymen-ouerghui-portfolio.vercel.app](https://aymen-ouerghui-portfolio.vercel.app)**

Personal portfolio of a Hamburg-based software engineer, built as a single editorial-style page with Angular 21. English and German, prerendered at build time, no backend.

## Tech stack

| Area | Tools |
|---|---|
| Framework | Angular 21 — standalone components, signals, zoneless change detection, new control flow (`@if` / `@for` / `@let`) |
| State | NgRx SignalStore (`@ngrx/signals` 21) for the current language and its content |
| Rendering | Build-time prerendering with `@angular/ssr` (`outputMode: "static"`) + client hydration |
| Styling | Plain CSS, component-scoped; scroll-driven animations and CSS counters instead of JS animation libraries |
| Fonts | DM Sans, DM Mono, Instrument Serif — self-hosted via `@fontsource` |
| Language | TypeScript 5.9 (strict, strict templates) |
| Hosting | Vercel — every push to `main` deploys automatically |
| Analytics | Vercel Web Analytics (cookieless page views), started in `src/main.ts` |

## Features

- **English / German** switch, remembered per visitor; first-time visitors with a German browser get German.
- **Prerendered HTML** — the full content is in the initial page, so it loads fast and is readable by search engines and link previews.
- **Scroll effects without JavaScript** — section fade-ins, the progress bar, the `000%` counter and the `01 / 02 / 03` numbering are pure CSS. Browsers without scroll-driven animations show the content without the effects.
- **Accessible and responsive** — semantic sections, keyboard-friendly menu (Esc closes it), `prefers-reduced-motion` respected, tested down to 320 px wide.

## Getting started

Requirements: Node 22 and npm.

```bash
npm install
npm start        # dev server on http://localhost:4200
npm run build    # production build + prerender → dist/aymen-editorial-portfolio/browser
```

## Project structure

Domain-style layout: `feature` components read data, `ui` components only take inputs, `data-access` owns the data.

```
src/app/
  app.component.ts           composes nav + sections + footer
  app.config.server.ts       build-time prerender config
  portfolio/
    data-access/
      portfolio.models.ts            types
      portfolio.content.en.ts        English content (CV data + all UI text)
      portfolio.content.de.ts        German content
      portfolio.store.ts             SignalStore: current language + its content
    feature/                 one component per section: hero, about, numbers, skills, projects, manifesto, experience, contact
    ui/                      site-nav, site-footer, scene-heading, skill-row, project-card, experience-item
src/styles.css               design tokens, shared primitives, scroll reveal, scroll progress, counter styles
public/assets/               portrait and public CV (phone number removed)
```

Each component keeps its own CSS, including its breakpoints, next to it.

## Editing content

All text lives in `src/app/portfolio/data-access/portfolio.content.en.ts` and `portfolio.content.de.ts`. Both files share the `Portfolio` type, so a missing translation is a compile error. Push to `main` and Vercel redeploys.

## Notes

- The project visuals are illustrations, not screenshots.
- The public CV PDF has the phone number removed, and the source contains no phone number.
- The German text is a draft and should be proofread by a native speaker.
