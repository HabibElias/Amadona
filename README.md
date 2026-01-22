## Amadoniyas Gem & Mineral World

Next.js 15 app showcasing Ethiopian gemstones, minerals, and energy resources. Includes a shared gemstone/mineral dataset, themed UI with a futuristic dark mode toggle, and cards sourced from public image assets.

### Quick start

```bash
pnpm install
pnpm run dev
# visit http://localhost:3000
```

### Project structure

- Data: `lib/gemstoneData.ts` — shared gemstone/mineral entries (images in `public/gemImages`).
- Pages: `app/page.tsx` (home), `app/catalog/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx`.
- Layout/components: `app/layout.tsx`, `app/components/Header.tsx`, `app/components/Footer.tsx`, `app/components/ThemeProvider.tsx`.
- Styles: `app/globals.css` with light/dark tokens.

### Features

- Futuristic dark/light theme toggle (header) persisted to localStorage.
- Rounded, elevated cards across catalog, home, about, and contact.
- Rich Ethiopian mineral summary on About; catalog and home pull from the shared dataset.

### Deployment

Deploy via Vercel. For a production check:

```bash
pnpm run build
pnpm start
```
