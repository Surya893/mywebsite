# suryamaddula.com

The personal site of Surya Maddula, live at https://suryamaddula.com.

It is a single-page site built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui. Netlify hosts it and deploys every push to `main`.

## Requirements

- Node.js 22 (the Netlify build uses the same version; see `netlify.toml`)
- npm (the only lockfile is `package-lock.json`)

## Running locally

```sh
npm install
npm run dev
```

The dev server runs at http://localhost:8080.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server on port 8080 |
| `npm run build` | Create a production build in `dist/` |
| `npm run build:dev` | Create a development-mode build in `dist/` |
| `npm run preview` | Serve the production build from `dist/` |
| `npm test` | Run the test suite (Vitest) |
| `npm run lint` | Run ESLint |

`npm run lint` currently reports some existing errors and warnings in the shadcn/ui components and a few other files.

## Deployment

Netlify runs `npm run build` and publishes the `dist/` folder. It deploys each push to `main`, and pull requests get deploy previews. Build settings are in `netlify.toml`. The domain and HTTPS settings live in the Netlify site settings.

Unknown URLs return Netlify's 404 page. If you add client-side routes later, you will also need a single-page-app fallback: a `public/_redirects` file containing `/* /index.html 200`. That makes unknown URLs return 200, so add it only on purpose.

## Project layout

- `src/pages/Index.tsx`: the page, which renders each section
- `src/components/`: page sections and shared components
- `src/components/ui/`: shadcn/ui components
- `public/`: static files served from the site root (`favicon.ico`, `robots.txt`, `og-image.png`, `placeholder.svg`)
