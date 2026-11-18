import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base relativa: funciona em https://usuario.github.io/s-do-samba/ sem precisar saber o nome do repo
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
