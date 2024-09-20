// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',  // Adjust if deploying to a subdirectory
  plugins: [react()],
})
