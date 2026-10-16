# Changelog — online-delivery-app

Newest first. See [RULE-0016](../harness/rules/RULE-0016-changelog-format.md).

## 2026-10-16

### Added
- [US-0002](../context/stories/US-0002-a-visitor-sees-one-clear-api-status.md): one API status at a time, a shared API client with the [NFR-0001](../context/nfr/NFR-0001-api-requests-from-the-app-time-out.md) timeout that names a missing `VITE_API_URL`, and Tailwind CSS loaded
- Vitest, jsdom and React Testing Library ([ADR-0003](../context/adr/ADR-0003-test-the-api-with-xunit-and-the-app-with-vitest.md)), with an `npm test` script
- `AGENTS.md`, with `CLAUDE.md` linked to it, routing to the workspace harness
- Prettier, with `format` and `format:check` scripts, and every source file formatted once
- `.env.example`

### Changed
- CI can be started by hand with `workflow_dispatch`
- `.env` is no longer tracked; it may never hold a secret, since `VITE_` values ship to the browser
- The page title is "Online Delivery", and `README.md` describes this app instead of the Vite template

### Removed
- The Vite demo theme from `src/index.css`
- Unused template files: `src/App.css`, `src/assets/`, `public/icons.svg`
