import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/visual-math-solver/',
  plugins: [react()],
})