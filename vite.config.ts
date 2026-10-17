import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    strictPort: true,
  },
  // Vitest with React Testing Library in jsdom: ADR-0003.
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    unstubEnvs: true,
    unstubGlobals: true,
  },
})
