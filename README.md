# OsteoForge site

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

Use npm only. A `bun.lockb` in the repo makes Cloudflare run
`bun install --frozen-lockfile`, which fails if that file has drifted from
`package.json`. Bun lockfiles are gitignored for this reason.

Client-side routes fall back to `index.html` automatically on Pages because
`dist/` has no `404.html`.
