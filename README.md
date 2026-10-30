# OsteoForge website

Marketing site for OsteoForge. Vite + React + TypeScript + Tailwind.

```sh
npm ci
npm run dev      # local dev server
npm run build    # production build into dist/
npm run lint
npm test
```

## Deploying to Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Node 22.23.4, pinned in `.node-version` (Vite 8 needs 22.12+)

Client-side routes like `/about` fall back to `index.html` automatically
because `dist/` has no top-level `404.html`. Don't add one, or direct loads of
app routes will 404.

Use npm only. A `bun.lockb` in the repo makes Cloudflare run
`bun install --frozen-lockfile`, which fails if that file has drifted from
`package.json`. Bun lockfiles are gitignored for this reason.
