# SYSTEM://JULIAN_GAITAN

Interactive portfolio workspace for Julian Gaitan, a Backend Engineer focused on APIs, data
workflows, automation and AI-powered technical tools.

## Run locally

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:4173`.

## Validate

```bash
npm run lint
npm run build
```

## GitHub Pages

The production build uses `/ide-portfolio/` as its base path. In the repository settings,
select **Pages → Build and deployment → Source → GitHub Actions**. The workflow in
`.github/workflows/deploy.yml` builds and deploys on pushes to `main`, and can also be
started from the Actions tab. The expected project site is
`https://gaitanjulian.github.io/ide-portfolio/`. For a custom domain or a differently
named repository, update the Vite `base` configuration accordingly.

## Architecture

- `src/data/fileRegistry.tsx`: single source of truth for portfolio files and content renderers.
- `src/data/projects.ts`: verified project descriptions and technology context.
- `src/hooks/useWorkspace.ts`: dynamic tab lifecycle.
- `src/components/TerminalPanel.tsx`: deterministic local command registry.
- `src/services/aiNavigator.ts`: curated mock AI responses, ready for a future service abstraction.

The `julian-gaitan-portfolio/` directory is a local Google AI Studio reference and is intentionally
excluded from version control.
