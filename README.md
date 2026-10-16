# Online Delivery App

Mobile-first React web app for the Online Delivery platform. It talks to the Online Delivery
API over REST, at `/api/v1/...`.

## Tech Stack
- React and Vite
- Tailwind CSS
- React Router
- Axios

## Local Development

This repository sits inside the `online-delivery` workspace, which holds the harness and the
specs. From the workspace root, `make install` and `make run-app` do the steps below.

1. Configure the API address:
   ```bash
   cp .env.example .env
   ```
   Every `VITE_` variable is built into the JavaScript the browser downloads. Never put a
   token, key or other secret here; secrets belong to the API.
2. Install and start:
   ```bash
   npm ci
   npm run dev     # http://localhost:5173
   ```

The API must be running at the address in `VITE_API_URL` (locally `http://localhost:5154`).

## Scripts

| Script | Does |
|---|---|
| `npm run dev` | Development server on port 5173 |
| `npm run build` | Production bundle in `dist/` |
| `npm run lint` | ESLint |
| `npm run format` / `format:check` | Prettier, write or check |
