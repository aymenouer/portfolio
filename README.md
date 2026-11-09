# Aymen Ouerghui — Editorial Portfolio

Personal portfolio of Aymen Ouerghui, built with Angular 21 as a single editorial-style page.

## Local development

Requirements: Node 22.x and npm with network access to the npm registry.

```bash
npm install
npm start
```

Open the local URL printed by Angular CLI (normally `http://localhost:4200`).

## Production build

```bash
npm run build
```

The page is prerendered at build time (`outputMode: "static"`), so `dist/aymen-editorial-portfolio/browser/index.html` already contains the full content. Deploy that directory to any static host (Netlify, Vercel, GitHub Pages…); no server is needed.

## Structure

Domain-style layout: `feature` components read data, `ui` components only take inputs, `data-access` owns the data. The app is zoneless and its little state (menu, copy feedback) is in signals.

```
src/app/
  app.component.ts          composes nav + sections + footer, nothing else
  app.config.server.ts      build-time prerender config
  portfolio/
    data-access/            portfolio.models.ts (types), portfolio.content.{en,de}.ts (content per language),
                            portfolio.store.ts (NgRx SignalStore: current language + its content)
    feature/                one component per section: hero, about, numbers, skills, projects, manifesto, experience, contact
    ui/                     site-nav, site-footer, scene-heading, skill-row, project-card, experience-item
src/styles.css              global tokens, shared primitives (.mono, .eyebrow, .button, h2…), scroll reveal, scroll progress, counter styles
```

Each component keeps its own CSS, including its breakpoints, next to it.

- `public/assets/portrait.webp`: cutout portrait with a transparent background, shown over the hero halo.
- `public/assets/aymen-ouerghui-cv.pdf`: public résumé copy with the phone number removed. The original uploaded PDF was not modified.

## Notes

- Fonts (DM Sans, DM Mono, Instrument Serif) are self-hosted via `@fontsource` packages and bundled by the build; no requests go to Google.
- The project visuals are illustrations, not screenshots.
- The public résumé PDF has the phone number removed, and the source contains no phone number.
- Motion is decorative and respects `prefers-reduced-motion`. Scroll reveals, the progress bar/counter and the 01/02/03 numbering are pure CSS (scroll-driven animations and CSS counters), so they need no JavaScript; browsers without scroll-driven animation support show the content without the fade and hide the progress indicator.
- Before publishing: set `canonical`, `og:url` and `og:image` in `src/index.html` to absolute URLs on the final domain.

## Editing personal information

Update `src/app/portfolio/data-access/portfolio.content.en.ts` and the matching entry in `portfolio.content.de.ts`, then run the Angular build. Both files share the `Portfolio` type, so a missing translation is a compile error.

## Languages

The site is available in English and German (EN / DE switch in the nav). The choice is saved in `localStorage`; first-time visitors get German if their browser language is German. The page is prerendered in English; the store picks the visitor's language when the app boots in the browser (`withState` factory), and one `effect()` keeps `<html lang>` and the saved choice in sync. **The German text is a draft and should be proofread by a native speaker.**
