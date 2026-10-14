# Online Delivery App

Mobile-first React web application for the Online Delivery platform.

## Tech Stack
- React
- Vite
- Tailwind CSS
- React Router
- Axios

## Commands
- Install dependencies: `npm install`
- Start development server: `npm run dev`
- Build production bundle: `npm run build`

## API Integration
- Backend repository: `online-delivery-api`
- API base URL: configured using `VITE_API_URL`
- Local API URL: `http://localhost:5000`
- Use `/api/v1/...` endpoints.

## Standards
- Design mobile-first.
- Keep API calls in `src/services`.
- Use reusable components in `src/components`.
- Handle loading, error, empty, and success states.
- Do not store API keys, secrets, or provider credentials in this frontend.
- Use environment variables for all environment-specific configuration.
EOF