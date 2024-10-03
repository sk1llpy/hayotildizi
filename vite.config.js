import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Keep this for root deployment
  plugins: [react()],
  build: {
    outDir: 'build', // Nginx looks for the 'build' folder in the configuration
    sourcemap: false, // Disable source maps in production to reduce file size
  },
})
