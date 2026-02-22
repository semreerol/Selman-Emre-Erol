import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base: site hem kök (user.github.io) hem alt path (user.github.io/repo-adı) ile çalışır
export default defineConfig({
  plugins: [react()],
  base: './',
})
