# AGENTS.md — Online Delivery App

The mobile-first React web app for the online delivery platform. The harness and the artefacts
this code implements live in the workspace above this repository: start at `../AGENTS.md`.

## Tech stack

React, Vite, Tailwind CSS, React Router, Axios. JavaScript, not TypeScript.

## Commands

Run from the workspace root, or the npm script directly here.

| Task | Workspace | Here |
|---|---|---|
| Install | `make install` | `npm ci` |
| Format | `make fmt-app` | `npm run format` |
| Lint | `make lint-app` | `npm run format:check && npm run lint` |
| Build | `make build-app` | `npm run build` |
| Test | `make test-app` | `npm test`, once a runner is added |
| Run on :5173 | `make run-app` | `npm run dev` |

Install packages with `npm install --save-exact`, so `package-lock.json` pins them ([RULE-0010](../harness/rules/RULE-0010-local-development.md)).

## API integration

- The API is `../online-delivery-api`, at `http://localhost:5154` locally.
- Its base URL comes from `VITE_API_URL`. `.env` is local and never committed; `.env.example` shows the keys.
- Endpoints are `/api/v1/...`, each defined by a `SPEC` in `../context/specs/`.

## Standards

- Design mobile-first.
- API calls live in `src/services`, never in a component.
- Reusable components live in `src/components`.
- Handle loading, error, empty and success states.
- No API key, secret or provider credential in this app: everything here ships to the browser.
- Every environment-specific value comes from an environment variable.
- Comments are rare and name the artefact they implement: `// Retry once: NFR-0003.`

Every change here adds a line to `CHANGELOG.md` in the same commit.
