import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Keep this for root deployment
  plugins: [react()],
  server: {
    port: 3000,
    // host: '46.101.170.250', // For development, change if necessary
    open: true, // Automatically open the app in the browser for dev
    proxy: {
      '/api': 'http://localhost:5000', // Example proxy for API requests
    },
  },
  build: {
    outDir: 'dist', // Ensure this is the output directory for production
    sourcemap: false, // Disable source maps in production
  },
  optimizeDeps: {
    include: [], // List dependencies to optimize if needed
  },
})
