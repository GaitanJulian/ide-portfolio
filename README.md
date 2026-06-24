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

## Architecture

- `src/data/fileRegistry.tsx`: single source of truth for portfolio files and content renderers.
- `src/data/projects.ts`: verified project descriptions and technology context.
- `src/hooks/useWorkspace.ts`: dynamic tab lifecycle.
- `src/components/TerminalPanel.tsx`: deterministic local command registry.
- `src/services/aiNavigator.ts`: curated mock AI responses, ready for a future service abstraction.

The `julian-gaitan-portfolio/` directory is a local Google AI Studio reference and is intentionally
excluded from version control.
