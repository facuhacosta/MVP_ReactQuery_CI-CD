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
      lines: 75,
      branches: 75,
      functions: 35,
      statements: 75,
      watermarks: {
        lines: [45, 95],
        functions: [45, 95],
        branches: [45, 55],
        statements: [45, 95]
      }
    }
  }
})
