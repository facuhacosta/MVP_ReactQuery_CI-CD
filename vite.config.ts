/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/MVP_ReactQuery_CI-CD",
  test: {
    environment: "happy-dom",
    coverage: {
      provider: "v8",
      lines: 35,
      branches: 35,
      functions: 35,
      statements: 35,
      watermarks: {
        lines: [45, 95],
        functions: [45, 95],
        branches: [45, 95],
        statements: [45, 95]
      }
    }
  }
})
