import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr()
  ],
  base: '/',
  server: {
    watch: {
      usePolling: true,
      interval: 50, // checa mudanças a cada 50ms
    },
  }
})
