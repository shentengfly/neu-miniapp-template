import { defineConfig } from 'vite'
import neu from '@neuxnet/vite-plugin-neu'
export default defineConfig({
  plugins: [
    neu()
  ],
})
