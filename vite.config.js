import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Adjust if deploying to a subdirectory
  plugins: [react()],
  server: {
    port: 3000, // Change to your preferred port for development
    open: true, // Automatically open the app in the browser
    proxy: {
      '/api': 'http://localhost:5000', // Example proxy for API requests
    },
  },
  build: {
    outDir: 'dist', // Output directory for the production build
    sourcemap: true, // Enable source maps for debugging
  },
  optimizeDeps: {
    include: [], // Add dependencies to optimize if needed
  },
})
