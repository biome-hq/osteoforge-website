# OsteoForge site

Marketing site for OsteoForge. Vite + React + TypeScript + Tailwind.

```sh
npm ci
npm run dev      # local dev server
npm run build    # production build into dist/
npm run lint
npm test
```

## Deploying to Cloudflare Workers

Workers Builds runs `npm run build`, then `npx wrangler deploy`, which reads
`wrangler.jsonc` and uploads `dist/` as static assets.

- Node 22.23.4, pinned in `.node-version` (Vite 8 needs 22.12+)
- `wrangler.jsonc` sets `not_found_handling: "single-page-application"`, so a
  direct load of `/about` serves `index.html` instead of a 404. Without the
  file, wrangler tries to auto-configure the Vite project during the build.

Use npm only. A `bun.lockb` in the repo makes Cloudflare run
`bun install --frozen-lockfile`, which fails if that file has drifted from
`package.json`. Bun lockfiles are gitignored for this reason.
