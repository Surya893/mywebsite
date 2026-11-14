# CLAUDE.md

Working notes for Claude Code in this repo (suryamaddula.com).

## Stack

- Vite 5, React 18, TypeScript, React Router 6 (`BrowserRouter`), Tailwind CSS 3, shadcn/ui, Vitest.
- A single-page site: `/` renders `src/pages/Index.tsx`. Files in `public/` are served from the site root.
- Hosted on Netlify. Node 22 (pinned in `netlify.toml`). The only lockfile is `package-lock.json`.

## Commands

- Install: `npm install`
- Dev server: `npm run dev` (http://localhost:8080)
- Build: `npm run build` (output in `dist/`)
- Preview the build: `npm run preview`
- Tests: `npm test`
- Lint: `npm run lint` (fails today on existing issues; fix those in their own PR)

## Netlify

- Build command: `npm run build`. Publish directory: `dist`. Both are also in `netlify.toml`.
- Netlify auto-deploys `main` and creates deploy previews for pull requests.
- Unknown URLs return Netlify's 404 page. Don't add a `/* /index.html 200` rule unless you are adding client-side routes on purpose, because it makes unknown URLs return 200.

## Rules

- Always work on a feature branch and open a pull request. Never commit to `main`.
- Never change existing URLs, page content, or copy unless the user asks.
- No Lovable services or dependencies.
- Ask before adding any new dependency.
- No AI co-author trailers or "Generated with" footers in commits or pull requests.
