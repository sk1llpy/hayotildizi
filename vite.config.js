// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',  // Adjust if deploying to a subdirectory
  plugins: [react()],
  build: {
    outDir: 'dist',  // Default directory for build output
    rollupOptions: {
      // Adjust these options if you want more control over build outputs
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
})
