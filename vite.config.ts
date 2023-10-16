/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "happy-dom",
    coverage: {
      provider: "v8",
      lines: 80,
      branches: 80,
      functions: 80,
      statements: 80
    }
  }
})
