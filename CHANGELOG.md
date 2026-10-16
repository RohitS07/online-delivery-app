# Changelog — online-delivery-app

Newest first. See [RULE-0016](../harness/rules/RULE-0016-changelog-format.md).

## 2026-10-16

### Added
- `AGENTS.md`, with `CLAUDE.md` linked to it, routing to the workspace harness
- Prettier, with `format` and `format:check` scripts, and every source file formatted once
- `.env.example`

### Changed
- `.env` is no longer tracked; it may never hold a secret, since `VITE_` values ship to the browser
- The page title is "Online Delivery", and `README.md` describes this app instead of the Vite template

### Removed
- Unused template files: `src/App.css`, `src/assets/`, `public/icons.svg`
